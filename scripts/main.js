var f1a = document.getElementById("f1a");
var f1b = document.getElementById("f1b");
var all = document.getElementsByClassName("faq-body");
f1b.style.height = "0px";


function toggle1() {
	if (f1b.style.height == "0px") {
		f1b.style.height = "auto";
	} else {
		f1b.style.height = "0px";
	}
}
