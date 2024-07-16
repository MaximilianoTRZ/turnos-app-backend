import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const validateAuth = async (req, res, next) => {
  const jwtoken = req.header("jwt");

  if (!jwtoken) {
    return res.status(401).json({
      msg: "No token was found in HTTP Request",
    });
  }

  try {
    jwt.verify(jwtoken, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Invalid token send",
    });
  }
};

export default validateAuth;
