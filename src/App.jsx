import { useState } from 'react'
import './App.css'
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
function App() {
  const center = [51.05454418294424, 13.744604518424293]

  return (
    <MapContainer 
      center = {center}
      zoom = {10}
      style = {{ width: '100vw' , height: '100vh'}}
    >
      <TileLayer
        url='https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=tbObNRj6Au49couK6i4U'
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    />
    

    </MapContainer>
  )
}

export default App
