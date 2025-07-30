import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.route.js"
import { connectToDB } from "./lib/db.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT
app.use(express.json())

// For Authentication
app.use('/api/auth', authRoutes)


// For checking the health status
app.get('/', (_req, res) => {
    res.json({ success: true, message: "Server is up and running." })
})


app.listen(PORT, () => {
    connectToDB()
    console.log(`Server is running at http://localhost:${PORT}`)
})
