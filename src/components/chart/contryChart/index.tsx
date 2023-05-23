import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import styled from "styled-components";
import ToolTip from "../../tooltip";
// import GetGeo from "../../../apis/geo/getGeo";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function ContryChart() {
  const [geoName, setGeo] = useState("");
  const [hover, setHover] = useState(false);
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent) => {
    setXY({ x: e.clientX, y: e.clientY });
  };

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
    <Frame onMouseMove={mouseMove}>
      <ToolTip x={xy.x} y={xy.y} geoName={geoName} />
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  onMouseOver={() => {
                    setGeo(geo.id);
                    setHover(!hover);
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
  width: 800px;
`;

export default ContryChart;
