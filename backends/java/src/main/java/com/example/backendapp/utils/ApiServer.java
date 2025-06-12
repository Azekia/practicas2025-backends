package com.example.backendapp.utils;

import com.example.backendapp.model.cuentaLetrasQuijote.Letras;
import com.example.backendapp.model.sayHi.SayHi;
import com.example.backendapp.model.toRoman.TraductorNumericoRomano;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;

public class ApiServer {

    private Integer port = 3000;
    private HttpServer server;

    public ApiServer() {
        serverAddValue();
        configureServer();
    }

    public void configureServer() {
        server.createContext("/api/hi", new SayHi());
        server.createContext("/api/toRoman", new TraductorNumericoRomano());
        server.createContext("/api/cuentaLetrasQuijote", new Letras());
        server.setExecutor(null);
        server.start();
    }

    private void serverAddValue() {
        try {
            server = HttpServer.create(new InetSocketAddress(port), 0);
        } catch (IOException ignored) {
        }
    }
}
