import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import ChargerData from '../components/data/ChargerData.json';

describe('App Component', () => {
  test('renders GoogleMap with correct default center and zoom level', () => {
    render(<App />);
    const googleMapElement = screen.getByTestId('google-map');
    
    expect(googleMapElement).toBeInTheDocument();
    expect(googleMapElement).toHaveAttribute('data-center-lat', ChargerData[0].lat.toString());
    expect(googleMapElement).toHaveAttribute('data-center-lng', ChargerData[0].lng.toString());
    expect(googleMapElement).toHaveAttribute('data-zoom', '11');
  });
});
