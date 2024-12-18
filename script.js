let map;

async function initMap() {
    //Lokasi default (contoh: Jakarta)
    const defaultLocation = {lat: -6.200000, lng: 106.816666};

    //Inisialisasi peta
    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultLocation,
        zoom: 12,
    });

    //Tambahkan marker di lokasi default
    new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: "Jakarta",
    });

    //Event untuk menambahkan marker saat pengguna klik di peta
    map.addListener("click", (event) => {
        addMarker(event.latLng);
    });
}

//Fungsi untuk menambahkan marker
function addMarker(Location) {
    new google.maps.Marker({
        position: Location,
        map: map,
    });
}