package com.hotel.acmaneger.Components;

public class User {
    private String name;
    private String phoneNum;
    private String pwd;
    private Integer identity;

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getPhoneNum(){
        return phoneNum;
    }
    public void setPhoneNum(String phoneNum){
        this.phoneNum = phoneNum;
    }
    public String getPwd(){
        return pwd;
    }
    public void setPwd(String pwd){
        this.pwd = pwd;
    }
    public Integer getIdentity(){
        return identity;
    }
    public void setIdentity(Integer identity){
        this.identity=identity;
    }

    public User(){

    }
}
