var profileImgInput = document.getElementById("profile-img");
var nameInput = document.getElementById("name");
var jobTitleInput = document.getElementById("job-title");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var profileSummaryInput = document.getElementById("profile-summary");
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var workExperienceInput = document.getElementById("work-experience");
var resumeTemplate = document.getElementById("resume-template");
var generateResumeButton = document.getElementById("generate-resume");
var clearResumeButton = document.getElementById("clear-resume");
generateResumeButton.addEventListener("click", function () {
    var _a;
    var profileImg = (_a = profileImgInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var name = nameInput.value.trim();
    var jobTitle = jobTitleInput.value.trim();
    var email = emailInput.value.trim();
    var phone = phoneInput.value.trim();
    var profileSummary = profileSummaryInput.value.trim();
    var education = educationInput.value.trim();
    var skills = skillsInput.value.trim().split(",").map(function (skill) { return skill.trim(); });
    var workExperience = workExperienceInput.value.trim();
    if (!name || !jobTitle || !email || !phone || !profileSummary || !education || !skills.length || !workExperience) {
        alert("Please fill in all fields.");
        return;
    }
    var reader = new FileReader();
    reader.onload = function () {
        var profileImgSrc = reader.result;
        resumeTemplate.innerHTML = "\n      <div class=\"resume-header\">\n        <img src=\"".concat(profileImgSrc, "\" alt=\"Profile Picture\">\n        <div class=\"info\">\n          <h2>").concat(name, "</h2>\n          <h4>").concat(jobTitle, "</h4>\n          <p>Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n        </div>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Profile</h3>\n        <p>").concat(profileSummary, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Skills</h3>\n        <p>").concat(skills.join(", "), "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n      </div>\n    ");
    };
    if (profileImg) {
        reader.readAsDataURL(profileImg);
    }
});
clearResumeButton.addEventListener("click", function () {
    document.getElementById("resume-form").reset();
    resumeTemplate.innerHTML = "";
});
