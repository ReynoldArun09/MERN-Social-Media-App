import AuthCard from "@/components/Auth/AuthCard";
import AuthFooter from "@/components/Auth/AuthFooter";
import SignupForm from "@/forms/SignupForm";


export default function SignupPage() {
  return (
    <section className="h-screen m-auto flex justify-center items-center">
      <AuthCard authTitle="Sign Up">
        <SignupForm />
        <AuthFooter title="Sign Up"/>
      </AuthCard>
    </section>
  )
}
