import withStyles from 'react-jss';
import Main from './layouts/Main';
import globalStyles from './utils/GlobalStyles';


const styles = {
  ...globalStyles,
  title: {
    textAlign: 'center'
  }
};

const App = ({ classes }) => {
  return (
    <div>
      <h1 className={classes.title}>Type a country Name and get to know more about it!</h1>
      <Main />
    </div>
  );
}

export default withStyles(styles)(App);
