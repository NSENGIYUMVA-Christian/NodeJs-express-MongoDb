const { StatusCode } = require("http-status-codes");
const CustomAPIError = require("./custom-error");

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCode.BadRequest;
  }
}

module.exports = BadRequest;
