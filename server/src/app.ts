import express, {Application} from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import 'dotenv/config'

const app: Application = express()
app.use(express.json())
app.use(helmet())
app.use(cors({
    origin: process.env.ORIGIN || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(morgan('common'))

export default app