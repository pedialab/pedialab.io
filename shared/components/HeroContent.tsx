import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  image: {
    filter: 'grayscale(1)'
  }
});

const HeroContent = () => {
  const classes = useStyles();
  return (
    <Box mt="72px">
      <Typography variant="h2" color="primary">
        Architecting software, teams,
        <br />
        companies and dreams
      </Typography>
      <Box width="100%" mt="40px" borderRadius="40px" overflow="hidden" />
      <Box ml="27.43vw" mt="127px">
        <Typography component="h3" variant="h2" color="primary">
          The Pedia Lab
          <br />
          Difference
        </Typography>
        <Box maxWidth="27.43vw">
          <Typography component="p" variant="body1" color="secondary">
            Why employ tech-lead as a service to grow together instead of just
            outsourcing?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroContent;
