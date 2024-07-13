import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const validateAuth = async (req, res, next) => {
  const jwt = req.header("jwt");

  if (!jwt) {
    return res.status(401).json({
      msg: "No token was found in HTTP Request",
    });
  }

  try {
    jwt.verify(jwt, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Invalid token send",
    });
  }
};

export default validateAuth;

