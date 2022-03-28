const express = require("express")
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json())

app.post('/feedback', async (req, res) => {
    try{
        const { name, email, text } = req.body;
        const newMessage = await pool.query("INSERT INTO mess (name, email, text) VALUES($1, $2, $3) RETURNING *", [name, email, text])
        res.json(newMessage.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/allfeedback', async (req, res) => {
    try {
        const allMessages = await pool.query("SELECT * FROM mess")
        res.json(allMessages.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get('/allfeedback/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const message = await pool.query("SELECT * FROM mess WHERE mess_id = $1", [id])
        res.json(message.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(7000, () => {
    console.log("server has started on port 7000")
})