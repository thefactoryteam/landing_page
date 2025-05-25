import { useCallback, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { SidebarNav } from "../terms/SidebarNav"
import { TermSection } from "../terms/TermSection"
import { useScrollSpy } from "../../hooks/use-scroll-spy"

const sections = [
  {
    id: "use",
    title: "Use of Our Service",
    term: "You agree to use our Service only for lawful purposes and in accordance with these Terms. You must not use the Service in any way that could harm, disable, overburden, or impair it or interfere with any other party's use. Eligibility - You must be at least 13 years old to use our service. By using the Service, you represent and warrant that you meet this requirement.",
  },
  {
    id: "accounts",
    title: "User Accounts",
    term: "To access certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information and to keep this information up to date. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.",
  },
  {
    id: "ownership",
    title: "Content Ownership",
    term: 'You retain ownership of any content you submit, post, or display on or through the Service ("User Content"). By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display it for the purpose of operating and improving the Service. You agree not to upload or share content that is illegal, offensive, or violates any third party\'s rights.',
  },
  {
    id: "ip",
    title: "Intellectual Property",
    term: "The Service and its original content, features, and functionality are and will remain the exclusive property of The Factory and its licensors. The Service is protected by copyright, trademark, and other laws of both the country in which it operates and foreign countries.",
  },
  {
    id: "termination",
    title: "Termination",
    term: "We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, without notice or liability, for any reason including violation of these Terms.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    term: "To the maximum extent permitted by law, The Factory and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of the Service.",
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    term: 'Your use of the Service is at your sole risk. The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied.',
  },
  {
    id: "law",
    title: "Governing Law",
    term: "These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
  },
  {
    id: "changes",
    title: "Changes to Terms",
    term: "We reserve the right to modify these Terms at any time. We will provide notice of any significant changes by posting the updated Terms on the website. Your continued use of the Service after changes are posted constitutes your acceptance of the new Terms.",
  },
  {
    id: "contact",
    title: "Contact Us",
    term: "If you have any questions about these terms, please contact us at: info@techfactory.xyz",
  },
]


export function TermsLayout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const sectionIds = sections.map((section) => section.id)
  const activeSection = useScrollSpy(sectionIds, { offset: 100 })

  const handleNavClick = useCallback((id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Close mobile nav after clicking
      setIsMobileNavOpen(false)
    }
  }, [])

//   const toggleMobileNav = () => {
//     setIsMobileNavOpen(!isMobileNavOpen)
//   }

  return (
    <section className="w-full py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Fixed Mobile Navigation Button */}
      {/* <div className="lg:hidden fixed top-10 right-4 z-50">
        <button
          onClick={toggleMobileNav}
          className="flex items-center gap-2 px-4 py-3 bg-white shadow-lg hover:shadow-xl rounded-full transition-all duration-200 border border-gray-200"
          aria-label="Toggle table of contents"
        >
          {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="text-sm font-medium">Contents</span>
        </button>
      </div> */}

      <div className="max-w-7xl mx-auto">
        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileNavOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMobileNavOpen(false)}
              />

              {/* Mobile Sidebar */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 lg:hidden"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Table of Contents</h2>
                    <button
                      onClick={() => setIsMobileNavOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      aria-label="Close navigation"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <div className="flex-1 p-6">
                    <SidebarNav
                      sections={sections}
                      activeSection={activeSection}
                      onSectionClick={handleNavClick}
                      isMobile={true}
                    />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-8 lg:gap-12">
          {/* Desktop Sidebar - Fixed height, no scroll */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)]">
              <SidebarNav
                sections={sections}
                activeSection={activeSection}
                onSectionClick={handleNavClick}
                isMobile={false}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            <motion.header
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#231F20] leading-tight">
                Terms of Service
              </h1>

              <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                <p>
                  These Terms of Service ("Terms") constitute a legal agreement between you ("User", "you") and The
                  Factory Incubator Ltd, a company incorporated under the laws of the Federal Republic of Nigeria
                  ("Company", "we", "us", or "our"), governing your access to and use of our website and associated
                  services.
                </p>

                <p>
                  <strong>PLEASE READ THESE TERMS CAREFULLY</strong> before using the website. By accessing or using any
                  part of the site, you agree to be bound by these Terms.
                </p>
              </div>
            </motion.header>

            <div className="space-y-12 sm:space-y-16">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <TermSection id={section.id} number={index + 1} title={section.title} content={section.term} />
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
