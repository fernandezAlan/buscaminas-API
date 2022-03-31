import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
const app = express()

//middlewares
app.use(bodyParser.json())
app.use(morgan('dev'))


//routes
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
//app.use(routes)

//server

app.listen(3000,()=>{
    console.log('server on port 3000')
})