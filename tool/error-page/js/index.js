wordDuration = 4000;
words = [
    "发生了一些事情",
    "我们正在处理",
    "请稍后...",
    "这通常不会太久",
    "请不要关闭浏览器或者网页", 
    "有朋自远方来，在这闲暇",
    "我先介绍一下我自己",
    "你好, 我是EXP",
    "咦？似乎...",
    "再等一下下就好了",
    "应该...",
    "不巧的是，它花费的时间比通常要长",
    "嗯, 别慌",
    "::>_<::",
    "程序奔溃...",
    "正在滚回到以前的版本..."
];
wordIndex = 0;

fadeOut = function (el) {
    el.style.opacity = 1;
    var tick = function () {
        el.style.opacity = +el.style.opacity - 0.1;
        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
};

fadeIn = function (el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.1;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
};

setWord = function () {
    var text = document.getElementById("text");
    text.innerHTML = words[wordIndex];
    fadeIn(text);
    setTimeout(function () {
        fadeOut(text);
    }, wordDuration * 0.9);
};

switchWord = function () {
    if (wordIndex < words.length) {
        setWord();
        setTimeout(function () {
            wordIndex++;
            switchWord();
        }, wordDuration);
    } else {
        window.location = "http://exp-blog.com/";
    }
};

colorDuration = 8000;
colors = [
    {r: 216, g: 0, b: 115},
    {r: 87, g: 22, b: 154},
    {r: 129, g: 0, b: 60},
    {r: 0, g: 80, b: 239},
    {r: 0, g: 64, b: 80},
    {r: 0, g: 204, b: 255},
    {r: 27, g: 110, b: 174},
    {r: 22, g: 73, b: 154},
    {r: 191, g: 90, b: 21},
    {r: 120, g: 170, b: 28},
    {r: 154, g: 22, b: 22},
    {r: 164, g: 196, b: 0},
    {r: 206, g: 53, b: 44},
    {r: 75, g: 0, b: 150},
    {r: 34, g: 34, b: 34},
];

lerp = function (a, b, u) {
    return (1 - u) * a + u * b;
};

fade = function (start, end, duration) {
    var interval = 10;
    var steps = duration / interval;
    var step_u = 1.0 / steps;
    var u = 0.0;
    var theInterval = setInterval(function () {
        if (u >= 1.0) {
            clearInterval(theInterval)
        }
        var r = parseInt(lerp(start.r, end.r, u));
        var g = parseInt(lerp(start.g, end.g, u));
        var b = parseInt(lerp(start.b, end.b, u));
        var colorname = 'rgb(' + r + ',' + g + ',' + b + ')';
        document.body.style.setProperty('background-color', colorname);
        u += step_u;
    }, interval);
};

getColor = function () {
    return colors[Math.floor(Math.random() * colors.length)];
};
currentColor = getColor();

switchColor = function () {
    var newColor = getColor();
    fade(currentColor, newColor, colorDuration);
    currentColor = newColor;
    setTimeout(function () {
        switchColor();
    }, colorDuration);
};

window.onload = function () {
    switchWord();
    switchColor();
};