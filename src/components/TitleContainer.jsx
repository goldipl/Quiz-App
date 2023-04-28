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
    font-weight: 700;
    text-align: center;
`

const Subtitle = styled.h3 `
    font-weight: 400;
    text-align: center;
    padding-bottom: 24px;
    border-bottom: 1px solid #99999966;
    margin-bottom: 24px;
`

export default TitleContainer;