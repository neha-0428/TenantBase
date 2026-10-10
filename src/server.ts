import express, { type Request, type Response } from 'express'
import errorMiddleware from './middlewares/errorMiddleware.js'
import { AppError } from './errors/AppError.js'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.end('Sample Request!')
})

app.get('/error-test', (req: Request, res: Response) => {
    throw new AppError("Tenant registration failed", 400, "Subdomain already occupied");
})


// Global Error Middleware
app.use(errorMiddleware)

export default app