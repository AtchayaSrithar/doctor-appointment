const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware"); // Ensure this middleware is properly implemented
const {
  getAllUsersControllers,
  getAllDoctorsControllers,
  getStatusApproveController,
  getStatusRejectController,
  displayAllAppointmentController,
} = require("../controllers/adminC"); // Ensure these controller functions exist

const router = express.Router();

// Route to get all users (requires authentication)
router.get("/getallusers", authMiddleware, getAllUsersControllers);

// Route to get all doctors (requires authentication)
router.get("/getalldoctors", authMiddleware, getAllDoctorsControllers);

// Route to approve user or doctor status (requires authentication)
router.post("/getapprove", authMiddleware, getStatusApproveController);

// Route to reject user or doctor status (requires authentication)
router.post("/getreject", authMiddleware, getStatusRejectController);

// Route to get all appointments for admin (requires authentication)
router.get("/getallAppointmentsAdmin", authMiddleware, displayAllAppointmentController);

module.exports = router;
