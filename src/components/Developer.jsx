import './styles.css';

const Developer = ({name, age, country}) => {
    return (
        <li className="developer-card">
            <div className="developer-element__container">
                <label htmlFor="name">Dev:</label>
                <h2 name="name" className="developer-element">{name}</h2>
            </div>
            
            <div className="developer-element__container">
                <label htmlFor="age">Idade:</label>
                <p name="age" className="developer-element">{age}</p>
            </div>

            <div className="developer-element__container">
                <label htmlFor="country">País:</label>
                <p name="country" className="developer-element">{country}</p>
            </div>
        </li>
    );
}

export default Developer;