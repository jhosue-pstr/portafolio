import { useGLTF } from "@react-three/drei";

useGLTF.preload("/wizzard.glb");

interface Props {
  scale?: number;
}

const Model = ({ scale = 1 }: Props) => {
  const { scene } = useGLTF("/wizzard.glb");

  return (
    <group scale={scale}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;
