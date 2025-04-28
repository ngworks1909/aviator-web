"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, issue: value }))
  }


  useEffect(() => {
    setTimeout(() => {
        setFormStatus(null)
        setIsSubmitting(false)
    }, 5000)
  }, [formStatus])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // Simulate API call with timeout
      console.log(formData)
      const response = await fetch('https://backend-avi.fivlog.space/api/ticket/create', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(formData)
      })

      if(response.ok){
        setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        issue: "",
        description: "",
      })
      }
      else{
        setFormStatus("error")
      }
      
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.issue && formData.description

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-900/40 via-black to-orange-900/40 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Contact Us</h1>
        <p className="text-gray-300 text-center mb-8">Have a question or feedback? We'd love to hear from you.</p>

        {formStatus === "success" && (
          <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-md flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <p className="text-green-300">Your message has been sent successfully!</p>
          </div>
        )}

        {formStatus === "error" && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-md flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <p className="text-red-300">There was an error sending your message. Please try again.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-200">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-200">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="issue" className="text-gray-200">
              Issue
            </Label>
            <Select value={formData.issue} onValueChange={handleSelectChange} required>
              <SelectTrigger className="bg-black/50 border-gray-700 text-white focus:ring-orange-500">
                <SelectValue placeholder="Select an issue" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700 text-white">
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="billing">Billing Question</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-200">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Please describe your issue or question in detail..."
              required
              className="min-h-[120px] bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className="w-full bg-orange-700 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-700"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>We typically respond within 24-48 hours.</p>
        </div>
      </div>
    </div>
  )
}
