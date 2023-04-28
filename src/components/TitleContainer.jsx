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
    background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);
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
    color: #000000;
`

export default TitleContainer;