const count = document.getElementById("counter");
let val = parseInt(count.innerHTML); // convert to number

function handleClick() {
	alert(val);
	val = val + 1;
	count.innerHTML = val;
}
