package Components;

public class Room {
    //房间号，空调模式，温度，风速
    private Integer roomId;
    private Integer pattern; // 0 default,1 cold,2 hot
    private Integer temperature;	//当前温度
    private Integer targetTemperature; //目标温度
    private Integer windSpeed; //0low,1mid,2high
    //    private Integer fee; //费用
    private Integer usedTime; //使用时间

    public Integer getPattern(){
        return pattern;
    }
    public void setPattern(Integer pattern){
        this.pattern = pattern;
    }
    public Integer getWindSpeed(){
        return windSpeed;
    }
    public void setWindSpeed(Integer windSpeed){
        this.windSpeed = windSpeed;
    }
    public Integer getRoomId(){
        return roomId;
    }
    public void setRoomId(Integer roomId){
        this.roomId = roomId;
    }
    public Integer getTemperature(){
        return temperature;
    }
    public void setTemperature(int temperature){
        this.temperature = temperature;
    }
    public Integer getTargetTemperature(){
        return targetTemperature;
    }
    public void setTargetTemperature(int targetTemperature){
        this.targetTemperature = targetTemperature;
    }
    //    public Integer getFee(){
//        return fee;
//    }
//    public void setFee(Integer fee){
//        this.fee = fee;
//    }
    public Integer getTime(){
        return usedTime;
    }
    public void setTime(Integer usedTime){
        this.usedTime = usedTime;
    }
    public Room(){

    }
}
