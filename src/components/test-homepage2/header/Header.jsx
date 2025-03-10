import { HeaderContainer } from "./StyledHeader";
const Header = () => {
  return (
    <HeaderContainer>
      <div className="page-title">Docs</div>
      <div className="group-actions">
        <a href="#" className="login">
          Login
        </a>
        <a href="#" className="sign-up">
          Sign up
        </a>
      </div>
    </HeaderContainer>
  );
};
export default Header;
