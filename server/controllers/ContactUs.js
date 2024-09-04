const mailSender = require("../utils/mailSender")
exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body
  console.log(req.body)
  try {
    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      "Thank you for contacting us. We have received your message and will respond to you as soon as possible."
    )
    console.log("Email Res ", emailRes)
    return res.json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}
