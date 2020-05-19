package Components;

//import java.util.ArrayList;
//import java.util.List;

/*
 * 前台，顾客入住，退房，空调账单（详单）
 */
public class Reception {
	//	private List<String> ConsumerList = new ArrayList<>();
	private Integer RoomId;

	public int CheckIn() { //办理入住，记录入住时间
		return RoomId;
	}
	public void CheckOut(int RoomId) { //办理退房，记录退房时间

	}
	public void addtoList(int RoomId) { //将客户入住信息加入表中

	}
	public void delefromList(int RoomId) { // //将客户入住信息从表中移除

	}
	public void getBill(int RoomId) { //提供账单

	}
	public void getDetailedList(int RoomId) { //提供详单

	}
}
