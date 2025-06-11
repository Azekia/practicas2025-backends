package com.example.backendapp.model;

import com.example.backendapp.model.toRoman.InvalidRangeException;
import com.example.backendapp.model.toRoman.TraductorNumericoRomano;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

class TraductorNumericoRomanoTest {

    private TraductorNumericoRomano traductorNumericoRomano;

    static Stream<Object[]> romanNumberProvider() {
        return Stream.of(new Object[][]{
                {1, "I"},
                {200, "CC"},
                {2400, "MMCD"},
                {3443, "MMMCDXLIII"},
                {3999, "MMMCMXCIX"}
        });
    }

    @BeforeEach
    void setUp(TestInfo info) {
        System.out.println("Running test: " + info.getDisplayName());

        traductorNumericoRomano = new TraductorNumericoRomano();
    }


    @ParameterizedTest
    @MethodSource("romanNumberProvider")
    @DisplayName("Validación de resultados para valores dentro de rango")
    void getRomanNumberValidRange(int input, String expected) {
        assertEquals(expected, traductorNumericoRomano.getRomanNum(input));
    }

    @Test
    @DisplayName("Validación de lanzamiento de excepciones")
    void getRomanExceptionInvalidRange() {
        assertThrows(InvalidRangeException.class, () -> traductorNumericoRomano.getRomanNum(5000));
    }


}