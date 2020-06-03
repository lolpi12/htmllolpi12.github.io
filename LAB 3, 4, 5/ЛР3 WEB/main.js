var simbooools = {};
simbooools[1] = '❶';
simbooools[2] = '❷';
simbooools[3] = '❸';
simbooools[4] = '❹';
simbooools[5] = '❺';
simbooools[6] = '';
simbooools[7] = '';
simbooools[8] = '';
simbooools[9] = '';
simbooools[10] = '';

function isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
}

function makeTableFromCountry (country, usReg){
  var newcontent = '<table class="main-table"><caption>' + country[0] + ' - ' + country[1] + '</caption>';
  var i = 2;
  var o;
  var ret;
  var p;
  var ijk;
  while (i < country.length) {
	if(Array.isArray(country[i])){
		o = country[i]
		ret = '<ol class="rounded">';
		ijk = 1;
		for(p in o){ ret+= '<li>' + simbooools[ijk] + ' ' + o[p] + '</li>'; ijk += 1; }
		ret += '</ol>';
		newcontent += '<tr><td class="main-table" align="right"  width="20%">' + about[i] + '</td><td class="main-table" align="left">' + ret + '</td></tr>'; ;
	}
	else if(isObject(country[i])){
		ret='<table class="object-table" width="100%">';
		o = country[i];
		for(p in o){
			ret+= '<td class="object-table" align="left"><center>' + p + ' : ';
			if(usReg == 1) ret += o[p].toUpperCase();//если регистр =1 то значение в верхнем регистре
			else if(usReg == 2) ret += o[p].toLowerCase();//-.-.-.-
			else ret += o[p];//во всех остальных случаях по умолчанию
			ret += '</center></td>'; }
			ret += '</table>';
		newcontent += '<tr><td class="main-table" colspan="2"><center>' + about[i] + '</center></td></tr>';
		newcontent += '<tr><td class="main-table" colspan="2">' + ret + '</td></tr>';
	}
	else if( (typeof about[i]) != 'undefined' && country[i] == '') newcontent += '<tr><td class="main-table" align="right"  width="20%">' + about[i] + '</td><td class="main-table" align="left"> -//-//- </td></tr>';
    else if( (typeof about[i]) != 'undefined' && (typeof country[i]) != 'undefined') newcontent += '<tr><td class="main-table" align="right"  width="20%">' + about[i] + '</td><td class="main-table" align="left">' + country[i] + '</td></tr>';
    i++;
  }
  newcontent += '</table></br></br>';
  return newcontent;
}

function TableReload(){//ф-ия обнуляет содержимое дива foo и заполняет его новыми данными основываясь на массиве и значения поля селект(Roma)
	document.getElementById('foo').innerHTML = "";//обнуляет содержимое дива foof
    countries.forEach(function(entry) {//цикл
		document.getElementById('foo').innerHTML += makeTableFromCountry (entry, document.getElementById('Roma').value);//вывод ф-ии мейктеблфоркантри в цикле с параметрами (1массив относящийся к стране) (2значение поля селект), после исполнения ф-ии её значение добовляем внутрь(в конец) тега foo
    });
}

//Основная логика
window.onload = function() {//когда страница загрузится исполнится ф-ия
	TableReload();
}