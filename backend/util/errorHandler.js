class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode

    //Create stack property => Optional
    Error.captureStackTrace(this, this.constructor)
  }
}

export default ErrorHandler