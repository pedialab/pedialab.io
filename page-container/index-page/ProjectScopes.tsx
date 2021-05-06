import { Grid, makeStyles, Typography } from '@material-ui/core';
import LetsTalkButton from './LetsTalkButton';

type ServiceItemProps = {
  title: string;
  price: string;
  priceUnit: string;
  service: string[];
};

const content: ServiceItemProps[] = [
  {
    title: 'Team up',
    price: '$8-64 hrs',
    priceUnit: '/month',
    service: ['Architecture Audit', 'Strategy Meetings', 'Team Coaching', 'Office Hours', 'Partnership Meetings']
  },
  {
    title: 'Developer Support',
    price: '$5k-$10k',
    priceUnit: '/month',
    service: ['Architecture Demo', 'QA-as-a-Service', 'Browser testing', 'k8s/CICD setup', 'Code Review']
  },
  {
    title: 'Project Delivery',
    price: '$15k-$100',
    priceUnit: '/project',
    service: ['Architecture Demo', 'QA-as-a-Service', 'Browser testing', 'k8s/CICD setup', 'Code Review']
  }
];

const useStyles = makeStyles({
  serviceItem: {
    marginTop: '4.625rem',
    width: 'fit-content',
    '& > ul': {
      listStyle: 'none',
      paddingLeft: 0,
      '& > li': {
        marginTop: '2.25rem',
        fontSize: '1.25rem'
      }
    }
  },
  price: {
    marginTop: '0.625rem',
    '& > :first-child': {
      color: '#ffffff',
      marginRight: '0.5rem'
    }
  }
});

const ServiceItem = ({
  title, price, priceUnit, service
}: ServiceItemProps) => {
  const classes = useStyles();
  return (
    <Grid item container direction="column" className={classes.serviceItem}>
      <Grid item>
        <Typography color="primary" variant="button">
          {title}
        </Typography>
      </Grid>
      <Grid item className={classes.price}>
        <Typography component="span" variant="h2">
          {price}
        </Typography>
        <Typography component="span" variant="caption" color="secondary">
          {priceUnit}
        </Typography>
      </Grid>
      <Grid item component="ul">
        {service.map((kind) => (
          <Typography component="li" color="secondary" key={kind}>
            {kind}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export type ProjectScopesProps = {
  className?: string;
};

const ProjectScopes = ({ className }: ProjectScopesProps) => (
  <Grid id="typical-project-scopes" container component="article" justify="space-between" className={[className].join(' ')}>
    <Grid item sm={12}>
      <Typography align="center" variant="h2" color="primary">
        Typical Project Scopes
      </Typography>
    </Grid>
    {content.map((item) => (
      <ServiceItem key={item.title} title={item.title} price={item.price} priceUnit={item.priceUnit} service={item.service} />
    ))}
    <Grid item sm={12}>
      <LetsTalkButton marginTop="5.3125rem" />
    </Grid>
  </Grid>
);

export default ProjectScopes;
