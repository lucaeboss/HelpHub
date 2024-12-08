// volunteer_opportunities.js

const apiKey = 'pk_live_0a690eff673f3ae3c296e56aa23a2604'; 
const apiUrl = 'https://partners.every.org/v0.2/browse/animals?apiKey=pk_live_0a690eff673f3ae3c296e56aa23a2604'; 

async function fetchVolunteerOpportunities() {
    try {
        const response = await fetch(apiUrl//, {
           // headers: {
              //  'Authorization': `Bearer ${apiKey}` // Include your API key in the headers
          //  }
     //   }
     ); 
            if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
       displayOpportunities(data);
    } catch (error) {
        showError(error.message);
    }
}

function displayOpportunities(data) {
  const opportunitiesList = document.getElementById('opportunitiesList');
    opportunitiesList.innerHTML = ''; // Clear previous opportunities
 //   return;
try {if (data.nonprofits && data.nonprofits.length > 0) {
        data.nonprofits.forEach(opportunity => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
                Organization: ${opportunity.name}<br>
                <strong>${opportunity.description}</strong><br>
               <a href="${opportunity.websiteUrl}" target="_blank">More Info</a>
               
           `;
          opportunitiesList.appendChild(listItem);
        });
    } else {
        opportunitiesList.innerHTML = '<p>No volunteer opportunities found.</p>';
    }
}
     catch (error) { console.log(error);
    
}
    
}
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = `Error fetching opportunities: ${message}`;
    errorMessage.style.display = 'block';
}

// Fetch opportunities when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchVolunteerOpportunities(); // Fetch volunteer opportunities when the page loads
});