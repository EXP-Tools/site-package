
	function setVisible(idElement, visible) {
		var obj = document.getElementById(idElement);
		obj.style.visibility = visible ? "visible" : "hidden";
	}
	function isValidFields() {
		var textSour = document.getElementById("textSour");
		if (null==textSour.value || textSour.value.length<1) {
			textSour.focus();
			$(".alert-danger").html("请输入待匹配文本").show().delay(5000).fadeOut();
			return false;
		}
		var textPattern = document.getElementById("textPattern");
		if (null==textPattern.value || textPattern.value.length<1) {
			textPattern.focus();
			$(".alert-danger").html("请输入正则表达式").show().delay(5000).fadeOut();
			return false;
		}
		$(".alert-danger").hide();
		return true;
	}
	function buildRegex() {
		var op = "";
		if (document.getElementById("optionGlobal").checked)op = "g";
		if (document.getElementById("optionIgnoreCase").checked)op = op + "i";
		return new RegExp(document.getElementById("textPattern").value, op);
	}
	function onMatch() {
		if (!isValidFields())
			return false;
		document.getElementById("textMatchResult").value = "";
		var regex = buildRegex();
		var result = document.getElementById("textSour").value.match(regex);
		if (null==result || 0==result.length) {
			document.getElementById("textMatchResult").value = "（没有匹配）";
			return false;
		}
		if (document.getElementById("optionGlobal").checked) {
			var strResult = "共找到 " + result.length + " 处匹配：\r\n";
			for (var i=0;i < result.length;++i)strResult = strResult + result[i] + "\r\n";
				document.getElementById("textMatchResult").value = strResult;
		}
		else {
			document.getElementById("textMatchResult").value= "匹配位置：" + regex.lastIndex + "\r\n匹配结果：" + result[0];
		}
		return true;
	}
	function onReplace() {
		var str = document.getElementById("textSour").value;
		var regex = buildRegex();
		document.getElementById("textReplaceResult").value= str.replace(regex, document.getElementById("textReplace").value);
	}
	function reset(){
		$("#textSour").val("");
		$("#textPattern").val("");
		$("#textMatchResult").val("");
		$("#textReplace").val("");
		$("#textReplaceResult").val("");
	}
	String.prototype.format = function (args) {
		if (arguments.length > 0) {
			var result = this;
			if (arguments.length == 1 && typeof (args) == "object") {
				for (var key in args) {
					var reg = new RegExp("({" + key + "})", "g");
					result = result.replace(reg, args[key]);
				}
			}
			else {
				for (var i = 0; i < arguments.length; i++) {
					if (arguments[i] == undefined) {
						result = result.replace(reg, arguments[i]);
					}
					else {
						var reg = new RegExp('\\{' + i + '\\}', 'gm'); ;
						result = result.replace(reg, arguments[i]);
					}
				}
			}
			return result;
		}
		else {
			return this;
		}
	}  
	var languageCode = {
		js: "var pattern = /{0}/,\n\tstr = '{1}';\nconsole.log(pattern.test(str));",
		php: "$str = '{1}';\n$isMatched = preg_match('/{0}/', $str, $matches);\nvar_dump($isMatched, $matches);",
		py: "import re\npattern = re.compile(ur'{0}')\nstr = u'{1}'\nprint(pattern.search(str))",
		java: "import java.util.regex.Matcher;\nimport java.util.regex.Pattern;\n\npublic class RegexMatches {\n\t\n\tpublic static void main(String args[]) {\n\t\tString str = \"{1}\";\n\t\tString pattern = \"{0}\";\n\n\t\tPattern r = Pattern.compile(pattern);\n\t\tMatcher m = r.matcher(str);\n\t\tSystem.out.println(m.matches());\n\t}\n\n}",
		go: "package main\n\nimport (\n\t\"fmt\"\n\t\"regexp\"\n)\n\nfunc main() {\n\tstr := \"{1}\"\n\tmatched, err := regexp.MatchString(\"{0}\", str)\n\tfmt.Println(matched, err)\n}",
		rb: "pattern = /{0}/\nstr = '{1}'\np pattern.match(str)"
	};
	$(document).ready(function (){
		$("#right_area li a").click(function (){
			$("#textPattern").val($(this).attr("title"));
			onMatch();
		});
		$('#myModal').on('show.bs.modal', function () {


			var pattern = $("#textPattern").val();
			if (!pattern) {
				$("#alert-message").html("你还没输入正则表达式").show();
			} else {
				$("#alert-message").hide();
			}
			var prelist = $("#languagelist pre");
			for (var i = 0; i < prelist.length; i++) { 
				var pre = $(prelist[i]);
				var language = pre.attr("id");
				if (language == 'go' || language == 'java') {
					pattern2 = pattern.replace(/\\/gi, "\\\\");
					pre.html(languageCode[language].format(pattern2, ""));
				} else {
					pre.html(languageCode[language].format(pattern, ""));
				}

			}
		});
	});