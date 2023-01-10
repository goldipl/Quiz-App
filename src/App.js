import { useEffect, useState } from "react";
import TitleContainer from "./componenets/TitleContainer";

const App = () => {

  const [quiz, setQuiz] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/quiz");
      const json = await response.json();
      console.log(json);
      setQuiz(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  console.log(quiz);

  return (
    <div className="wrapper">
      {<TitleContainer title={quiz?.title} subtitle={quiz?.subtitle}/> }
    </div>
  );
}

export default App;