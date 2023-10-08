search = document.getElementById("search");
dropdown = document.getElementById("manufacturer");

$(document).ready(function() {
	$("#search").on("input", function() {
		var value = $(this).val().toLowerCase();
		$("#results p").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

function resetProductModal() {
	search.value = '';
	dropdown.value = 'all';
}

function selectManufacturer(value) {
	manufacturer = document.getElementsByClassName("manufacturer");
	for (index = 0; index < manufacturer.length; ++index) {
		if (value == "all") {
	    	manufacturer[index].classList.remove("hidden");
		}
		if (value == "airman") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("airman").classList.remove("hidden");
		}
		if (value == "bobcat") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("bobcat").classList.remove("hidden");
		}
		if (value == "case") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("case").classList.remove("hidden");
		}
		if (value == "caterpillar") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("caterpillar").classList.remove("hidden");
		}
		if (value == "daewoo") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("daewoo").classList.remove("hidden");
		}
		if (value == "doosan") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("doosan").classList.remove("hidden");
		}
		if (value == "hitachi") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("hitachi").classList.remove("hidden");
		}
		if (value == "hyundai") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("hyundai").classList.remove("hidden");
		}
		if (value == "ihi") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("ihi").classList.remove("hidden");
		}
		if (value == "kobelco") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("kobelco").classList.remove("hidden");
		}
		if (value == "komatsu") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("komatsu").classList.remove("hidden");
		}
		if (value == "kubota") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("kubota").classList.remove("hidden");
		}
		if (value == "newholland") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("newholland").classList.remove("hidden");
		}
		if (value == "sumitomo") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("sumitomo").classList.remove("hidden");
		}
		if (value == "sunward") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("sunward").classList.remove("hidden");
		}
		if (value == "takeuchi") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("takeuchi").classList.remove("hidden");
		}
		if (value == "volvo") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("volvo").classList.remove("hidden");
		}
		if (value == "wackerneuson") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("wackerneuson").classList.remove("hidden");
		}
		if (value == "yanmar") {
	    	manufacturer[index].classList.add("hidden");
			document.getElementById("yanmar").classList.remove("hidden");
		}
	}
}
