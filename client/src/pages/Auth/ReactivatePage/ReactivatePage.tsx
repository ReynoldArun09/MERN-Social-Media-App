import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function ReactivatePage() {
  return (
    <section className="flex h-screen m-auto justify-center items-center">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            To reactivate your account, click the button below.
          </div>
          <div className="flex flex-col space-y-5 pt-5 pb-3">
            <Button>Reactivate My Account</Button>
            <Button>Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
