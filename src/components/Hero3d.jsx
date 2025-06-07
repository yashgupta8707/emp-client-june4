import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


function PCModel () {
    const {scene} = useGLTF("/models/MainModel.glb");
    return <primitive object={scene} position={[0, -8, 0]} />;
}

export default function Hero3d() {
    return (
        <div className="ml-10 mr-10 px-4 sm:px-6 md:px-10 lg:px-20 py-10">
            <div className="bg-[#161616] mx-auto w-full max-w-[880px] h-[400px] sm:h-[480px] md:h-[520px] lg:h-[600px] shadow-[0_0_10px_#CCCCCC] rounded-xl">
            <Canvas camera={{ position: [90, 50, 0], fov: 40}}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1}/>
                <PCModel />
                <OrbitControls />
            </Canvas>
            <h2 className="text-center text-[#F0DDD0] text-sm font-semibold py-2">
                Drag to spin in any direction.
            </h2>
            </div>
        </div>
    )
}