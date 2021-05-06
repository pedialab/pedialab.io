import {
  Grid, Box, makeStyles, Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  title: {}
});

const content = [];

export type ProjectScopesProps = {
  className?: string;
};

const ProjectScopes = ({ className }: ProjectScopesProps) => {
  const classes = useStyles();

  return (
    <Grid container component="article" className={[className].join(' ')}>
      <Grid item sm={12}>
        <Typography align="center" variant="h2" color="primary" className={classes.title}>
          Typical Project Scopes
        </Typography>
      </Grid>
      <Grid item />
    </Grid>
  );
};

export default ProjectScopes;
