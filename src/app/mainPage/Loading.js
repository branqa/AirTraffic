import React from 'react';
import loading from '../../images/loading.gif';

const Loading = () => {
    return (
        <div className="container-fluid error-page">
            <img src={loading} className="crash" alt="crash"/>
            <div className="jumbotron error-jumbo">
                <h2>Please wait ...</h2>
               
            </div>
        </div>
    )
}

export default Loading;

