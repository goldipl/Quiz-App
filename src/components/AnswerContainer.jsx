import styled from "styled-components";

const AnswerContainer = ({item}) => {
    return (  
        <ImageContainer>
            <ImageTitle>{item.text}</ImageTitle>
            <Image src={item.imgUrl} width="200" height="200" alt="" />
        </ImageContainer>
    );
}

const ImageContainer = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const ImageTitle = styled.p `
    position: absolute;
    bottom: -24px;
    left: 10%;
    text-align: center;
    background-color: #FFFFFF;
    border-radius: 16px;
    width: calc(80%);
`

const Image = styled.img `
    border-radius: 24px;
    object-fit: cover;
`

export default AnswerContainer;