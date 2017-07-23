const express = require('express')
const path = require('path')

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

// Put all API endpoints under '/api'
app.get('/page', function(req, res) {
  const page = {
    hey: 'hi',
  }
  res.json(page)
  console.log('returning page')
})

const port = process.env.PORT || 3000

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})
