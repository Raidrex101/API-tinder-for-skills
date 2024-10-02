const express = require('express') // importar express
const path = require('path') // importar path para manejar archivos estaticos

// importar las rutas de mis vistas
const usersRoutes = require('./routes/userRoutes')
const skillsRoutes = require('./routes/skillsRoutes')
const personSkillsRoutes = require('./routes/personSkillsRoutes')

const app = express() // inicializar express

const PORT = process.env.PORT || 3000

app.use(express.json()) // para que express entienda json
// rutas definidas para la aplicacion
app.use('/api/v1', usersRoutes)
app.use('/api/v1', skillsRoutes)
app.use('/api/v1', personSkillsRoutes)

app.use(express.static(path.join(__dirname, 'public'))) // para que express entienda archivos estaticos como css

app.get('/', (req, res) => { // las rutas de mi servidor
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`)
}) // puerto de mi servidor para escuchar las peticiones
