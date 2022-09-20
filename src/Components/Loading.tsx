import React from 'react';
import { Stack, CircularProgress, Typography , SxProps } from '@mui/material';


type Props = {
  // eslint-disable-next-line react/require-default-props
  sx?: SxProps | React.CSSProperties | undefined;
};
const Loading = ({ sx }: Props) => (
  <Stack alignItems='center' gap={1} sx={sx}>
    <CircularProgress color='success' />
    <Typography variant='h5' color='white'>
      Loading...
    </Typography>
  </Stack>
);

export default Loading;
