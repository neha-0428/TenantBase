import type { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/AppError.js"

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
            errorDetails: error.errorDetails
        })
    }

    return res.status(500).json({ 
        message: 'Internal Server Error', 
        extraDetails: 'An unexpected error occurred on our end.' 
    });
}

export default errorMiddleware