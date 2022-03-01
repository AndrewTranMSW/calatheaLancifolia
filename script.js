mapboxgl.accessToken = 'pk.eyJ1IjoibmRyd3RybiIsImEiOiJjbDA3bnZkODUyNGI1M2RyczBtaHI2bGV4In0.CGjP2zwrhf3Cq5SVSeqyzw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([47.60, 122.33])
}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      })

      const nav = new mapboxgl.NavigationControl()
      map.addControl(nav)
}
