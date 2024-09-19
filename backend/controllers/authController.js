const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register controller
const registerController = async (rq, rs, next) => {
  try {
    // insert field
    const { username, email, phone, password } = rq.body;

    // required field
    // if (!username) {
    //     return rs.status(400).send('required username')
    // }else if (!email) {
    //     return rs.status(400).send('required email')
    // }else if (!phone) {
    //     return rs.send(400).send('required phonenumber')
    // }else if (!password) {
    //     return rs.status(400).send('required password')
    // }

    // exsiting uset
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return rs.status(400).send({
        message: "email is already exist",
      });
    }

    //has password

    const hashPassword = await bcrypt.hash(password, 10);

    // save user data

    const user = await new userModel({
      username,
      email,
      phone,
      password: hashPassword,
    }).save();

    ///jwt
    const token = jwt.sign({ id: user._id.toString() }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    return rs.status(201).send({
      success: true,
      message: "register successfullly",
      user,
      token,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//login cntroller

const loginController = async (rq, rs, next) => {
  try {
    const { email, password } = rq.body;

    //compare email
    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      return rs.status(400).send({
        message: "user not registred",
      });
    }

    //compare password

    const passwordCompare = await bcrypt.compare(password, userExist.password);
    if (!passwordCompare) {
      return rs.status(400).send({
        message: "invalid email or password",
      });
    }

    //jwt token
    const token = await jwt.sign(
      { id: userExist._id.toString() },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    return rs.status(201).send({
      success: true,
      message: "login successfully",
      userExist,
      token,
    });
  } catch (error) {
    next(error);
    console.log(error);
    return rs.status(500).send({
      message: "internal server error",
    });
  }
};

const getUserController = async (rq, rs) => {
  try {
    const userData = await rq.user;

    console.log(userData);

    return rs.status(200).json({
      userData,
    });
  } catch (error) {
    console.log(`error in route ${error}`);
  }
};

module.exports = { registerController, loginController, getUserController };
