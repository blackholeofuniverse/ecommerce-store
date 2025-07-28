import express from "express";
const app = express()

const PORT = 5001;

app.get('/', (req, res) => {
    res.send("server is up and running")
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
