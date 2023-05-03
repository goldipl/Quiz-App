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
        gap: 32px;
    }
`;

const Question = styled.h2 `
    background: -webkit-linear-gradient(45deg, #4af7cc, #0970e7 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255,255,255,0);
    @media (max-width: 600px) {
        text-align: center
    }
`

export default QuestionContainer;