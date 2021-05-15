import {
  Box, Grid, makeStyles, Typography
} from '@material-ui/core';
import { TextList } from 'pedialab-shared/components';
import LetsTalkButton from './LetsTalkButton';

const content = {
  vendor: {
    title: 'Typical Vendors',
    lists: [
      'They prioritize other clients, risking project completion and don’t understand startup needs.',
      'Core expertise is loss and your product become a black box for you. Investors show doubts.',
      'Your budget is spent on their sales and middle management.'
    ]
  },
  pedialab: {
    title: 'Pedia Lab',
    lists: [
      'We’re experienced startup founders and tech Lead, committed to work with your team, persons you can count on.',
      'Day to day you gain insights in technology related to your Product and stay on top of the game.',
      'Your budget spent investing in technology at your company.'
    ]
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderColor: theme.palette.secondary.main
  },
  title: {
    width: '10.3rem',
    marginLeft: '1.6875rem',
    marginRight: '2rem'
  },
  firstSection: {
    borderRightStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
      borderStyle: 'none'
    }
  },
  letsTalk: {
    marginTop: '5rem'
  }
}));

const VendorDifference = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();
  return (
    <>
      <Grid container component="article" className={[className, classes.root].join(' ')}>
        <Grid item lg={6} xs={12} className={classes.firstSection}>
          <Box mt="0.75rem" ml="0.75rem" display="flex" paddingTop="2.9375rem" paddingRight="7%">
            <Typography variant="h3" color="primary" className={classes.title}>
              {content.vendor.title}
            </Typography>
            <TextList texts={content.vendor.lists} />
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Box mt="0.75rem" ml="0.75rem" bgcolor="background.paper" display="flex" borderRadius="40px" paddingTop="2.9375rem" paddingRight="7%">
            <Typography color="textPrimary" variant="h3" className={classes.title}>
              {content.pedialab.title}
            </Typography>
            <TextList texts={content.pedialab.lists} />
          </Box>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <LetsTalkButton className={classes.letsTalk} />
      </Grid>
    </>
  );
};

export default VendorDifference;
