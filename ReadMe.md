# JavaScript Challenge: Arrow Functions, Filter, String Manipulation, and Map

### Challenge Description

You have an array of objects where each object represents a product. Each product has a `name` (string), `category` (string), and `price` (number). Your task is to write a JavaScript function using **arrow functions**, **filter**, **map**, and **string manipulation** to achieve the following:

1. **Filter** the products that are in the category "electronics".
2. **Convert** the names of the filtered products to uppercase using string manipulation.
3. **Map** the filtered products to an array of just their names (in uppercase).
4. Return the final array of names.

### Example Input

```javascript
const products = [
  { name: 'Laptop', category: 'electronics', price: 1200 },
  { name: 'Shoes', category: 'fashion', price: 100 },
  { name: 'Smartphone', category: 'electronics', price: 800 },
  { name: 'Book', category: 'stationery', price: 20 }
];
