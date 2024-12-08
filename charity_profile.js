

// Function to show the volunteer form
function showVolunteerForm() {
    const formContainer = document.getElementById('volunteerFormContainer');
    formContainer.style.display = 'block'; // Show the form
}

// Function to create an additional interactive element
function createCharityDetails() {
    const charityDetails = document.createElement('div');
    charityDetails.id = 'charityDetails';
    charityDetails.style.display = 'none'; // Initially hidden
    charityDetails.innerHTML = `
        <h3>Additional Charity Details</h3>
        <p>This charity has been active since 2010 and has helped over 10,000 individuals.</p>
    `;
    document.body.appendChild(charityDetails);

    // Add hover effect to show additional details
    const charityName = document.querySelector('h2'); // Assuming the charity name is in an <h2> tag
    charityName.addEventListener('mouseover', () => {
        charityDetails.style.display = 'block';
    });
    charityName.addEventListener('mouseout', () => {
        charityDetails.style.display = 'none';
    });
}

// Function to populate recent news
function populateRecentNews() {
    const newsList = document.getElementById('newsList');
    const newsItems = [
        {
            title: "Charity event raised $5,000 for local families in need.",
            details: "The charity event held last weekend successfully raised $5,000, which will be used to support local families facing financial difficulties."
        },
        {
            title: "New volunteer opportunities available for the upcoming summer.",
            details: "We are excited to announce new volunteer opportunities for the summer. Join us in making a difference!"
        },
        {
            title: "Join us for our annual charity gala on December 15th!",
            details: "Don't miss our annual charity gala! Enjoy an evening of fun, food, and fundraising."
        },
        {
            title: "We are launching a new program to support mental health awareness.",
            details: "Our new program aims to provide resources and support for mental health awareness in the community."
        }
    ];

    newsItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.title;
        listItem.style.cursor = 'pointer'; // Change cursor to pointer to indicate interactivity

        // Create a div for details that will be hidden initially
        const detailsDiv = document.createElement('div');
        detailsDiv.textContent = item.details;
        detailsDiv.style.display = 'none'; // Initially hidden
        detailsDiv.style.marginLeft = '20px'; // Indent details for better visibility

        // Add click event to toggle details
        listItem.addEventListener('click', () => {
            const isVisible = detailsDiv.style.display === 'block';
            detailsDiv.style.display = isVisible ? 'none' : 'block'; // Toggle visibility
        });

        newsList.appendChild(listItem);
        newsList.appendChild(detailsDiv); // Append details div under the list item
    });
}

// Add event listener to the "Volunteer Now" button
document.addEventListener('DOMContentLoaded', () => {
    const volunteerButton = document.getElementById('volunteerButton');
    volunteerButton.addEventListener('click', showVolunteerForm);
    createCharityDetails();
    populateRecentNews(); // Populate the news section when the page loads
});