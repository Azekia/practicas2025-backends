// npM test en la terminal

const assert = require('assert');
const { intToRoman } = require('../intToRoman');
const { hi } = require ("../intToRoman")

describe('intToRoman()', () => {
  // Pruebas individuales conocidas
  describe('intToRoman', () => {
    it('convierte 1 en I', () => {
      assert.strictEqual(intToRoman(1), ('I'));
    });
    it('convierte a en No es un caracter válido', () => {
      assert.strictEqual(intToRoman("a"), ('No es un caracter válido'));
    });
    it('convierte 2 en II', () => {
      assert.strictEqual(intToRoman(2), ('II'));
    });
  
    it('convierte 3 en III', () => {
      assert.strictEqual(intToRoman(3), ('III'));
    });
  
    it('convierte 4 en IV', () => {
      assert.strictEqual(intToRoman(4), ('IV'));
    });
  
    it('convierte 5 en V', () => {
      assert.strictEqual(intToRoman(5), ('V'));
    });
  
    it('convierte 6 en VI', () => {
      assert.strictEqual(intToRoman(6), ('VI'));
    });
  
    it('convierte 7 en VII', () => {
      assert.strictEqual(intToRoman(7), ('VII'));
    });
  
    it('convierte 8 en VIII', () => {
      assert.strictEqual(intToRoman(8), ('VIII'));
    });
  
    it('convierte 9 en IX', () => {
      assert.strictEqual(intToRoman(9), ('IX'));
    });
  
    it('convierte 10 en X', () => {
      assert.strictEqual(intToRoman(10), ('X'));
    });
  
    it('convierte 11 en XI', () => {
      assert.strictEqual(intToRoman(11), ('XI'));
    });
  
    it('convierte 12 en XII', () => {
      assert.strictEqual(intToRoman(12), ('XII'));
    });
  
    it('convierte 13 en XIII', () => {
      assert.strictEqual(intToRoman(13), ('XIII'));
    });
  
    it('convierte 14 en XIV', () => {
      assert.strictEqual(intToRoman(14), ('XIV'));
    });
  
    it('convierte 15 en XV', () => {
      assert.strictEqual(intToRoman(15), ('XV'));
    });
  
    it('convierte 16 en XVI', () => {
      assert.strictEqual(intToRoman(16), ('XVI'));
    });
  
    it('convierte 17 en XVII', () => {
      assert.strictEqual(intToRoman(17), ('XVII'));
    });
  
    it('convierte 18 en XVIII', () => {
      assert.strictEqual(intToRoman(18), ('XVIII'));
    });
  
    it('convierte 19 en XIX', () => {
      assert.strictEqual(intToRoman(19), ('XIX'));
    });
  
    it('convierte 20 en XX', () => {
      assert.strictEqual(intToRoman(20), ('XX'));
    });
  
    it('convierte 21 en XXI', () => {
      assert.strictEqual(intToRoman(21), ('XXI'));
    });
  
    it('convierte 22 en XXII', () => {
      assert.strictEqual(intToRoman(22), ('XXII'));
    });
  
    it('convierte 23 en XXIII', () => {
      assert.strictEqual(intToRoman(23), ('XXIII'));
    });
  
    it('convierte 24 en XXIV', () => {
      assert.strictEqual(intToRoman(24), ('XXIV'));
    });
  
    it('convierte 25 en XXV', () => {
      assert.strictEqual(intToRoman(25), ('XXV'));
    });
  
    it('convierte 26 en XXVI', () => {
      assert.strictEqual(intToRoman(26), ('XXVI'));
    });
  
    it('convierte 27 en XXVII', () => {
      assert.strictEqual(intToRoman(27), ('XXVII'));
    });
  
    it('convierte 28 en XXVIII', () => {
      assert.strictEqual(intToRoman(28), ('XXVIII'));
    });
  
    it('convierte 29 en XXIX', () => {
      assert.strictEqual(intToRoman(29), ('XXIX'));
    });
  
    it('convierte 30 en XXX', () => {
      assert.strictEqual(intToRoman(30), ('XXX'));
    });
  
    it('convierte 31 en XXXI', () => {
      assert.strictEqual(intToRoman(31), ('XXXI'));
    });
  
    it('convierte 32 en XXXII', () => {
      assert.strictEqual(intToRoman(32), ('XXXII'));
    });
  
    it('convierte 33 en XXXIII', () => {
      assert.strictEqual(intToRoman(33), ('XXXIII'));
    });
  
    it('convierte 34 en XXXIV', () => {
      assert.strictEqual(intToRoman(34), ('XXXIV'));
    });
  
    it('convierte 35 en XXXV', () => {
      assert.strictEqual(intToRoman(35), ('XXXV'));
    });
  
    it('convierte 36 en XXXVI', () => {
      assert.strictEqual(intToRoman(36), ('XXXVI'));
    });
  
    it('convierte 37 en XXXVII', () => {
      assert.strictEqual(intToRoman(37), ('XXXVII'));
    });
  
    it('convierte 38 en XXXVIII', () => {
      assert.strictEqual(intToRoman(38), ('XXXVIII'));
    });
  
    it('convierte 39 en XXXIX', () => {
      assert.strictEqual(intToRoman(39), ('XXXIX'));
    });
  
    it('convierte 40 en XL', () => {
      assert.strictEqual(intToRoman(40), ('XL'));
    });
  
    it('convierte 41 en XLI', () => {
      assert.strictEqual(intToRoman(41), ('XLI'));
    });
  
    it('convierte 42 en XLII', () => {
      assert.strictEqual(intToRoman(42), ('XLII'));
    });
  
    it('convierte 43 en XLIII', () => {
      assert.strictEqual(intToRoman(43), ('XLIII'));
    });
  
    it('convierte 44 en XLIV', () => {
      assert.strictEqual(intToRoman(44), ('XLIV'));
    });
  
    it('convierte 45 en XLV', () => {
      assert.strictEqual(intToRoman(45), ('XLV'));
    });
  
    it('convierte 46 en XLVI', () => {
      assert.strictEqual(intToRoman(46), ('XLVI'));
    });
  
    it('convierte 47 en XLVII', () => {
      assert.strictEqual(intToRoman(47), ('XLVII'));
    });
  
    it('convierte 48 en XLVIII', () => {
      assert.strictEqual(intToRoman(48), ('XLVIII'));
    });
  
    it('convierte 49 en XLIX', () => {
      assert.strictEqual(intToRoman(49), ('XLIX'));
    });
  
    it('convierte 50 en L', () => {
      assert.strictEqual(intToRoman(50), ('L'));
    });
  
    it('convierte 51 en LI', () => {
      assert.strictEqual(intToRoman(51), ('LI'));
    });
  
    it('convierte 52 en LII', () => {
      assert.strictEqual(intToRoman(52), ('LII'));
    });
  
    it('convierte 53 en LIII', () => {
      assert.strictEqual(intToRoman(53), ('LIII'));
    });
  
    it('convierte 54 en LIV', () => {
      assert.strictEqual(intToRoman(54), ('LIV'));
    });
  
    it('convierte 55 en LV', () => {
      assert.strictEqual(intToRoman(55), ('LV'));
    });
  
    it('convierte 56 en LVI', () => {
      assert.strictEqual(intToRoman(56), ('LVI'));
    });
  
    it('convierte 57 en LVII', () => {
      assert.strictEqual(intToRoman(57), ('LVII'));
    });
  
    it('convierte 58 en LVIII', () => {
      assert.strictEqual(intToRoman(58), ('LVIII'));
    });
  
    it('convierte 59 en LIX', () => {
      assert.strictEqual(intToRoman(59), ('LIX'));
    });
  
    it('convierte 60 en LX', () => {
      assert.strictEqual(intToRoman(60), ('LX'));
    });
  
    it('convierte 61 en LXI', () => {
      assert.strictEqual(intToRoman(61), ('LXI'));
    });
  
    it('convierte 62 en LXII', () => {
      assert.strictEqual(intToRoman(62), ('LXII'));
    });
  
    it('convierte 63 en LXIII', () => {
      assert.strictEqual(intToRoman(63), ('LXIII'));
    });
  
    it('convierte 64 en LXIV', () => {
      assert.strictEqual(intToRoman(64), ('LXIV'));
    });
  
    it('convierte 65 en LXV', () => {
      assert.strictEqual(intToRoman(65), ('LXV'));
    });
  
    it('convierte 66 en LXVI', () => {
      assert.strictEqual(intToRoman(66), ('LXVI'));
    });
  
    it('convierte 67 en LXVII', () => {
      assert.strictEqual(intToRoman(67), ('LXVII'));
    });
  
    it('convierte 68 en LXVIII', () => {
      assert.strictEqual(intToRoman(68), ('LXVIII'));
    });
  
    it('convierte 69 en LXIX', () => {
      assert.strictEqual(intToRoman(69), ('LXIX'));
    });
  
    it('convierte 70 en LXX', () => {
      assert.strictEqual(intToRoman(70), ('LXX'));
    });
  
    it('convierte 71 en LXXI', () => {
      assert.strictEqual(intToRoman(71), ('LXXI'));
    });
  
    it('convierte 72 en LXXII', () => {
      assert.strictEqual(intToRoman(72), ('LXXII'));
    });
  
    it('convierte 73 en LXXIII', () => {
      assert.strictEqual(intToRoman(73), ('LXXIII'));
    });
  
    it('convierte 74 en LXXIV', () => {
      assert.strictEqual(intToRoman(74), ('LXXIV'));
    });
  
    it('convierte 75 en LXXV', () => {
      assert.strictEqual(intToRoman(75), ('LXXV'));
    });
  
    it('convierte 76 en LXXVI', () => {
      assert.strictEqual(intToRoman(76), ('LXXVI'));
    });
  
    it('convierte 77 en LXXVII', () => {
      assert.strictEqual(intToRoman(77), ('LXXVII'));
    });
  
    it('convierte 78 en LXXVIII', () => {
      assert.strictEqual(intToRoman(78), ('LXXVIII'));
    });
  
    it('convierte 79 en LXXIX', () => {
      assert.strictEqual(intToRoman(79), ('LXXIX'));
    });
  
    it('convierte 80 en LXXX', () => {
      assert.strictEqual(intToRoman(80), ('LXXX'));
    });
  
    it('convierte 81 en LXXXI', () => {
      assert.strictEqual(intToRoman(81), ('LXXXI'));
    });
  
    it('convierte 82 en LXXXII', () => {
      assert.strictEqual(intToRoman(82), ('LXXXII'));
    });
  
    it('convierte 83 en LXXXIII', () => {
      assert.strictEqual(intToRoman(83), ('LXXXIII'));
    });
  
    it('convierte 84 en LXXXIV', () => {
      assert.strictEqual(intToRoman(84), ('LXXXIV'));
    });
  
    it('convierte 85 en LXXXV', () => {
      assert.strictEqual(intToRoman(85), ('LXXXV'));
    });
  
    it('convierte 86 en LXXXVI', () => {
      assert.strictEqual(intToRoman(86), ('LXXXVI'));
    });
  
    it('convierte 87 en LXXXVII', () => {
      assert.strictEqual(intToRoman(87), ('LXXXVII'));
    });
  
    it('convierte 88 en LXXXVIII', () => {
      assert.strictEqual(intToRoman(88), ('LXXXVIII'));
    });
  
    it('convierte 89 en LXXXIX', () => {
      assert.strictEqual(intToRoman(89), ('LXXXIX'));
    });
  
    it('convierte 90 en XC', () => {
      assert.strictEqual(intToRoman(90), ('XC'));
    });
  
    it('convierte 91 en XCI', () => {
      assert.strictEqual(intToRoman(91), ('XCI'));
    });
  
    it('convierte 92 en XCII', () => {
      assert.strictEqual(intToRoman(92), ('XCII'));
    });
  
    it('convierte 93 en XCIII', () => {
      assert.strictEqual(intToRoman(93), ('XCIII'));
    });
  
    it('convierte 94 en XCIV', () => {
      assert.strictEqual(intToRoman(94), ('XCIV'));
    });
  
    it('convierte 95 en XCV', () => {
      assert.strictEqual(intToRoman(95), ('XCV'));
    });
  
    it('convierte 96 en XCVI', () => {
      assert.strictEqual(intToRoman(96), ('XCVI'));
    });
  
    it('convierte 97 en XCVII', () => {
      assert.strictEqual(intToRoman(97), ('XCVII'));
    });
  
    it('convierte 98 en XCVIII', () => {
      assert.strictEqual(intToRoman(98), ('XCVIII'));
    });
  
    it('convierte 99 en XCIX', () => {
      assert.strictEqual(intToRoman(99), ('XCIX'));
    });
  
    it('convierte 100 en C', () => {
      assert.strictEqual(intToRoman(100), ('C'));
    });
  

  it('convierte 1000 en M', () => {
    assert.strictEqual(intToRoman(1000), ('M'));
  });

  it('convierte 1002 en MII', () => {
    assert.strictEqual(intToRoman(1002), ('MII'));
  });

  it('convierte 1005 en MV', () => {
    assert.strictEqual(intToRoman(1005), ('MV'));
  });

  it('convierte 1010 en MX', () => {
    assert.strictEqual(intToRoman(1010), ('MX'));
  });

  it('convierte 1017 en MXVII', () => {
    assert.strictEqual(intToRoman(1017), ('MXVII'));
  });

  it('convierte 1020 en MXX', () => {
    assert.strictEqual(intToRoman(1020), ('MXX'));
  });

  it('convierte 1023 en MXXIII', () => {
    assert.strictEqual(intToRoman(1023), ('MXXIII'));
  });

  it('convierte 1028 en MXXVIII', () => {
    assert.strictEqual(intToRoman(1028), ('MXXVIII'));
  });

  it('convierte 1033 en MXXXIII', () => {
    assert.strictEqual(intToRoman(1033), ('MXXXIII'));
  });

  it('convierte 1038 en MXXXVIII', () => {
    assert.strictEqual(intToRoman(1038), ('MXXXVIII'));
  });

  it('convierte 1045 en MXLV', () => {
    assert.strictEqual(intToRoman(1045), ('MXLV'));
  });

  it('convierte 1050 en ML', () => {
    assert.strictEqual(intToRoman(1050), ('ML'));
  });

  it('convierte 1055 en MLV', () => {
    assert.strictEqual(intToRoman(1055), ('MLV'));
  });

  it('convierte 1062 en MLXII', () => {
    assert.strictEqual(intToRoman(1062), ('MLXII'));
  });

  it('convierte 1067 en MLXVII', () => {
    assert.strictEqual(intToRoman(1067), ('MLXVII'));
  });

  it('convierte 1074 en MLXXIV', () => {
    assert.strictEqual(intToRoman(1074), ('MLXXIV'));
  });

  it('convierte 1081 en MLXXXI', () => {
    assert.strictEqual(intToRoman(1081), ('MLXXXI'));
  });

  it('convierte 1088 en MLXXXVIII', () => {
    assert.strictEqual(intToRoman(1088), ('MLXXXVIII'));
  });

  it('convierte 1095 en MXCV', () => {
    assert.strictEqual(intToRoman(1095), ('MXCV'));
  });

  it('convierte 1102 en MCII', () => {
    assert.strictEqual(intToRoman(1102), ('MCII'));
  });

  it('convierte 1109 en MCIX', () => {
    assert.strictEqual(intToRoman(1109), ('MCIX'));
  });

  it('convierte 1116 en MCXVI', () => {
    assert.strictEqual(intToRoman(1116), ('MCXVI'));
  });

  it('convierte 1123 en MCXXIII', () => {
    assert.strictEqual(intToRoman(1123), ('MCXXIII'));
  });

  it('convierte 1130 en MCXXX', () => {
    assert.strictEqual(intToRoman(1130), ('MCXXX'));
  });

  it('convierte 1137 en MCXXXVII', () => {
    assert.strictEqual(intToRoman(1137), ('MCXXXVII'));
  });

  it('convierte 1144 en MCXLIV', () => {
    assert.strictEqual(intToRoman(1144), ('MCXLIV'));
  });

  it('convierte 1151 en MCLI', () => {
    assert.strictEqual(intToRoman(1151), ('MCLI'));
  });

  it('convierte 1158 en MCLVIII', () => {
    assert.strictEqual(intToRoman(1158), ('MCLVIII'));
  });

  it('convierte 1165 en MCLXV', () => {
    assert.strictEqual(intToRoman(1165), ('MCLXV'));
  });

  it('convierte 1172 en MCLXXII', () => {
    assert.strictEqual(intToRoman(1172), ('MCLXXII'));
  });

  it('convierte 1179 en MCLXXIX', () => {
    assert.strictEqual(intToRoman(1179), ('MCLXXIX'));
  });

  it('convierte 1186 en MCLXXXVI', () => {
    assert.strictEqual(intToRoman(1186), ('MCLXXXVI'));
  });

  it('convierte 1193 en MCXCIII', () => {
    assert.strictEqual(intToRoman(1193), ('MCXCIII'));
  });

  it('convierte 1200 en MCC', () => {
    assert.strictEqual(intToRoman(1200), ('MCC'));
  });

  it('convierte 1203 en MCCIII', () => {
    assert.strictEqual(intToRoman(1203), ('MCCIII'));
  });

  it('convierte 1208 en MCCVIII', () => {
    assert.strictEqual(intToRoman(1208), ('MCCVIII'));
  });

  it('convierte 1213 en MCCXIII', () => {
    assert.strictEqual(intToRoman(1213), ('MCCXIII'));
  });

  it('convierte 1218 en MCCXVIII', () => {
    assert.strictEqual(intToRoman(1218), ('MCCXVIII'));
  });

  it('convierte 1223 en MCCXXIII', () => {
    assert.strictEqual(intToRoman(1223), ('MCCXXIII'));
  });

  it('convierte 1228 en MCCXXVIII', () => {
    assert.strictEqual(intToRoman(1228), ('MCCXXVIII'));
  });

  it('convierte 1235 en MCCXXXV', () => {
    assert.strictEqual(intToRoman(1235), ('MCCXXXV'));
  });

  it('convierte 1240 en MCCXL', () => {
    assert.strictEqual(intToRoman(1240), ('MCCXL'));
  });

  it('convierte 1245 en MCCXLV', () => {
    assert.strictEqual(intToRoman(1245), ('MCCXLV'));
  });

  it('convierte 1250 en MCCL', () => {
    assert.strictEqual(intToRoman(1250), ('MCCL'));
  });

  it('convierte 1255 en MCCLV', () => {
    assert.strictEqual(intToRoman(1255), ('MCCLV'));
  });

  it('convierte 1260 en MCCLX', () => {
    assert.strictEqual(intToRoman(1260), ('MCCLX'));
  });

  it('convierte 1267 en MCCLXVII', () => {
    assert.strictEqual(intToRoman(1267), ('MCCLXVII'));
  });

  it('convierte 1274 en MCCLXXIV', () => {
    assert.strictEqual(intToRoman(1274), ('MCCLXXIV'));
  });

  it('convierte 1281 en MCCLXXXI', () => {
    assert.strictEqual(intToRoman(1281), ('MCCLXXXI'));
  });

  it('convierte 1288 en MCCLXXXVIII', () => {
    assert.strictEqual(intToRoman(1288), ('MCCLXXXVIII'));
  });

  it('convierte 1295 en MCCXCV', () => {
    assert.strictEqual(intToRoman(1295), ('MCCXCV'));
  });

  it('convierte 1302 en MCCCII', () => {
    assert.strictEqual(intToRoman(1302), ('MCCCII'));
  });

  it('convierte 1309 en MCCCIX', () => {
    assert.strictEqual(intToRoman(1309), ('MCCCIX'));
  });

  it('convierte 1316 en MCCCXVI', () => {
    assert.strictEqual(intToRoman(1316), ('MCCCXVI'));
  });

  it('convierte 1323 en MCCCXXIII', () => {
    assert.strictEqual(intToRoman(1323), ('MCCCXXIII'));
  });

  it('convierte 1330 en MCCCXXX', () => {
    assert.strictEqual(intToRoman(1330), ('MCCCXXX'));
  });

  it('convierte 1337 en MCCCXXXVII', () => {
    assert.strictEqual(intToRoman(1337), ('MCCCXXXVII'));
  });

  it('convierte 1344 en MCCCXLIV', () => {
    assert.strictEqual(intToRoman(1344), ('MCCCXLIV'));
  });

  it('convierte 1351 en MCCCLI', () => {
    assert.strictEqual(intToRoman(1351), ('MCCCLI'));
  });

  it('convierte 1358 in MCCCLVIII', () => {
    assert.strictEqual(intToRoman(1358), ('MCCCLVIII'));
  });

  it('convierte 1365 en MCCCLXV', () => {
    assert.strictEqual(intToRoman(1365), ('MCCCLXV'));
  });

  it('convierte 1372 en MCCCLXXII', () => {
    assert.strictEqual(intToRoman(1372), ('MCCCLXXII'));
  });

  it('convierte 1379 en MCCCLXXIX', () => {
    assert.strictEqual(intToRoman(1379), ('MCCCLXXIX'));
  });

  it('convierte 1386 en MCCCLXXXVI', () => {
    assert.strictEqual(intToRoman(1386), ('MCCCLXXXVI'));
  });

  it('convierte 1393 en MCCCXCIII', () => {
    assert.strictEqual(intToRoman(1393), ('MCCCXCIII'));
  });

  it('convierte 1400 en MCD', () => {
    assert.strictEqual(intToRoman(1400), ('MCD'));
  });

  it('convierte 1403 en MCDIII', () => {
    assert.strictEqual(intToRoman(1403), ('MCDIII'));
  });

  it('convierte 1408 en MCDVIII', () => {
    assert.strictEqual(intToRoman(1408), ('MCDVIII'));
  });

  it('convierte 1413 en MCDXIII', () => {
    assert.strictEqual(intToRoman(1413), ('MCDXIII'));
  });

  it('convierte 1420 en MCDXX', () => {
    assert.strictEqual(intToRoman(1420), ('MCDXX'));
  });

  it('convierte 1427 en MCDXXVII', () => {
    assert.strictEqual(intToRoman(1427), ('MCDXXVII'));
  });

  it('convierte 1432 en MCDXXXII', () => {
    assert.strictEqual(intToRoman(1432), ('MCDXXXII'));
  });

  it('convierte 1439 en MCDXXXIX', () => {
    assert.strictEqual(intToRoman(1439), ('MCDXXXIX'));
  });

  it('convierte 1444 en MCDXLIV', () => {
    assert.strictEqual(intToRoman(1444), ('MCDXLIV'));
  });

  it('convierte 1451 en MCDLI', () => {
    assert.strictEqual(intToRoman(1451), ('MCDLI'));
  });

  it('convierte 1458 en MCDLVIII', () => {
    assert.strictEqual(intToRoman(1458), ('MCDLVIII'));
  });

  it('convierte 1465 en MCDLXV', () => {
    assert.strictEqual(intToRoman(1465), ('MCDLXV'));
  });

  it('convierte 1472 en MCDLXXII', () => {
    assert.strictEqual(intToRoman(1472), ('MCDLXXII'));
  });

  it('convierte 1479 en MCDLXXIX', () => {
    assert.strictEqual(intToRoman(1479), ('MCDLXXIX'));
  });

  it('convierte 1486 en MCDLXXXVI', () => {
    assert.strictEqual(intToRoman(1486), ('MCDLXXXVI'));
  });

  it('convierte 1493 en MCDXCIII', () => {
    assert.strictEqual(intToRoman(1493), ('MCDXCIII'));
  });

  it('convierte 1500 en MD', () => {
    assert.strictEqual(intToRoman(1500), ('MD'));
  });

  it('convierte 1607 en MDCVII', () => {
    assert.strictEqual(intToRoman(1607), ('MDCVII'));
  });

  it('convierte 1714 en MDCCXIV', () => {
    assert.strictEqual(intToRoman(1714), ('MDCCXIV'));
  });

  it('convierte 1821 en MDCCCXXI', () => {
    assert.strictEqual(intToRoman(1821), ('MDCCCXXI'));
  });

  it('convierte 1928 en MCMXXVIII', () => {
    assert.strictEqual(intToRoman(1928), ('MCMXXVIII'));
  });

  it('convierte 2035 en MMXXXV', () => {
    assert.strictEqual(intToRoman(2035), ('MMXXXV'));
  });

  it('convierte 2142 en MMCXLII', () => {
    assert.strictEqual(intToRoman(2142), ('MMCXLII'));
  });

  it('convierte 2249 en MMCCXLIX', () => {
    assert.strictEqual(intToRoman(2249), ('MMCCXLIX'));
  });

  it('convierte 2356 en MMCCCLVI', () => {
    assert.strictEqual(intToRoman(2356), ('MMCCCLVI'));
  });

  it('convierte 2463 en MMCDLXIII', () => {
    assert.strictEqual(intToRoman(2463), ('MMCDLXIII'));
  });

  it('convierte 2570 en MMDLXX', () => {
    assert.strictEqual(intToRoman(2570), ('MMDLXX'));
  });

  it('convierte 2677 en MMDCLXXVII', () => {
    assert.strictEqual(intToRoman(2677), ('MMDCLXXVII'));
  });

  it('convierte 2784 en MMDCCLXXXIV', () => {
    assert.strictEqual(intToRoman(2784), ('MMDCCLXXXIV'));
  });

  it('convierte 2891 en MMDCCCXCI', () => {
    assert.strictEqual(intToRoman(2891), ('MMDCCCXCI'));
  });

  it('convierte 2998 en MMCMXCVIII', () => {
    assert.strictEqual(intToRoman(2998), ('MMCMXCVIII'));
  });

  it('convierte 3105 en MMMCV', () => {
    assert.strictEqual(intToRoman(3105), ('MMMCV'));
  });

  it('convierte 3212 en MMMCCXII', () => {
    assert.strictEqual(intToRoman(3212), ('MMMCCXII'));
  });

  it('convierte 3319 en MMMCCCXIX', () => {
    assert.strictEqual(intToRoman(3319), ('MMMCCCXIX'));
  });

  it('convierte 3426 en MMMCDXXVI', () => {
    assert.strictEqual(intToRoman(3426), ('MMMCDXXVI'));
  });

  it('convierte 3533 en MMMDXXXIII', () => {
    assert.strictEqual(intToRoman(3533), ('MMMDXXXIII'));
  });

  it('convierte 3640 en MMMDCXL', () => {
    assert.strictEqual(intToRoman(3640), ('MMMDCXL'));
  });

  it('convierte 3747 en MMMDCCXLVII', () => {
    assert.strictEqual(intToRoman(3747), ('MMMDCCXLVII'));
  });

  it('convierte 3854 en MMMDCCCLIV', () => {
    assert.strictEqual(intToRoman(3854), ('MMMDCCCLIV'));
  });

  it('convierte 3961 en MMMCMLXI', () => {
    assert.strictEqual(intToRoman(3961), ('MMMCMLXI'));
  });

  it('convierte 3999 en MMMCMXCIX', () => {
    assert.strictEqual(intToRoman(3999), ('MMMCMXCIX'));
  });

  it('devuelve mensaje de error para 4000', () => {
    assert.strictEqual(intToRoman(4000), ('Número fuera de rango (1-3999)'));
  });

  it('devuelve mensaje de error para 4007', () => {
    assert.strictEqual(intToRoman(4007), ('Número fuera de rango (1-3999)'));
  });

  it('devuelve mensaje de error para 4014', () => {
    assert.strictEqual(intToRoman(4014), ('Número fuera de rango (1-3999)'));
  });

  it('devuelve mensaje de error para 4020', () => {
    assert.strictEqual(intToRoman(4020), ('Número fuera de rango (1-3999)'));
  });

  });
});
