import AuthNav from 'components/AuthNav/AuthNav';
import { Header, NavLinkStyled } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
      </nav>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
