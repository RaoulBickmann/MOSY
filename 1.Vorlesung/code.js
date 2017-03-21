function initialize(){
	let label = document.getElementById("Label");
	label.innerHTML = "Hello";
	label.style['color'] = 'red';
	label.style['background-color'] = 'blue';
	label.style['font-size'] = '96px';

	//Slider Eventhandler
	const sliderRed = document.getElementById("sliderRed");
	const sliderBlue = document.getElementById("sliderBlue");
	const sliderGreen = document.getElementById("sliderGreen");
	function onSliderChanged() {
		let body = document.getElementById("body");
		body.style['background-color'] = "rgb(" + sliderRed.value + "," + sliderBlue.value + "," + sliderGreen.value + ")";
	}
	
	sliderRed.addEventListener("input", onSliderChanged);
	sliderBlue.addEventListener("input", onSliderChanged);
	sliderGreen.addEventListener("input", onSliderChanged);

	onSliderChanged();
}
