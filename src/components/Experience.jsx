import { OrbitControls, Stage } from "@react-three/drei";
import Fafnir from "./Fafnir";

const Experience = () => {
    return (
        <>
            <OrbitControls />
            <Stage environment={"dawn"}>
                <group position={[0, 0, 0]}>
                    < Fafnir scale={2} />
                </group>
            </Stage>
        </>
    );
};

export default Experience;