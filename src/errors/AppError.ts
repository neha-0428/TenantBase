
export class AppError extends Error {

    public readonly statusCode: number;
    public readonly errorDetails: string;

    constructor(message: string, statusCode: number = 500, errorDetails: string = 'Something Went Wrong !') {
        super(message)
        this.statusCode = statusCode
        this.errorDetails = errorDetails


        Object.setPrototypeOf(this, new.target.prototype)
        Error.captureStackTrace(this, this.constructor)

    }

}