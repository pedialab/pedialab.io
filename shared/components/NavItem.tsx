import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  isActive: {
    borderBottomWidth: '1px',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0'
  }
}));

export type NavItemProps = {
  isActive?: boolean;
  text: string;
};

const NavItem = ({ isActive = false, text }: NavItemProps) => {
  const classes = useStyles();

  return (
    <Box mx={3} component="li">
      <Button
        color={isActive ? 'primary' : 'secondary'}
        className={isActive ? classes.isActive : ''}
      >
        {text}
      </Button>
    </Box>
  );
};

export default NavItem;
