package serverAC;

import java.util.HashMap;

/**
 * 消息存储
 * @author 杨睿
 */

public class message {
	
	//使用哈希表存储信息
	public static HashMap<String, String> getMessage(String msg) {
			
		HashMap<String, String> map = new HashMap<String, String>();
		
		String message[]=msg.split(",");
		
		map.put("fromID", message[0]);
		map.put("toID", message[1]);
		map.put("info", message[2]);
		
		return map;
	}

}
