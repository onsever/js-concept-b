import React from "react";

export default function App() {
    const products = [
        { name: "Armour", price: 3.99, quantity: 2 },
        { name: "Sword", price: 4.99, quantity: 1 },
        { name: "Shield", price: 7.99, quantity: 3 },
    ];

    const calculateTotalPrice = (product) => {
        return product.price * product.quantity;
    }

    const printProductInfo = (product) => {
        console.log(`Product: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}, Total Price: ${calculateTotalPrice(product)}`);
    }

    products.forEach(printProductInfo);

    return <h1>Hello World</h1>
}
