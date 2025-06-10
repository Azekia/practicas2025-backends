package com.example.backendapp.model.sayHi;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import org.json.JSONObject;

import java.io.IOException;

public class SayHi implements HttpHandler {


    @Override
    public void handle(HttpExchange exchange) throws IOException {
        if (!"GET".equals(exchange.getRequestMethod())) {
            exchange.sendResponseHeaders(405, -1);
            return;
        }

        JSONObject responseJson = new JSONObject();

        responseJson.put("", "Hi!");
        byte[] respByte = responseJson.toString().getBytes();
        exchange.getResponseHeaders().set("Content-type", "application/json");
        exchange.sendResponseHeaders(200, respByte.length);
        exchange.getResponseBody().write(respByte);
        exchange.getResponseBody().close();

    }
}
