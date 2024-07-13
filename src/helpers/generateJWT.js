import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default (finalToken) => {
    return new Promise((resolve, reject) => {
      const payload = { finalToken };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: "1800000",
        },
        (err, token) => {
          if (err) {
            console.log(err);
            reject("Error Generating JWT");
          } else {
            resolve(token);
          }
        }
      );
    });
};

