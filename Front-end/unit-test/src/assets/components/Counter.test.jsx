import { describe, it, expect, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "./Counter"


// พูดถึง test ของ component นั้นๆ
describe("test Counter component", () => {
    //เราจะทำอะไรก่อนในการ run test
    beforeEach(() => {
        render(<Counter />)
    })
    it('sholud render counter', () => {
        // getBytext คือ การหาคำ 
        expect(screen.getByText(/Counter:/)).toBeInTheDocument()
    })

    it('increments counter', () => {
        fireEvent.click(screen.getByText('Increment'))
        expect(screen.getByText("Counter: 1")).toBeInTheDocument()
    })
    it('decrements  counter', () => {
        fireEvent.click(screen.getByText('Decrement'))
        expect(screen.getByText("Counter: -1")).toBeInTheDocument()
    })
})

