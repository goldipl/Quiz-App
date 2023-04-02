import AnswerContainer from "./AnswerContainer";

const QuestionContainer = ({item}) => {
    return (  
        <>
            <h2>{item.text}</h2>
            <div>
                {item && item.answers.map((contentItem2, index2) => (
                    <AnswerContainer
                    key={index2}
                    item={contentItem2}
                    />
                ))}
            </div>
         </>
    );
}

export default QuestionContainer;