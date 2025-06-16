import { X, Plus } from "lucide-react"
import Button from "../../ui/Button"
import Input from "../../ui/Input"
import Textarea from "../../ui/Textarea"

export const FounderSection = ({
  founders,
  onFounderChange,
  onAddFounder,
  onRemoveFounder,
  errors = [],
  disabled = false,
}) => {
  const maxFounders = 10

  // Character limits
  const LIMITS = {
    name: 50,
    role: 50,
    achievements: 500,
    background: 1000,
    linkedinUrl: 200,
  }

  const handleInputChange = (index, field, value) => {
    // Enforce character limits
    const limit = LIMITS[field]
    if (limit && value.length > limit) {
      value = value.substring(0, limit)
    }
    onFounderChange(index, field, value)
  }

  const getCharacterCount = (text, limit) => {
    const remaining = limit - text.length
    const isNearLimit = remaining <= 50
    const isOverLimit = remaining < 0

    return {
      text: `${text.length}/${limit}`,
      className: isOverLimit ? "text-red-600" : isNearLimit ? "text-orange-500" : "text-gray-500",
    }
  }

  return (
    <div className="space-y-6">
      {founders.map((founder, index) => {
        const founderErrors = errors[index] || {}

        return (
          <div key={index} className="space-y-4 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Founder {index + 1}</span>
              {index > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveFounder(index)}
                  className="text-red-500  hover:text-red-700 hover:bg-red-50"
                  disabled={disabled}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <Input
                  placeholder="Name *"
                  value={founder.name}
                  onChange={(e) => handleInputChange(index, "name", e.target.value)}
                  className="border-2 border-dashed border-gray-300 bg-[#F4F4F4]"
                  disabled={disabled}
                  aria-invalid={!!founderErrors.name}
                  maxLength={LIMITS.name}
                />
                <div className="flex justify-between items-center mt-1">
                  {founderErrors.name && <p className="text-sm text-red-600">{founderErrors.name}</p>}
                  
                </div>
              </div>

              <div>
                <Input
                  placeholder="Role/Title *"
                  value={founder.role}
                  onChange={(e) => handleInputChange(index, "role", e.target.value)}
                  className="border-2 border-dashed border-gray-300 bg-[#F4F4F4]"
                  disabled={disabled}
                  aria-invalid={!!founderErrors.role}
                  maxLength={LIMITS.role}
                />
                <div className="flex justify-between items-center mt-1">
                  {founderErrors.role && <p className="text-sm text-red-600">{founderErrors.role}</p>}
                </div>
              </div>

              <div>
                <Textarea
                  placeholder="Key Achievements * (20-500 characters)"
                  value={founder.achievements}
                  onChange={(e) => handleInputChange(index, "achievements", e.target.value)}
                  className="border-2 border-dashed border-gray-300 bg-[#F4F4F4] min-h-[80px] resize-none"
                  disabled={disabled}
                  aria-invalid={!!founderErrors.achievements}
                  maxLength={LIMITS.achievements}
                />
                <div className="flex justify-between items-center mt-1">
                  {founderErrors.achievements && <p className="text-sm text-red-600">{founderErrors.achievements}</p>}
                  <p
                    className={`text-xs ml-auto ${getCharacterCount(founder.achievements, LIMITS.achievements).className}`}
                  >
                    {getCharacterCount(founder.achievements, LIMITS.achievements).text}
                  </p>
                </div>
              </div>

              <div>
                <Textarea
                  placeholder="Professional Background * (50-1000 characters)"
                  value={founder.background}
                  onChange={(e) => handleInputChange(index, "background", e.target.value)}
                  className="border-2 border-dashed border-gray-300 bg-[#F4F4F4] min-h-[100px] resize-none"
                  disabled={disabled}
                  aria-invalid={!!founderErrors.background}
                  maxLength={LIMITS.background}
                />
                <div className="flex justify-between items-center mt-1">
                  {founderErrors.background && <p className="text-sm text-red-600">{founderErrors.background}</p>}
                  <p
                    className={`text-xs ml-auto ${getCharacterCount(founder.background, LIMITS.background).className}`}
                  >
                    {getCharacterCount(founder.background, LIMITS.background).text}
                  </p>
                </div>
              </div>

              <div>
                <Input
                  type="url"
                  placeholder="LinkedIn URL (Optional)"
                  value={founder.linkedinUrl}
                  onChange={(e) => handleInputChange(index, "linkedinUrl", e.target.value)}
                  className="border-2 border-dashed border-gray-300 bg-[#F4F4F4]"
                  disabled={disabled}
                  aria-invalid={!!founderErrors.linkedinUrl}
                  maxLength={LIMITS.linkedinUrl}
                />
                <div className="flex justify-between items-center mt-1">
                  {founderErrors.linkedinUrl && <p className="text-sm text-red-600">{founderErrors.linkedinUrl}</p>}
                  <p
                    className={`text-xs ml-auto ${getCharacterCount(founder.linkedinUrl, LIMITS.linkedinUrl).className}`}
                  >
                    {getCharacterCount(founder.linkedinUrl, LIMITS.linkedinUrl).text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {founders.length < maxFounders && (
        <div className="flex justify-center">
          <Button
            type="button"
            onClick={onAddFounder}
            variant="outline"
            className="w-12 h-12 rounded-full border-2 border-dashed border-blue-400 !bg-[#F4F4F4] hover:bg-blue-100 text-blue-600 hover:text-blue-700"
            disabled={disabled}
            aria-label="Add another founder"
          >
            <Plus className="h-5 w-5" />
          </Button>
          
        </div>
      )}

      {founders.length >= maxFounders && (
        <p className="text-sm text-gray-500 text-center">Maximum of {maxFounders} founders allowed</p>
      )}
    </div>
  )
}
