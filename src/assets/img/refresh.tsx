import React from "react";
import { theme } from "../../styles/theme";

interface Props {
  hover: boolean;
}

function Refresh({ hover }: Props) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.9573 9.51854C24.0235 5.09286 19.6075 2 14.469 2C7.97131 2 2.6287 6.94555 2 13.2778"
        stroke={hover ? theme.color.point : theme.color.black}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7345 9.51862H26.2481C26.6634 9.51862 26.9999 9.18201 26.9999 8.76677V3.25317"
        stroke={hover ? theme.color.point : theme.color.black}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.04248 19.5432C4.97615 23.9689 9.39224 27.0617 14.5307 27.0617C21.0284 27.0617 26.3711 22.1162 26.9997 15.7839"
        stroke={hover ? theme.color.point : theme.color.black}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.26545 19.5432H2.75185C2.33662 19.5432 2 19.8798 2 20.2951V25.8087"
        stroke={hover ? theme.color.point : theme.color.black}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Refresh;
