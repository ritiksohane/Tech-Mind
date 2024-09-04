// Import the required modules
const express = require("express")
const router = express.Router()
const {enrollCourses} = require("../controllers/payments")

const { auth, isInstructor, isStudent, isAdmin } = require("../middleware/auth")
router.post("/enroll", auth,enrollCourses);
module.exports = router
