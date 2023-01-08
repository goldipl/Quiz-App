import { useEffect, useState } from "react";
import TitleContainer from "./componenets/TitleContainer";

const App = () => {

  const [quiz, setQuiz] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://localhost:8000/quiz");
      const json = response.json();
      setQuiz(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="app_container">
      <TitleContainer />
    </div>
  );
}

export default App;