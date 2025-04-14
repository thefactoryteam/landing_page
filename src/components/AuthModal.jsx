import { Dialog, DialogBackdrop } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'

const AuthModal = ({ isOpen, setIsOpen }) => {
  const [isSignUp, setIsSignUp] = useState(true)

  // Reset to SignUp on modal open
  useEffect(() => {
    if (isOpen) setIsSignUp(true)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="relative z-50" open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogBackdrop
            as={motion.div}
            className="fixed inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              key="modal-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <AnimatePresence mode="wait">
                {isSignUp ? (
                  <motion.div
                    key="signup"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SignUp
                      toggleForm={() => setIsSignUp(false)}
                      closeModal={() => setIsOpen(false)}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Login
                      toggleForm={() => setIsSignUp(true)}
                      closeModal={() => setIsOpen(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default AuthModal
