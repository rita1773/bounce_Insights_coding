import React from "react";
import withStyles from 'react-jss';


const styles = {
    searchWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10%',
    }
}

const MessageDisplayer = ({ classes, info }) => {
    return (
        <>
            <div className={classes.searchWrapper}>{info}</div>
        </>
    )

};

export default withStyles(styles)(MessageDisplayer);
