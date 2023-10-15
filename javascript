document.addEventListener("DOMContentLoaded", function() {
    const projectForm = document.getElementById("project-form");
    const projectItems = document.getElementById("project-items");
    const addProjectForm = document.getElementById("add-project-form");

    addProjectForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const projectName = document.getElementById("project-name").value;
        const projectDescription = document.getElementById("project-description").value;

        if (projectName && projectDescription) {
            const projectItem = document.createElement("li");
            projectItem.innerHTML = `
                <h3>${projectName}</h3>
                <p>${projectDescription}</p>
            `;
            projectItems.appendChild(projectItem);

            // Clear the form fields
            document.getElementById("project-name").value = "";
            document.getElementById("project-description").value = "";
        }
    });
});
