import { Typography, Grid, makeStyles } from '@material-ui/core';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const useStyle = makeStyles({});

const Contact = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  return (
    <Grid id="contact" container className={className}>
      <Grid item sm={6}>
        <ContactInformation />
      </Grid>
      <Grid item sm={6}>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default Contact;