	function LENGTH_MEASURES() {
		this.mKilometer = 1000;
		this.mMeter = 1;
		this.mDecimeter = 0.1;
		this.mCentimeter = 0.01;
		this.mMillimeter = 0.001;
		this.mDecimillimetre = 0.00001;
		this.mMicronmeter = 0.000001;
		this.nMicronmeter = 0.000000001;
		this.mLimeter = 500;
		this.mZhangmeter = 10 / 3;
		this.mChimeter = 1 / 3;
		this.mCunmeter = 1 / 30;
		this.mFenmeter = 1 / 300;
		this.mmLimeter = 1 / 3000;
		this.engFoot = 0.3048;
		this.engMile = 5280 * this.engFoot;
		this.engFurlong = 660 * this.engFoot;
		this.engYard = 3 * this.engFoot;
		this.engInch = this.engFoot / 12;
		this.nautMile = 1852;
		this.nautFathom = 6 * this.engFoot;
	}
	var length_data = new LENGTH_MEASURES();
	function checkNum(str) {
		for (var i = 0; i < str.length; i++) {
			var ch = str.substring(i, i + 1);
			if (ch != "." && ch != "+" && ch != "-" && ch != "e" && ch != "E" && (ch < "0" || ch > "9")) {
				alert("请输入有效的数字");
				return false;
			}
		}
		return true;
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
		resetValues(form, length_data);
	}