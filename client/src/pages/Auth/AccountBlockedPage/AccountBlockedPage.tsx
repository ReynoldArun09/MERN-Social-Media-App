import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function AccountBlockedPage() {
  return (
    <section className="flex h-screen m-auto justify-center items-center">
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle className="text-center">Your Account has been Blocked</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">
          Your account has been blocked due to multiple failed login attempts.
          Please try again after some time.
        </p>
      </CardContent>
    </Card>
  </section>
  )
}
