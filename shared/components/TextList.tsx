import { Box } from '@material-ui/core';

export type TextListProps = { texts: string[]; width?: string };

const TextList = ({ texts = [], width = '22rem' }: TextListProps) => (
  <Box component="ul" width={width} mt="0" mb="0" pl="2rem">
    {texts.map((text) => (
      <Box
        mb="2.5rem"
        component="li"
        key={text}
        fontWeight={400}
        fontSize="1.5rem"
        lineHeight="1.34"
      >
        {text}
      </Box>
    ))}
  </Box>
);

export default TextList;
