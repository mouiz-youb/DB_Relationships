import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;
const ACCESS_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN || "1d";
const REFRESH_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN || "7d";

export const  signinAccessToken =(user)=>{
     return jwt.sign(
    { id: user.id, email: user.email }, 
    ACCESS_SECRET,
    { expiresIn: ACCESS_EXPIRES_IN }
  );
}
export const  verifyAccessToken  =(token )=>{
    return jwt.verify(token, ACCESS_SECRET)
}
export const  signinRefreshToken=(user )=>{
    return jwt.sign(
    { id: user.id, email: user.email },
    REFRESH_SECRET,
    { expiresIn: REFRESH_EXPIRES_IN }
  );
}
export const  verifyRefreshToken  =(token )=>{
    return jwt.verify(token, REFRESH_SECRET)
}
export const hashToken = async(token)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(token , salt )
}
export const hashPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password , salt )
}
export const compareToken =(token , hashedToken)=>{
    return bcrypt.compare(token , hashedToken)
}
export const comparePassword =(password  , hashedPassword)=>{
    return bcrypt.compare(password , hashedPassword)
}
// cookie optios for refresh token 
export const  refreshTokenCookieOptions=()=> {
  return {
    httpOnly: true,
    sameSite: "lax", // adjust for cross-site usage
    // secure: true, // enable in production (HTTPS)
    path: "/auth/refresh-token",
    // maxAge not set here since token itself has expiry; you can set cookie maxAge in ms if desired
  };
}
