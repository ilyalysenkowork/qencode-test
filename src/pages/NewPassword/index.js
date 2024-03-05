import NewPasswordForm from "../../components/Forms/NewPasswordForm";
import Logo from "../../components/Logo";
import Title from "../../components/Title";

const NewPassword = () => {
  return (
    <div>
      <Logo />
      <Title text="Forgot Password?" />
      <NewPasswordForm />
    </div>
  );
};

export default NewPassword;
