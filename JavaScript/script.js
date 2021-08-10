function Yashesapla(dogumyili){

    return 2021- dogumyili;
}

function emeklilikhesapla(name,dogmyili){

    yas = Yashesapla(dogmyili)
    
    emeklilik = 65 - yas

    if(emeklilik>0){

        console.log(`Merhaba ${name}. Emekli olmanıza ${emeklilik} yıl kaldı`)
    }else{
        console.log("Zaten emekli olmuşsunuz hacı")
    }
}

emeklilikhesapla("Ali",1975)




