import "../styles/login.scss";
import Input from "../atoms/Input";
import { useState } from "react";
import Button from "../atoms/Button";
const Form = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [type, setType] = useState("password");

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="form">
      <div className="form_welcome"> 
        <h1>Welcome!</h1>
        <span>Enter details to login</span>
      </div>

      <Input type="text" placeholder="Email" value={data.email} />
      <div className="form_password">
        <Input type={type} placeholder="Password" value={data.password} />
        <Button onClick={() => setType("text")} text="Show" />
      </div>
      <a href="#">FORGOT PASSWORD?</a>
      <Button className="login_button"  onClick={() => console.log(data)} text="LOG IN" />
    </form>
  );
};

export default Form;
