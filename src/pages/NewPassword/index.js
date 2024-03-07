import NewPasswordForm from "../../components/Forms/NewPasswordForm";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import { useSearchParams } from "react-router-dom";

const NewPassword = () => {
  let [searchParams] = useSearchParams();

  return (
    <div>
      <Logo />
      <Title text="Forgot Password?" />
      <NewPasswordForm params={searchParams}/>
    </div>
  );
};

export default NewPassword;
