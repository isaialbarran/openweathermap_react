import React from 'react';

const Header = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">This is a simple web page connecting to
                <a href="https://openweathermap.org/"> openweathermap </a> <br/>
                Check the weather in different places. Enjoy!
            </p>
        </div>
    );
};

export default Header;