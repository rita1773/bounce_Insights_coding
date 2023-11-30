import React from "react";
import withStyles from 'react-jss';
import globalStyles from "../utils/GlobalStyles";
import { parseValue } from "../utils/helper";


const styles = {
    ...globalStyles,
    dataWrapper: {
        composes: "$wrapper",
        background: 'rgb(30, 30, 30)',
        borderRadius: '10px',
        padding: '15px',
    },
    countryProps: {
        textTransform: "capitalize",
        width: '30%'
    },
    listItems: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '29px'
    },
    countryValue: {
        width: '70%',
        fontSize: '20px'
    },
    dataBox: {
        width: "100%"
    }
}

const CountryInfo = ({ classes, countryData }) => {
    return (
        <>
            <div className={classes.dataWrapper}>
                <div className={classes.dataBox}>
                    {Object.keys(countryData).map((key, index) => (
                        <div className={classes.listItems} key={index}>
                            <h2 className={classes.countryProps}>{key}</h2>
                            <div className={classes.countryValue}>{parseValue(key, countryData)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

};

export default withStyles(styles)(CountryInfo);
