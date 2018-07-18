$(function() {
	var c = new Coder("style-text");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Hello，我是EXP，是一名普通的技术开发爱好者</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*我的主要工作是无休止地学习</div>",2000);
	c.load("<div class='bef_comment writecode'>&nbsp;*让我们来点实际的，看看我能做些什么</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*让我们开始吧,我们先来让所有的变化都以动画的效果来显示</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>*</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transition</span>: <span class='bef_value'> all 1s</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*看起来似乎没什么变化，不要着急，接下来你就会看到</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*你是不是厌倦了白底黑字</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*那么让我们来做一些改变</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>html</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(63, 82, 99)</span>;</div>");
	c.setClass("html", [{
		"name": "background",
		"val": "rgb(63, 82, 99)"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*稍等，我们来改变一下字体的颜色</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre,a</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>color</span>: <span class='bef_value'>white</span>;</div>");
	c.setClass("pre,a", [{
		"name": "color",
		"val": "white"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*现在看起来好多了</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*在这整个页面里写代码让人有些不舒服</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*我准备创建一个区域来更好的显示我的代码</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre</span><span class='bef_key'>:not(:empty)</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>overflow</span>: <span class='bef_value'>hidden</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "overflow",
		"val": "hidden"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(48, 48, 48)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "background",
		"val": "rgb(48, 48, 48)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>border</span>: <span class='bef_value'>1px solid #ccc</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "border",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>max-height</span>: <span class='bef_value'>44.6%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "max-height",
		"val": "44.6%"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>width</span>: <span class='bef_value'>49%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "width",
		"val": "49%"
	}]);
	$('#pre:not(:empty)').addClass("toarea");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-size</span>: <span class='bef_value'>14<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-size",
		"val": "14px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-family</span>: <span class='bef_value'>monospace</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-family",
		"val": "monospace"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>padding</span>: <span class='bef_value'>10<span class='bef_px'>px</span> 10<span class='bef_px'>px</span> 20<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "padding",
		"val": "10px 10px 20px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>box-shadow</span>: <span class='bef_value'>-4<span class='bef_px'>px</span> 4<span class='bef_px'>px</span> 2<span class='bef_px'>px</span> 0 rgba(0,0,0,0.3)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "box-shadow",
		"val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>white-space</span>: <span class='bef_value'>pre-wrap</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "white-space",
		"val": "pre-wrap"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>outline</span>: <span class='bef_value'>0</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "outline",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*OK，现在让我们来换一下位置</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*让我们准备来再做一些改变</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transform</span>: <span class='bef_value'>translateX(95%)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(95%)"
	}]);
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>position</span>: <span class='bef_value'>absolute</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "position",
		"val": "absolute"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*现在看起来好多了，但是所有的文字颜色都是白色的</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*让我们来让他的可读性更好一点吧</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>.comment</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#857F6B</span>; <span class='bef_key'>font-style</span>: <span class='bef_value'>italic</span>; }</div>");
	c.addClass(".bef_comment","comment");
	c.load("<div class='code writecode'><span class='bef_selector'>.selector</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#E69F0F</span>; }</div>");
	c.addClass(".bef_selector","selector");
	c.load("<div class='code writecode'><span class='selector'>.selector .key</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.addClass(".bef_key","key");
	c.load("<div class='code writecode'><span class='selector'>.key</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.load("<div class='code writecode'><span class='selector'>.value</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#BE84F2</span>; }</div>");
	c.addClass(".bef_value","value");
	c.load("<div class='code writecode'><span class='selector'>.value.px</span>&nbsp;{ <span class='key'>color</span>: <span class='value'>#F92772</span>; }</div></p>");
	c.addClass(".value .bef_px","px");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*现在我们差不多都准备好了</div>");
	c.load("<div class='comment writecode'>&nbsp;*让我们最后再来做一些3D旋转</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#content</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-perspective</span>: <span class='value'>1000<span class='px'>px</span></span>;</div>");
  	c.setClass("#content", [{
		"name": "-webkit-perspective",
		"val": "1000px"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='code writecode'><span class='selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>translateX(98.5%) rotateY(-10deg)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(98.5%) rotateY(-10deg)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>right</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform-origin",
		"val": "right"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>max-height</span>: <span class='value'>94.5%</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "max-height",
		"val": "94.5%"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*现在我们差不多可以开始写我的简历了</div>");
	c.load("<div class='comment writecode'>&nbsp;*我相信你来这不只是为了看这些漂亮的颜色</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.addClass("#work-text","pre_work-text");
	c.load("<p><div class='code writecode'><span class='selector'>pre</span><span class='key'>:not(#style-text)</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(10deg)</span>;</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>left</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	var r = new Coder("work-text");
	r.load("<div id='md'></div>");
	var w = new Coder("md");
	w.load("<h1 class='writecode'>简历</h1>");
	w.load("<p><div class='writecode'>EXP</div>");
	w.load("<div class='writecode'>ACMer + 系统架构师</div>");
	w.load("<h1 class='writecode'>联系</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'>Site:<a href='http://exp-blog.com/' target='_blank'>http://exp-blog.com/</a></li>");
	w.load("<li class='writecode'>QQ:<a href='http://wpa.qq.com/msgrd?v=3&uin=289065406&site=qq&menu=yes' target='_blank'>289065406</a></li>");
	w.load("<li class='writecode'>Mail:<a href='mailto:289065406@qq.com?subject=[EXP-BLOG]%20Your%20Question%20（请写下您的疑问）&body=What%20can%20I%20help%20you?%20（需要我提供什么帮助吗？）' target='_blank'>289065406@qq.com</li>");
	w.load("</ul>");
	w.load("<h1 class='writecode'>技能</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'>擅长Ai、Fl、Br、Ae、Pr、Ps等软件的安装与卸载</li>");
	w.load("<li class='writecode'>精通PHP、C、C＋＋、Java、Python等单词的拼写</li>");
    w.load("<li class='writecode'>熟悉Windows、Linux、Mac、Android、IOS等系统的开关</li>");
    w.load("<li class='writecode'>while(alive)</li>");
    w.load("<li class='writecode'>{</li>");
    w.load("<li class='writecode'>&nbsp;&nbsp;&nbsp;&nbsp;eat();</li>");
    w.load("<li class='writecode'>&nbsp;&nbsp;&nbsp;&nbsp;code();</li>");
    w.load("<li class='writecode'>&nbsp;&nbsp;&nbsp;&nbsp;sleep();</li>");
    w.load("<li class='writecode'>}</li>");
	w.load("</ul>");
	w.load("<h1 class='writecode'>程序猿</h1>");
	w.load("<ul>");
    w.load("<li class='writecode'>写字楼里写字间，写字间里程序员</li>");
    w.load("<li class='writecode'>程序人员写程序，又拿程序换酒钱</li>");
    w.load("<li class='writecode'>酒醒只在网上坐，酒醉还来网下眠</li>");
	w.load("<li class='writecode'>酒醉酒醒日复日，网上网下年复年</li>");
	w.load("<li class='writecode'>但愿老死电脑间，不愿鞠躬老板前</li>");
	w.load("<li class='writecode'>奔驰宝马贵者趣，公交自行程序员</li>");
	w.load("</ul>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*左面的简历看起来不是太令人满意，让我们先给他来点动态渲染</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateX(0deg) rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text #md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*好了，让我们准备</div>");
	c.load("<div class='comment writecode'>&nbsp;*</div>");
	c.load("<div class='comment writecode'>&nbsp;*3....</div>");
	c.load("<div class='comment writecode'>&nbsp;*2....</div>");
	c.load("<div class='comment writecode'>&nbsp;*1....</div>");
	c.load("<div class='comment writecode'>&nbsp;*</div>");
	c.load("<div class='comment writecode'>&nbsp;*.</div>");
	c.load("<div class='comment writecode'>&nbsp;*</div>");
	c.load("<div class='comment writecode'>&nbsp;*差不多了，让我们的简历动起来！</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.setClass("#work-text", [{
		"name": "-webkit-transform",
		"val": "rotateX(0deg) rotateY(190deg) rotateZ(180deg)"
	}]);
	c.setClass("#work-text #md", [{
		"name": "-webkit-transform",
		"val": "rotateY(190deg) rotateZ(180deg)"
	}]);
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*对于文本，我们可以再做一点微调</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>font-family</span>: <span class='value'>'Helvetica Neue', Helvetica, sans-serif</span>;</div>");
	c.setClass("#md", [{
		"name": "font-family",
		"val": "'Helvetica Neue', Helvetica, sans-serif"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md h1</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>border-bottom</span>: <span class='value'>1px solid #ccc</span>;</div>");
	c.setClass("#md h1", [{
		"name": "border-bottom",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>padding-bottom</span>: <span class='value'>5px</span>;</div>");
	c.setClass("#md h1", [{
		"name": "padding-bottom",
		"val": "5px"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md li</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>5<span class='px'>px</span> 0</span>;</div>");
	c.setClass("#md li", [{
		"name": "margin",
		"val": "5px 0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md h1,#md ul</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>0</span>;</div>");
	c.setClass("#md h1,#md ul", [{
		"name": "margin",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*这样基本上就差不多了</div>");
	c.load("<div class='comment writecode'>&nbsp;*");
	c.load("<div class='comment writecode'>&nbsp;*如果你想和我联系</div>");
	c.load("<div class='comment writecode'>&nbsp;*QQ:<a href='http://wpa.qq.com/msgrd?v=3&uin=289065406&site=qq&menu=yes'>289065406</a></div>");
	c.load("<div class='comment writecode'>&nbsp;*Mail:<a href='mailto:289065406@qq.com?subject=[EXP-BLOG]%20Your%20Question%20（请写下您的疑问）&body=What%20can%20I%20help%20you?%20（需要我提供什么帮助吗？）'>289065406@qq.com</a></div>");
	c.load("<div class='comment writecode'>&nbsp;*最后非常感谢您愿意花3分钟看完我的简历！</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");

});

var m = 0;

var Coder = function(dom) {
	this._dom = dom;
};

Coder.prototype = {
	constructor: Coder,
	load: function(code, second) {
		var dom = this._dom;
		var o = this;
		var _second = second ? second : 1000;
		_second = m + _second;
		setTimeout(function() {
			$('#' + dom).scrollTop( $('#' + dom)[0].scrollHeight );
			$("#" + dom).append(code);
		}, _second);
		m = _second;
	},
	setClass: function(dom, styles,second) {
		var _second = second ? second : 0;
		_second = m + _second;
		for (var i in styles) {
			setTimeout(function() {
				$(dom).css(styles[i].name, styles[i].val);
			}, _second);
		}
		m = _second;
	},
	addClass:function(dom,className){
		var second = m;
		setTimeout(function() {
			$(dom).addClass(className);
		}, second);
	}
}
