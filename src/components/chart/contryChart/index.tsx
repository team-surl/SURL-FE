import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import styled from "styled-components";
import ToolTip from "../../tooltip";
import axios from "axios";

interface Props {
  geoList: { [key: string]: string };
}
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function ContryChart({ geoList }: Props) {
  const [geoName, setGeo] = useState("");
  const [hover, setHover] = useState(false);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const { x, y } = xy;

  useEffect(() => {
    axios
      .get(geoUrl)
      .then((res) => {
        console.log("GEO", res.data);
      })
      .catch((err) => console.log(err));
  }, [geoList]);

  const mouseMove = (e: React.MouseEvent) => {
    setXY({ x: e.clientX, y: e.clientY });
    if (geoList[geoName]) {
      setGeo(geoName + " : " + geoList[geoName]);
    }
  };

  return (
    <Frame onMouseMove={mouseMove}>
      <ToolTip x={x} y={y} text={geoName} />
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
  margin-top: -50px;
`;

export default ContryChart;
