

function round(n)
{
	return Math.floor(n*1000)/1000;
}

function getRandom(min, max) 
{
  return Math.random() * (max - min) + min;
}

function change_krug()
{
	let id_del = document.getElementById('choosen_round').value;
	let x = document.getElementById('n_change').value;
		arr[id_del-1].A *= x;
		arr[id_del-1].B *= x;
		arr[id_del-1].C *= x;
}

function Middle()
{
    let N = +prompt('с каким єлементом работаем?')
    console.log("средняя линия")
    let S = R[N-1]/2
    console.log(S)
}
function corn_a()
{
	let A = arr[0]
    let a = Math.acos((Math.pow(A, 2) - Math.pow(B, 2) - Math.pow(C, 2)) / (-2 * B*C))
		temp = (a * 180) / Math.PI
	if(temp==90){
		let rez = "a — прямой"
	}
	else if(temp < 90){
		let rez ="a — острый"
	}
	else{
		let rez ="a — тупой"
	}
	
	return round(rez);
}

function corn_b()
{
	let B = arr[1]
    let b = Math.acos((Math.pow(C, 2) - Math.pow(A, 2) - Math.pow(B, 2)) / (-2 * B*A))
		temp = (b * 180) / Math.PI
	if(temp==90){
		let rez = "b — прямой"
	}
	else if(temp < 90){
		let rez ="b — острый"
	}
	else{
		let rez ="b — тупой"
	}
	
	return round(rez);
}

function corn_c()
{
	let C = arr[2]
    let c = Math.acos((Math.pow(B, 2) - Math.pow(C, 2) - Math.pow(A, 2)) / (-2 * A*C))
		temp = (c * 180) / Math.PI
	if(temp==90){
		let rez = "c — прямой"
	}
	else if(temp < 90){
		let rez ="c — острый"
	}
	else{
		let rez ="c — тупой"
	}
	
	return round(rez);
}

function corn_a_val()
{
	let A = arr[0]
    let a = Math.acos((Math.pow(A, 2) - Math.pow(B, 2) - Math.pow(C, 2)) / (-2 * B*C))
	temp = (a * 180) / Math.PI
	
	return round(temp);
}

function corn_b_val()
{
	let B = arr[1]
    let b = Math.acos((Math.pow(C, 2) - Math.pow(A, 2) - Math.pow(B, 2)) / (-2 * B*A))
	temp = (b * 180) / Math.PI

	
	return round(temp);
}

function corn_c_val()
{
	let C = arr[2]
    let c = Math.acos((Math.pow(B, 2) - Math.pow(C, 2) - Math.pow(A, 2)) / (-2 * A*C))
	temp = (c * 180) / Math.PI

	
	return round(temp);
}


function rounddd(rad, coner) {
  this.A = rad;
  this.B = coner;
  this.C = change_krug;
  this.Middle = Middle;
  this.duga = duga;
  this.diam = diam;
}

function Add_rand()
{
	let i = arr.length;

		A = round(getRandom(0,10)),
		B = round(getRandom(0,10)),
		C = round(getRandom(0,10)),
		arr[i] = new rounddd(A,B,C);
	
	n++;
}

function Add()
{
	A = Number(document.getElementById('side_A').value);
	B = Number(document.getElementById('side_B').value);
	C = Number(document.getElementById('side_C').value);
	arr.push(new rounddd(A,B,C));
	n++;
}

function tableCreate()
{
	var body = document.body,
        tbl  = document.getElementById('tbl');

    while (document.getElementById('tbl').getElementsByTagName('tr').length > 1) {
		document.getElementById('tbl').deleteRow(1);
	}


    for(var i = 0; i < n; i++){
        var tr = tbl.insertRow();
		var tr_id = i+1;
		tr.setAttribute("id", tr_id)
		
	
        tr.insertCell().appendChild(document.createTextNode(i + 1));
        tr.insertCell().appendChild(document.createTextNode(arr[i].rad));
        tr.insertCell().appendChild(document.createTextNode(arr[i].coner));
        tr.insertCell().appendChild(document.createTextNode(arr[i].Middle()));
        tr.insertCell().appendChild(document.createTextNode(arr[i].duga()));
        tr.insertCell().appendChild(document.createTextNode(arr[i].diam()));
    }
}
   
function m_add()
{
	index = 1;
	menu();
}   
function m_rand()
{
	index = 2;
	menu();
}   
function m_change_angle()
{
	index = 3;
	menu();
} 
let arr = new Array();
let rad;
let coner;
let n = 0;
let index = 0;
function menu()
{
	
	switch(index) 
	{
	case 1:  
		Add();
    	break;

	case 2:  
		Add_rand();
    	break;

	case 3:  
		change_krug();
    	break;
	case 5:
		tableCreate();
		break;	

    default:
    	break;
	}
	tableCreate();
}
