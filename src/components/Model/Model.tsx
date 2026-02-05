import { useGLTF } from "@react-three/drei";

useGLTF.preload("");

interface Props {
  scale?: number;
}

const Model = ({ scale = 1 }: Props) => {
  const { scene } = useGLTF("");

  return (
    <group scale={scale}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;
