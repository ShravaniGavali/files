const http = require("http")

const URL = "http://jsonplaceholder.typicode.com/users"

http.get(URL, (response) => {

    console.log("status: " , response.statusCode)

    response.on("end", () => {
        console.log("request ended")
    })
})