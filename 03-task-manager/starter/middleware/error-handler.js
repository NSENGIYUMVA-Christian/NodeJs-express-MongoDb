const { CustomAPIError } = require("../errors/custom-error");

const errorHandleMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
  //an alternative approach is that you can customize the response error
};

module.exports = errorHandleMiddleware;
