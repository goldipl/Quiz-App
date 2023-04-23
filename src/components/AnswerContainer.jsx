import styled from "styled-components";

const AnswerContainer = ({item}) => {
    return (  
        <ImageContainer>
            <p>{item.text}</p>
            <img src={item.imgUrl} width="200" height="200" alt="" />
        </ImageContainer>
    );
}

const ImageContainer = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export default AnswerContainer;