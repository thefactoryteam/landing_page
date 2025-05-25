
import { useState, useEffect } from "react"


export function useScrollSpy(sectionIds, options) {
  const { offset = 0, threshold = 0.5 } = options
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that's most visible
        let mostVisible = entries[0]
        let maxRatio = entries[0]?.intersectionRatio || 0

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            mostVisible = entry
            maxRatio = entry.intersectionRatio
          }
        })

        // If we have a visible section, set it as active
        if (mostVisible && mostVisible.intersectionRatio > threshold) {
          setActiveSection(mostVisible.target.id)
        }
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds, offset, threshold])

  return activeSection
}
