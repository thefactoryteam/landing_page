import { useState, useCallback } from "react"
import Button from "../../ui/Button"
import Input from "../../ui/Input"
import Textarea from "../../ui/Textarea"

import { useFormValidation } from "../../hooks/useFormValidation"
import { FormSection } from "./FormSection"
import { FileUpload } from "./FileUpload"
import { FounderSection } from "./FounderSection"
import { toast } from "react-toastify"


const INITIAL_FORM_DATA = {
  pitchDeck: null,
  productDemo: "",
  tractionProof: null,
  founders: [
    {
      name: "",
      role: "",
      achievements: "",
      background: "",
      linkedinUrl: "",
    },
  ],
  visionStatement: "",
  startupInfo: {
    startupName: "",
    website: "",
    contactEmail: "",
    phoneNumber: "",
    location: "",
    fundingStage: "",
  },
}

export default function StartupApplicationForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { errors, validateField, validateAllFields, markFieldTouched, clearErrors } =
    useFormValidation(INITIAL_FORM_DATA)

  const handleFounderChange = useCallback(
    (index, field, value) => {
      const updatedFounders = [...formData.founders]
      updatedFounders[index] = { ...updatedFounders[index], [field]: value }
      const newFormData = { ...formData, founders: updatedFounders }
      setFormData(newFormData)

      // Validate this specific founder field
      validateField(`founders.${index}.${field}`, newFormData)
    },
    [formData, validateField],
  )

  const handleStartupInfoChange = useCallback(
    (field, value) => {
      const newFormData = {
        ...formData,
        startupInfo: { ...formData.startupInfo, [field]: value },
      }
      setFormData(newFormData)
      validateField(`startupInfo.${field}`, newFormData)
    },
    [formData, validateField],
  )

  const addFounder = useCallback(() => {
    if (formData.founders.length < 10) {
      setFormData({
        ...formData,
        founders: [
          ...formData.founders,
          {
            name: "",
            role: "",
            achievements: "",
            background: "",
            linkedinUrl: "",
          },
        ],
      })
    }
  }, [formData])

  const removeFounder = useCallback(
    (index) => {
      if (formData.founders.length > 1) {
        const updatedFounders = formData.founders.filter((_, i) => i !== index)
        setFormData({ ...formData, founders: updatedFounders })
      }
    },
    [formData],
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      if (isSubmitting) return

      const isValid = validateAllFields(formData)

      if (!isValid) {
        toast.error("Please fix the errors in the form before submitting.")
        return
      }

      setIsSubmitting(true)

      try {
        // Simulate API call with proper error handling
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate random API failures for testing
            if (Math.random() > 0.8) {
              reject(new Error("Network error occurred"))
            } else {
              resolve(true)
            }
          }, 2000)
        })

        toast.success("Your application has been submitted successfully.")

        // Reset form on success
        setFormData(INITIAL_FORM_DATA)
        clearErrors()
      } catch (error) {
        console.error("Submission error:", error)

        toast.error("There was an error submitting your application. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, isSubmitting, validateAllFields, clearErrors],
  )

  const getFieldError = (path) => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* <ToastContainer /> */}
      <div className="w-full max-w-4xl mx-auto primary-font space-y-8">
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Pitch Deck Section */}
          <FormSection
            stepNumber={1}
            id="pitch-deck"
            title="Pitch Deck (PDF, Max 10MB)"
            description="Upload the complete, including market, team, and financials."
            hasDownload
          >
            <FileUpload
              onFileSelect={(file) => {
                const newFormData = { ...formData, pitchDeck: file }
                setFormData(newFormData)
                validateField("pitchDeck", newFormData)
              }}
              selectedFile={formData.pitchDeck}
              acceptedFormats=".pdf"
              configKey="pitchDeck"
              error={getFieldError("pitchDeck")}
              disabled={isSubmitting}
            />
          </FormSection>

          {/* Product Demo Video Section */}
          <FormSection
            stepNumber={2}
            id="product-demo"
            title="Product Demo Video (MP4 or link)"
            description="Upload a demo or provide a video link (YouTube/Vimeo)"
            hasDownload
          >
            <FileUpload
              onFileSelect={(file) => {
                const newFormData = { ...formData, productDemo: file || "" }
                setFormData(newFormData)
                validateField("productDemo", newFormData)
              }}
              selectedFile={typeof formData.productDemo === "object" ? formData.productDemo : null}
              acceptedFormats=".mp4,.mov,.avi"
              configKey="productDemo"
              error={getFieldError("productDemo")}
              disabled={isSubmitting}
            />
          </FormSection>

          {/* Traction Proof Section */}
          <FormSection
            stepNumber={3}
            id="traction-proof"
            title="Traction Proof"
            description="Upload screenshots, analytics, or documents that prove traction."
            hasDownload
          >
            <FileUpload
              onFileSelect={(file) => {
                const newFormData = { ...formData, tractionProof: file }
                setFormData(newFormData)
                validateField("tractionProof", newFormData)
              }}
              selectedFile={formData.tractionProof}
              acceptedFormats=".pdf,.png,.jpg,.jpeg"
              configKey="tractionProof"
              error={getFieldError("tractionProof")}
              disabled={isSubmitting}
            />
          </FormSection>

          {/* Founders' Bios Section */}
          <FormSection
            stepNumber={4}
            id="founders-bios"
            title="Founders' Bios"
            description="Provide background info, skills, and experience of each founder."
          >
            <FounderSection
              founders={formData.founders}
              onFounderChange={handleFounderChange}
              onAddFounder={addFounder}
              onRemoveFounder={removeFounder}
              errors={errors.founders || []}
              disabled={isSubmitting}
            />
          </FormSection>

          {/* Vision Statement Section */}
          <FormSection
            stepNumber={5}
            id="vision-statement"
            title="Vision Statement"
            description="Describe your long-term goals and mission."
          >
            <div>
              <Textarea
                placeholder="Describe Your Vision (50-2000 characters)"
                value={formData.visionStatement}
                onChange={(e) => {
                  // Enforce character limit
                  const value = e.target.value.length > 2000 ? e.target.value.substring(0, 2000) : e.target.value
                  const newFormData = { ...formData, visionStatement: value }
                  setFormData(newFormData)
                  validateField("visionStatement", newFormData)
                }}
                onBlur={() => markFieldTouched("visionStatement")}
                className="min-h-[120px] resize-none border-2 border-dashed border-gray-300 bg-[#F4F4F4]"
                disabled={isSubmitting}
                aria-invalid={!!getFieldError("visionStatement")}
                maxLength={2000}
              />
              <div className="flex justify-between items-center mt-1">
                {getFieldError("visionStatement") && (
                  <p className="text-sm text-red-600">{getFieldError("visionStatement")}</p>
                )}
                <p
                  className={`text-xs ml-auto ${
                    formData.visionStatement.length > 1900
                      ? "text-red-600"
                      : formData.visionStatement.length > 1800
                        ? "text-orange-500"
                        : "text-gray-500"
                  }`}
                >
                  {formData.visionStatement.length}/2000
                </p>
              </div>
            </div>
          </FormSection>

          {/* Startup & Contact Info Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-3xl text-gray-900 text-center mb-10">Startup & Contact Info</h3>

            <div className="space-y-4">
              {[
                { key: "startupName", placeholder: "Startup Name *", type: "text" },
                { key: "website", placeholder: "Website", type: "url" },
                { key: "contactEmail", placeholder: "Contact Email *", type: "email" },
                { key: "phoneNumber", placeholder: "Phone Number (Optional)", type: "tel" },
                { key: "location", placeholder: "Location *", type: "text" },
                { key: "fundingStage", placeholder: "Funding Stage (Optional)", type: "text" },
              ].map(({ key, placeholder, type }) => {
                const error = getFieldError(`startupInfo.${key}`)

                return (
                  <div key={key}>
                    <Input
                      type={type}
                      placeholder={placeholder}
                      value={formData.startupInfo[key]}
                      onChange={(e) => handleStartupInfoChange(key, e.target.value)}
                      onBlur={() => markFieldTouched(`startupInfo.${key}`)}
                      className="border-2 border-dashed border-gray-300 bg-[#F4F4F4]"
                      disabled={isSubmitting}
                      aria-invalid={!!error}
                    />
                    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#231F20] hover:bg-gray-800 text-white py-7 secondaryFont !text-xl font-medium !rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting Application...
                </span>
              ) : (
                "Submit Application"
              )}
            </Button>
            
          </div>
          <p className="text-center">Once submitted, you'll receive a confirmation email with next steps.</p>
        </form>
      </div>
    </div>
  )
}
