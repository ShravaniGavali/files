const http = require("http")


http.createServer((req, res) =>{

    console.log("pathname:", req.url)
    console.log("method:", req.method)

    if (req.url == "/users") {
        if(req.method == "GET"){
            res.write("User Information")
        }
        if(req.method == "POST"){
            res.write("User Information Created")
        }
        
       return res.end()
    }

    res.write("Hello world")
    res.end()

})
.listen(8000)