import { LogoList, Member } from 'pedialab-shared/components';
import {
  Typography, Box, Grid, makeStyles
} from '@material-ui/core';

const content = {
  title: (
    <Typography variant="h2" color="primary">
      OUR TEAM
    </Typography>
  ),
  brandsMarginTop: '5rem',
  brands: [
    { name: 'Yahoo!', logoSrc: '/logo_yahoo.png' },
    { name: 'J.P.Morgan', logoSrc: '/logo_jp.png' },
    { name: 'HYPEBEAST', logoSrc: '/logo_hypebeast.png' },
    { name: 'GOGOX', logoSrc: '/logo_gogox.png' },
    { name: '9GAG', logoSrc: '/logo_9gag.png' },
    { name: 'HK01', logoSrc: '/logo_hongkong01.png' },
    { name: 'Oursky', logoSrc: '/logo_oursky.png' },
    { name: 'Entrepreneur First', logoSrc: '/logo_entrepreneur-first.png' },
    { name: 'StockViva', logoSrc: '/logo_sv.png' },
    { name: 'House News', logoSrc: '/logo_house_news.png' },
    { name: 'SpaceShip', logoSrc: '/logo_spaceship.png' },
    { name: 'Developer Circles from Facebook', logoSrc: '/logo_fb_dev_cir.png' }
  ]
};

const members = [
  {
    avatarSrc: '/avatar_vincent.jpg',
    name: 'Vincent Lau',
    position: 'Partner'
  },
  {
    avatarSrc: '/avatar_keung.jpg',
    name: 'Keung Ho',
    position: 'Partner'
  },
  {
    avatarSrc: '/avatar_roger.jpg',
    name: 'Roger Ho',
    position: 'Partner'
  }
];

const useStyle = makeStyles({
  members: {
    marginTop: '5rem'
  }
});

const OurTeam = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  const { title, brands, brandsMarginTop } = content;
  return (
    <Box id="our-team" component="article" className={className}>
      <LogoList title={title} brands={brands} brandsMarginTop={brandsMarginTop}>
        <Grid container justify="space-between" className={classes.members}>
          {members.map((member) => (
            <Grid item key={member.name}>
              <Member name={member.name} position={member.position} avatarSrc={member.avatarSrc} />
            </Grid>
          ))}
        </Grid>
      </LogoList>
    </Box>
  );
};
export default OurTeam;
