import styled from "styled-components";
import { Button } from "@material-ui/core";

export const StyledInput = styled.input`
  border-radius: 3px;
  padding: 2px 5px;
  margin-right: 5px;
  width: 17rem;
  height: 2rem;
  ::placeholder {
    color: var(--lightgrey);
  }
`;

export const StyledButton = styled(Button)`
  && {
    padding: 3px;
    font-size: 10px;
    width: 7rem;
    height: 2rem;
    background-color: var(--blue);
    color: var(--white);
    font-weight: bold;
  }
`;
