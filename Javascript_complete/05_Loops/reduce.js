const array1 = [1, 2, 3, 4];

// Calculate the sum starting from 0
const initialValue = 0;

const sum = array1.reduce(
  (accumulator, value) => accumulator + value,
  initialValue
);

console.log(sum); // Output: 10


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);