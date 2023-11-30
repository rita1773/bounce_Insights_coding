import axios from "axios";
import React, { useState } from "react";
import withStyles from 'react-jss';
import config from "../config";
import { CountryInfo, MessageDisplayer, SearchBar } from "../components";

const styles = {}
const Main = ({ classes }) => {
    const [country, setCountry] = useState("")
    const [countryData, setCountryData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    //storing user input data
    const handleInputChange = (event) => {
        const inputCountry = event.target.value;
        setCountry(inputCountry)
    }
    //calling the node api created on user search
    const fetchCountry = () => {
        setCountryData(null)
        setError(false)
        setLoading(true)
        axios.get(`${config.API_URL}/countries/${country}`).then(res => {
            setLoading(false)
            if (res.data) {
                setCountryData(res.data)
            }
            else {
                setLoading(false)
                setError(true)
            }
        }).catch((e) => {
            setLoading(false)
            setError(true)
        });

    }

    return (
        <>
            <SearchBar fetchCountry={fetchCountry} handleInputChange={handleInputChange} />
            {loading && <MessageDisplayer info="Loading..." />}
            {error && <MessageDisplayer info="Please provide a valid country name!" />}
            {countryData && <CountryInfo countryData={countryData} />}
        </>
    )

};

export default withStyles(styles)(Main);
