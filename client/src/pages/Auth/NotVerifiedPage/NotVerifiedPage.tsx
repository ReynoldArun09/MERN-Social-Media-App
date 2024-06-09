import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";


export default function NotVerifiedPage() {
  return (
    <section className="h-screen flex m-auto justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Welcome to Social Media App <br /> Verify Your Email</CardTitle>
        </CardHeader>
        <CardContent>
        Welcome Aboard! Congratulations! You're one step closer to unlocking the full potential of our platform. Please take a moment to verify your email address to ensure seamless access to all our exciting features.
        </CardContent>
        <CardFooter>
          <Link to={"/"} className={buttonVariants({variant: 'default'})}>Return to Login Page</Link>
        </CardFooter>
      </Card>
    </section>
  )
}
