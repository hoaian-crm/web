// material-ui

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //
import logo from 'assets/images/logo.png';

const LogoIcon = () => {
  return <img src={logo} width={60} height={60} />
};

export default LogoIcon;
