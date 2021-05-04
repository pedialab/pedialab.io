import {
  Button, Typography, Box, makeStyles
} from '@material-ui/core';

export type CommonButtonProps = {
  title: string;
  subtitle?: string;
  width?: string;
  href?: string;
};

const useStyle = makeStyles((theme) => ({
  commonButton: {
    backgroundColor: theme.palette.background.paper
  }
}));

const CommonButton = ({
  title,
  subtitle,
  href,
  width = '22.5rem'
}: CommonButtonProps) => {
  const classes = useStyle();

  return (
    <Box display="flex" flexDirection="column" width={width}>
      <Button fullWidth href={href} className={classes.commonButton}>
        <Typography color="textPrimary" variant="h6" component="span">
          {title}
        </Typography>
      </Button>
      {subtitle && (
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
      )}
    </Box>
  );
};

export default CommonButton;
