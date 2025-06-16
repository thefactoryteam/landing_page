import { motion } from "framer-motion"

export function SidebarNav({ sections, activeSection, onSectionClick, isMobile }) {
  return (
    <motion.nav
      initial={isMobile ? { opacity: 1 } : { x: -20, opacity: 0 }}
      animate={isMobile ? { opacity: 1 } : { x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
      aria-label="Terms of Service Navigation"
    >
      <div className="h-full">
        {!isMobile && (
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-6">Table of Contents</h2>
        )}

        {/* Desktop: No scroll, fixed height. Mobile: Full height container */}
        <div className={isMobile ? "h-full" : ""}>
          <ul className="space-y-2" role="list">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionClick(section.id)}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg transition-all duration-200 
                    font-medium group cursor-pointer
                    ${
                      activeSection === section.id
                        ? "text-green-600 font-semibold bg-green-50 border-l-4 border-green-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent "
                    }
                    ${isMobile ? "text-base py-4" : "text-sm"}
                  `}
                  aria-current={activeSection === section.id ? "true" : undefined}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-gray-400 font-mono ${isMobile ? "text-sm mt-0.5" : "text-xs mt-0.5"}`}>
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <span className={`group-hover:underline leading-tight ${isMobile ? "text-base" : "text-sm"}`}>
                      {section.title}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
