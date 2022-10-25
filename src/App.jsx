import { useState, useEffect } from 'react'
import './App.css'
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import _ from "lodash"
import spots from './spots'

function App() {
  const center = [51.05454418294424, 13.744604518424293]


    const [newRandomSpot, setNewRandomSpot] = useState("")
    const [randomSpots, setRandomSpots] = useState(spots)


    function randomice() {
      setRandomSpots(_.sampleSize(spots,5))
    }
    
    
  return (
  <> 
    
    
    <div className='row'> 
      <MapContainer 
        className='column1'
        center = {center}
        zoom = {12}
        style = {{ width: '100vw' , height: '100vh'}}
      >
        <TileLayer
          url='https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=tbObNRj6Au49couK6i4U'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        {randomSpots.map(({latlng, street, name }) =>
          <Marker position = {latlng}>
              <Popup>
              {name} <br /> {street}
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <div className='column'>
        <button onClick={() => randomice()}>find your spots</button>
        { <ul>{ randomSpots.map(thing => 
        <li>{thing.name} </li>
        
        )}
        </ul> }
      </div>
    </div>
  </>
  )
}

export default App
