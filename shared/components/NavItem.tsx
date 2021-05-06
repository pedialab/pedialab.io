import { Button, Box, makeStyles } from '@material-ui/core';

export type NavItemProps = {
  text: string;
  href: string;
  isActive?: boolean;
};

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: 'normal'
  },
  isActive: {
    borderBottomWidth: '1px',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0'
  }
}));

const NavItem = ({ text, href, isActive = false }: NavItemProps) => {
  const classes = useStyles();
  return (
    <Box mx={2} component="li">
      <Button href={href} color={isActive ? 'primary' : 'secondary'} className={isActive ? classes.button.concat(classes.isActive) : classes.button}>
        {text}
      </Button>
    </Box>
  );
};

export default NavItem;
