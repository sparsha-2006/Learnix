import AuthCard from "../components/AuthCard";

export default function Signup() {
  return (
    <AuthCard
      mode="signup"
      subtitle="Create your account"
      buttonText="Sign Up"
      bottomText="Already have an account?"
      bottomLinkText="Login"
      bottomLinkHref="/login"
    />
  );
}
