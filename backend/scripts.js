async function loadData(){
    // Fetch events data
    const URL = 'https://script.google.com/macros/s/AKfycbz-x0n517tTs9gYhPH__Qbl1HHcH4oNjS9ZNfQrGrrxG0_sR1osGse-xNWc136nc94h/exec';
    const response = await fetch(URL);

    const data = await response.json();
    const resources = data.Resources;

    const resourcesContainer = document.getElementById('resources-container');

    resourcesContainer.innerHTML = '';

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