import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { chats } from './data/data.js'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello there!')
})

app.get('/api/chats', (req, res) => {
    res.send(chats);
})

app.get('/api/chats/:id', (req, res) => {
    res.send(chats.find((c) => c._id === req.params.id));
})

const PORT = process.env.PORT || 7000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));