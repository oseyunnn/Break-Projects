package service;

public abstract class win {
    private String winDesc;
    private String winCategory;
    private String winGoal;
    private String winDate;

    public win(String winDesc, String winCategory, String winGoal, String winDate) {
        this.winDesc = winDesc;
        this.winCategory = winCategory;
        this.winGoal = winGoal;
        this.winDate = winDate;
    }
    public String getWinDesc() {
        return winDesc;
    }
    public String getWinCategory() {
        return winCategory;
    }
    public String getWinGoal() {
        return winGoal;
    }
    public String getWinDate() {
        return winDate;
    }
}
