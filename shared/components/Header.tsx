import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useMemo } from 'react';
import LogoWithName from './LogoWithName';
import NavList from './NavList';

const useStyles = makeStyles({
  container: {
    alignItems: 'center'
  },
  lastItem: {
    marginLeft: 'auto'
  }
});

export type HeaderProps = {
  className?: string;
  isActivatedOrder?: number;
  isIndexPage?: boolean
};

const content = [
  { text: 'About', href: '#our-company' },
  { text: 'Pricing', href: '#typical-project-scopes' },
  { text: 'Team', href: '#our-team' },
  { text: 'Case Studies', href: '#case-studies' },
  { text: 'Careers', href: '/careers' },
  { text: 'Contact', href: '#contact' }
];

const inPageLinkToCrossPageLink = (href: string) => (href.startsWith('#') ? '/'.concat(href) : href);

const Header = ({ className, isActivatedOrder, isIndexPage = false }: HeaderProps) => {
  const classes = useStyles();

  const headerList = useMemo(() => content.map(
    (item, index) => ({ text: item.text, href: isIndexPage ? item.href : inPageLinkToCrossPageLink(item.href), isActive: index === isActivatedOrder })), [
    isActivatedOrder, isIndexPage
  ]);

  return (
    <Box component="header" mt="2.25rem" width="100%" className={className}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item>
          <LogoWithName />
        </Grid>
        <Grid item component="nav" className={classes.lastItem}>
          <NavList items={headerList} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
