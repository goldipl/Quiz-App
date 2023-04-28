import AnswerContainer from "./AnswerContainer";
import styled from "styled-components";

const QuestionContainer = ({item}) => {
    return (  
        <>
            <h2>{item.text}</h2>
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
`;

export default QuestionContainer;