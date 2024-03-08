// Error Handler Class
class ErrorHandler extends Error {
  constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode

          //create stack property, Opcional
      Error.captureStackTrace(this, this.constructor)
  }
}

export default ErrorHandler;