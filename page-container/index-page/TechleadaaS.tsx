import { Box, makeStyles, Typography } from '@material-ui/core';
import { TextList } from 'pedialab-shared/components';

const useStyles = makeStyles({
  root: {
    borderTopLeftRadius: '40px',
    borderBottomLeftRadius: '40px',
    backgroundColor: '#333333'
  },
  imgContainer: {
    transform: 'translate(0, -8.6%)',
    '& > img': {
      width: '100%',
      height: 'auto'
    }
  }
});

const content = [
  'Don’t let poor execution get in your way.',
  'Our tech-lead work closely with your team on architecture, coaching to provide you with hard-earned battlefield experiences.',
  'Grow with you your team, delegate non-core work and serve both short-term and long-term need.'
];

export type TechleadaaSProps = {
  className?: string;
};

const TechleadaaS = ({ className }: TechleadaaSProps) => {
  const classes = useStyles();

  return (
    <Box
      component="article"
      width="100%"
      className={[className, classes.root].join(' ')}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Box>
        <Typography variant="h3">Tech Lead as a Service</Typography>
        <Box mt="1.5rem">
          <TextList texts={content} textColor="primary.main" />
        </Box>
      </Box>
      <Box
        className={classes.imgContainer}
        borderRadius="50px"
        overflow="hidden"
        width="43.31%"
      >
        <img loading="lazy" src="/tech_lead_as_a_service.jpg" alt="" />
      </Box>
    </Box>
  );
};

export default TechleadaaS;
