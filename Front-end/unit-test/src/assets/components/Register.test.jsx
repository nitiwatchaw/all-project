import { describe, it, expect, vi } from "vitest"
import { render, fireEvent, waitFor } from "@testing-library/react"
import RegisterForm from "./RegisterForm"
import axios from "axios"

// Mock axios to avoid real API calls
vi.mock("axios")

describe("App component", () => {
  beforeAll(() => {
    // Mock window.alert
    global.window.alert = vi.fn()
  })



  //check render component
  it("renders the form", () => {
    const { getByLabelText, getByText } = render(<RegisterForm />)
    // i คือ เป็นตัว Uppercase | Lowercase ก็ได้ 
    expect(getByLabelText(/name/i)).toBeInTheDocument()
    expect(getByLabelText(/email/i)).toBeInTheDocument()
    expect(getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(getByText(/submit/i)).toBeInTheDocument()
  })




  //check validate error
  it("shows validation errors", () => {
    const { getByText, getByLabelText } = render(<RegisterForm />)

    fireEvent.click(getByText(/submit/i))

    expect(getByText(/name is required/i)).toBeInTheDocument()
    expect(getByText(/email is required/i)).toBeInTheDocument()
    expect(getByText(/phone number is required/i)).toBeInTheDocument()


    // Simulate entering an invalid phone number
    fireEvent.change(getByLabelText(/phone number/i), { target: { value: '123' } })
    fireEvent.click(getByText(/submit/i))

    // Check for the specific phone number validation error
    expect(getByText(/Invalid phone number, should be 10 digits/i)).toBeInTheDocument()



  })


  //show error emails
  it("shows validation email format errors", () => {
    const { getByLabelText, getByText } = render(<RegisterForm />)

    fireEvent.change(getByLabelText(/name/i), { target: { value: "John Doe" } })
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "johndoe@example" },
    })
    fireEvent.change(getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    })

    fireEvent.click(getByText(/submit/i))

    expect(getByText(/email is invalid/i)).toBeInTheDocument()
  })

  //check sumbit successfull
  it("submits form successfully", async () => {
    const { getByLabelText, getByText } = render(<RegisterForm />)
    const mockResponse = {
      data: {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        phoneNumber: "1234567890",
      },
    }
    axios.post.mockResolvedValue(mockResponse)
    fireEvent.change(getByLabelText(/name/i), { target: { value: "John Doe" } })
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "johndoe@example.com" },
    })
    fireEvent.change(getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    })

    fireEvent.click(getByText(/submit/i))

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "https://65b86c8246324d531d562e79.mockapi.io/users",
        {
          name: "John Doe",
          email: "johndoe@example.com",
          phoneNumber: "1234567890",
        }
      )
    })


  })

  it('handles API failure without problems and still renders', async () => {
    const mockErrorResponse = { data: null }  // Mocking an error response
    axios.post.mockResolvedValue(mockErrorResponse)

    const { getByLabelText, getByText } = render(<RegisterForm />)

    fireEvent.change(getByLabelText(/name/i), { target: { value: "John Doe" } })
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "johndoe@example.com" },
    })
    fireEvent.change(getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    })

    try {
      fireEvent.click(getByText(/submit/i))
      await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith(
          "https://65b86c8246324d531d562e79.mockapi.io/users",
          {
            name: "John Doe",
            email: "johndoe@example.com",
            phoneNumber: "1234567890",
          }
        )
      })
    } catch (error) {
      // Check if the error message matches the expected error
      expect(error.message).toBe("Error in form submission")
    }


  })
  
})





