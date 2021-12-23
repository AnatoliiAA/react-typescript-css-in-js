import styled from "@emotion/styled";

const Button = styled.button`
  width: 180px;
  height: 50px;
  margin: 20px 0 0 0;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to bottom, white 10%, lightgrey 100%);
  }
`;

export default Button;
