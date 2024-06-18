document.getElementById('postJobForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const jobTitle = document.getElementById('jobTitle').value;
    const role = document.getElementById('role').value;
    const experience = document.getElementById('experience').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const link = document.getElementById('link').value;

    // Create a new job card
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');
    jobCard.innerHTML = `
        <h3>${jobTitle}</h3>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>
        <a href="${link}" target="_blank">Apply</a>
    `;

    // Add the new job card to the job listings
    document.querySelector('.job-listings').appendChild(jobCard);

    // Clear the form
    event.target.reset();
});

// Function to filter job listings
function filterJobs() {
    const filterTitle = document.getElementById('filterTitle').value.toLowerCase();
    const filterRole = document.getElementById('filterRole').value.toLowerCase();
    const filterExperience = document.getElementById('filterExperience').value.toLowerCase();
    const filterCompany = document.getElementById('filterCompany').value.toLowerCase();
    const filterLocation = document.getElementById('filterLocation').value.toLowerCase();

    const jobCards = document.querySelectorAll('.job-card');

    jobCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const role = card.querySelector('p:nth-child(2)').textContent.toLowerCase();
        const experience = card.querySelector('p:nth-child(3)').textContent.toLowerCase();
        const company = card.querySelector('p:nth-child(4)').textContent.toLowerCase();
        const location = card.querySelector('p:nth-child(5)').textContent.toLowerCase();

        if (
            (title.includes(filterTitle) || !filterTitle) &&
            (role.includes(filterRole) || !filterRole) &&
            (experience.includes(filterExperience) || !filterExperience) &&
            (company.includes(filterCompany) || !filterCompany) &&
            (location.includes(filterLocation) || !filterLocation)
        ) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.querySelectorAll('.filters input').forEach(input => {
    input.addEventListener('input', filterJobs);
});

// Placeholder for 3D graph visualization
document.getElementById('graphContainer').innerText = '3D Graph Placeholder';
