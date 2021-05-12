import { Grid, makeStyles, Typography } from '@material-ui/core';

export type ArticleCardProps = { link: string, title: string; imgSrc: string; content: string };

const useStyles = makeStyles({
  root: { width: '100%' },
  image: {
    height: 'auto',
    display: 'inline-flex'
  },
  title: {
    minHeight: '6.3rem',
    color: '#ffffff'
  },
  content: {
    marginTop: '0.9375rem',
    marginBlock: 0
  }
});

const ArticleCard = ({
  link, title, imgSrc, content
}: ArticleCardProps) => {
  const classes = useStyles();
  return (
    <a href={link}>
      <Grid component="article" container direction="column" className={classes.root}>
        <Grid item className={classes.image}>
          <img src={imgSrc} alt={title} loading="lazy" />
        </Grid>
        <Grid item className={classes.title}>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="secondary" className={classes.content}>
            {content}
          </Typography>
        </Grid>
      </Grid>
    </a>
  );
};

export default ArticleCard;
