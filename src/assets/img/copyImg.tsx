import { theme } from "../../styles/theme";
interface Props {
  hover?: boolean;
}

function CopyImg({ hover }: Props) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0V12.5H12.5V0H0ZM15.625 6.25V15.625H6.25V18.75H18.75V6.25H15.625ZM21.875 12.5V21.875H12.5V25H25V12.5H21.875Z"
        fill={hover ? theme.color.point1 : "black"}
      />
    </svg>
  );
}

export default CopyImg;
