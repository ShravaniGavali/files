const fs = require("fs");

const dummyObj = {
    "name":"John",
    "age":25
}

fs.writeFile("result.json", JSON.stringify(dummyObj), (error, data) => {
    console.log("error:", error)
})