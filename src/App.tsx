import { useState } from "react";
// import "./App.scss";
import { Form, FormDataStructure } from "./components/form";
import { Joke } from "./components/joke";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
// import sourceOfJokes from "./jokes-data";

interface JokeType {
  id?: number;
  type: string;
  setup: string;
  punchline: string;
}

function App() {
  const [userName, setUserName] = useState<string>();
  const [jokesData, setJokesData] = useState<JokeType[]>([]);

  const fetchData = async (type:string, count:number) => {
     const resp = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/ten`)
     const data = await resp.json();
     setJokesData(data.slice(0, count));
  };

  // const generateJokesData = (type:string, count:number, source: JokeType[]) => {
  //   const data = [...source];
  //   setJokesData(
  //     data
  //       .filter((item) => item.type === type)
  //       .map((item, index) => ({ ...item, id: index }))
  //       .slice(0, count)
  //   );
  // };

  console.log(jokesData);
  const handleSendData = (data: FormDataStructure) => {
    setUserName(data.name);
    // fetchData(data.type, data.count);
    fetchData(data.type, data.count);
  };

  return (
    <div className="app">
      {jokesData.length > 0 ? (
        <div className="app__container">
          <h2>{userName}</h2>
          <h3>There are jokes for you!</h3>
          {jokesData.map((item) => (
            <Joke key={item.id} setup={item.setup} punchline={item.punchline} showRating={false} />
          ))}
          <span
            className="app__container__back-icon"
            onClick={() => setJokesData([])}
          >
            <ArrowUturnLeftIcon />
          </span>
        </div>
      ) : (
        <div className="app__container">
          <h2>Welcome to jokes generator</h2>
          <h3>Please fill the form:</h3>
          <Form onSubmitData={handleSendData} />
        </div>
      )}
    </div>
  );
}

export default App;
