package Components;

import java.util.ArrayList;
import java.util.List;
/*
 * 管理员 包括设置温控模式、设置温控范围（18-26/26-30度）、缺省温度（26度）、费率（3/2/1）以及服务对象
 * 部分使用room的数据结构
 */
public class Administrator {
	public static final Integer SETMODE = 0; //空调运行模式：设置模式、就绪模式
	public static final Integer READY = 1;
	public static final Integer COOL = 2; //温控模式：制冷、制暖
	public static final Integer WARM = 3;

	private Integer mode = COOL; //温控模式，默认制冷
	private Integer lowerTem = 18; //温控范围，默认18-26度
	private Integer upperTem = 26;
	private Integer defaultTem = 26; //默认目标温度为26度
	private Integer FeeRate_H = 1; //费率
	private Integer FeeRate_M = 2;
	private Integer FeeRate_L = 3;
	private Integer TotalRoom = 10; //房间总数，默认为10
	private Integer ServeRoom = 3; //同时服务的房间数，默认为3
	private Integer WaitingTime = 60; //排队等待时长，默认60秒

	public void setTotalRoom(Integer TotalRoom){ //设置房间总数
		this.TotalRoom = TotalRoom;
	}
	public Integer getTotalRoom(){ //获得房间总数
		return TotalRoom;
	}
	public void setServeRoom(Integer ServeRoom){ //设置同时服务房间数
		this.ServeRoom = ServeRoom;
	}
	public Integer getServeRoom(){ //获得同时服务房间数
		return ServeRoom;
	}
	public void setMode(Integer mode) { //设置温控模式
		this.mode = mode;
	}
	public Integer getMode() { //获得温控模式
		return mode;
	}
	public void setLowerTem(Integer lowerTem) {
		this.lowerTem = lowerTem;
	}
	public Integer getLowerTem() {
		return lowerTem;
	}
	public void setUpperTem(Integer upperTem) {
		this.upperTem = upperTem;
	}
	public Integer getUpperTem() {
		return upperTem;
	}
	public void setDefaultTem(Integer defaultTem) {
		this.defaultTem = defaultTem;
	}
	public Integer getDefaultTem() {
		return defaultTem;
	}
	public void setFeeRateH(Integer FeeRate_H) {
		this.FeeRate_H = FeeRate_H;
	}
	public Integer getFeeRateH() {
		return FeeRate_H;
	}
	public void setFeeRateM(Integer FeeRate_M) {
		this.FeeRate_M = FeeRate_M;
	}
	public Integer getFeeRateM() {
		return FeeRate_M;
	}
	public void setFeeRateL(Integer FeeRate_L) {
		this.FeeRate_L = FeeRate_L;
	}
	public Integer getFeeRateL() {
		return FeeRate_L;
	}
	public void setWaitingTime(Integer WaitingTime){
		this.WaitingTime = WaitingTime;
	}
	public Integer getWaitingTime(){
		return WaitingTime;
	}

	public Integer PowerON() { //开启空调电源，返回空调运行模式为设置模式
		return SETMODE;
	}
	public void setPara(int mode, int lowerTem, int upperTem, int defaultTem, int FeeRate_H, int FeeRate_M, int FeeRate_L, int WaitTime) {
		//设置空调主机工作的参数
	}
	public Integer StartUp() { //启动空调，返回空调运行模式为就绪模式
		return READY;
	}
	public List<String> checkRoomState(List<Integer> OptionList) { //监控空调使用状态，返回查询结果
		List<String> ResultList = new ArrayList<>();
		return ResultList;
	}
}
