import {
  Button, Typography, Box, makeStyles
} from '@material-ui/core';

export type CommonButtonProps = { title: string; subtitle?: string };

const useStyle = makeStyles((theme) => ({
  commonButton: {
    width: '22.5rem',
    backgroundColor: theme.palette.background.paper
  }
}));

const CommonButton = ({ title, subtitle }: CommonButtonProps) => {
  const classes = useStyle();

  return (
    <Box width="fit-content">
      <Button className={classes.commonButton}>
        <Typography color="textPrimary" variant="h6" component="span">
          {title}
        </Typography>
      </Button>
      <Box mt="5px">
        <Typography
          variant="subtitle1"
          color="secondary"
          component="p"
          align="center"
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default CommonButton;
