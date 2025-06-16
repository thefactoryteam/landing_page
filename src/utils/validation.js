export const FILE_CONFIGS = {
    pitchDeck: {
      maxSize: 10 * 1024 * 1024, // 10MB
      acceptedTypes: [".pdf", "application/pdf"],
      required: true,
    },
    productDemo: {
      maxSize: 100 * 1024 * 1024, // 100MB
      acceptedTypes: [".mp4", ".mov", ".avi", "video/mp4", "video/quicktime", "video/x-msvideo"],
      required: false,
    },
    tractionProof: {
      maxSize: 10 * 1024 * 1024, // 10MB
      acceptedTypes: [".pdf", ".png", ".jpg", ".jpeg", "application/pdf", "image/png", "image/jpeg"],
      required: true,
    },
  }
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  export const validateUrl = (url) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }
  
  export const validateLinkedInUrl = (url) => {
    if (!url) return true // Optional field
    return validateUrl(url) && url.includes("linkedin.com")
  }
  
  export const validateFile = (file, config) => {
    if (!file) {
      return config.required ? "This file is required" : null
    }
  
    if (file.size > config.maxSize) {
      return `File size must be less than ${(config.maxSize / (1024 * 1024)).toFixed(0)}MB`
    }
  
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()
    const isValidType = config.acceptedTypes.some((type) =>
      type.startsWith(".") ? type === fileExtension : type === file.type,
    )
  
    if (!isValidType) {
      return `File type not supported. Accepted types: ${config.acceptedTypes.filter((t) => t.startsWith(".")).join(", ")}`
    }
  
    return null
  }
  
  export const validateFounder = (founder) => {
    const errors = {}
  
    if (!founder.name.trim()) {
      errors.name = "Name is required"
    } else if (founder.name.length > 100) {
      errors.name = "Name must be less than 100 characters"
    }
  
    if (!founder.role.trim()) {
      errors.role = "Role is required"
    } else if (founder.role.length > 100) {
      errors.role = "Role must be less than 100 characters"
    }
  
    if (!founder.achievements.trim()) {
      errors.achievements = "Achievements are required"
    } else if (founder.achievements.length < 20) {
      errors.achievements = "Please provide more detailed achievements (minimum 20 characters)"
    } else if (founder.achievements.length > 500) {
      errors.achievements = "Achievements must be less than 500 characters"
    }
  
    if (!founder.background.trim()) {
      errors.background = "Background is required"
    } else if (founder.background.length < 50) {
      errors.background = "Please provide more detailed background (minimum 50 characters)"
    } else if (founder.background.length > 1000) {
      errors.background = "Background must be less than 1000 characters"
    }
  
    if (founder.linkedinUrl && !validateLinkedInUrl(founder.linkedinUrl)) {
      errors.linkedinUrl = "Please enter a valid LinkedIn URL"
    } else if (founder.linkedinUrl && founder.linkedinUrl.length > 200) {
      errors.linkedinUrl = "LinkedIn URL is too long"
    }
  
    return errors
  }
  
  export const validateStartupInfo = (info) => {
    const errors = {}
  
    if (!info.startupName.trim()) {
      errors.startupName = "Startup name is required"
    }
  
    if (!info.contactEmail.trim()) {
      errors.contactEmail = "Contact email is required"
    } else if (!validateEmail(info.contactEmail)) {
      errors.contactEmail = "Please enter a valid email address"
    }
  
    if (info.website && !validateUrl(info.website)) {
      errors.website = "Please enter a valid website URL"
    }
  
    if (!info.location.trim()) {
      errors.location = "Location is required"
    }
  
    return errors
  }
  
  export const validateForm = (formData) => {
    const errors = {}
  
    // Validate files
    const pitchDeckError = validateFile(formData.pitchDeck, FILE_CONFIGS.pitchDeck)
    if (pitchDeckError) errors.pitchDeck = pitchDeckError
  
    const tractionProofError = validateFile(formData.tractionProof, FILE_CONFIGS.tractionProof)
    if (tractionProofError) errors.tractionProof = tractionProofError
  
    // Validate product demo (file or URL)
    if (typeof formData.productDemo === "object" && formData.productDemo) {
      const demoError = validateFile(formData.productDemo, FILE_CONFIGS.productDemo)
      if (demoError) errors.productDemo = demoError
    } else if (typeof formData.productDemo === "string" && formData.productDemo) {
      if (!validateUrl(formData.productDemo)) {
        errors.productDemo = "Please enter a valid video URL"
      }
    }
  
    // Validate founders
    const foundersErrors = []
    formData.founders.forEach((founder, index) => {
      const founderErrors = validateFounder(founder, index)
      if (Object.keys(founderErrors).length > 0) {
        foundersErrors[index] = founderErrors
      }
    })
    if (foundersErrors.length > 0) {
      errors.founders = foundersErrors
    }
  
    // Validate vision statement with max length
    if (!formData.visionStatement.trim()) {
      errors.visionStatement = "Vision statement is required"
    } else if (formData.visionStatement.length < 50) {
      errors.visionStatement = "Vision statement must be at least 50 characters"
    } else if (formData.visionStatement.length > 2000) {
      errors.visionStatement = "Vision statement must be less than 2000 characters"
    }
  
    // Validate startup info
    const startupInfoErrors = validateStartupInfo(formData.startupInfo)
    if (Object.keys(startupInfoErrors).length > 0) {
      errors.startupInfo = startupInfoErrors
    }
  
    return errors
  }
  