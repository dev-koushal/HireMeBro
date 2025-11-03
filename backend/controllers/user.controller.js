import { User } from "../models/user.model.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// Logic to register a user
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing!!",
        success: false,
      });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User with this email already exists!",
        success: false,
      });
    }
    const hashedPassword = await bycrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error in creating User" + error);
  }
};

// Logic to login a user

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing!!",
        success: false,
      });
    }

    const user = User.findOne({ email }); //returns the whole block of that related email!!

    if (!user) {
      return res.status(400).json({
        message: "User with this email not found!!",
        success: false,
      });
    }

    const isPasswordMatch = await bycrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Password is incorrect",
        success: false,
      });
    }

    //403 forbbiden or credential lacks
    if (role != user.role) {
      return res.status(403).json({
        message: "Invalid Role!!",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        success: true,
      });
  } catch (error) {
    console.log("Login Error User" + error);
  }
};

// Logout Logic
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};



// Update profile

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;
    if (!fullname || !email || !phoneNumber || !bio || !skills) {
      return res.status(400).json({
        message: "Something is missing!!",
        success: false,
      });
    };

    //cloudinary fileee

    const skillsArray = skills.split(",");
    
    const userId = req.id;  //middleware authentication 

    let user = await User.findById(userId);
    if(!user){
        return res.status(400).json({
            message : "User not found!",
            success: false
        })
    }

    //updated data filler
    user.fullname = fullname,
    user.email = email,
    user.phoneNumber = phoneNumber,
    user.profile.bio = bio,
    user.profile.skills = skillsArray
     
    await user.save();

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
        message:"Profile updated!",
        user,
        success : true
    })
  } catch (error) {
    console.log(error);
  }
};
