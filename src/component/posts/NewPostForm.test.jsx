import NewPostForm from "./NewPostForm";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";


describe('New Post Form renders', () => {
    test('Form have a button', () => {
        render(<NewPostForm/>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    test('Form have lable ', () => {
        render(<NewPostForm/>)
        expect(screen.getByText(/Post Title/, /Post Description/)).toBeInTheDocument()
    })
})