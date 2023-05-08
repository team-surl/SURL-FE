import axios from "axios";
import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import styled, { css } from "styled-components";
// import GetGeo from "../../../apis/geo/getGeo";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function ContryChart() {
  const [geoName, setGeo] = useState("");
  const [hover, setHover] = useState(false);

  // const getGeoInfo = () => {
  //   const geoInfo = axios
  //     .get(geoUrl)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // geo 정보 확인

  // const popOver = (geo: string) => {
  //   console.log(geo);
  // };

  return (
    <Frame>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  onMouseOver={() => {
                    setGeo(geo.id);
                    setHover(!hover);
                    // popOver(geo.id);
                  }}
                  onMouseLeave={() => {
                    setGeo("");
                    setHover(!hover);
                  }}
                  fill={geo.id === geoName ? "#6680B5" : "#abb7cf"}
                  key={geo.rsmKey}
                  geography={geo}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </Frame>
  );
}

const Frame = styled.div`
  width: 1000px;
`;

export default ContryChart;
