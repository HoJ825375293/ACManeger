package Components;

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
    //登录操作，首先查询数据库中有无此number，有查看pwd是否相同
    public int register(String phoneNum,String pwd) {

        return 0;
    }
    public User(){

    }
}
