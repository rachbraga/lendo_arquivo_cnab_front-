import { useState, useEffect } from "react";
import MenuBar from "../../components/Menu";
import { Container, Response, Search } from "./styles";
import { api } from "../../services";
import Card from "../../components/Cards/index";

export const Home = () => {
  const [cardFile, setCardFile] = useState();
  const [saving, setSaving] = useState(false);
  const [cnabList, setCnabList] = useState([]);

  const handleUploadFile = (e) => setCardFile(e.target.files[0]);

  const addNewFile = async () => {
    setSaving(true);
    const data = new FormData();
    data.append("file", cardFile);

    api
      .post(`/api/upload/${cardFile.name}`, cardFile)
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    api
      .get("/api/dados/")
      .then((response) => setCnabList(response.data))
      .catch((err) => console.log(err));
  });
  console.log(cnabList);

  return (
    <>
      <MenuBar />
      <Container>
        <Search>
          <input
            type="file"
            onChange={handleUploadFile}
            accept="application/txt"
          />
          <button onClick={addNewFile}>Enviar</button>
        </Search>
        <Response>
          {cnabList.map(({ loja, tipo, valor }) => (
            <Card loja={loja} tipo={tipo} valor={valor} />
          ))}
        </Response>
      </Container>
    </>
  );
};
