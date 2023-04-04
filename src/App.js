import { useEffect, useState } from "react";
import TitleContainer from "./componenets/TitleContainer";
import QuestionContainer from "./componenets/QuestionContainer";
import AppTitle from "./componenets/AppTitle";

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