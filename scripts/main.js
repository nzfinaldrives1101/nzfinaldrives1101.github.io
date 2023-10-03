var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");
var f7 = document.getElementById("f7");
var f8 = document.getElementById("f8");
f1.style.height = "0px";
f2.style.height = "0px";
f3.style.height = "0px";
f4.style.height = "0px";
f5.style.height = "0px";
f6.style.height = "0px";
f7.style.height = "0px";
f8.style.height = "0px";

search = document.getElementById("search");
dropdown = document.getElementById("manufacturer");


function resetProductModal() {
	search.value = '';
	dropdown.value = 'all';
}

function manufacturerSelected(value) {
	result = document.getElementsByClassName("result");
	for (index = 0; index < result.length; ++index) {
		if (value == "airman") {
	    	result[index].style.height ="0px";
		}
	}
}

$(document).ready(function(){
	$("#search").on("input", function() {
		var value = $(this).val().toLowerCase();
		$("#results li").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});



// function search() {
//   // Declare variables
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("search");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("results");
//   tr = table.getElementsByTagName("tr");
//
//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }




function toggle1() {
	if (f1.style.height == "0px") {
		f1.style.height = "auto";
	} else {
		f1.style.height = "0px";
	}
}

function toggle2() {
	if (f2.style.height == "0px") {
		f2.style.height = "auto";
	} else {
		f2.style.height = "0px";
	}
}

function toggle3() {
	if (f3.style.height == "0px") {
		f3.style.height = "auto";
	} else {
		f3.style.height = "0px";
	}
}

function toggle4() {
	if (f4.style.height == "0px") {
		f4.style.height = "auto";
	} else {
		f4.style.height = "0px";
	}
}

function toggle5() {
	if (f5.style.height == "0px") {
		f5.style.height = "auto";
	} else {
		f5.style.height = "0px";
	}
}

function toggle6() {
	if (f6.style.height == "0px") {
		f6.style.height = "auto";
	} else {
		f6.style.height = "0px";
	}
}

function toggle7() {
	if (f7.style.height == "0px") {
		f7.style.height = "auto";
	} else {
		f7.style.height = "0px";
	}
}

function toggle8() {
	if (f8.style.height == "0px") {
		f8.style.height = "auto";
	} else {
		f8.style.height = "0px";
	}
}
