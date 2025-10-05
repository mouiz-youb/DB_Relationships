import {  signinAccessToken,
    signinRefreshToken,
    verifyRefreshToken,
    refreshTokenCookieOptions,hashPassword , comparePassword} from "../utils/Token.js"
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
        const existingUser = prisma.user.findUnique({
            data:{
                email
            }
        })
        if(!existingUser){
            return res.status(400).json({
                msg:"User already existe try with another email"
            })
        }
        // hash the password 
        const hashedPassword = hashPassword(password)
        // create the user 
        const NewUser = prisma.user.create({
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
const LogInController =async(req, res)=>{
    const  {email , password} = req.body
     if( !email  || !password){
        return res.status(400).json({
            msg:"All fields are required"
        })
    }
    try {
        const existingUser = await prisma.user.findUnique({
            data:{
                email
            }
        })
        if(!existingUser){
            return res.status(400).json({
                msg:"You don't have account try signup first "
            })
        }
        const CorrectPassword = await comparePassword(password , existingUser.password)
        if(!CorrectPassword){
            return res.status(400).json({
                msg:"Incorrect Password try again "
            })
        }
        
    } catch (error) {
        
    }
}
export  {LogInController , SignUpController}