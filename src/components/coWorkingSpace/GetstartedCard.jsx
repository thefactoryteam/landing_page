import GetStartedGif from "../../assets/frame.gif"


export default function GetstartedCard({
  stepNumber = "One",
  stepLabel = "Step",
  title,
  subtitle,
  className = "",
}) {
  return (
    <div className={`relative bg-[#3C3C3C] primary-font p-8 md:p-12 h-[420px] rounded-4xl overflow-hidden ${className}`}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3C3C3C] to-[#231F20] pointer-events-none" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex-1 space-y-4 pb-10k">
          {/* Step indicator */}
          <div className="text-[#2BE028] text-4xl font-medium">
            {stepLabel} {stepNumber}
          </div>

          {/* Main content */}
          <div className="space-y-4">
            <h2 className="texgt-4xl md:text-7xl  font-bold text-white leadin">{title}</h2>
            <p className="text-gray-300 text-lg md:text-2xl max-w-2xl leading-relaxed">{subtitle}</p>
          </div>
        </div>

        
       
      </div>
      <div className="w-32 absolute bottom-10 right-10">
            <img src={GetStartedGif} alt="" />
        </div>
    </div>
  )
}
