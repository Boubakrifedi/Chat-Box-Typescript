import MessagesContainer from "../../containers/MessagesContainer";
import SendContainer from "../../containers/SendContainer";
import { Container, HomeTitle, Main } from "./HomeWrapper";
import { firebaseAuth } from "../../services/firebaseService";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../services/firebaseService";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const { logOut } = firebaseAuth();
  const history = useNavigate();
  const handleClick = () => {
    logOut()
      .then((res) => {
        history("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    if (!currentUser()) history("/login");
  }, []);
  return (
    <>
      <button onClick={handleClick}> Logout</button>

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
