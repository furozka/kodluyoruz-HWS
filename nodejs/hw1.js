/*
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
*/
const yaricap = process.argv[2]
const areaOfCircle = (r)=>{
    return (console.log(`Yaricapi ${r} olan dairening alani: ${(Math.PI*Math.pow(r,2)).toFixed(2)} `))
}
areaOfCircle(yaricap);