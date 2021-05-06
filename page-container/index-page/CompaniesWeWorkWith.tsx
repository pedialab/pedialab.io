import { LogoList } from 'pedialab-shared/components';
import { Typography, Box } from '@material-ui/core';

const content = {
  title: (
    <Typography variant="h2" color="primary">
      Companies
      <br />
      we work with
    </Typography>
  ),
  brandsMarginTop: '4rem',
  brands: [
    { name: 'HYPEBEAST', logoSrc: '/logo_hypebeast.png' },
    { name: 'Codibook', logoSrc: '/logo_codibook.png' },
    { name: 'Gritus', logoSrc: '/logo_gritus.png' },
    { name: 'Mozilla', logoSrc: '/logo_mozilla.png' },
    { name: 'SLEEEP', logoSrc: '/logo_sleeep.png' },
    { name: 'StockViva', logoSrc: '/logo_sv.png' },
    { name: 'SpaceShip', logoSrc: '/logo_spaceship.png' },
    { name: 'GOGOX', logoSrc: '/logo_gogox.png' },
    { name: 'JavaScript', logoSrc: '/logo_js.png' },
    { name: 'HK01', logoSrc: '/logo_hongkong01.png' },
    { name: 'Shaw Brothers Pictures International Limited', logoSrc: '/logo_SB.png' }
  ]
};

const CompaniesWeWorkWith = ({ className }: Partial<{ className: string }>) => {
  const { title, brands, brandsMarginTop } = content;
  return (
    <Box component="article" className={className}>
      <LogoList title={title} brands={brands} brandsMarginTop={brandsMarginTop} />
    </Box>
  );
};
export default CompaniesWeWorkWith;
