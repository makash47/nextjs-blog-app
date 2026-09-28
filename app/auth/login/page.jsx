
'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner"

const LoginPage = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function handleFormSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
      rememberMe: true,
      callbackURL: "/admin",
    })

   
    if (error) {
      alert(error.message)
      return
    }
     toast.success("Login Successful")

    router.push("/admin")
  }

const handleGoogleSignin = async () =>{
  const data = await authClient.signIn.social({
    provider: "google",
  });
}

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">LOGIN</CardTitle>
          <CardDescription>Welcome Back to Blogoify</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="you@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password:</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <Input
                type="password"
                id="password"
                name="password"
                placeholder="........"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button disabled={loading} type="submit" className="bg-indigo-600 hover:bg-indigo-700 w-full text-xl">
              {
                loading?"Logging In":"Login"
              }
            </Button>

            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span>OR</span>
              <Separator className="flex-1" />
            </div>

            <Button onClick={handleGoogleSignin}
            type="button" variant="outline" className="w-full border border-indigo-600">
              Continue With Google
            </Button>

            <p className="text-center text-sm">
              Don't have an Account?{" "}
              <Link href="/auth/signup" className="text-indigo-600">
                Signup
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

export default LoginPage