import express from 'express'
import {fullBase,tickets} from './routes/index.js'
import cors from 'cors'

const app = express()
const PORT = 3080

app.use(cors())
app.get('/',fullBase)
app.get('/tickets',tickets)


app.listen(PORT)
console.log(`listening on port ${PORT}`)