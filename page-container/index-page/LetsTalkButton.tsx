import { Grid } from '@material-ui/core';
import { CommonButton } from 'pedialab-shared/components';

export type LetsTalkButtonProps = {
  className?: string;
};

const LetsTalkButton = ({ className }: LetsTalkButtonProps) => (
  <Grid justify="center" className={className}>
    <CommonButton href="#contact" title="Let's Talk" subtitle="*Budget in USD" />
  </Grid>
);

export default LetsTalkButton;
