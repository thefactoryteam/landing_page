import { useState, useEffect } from "react"
import Button from "../../ui/Button"
import Input from "../../ui/Input"
import Textarea from "../../ui/Textarea"
import Calendar from "../../ui/Calender"
import { toast } from "react-toastify"
import { CalendarIcon, ChevronDown, Loader2, XIcon } from "../../ui/Icons"
import { cn } from "../../utils/cn"
import BookingService from "../../services/bookingService"
import Check from "../../assets/Icons/Check.png"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const initialFormData = {
    registrationType: "",
    fullName: "",
    occupationRole: "",
    companyName: "",
    numberOfPeople: "",
    companyDescription: "",
    dateOfUsage: null,
    intentOfUsage: "",
    facilitiesRequired: "",
    workspaceDuration: "",
    officialEmail: "",
    phoneNumber: "",
}

const CHARACTER_LIMITS = {
    companyDescription: 500,
    intentOfUsage: 300,
    facilitiesRequired: 400,
}

const phoneInputStyles = `
  .phone-input-container .country-list {
    position: absolute !important;
    z-index: 1000 !important;
    max-height: 200px !important;
    overflow-y: auto !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
    background: white !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
  }
  
  .phone-input-container .selected-flag {
    height: 60px !important;
    padding: 0 8px !important;
    display: flex !important;
    justify-content: center !important;
  }
  
  .phone-input-container .flag-dropdown {
    border-right: 1px dashed #231F20 !important;
    height: 60px !important;
  }

  .react-tel-input .selected-flag{
    width: auto !important;
    }
`

const BookForm = () => {
    const [formData, setFormData] = useState(initialFormData)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({})
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isCalendarOpen && !event.target.closest(".relative")) {
                setIsCalendarOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isCalendarOpen])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdownElement = document.getElementById("registration-type-dropdown")
            if (isDropdownOpen && dropdownElement && !dropdownElement.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isDropdownOpen])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (showSuccessModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [showSuccessModal])

    useEffect(() => {
        const styleElement = document.createElement("style")
        styleElement.textContent = phoneInputStyles
        document.head.appendChild(styleElement)

        return () => {
            document.head.removeChild(styleElement)
        }
    }, [])

    const validateForm = () => {
        const newErrors = {}

        // Common validations
        if (!formData.registrationType) {
            newErrors.registrationType = "Registration type is required"
        }

        if (!formData.dateOfUsage) {
            newErrors.dateOfUsage = "Date of usage is required"
        } else {
            // Check if date is in the past
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            const selectedDate = new Date(formData.dateOfUsage)
            selectedDate.setHours(0, 0, 0, 0)

            if (selectedDate < today) {
                newErrors.dateOfUsage = "Date of usage cannot be in the past"
            }
        }

        if (!formData.intentOfUsage.trim()) {
            newErrors.intentOfUsage = "Intent of usage is required"
        }

        if (!formData.facilitiesRequired.trim()) {
            newErrors.facilitiesRequired = "Facilities required is required"
        }

        if (!formData.workspaceDuration.trim()) {
            newErrors.workspaceDuration = "Duration is required"
        }

        if (!formData.officialEmail.trim()) {
            newErrors.officialEmail = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.officialEmail)) {
            newErrors.officialEmail = "Please enter a valid email address"
        } else if (formData.registrationType === "Company") {
            // For company registration, enforce company email format
            const emailDomain = formData.officialEmail.split("@")[1]?.toLowerCase()
            const companyName = formData.companyName.toLowerCase().replace(/\s+/g, "")

            if (
                !emailDomain ||
                (!emailDomain.includes(companyName) &&
                    !formData.officialEmail.includes("info@") &&
                    !formData.officialEmail.includes("contact@") &&
                    !formData.officialEmail.includes("admin@"))
            ) {
                newErrors.officialEmail = "Please use a company email address (e.g., info@company.com, contact@company.com)"
            }
        }

        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required"
        } else if (!/^[+]?[1-9][\d]{0,15}$/.test(phoneNumber.replace(/\s/g, ""))) {
            newErrors.phoneNumber = "Please enter a valid phone number"
        }

        // Type-specific validations
        if (formData.registrationType === "Individual") {
            if (!formData.fullName.trim()) {
                newErrors.fullName = "Full name is required"
            }
            if (!formData.occupationRole.trim()) {
                newErrors.occupationRole = "Occupation/Role is required"
            }
        } else if (formData.registrationType === "Company") {
            if (!formData.companyName.trim()) {
                newErrors.companyName = "Company name is required"
            }
            if (!formData.numberOfPeople.trim()) {
                newErrors.numberOfPeople = "Number of people is required"
            } else if (isNaN(Number(formData.numberOfPeople)) || Number(formData.numberOfPeople) < 1) {
                newErrors.numberOfPeople = "Please enter a valid number"
            }
            if (!formData.companyDescription.trim()) {
                newErrors.companyDescription = "Company description is required"
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const submitFormData = async (formData) => {
        // Simulate API call
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         // Simulate random success/failure for demo
        //         const shouldSucceed = Math.random() > 0.2 // 80% success rate for demo

        //         if (shouldSucceed) {
        //             resolve()
        //         } else {
        //             reject(new Error("Network error: Unable to submit form. Please try again."))
        //         }
        //     }, 2000)
        // })

        const formattedData = {
            ...formData,
            dateOfUsage: formData.dateOfUsage ? formData.dateOfUsage.toISOString() : null,
        }

        // Use the service to submit the form
        const response = await BookingService.submitBookingRequest(formattedData)

        if (response.success) setShowSuccessModal(true)
    }

    const handleRegistrationTypeChange = (value) => {
        // Clear type-specific errors when changing registration type
        const newErrors = { ...errors }
        if (value === "Individual") {
            delete newErrors.companyName
            delete newErrors.numberOfPeople
            delete newErrors.companyDescription
            setFormData({
                ...formData,
                registrationType: "Individual",
                companyName: "",
                numberOfPeople: "",
                companyDescription: "",
            })
        } else {
            delete newErrors.fullName
            delete newErrors.occupationRole
            setFormData({
                ...formData,
                registrationType: "Company",
                fullName: "",
                occupationRole: "",
            })
        }
        setErrors(newErrors)
        setIsDropdownOpen(false)
    }

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))

        // Update phoneNumber state when phoneNumber field changes
        if (field === "phoneNumber") {
            setPhoneNumber(value)
        }

        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: "",
            }))
        }
    }

    const handlePhoneChange = (phone) => {
        setPhoneNumber(phone)
        setFormData((prev) => ({
            ...prev,
            phoneNumber: phone,
        }))

        // Clear error when user starts typing
        if (errors.phoneNumber) {
            setErrors((prev) => ({
                ...prev,
                phoneNumber: "",
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        try {
            await submitFormData(formData)
        } catch (error) {
            // Error handling
            const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred. Please try again."
            console.log(error)

            toast.error(errorMessage)

            console.error("Form submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCloseModal = () => {
        setShowSuccessModal(false)
        // Clear form data
        setFormData(initialFormData)
        setPhoneNumber("")
        setErrors({})
        // Close any open dropdowns
        setIsDropdownOpen(false)
        setIsCalendarOpen(false)
    }

    const formatDate = (date) => {
        if (!date) return "Date Of Usage"
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const getRemainingChars = (text, limit) => {
        return limit - (text?.length || 0)
    }

    const getCharCountColor = (remaining) => {
        if (remaining < 20) return "text-red-500"
        if (remaining < 50) return "text-yellow-500"
        return "text-gray-500"
    }

    const renderTypeSpecificFields = () => {
        if (formData.registrationType === "Individual") {
            return (
                <>
                    <div className="space-y-2">
                        <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            className={cn(
                                "border border-dashed border-[#231F20] focus:border-gray-400 focus:ring-0 placeholder:text-base",
                                errors.fullName && "border-red-300 focus:border-red-400",
                            )}
                            placeholder="Full Name"
                            disabled={isSubmitting}
                        />
                        {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-2">
                        <Input
                            id="occupationRole"
                            value={formData.occupationRole}
                            onChange={(e) => handleInputChange("occupationRole", e.target.value)}
                            className={cn(
                                "border border-dashed focus:border-gray-400 focus:ring-0 placeholder:text-base",
                                errors.occupationRole && "border-red-300 focus:border-red-400",
                            )}
                            placeholder="Occupation / Role"
                            disabled={isSubmitting}
                        />
                        {errors.occupationRole && <p className="text-sm text-red-600">{errors.occupationRole}</p>}
                    </div>
                </>
            )
        } else if (formData.registrationType === "Company") {
            return (
                <>
                    <div className="space-y-2">
                        <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                            className={cn(
                                "border border-dashed focus:border-gray-400 focus:ring-0 placeholder:text-base",
                                errors.companyName && "border-red-300 focus:border-red-400",
                            )}
                            placeholder="Company Name"
                            disabled={isSubmitting}
                        />
                        {errors.companyName && <p className="text-sm text-red-600">{errors.companyName}</p>}
                    </div>

                    <div className="space-y-2">
                        <Input
                            id="numberOfPeople"
                            value={formData.numberOfPeople}
                            onChange={(e) => handleInputChange("numberOfPeople", e.target.value)}
                            className={cn(
                                "border border-dashed focus:border-gray-400 focus:ring-0 placeholder:text-base",
                                errors.numberOfPeople && "border-red-300 focus:border-red-400",
                            )}
                            placeholder="Number of People Using the workspace"
                            type="number"
                            disabled={isSubmitting}
                        />
                        {errors.numberOfPeople && <p className="text-sm text-red-600">{errors.numberOfPeople}</p>}
                    </div>

                    <div className="space-y-2">
                        <div className="relative">
                            <Textarea
                                id="companyDescription"
                                value={formData.companyDescription}
                                onChange={(e) => {
                                    const value = e.target.value
                                    if (value.length <= CHARACTER_LIMITS.companyDescription) {
                                        handleInputChange("companyDescription", value)
                                    }
                                }}
                                className={cn(
                                    "border border-dashed focus:border-gray-400 focus:ring-0 min-h-[120px] resize-none placeholder:text-base pr-16",
                                    errors.companyDescription && "border-red-300 focus:border-red-400",
                                )}
                                placeholder="What does your company do?"
                                disabled={isSubmitting}
                                maxLength={CHARACTER_LIMITS.companyDescription}
                            />
                            <div
                                className={cn(
                                    "absolute bottom-3 right-3 text-xs font-medium",
                                    getCharCountColor(
                                        getRemainingChars(formData.companyDescription, CHARACTER_LIMITS.companyDescription),
                                    ),
                                )}
                            >
                                {getRemainingChars(formData.companyDescription, CHARACTER_LIMITS.companyDescription)} left
                            </div>
                        </div>
                        {errors.companyDescription && <p className="text-sm text-red-600">{errors.companyDescription}</p>}
                    </div>
                </>
            )
        }
        return null
    }

    // Success Modal Component
    const SuccessModal = () => {
        if (!showSuccessModal) return null

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* Backdrop with blur */}
                <div
                    className="absolute inset-0 backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    onClick={handleCloseModal}
                />

                {/* Modal Content */}
                <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-8 text-center animate-in fade-in zoom-in duration-300">
                    {/* Close Button */}
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                    >
                        <XIcon className="w-6 h-6" />
                    </button>

                    {/* Success Icon */}
                    <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-6">
                        <img src={Check || "/placeholder.svg"} />
                    </div>

                    {/* Success Message */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Sent Successfully</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Your email has been sent to us successfully. We will review your request and get back to you as soon as
                        possible!
                    </p>

                    {/* Close Button */}
                    <Button
                        onClick={handleCloseModal}
                        className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium"
                    >
                        Close
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="w-full max-w-4xl mx-auto primary-font px-6 md:px-0 mb-20">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Registration Type Dropdown - Clean Smooth Animation */}
                    <div className="space-y-2">
                        <div
                            id="registration-type-dropdown"
                            className="border border-dashed border-[#231F20] rounded-md overflow-hidden transition-all duration-500 ease-out"
                        >
                            {/* Header - Always visible */}
                            <div
                                className={cn(
                                    "px-4 py-5 cursor-pointer flex justify-between items-center transition-all bg-[#F4F4F4] duration-200 ease-out",
                                    isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50",
                                    isDropdownOpen && "bg-gray-50",
                                )}
                                onClick={() => !isSubmitting && setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <span className="text-xl font-medium text-[#231F20]">
                                    {formData.registrationType || "Registration Type"}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        "h-5 w-5 text-[#231F20] transition-transform duration-300 ease-out",
                                        isDropdownOpen && "rotate-180",
                                    )}
                                />
                            </div>

                            {/* Options - Simple smooth reveal */}
                            <div
                                className={cn(
                                    "transition-all duration-500 ease-out",
                                    isDropdownOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0",
                                )}
                            >
                                {/* Individual Option */}
                                <div className="border-t border-dashed border-[#231F20]">
                                    <div
                                        className={cn(
                                            "p-3 cursor-pointer transition-all duration-200 ease-out hover:bg-gray-50 flex justify-between items-center",
                                            formData.registrationType === "Individual" && "bg-gray-100",
                                        )}
                                        onClick={() => !isSubmitting && handleRegistrationTypeChange("Individual")}
                                    >
                                        <span
                                            className={cn(
                                                "text-lg transition-all duration-200",
                                                formData.registrationType === "Individual" ? "font-medium text-[#231F20]" : "text-gray-700",
                                            )}
                                        >
                                            Individual
                                        </span>
                                        {formData.registrationType === "Individual" && (
                                            <span className="text-green-600 font-medium">✓</span>
                                        )}
                                    </div>
                                </div>

                                {/* Company Option */}
                                <div className="border-t border-dashed border-[#231F20]">
                                    <div
                                        className={cn(
                                            "p-3 cursor-pointer transition-all duration-200 ease-out hover:bg-gray-50 flex justify-between items-center",
                                            formData.registrationType === "Company" && "bg-gray-100",
                                        )}
                                        onClick={() => !isSubmitting && handleRegistrationTypeChange("Company")}
                                    >
                                        <span
                                            className={cn(
                                                "text-lg transition-all duration-200",
                                                formData.registrationType === "Company" ? "font-medium text-[#231F20]" : "text-gray-700",
                                            )}
                                        >
                                            Company
                                        </span>
                                        {formData.registrationType === "Company" && <span className="text-green-600 font-medium">✓</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {errors.registrationType && <p className="text-sm text-red-600 mt-1">{errors.registrationType}</p>}
                    </div>

                    {/* Type-specific fields */}
                    {renderTypeSpecificFields()}

                    {/* Date of Usage */}
                    <div className="space-y-2">
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                                disabled={isSubmitting}
                                className={cn(
                                    "w-full flex items-center justify-between bg-[#F4F4F4]  text-left font-normal border border-dashed border-[#231F20] rounded-md px-4 py-5 hover:border-gray-400 transition-colors",
                                    !formData.dateOfUsage && "text-gray-500",
                                    errors.dateOfUsage && "border-red-300 hover:border-red-400",
                                    isSubmitting && "opacity-50 cursor-not-allowed",
                                )}
                            >
                                {formatDate(formData.dateOfUsage)}
                                <CalendarIcon className="mr-2 h-4 w-4" />
                            </button>

                            {isCalendarOpen && !isSubmitting && (
                                <div className="absolute top-full left-0 z-50 mt-1">
                                    <Calendar
                                        selected={formData.dateOfUsage}
                                        onSelect={(date) => {
                                            handleInputChange("dateOfUsage", date)
                                            setIsCalendarOpen(false)
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                        {errors.dateOfUsage && <p className="text-sm text-red-600">{errors.dateOfUsage}</p>}
                    </div>

                    {/* Intent of Usage */}
                    <div className="space-y-2">
                        <div className="relative">
                            <Textarea
                                id="intentOfUsage"
                                value={formData.intentOfUsage}
                                onChange={(e) => {
                                    const value = e.target.value
                                    if (value.length <= CHARACTER_LIMITS.intentOfUsage) {
                                        handleInputChange("intentOfUsage", value)
                                    }
                                }}
                                className={cn(
                                    "border border-dashed !text-base focus:border-gray-400 focus:ring-0 min-h-[120px] resize-none pr-16",
                                    errors.intentOfUsage && "border-red-300 focus:border-red-400",
                                )}
                                placeholder="Intent of Usage"
                                disabled={isSubmitting}
                                maxLength={CHARACTER_LIMITS.intentOfUsage}
                            />
                            <div
                                className={cn(
                                    "absolute bottom-3 right-3 text-xs font-medium",
                                    getCharCountColor(getRemainingChars(formData.intentOfUsage, CHARACTER_LIMITS.intentOfUsage)),
                                )}
                            >
                                {getRemainingChars(formData.intentOfUsage, CHARACTER_LIMITS.intentOfUsage)} left
                            </div>
                        </div>
                        {errors.intentOfUsage && <p className="text-sm text-red-600">{errors.intentOfUsage}</p>}
                    </div>

                    {/* Facilities Required */}
                    <div className="space-y-2">
                        <div className="relative">
                            <Textarea
                                id="facilitiesRequired"
                                value={formData.facilitiesRequired}
                                onChange={(e) => {
                                    const value = e.target.value
                                    if (value.length <= CHARACTER_LIMITS.facilitiesRequired) {
                                        handleInputChange("facilitiesRequired", value)
                                    }
                                }}
                                className={cn(
                                    "border border-dashed bg-[#F4F4F4] !text-base focus:border-gray-400 focus:ring-0 min-h-[120px] resize-none pr-16",
                                    errors.facilitiesRequired && "border-red-300 focus:border-red-400",
                                )}
                                placeholder="What Facilities would you require from the co-working space?"
                                disabled={isSubmitting}
                                maxLength={CHARACTER_LIMITS.facilitiesRequired}
                            />
                            <div
                                className={cn(
                                    "absolute bottom-3 right-3 text-xs font-medium",
                                    getCharCountColor(
                                        getRemainingChars(formData.facilitiesRequired, CHARACTER_LIMITS.facilitiesRequired),
                                    ),
                                )}
                            >
                                {getRemainingChars(formData.facilitiesRequired, CHARACTER_LIMITS.facilitiesRequired)} left
                            </div>
                        </div>
                        {errors.facilitiesRequired && <p className="text-sm text-red-600">{errors.facilitiesRequired}</p>}
                    </div>

                    {/* Duration of workspace Usage */}
                    <div className="space-y-2">
                        <Input
                            id="workspaceDuration"
                            value={formData.workspaceDuration}
                            onChange={(e) => handleInputChange("workspaceDuration", e.target.value)}
                            className={cn(
                                "border border-dashed focus:border-gray-400 focus:ring-0 placeholder:text-base",
                                errors.workspaceDuration && "border-red-300 focus:border-red-400",
                            )}
                            placeholder="Duration of workspace Usage ( Working Hours Only 9 - 5pm )"
                            disabled={isSubmitting}
                        />
                        {errors.workspaceDuration && <p className="text-sm text-red-600">{errors.workspaceDuration}</p>}
                    </div>

                    {/* Official Email */}
                    <div className="space-y-2">
                        <Input
                            id="officialEmail"
                            type="email"
                            value={formData.officialEmail}
                            onChange={(e) => handleInputChange("officialEmail", e.target.value)}
                            className={cn(
                                "border border-dashed focus:border-gray-400 focus:ring-0 placeholder:text-base",
                                errors.officialEmail && "border-red-300 focus:border-red-400",
                            )}
                            placeholder="Official Email"
                            disabled={isSubmitting}
                        />
                        {errors.officialEmail && <p className="text-sm text-red-600">{errors.officialEmail}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                        <div
                            className={cn(
                                "border border-dashed border-[#231F20] rounded-md relative",
                                errors.phoneNumber && "border-red-300",
                            )}
                        >
                            <PhoneInput
                                country={"ng"}
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                disabled={isSubmitting}
                                inputStyle={{
                                    width: "100%",
                                    height: "60px",
                                    fontSize: "16px",
                                    border: "none",
                                    outline: "none",
                                    backgroundColor: "#F4F4F4",
                                    paddingLeft: "80px", // Increased from 60px to 80px
                                    fontFamily: "inherit",
                                }}
                                containerStyle={{
                                    width: "100%",
                                    border: "none",
                                }}
                                buttonStyle={{
                                    border: "none",
                                    backgroundColor: "#F4F4F4",
                                    //   borderRight: "1px dashed #231F20",
                                    height: "60px",
                                    minWidth: "70px",
                                }}
                                dropdownStyle={{
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    zIndex: 1000,
                                    maxHeight: "200px",
                                    overflowY: "auto",
                                }}
                                containerClass="phone-input-container"
                            />
                        </div>
                        {errors.phoneNumber && <p className="text-sm text-red-600">{errors.phoneNumber}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#231F20] hover:bg-gray-800 text-[#ECFBEB] py-7 !font-bold !text-xl disabled:opacity-50 disabled:cursor-not-allowed !rounded-full secondaryFont"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </Button>
                </form>
            </div>

            {/* Success Modal */}
            <SuccessModal />
        </>
    )
}

export default BookForm
