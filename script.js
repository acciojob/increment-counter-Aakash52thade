function handleClick() {
	const counterEl = document.getElementById("counter");
	let currentVal = parseInt(counterEl.innerHTML);

	alert(currentVal); // alert BEFORE increment

	currentVal += 1;
	counterEl.innerHTML = currentVal; // update paragraph
}
