import { NewCommentButton } from "./components/newCommentButton";
import { CommentBox } from "./components/commentBox";
import GlobalStyle from "./styles/global";
import { UserCard } from "./components/userDisplay";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <UserCard />
      <CommentBox />
      <NewCommentButton />
    </div>
  );
}

export default App;
