module.exports = (err, req, res, next) => {
  statusCode = err.status || 500;
  statusMsg = err.message || "fail";

  res.status(statusCode).json({
    message: "Error generating the image(s)",
    error: statusMsg,
    stack: err.stack,
  });
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
