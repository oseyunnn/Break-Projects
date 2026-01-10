package service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class treasure{
    private String treasureDesc;
    private String treasureGoal;
    private String treasureDate;
    private DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    public treasure(String treasureDesc) {
        this.treasureDesc = treasureDesc;
    }

    public void setGoal(String treasureGoal) {
        this.treasureGoal = treasureGoal;
        this.treasureDate = LocalDateTime.now().format(dateFormatter);
    }

    public String getTreasureDesc() {
        return treasureDesc;
    }
    public String getTreasureGoal() {
        return treasureGoal;
    }
    public String getTreasureDate() {
        return treasureDate;
    }
}