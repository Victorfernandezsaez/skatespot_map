import { useState, useEffect } from 'react'
import './App.css'
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './RandomSpots'
function App() {
  const center = [51.05454418294424, 13.744604518424293]
  const spots = [
    {
      latlng: [51.06385440680908, 13.747256519230437],
      street:"Albert Platz, 01099 Dresden",
      name: "Albi"
    },
    {
        latlng: [51.06710519422941, 13.736075954254634],
        street:"Eisenbahnstraße 4-2, 01097 Dresden",
        name: "DIY"
      }];

  return (
  <> 
    
    <RandomSpots/>
    
    <div> 
      <MapContainer 
        center = {center}
        zoom = {12}
        style = {{ width: '100vw' , height: '100vh'}}
      >
        <TileLayer
          url='https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=tbObNRj6Au49couK6i4U'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {spots.map(({latlng, street, name }) =>
        <Marker position = {latlng}>
            <Popup>
            {name} <br /> {street}
          </Popup>
        </Marker>
        )}
      </MapContainer>
    </div>
  </>
  )
}

export default App
