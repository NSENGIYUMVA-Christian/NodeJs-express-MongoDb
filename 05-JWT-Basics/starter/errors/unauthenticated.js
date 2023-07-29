const { StatusCode } = require("http-status-codes");
const CustomAPIError = require("./custom-error");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCode.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
