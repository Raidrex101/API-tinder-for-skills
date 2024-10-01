const express = require('express') // importar express
const path = require('path')

const app = express() // inicializar express

const PORT = process.env.PORT || 3000

app.use(express.json()) // para que express entienda json

app.get('/', (req, res) => { // las rutas de mi servidor
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`)
}) // puerto de mi servidor para escuchar las peticiones
