import { faker } from '@faker-js/faker';

export function generateFakeOrder() {
    const items = Array.from(
        {length: faker.number.int({min: 1, max: 5})},
        () => ({
            description: faker.commerce.productName(),
            quantity: faker.number.int({min: 5, max: 5}),
            cost: faker.commerce.price(),
        })
    );

    return {
        id: S001,
        date: new Date(date).toLocaleDateString(),
        name: "Tobias Nes",
        items,
        total: items.reduce((acc, {cost}) => acc + parseFloat(cost), 0),
    };
}
