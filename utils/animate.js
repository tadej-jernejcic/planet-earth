import { scene, camera, renderer, planet, controls } from "./start.js";

// main animation loop
function animate() {
	requestAnimationFrame(animate);

	// rotate planet
	planet.rotation.y += 0.002;

	// rotate camera
	camera.position.x += 0.005;

	// update controls
	controls.update();

	// re-render
	renderer.render(scene, camera);
}

export default animate;
