import React, {useState} from "react";
import AnswersData from "./AnswersData";

export function Answers(){
    const [searchText, setSearchText] = useState("");
    const [outputRes, setOutputRes] = useState( [{}] );
    
    const m3o = require('@m3o/m3o-node');
    const client = new m3o.Client({ token: 'NGNlMmViMDUtNjUxZC00MjE0LTg4NGQtMzJlYWIxOTk4ODZi' });
    const API_PAYLOAD = { "query" : searchText };

    function handleTextChange(event){
        const { value } = event.target;
        setSearchText( value );
    }

    function handleGo(){
        client.call( 'answer', 'Question', API_PAYLOAD )
            .then( response => {
                setOutputRes( response );
            });
        return 'response-done';
    }

    return(
        <div>
        <form onSubmit={event => { event.preventDefault() }}>
            <input maxLength="50" type="search" placeholder="Ask me anything?" onChange={handleTextChange} value={searchText} />
            <button type="submit" onClick={handleGo}>Go</button>
        </form>
            <AnswersData responseData={outputRes} />
        </div>
    );
}

export default Answers;