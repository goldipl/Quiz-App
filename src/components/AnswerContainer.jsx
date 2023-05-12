import styled from "styled-components";

const AnswerContainer = ({item}) => {
    return (  
        <ImageContainer>
            <ImageTitle>{item.text}</ImageTitle>
            <Image src={item.imgUrl} width="200" height="200" alt="" />
        </ImageContainer>
    );
}

const ImageContainer = styled.a `
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    cursor: pointer;
    border-radius: 24px;
    &:hover {
        outline: 1px solid #4af7cc;
        box-shadow: 0 0 16px 1px #4af7cc;
    }
`;

const ImageTitle = styled.p `
    position: absolute;
    bottom: -24px;
    left: 10%;
    text-align: center;
    background-color: #FFFFFF;
    border-radius: 16px;
    width: 80%;
`

const Image = styled.img `
    border-radius: 24px;
    object-fit: cover;
`

export default AnswerContainer;