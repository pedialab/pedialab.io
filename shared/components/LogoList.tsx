import { Box, Grid, makeStyles } from '@material-ui/core';

export type Brand = {
  name: string;
  logoSrc: string;
};
export type LogoListProps = {
  title: JSX.Element;
  brands: Brand[];
  brandsMarginTop?: string;
  children?: JSX.Element;
};

const useStyle = makeStyles({
  brands: { marginTop: '' }
});

const LogoList = ({
  title, brands, brandsMarginTop, children
}: LogoListProps) => {
  const classes = useStyle();
  return (
    <Grid container direction="column">
      <Grid item>{title}</Grid>
      <Grid item>{children}</Grid>
      <Box mt={brandsMarginTop} />
      <Grid item container className={classes.brands} justify="center" spacing={10}>
        {brands.map((brand) => (
          <Grid item key={brand.name}>
            <img src={brand.logoSrc} alt={brand.name.concat(' logo')} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default LogoList;
