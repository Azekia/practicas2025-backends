package com.example.backendapp.model.toRoman;

public class InvalidRangeException extends RuntimeException {
    public InvalidRangeException(String message) {

        super(message);
    }

    public static InvalidRangeException errorRangeLimitException(Integer num) {
        return new InvalidRangeException(String.format("Error en el número introducido %s, el rango debe de ser entre 1 y 3999", num));
    }
}
