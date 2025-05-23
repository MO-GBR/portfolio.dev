import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className='Canvas_Loader'></span>
            <p className='text-sm text-[#f1f1f1] font-extrabold mt-10'>{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default Loader