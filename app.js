import express from 'express'
import bodyParser from 'body-parser'
import config from './config/index.js'
const app = express()

//middlewares
app.use(bodyParser.json())

//routes
app.get('/', (req, res) => {
    res.send('Hello')
  })
//app.use(routes)

//server

app.listen(config.PORT,()=>{
     console.log(`App listening on http://${config.HOST}:${config.PORT}`);
})