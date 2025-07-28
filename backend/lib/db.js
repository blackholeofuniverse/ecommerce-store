import mongoose from "mongoose"

export const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected to: ${conn.connection.name}`)
    } catch (error) {
        console.log('Error connecting to the Database', error.message)
        process.exit(1)
    }
} 