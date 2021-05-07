import { Typography, Grid, makeStyles } from '@material-ui/core';

const contacts = [
  { way: 'Email', information: 'hi@pedialab.io' },
  { way: 'Phone', information: '+65 8610 9984' }
];

const useStyle = makeStyles({
  root: {
    fontStyle: 'normal',
    '& >:first-child': { marginBottom: '6.75rem' }
  },
  information: {
    color: '#ffffff',
    marginTop: '0.9375rem'
  }
});

const ContactInformation = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  return (
    <Grid component="address" container className={[className, classes.root].join(' ')}>
      <Grid item sm={12}>
        <Typography component="span" variant="h2" color="primary">
          Contact
        </Typography>
      </Grid>
      {contacts.map((contact) => (
        <Grid key={contact.way} item container direction="column" sm={6}>
          <Grid item>
            <Typography component="span" variant="subtitle1" color="secondary">
              {contact.way}
            </Typography>
          </Grid>
          <Grid item className={classes.information}>
            <Typography component="span" variant="body1">
              {contact.information}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactInformation;
