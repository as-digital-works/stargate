import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function RouteLoadingBar() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setVisible(true)
    const timeout = setTimeout(() => setVisible(false), 500)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 top-0 z-[60] h-1 bg-brand-green"
          style={{ transformOrigin: '0% 50%' }}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        />
      )}
    </AnimatePresence>
  )
}
