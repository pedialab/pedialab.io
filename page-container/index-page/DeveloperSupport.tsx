import { Grid, makeStyles, Typography } from '@material-ui/core';
import LetsTalkButton from './LetsTalkButton';

const useStyle = makeStyles({
  letsTalk: {
    marginTop: '9.375rem'
  }
});

const DeveloperSupport = () => {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item container direction="column">
        <Grid item>
          <Typography>Developer Support</Typography>
        </Grid>
        <Grid item>
          <Typography>Our team readily provide your team support in these areas which are time consuming and require steep learning curve.</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <img src="" alt="" />
      </Grid>
      <Grid className={classes.letsTalk}>
        <LetsTalkButton />
      </Grid>
    </Grid>
  );
};

export default DeveloperSupport;
