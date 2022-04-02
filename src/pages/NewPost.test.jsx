import NewPostPage from "./NewPost";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";


test('New Post page render', () => {
    render(<NewPostPage/>)
    expect(screen.getByText(/New Post/)).toBeInTheDocument()
})