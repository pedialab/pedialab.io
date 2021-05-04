import { Box } from '@material-ui/core';
import { CommonButton } from 'pedialab-shared/components';

export type LetsTalkButtonProps = {
  marginTop: string;
};

const LetsTalkButton = ({ marginTop }: LetsTalkButtonProps) => (
  <Box display="flex" justifyContent="center" mt={marginTop}>
    <CommonButton title="Let's Talk" subtitle="*Budget in USD" />
  </Box>
);

export default LetsTalkButton;
