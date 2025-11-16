import AuthLayout from "../../layouts/AuthLayout";
import { SignupForm } from "@/page/form/signup-form";

function Signuppage() {
  return (
    <AuthLayout orbSize="900px">
      <SignupForm className="w-93 relative z-10"/>
    </AuthLayout>
  );
}

export default Signuppage;