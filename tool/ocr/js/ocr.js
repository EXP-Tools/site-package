/**
 * 上传附件转base64
 * @param {File} file 文件流
 */
 const fileByBase64 = (file, callback) => {
    var reader = new FileReader();
    // 传入一个参数对象即可得到基于该参数对象的文本内容
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      // target.result 该属性表示目标对象的DataURL
      console.log(e.target.result);
      callback(e.target.result)
    };
  }


/**
 * 百度图像文字识别
 */
 class BaiduOCR{
 
	constructor(){
		/**
		 * token
		 */
		this.token;
		/**
		 * string 圖像數據
		 */
		this.image;
	}

	/**
	 * 将文件写入Canvas
	 */
	findFileWords(file) {
		var $this = this;
		createImageBitmap(file).then((data) => {
			var canvas = document.createElement("canvas");
			canvas.width = data.width;
			canvas.height = data.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(data,0,0);
			var base = canvas.toDataURL("image/png", 1);
			$this._doReqOCR(base);
		});
	}
 
	/**
	 * 请求识别
	 * @param {string} image Base64图形数据
	 */
	_doReqOCR(image){
		this.image = image;
		if(this.token){
			this._reqOCR();
		}else{
			this._reqToken();
		}
	}
 
    /**
     * 请求识别图像内容
     */
    _reqOCR(){
        var http = new XMLHttpRequest();						
        var url = "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=" + this.token;
        var img = "image="+encodeURIComponent(this.image.split(',')[1]);		
        http.open("post",url);	
        http.setRequestHeader('content-type','application/x-www-form-urlencoded');			
        http.send(img);
        http.onload = function (e) {
            console.log(e.target.response);
        };
    }
 
	/**
	 * 请求token
	 */
	_reqToken(){
		var tokenHttp = new Tool.HttpRequest();
		var url = `https://aip.baidubce.com/oauth/2.0/token?
		grant_type=client_credentials&
		client_id=【API Key】&
		client_secret=【Secret Key】&`;
		tokenHttp.once("complete",this,(data)=>{
			var jd = JSON.parse(data);
			this.token = jd.access_token;
			this._reqOCR();
		});
		tokenHttp.once("error",this,()=>{
			console.warn("ERROR ON HTTP POST");
		});
		tokenHttp.send(url,null,"post");
	}
}