var clone = function(object){
    if(object instanceof String)  { return object + ""; }
    if(object instanceof Number)  { return object + 0;  }
    if(object instanceof Boolean) { return !!object;    }
    var newObj = (object instanceof Array) ? [] : {};
    for (var i in object) {
        if(object.hasOwnProperty(i)){
            newObj[i] = (object[i] && typeof object[i] === "object") ? clone(object[i]) : object[i];
        }
    }
    return newObj;
};

var randomNumber = function(from,to,decimals) {
	if (decimals != undefined) {
		return (Math.random()*(to-from)+from).toFixed(decimals);
	}
	else {
		return Math.random()*(to-from)+from;
	}
};

var twoSidedPopover = function (item,which) {
	var str = "";
	var fillStr = "";
	if (item[which].length == undefined) {
		for (var prop in item[which]) {
			if (item[which][prop].total > 0) {
				fillStr += item[which][prop].name + ': <br>';
			}
		}
		if (fillStr != "") {
			str += ('<div class="toolTipListLeft">' + fillStr + '</div>');
		}
		fillStr  = "";
		for (var prop in item[which]) {
			if (item[which][prop].total > 0) {
				fillStr += item[which][prop].total + '<br>';
			}
		}
		if (fillStr != "") {
			str += ('<div class="toolTipListRight">' + fillStr + '</div>');
		}
	}
	else {

		for (var x = 0; x < item[which].length; x++) {
			for (var prop in item[which][x]) {
				if (item[which][x][prop] > 0) {
					fillStr += (prop + ': <br>');
				}
			}
		}
		if (fillStr != "") {
			str += ('<div class="toolTipListLeft">' + fillStr + '</div>');
		}
		fillStr  = "";
		for (var x = 0; x < item[which].length; x++) {
			for (var prop in item[which][x]) {
				if (item[which][x][prop] > 0) {
					fillStr += (item[which][x][prop] + '<br>');
				}
			}
		}
		if (fillStr != "") {
			str += ('<div class="toolTipListRight">' + fillStr + '</div>');
		}
	}

	return str;
};

var oneSidedPopover = function(item,which) {
	var fillStr = "";
	for (var x = 0; x < item[which].length; x++) {
		if (item[which][x].name != undefined && item[which][x].active) {
			item[which][x].selected ?
				fillStr += '<span class="activeLine">' + item[which][x].name + '</span><br/>' :
				fillStr += '<span>' + item[which][x].name + '</span><br/>';
		}
	}
	if (fillStr != "") {
		return '<div class="tooltipContainer">' + fillStr + '</div>'
	}
};