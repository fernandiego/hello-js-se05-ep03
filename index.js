const express = require("express")
const app = express()
const axios = require("axios")
const baseURL = "https://api.github.com"
const api = axios.create({ baseURL })


app.get("/hello", (req, res) => {
    console.log(req.query)
    res.send("Hello, %s!!!" + req.query.name)
})

app.get("/hello/:id", (req, res) => {
    console.log(req.params)
    res.send(`Hello, ${req.query.name}!!!, id=${req.params.id}`)
})

app.get("/stalkers", (req, res) => {
    api.get("/users/sombriks/followers").then(ret => res.send(ret.data))
})

app.get("/stalkers/:user", (req, res) => {
    api.get(`/users/${req.params.user}/followers`).then(ret => res.send(ret.data))
})


app.listen(3000)
console.log("server online!")