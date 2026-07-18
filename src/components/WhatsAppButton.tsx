import { motion } from 'framer-motion'
import { site } from '../data/site'
import { WhatsAppIcon } from './icons'

export function WhatsAppButton() {
  return (
    <motion.a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.15 }}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  )
}
