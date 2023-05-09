import { theme } from "../../styles/theme";

interface Props {
  hover?: boolean;
}

const Download = ({ hover }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0V7.5H2.5L10 15L17.5 7.5H12.5V0H7.5ZM0 17.5V20H20V17.5H0Z"
        fill={hover ? theme.color.point1 : "black"}
      />
    </svg>
  );
};

export default Download;
