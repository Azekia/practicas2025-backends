<?php

class RomanConverter
{
    public static function intToRoman(int $num): string
    {
        if (!is_int($num)) {
            throw new \InvalidArgumentException("La entrada debe ser un número entero.");
        }

        if ($num < 1 || $num > 3999) {
            throw new \OutOfRangeException("El numero debe ser un entero entre 1 y 3999");
        }

        $valoresRomanos = [
            1000 => "M",
            900  => "CM",
            500  => "D",
            400  => "CD",
            100  => "C",
            90   => "XC",
            50   => "L",
            40   => "XL",
            10   => "X",
            9    => "IX",
            5    => "V",
            4    => "IV",
            1    => "I",
        ];

        $romano = "";

        foreach ($valoresRomanos as $valor => $letra) {
            while ($num >= $valor) {
                $romano .= $letra;
                $num -= $valor;
            }
        }

        return $romano;
    }
}
