import React, { useCallback, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import supercluster from "points-cluster";

function GoogleMap({
  MarkerComponent,
  defaultCenter,
  zoom,
  maxZoom,
  data,
  cluster,
  ClusterComponent,
}) {
  const [mapOptions, setMapOptions] = useState({
    center: defaultCenter,
    zoom: zoom,
  });
  const [clusters, setClusters] = useState([]);

  const getClusters = useCallback(() => {
    const clusters = supercluster(data, {
      minZoom: 0,
      maxZoom: 16,
      radius: 60,
    });
    return clusters(mapOptions);
  }, [mapOptions, data]);

  const handleMapChange = ({ center, zoom, bounds }) => {
    setMapOptions({
      center,
      zoom,
      bounds,
    });
  };

  const handleClustering = useCallback(() => {
    const newClusters = mapOptions.bounds && cluster
      ? getClusters().map(({ wx, wy, numPoints, points }) => ({
          lat: wy,
          lng: wx,
          numPoints,
          id: `${numPoints}_${points[0].id}`,
          points,
        }))
      : mapOptions.bounds && !cluster ? data : [];
    setClusters(newClusters);
  }, [getClusters, mapOptions, cluster, data]);

  useEffect(() => {
    handleClustering();
  }, [handleClustering]);

  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      data-testid="google-map"
      data-center-lat={defaultCenter.lat}
      data-center-lng={defaultCenter.lng}
      data-zoom={zoom}
    >
      <GoogleMapReact
        data-testid="google-map"
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultCenter}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onChange={handleMapChange}
        options={{ maxZoom: maxZoom, fullscreenControl: true }}
        key={1}
      >
        {cluster
          ? clusters.map((props, index) => {
              if (props.numPoints === 1) {
                return (
                  <MarkerComponent
                    key={index}
                    lat={props.lat}
                    lng={props.lng}
                    text={props.text}
                    data={props}
                  />
                );
              } else {
                return (
                  <ClusterComponent
                    key={index}
                    lat={props.lat}
                    lng={props.lng}
                    text={props.text}
                    data={props}
                  />
                );
              }
            })
          : clusters.map((props, index) => (
              <MarkerComponent
                key={index}
                lat={props.lat}
                lng={props.lng}
                text={props.text}
                data={props}
              />
            ))}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
