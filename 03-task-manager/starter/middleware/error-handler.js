const errorHandleMiddleware = (err, req, res, next) => {
  return res.status(500).json({ msg: err });
  //an alternative approach is that you can customize the response error
};

module.exports = errorHandleMiddleware;
