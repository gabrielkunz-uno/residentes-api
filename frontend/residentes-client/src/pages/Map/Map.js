import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Request from "../../request";

function Map() {
  const [companies, setCompanies]= useState(0);

  useEffect(() => {
    const loadAll = async () => {
        setCompanies(await Request.getAll('companies'))
    }
    loadAll();
    }, []);

  return(
    <>
      <Container>
        <MapContainer center={[-27.093248034108868, -52.663513099845744]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {companies &&(
            companies.map(company => (
              <div key={company.id}>
                <Marker key={company.id} position={[company.lat, company.long]}>
                    <Popup>
                      <>{company.name}</><hr/>
                      <>{company.email}</><hr/>
                      <>{company.website}</><hr/>
                      <>{company.telephone}</>
                    </Popup>
                </Marker>
              </div>
            ))
          )}
        </MapContainer>
      </Container>
    </>
  );
}

export default Map;