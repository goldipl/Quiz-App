import styled from "styled-components";

const TitleContainer = ({title, subtitle}) => {
    return (  
        <div>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </div>
    );
}

const Title = styled.h1 `
    font-weight: 400;
    background: -webkit-linear-gradient(45deg, #4af7cc, #0970e7 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255,255,255,0);
    text-align: center;
`

const Subtitle = styled.h3 `
    font-weight: 200;
    text-align: center;
    padding-bottom: 24px;
    border-bottom: 1px solid #FFFFFF;
    margin-bottom: 24px;
    color: #FFFFFF;
`

export default TitleContainer;