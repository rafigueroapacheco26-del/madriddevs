import express from "express"

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, (error) => {
  if (error) return console.log(error)
  console.log(`Server running on http://localhost:${PORT}`)
})