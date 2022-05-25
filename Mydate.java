public class Mydate {
    private int day, month, year;

    public void initDate() {
        day = 15;
        month = 5;
        year = 2022;
    }

    public void printDate() {
        System.out.println(day + "/" + month + "/" + year);
    }

    public static void name(String[] args) {
        Mydate d1 = new Mydate();
        d1.initDate();
        d1.printDate();
    }
}
