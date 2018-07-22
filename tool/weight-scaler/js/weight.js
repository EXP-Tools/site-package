function WEIGHT_MEASURES() {
	this.mTon = 1000;
	this.mKilogram = 1;
	this.mGram = 0.001;
	this.mMilligram = 0.000001;
	this.cJin = 0.5;
	this.cDan = 50;
	this.cLiang = 0.05;
	this.cQian = 0.005;
	this.avdpPound = 0.45359237;
	this.briTon = 2240 * this.avdpPound;
	this.usTon = 2000 * this.avdpPound;
	this.briCWT = 112 * this.avdpPound;
	this.usCWT = 100 * this.avdpPound;
	this.briStone = 14 * this.avdpPound;
	this.avdpOunce = this.avdpPound / 16;
	this.avdpDram = this.avdpPound / 256;
	this.avdpGrain = this.avdpPound / 7000;
	this.troyPound = 5760 * this.avdpGrain;
	this.troyOunce = 480 * this.avdpGrain;
	this.troyDWT = 24 * this.avdpGrain;
	this.troyGrain = this.avdpGrain;
}
var weight_data = new WEIGHT_MEASURES();
function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i + 1);
		if (ch != "." && ch != "+" && ch != "-" && ch != "e" && ch != "E" && (ch < "0" || ch > "9")) {
			alert("请输入有效的数字");
			return false;
		}
	}
	return true
}
function normalize(what, digits) {
	var str = "" + what;
	var pp = Math.max(str.lastIndexOf("+"), str.lastIndexOf("-"));
	var idot = str.indexOf(".");
	if (idot >= 1) {
		var ee = (pp > 0) ? str.substring(pp - 1, str.length) : "";
		digits += idot;
		if (digits >= str.length) {
			return str;
		}
		if (pp > 0 && digits >= pp) {
			digits -= pp;
		}
		var c = eval(str.charAt(digits));
		var ipos = digits - 1;
		if (c >= 5) {
			while (str.charAt(ipos) == "9") {
				ipos--;
			}
			if (str.charAt(ipos) == ".") {
				var nc = eval(str.substring(0, idot)) + 1;
				if (nc == 10 && ee.length > 0) {
					nc = 1;
					ee = "e" + (eval(ee.substring(1, ee.length)) + 1);
				}
				return "" + nc + ee;
			}
			return str.substring(0, ipos) + (eval(str.charAt(ipos)) + 1) + ee;
		} else {
			var ret = str.substring(0, digits) + ee;
		}
		for (var i = 0; i < ret.length; i++) {
			if (ret.charAt(i) > "0" && ret.charAt(i) <= "9") {
				return ret;
			}
		}
		return str;
	}
	return str;
}
function compute(obj, val, data) {
	if (obj[val].value) {
		var uval = 0;
		uval = obj[val].value * data[val];
		if ((uval >= 0) && (obj[val].value.indexOf("-") != -1)) {
			uval = -uval;
		}
		for (var i in data) {
			obj[i].value = normalize(uval / data[i], 8);
		}
	}
}
function resetValues(form, data) {
	for (var i in data) {
		form[i].value = "";
	}
}
function resetAll(form) {
	resetValues(form, weight_data);
}