class ErrorHandler extends Error {
  constructor(message,statusCode){
    super(message)
    this.statusCode = statusCode

    //create stack property
    Error.captureStackTrace(thi, this.constructor)
  }
}

export default ErrorHandler