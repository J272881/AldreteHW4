const r = Number(prompt("Enter the circle radius:"));

const circle = {
    circumference: (r * 2 * Math.PI),
    area: (r**2) * Math.PI,
};

console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`);
