async function loadData(){
    // Fetch events data
    const URL = 'https://script.google.com/macros/s/AKfycbz-x0n517tTs9gYhPH__Qbl1HHcH4oNjS9ZNfQrGrrxG0_sR1osGse-xNWc136nc94h/exec';
    const response = await fetch(URL);

    const data = await response.json();
    const events = data.Events;
    const resources = data.Resources;

    const eventsContainer = document.getElementById('events-container');
    const resourcesContainer = document.getElementById('resources-container');

    eventsContainer.innerHTML = '';
    resourcesContainer.innerHTML = '';

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

    if (resources.length == 0){
      resourcesContainer.innerHTML += `
          <div class="text-center">
              <p>No Resources to show!</p>
          </div>
      `
    }else{
        for (let resource of resources) {
            resourcesContainer.innerHTML += `
              <li>
                <a href="${resource.URL}" class="text-[#EF5B25] hover:underline">${resource.Name}</a> - ${resource.Description}
              </li>
            `
        }
    }
}

loadData();