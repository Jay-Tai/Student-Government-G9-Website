"use client"

import { useState } from "react"

export default function SignupSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Client-side validation
    if (!email.trim()) {
      setError("Please enter your email address.")
      setIsLoading(false)
      return
    }

    const emailLower = email.toLowerCase().trim()
    if (!emailLower.endsWith("@pdsb.net")) {
      setError("Please use your school email address (@pdsb.net).")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailLower }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Failed to subscribe. Please try again.")
        setIsLoading(false)
        return
      }

      setError("")
      setSubmitted(true)
      setEmail("")
      setIsLoading(false)
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("An error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <section
      id="signup"
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: "#283618" }}
    >
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Section label */}
        <span
          className="font-sans text-xs font-semibold tracking-widest uppercase opacity-60"
          style={{ color: "#FEFAE0" }}
        >
          Stay Connected
        </span>

        {/* Heading */}
        <h2
          className="font-serif text-4xl md:text-5xl font-bold text-balance"
          style={{ color: "#FEFAE0" }}
        >
          Stay in the Loop.
        </h2>

        {/* Subtext */}
        <p
          className="font-sans text-base leading-relaxed max-w-md"
          style={{ color: "#FEFAE0", opacity: 0.75 }}
        >
          Drop your email below and I'll send you reminders before election day — nothing else, ever.
        </p>

        {/* Form */}
        {submitted ? (
          <div
            className="mt-2 px-8 py-5 rounded-lg text-center"
            style={{ backgroundColor: "#DDA15E" }}
          >
            <p className="font-serif text-xl font-bold" style={{ color: "#283618" }}>
              Thanks for signing up!
            </p>
            <p className="font-sans text-sm mt-1" style={{ color: "#283618", opacity: 0.85 }}>
              I'll reach out before election day with a reminder.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row gap-3 mt-2"
            noValidate
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              aria-label="Email address"
              className="flex-1 px-5 py-3.5 rounded font-sans text-base outline-none border-2 focus:border-opacity-100 transition-colors"
              style={{
                backgroundColor: "#FEFAE0",
                color: "#283618",
                borderColor: "transparent",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#DDA15E")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="font-sans font-semibold text-base px-8 py-3.5 rounded transition-opacity hover:opacity-85 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#DDA15E", color: "#283618" }}
            >
              {isLoading ? "Subscribing..." : "Count Me In"}
            </button>
          </form>
        )}

        {error && (
          <p className="font-sans text-sm" style={{ color: "#DDA15E" }}>
            {error}
          </p>
        )}

        {/* Privacy note */}
        <div className="flex items-start sm:items-center gap-2 text-left sm:text-center mt-1">
          {/* Lock icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0"
            style={{ color: "#DDA15E", opacity: 0.7 }}
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
              clipRule="evenodd"
            />
          </svg>
          <p
            className="font-sans text-xs leading-relaxed"
            style={{ color: "#FEFAE0", opacity: 0.55 }}
          >
            Your email stays completely private. I will only use it to send election day reminders.
          </p>
        </div>
      </div>
    </section>
  )
}
