import React from 'react';

function AnswersData( props ){
    return(
        <div class="answersResponse">
            <p>{props.responseData.answer}</p>
            <p><a class="App-link" href={props.responseData.url}>{props.responseData.url}</a></p>
            <img src={props.responseData.image} alt={props.responseData.answer} />
        </div>
    );
}

export default AnswersData;