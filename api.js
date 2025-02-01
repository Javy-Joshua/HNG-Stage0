const express = require("express")
const app =  express()
const Henny = require('./db')

const port = 3000


app.get("/home", (req, res) => {
    console.log("we home")
})

app.get("/api", (req, res) => {
    const currentDateTime = new Date().toISOString()

    const details = {
      email: Henny.Henny.registeredEmail,
      current_datetime: currentDateTime,
      github_url: Henny.Henny.githubUrl,
    };

    
    console.log(details);

    return res.status(200).json({
        message: "details created",
        details 
    })

})


app.get('*', (req, res) => {
    return res.status(404).json({
        data: null,
        error: "Route not found"
    })
})



app.listen(port, ()=> { 
    console.log(`We are listening to port:${port}`)
})
