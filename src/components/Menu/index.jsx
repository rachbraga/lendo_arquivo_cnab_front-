import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container } from "./styles";

const MenuBar = ({ name, children, path, setAuthenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <img src={logo} alt="Logo da KenzieHub" />
      <button
        onClick={() => {
          handleNavigation(path);
        }}
      >
        {" "}
        {children}{" "}
      </button>
    </Container>
  );
};
export default MenuBar;
