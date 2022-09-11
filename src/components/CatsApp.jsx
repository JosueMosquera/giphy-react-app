import { useEffect, useState } from "react";
import GiphyCard from "./GiphyCard";

const CatsApp = () => {
  const [dataToRender, setDataToRender] = useState(null);
  const [wordsToSearch, setWordsToSearch] = useState("");
  const RetrieveAppData = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const parsedReponse = await response.json();
    const dataToSearch = parsedReponse.fact;
    const parsedDataToSearch = dataToSearch.split(" ");
    setWordsToSearch(
      `${parsedDataToSearch[0]} ${parsedDataToSearch[1]} ${parsedDataToSearch[2]}`
    );
    const responseGiphy = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=ff8HqGojwc16d4kVob7qSLQyOYKQa37p&q=${wordsToSearch}&limit=1&offset=0&rating=g&lang=en`
    );
    const parsedGiphyResponse = await responseGiphy.json();
    const giphyData = parsedGiphyResponse.data[0];
    setDataToRender(giphyData);
  };
  useEffect(() => {
    RetrieveAppData();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div
        className="container-app"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          marginBottom: "25px",
        }}
      >
        <button onClick={() => RetrieveAppData()}>refrescar datos</button>
      </div>
      <GiphyCard dataToRender={dataToRender} wordsToSearch={wordsToSearch} />
    </>
  );
};
export default CatsApp;
