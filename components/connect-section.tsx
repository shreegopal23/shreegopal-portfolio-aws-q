"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Send, CheckCircle, Calendar, Loader2 } from "lucide-react"

export function ConnectSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission with realistic timing
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com",
      color: "hover:text-gray-600 dark:hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/shreegopal-dadhich",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:shreegopal2390@gmail.com",
      color: "hover:text-red-500",
    },
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "shreegopal2390@gmail.com",
      href: "mailto:shreegopal2390@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+917878532491",
      href: "tel:+917878532491",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Surat, India",
      href: "#",
    },
    // {
    //   icon: <Calendar className="w-5 h-5" />,
    //   label: "Availability",
    //   value: "Open to opportunities",
    //   href: "#",
    // },
  ]

  return (
    <section id="connect" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Ready to discuss your next DevOps project or explore collaboration opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and I'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in-50 duration-300">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                  <h3 className="text-xl font-semibold text-green-600">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        disabled={isSubmitting}
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      required
                      disabled={isSubmitting}
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, questions, or how I can help..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
                <p className="text-muted-foreground">Prefer direct contact? Here are the best ways to reach me.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">{info.icon}</div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href !== "#" ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Me</CardTitle>
                <p className="text-muted-foreground">Connect with me on social media for updates and insights.</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:shadow-md transition-all duration-200 hover:scale-105 ${social.color}`}
                    >
                      {social.icon}
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* <Card className="shadow-lg border-border/50 border-green-500/20"> */}
              {/* <CardContent className="p-6"> */}
                {/* <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Let's discuss your project</p>
                    <p className="text-sm text-muted-foreground">
                      Currently accepting new DevOps consulting and full-time opportunities
                    </p>
                  </div>
                </div> */}
              {/* </CardContent> */}
            {/* </Card> */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-semibold">Ready to Build Something Amazing?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you need help with cloud migration, CI/CD implementation, or infrastructure optimization, I'm here
            to help turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:shreegopal2390@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Start a Conversation
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/Shreegopal_resume.pdf" download="Shreegopal_resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
