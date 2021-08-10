var hak = 5 ;
var tahmin, sayac=0;

var sayi = Math.floor((Math.random()*10)+1)

console.log(sayi);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt("Bir sayı giriniz"));

    if(sayi == tahmin){

        console.log(`Tebrikler ${sayac} defada Bildiniz.`);
        console.log(`puan : ${100- (20)*(sayac-1)}`)
        break


    }
    else if ( sayi > tahmin){

        console.log("Yukarı")

    }else {

        console.log("Aşağı");

    }

    if(hak==0){

        console.log("Hakkınız Bitmiştir.")

    }

}



