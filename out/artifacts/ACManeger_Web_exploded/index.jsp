<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>AC server</title>
</head>
<body>
	Login
	<br/>
	<input id="user" type="text"/>
	<button onclick="login()">Login</button>
	
	<br/>
	<br/>
	<br/>
	<input id="message" type="text"/>
	<button onclick="send()">Send</button>
	to
	<input id="toID" type="text"/>
	
	<br/>
	<hr/>
	
	<button onclick="closeWebSocket()">Close WebSocket</button>

	<br/>
	<hr/>
	
	<div id="showMessage"></div>

</body>


<script type="text/javascript">
	var connectWebSocket=null;
	
	//用户输入ID，登录，链接webSocket
	function login(){
		var xmlhttp;
		//创建xmlhttprequest对象
		if (window.XMLHttpRequest){//针对所有新型浏览器
			xmlhttp=new XMLHttpRequest();
		}
		else{//针对ie5、ie6
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4 && xmlhttp.status==200) {
				//当 readyState 等于 4 且状态为 200 时，表示响应已就绪
				if('WebSocket' in window) {//判断浏览器兼容
					websocket=new WebSocket("ws://localhost:8080/serverAC/websocket")
					
					
				}
				else {
					alert('not support WebSocket!!!');
				}
				
				//连接websocket错误
				websocket.onerror=function(){
					setMessageInnerHTML("WebSocket connect ERROR!!!");
				};
				
				//连接websocket成功
				websocket.onopen=function(){
					setMessageInnerHTML("WebSocket connect success.");
				}
				
				//接收到新的消息
				websocket.onmessage=function(event){
					console.log(event);
					setMessageInnerHTML(event.data);
				}
				
				//关闭websocket连接
				websocket.onclose=function(){
					closeWebSocket();
				}
				
				
			}
			
		}//end of 'xmlhttp.onreadystatechange=function()'
		
		//使用post提交
		xmlhttp.open("POST", "webSocketServlet" ,true);
	    //如果是POST请求方式，设置请求首部信息
	    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	    xmlhttp.send("user="+document.getElementById('user').value);
		
	}
	
	//发送消息
	function send(){
		var fromID = document.getElementById('user').value;;
    	var toID = document.getElementById('toID').value;
        var message = document.getElementById('message').value;
        
      	//以逗号作为分割符，如有需要可以此处进行设置
        websocket.send(fromID+','+toID+','+message);
		
	}
	
	//关闭WebSocket
	function closeWebSocket(){
		websocket.close();
      	
		
	}
	
	//将消息显示在网页上
    function setMessageInnerHTML(innerHTML) {
        document.getElementById('showMessage').innerHTML += innerHTML + '<br/>';
    
	}

	
	
	
	
	

</script>

</html>