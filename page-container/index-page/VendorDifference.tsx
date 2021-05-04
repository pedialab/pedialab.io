import { Box, makeStyles, Typography } from '@material-ui/core';
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
  title: {
    width: '10.3rem',
    marginLeft: '1.6875rem',
    marginRight: '2rem'
  },
  firstSection: {
    borderRightStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.palette.secondary.main
  }
}));

export type VendorDifferenceProps = {
  className?: string;
};

const VendorDifference = ({ className }: VendorDifferenceProps) => {
  const classes = useStyles();
  return (
    <>
      <Box
        component="article"
        className={className}
        borderTop={1}
        borderColor="secondary.main"
        display="flex"
      >
        <Box flexGrow={1} flexBasis={0} className={classes.firstSection}>
          <Box
            mt="0.75rem"
            ml="0.75rem"
            display="flex"
            paddingTop="2.9375rem"
            paddingRight="7%"
          >
            <Typography variant="h3" className={classes.title}>
              {content.vendor.title}
            </Typography>
            <TextList texts={content.vendor.lists} />
          </Box>
        </Box>
        <Box flexGrow={1} flexBasis={0}>
          <Box
            mt="0.75rem"
            ml="0.75rem"
            bgcolor="background.paper"
            display="flex"
            borderRadius="40px"
            paddingTop="2.9375rem"
            paddingRight="7%"
          >
            <Typography
              color="textPrimary"
              variant="h3"
              className={classes.title}
            >
              {content.pedialab.title}
            </Typography>
            <TextList texts={content.pedialab.lists} />
          </Box>
        </Box>
      </Box>
      <LetsTalkButton marginTop="5rem" />
    </>
  );
};

export default VendorDifference;
