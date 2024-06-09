import AuthCard from "@/components/Auth/AuthCard";
import AuthFooter from "@/components/Auth/AuthFooter";
import SignInForm from "@/forms/SignInForm";


export default function SigninPage() {
  return (
    <section className="h-screen m-auto flex justify-center items-center">
      <AuthCard authTitle="Sign In">
        <SignInForm />
        <AuthFooter title="Sign In" />
      </AuthCard>
    </section>
  );
}
