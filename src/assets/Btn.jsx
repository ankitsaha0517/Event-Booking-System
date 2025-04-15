import React, { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion';





function Btn({ content, className , link }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link to={link}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`inline-flex items-center gap-2 bg-gray-200 text-black px-5 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-[#333] hover:text-white ${className} justify-between`}>
            {/* Icon area */}
            <div className="relative w-5 h-5 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {hovered ? (
                        <motion.div
                            key="arrow"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute inset-0 bg-white text-black rounded-full flex items-center justify-center text-xl"
                        >
                            <i className="ri-arrow-right-line"></i>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="dot"
                            initial={{ opacity: 0, scale: 1.5 }}
                            animate={{
                                opacity: 1,
                                scale: [1, 1.2, 1],
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="text-black"
                        >
                            ●
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <span>{content}</span>
        </Link>
    )
}

export default Btn