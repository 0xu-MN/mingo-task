import AuthLayout from "../../layouts/AuthLayout";
import { LoginForm } from "../form/login-form";

function Loginpage() {
  return (
    <AuthLayout orbSize="800px">
      <LoginForm className="w-93 relative z-10"/>
    </AuthLayout>
  );
}

export default Loginpage;