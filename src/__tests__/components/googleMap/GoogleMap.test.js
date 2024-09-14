import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GoogleMap from "../../../components/googleMap/GoogleMap";

// mock the dependecies
jest.mock('google-map-react', () => {
    return ({ children }) => <div>{children}</div>
});

jest.mock('points-cluster', () => jest.fn(() => () => []));

test('initializes with default props', () => {
    render(
        <GoogleMap
            MarkerComponent={() => <div>Marker</div>}
            ClusterComponent={() => <div>Cluster</div>}
            defaultCenter={{ lat: 0, lng: 0 }}
            zoom={11}
            maxZoom={19}
            data={[]}
            cluster={true}
        />
    );

    const mapDiv = screen.getByTestId('google-map');
    expect(mapDiv).toHaveAttribute('data-center-lat', '0');
    expect(mapDiv).toHaveAttribute('data-center-lng', '0');
    expect(mapDiv).toHaveAttribute('data-zoom', '11');
});
