"use client"

import { useState, useCallback } from "react"
import { validateForm } from "../utils/validation"

const getNestedError = (errors, path) => {
  const keys = path.split(".")
  let current = errors

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key]
    } else {
      return undefined
    }
  }

  return typeof current === "string" ? current : undefined
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validateField = useCallback((fieldPath, formData) => {
    const allErrors = validateForm(formData)
    const fieldError = getNestedError(allErrors, fieldPath)

    setErrors((prev) => ({
      ...prev,
      [fieldPath]: fieldError || undefined,
    }))

    return !fieldError
  }, [])

  const validateAllFields = useCallback((formData) => {
    const allErrors = validateForm(formData)
    setErrors(allErrors)
    return Object.keys(allErrors).length === 0
  }, [])

  const markFieldTouched = useCallback((fieldPath) => {
    setTouched((prev) => ({ ...prev, [fieldPath]: true }))
  }, [])

  const clearErrors = useCallback(() => {
    setErrors({})
    setTouched({})
  }, [])

  return {
    errors,
    touched,
    validateField,
    validateAllFields,
    markFieldTouched,
    clearErrors,
  }
}
