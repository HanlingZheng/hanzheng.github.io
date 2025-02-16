/*Create function to ask user which tutorial they want to access and takes them to different pages accordingly
if they didn't put the request input, prompt the user again*/
function tutorialPage() {
    let tutorial = prompt("Which tutorial would you like to access? (Tutorial 1, Tutorial 2, Tutorial 3)");

    if (tutorial === "Tutorial 1") {
        window.location.href = "tutorial1.html";
    } else if (tutorial === "Tutorial 2") {
        window.location.href = "tutorial2.html";
    } else if (tutorial === "Tutorial 3") {
        window.location.href = "tutorial3.html";
    } else {
        alert("Invalid tutorial. Please try again.");
    }
    if (tutorial !== "Tutorial 1" && tutorial !== "Tutorial 2" && tutorial !== "Tutorial 3") {
        tutorialPage();
    }
}

//applying my function 
tutorialPage();