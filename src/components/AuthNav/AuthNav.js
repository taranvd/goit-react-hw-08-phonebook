import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';

const AuthNav = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </div>
  );
};

export default AuthNav;
