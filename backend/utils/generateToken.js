import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //in milliseconds
    httpOnly: true, // to prevent XSS and cross-site scripting attacks
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development" // this will give website a secure mode unless it's in development. For deloyment, change the env value in .env
  });
};

export default generateTokenAndSetCookie;
