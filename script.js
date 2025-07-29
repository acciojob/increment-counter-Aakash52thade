const count = document.getElementById("counter");
let val = parseInt(count.innerHTML); // convert to number

function handleClick() {
	alert(val);
	val = val + 1;
	val.innerHTML = val;
}
