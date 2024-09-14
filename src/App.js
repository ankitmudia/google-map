import './App.css';
import Donut from './components/eCharts/Donut';
import GoogleMap from './components/googleMap/GoogleMap';
import MarkerPin from './components/marker/MarkerPin';
import Data from './components/data/Data.json'

function App() {
  return (
    <div className="App">
      <GoogleMap
        MarkerComponent={MarkerPin}
        ClusterComponent={Donut}
        defaultCenter={{ lat: Data[0].lat, lng: Data[0].lng }}
        zoom={11}
        maxZoom={19}
        data={Data}
        cluster={true}
      />
    </div>
  );
}

export default App;
