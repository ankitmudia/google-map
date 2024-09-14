import './App.css';
import Donut from './components/eCharts/Donut';
import GoogleMap from './components/googleMap/GoogleMap';
import MarkerPin from './components/marker/MarkerPin';
import ChargerData from './components/data/ChargerData.json'

function App() {
  return (
    <div className="App">
      <GoogleMap
        MarkerComponent={MarkerPin}
        ClusterComponent={Donut}
        defaultCenter={{ lat: ChargerData[0].lat, lng: ChargerData[0].lng }}
        zoom={11}
        maxZoom={19}
        data={ChargerData}
        cluster={true}
      />
    </div>
  );
}

export default App;
