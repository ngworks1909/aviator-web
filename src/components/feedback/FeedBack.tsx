"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value)
  }

  useEffect(() => {
    setTimeout(() => {
        setFormStatus(null)
    }, 5000);
  }, [formStatus])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // Simulate API call with timeout
      const response = await fetch('https://backend-avi.fivlog.space/api/feedback/create', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({feedback})
      })

      if(response.ok){
        setFormStatus("success")
        setFeedback("")
      }

      else{
        setFormStatus("error")
      }
      
    } catch (error) {
      console.error("Error submitting feedback:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-900/40 via-black to-orange-900/40 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Share Your Feedback</h1>
        <p className="text-gray-300 text-center mb-8">
          We value your opinion and would love to hear about your experience with our services.
        </p>

        {formStatus === "success" && (
          <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-md flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <p className="text-green-300">Thank you for your feedback! We appreciate your input.</p>
          </div>
        )}

        {formStatus === "error" && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-md flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <p className="text-red-300">There was an error submitting your feedback. Please try again.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="feedback" className="text-gray-200 text-lg">
              Your Feedback
            </Label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={handleChange}
              placeholder="Please share your thoughts, suggestions, or experiences..."
              required
              className="min-h-[200px] bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting || !feedback.trim()}
              className="px-8 py-2 bg-orange-700 hover:bg-orange-600 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-700"
            >
              {isSubmitting ? "Sending..." : "Submit Feedback"}
            </Button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <div className="w-2 h-2 rounded-full bg-orange-300"></div>
            </div>
            <p className="text-sm text-gray-400">
              Your feedback helps us improve our services and provide a better experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
