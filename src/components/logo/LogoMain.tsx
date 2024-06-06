// material-ui
import { Box } from '@mui/material';
import LogoIcon from './LogoIcon';
import { Typography } from '@mui/material';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse, ...others }: { reverse?: boolean }) => {
  return <Box sx={{justifyContent: 'center', alignItems: 'center', display: 'flex', gap: 2}}>
    <LogoIcon />
    <Typography variant='h3'>Relation C</Typography>
  </Box>
};

export default LogoMain;
