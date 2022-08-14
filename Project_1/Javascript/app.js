const map = L.map('map').setView([23.761429, 90.429753], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors',
}).addTo(map),
  L.marker([23.761429, 90.429753]).addTo(map).bindPopup('My location'),
  hamburgerToggle();
