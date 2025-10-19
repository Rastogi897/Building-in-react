let response = [
    {
        name: "tushar",
        age: 12,
        password: "tusharrstg"
    },
    {
        name: "Rastogi",
        age: 21,
        password: "rstg"
    },
]

// Filter out keys from an array of object
let filteredResponse =
    response.map((response) =>
        Object.keys(response)
            .filter((key) => key != "password")
            .reduce((acc, key) => {
                acc[key] = response[key]
                return acc
            }, {}))


// Filter out values of a specific keys (name)
let names = response.map((data) => data["name"])


// find a object by value
let z = response.find(data => data.name = "Tushar")


// name of all the users eligible to vote
let votingUser =
    response
        .filter((data) => data.age > 18)
        .map(data => data.name)