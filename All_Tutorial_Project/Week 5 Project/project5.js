
    const courses = [
        {
            courseName: "Biological Science 1",
            prerequisites: "Math 130",
            courseTime: "9:00 AM - 10:00 AM",
            courseDays: "Monday, Wednesday, Friday",
            credits: "3",
        },
        {
            courseName: "Java Script",
            prerequisites: "CSCI 120",
            courseTime: "1:00 PM - 1:50 PM",
            courseDays: "Monday, Wednesday",
            credits: "3",
        },
        {
            courseName: "Calculus 1",
            prerequisites: "Math 131",
            courseTime: "10:00 AM - 10:50 AM",
            courseDays: "Monday, Tuesday, Wednesday, Friday",
            credits: "4",
        },
        {
            courseName: "CSCI 210",
            prerequisites: "Math 174",
            courseTime: "3:05 PM - 4:20 PM",
            courseDays: "Tuesday, Thursday",
            credits: "3",
        },
        {
            courseName: "Lifetime Fitness",
            prerequisites: "None",
            courseTime: "9:00 AM - 10:00 AM",
            courseDays: "Monday, Wednesday",
            credits: "3",
        },
    ];

    // Attach event listeners to course list items for details
    document.querySelectorAll(".course-item").forEach(item => {
        item.addEventListener("click", function () {
            displayCourseDetails(this.textContent);
        });
    });

    function displayCourseDetails(courseName) {
        const courseDetailDiv = document.getElementById("courseDetail");
        const courseList = document.getElementById("courseList");

        // Find the selected course
        const selectedCourse = courses.find(course => course.courseName === courseName);
        if (!selectedCourse) return;

        // Populate course details
        courseList.innerHTML = `
            <h3>${selectedCourse.courseName}</h3>
            <p><strong>Prerequisites:</strong> ${selectedCourse.prerequisites}</p>
            <p><strong>Time:</strong> ${selectedCourse.courseTime}</p>
            <p><strong>Days:</strong> ${selectedCourse.courseDays}</p>
            <p><strong>Credits:</strong> ${selectedCourse.credits}</p>
        `;

        // Show course detail and hide main container
        courseDetailDiv.classList.remove("hidden");
        document.getElementById("mainContainer").classList.add("hidden");
    }

    // Go back button event
    document.getElementById("goBack").addEventListener("click", () => {
        document.getElementById("mainContainer").classList.remove("hidden");
        document.getElementById("courseDetail").classList.add("hidden");
    });

    function dragstartHandler(ev) {
        // Add the target element's id to the data transfer object
        ev.dataTransfer.setData("text/plain", ev.target.id);
      }
    
      window.addEventListener("DOMContentLoaded", () => {
        // Get the element by id
        const elements = document.querySelectorAll(".course-item");
        // Add the ondragstart event listener
        elements.forEach(element => {
        element.addEventListener("dragstart", dragstartHandler);
        });
      });

      function dragoverHandler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
        ev.target.classList.add("dragover");
      }

      function dragleaveHandler(ev) {
        ev.target.classList.remove("dragover");
    }

      function dropHandler(ev) {
        ev.preventDefault();
        // Get the id of the dragged element
        const data = ev.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(data);
    
        // Check if the drop zone already contains the dragged element
        if (!ev.target.contains(draggedElement)) {
            // Append the dragged element to the drop zone
            ev.target.appendChild(draggedElement);
        }
    }
    window.addEventListener("DOMContentLoaded", () => {
        // Get the drop zone element
        const dropZones = document.querySelectorAll(".dropzone");
        dropZones.forEach(dropZone => {
        dropZone.addEventListener("dragover", dragoverHandler);
        dropZone.addEventListener("dragleave", dragleaveHandler);
        dropZone.addEventListener("drop", dropHandler);
        });
    });