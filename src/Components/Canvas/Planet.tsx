import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from './Loader';

const Planet = () => {
    const planet = useGLTF('/Models/planet/scene.gltf');
    return (
        <primitive object={planet.scene} scale={3} position-y={0} rotation-y={0} />
    )
};

const PlanetCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Planet />
                <Preload all />
            </Suspense>
        </Canvas>
    )
};

export default PlanetCanvas;