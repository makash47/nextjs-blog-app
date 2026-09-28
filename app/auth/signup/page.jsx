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
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

const SignupPage = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
  })

  const [loading,setLoading] = useState(false)

  const [errors,setErrors] = useState({})

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  async function handleFormSubmit (e) {
    e.preventDefault();
    const newErrors = {};
    if(!formData.name.trim()){
      newErrors.name="Name is required"
      }
      if(!formData.email.trim()){
        newErrors.email="Enter your email"
      }else if(!formData.email.includes("@")){
        newErrors.email="Enter valid Email"
      }
      if(!formData.password.trim()){
        newErrors.password="Password is required"
      }else if(formData.password.length<8){
        newErrors.password="Password should be atleast 8 characters"
      }
      setErrors(newErrors)
      if (Object.keys(newErrors).length > 0) {
    return;
  }

   const { data, error } = await authClient.signUp.email({
        email:formData.email,
        password:formData.password,
        name:formData.name,
        callbackURL: "/auth/login"
    });
// console.log(data)
  toast.info("Verify you email. Verify Link send to you via email")
  // setLoading(false
  }


  const handleGoogleSignin = async () =>{
  const data = await authClient.signIn.social({
    provider: "google",
  });
}

  return (
    <main className="min-h-screen px-6 mx-6 flex items-center justify-center py-6">
   <Card className="w-full max-w-md">
  <CardHeader className="text-center">
    <h1 className="text-3xl font-bold">Blogify</h1>
    <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
    <CardDescription>Join Blogify and share your ideas</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <form action="" className="space-y-2" onSubmit={handleFormSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">Name:</Label>
        <Input type="text"
        placeholder="Name.."
        name="name"
        id="name"
        // required
        value={formData.name}
        onChange={handleChange}/>

        {
          errors.name&&
          <p className="text-sm text-red-600">{errors.name}</p>
        }

        
      </div>

       <div className="space-y-2">
        <Label htmlFor="email">Email:</Label>
        <Input type="email"
        placeholder="Email.."
        name="email"
        id="email"
        // required
        value={formData.email}
        onChange={handleChange}/>

        {
          errors.email&&
          <p className="text-sm text-red-600">{errors.email}</p>
        }
      </div>

       <div className="space-y-2">
        <Label htmlFor="password">Password:</Label>
        <Input type="password"
        placeholder="......"
        name="password"
        id="password"
        // required
        value={formData.password}
        onChange={handleChange}/>

        {
          errors.password&&
          <p className="text-red-600">{errors.password}</p>
        }
      </div>
      
      <Button type="submit"
       className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg space-y-2">Signup</Button>

      <div className="flex items-center gap-3 space-y-2">
        <Separator className="flex-1"/>
        <span className="text-sm text-foreground">OR</span>
        <Separator className="flex-1"/>
      </div>

      <Button onClick={handleGoogleSignin}
      type="button"
      className="w-full hover:border hover:border-indigo-600" variant="outline">Continue with Google</Button>

      <p className="text-sm text-center">
        Already have an Account? {""}
        <Link href="/auth/login" 
        className="text-md text-indigo-600">Login</Link>
      </p>
    </form>
  </CardContent>
  
</Card>
</main>
  )
}

export default SignupPage