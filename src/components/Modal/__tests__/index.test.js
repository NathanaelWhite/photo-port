import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park Bench',
    category: 'landscape',
    description: 'a bunch of words the describe the photo you looking at fool',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    
    it('renders', () => {
        render (<Modal 
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render (<Modal 
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />)
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('click event', () => {
    it('calls onClsoe handler', () => {
        // Arrange: render modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));
        // Assert: expect matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})

