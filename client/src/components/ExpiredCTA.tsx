import { motion } from 'framer-motion'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { FiExternalLink } from 'react-icons/fi'

import { fade, fadeDelay } from '../FramerAnimations'

interface Props {
  isCompleted: boolean
  onFail(): void
}

export const ExpiredCTA: React.FC<Props> = ({ isCompleted, onFail }) => {
  const renderCTA = !isCompleted ? (
    <motion.div variants={fade} key="openWallet">
      <p>
        Your credentials have expired!
      </p>
      {isMobile && (
        <a href="bcwallet://" className="underline underline-offset-2 mt-2">
          open in wallet
          <FiExternalLink className="inline pb-1" />
        </a>
      )}
    </motion.div>
  ) : (
    <motion.div variants={fade} key="ctaCompleted">
      <p>Success! You can continue.</p>
    </motion.div>
  )

  return (
    <div className="flex flex-col my-4 text-center font-semibold dark:text-white">
      {renderCTA}
    </div>
  )
}
