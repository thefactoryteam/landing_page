import React from 'react'
import { motion } from 'framer-motion';
import Nelson from '../../assets/getToKnowUs/nelson.png'
import Festus1 from '../../assets/getToKnowUs/festusback.png'
import Festus2 from '../../assets/getToKnowUs/festusfront.png'
import Learners from '../../assets/getToKnowUs/learners.png'

import Fellows from '../../assets/getToKnowUs/fellows.png'
import Okod from '../../assets/getToKnowUs/okod.png'
import Roland from '../../assets/getToKnowUs/roland.png'
import Factory from '../../assets/getToKnowUs/factory.png'

const GallerySection = () => {
    return (
        <div className='max-w-4/5 mx-auto py-10'>
            <h1 className='meriwether-font text-3xl !font-semibold text-center'>Get To Know Us</h1>

            <div className='flex flex-col lg:flex-row gap-4 mt-8'>
                <div className='w-full lg:w-[55%] flex flex-col'>
                    <motion.div
                        className='col-span-full'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <div>
                            <img src={Nelson} alt="Nelson" />
                        </div>
                    </motion.div>

                    <div class="grid grid-flow-col grid-rows-2 gap-4 mt-4">
                        <motion.div
                            className="col-span-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <div>
                                <img src={Festus2} alt="Festus" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-span-1 row-span-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <div>
                                <img src={Festus1} alt="Festus Enang" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="row-span-3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                        >
                            <div className='md:h-[390px]'>
                                <img src={Learners} alt="The factory learners" className='w-full h-full' />
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className='w-full lg:w-[45%] flex flex-col'>
                    <div class="grid grid-flow-col grid-rows-2 gap-4">

                        <motion.div
                            className="row-span-3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                        >
                            <div className='md:h-[390px]'>
                                <img src={Factory} alt="The factory learners" className='w-full h-full' />
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-span-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <div>
                                <img src={Okod} alt="Festus" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-span-1 row-span-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <div>
                                <img src={Roland} alt="Festus Enang" />
                            </div>
                        </motion.div>

                    </div>

                    <motion.div
                        className="col-span-full mt-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <div>
                            <img src={Fellows} alt="Fellows" className="w-full object-cover" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default GallerySection




