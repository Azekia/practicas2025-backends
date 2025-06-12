package com.example.backendapp.model.cuentaLetrasQuijote;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.*;

public class Letras implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        InputStream is = exchange.getRequestBody();
        byte[] bytes = is.readAllBytes();

        String bodyURL = new String(bytes).trim();
        char letter = bodyURL.charAt(bodyURL.length() - 1);
        int count = count(letter, "backends/quijote.txt");

        String response = String.format( "La letra %s aparece %s veces en el Quijote", letter, count);
        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
        exchange.sendResponseHeaders(200, response.getBytes().length);

        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    private int count(char character, String file) throws FileNotFoundException  {
        int count = 0;
        FileReader fr = null;
        BufferedReader br = null;

        try {
            fr = new FileReader(file);
            br = new BufferedReader(fr);

            String line;

            while ((line = br.readLine()) != null) {
                for(int i = 0; i < line.length(); i++) {
                    if(line.charAt(i) == character) {
                        count++;
                    }
                }
            }

        } catch (IOException e) {
            System.out.println("Error al leer el archivo: " + e.getMessage());
        } finally {
            try {
                if (br != null) {
                    br.close();
                }
                if (fr != null) {
                    fr.close();
                }
            } catch (IOException e) {
                System.out.println("Error al cerrar el archivo: " + e.getMessage());
            }
        }

        return count;
    }
}
