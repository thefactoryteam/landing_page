"use client"

import React, { useState, useRef, useEffect } from "react"

const Popover = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={popoverRef}>
      {React.Children.map(children, (child) => React.cloneElement(child, { isOpen, setIsOpen }))}
    </div>
  )
}

const PopoverTrigger = ({ children, isOpen, setIsOpen }) => {
  return React.cloneElement(children, {
    onClick: (e) => {
      e.preventDefault()
      setIsOpen(!isOpen)
    },
  })
}

const PopoverContent = ({ children, isOpen, className = "" }) => {
  if (!isOpen) return null

  return <div className={`absolute top-full left-0 z-50 mt-1 ${className}`}>{children}</div>
}

export { Popover, PopoverTrigger, PopoverContent }
