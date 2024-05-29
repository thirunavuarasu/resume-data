


const resumeData = {
    name: "Thiru",
    age: 30,
    skills: ["JavaScript", "HTML", "CSS", "React"]
};

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < resumeData.skills.length; i++) {
    console.log(resumeData.skills[i]);
}

// Using for-in loop
console.log("Using for-in loop:");
for (let key in resumeData) {
    if (Array.isArray(resumeData[key])) {
        console.log(`Skills: ${resumeData[key].join(", ")}`);
    } else {
        console.log(`${key}: ${resumeData[key]}`);
    }
}

// Using for-of loop (for arrays)
console.log("Using for-of loop:");
for (let skill of resumeData.skills) {
    console.log(skill);
}
