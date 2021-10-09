import { useSelector } from "react-redux";
import { TextContainer, CommentsContainer } from "./styles";

export const CommentBox = () => {
  const comments = useSelector((store) => store.user.comments);
  return (
    <CommentsContainer>
      {comments.length > 0 &&
        comments.map((comment, index) => (
          <TextContainer key={index}>{comment}</TextContainer>
        ))}
    </CommentsContainer>
  );
};
