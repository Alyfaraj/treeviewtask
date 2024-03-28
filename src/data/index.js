import { generateRandomId } from "../utils";

export const mockData = {
    id: generateRandomId(),
    name: 'Products',
    children: [
        {
            id: generateRandomId(),
            name: 'Mobile Phones',
            children: [
                {
                    id: generateRandomId(),
                    name: 'Apple',
                    children: [
                        { id: generateRandomId(), name: 'iPhone 15', children: [{ id: generateRandomId(), name: '256 GB' }, { id: generateRandomId(), name: '512 GB' }] },
                        { id: generateRandomId(), name: 'iPhone 14 pro', children: [{ id: generateRandomId(), name: '128 GB' }, { id: generateRandomId(), name: '256 GB' }] },
                    ],
                },
                {
                    id: generateRandomId(),
                    name: 'Samsung',
                    children: [
                        { id: generateRandomId(), name: 'Galaxy S10', children: [{ id: generateRandomId(), name: '128 GB' }, { id: generateRandomId(), name: '256 GB' }] },
                        { id: generateRandomId(), name: 'Galaxy S20', children: [{ id: generateRandomId(), name: '128 GB' }, { id: generateRandomId(), name: '256 GB' }] },
                    ],
                },
            ],
        },
        {
            id: generateRandomId(),
            name: 'Watches',
            children: [
                {
                    id: generateRandomId(),
                    name: 'Apple Watch',
                    children: [{ id: generateRandomId(), name: 'Series 6', children: [{ id: generateRandomId(), name: '40 mm' }, { id: generateRandomId(), name: '44 mm' }] }],
                },
                {
                    id: generateRandomId(),
                    name: 'Samsung Galaxy Watch',
                    children: [{ id: generateRandomId(), name: 'Active 2', children: [{ id: generateRandomId(), name: '40 mm' }, { id: generateRandomId(), name: '44 mm' }] }],
                },
            ],
        },
        {
            id: generateRandomId(),
            name: 'TVs',
            children: [
                {
                    id: generateRandomId(),
                    name: 'Apple TV',
                },
                {
                    id: generateRandomId(),
                    name: 'Samsung TV',
                },
            ],
        },
        {
            id: generateRandomId(),
            name: 'Laptops',
            children: [
                {
                    id: generateRandomId(),
                    name: 'Mac',
                    children: [{ id: generateRandomId(), name: 'MacBook Pro' }, { id: generateRandomId(), name: 'MacBook Air' }],

                },
                {
                    id: generateRandomId(),
                    name: 'Dell',
                },
                {
                    id: generateRandomId(),
                    name: 'HP',
                },
            ],
        },
    ],
};