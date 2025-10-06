import {  signinAccessToken,
    signinRefreshToken,
    verifyRefreshToken,
    refreshTokenCookieOptions,hashPassword , comparePassword , hashToken} from "../utils/Token.js"
import prisma from "../utils/db.js"
import bcrypt from "bcryptjs";

const SignUpController =async(req, res)=>{
    const {username , email , password }= req.body
    if(!username  || !email  || !password){
        return res.status(400).json({
            msg:"All fields are required"
        })
    }
    try {
        // check if the user is already have account 
        const existingUser = await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(existingUser){
            return res.status(400).json({
                msg:"User already existe try with another email"
            })
        }
        // hash the password 
        const hashedPassword = await hashPassword(password)
        // create the user 
        const NewUser = await prisma.user.create({
            data:{
                email , password :hashedPassword , username 
            }
        })
        res.status(201).json({
            msg:"User registered successfully",
            NewUser
        })
    } catch (error) {
         res.status(500).json({ msg: error.message });
    }
}
const LogInController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (!existingUser) {
            return res.status(404).json({
                msg: "No account found with this email. Please sign up first."
            });
        }

        // Compare passwords
        const correctPassword = await comparePassword(password, existingUser.password);
        if (!correctPassword) {
            return res.status(401).json({ msg: "Incorrect password" });
        }

        // Generate tokens
        const accessToken = signinAccessToken({ userId: existingUser.id });
        const refreshToken = signinRefreshToken({ userId: existingUser.id });

        // Optionally: save refreshToken in DB for security
        // await prisma.refreshToken.create({ data: { token: refreshToken, userId: existingUser.id } })
        // set the refresh token inside the user model 
        const hashedRT = await hashToken(refreshToken);
        await prisma.user.update({
            where:{id:existingUser.id},
            data:{hashedRefreshToken:hashedRT}
        })
        // Set refresh token cookie
        res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions());

        // Send response
        res.json({
            msg: "Login successful",
            accessToken,
            user: {
                id: existingUser.id,
                username: existingUser.username,
                email: existingUser.email
            }
        });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
const Logout =async(req,res )=>{
    res.clearCookie("refreshToken", refreshTokenCookieOptions());
    res.json({
        msg:"Logged out successfully"
    })
}
const  refreshToken =async(req,res)=>{
    const token = req.cookie.refreshToken
    if(!token) return res.status(401).json({ msg: "No refresh token" });
    try {
        const payload =verifyRefreshToken(token)
        const user =  await prisma.user.findUnique({
            where:{
                id:payload.userId
            }
        })
        const  accessToken = signinAccessToken({userId:user.id})
        res.json({accessToken})
    } catch (error) {
         res.status(403).json({ msg: "Invalid or expired refresh token" });
    }
}
export  {LogInController , SignUpController , Logout , refreshToken}