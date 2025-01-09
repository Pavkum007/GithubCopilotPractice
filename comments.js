// Create Web Server
// npm install express
const express = require('express')
const app = express()
const port = 3000

// Use middleware to parse JSON
app.use(express.json())

// Use middleware to parse URL encoded data
app.use(express.urlencoded({extended: true}))

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Create a route that accepts a parameter
app.get('/:name', (req, res) => {
  res.send('Hello ' + req.params.name)
})

// Create a route that accepts a query parameter
app.get('/query', (req, res) => {
  res.send('Hello ' + req.query.name)
})

// Create a route that accepts a POST request
app.post('/post', (req, res) => {
  res.send('Hello ' + req.body.name)
})

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
