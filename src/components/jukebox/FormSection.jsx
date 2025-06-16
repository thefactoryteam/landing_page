import { Download } from "lucide-react"
import Button from "../../ui/Button"

export const FormSection = ({ stepNumber, title, description, children }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-medium px-2 py-1 rounded">{stepNumber}</span>
          <div>
            <h3 className="font-medium text-xl text-gray-900">{title}</h3>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
