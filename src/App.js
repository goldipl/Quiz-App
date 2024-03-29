import { useEffect, useState } from "react";
import TitleContainer from "./components/TitleContainer";
import QuestionContainer from "./components/QuestionContainer";
import AppTitle from "./components/AppTitle";

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
      <AppTitle/>
      <TitleContainer title={quiz?.title} subtitle={quiz?.subtitle}/> 
       {quiz && quiz.content.map((contentItem, index) => (
          <QuestionContainer
            key={index}
            item={contentItem}
          />
       ))}
    </div>
  );
}

export default App;