import {
	scene,
	camera,
	renderer,
	controls,
	box1,
	box2,
	box3,
} from "./start.js";

// main animation loop
function animate() {
	requestAnimationFrame(animate);

	// rotate camera
	camera.position.x += 0.015;

	// rotate cones
	box1.rotation.x += 0.005;
	box2.rotation.x += 0.005;
	box3.rotation.x += 0.005;

	// update controls
	controls.update();

	// re-render
	renderer.render(scene, camera);
}

export default animate;
