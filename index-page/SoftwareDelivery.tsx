import {
  Box, Grid, makeStyles, Typography
} from '@material-ui/core';
import { useMemo } from 'react';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'table-caption'
  },
  listRoot: {
    borderTop: '1px',
    borderTopStyle: 'solid',
    color: theme.palette.secondary.main,
    marginTop: '1rem',
    paddingTop: '1.625rem',
    lineHeight: '2',
    paddingLeft: '2rem'
  },
  listItem: {
    '&::marker': {
      fontSize: '1.3rem'
    }
  }
}));

const SoftwareDelivery = () => {
  const classes = useStyles();
  const listContent = useMemo(
    () => [
      'We’ve been through it.',
      'After sweats and tears, your startup is taking off,',
      'but now stuck at technical execution.',
      'Next round of funding is ticking.',
      'You need experienced and competent Tech-Lead who understand your business and walk the talk.'
    ].map((content) => (
      <Box component="li" key={content} className={classes.listItem}>
        <Typography variant="body2">{content}</Typography>
      </Box>
    )),
    [classes]
  );
  return (
    <Box component="article" mt="14rem">
      <Grid container>
        <Grid item component="section" lg={6}>
          <Typography variant="h2" className={classes.header}>
            PROBLEM OF SOFTWARE DELIVERY
          </Typography>
        </Grid>
        <Grid item component="section" lg={6}>
          <Typography variant="h3">
            Your Rocket startup or project
            <br />
            needs a Rocket Engine.
          </Typography>
          <Box component="ul" className={classes.listRoot}>
            {listContent}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SoftwareDelivery;
