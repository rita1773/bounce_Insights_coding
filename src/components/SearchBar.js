import React from "react";
import withStyles from 'react-jss';
import globalStyles from "../utils/GlobalStyles";


const styles = {
    ...globalStyles,
    searchWrapper: {
        composes: '$wrapper'
    },
    inputBox: {
        padding: '10px',
        width: '60%'
    },
    searchButton: {
        padding: '10px',
        color: 'white',
        background: 'rgb(53, 53, 53)',
        border: 'solid 2px rgb(53, 53, 53)',
        cursor: 'pointer'
    }
}

const SearchBar = ({ classes, handleInputChange, fetchCountry }) => {
    return (
        <>
            <div className={classes.searchWrapper}>
                <input className={classes.inputBox} onChange={handleInputChange}></input>
                <div className={classes.iconWrapper}>
                    <button className={classes.searchButton} onClick={() => fetchCountry()}>Search</button>
                </div>
            </div>
        </>
    )

};

export default withStyles(styles)(SearchBar);
