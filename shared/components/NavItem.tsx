import { Button, Box } from '@material-ui/core';

export type NavItemProps = {
  isActive?: boolean;
  text: string;
};

const NavItem = ({ isActive = false, text }: NavItemProps) => (
  <Box mx={2} component="li">
    <Button color={isActive ? 'primary' : 'secondary'}>{text}</Button>
  </Box>
);

export default NavItem;
