import express from 'express'
import devs from './data/devs.json' with { type: 'json' }
import path from 'path'

const PORT = 3000
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
// Servir los archivos de Bootstrap como estáticos
app.use('/css/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/devs', (req, res) => {
  res.render('devs/index', { devs })
})

app.get('/devs/:id', (req, res) => {
  let dev = devs.find((dev) => dev.id == req.params.id)
  if (!dev)
    return res.status(404).send('Desarrollador no encontrado')
  res.render('devs/show', { dev })
})

app.listen(PORT, (error) => {
  if (error) return console.log(error)
  console.log(`Server running on http://localhost:${PORT}`)
})