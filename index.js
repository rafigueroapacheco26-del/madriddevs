import express from "express"
import devs from "./data/devs.json" with { type: "json" }

const PORT = 3000
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/devs', (req, res) => {
  res.render('devs/index', { devs })
})

app.listen(PORT, (error) => {
  if (error) return console.log(error)
  console.log(`Server running on http://localhost:${PORT}`)
})