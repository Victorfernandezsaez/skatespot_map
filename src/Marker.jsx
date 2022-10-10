import { useState } from "react";
import { Marker } from "react-leaflet";

const {spots, setSpot} = useState([
    {
      latlng: [51.06385440680908, 13.747256519230437],
      street:"Albert Platz, 01099 Dresden",
      name: "Albi"
    },
    {
        latlng: [51.06710519422941, 13.736075954254634],
        street:"Eisenbahnstraße 4-2, 01097 Dresden"
      }]
      )

    const latlng = spots.latlng
    const street = spots.street
    const [marker, setMarker] = useState(null)
    function newMarker() {
       setMarker({latlng})
function addMarkersToMap(map) {
    const albertPlatz = new H.map.Marker({spots});
    map.addObject(albertPlatz)
}
/*const platform = new H.service.Platform({
    apikey: window.apikey
  });
  const defaultLayers = platform.createDefaultLayers();*/
}
  export default addMarkersToMap