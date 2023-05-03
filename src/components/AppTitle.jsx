import styled from "styled-components";

const AppTitle = () => {
    return (  
        <QuizTitle>Quiz App</QuizTitle>
    );
}

const QuizTitle = styled.h1 `
    font-weight: 700;
    text-align: center;
    background: -webkit-linear-gradient(45deg, #4af7cc, #0970e7 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255,255,255,0);
    margin-top: 0;
`

export default AppTitle;