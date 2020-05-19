package Components;

import java.util.ArrayList;
import java.util.List;

/*要求在一个日报表中能展示所有房间使用空调的次数（一次开关）、
 * 最常用目标温度（该房间使用时间最长的目标温度）、最常用风速（时间最长的风速）、
 * 达到目标温度次数、被调度次数、详单记录数、总费用。
 */
public class Manager {
    private Integer totalNum;//房间总数
    private Integer usuallyTem;//常用温度
    private Integer usuallyWind;//常用风速
    private Integer temTimes;//达到目标温度次数
    private Integer workTimes;//被调度（进入工作状态）次数
    private Integer totalFee;//总费用

    public Integer getTotalNum(){
        return totalNum;
    }
    public void setTotalNum(Integer totalNum){
        this.totalNum = totalNum;
    }
    public Integer getUsuallyTem(){
        return usuallyTem;
    }
    public void setUsuallyTem(Integer usuallyTem){
        this.usuallyTem = usuallyTem;
    }
    public Integer getUsuallyWind(){
        return usuallyWind;
    }
    public void setUsuallyWind(Integer usuallyWind){
        this.usuallyWind = usuallyWind;
    }
    public Integer getTemTimes(){
        return temTimes;
    }
    public void setTemTimes(Integer temTimes){
        this.temTimes = temTimes;
    }
    public Integer getWorkTimes(){
        return workTimes;
    }
    public void setWorkTimes(Integer workTimes){
        this.workTimes = workTimes;
    }
    public Integer getTotalFee(){
        return totalFee;
    }
    public void setTotalFee(Integer totalFee){
        this.totalFee = totalFee;
    }

    public List<String> checkReport(Integer range, List<Integer> OptionList) { //查询报表，range为年、月、日报表
        List<String> ResultList = new ArrayList<>();
        return ResultList;
    }
    public List<Integer> getStatistics() { //日报表中，计算统计信息
        List<Integer> ResultList = new ArrayList<>();
        return ResultList;
    }
}
