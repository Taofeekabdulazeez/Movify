// import styled from "styled-components";
import { PiSpinnerBold } from "react-icons/pi";

// const StyledSpinner = styled.span`
//   height: 6rem;
//   width: 6rem;
//   fill: #f38e82;
//   animation: rotate 2s infinite linear;
// `;

function Spinner() {
  return <PiSpinnerBold className="spinner" color="var(--spinner)" />;
}

export default Spinner;
