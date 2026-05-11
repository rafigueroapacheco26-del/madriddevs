import express from "express"

const PORT = 3000
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, (error) => {
  if (error) return console.log(error)
  console.log(`Server running on http://localhost:${PORT}`)
})