import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.cityRef = React.createRef();
        this.countryRef = React.createRef();
    }

    findWeather = (e) => {
        e.preventDefault();
        //Reading ref and creating object
        const answer = {
            city: this.cityRef.current.value,
            country: this.countryRef.current.value
        };
        //Send by props
        this.props.dataQuery(answer);
    };
    render() {
        let elemento;

        if (Object.getOwnPropertyNames(this.props.countries).length === 0) {
            return null;
        }
        else{
            const { countries } = this.props;
            elemento = countries.map(country => (
                <option key={country.alpha2Code} value={country.alpha2Code}>{country.name}</option>
                )
            )
        }

        return (
            <form onSubmit={this.findWeather}>
                <div className="row">
                    <div className="form-group col-md-3 offset-md-3">
                        <label>City</label>
                        <input type="text" ref={this.cityRef} className="form-control" placeholder="City"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Country</label>
                        <select name="" id="" className="form-control" ref={this.countryRef}>
                            <option value="" defaultValue="Choose a country">Choose a country</option>
                            {elemento}
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary center mt-2">Search</button>
            </form>
        );
    };
}

export default Form;