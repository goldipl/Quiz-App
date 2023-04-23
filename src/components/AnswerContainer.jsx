const AnswerContainer = ({item}) => {
    return (  
        <>
            <p>{item.text}</p>
            <img src={item.imgUrl} width="200" height="200" alt="" />
        </>
    );
}

export default AnswerContainer;