export function generateOrder() {
    const items = Array.from(
        {length: 1},
        () => ({
            description: "Windows Licence",
            quantity: "10",
            cost: "149.99",
        })
    );
}

return {
    id: S001,
    date: new Date(date).toLocaleDateString(),
    name: "Tobias Nes",
    items,
    total: items.reduce((acc, { cost }) => acc + parseFloat(cost), 0),
};
