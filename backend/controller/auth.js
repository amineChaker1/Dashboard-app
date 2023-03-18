import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* Register User */

export const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      documents,
      university,
      occupation,
      downloads,
      creditPoints,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      picturePath,
      documents,
      university,
      occupation,
      downloads: Math.floor(Math.random() * 1000),
      creditPoints: Math.floor(Math.random() * 1000),
    });
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "14 days",
      },
      (err, token) => {
        if (err) return res.status(400).json("error in the token");

        delete newUser.password;
        res.status(201).json({ newUser, token });
      }
    );
  } catch (error) {
    res.status(500).json({
      location: error.location,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "14 days",
      },
      (err, token) => {
        if (err) return res.status(400).json("error in the token");
        delete user.password;
        res.status(200).json({ token, user });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
