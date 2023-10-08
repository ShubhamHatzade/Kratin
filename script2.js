// Initialize and show the map
function initMap() {
    const location = { lat: 41.8781, lng: -87.6298 }; // Replace with the desired coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12, // Adjust the zoom level as needed
    });

    // Add a marker for the contact's location
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Contact Location",
    });
}
