import AnswerContainer from "./AnswerContainer";
import styled from "styled-components";

const QuestionContainer = ({item}) => {
    return (  
        <>
            <Question>{item.text}</Question>
            <AnswersContainer>
                {item && item.answers.map((contentItem2, index2) => (
                    <AnswerContainer
                        key={index2}
                        item={contentItem2}
                    />
                ))}
            </AnswersContainer>
         </>
    );
}

const AnswersContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 824px;
    gap: 8px;
    @media (max-width: 600px) {
        justify-content: center;
    }
`;

const Question = styled.h2 `
    background: -webkit-linear-gradient(45deg, #09009f, #00ff95 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255,255,255,0);
    text-align: left;
    @media (max-width: 600px) {
        text-align: center
    }
`

export default QuestionContainer;