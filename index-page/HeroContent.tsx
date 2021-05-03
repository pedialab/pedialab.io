import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  heroImage: {
    filter: 'grayscale(1)'
  },
  image: {
    width: '100%',
    minWidth: '100%'
  }
});

const HeroContent = () => {
  const classes = useStyles();
  return (
    <Box mt="7rem">
      <Typography variant="h2">
        Architecting software, teams,
        <br />
        companies and dreams
      </Typography>
      <Box maxWidth="100%" mt="2.5rem" borderRadius="40px" overflow="hidden">
        <img
          src="/hero_image.jpg"
          alt="index hero"
          className={[classes.heroImage, classes.image].join(' ')}
        />
      </Box>
      <Box ml="34.46%" mt="8rem">
        <Typography component="h3" variant="h2">
          The Pedia Lab
          <br />
          Difference
        </Typography>
        <Box maxWidth="27.43vw" marginTop={3}>
          <Typography component="p" variant="body1" color="secondary">
            Why employ tech-lead as a service to grow together instead of just
            outsourcing?
          </Typography>
        </Box>
        <Box
          mt="4rem"
          borderRadius="60px"
          overflow="hidden"
          maxWidth="max-content"
        >
          <img
            src="/the_pedia_lab_difference.jpg"
            alt="index hero"
            loading="lazy"
            className={classes.image}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroContent;
