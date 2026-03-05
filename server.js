const express = require("express")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.static("."))

let attempts = 0

const correctUser = "admin"
const correctPass = "password123"

app.post("/login",(req,res)=>{

const user = req.body.username
const pass = req.body.password

if(user === correctUser && pass === correctPass){

attempts = 0
res.redirect("/dashboard.html")

}
else{

attempts++

if(attempts >= 5){
res.send("Brute Force Attack Detected - Too many login attempts")
}
else{
res.send("Wrong Username or Password")
}

}

})

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000")
})