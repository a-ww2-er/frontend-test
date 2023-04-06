import Form from "../../components/Login/molecules/Form";
import image from "../../assets/pablo-sign-in.png";
import Logo from "../../components/Login/atoms/Logo";
import "../../styles/loginpage.scss"

const LoginPage = () => {
  return (
    <div className="login_page">
      <div className="login_page_image_container">
        <Logo />
        <img src={image} alt={image} />
      </div>

      <div className="login_page_form">
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
