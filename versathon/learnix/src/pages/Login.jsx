import AuthCard from "../components/AuthCard";

export default function Login() {
  return (
    <AuthCard
      mode="login"
      subtitle="Welcome back!"
      buttonText="Login"
      bottomText="Don't have an account?"
      bottomLinkText="Sign Up"
      bottomLinkHref="/signup"
    />
  );
}
