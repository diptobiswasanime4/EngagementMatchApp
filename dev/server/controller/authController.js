import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";
import { JWT_SECRET } from "../config/config.js";

export async function registerUser(req, res) {
  const { firstname, lastname, email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    res.json({
      issue: "duplicate_email",
      msg: "User already exists! No duplicate Registration.",
      success: false,
    });
  } else {
    const hashpassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      firstname,
      lastname,
      email,
      hashpassword,
      loginCount: 0,
    });
    await newUser.save();
    res.json({ msg: `Registered user ${email}`, success: true });
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  if (!userDoc) {
    res.json({ msg: "Invalid Username", success: false });
  } else {
    const checkPW = bcrypt.compareSync(password, userDoc.hashpassword);
    if (!checkPW) {
      res.json({ msg: "Invalid Password", success: false });
    } else {
      jwt.sign({ email, id: userDoc._id }, JWT_SECRET, {}, (err, token) => {
        if (err) throw err;
        res
          .cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24,
          })
          .json({
            name: `${userDoc.firstname} ${userDoc.lastname}`,
            email,
            id: userDoc._id,
            token,
            msg: "Wow! I'm logged in.",
            success: true,
          });
      });
    }
  }
}

export async function logoutUser(req, res) {
  const { email } = req.body;

  res
    .cookie("token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({ msg: "Huh! Logged out.", email, success: true });
}

export async function getProfile() {}
