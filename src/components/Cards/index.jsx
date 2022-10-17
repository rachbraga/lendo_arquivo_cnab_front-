import { DataDiv } from "./styles";

const Card = ({ loja, tipo, valor }) => {
  return (
    <DataDiv>
      <h4>{loja} oi</h4>
      <p> {tipo} oi</p>
      <p> R$ {valor} </p>
    </DataDiv>
  );
};

export default Card;
