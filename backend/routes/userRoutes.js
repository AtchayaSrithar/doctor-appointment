const multer = require("multer");
const express = require("express");

const {
  registerController,
  loginController,
  authController,
  docController,
  deleteallnotificationController,
  getallnotificationController,
  getAllDoctorsControllers,
  appointmentController,
  getAllUserAppointments,
  getDocsController,
  downloadDocController,
} = require("../controllers/userC");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define where to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Modify filename if needed
  }
});

// Initialize Multer with storage configuration and file size limit
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
}).single('image');

// Routes
router.post("/register", registerController);

router.post("/login", loginController);

router.post("/getuserdata", authMiddleware, authController);

router.post("/registerdoc", authMiddleware, docController);

router.get("/getalldoctorsu", authMiddleware, getAllDoctorsControllers);

router.post("/getappointment", upload, authMiddleware, appointmentController);

router.post(
  "/getallnotification",
  authMiddleware,
  getallnotificationController
);

router.post(
  "/deleteallnotification",
  authMiddleware,
  deleteallnotificationController
);

router.get("/getuserappointments", authMiddleware, getAllUserAppointments);

router.get("/getDocsforuser", authMiddleware, getDocsController);

// Example route for downloading a file (assuming you want to allow this)
router.get('/download/:filename', authMiddleware, (req, res) => {
  const filename = req.params.filename;
  const file = `${__dirname}/../uploads/${filename}`;  // Adjust path based on where you store files

  res.download(file, (err) => {
    if (err) {
      res.status(500).send("Could not download the file.");
    }
  });
});

module.exports = router;
