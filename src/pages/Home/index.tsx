import MessagesContainer from "../../containers/MessagesContainer";
import SendContainer from "../../containers/SendContainer";
import { Container, HomeTitle, Main } from "./HomeWrapper";

const Home = () => {
  return (
    <>
      <HomeTitle>Chat App</HomeTitle>
      <Container>
        <Main>
          <MessagesContainer />
          <SendContainer />
        </Main>
      </Container>
    </>
  );
};
export default Home;
