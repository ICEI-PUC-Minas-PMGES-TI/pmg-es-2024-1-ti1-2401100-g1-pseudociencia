async function getData() {
    const response = await fetch("/mock_data/locations.json");
    return response.json();
}

document.addEventListener("DOMContentLoaded", function() {
    getData().then(locations => {
        const map = L.map('map', {
            minZoom: 0,
            maxZoom: 10,
            doubleClickZoom: false,
            center: [0, 0]
        });
        map.setView([0, 0], 2);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ''
        }).addTo(map);

        const locationsList = document.getElementById("locationsList");
        const filterInput = document.getElementById("filter");
        const sortButton = document.getElementById("sort");

        let filteredLocations = locations;

        const addMarkersToMap = (locs) => {
            locs.forEach(location => {
                L.marker(location.coordinates).addTo(map)
                    .bindPopup(`<b>${location.name}</b><br>${location.description}<br><br><a href="${location.wikipedia}" target="_blank">Leia mais</a>`);
            });
        };

        const displayLocations = (locs) => {
            locationsList.innerHTML = "";
            locs.forEach(location => {
                const li = document.createElement("li");
                li.textContent = location.name;
                li.addEventListener("click", () => {
                    map.setView(location.coordinates, 5);
                    L.popup()
                        .setLatLng(location.coordinates)
                        .setContent(`<b>${location.name}</b><br>${location.description}<br><br><a href="${location.wikipedia}" target="_blank">Leia mais</a>`)
                        .openOn(map);
                });
                locationsList.appendChild(li);
            });
        };

        filterInput.addEventListener("input", () => {
            const filter = filterInput.value.toLowerCase();
            filteredLocations = locations.filter(location => location.name.toLowerCase().includes(filter));
            displayLocations(filteredLocations);
            map.eachLayer(layer => {
                if(layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });
            addMarkersToMap(filteredLocations);
        });

        sortButton.addEventListener("click", () => {
            filteredLocations.sort((a, b) => a.name.localeCompare(b.name));
            displayLocations(filteredLocations);
            map.eachLayer(layer => {
                if(layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });
            addMarkersToMap(filteredLocations);
        });

        displayLocations(filteredLocations);
        addMarkersToMap(filteredLocations);
    }).catch(error => console.error('Error fetching data:', error));
});
