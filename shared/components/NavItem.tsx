import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  isActive: {
    borderBottomWidth: '1px',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderRadius: '0'
  }
}));

export type NavItemProps = {
  isActive?: boolean;
  text: string;
};

const NavItem = ({ isActive = false, text }: NavItemProps) => {
  const classes = useStyles();

  return (
    <Button
      color={isActive ? 'primary' : 'secondary'}
      className={isActive ? classes.isActive : ''}
    >
      {text}
    </Button>
  );
};

export default NavItem;
