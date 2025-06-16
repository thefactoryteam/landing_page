"use client"

import { useState, useCallback } from "react"
import { Upload, X } from "lucide-react"
import Button from "../../ui/Button"
import { cn } from "../../utils/cn"
import { FILE_CONFIGS, validateFile } from "../../utils/validation"

export const FileUpload = ({ onFileSelect, selectedFile, acceptedFormats, configKey, error, disabled = false }) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const config = FILE_CONFIGS[configKey]

  const processFile = useCallback(
    async (file) => {
      if (disabled) return

      setIsProcessing(true)

      // Validate file
      const validationError = validateFile(file, config)
      if (validationError) {
        console.error("File validation error:", validationError)
        setIsProcessing(false)
        return
      }

      // Simulate processing time for large files
      if (file.size > 5 * 1024 * 1024) {
        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      onFileSelect(file)
      setIsProcessing(false)
    },
    [config, disabled, onFileSelect],
  )

  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault()
      if (!disabled) setIsDragOver(true)
    },
    [disabled],
  )

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(
    async (e) => {
      e.preventDefault()
      setIsDragOver(false)

      if (disabled) return

      const files = Array.from(e.dataTransfer.files)
      if (files.length > 0) {
        await processFile(files[0])
      }
    },
    [disabled, processFile],
  )

  const handleFileSelect = useCallback(
    async (e) => {
      const files = e.target.files
      if (files && files.length > 0) {
        await processFile(files[0])
      }
      // Reset input value to allow selecting the same file again
      e.target.value = ""
    },
    [processFile],
  )

  const removeFile = useCallback(() => {
    if (!disabled) {
      onFileSelect(null)
    }
  }, [disabled, onFileSelect])

  if (selectedFile) {
    return (
      <div
        className={cn(
          "border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50",
          error && "border-red-300 bg-red-50",
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded">
              <Upload className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
              <p className="text-xs text-gray-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={removeFile}
            className="text-gray-400 hover:text-red-500"
            disabled={disabled}
            type="button"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <div
        className={cn(
          "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-colors bg-[#F4F4F4]",
          isDragOver && !disabled && "border-blue-400 bg-blue-50",
          !disabled && "hover:border-gray-400 cursor-pointer",
          disabled && "opacity-50 cursor-not-allowed",
          error && "border-red-300 bg-red-50",
          isProcessing && "opacity-75",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload
          className={cn("h-8 w-8 mx-auto mb-3", isProcessing ? "text-blue-500 animate-pulse" : "text-gray-400")}
        />
        <p className="text-sm text-gray-600 mb-2">
          {isProcessing ? (
            "Processing file..."
          ) : (
            <>
              Drop your files here or{" "}
              <label
                className={cn(
                  "text-blue-600 hover:text-blue-700 cursor-pointer underline",
                  disabled && "cursor-not-allowed opacity-50",
                )}
              >
                browse
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileSelect}
                  accept={acceptedFormats}
                  disabled={disabled || isProcessing}
                />
              </label>
            </>
          )}
        </p>
        <p className="text-xs text-gray-400">Max {(config.maxSize / (1024 * 1024)).toFixed(0)}MB</p>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}
