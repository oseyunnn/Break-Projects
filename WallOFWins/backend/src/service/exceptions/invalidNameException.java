package service.exceptions;

public class invalidNameException extends Exception {
    public invalidNameException(String message) {
        super(message);
    }

    public static class weakPassword extends Exception{
        public weakPassword(String message) {
            super(message);
        }
    }

    public static class passwordMismatch extends Exception{
        public passwordMismatch(String message) {
            super(message);
        }
    }


    public static class invalidEmail extends Exception{
        public invalidEmail(String message) {
            super(message);
        }
    }


     public static class invalidUsername extends Exception{
        public invalidUsername(String message) {
            super(message);
        }
    }
   
}


