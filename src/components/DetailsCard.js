import React from 'react';

const DetailsCard = (props) => {
  const {
    imageUrl,
    country,
    aqIndex,
    latitude,
    longitude,
    capital,
    
    co,
    no,
    no2,
    o3,
    so2,
    pm25,
    pm10,
    nh3,
  } = props;
  return (
    <div className="details-card">
      <img src={imageUrl} alt="" className="card-image" />
      <div className="details-text">
        <h1 className="card-title">{country}</h1>
        <h3 className="card-capital">{capital}</h3>
        <p className="aqi-value">{aqIndex}</p>
        <p className="lon-lat">
          Longitude: {longitude}, Latitude: {latitude}
        </p>
      </div>

      <table class="table-fixed">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Component name</th>
            <th>
              Concentration (μg/m<sup>3</sup>)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CO</td>
            <td>Carbon Monoxide</td>
            <td>{co}</td>
          </tr>
          <tr>
            <td>NO</td>
            <td>Nitrogen monoxide</td>
            <td>{no}</td>
          </tr>
          <tr>
            <td>
              NO<sub>2</sub>
            </td>
            <td>Nitrogen dioxide</td>
            <td>{no2}</td>
          </tr>
          <tr>
            <td>
              O<sub>3</sub>
            </td>
            <td>Ozone</td>
            <td>{o3}</td>
          </tr>
          <tr>
            <td>
              O<sub>3</sub>
            </td>
            <td>Ozone</td>
            <td>{o3}</td>
          </tr>
          <tr>
            <td>
              SO<sub>2</sub>
            </td>
            <td>Sulphur dioxide</td>
            <td>{so2}</td>
          </tr>
          <tr>
            <td>
              PM<sub>2_5</sub>
            </td>
            <td>Small size particulate</td>
            <td>{pm25}</td>
          </tr>
          <tr>
            <td>
              PM<sub>10</sub>
            </td>
            <td>Bigger size Particulates </td>
            <td>{pm10}</td>
          </tr>
          <tr>
            <td>
              NH<sub>3</sub>
            </td>
            <td>Ammonia</td>
            <td>{nh3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsCard;
