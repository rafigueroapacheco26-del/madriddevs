import express from 'express'
import devs from './data/devs.json' with { type: 'json' }
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import expressLayouts from 'express-ejs-layouts'

const PORT = 3000
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
// Servir los archivos de Bootstrap como estáticos
app.use('/css/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
//Usar express-ejs-layouts
app.use(expressLayouts)
app.set('layout', 'layouts/default-layout');
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)
app.set("layout extractMetas", true)


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/devs', (req, res) => {
  res.render('devs/index', { title: 'Desarrolladores', devs })
})

app.get('/devs/:id', (req, res) => {
  let dev = devs.find((dev) => dev.id == req.params.id)
  if (!dev)
    return res.status(404).send('Desarrollador no encontrado')
  res.render('devs/show', { title: `Desarrollador ${dev.nombre}`, dev })
})

app.listen(PORT, (error) => {
  if (error) return console.log(error)
  console.log(`Server running on http://localhost:${PORT}`)
})