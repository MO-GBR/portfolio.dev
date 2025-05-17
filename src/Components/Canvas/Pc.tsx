import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from './Loader';

const PCMesh = ({ isMobile }: { isMobile: boolean }) => {
    const computer = useGLTF('/Models/pc/scene.gltf');
    return (
        <mesh>
            <hemisphereLight
                intensity={0.15}
                groundColor="black"
            />
            <pointLight intensity={25} />
            <spotLight 
                position={[-20, 50, 10]}
                angle={0.7}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive 
                object={computer.scene}
                scale = {isMobile ? 0.7 : 0.75}
                position = {isMobile ? [0, -3, -2.2] : [0, -3.5, -1.5]}
                rotation = {[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
};

const Pc = () => {
    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        setIsMobile(mediaQuery.matches);

        const HandleMediaQuery = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", HandleMediaQuery);

        return () => {
            mediaQuery.removeEventListener("change", HandleMediaQuery);
        }
    }, []);
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={
                {
                    position: [20, 3, 5],
                    fov: 25
                }
            }
            gl={
                { preserveDrawingBuffer: true }
            }
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <PCMesh isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default Pc