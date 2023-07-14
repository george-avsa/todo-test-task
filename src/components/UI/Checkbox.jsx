import './uiStyles.css';

export function Checkbox({
    id
}) {
    return (
        <div>
            <input 
                type="checkbox" 
                className="checkbox" 
                id={`taskCheckbox${id}`} 
                name={`taskCheckbox${id}`} 
                value="yes"
                style={{opacity: "0"}}
            />
            <label for={`taskCheckbox${id}`}></label>
        </div>
    );   
}