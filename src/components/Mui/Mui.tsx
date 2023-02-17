import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Mui: FC = () => {
  const theme = useTheme();

  return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>;
};
