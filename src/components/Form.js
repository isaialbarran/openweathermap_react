import React from 'react';

const Form = (props) => {

    let cityRef = React.createRef();
    let countryRef = React.createRef();

    const findWeather = (e) => {
        e.preventDefault();
        //Reading ref and creating object
        const answer = {
            city: cityRef.current.value,
            country: countryRef.current.value
        };
        //Send by props
        props.dataQuery(answer);
    };

    return (
        <form onSubmit={findWeather}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>City</label>
                    <input type="text" ref={cityRef} className="form-control" placeholder="City"/>
                </div>
                <div className="form-group col-md-6">
                    <label>Country</label>
                    <select name="" id="" className="form-control" ref={countryRef}>
                        <option value="" defaultValue="Elige un país"></option>
                        <option value="AR">Argentina</option>
                        <option value="ES">España</option>
                        <option value="MX">México</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    );
};

export default Form;