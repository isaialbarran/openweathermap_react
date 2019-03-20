import React from 'react';

const Error = (props) => {
    return (
        <div className="alert alert-danger m-5" role="alert">
            {props.message}
        </div>
    );
};

export default Error;