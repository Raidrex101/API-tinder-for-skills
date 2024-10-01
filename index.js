const express = require('express') // importar express
const path = require('path')

// importar las rutas de mis vistas
const usersRoutes = require('./routes/userRoutes')

const app = express() // inicializar express

const PORT = process.env.PORT || 3000

app.use(express.json()) // para que express entienda json
// rutas definidas para la aplicacion
app.use('/api/v1', usersRoutes)

app.get('/', (req, res) => { // las rutas de mi servidor
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`)
}) // puerto de mi servidor para escuchar las peticiones
