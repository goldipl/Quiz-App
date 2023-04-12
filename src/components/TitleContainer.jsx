const TitleContainer = ({title, subtitle}) => {
    return (  
        <div>
            <h1 className="title">{title}</h1>
            <h3 className="subtitle">{subtitle}</h3>
        </div>
    );
}

export default TitleContainer;