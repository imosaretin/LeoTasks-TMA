import { connectDB } from "./db/db";
import  express  from "express";
import dotenv from 'dotenv'
import authRoutes from "./routes/authRoutes"
dotenv.config()


const app = express ()
const port = process.env.PORT || 5000
app.use(express.json())

connectDB()

app.get('/', (req,res) => {
    res.send('Task Manager Server is Live')
})

app.use('/api/auth', authRoutes)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
    
})