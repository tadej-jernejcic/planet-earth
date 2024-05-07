import * as THREE from "three";
import { scene, camera } from "./start.js";
import handleClick from "./handleClick.js";

function onMouseDown(event) {
	event.preventDefault();

	const mouse = new THREE.Vector2(
		(event.clientX / window.innerWidth) * 2 - 1,
		-(event.clientY / window.innerHeight) * 2 + 1
	);

	const raycaster = new THREE.Raycaster();
	raycaster.setFromCamera(mouse, camera);

	const intersects = raycaster.intersectObjects(scene.children);

	if (intersects.length > 0) {
		// pass clicked object to handleClick()
		handleClick(intersects[0].object);
	}
}

export default onMouseDown;
