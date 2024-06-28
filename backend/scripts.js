async function loadEvents(){
    // Fetch events data
    const URL = 'https://script.google.com/macros/s/AKfycbxSD76YBIYYq7-jUolYP4-uE0ZW9oHYzw4hwCzyzsr8fPwZFYc5-Uqmc-Pi1QBdjGzV/exec';
    const response = await fetch(URL);

    const events = await response.json();

    const eventsContainer = document.getElementById('events-container');

    eventsContainer.innerHTML = '';
    if (events.length == 0){
        eventsContainer.innerHTML += `
            <div class="text-center">
                <p>No Events data to show!</p>
            </div>
        `
    }else{
        for (let event of events) {
            eventsContainer.innerHTML += `
              <div class="card w-72 bg-base-100 shadow-xl">
                <figure><img src="${event.Image}" alt="${event.Name}" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${event.Name}</h2>
                  <p>${event.Location}<br/>@ ${event.Date}</p>
                  <div class="card-actions justify-end">
                    <a class="btn bg-[#EF5B25] text-white" href="${event.Link}" target="_blank">View Event</a>
                  </div>
                </div>
              </div>
            `
        }
    }
}

loadEvents();