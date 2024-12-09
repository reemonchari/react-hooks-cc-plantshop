import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('2nd Deliverable', () => {
    test('adds a new plant when the form is submitted', async () => {
        global.setFetchResponse(global.basePlants)
        const { getByPlaceholderText, findByText, getByText } = render(<App />)

        const firstPlant = {name: 'foo', image: 'foo_plant_image_url', price: '10'}
    
        global.setFetchResponse(firstPlant)
        const nameInputs = screen.getAllByPlaceholderText('Plant name');
        fireEvent.change(nameInputs[0], { target: { value: firstPlant.name } });
        const imageInputs = screen.getAllByPlaceholderText('Image URL');
        fireEvent.change(imageInputs[0], { target: { value: firstPlant.image } })
        const priceInputs = screen.getAllByPlaceholderText('Price');
        fireEvent.change(priceInputs[0], { target: { value: firstPlant.price } })
        fireEvent.click(screen.getAllByText('Add Plant')[0])

        expect(fetch).toHaveBeenCalledWith("http://localhost:6001/plants", {
            method: "POST",
            headers: {
              "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(firstPlant),
        })
    
        const newPlant = await findByText('foo');
        expect(newPlant).toBeInTheDocument();

        const secondPlant = {name: 'bar', image: 'bar_plant_image_url', price: '5'}
    
        global.setFetchResponse(secondPlant)
    
        fireEvent.change(nameInputs[0], { target: { value: secondPlant.name } });
        fireEvent.change(imageInputs[0], { target: { value: secondPlant.image } })
        fireEvent.change(priceInputs[0], { target: { value: secondPlant.price } })
        fireEvent.click(screen.getAllByText('Add Plant')[0])
    
        expect(fetch).toHaveBeenCalledWith("http://localhost:6001/plants", {
            method: "POST",
            headers: {
              "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(secondPlant),
        })

        const nextPlant = await findByText('bar');
        expect(nextPlant).toBeInTheDocument();
    });
})