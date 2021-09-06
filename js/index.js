let start = document.getElementById("start");
let countOrderResult = document.getElementById("countOrderResult");
let summOrderElem = document.getElementById("summOrderResult");
let orderMarkupElem = document.getElementById("summOrderMarkupResult");
let comClick = document.getElementsByClassName("com");

for(let i = 0; i<comClick.length;i++){
comClick[i].onclick = function(){
	let elem = document.getElementsByClassName("click");
	if(elem[0].innerHTML == "%"){
		comClick[1].setAttribute("class","com click");
		comClick[0].setAttribute("class","com");
	}else{
		comClick[0].setAttribute("class","com click");
		comClick[1].setAttribute("class","com");
	}
}
};

start.onclick = function(){
	let orders="";
	let elem = document.getElementsByClassName("click");
	let inputElem = document.getElementsByTagName("input");
	let oneValue = inputElem[0].value.match(/\d+/g);
	let twoValue = inputElem[1].value.match(/\d+/g);
	let threeValue = inputElem[2].value.match(/\d+/g);
	if((oneValue != null && twoValue != null) &&  threeValue != null){
		if(elem[0].innerHTML=="%"){
			 orders =inputElem[0].value/(inputElem[2].value*(inputElem[1].value*0.01));
		}else{
			 orders =inputElem[0].value/inputElem[1].value;
		}
	let ordersSumm = (orders*inputElem[2].value);
	let ordersMarkup = (orders*inputElem[3].value)
	if(inputElem[0].value != "" && inputElem[1].value != "" && inputElem[2].value != ""){
	countOrderResult.innerHTML =orders.toFixed(0);
	summOrderElem.innerHTML = ordersSumm.toFixed(0);
	orderMarkupElem.innerHTML = ordersMarkup.toFixed(0);
	}
};
}
