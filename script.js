document.addEventListener("DOMContentLoaded", function () {
  // Simulate updating vital signs and location
  setInterval(updateVitalSigns, 5000);
  setInterval(updateLocation, 10000);

  // Handle emergency button click
  const emergencyButton = document.getElementById("emergencyButton");
  emergencyButton.addEventListener("click", sendEmergencyAlert);
});

function updateVitalSigns() {
  const heartRate = Math.floor(Math.random() * (140 - 60 + 1) + 60);
  const temperature = (Math.random() * (38.0 - 36.0) + 36.0).toFixed(1);
  document.getElementById("heartRate").textContent = `${heartRate} bpm`;
  document.getElementById("temperature").textContent = `${temperature} °C`;
}

function updateLocation() {
  // Simulate getting GPS coordinates
  const latitude = (Math.random() * (90 - (-90)) + (-90)).toFixed(6);
  const longitude = (Math.random() * (180 - (-180)) + (-180)).toFixed(6);
  document.getElementById("gpsCoordinates").textContent = `${latitude}, ${longitude}`;
}

function sendEmergencyAlert() {
  // Simulate sending an emergency alert
  alert("Emergency Alert Sent!");
}

