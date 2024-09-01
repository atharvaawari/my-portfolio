import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdsScene from '../assets/3d/birds.glb';

import React, { useRef } from 'react'

const Birds = () => {
    const birdsRef = useRef();

    const {scene , animations} = useGLTF(birdsScene);

    const {actions} = useAnimations(animations, birdsRef );

    console.log(actions)
  return (
    <div>Birds</div>
  )
}

export default Birds