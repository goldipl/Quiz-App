import styled from "styled-components";

const AppTitle = () => {
    return (  
        <QuizTitle>Quiz App</QuizTitle>
    );
}

const QuizTitle = styled.h1 `
    font-weight: 700;
    text-align: center;
    text-decoration: underline;
`

export default AppTitle;