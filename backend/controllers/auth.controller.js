import User from '../models/user.model.js'

export const signup = async (req, res) => {
    const { email, password, name } = req.body
    if (!email || !password || !name) {
        return res.status(400).json({ success: false, message: "All fields are required." })
    }

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists." })
        }
        const newUser = new User({ email, password, name })
        await newUser.save()
        res.status(201).json({ success: true, message: "User created successfully." })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }


}

export const login = async (req, res) => {

}

export const logout = async (req, res) => {

}