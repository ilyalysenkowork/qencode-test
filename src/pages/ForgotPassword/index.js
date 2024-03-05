import {Link} from 'react-router-dom'
import Button from "../../components/Button";
import ForgotPasswordForm from "../../components/Forms/ForgotPasswordForm";
import Logo from "../../components/Logo";
import Title from "../../components/Title";

const ForgotPassword = () => {
  
  return (
    <div>
      <Logo />
      <Title text="Forgot Password?" />
      <ForgotPasswordForm/>
      <Link to="/">
        <Button text="Cancel"/>
      </Link>
     
    </div>
  );
};

export default ForgotPassword;
