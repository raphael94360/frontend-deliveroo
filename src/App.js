import "./App.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [string, setString] = useState("");

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span> En cours de chargement... </span>
  ) : (
    <>
      <header>
        <Header
          name={data.restaurant.name}
          description={
            "Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique."
          }
          picture={"https://f.roocdn.com/images/menus/17697/header-image.jpg"}
        />
      </header>
      <main className='container'>
        {data.categories.map((categorie, index) => {
          return (
            categorie.meals.length > 0 && (
              <Section
                categorie={categorie}
                key={index}
                setString={setString}
                string={string}
              />
            )
          );
        })}
      </main>
    </>
  );
}

export default App;
