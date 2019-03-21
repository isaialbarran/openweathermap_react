import React from 'react';

const Error = (props) => {
    return (
            <div className="row justify-content-center m-3">
                <div className="alert alert-danger col-md-auto" role="alert">
                    {props.message}
                </div>
            </div>
    );
};

export default Error;