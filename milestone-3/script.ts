const profileImgInput = document.getElementById("profile-img") as HTMLInputElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const jobTitleInput = document.getElementById("job-title") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const profileSummaryInput = document.getElementById("profile-summary") as HTMLTextAreaElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const workExperienceInput = document.getElementById("work-experience") as HTMLTextAreaElement;
const resumeTemplate = document.getElementById("resume-template") as HTMLElement;

const generateResumeButton = document.getElementById("generate-resume") as HTMLButtonElement;
const clearFieldsButton = document.getElementById("clear-fields") as HTMLButtonElement;

// Function to clear all form fields
function clearFields() {
  profileImgInput.value = '';
  nameInput.value = '';
  jobTitleInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  profileSummaryInput.value = '';
  educationInput.value = '';
  skillsInput.value = '';
  workExperienceInput.value = '';
  resumeTemplate.innerHTML = '';
}

generateResumeButton.addEventListener("click", () => {
  const profileImg = profileImgInput.files?.[0];
  const name = nameInput.value.trim();
  const jobTitle = jobTitleInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const profileSummary = profileSummaryInput.value.trim();
  const education = educationInput.value.trim();
  const skills = skillsInput.value.trim().split(",").map(skill => skill.trim());
  const workExperience = workExperienceInput.value.trim();

  if (!name || !jobTitle || !email || !phone || !profileSummary || !education || skills.length === 0 || !workExperience) {
    alert("Please fill in all fields.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const profileImgSrc = reader.result as string;

    // Generate Resume Content
    resumeTemplate.innerHTML = `
      <div class="resume-header">
        <img src="${profileImgSrc}" alt="Profile Picture">
        <div class="info">
          <h2>${name}</h2>
          <h4>${jobTitle}</h4>
          <p>Email: ${email} | Phone: ${phone}</p>
        </div>
      </div>
      <div class="resume-section">
        <h3>Profile</h3>
        <p>${profileSummary}</p>
      </div>
      <div class="resume-section">
        <h3>Education</h3>
        <p>${education}</p>
      </div>
      <div class="resume-section">
        <h3>Skills</h3>
        <p>${skills.join(", ")}</p>
      </div>
      <div class="resume-section">
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
      </div>
    `;
  };

  if (profileImg) {
    reader.readAsDataURL(profileImg);
  }
});

clearFieldsButton.addEventListener("click", clearFields);
