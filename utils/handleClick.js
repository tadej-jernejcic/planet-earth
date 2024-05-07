import { box1, box2, box3 } from "./start";

function handleClick(object) {
	const oceans = document.querySelector("#oceans");
	const deforestation = document.querySelector("#deforestation");
	const waterShortage = document.querySelector("#water");

	if (object.name != "earth") {
		const allSections = [waterShortage, oceans, deforestation];
		allSections.forEach((section) => {
			section.classList.add("hidden");
		});
	}

	if (object.name == "oceans") {
		toggleVisibilityAndColors(oceans, [box2, box3, box1]);
	} else if (object.name == "america") {
		toggleVisibilityAndColors(deforestation, [box3, box2, box1]);
	} else if (object.name == "africa") {
		toggleVisibilityAndColors(waterShortage, [box1, box2, box3]);
	}
}

function toggleVisibilityAndColors(section, boxes) {
	const colors = [0x00ffff, 0xffffff, 0xffffff];

	section.classList.toggle("hidden");

	boxes.forEach((cone, index) => {
		cone.material.color.setHex(colors[index]);
	});
}

export default handleClick;
