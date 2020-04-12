package com.hotel.acmaneger.Components;

public class Room {
    private Integer roomNum;
    private Float temperature;

    public Integer getRoomNum(){
        return roomNum;
    }
    public void setRoomNum(Integer roomNum){
        this.roomNum = roomNum;
    }
    public Float getTemperature(){
        return temperature;
    }
    public void setTemperature(float temperature){
        this.temperature = temperature;
    }
    public Room(){

    }
}
