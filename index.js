const express = require('express') // importar express

const app = express() // inicializar express

app.use(express.json()) //para que express entienda json

app.get('/', (req, res) => {  //las rutas de mi servidor
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server runing on http://localhost:3000')
}) //puerto de mi servidor para escuchar las peticiones
