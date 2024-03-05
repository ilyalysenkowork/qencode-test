import Logo from "../../components/Logo";
import Title from "../../components/Title";
import SSOButtons from "../../components/SSOButtons";
import Divider from "../../components/Divider";
import Link from "../../components/Link";
import Footer from "../../components/Footer";
import LoginForm from "../../components/Forms/LoginForm";

const Login = () => {
  return (
    <div>
      <Logo />
      <Title text="Log in to your account" />
      <SSOButtons />
      <Divider />
      <LoginForm />
      <Footer>
        {"Is your company new to Qencode?"} <Link to="#">{"Sign up"}</Link>
      </Footer>
    </div>
  );
};

export default Login;
