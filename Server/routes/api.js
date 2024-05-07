const express = require("express");
const router = express.Router();
const {
  getAllRequests,
  createUserRequest,
  verifyPassword,
} = require("../controllers/controllers.js");
const {
  createUserRequestValidation,
  validate,
} = require("../utils/validators.js");
router.get("/", (req, res) => {
  res.send("Welcome to the API Endpoint homepage");
});
router.get("/all-requests", getAllRequests);
router.post(
  "/createuserrequest",
  createUserRequestValidation,
  validate,
  createUserRequest
);
router.post("/verify-password", verifyPassword);

module.exports = router;
