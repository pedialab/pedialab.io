import {
  Typography, Grid, makeStyles, TextField, Button
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  title: {
    color: '#ffffff'
  },
  formRoot: {
    marginTop: '7rem',
    width: '28.75rem',
    '& > div': {
      marginBottom: '3rem',
      '&:last-child': {
        marginTop: '1.8125rem',
        marginBottom: 0
      }
    },
    '& input, & textarea, & label': {
      fontSize: '1.125rem',
      color: theme.palette.text.secondary
    },
    '& button[type="submit"]': {
      backgroundColor: theme.palette.background.paper
    }
  },
  inputRoot: {
    '& > .MuiInput-underline:before': {
      borderBottomColor: '#333333',
      bottom: '-0.25rem'
    },
    '& textarea::placeholder': {
      color: 'white'
    }
  }
}));

const ContactForm = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  return (
    <Grid container className={className} direction="column">
      <Grid item className={classes.title}>
        <Typography component="p" variant="h3">
          Get in touch with us.
        </Typography>
        <Typography component="p" variant="subtitle1" color="secondary">
          Got a project you&#39;re excited about and think we can help?
        </Typography>
      </Grid>
      <Grid item />
      <Grid
        component="form"
        className={classes.formRoot}
        onSubmit={(event) => {
          event.preventDefault();
        }}
        container
        justify="space-between"
      >
        <Grid item sm={12}>
          <TextField id="guest-name" fullWidth label="Name" classes={{ root: classes.inputRoot }} />
        </Grid>
        <Grid item sm={5}>
          <TextField id="guest-email" fullWidth type="email" label="Email" classes={{ root: classes.inputRoot }} />
        </Grid>
        <Grid item sm={5}>
          <TextField id="guest-phone" fullWidth type="tel" label="Phone" classes={{ root: classes.inputRoot }} />
        </Grid>
        <Grid item sm={12}>
          <TextField id="guest-company" fullWidth label="Company" classes={{ root: classes.inputRoot }} />
        </Grid>
        <Grid item sm={12}>
          <TextField id="guest-message" label="What’s your project about? How can we help?" fullWidth multiline classes={{ root: classes.inputRoot }} />
        </Grid>
        <Grid item sm={5}>
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
