import { scene } from "./start.js";
import * as THREE from "three";

// function for adding stars at random positions
function addStar() {
	const geometry = new THREE.DodecahedronGeometry(0.3);
	const material = new THREE.MeshBasicMaterial({
		color: 0xf4f5f0,
	});
	const star = new THREE.Mesh(geometry, material);

	// random xyz
	const [x, y, z] = Array(3)
		.fill()
		.map(() => THREE.MathUtils.randFloatSpread(100));

	star.position.set(x, y, z);
	scene.add(star);
}

export default addStar;
