const { Db } = require("mongodb");
const userRequest = require("../model/userRequest.js");
const passwordModel = require("../model/passCodeModel.js");

async function getAllRequests(req, res) {
  try {
    const allRequests = await userRequest.find().sort({ dateTime: -1 }).exec();
    res.status(200).json(allRequests);
  } catch (error) {
    console.error("Error retrieving requests:", error);
    res.status(500).json({ error: "Failed to retrieve requests" });
  }
}
const verifyPassword = async (req, res) => {
  //   try {
  //     const temp = new passwordModel({ passCode: "abcd" });
  //     await temp.save();
  //     console.log("Saved successfully:", temp);
  //   } catch (error) {
  //     console.error("Error saving:", error);
  //   }
  //   return;
  const { passCode } = req.body;

  try {
    const realPassCode = await passwordModel.findOne().exec();
    if (!realPassCode) {
      res.status(404).json({ message: "Something went wrong" });
      return;
    }

    if (passCode && realPassCode.passCode === passCode) {

      res.status(200).json({ message: "Password verified" });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
const createUserRequest = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    pickupAddress,
    dropAddress,
    journeyType,
  } = req.body;
  const newUserRequest = userRequest({
    firstName,
    lastName,
    email,
    phoneNumber,
    pickupAddress,
    dropAddress,
    journeyType,
  });
  try {
    await newUserRequest.save();
    res.status(201).json({
      _id: newUserRequest._id,
    });
  } catch (error) {
 
    res.status(400);
    // throw new Error("Invalid user data");
  }
};
module.exports = { getAllRequests, createUserRequest, verifyPassword };
