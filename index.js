const express = require('express') // importar express

const app = express() // inicializar express

const PORT = process.env.PORT || 3000

app.use(express.json()) //para que express entienda json

app.get('/', (req, res) => {  //las rutas de mi servidor
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server runing on http://localhost:${PORT}`)
}) //puerto de mi servidor para escuchar las peticiones
