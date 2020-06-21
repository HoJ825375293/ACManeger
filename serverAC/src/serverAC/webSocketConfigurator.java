package serverAC;

import javax.servlet.http.HttpSession;
import javax.websocket.HandshakeResponse;
import javax.websocket.server.HandshakeRequest;
import javax.websocket.server.ServerEndpointConfig;
import javax.websocket.server.ServerEndpointConfig.Configurator;


//配置http session
/**
 * 从webSocket中获取用户的session
 * @author 杨睿
 *
 */
public class webSocketConfigurator extends Configurator{

	@Override
	public void modifyHandshake(ServerEndpointConfig sec, HandshakeRequest request, HandshakeResponse response) {
		// TODO 自动生成的方法存根
		super.modifyHandshake(sec, request, response);
		
		HttpSession httpSession=(HttpSession)request.getHttpSession();
		sec.getUserProperties().put(HttpSession.class.getName(), httpSession);
		
		
	}
	
}
