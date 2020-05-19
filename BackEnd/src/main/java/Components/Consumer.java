package Components;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
 * 顾客 调温指令，参数至少包括：房间号、目标温度
 *          调风指令，参数至少包括：房间号、风速
 主要使用room的数据结构
 */
public class Consumer {
    private Integer roomCode;	//用户入住房间编号
    private List<Integer> ArriveTime = new ArrayList<>(); //入住时间：年月日时分
    private List<Integer> LeaveTime = new ArrayList<>(Collections.nCopies(5, 0)); //退房时间，初始化为全0

    public Integer getRoomCode(){
        return roomCode;
    }
    public void setRoomCode(Integer roomCode){
        this.roomCode = roomCode;
    }
    public void setWindSpeed(int roomCode, int windSpeed) { //调风指令

    }
    public void setTemperature(int roomCode, Float temperature) { //调温指令

    }
    public Consumer(){

    }
    public void setArriveTime(List<Integer> ArriveTime) { //设置入住时间
        this.ArriveTime = ArriveTime;
    }
    public List<Integer> getArriveTime() { //获取入住时间
        return ArriveTime;
    }
    public void setLeaveTime(List<Integer> LeaveTime) { //设置退房时间
        this.LeaveTime = LeaveTime;
    }
    public List<Integer> getLeaveTime() { //获取退房时间
        return LeaveTime;
    }
}
