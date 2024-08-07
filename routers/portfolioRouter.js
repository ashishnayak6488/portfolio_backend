const express = require("express");

const router = express.Router();

const {
  getPortfolioData,
  updateIntro,
  updateAbout,
  addProject,
  updateProject,
  deleteProject,
  updateContact,
  adminLogin,
  addEducation,
  updateEducation,
  deleteEducation,
  addExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/portfolioController");

router.get("/portfolio-data", getPortfolioData);
router.post("/intro-update", updateIntro);
router.post("/about-update", updateAbout);

router.post("/add-education", addEducation);
router.post("/update-education", updateEducation);
router.post("/delete-education", deleteEducation);

router.post("/add-experience", addExperience);
router.post("/update-experience", updateExperience);
router.post("/delete-experience", deleteExperience);

router.post("/add-project", addProject);
router.post("/update-project", updateProject);
router.post("/delete-project", deleteProject);

router.post("/contact-update", updateContact);

//For Users Only

router.post("/admin-login", adminLogin);

module.exports = router;
