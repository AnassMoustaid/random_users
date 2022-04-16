import "./input.style.css"

export const Input =(props) => {
    return(
        <input 
        className="input"
         type="search"
        placeholder='Search that user...' 
        onChange={props.handleChange} // we changed onChange to handleChange in app.js
        />
    );
};