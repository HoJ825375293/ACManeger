package serverAC;

import java.io.IOException;
import java.util.HashMap;
import java.util.concurrent.CopyOnWriteArraySet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpSession;
import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import serverAC.message;

/**
 * websocket主要处理部分
 * @author 杨睿
 */
/**
 * 从网上找的说明
 * 
 * @ServerEndpoint 注解是一个类层次的注解，它的功能主要是将目前的类定义成一个websocket服务器端,
 * 注解的值将被用于监听用户连接的终端访问URL地址,客户端可以通过这个URL来连接到WebSocket服务器端
 * 即 @ServerEndpoint 可以把当前类变成websocket服务类
 */

@ServerEndpoint(value = "/websocket" , configurator = webSocketConfigurator.class)

public class webSocket extends HttpServlet{
	//显示声明serialVersionUID避免对象不一致
	private static final long serialVersionUID=1L;
	
	//当前连接数
	private static int countOnlineNum=0;
	
	//实现线程安全
	//类似hash map
	//用来存放每个用户连接的webSocket，实现与单一用户的通信
	private static CopyOnWriteArraySet<webSocket> webSocketArraySet=new CopyOnWriteArraySet<webSocket>();
	
	//记录session
	private Session session;
	
	//用户
	private String user;
	
	//用户的session
	private HttpSession httpSession;
	
	/**
	 * 连接建立成功
	 */
	@OnOpen
	public void onOpen(Session sessionOpen, EndpointConfig config) {
		this.session=sessionOpen;
		
		this.httpSession=(HttpSession)config.getUserProperties().get(HttpSession.class.getName());
		this.user=httpSession.getAttribute("user").toString();
		
		System.out.println("user: "+user+" -- apply login");
		
		if(isLogin(user)) {//用户已经登录
			System.out.println("*** user: "+user+" -- has login");
		}
		else {//新的用户加入
			webSocketArraySet.add(this);
			addOnLineCount();
			
			System.out.println("+++ user: "+user+" join success. OnLine count: "+getOnLineCount());
			
		}
		
	}//end of 'onOpen()'
	
	/**
	 * 连接关闭
	 */
	@OnClose
	public void onClose() {
		webSocketArraySet.remove(this);
		subOnLineCount();
		
		System.out.println("--- user: "+user+" close success. OnLine count: "+getOnLineCount());
		
		
	}
	
	/**
	 * 接收到新的消息
	 */
	@OnMessage
	public void onMessage(String msg, Session session) {
		HashMap<String, String> msgMap = message.getMessage(msg);
		String fromID = msgMap.get("fromID");
		String toID = msgMap.get("toID");
		String infoMSG = msgMap.get("info");
		
		System.out.println("... from user: "+user);
		System.out.println("     info: "+msg);
		System.out.println("infoMSG: "+infoMSG);
		if(!(this.user.equals(fromID))) {
			try {
				this.sendMessage("*** client webSocket error");
				onClose();
				
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
		}
		
		/**
		 * 向目标用户发送消息
		 */
		if(isLogin(toID)) {//目标用户存在
			for(webSocket item: webSocketArraySet) {
				try {
					
					if(item.user.equals(toID)) {
						//在发送方显示
						this.sendMessage(">>> send to: "+toID+" -info: "+infoMSG);
						
						//在接收方显示
						item.sendMessage("<<< recv from: "+fromID+" -info: "+infoMSG);
						
						System.out.println("from '"+fromID+"' to '"+toID+"' info: "+infoMSG);
					}
				}catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					continue;
				}
			}//end of for(...)
			
		}
		else {//目标用户不存在
			try {
				this.sendMessage("** user: "+toID+" -does not exist");
				
			}catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			
		}//end of 'if(isLogin(toID))'
		
	}//end of 'onMessage()'
	
	
	/**
	 * 发生错误
	 */
	@OnError
	public void onError(Session session, Throwable e) {
		System.out.println("*** webSocket error!!!");
		e.printStackTrace();
		
	}
	
	
	
	/**
	 * 判断是否存在相同用户名的用户已经登录
	 */
	public boolean isLogin(String newUser) {
		for(webSocket item: webSocketArraySet) {
			if(item.user.equals(newUser)) {
				item=this;
				return true;
			}
		}
		
		return false;
		
	}
	
	
	
	/**
	 * 使用‘synchronized’实现线程安全
	 */
	
	/**
	 * 新的用户加入
	 */
	public static synchronized void addOnLineCount() {
		webSocket.countOnlineNum++;
		
	}
	
	/**
	 * 返回当前在线的用户数
	 */
	public static synchronized int getOnLineCount() {
		return countOnlineNum;
		
	}
	
	/**
	 * 用户退出
	 */
	public static synchronized void subOnLineCount() {
		webSocket.countOnlineNum--;
		
	}
	
	
	/**
	 * 发送消息
	 */
	public void sendMessage(String msg)throws IOException {
		//阻塞式
		this.session.getBasicRemote().sendText(msg);
		//若要实现非阻塞式，将getBasicRemote换成getAsyncRemote
	}
	
	/**
	 * 获取session
	 */
	public HttpSession getHttpSession() {
		return httpSession;
	}

	public void setHttpSession(HttpSession httpSession) {
		this.httpSession = httpSession;
	}

}
