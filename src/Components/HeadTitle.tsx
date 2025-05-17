import { motion } from 'motion/react';
import { textVariant } from '../Utils/Motion';

const HeadTitle = ({ head, subHead }: { head?: string, subHead?: string }) => {
    return (
        <div className='w-full Flex_Center'>
            <motion.div variants={textVariant({ delay: 0.5 })} className='w-[95%]' initial="hidden" whileInView="show">
                {
                    head && ( <h1 className='HeadText font-Poetsen'>{head}</h1> )
                }
                {
                    subHead && ( <h2 className='SubText font-Comic'>{subHead}</h2> )
                }
            </motion.div>
        </div>
    )
}

export default HeadTitle