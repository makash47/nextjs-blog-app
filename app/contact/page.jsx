'use client'
import Link from "next/link";
import {
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

   async function handleFormSubmit(e){
    e.preventDefault();

    const response = await fetch("/api/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    });
    const data = await response.json()

    if(!response.ok){
      alert(data.message||"Something went Wrong");
      return
    }

    alert("Message Sent Succesfuly")

    setFormData({
      name:"",
      email:"",
      subject:"",
      message:""
    })
  
  }

  return (
    <main className="w-full">

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Have a question, suggestion, or feedback?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">

          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl">
                Get in Touch
              </CardTitle>

              <CardDescription>
                Feel free to reach out to us. We&apos;ll get back to
                you as soon as possible.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-7">

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <a
                    href="mailto:hello@blogify.com"
                    className="text-sm text-muted-foreground transition hover:text-indigo-600"
                  >
                    hello@blogify.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Location
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pakistan
                  </p>
                </div>
              </div>
              <div>
                <h3 className="mb-4 font-semibold">
                  Follow Us
                </h3>

                <div className="flex gap-3">

                  <Link
                    href="#"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950"
                  >
                    <FaGithub className="h-5 w-5" />
                  </Link>

                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </Link>

                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </Link>

                </div>
              </div>

            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Send a Message
              </CardTitle>

              <CardDescription>
                Fill out the form below and we&apos;ll get back to you.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name
                  </Label>

                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">
                    Subject
                  </Label>

                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                    min={10}
                    max={100}
                    onChange={handleChange}
                    value={formData.subject}
                  />
                </div>

           
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    className="min-h-40 resize-none"
                    required
                    min={20}
                    max={500}
                    onChange={handleChange}
                    value={formData.message}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                >
                  Send Message
                </Button>

              </form>
            </CardContent>
          </Card>

        </div>
      </section>

    </main>
  );
}



