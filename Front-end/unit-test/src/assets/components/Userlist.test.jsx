import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor, fireEvent, getByPlaceholderText } from '@testing-library/react'
import axios from 'axios'
import UserList from './Userlist'

// mock dependencies ที่ใช้งานด้วย
vi.mock('axios')


describe('UserList component', () => {
    const mockUsers = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            phoneNumber: '1234567890',
        },
        {
            id: '2',
            name: 'Jane Doe',
            email: 'jane@example.com',
            phoneNumber: '0987654321',
        },
    ]

    // check the api data is match with the ui data
    it('renders the table successfully when API call succeeds', async () => {
        axios.get.mockResolvedValue({ data: mockUsers })
        render(<UserList />)

        await waitFor(() => {
            expect(screen.getByText('John Doe')).toBeInTheDocument()
            expect(screen.getByText('jane@example.com')).toBeInTheDocument()
        })
    });


    // search data
    it('filter users based on search input', async () => {
        axios.get.mockResolvedValue({ data: mockUsers })
        render(<UserList />)

        await waitFor(() => {
            // change = track input ||  taget= ค่าที่พิมพ์ในinput
            fireEvent.change(screen.getByPlaceholderText('Search by name or email'), {
                target: { value: 'John' }
            })
            //ถ้าหา John จะต้องเจอ John Doe และไม่เจอ Jane Doe
            expect(screen.getByText('John Doe')).toBeInTheDocument();
            expect(screen.queryByText('Jane Doe')).not.toBeInTheDocument();
        })
    })

    // check error api 
    it('handles API failure without problems and still renders', async () => {
        axios.get.mockRejectedValue(new Error('API call failed'))

        // มีการเรียก console.error ไหม
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { })
        render(<UserList />)

        await waitFor(() => {
            // ถูกเรียกจริงไหม
            expect(consoleSpy).toHaveBeenCalledWith(
                'Error fetching users:',
                expect.any(Error)
            )
            // ตัวinput ยังสามารถใช้งานได้เหมือนเดิมใช่ไหม
            expect(
                screen.getByPlaceholderText('Search by name or email')
            ).toBeInTheDocument()
            consoleSpy.mockRestore()
        })
    })

})