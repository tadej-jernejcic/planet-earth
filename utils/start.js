import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import addStar from "./addStar";
import animate from "./animate";
import onMouseDown from "./onMouseDown";
import earthImage from "../src/assets/earth.jpg";

let scene, camera, renderer, planet, controls, box1, box2, box3;

function start() {
	scene = new THREE.Scene();

	//camera
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.z = 30;

	// renderer
	renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector("#background"),
		alpha: true,
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x000000, 0);

	// controls
	controls = new OrbitControls(camera, renderer.domElement);
	controls.target.set(0, 0, 0);
	controls.minDistance = 20;
	controls.maxDistance = 40;
	controls.enableDamping = true;
	controls.dampingFactor = 0.05;

	// populate sky with stars
	Array(70).fill().forEach(addStar);

	// add the planet
	addPlanet();

	// make cones
	box1 = makeBox(0, 10, 6);
	box1.name = "africa";
	box2 = makeBox(-4, -8, -8);
	box2.name = "oceans";
	box3 = makeBox(-10, 0, 7);
	box3.name = "america";

	//draw
	renderer.render(scene, camera);

	// animate
	animate();

	// Add click event listener
	document.addEventListener("mousedown", onMouseDown, false);
}

function addPlanet() {
	const geometry = new THREE.SphereGeometry(10, 32, 32);
	const planetTexture = new THREE.TextureLoader().load(earthImage);
	const material = new THREE.MeshBasicMaterial({
		map: planetTexture,
	});
	planet = new THREE.Mesh(geometry, material);
	planet.name = "earth";

	planet.rotation.y = 23.5;
	planet.rotation.z = 120;

	// add to scene
	scene.add(planet);
}

function makeBox(x, y, z) {
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		wireframe: true,
	});
	const box = new THREE.Mesh(geometry, material);

	box.position.set(x, y, z);

	// Add the cone as a child of the planet
	planet.add(box);

	scene.add(box);

	return box;
}

export { scene, camera, renderer, planet, controls, box1, box2, box3 };
export default start;
