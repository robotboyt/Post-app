import AllPostsPage from "./AllPosts";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";


describe('All posts component', () => {
    test('All post renders', () => {
        render(<AllPostsPage/>)
        expect(screen.getByText(/All Posts/)).toBeInTheDocument()
    })
    
    test('All post have a search', () => {
        render(<AllPostsPage/>)
        expect(screen.getByRole('searchbox')).toBeInTheDocument()
    })
})

