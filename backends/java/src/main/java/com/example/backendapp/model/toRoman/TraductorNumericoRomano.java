package com.example.backendapp.model.toRoman;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class TraductorNumericoRomano implements HttpHandler {

    private static final int[] VALORES = { 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };
    private static final String[] SIMBOLOS = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };

    private static StringBuilder romano;

    @Override
    public void handle(HttpExchange exchange) throws IOException {

        InputStream is = exchange.getRequestBody();
        byte[] bytes = is.readAllBytes();


        JSONObject responseJson = new JSONObject(new String(bytes).trim());

        Integer numToTraslate = responseJson.getInt("numero");
        Integer repetitions = responseJson.getInt("veces");
        String roman = "";

        try {

            if (numToTraslate < 1 || numToTraslate > 3999) {
                throw InvalidRangeException.errorRangeLimitException(numToTraslate);
            }

            for (int i = 0; i < repetitions; i++) {
                roman = getRomanNum(numToTraslate);
            }

        } catch (NumberFormatException | InvalidRangeException e) {
            responseJson.put("error", "El número debe ser un entero entre 1 y 3999");
            byte[] respByte = responseJson.toString().getBytes();
            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(400, respByte.length);
            exchange.getResponseBody().write(respByte);

            exchange.getResponseBody().close();
            return;
        }

        responseJson.put("romano", roman);

        byte[] respBytes = responseJson.toString().getBytes();
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.sendResponseHeaders(200, respBytes.length);
        exchange.getResponseBody().write(respBytes);
        exchange.getResponseBody().close();
    }

    public static String getRomanNum(Integer numb) {

        romano = new StringBuilder();

        for (int i = 0; i < VALORES.length; i++) {
            while (numb >= VALORES[i]) {
                romano.append(SIMBOLOS[i]);
                numb -= VALORES[i];
            }
        }
        return romano.toString();
    }
}
