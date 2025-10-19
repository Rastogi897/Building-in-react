const users = [
    { name: "Tushar", age: 23, country: "India", isActive: true },
    { name: "Sam", age: 30, country: "USA", isActive: false },
    { name: "Neha", age: 21, country: "India", isActive: true },
    { name: "Ravi", age: 35, country: "USA", isActive: true },
    { name: "Sara", age: 28, country: "India", isActive: false },
];

const isActives =
    users
        .filter((data) => data.isActive == true)
        .reduce((acc, data) => {
            if (acc[data.country]) {
                acc[data.country].push(data.name)
            } else {
                acc[data.country] = [data.name]
            }
            return acc;
        }, {})

console.log(isActives)

// Expected Output
// {
//   India: ["Neha", "Tushar"],
//   USA: ["Ravi"]
// }