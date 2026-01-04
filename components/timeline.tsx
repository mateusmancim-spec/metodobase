"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineStep {
  title: string
  description: string
}

const steps: TimelineStep[] = [
  {
    title: "Awareness",
    description: "Busy routine, tried everything, nothing sticks",
  },
  {
    title: "Organization",
    description: "Simple structure, fewer decisions",
  },
  {
    title: "Action",
    description: "Simple meals, short workouts, realistic plan",
  },
  {
    title: "Consistency",
    description: "No guilt, no restart from zero",
  },
  {
    title: "Result",
    description: "Feeling lighter, more control, visible progress",
  },
]

export function Timeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index)
              entry.target.classList.add("timeline-step-visible")
            }
          })
        },
        {
          threshold: 0.5,
          rootMargin: "-20% 0px -20% 0px",
        },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

      {/* Timeline Steps */}
      <div className="space-y-16 md:space-y-20">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => {
              stepRefs.current[index] = el
            }}
            className="timeline-step relative opacity-0"
          >
            {/* Dot */}
            <div
              className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 bg-background -translate-x-1/2 transition-all duration-500 ${
                activeStep === index ? "border-primary scale-125" : "border-border"
              }`}
            />

            {/* Content */}
            <div className="pl-16 md:pl-0 md:w-1/2 md:pr-12 md:text-right md:ml-auto md:odd:ml-0 md:odd:pr-0 md:odd:pl-12 md:odd:text-left">
              <h3
                className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  activeStep === index ? "text-primary" : "text-foreground"
                }`}
              >
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
