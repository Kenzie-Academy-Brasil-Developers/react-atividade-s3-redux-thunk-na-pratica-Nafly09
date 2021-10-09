import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useState } from "react";
import { StyledInput, StyledButton } from "./styles";

export const NewCommentButton = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  return (
    <>
      <StyledInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Novo comentário"
      />
      <StyledButton
        variant="contained"
        onClick={() => {
          input !== "" && dispatch(addCommentThunk(input));
        }}
      >
        new comment
      </StyledButton>
    </>
  );
};
