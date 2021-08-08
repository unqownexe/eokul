function Yazdir() {
    frm = document.all('rapor_submit_form');
    newwindow = window.open('about:blank', 'Raporlar', 'toolbar=0,resizable=1');
    frm.target = 'Raporlar';
    frm.submit();
    if (window.focus) {
        newwindow.focus()
    };
    return false;
}


function IsNumeric(sText) {
    var ValidChars = "0123456789.,";
    var IsNumber = true;
    var Char;
    for (i = 0; i < sText.length && IsNumber == true; i++) {
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1) {
            IsNumber = false;
        }
    }
    return IsNumber;
}
function isDate(dateStr) {
    var datePat = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var matchArray = dateStr.match(datePat);
    if (matchArray == null) {
        return false;
    }
    month = matchArray[3];
    day = matchArray[1];
    year = matchArray[5];
    if (month < 1 || month > 12) {
        return false;
    }
    if (day < 1 || day > 31) {
        return false;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        return false;
    }
    if (month == 2) {
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !isleap)) {
            return false;
        }
    }
    return true;
}
function isEmail(string) {
    if (!string) return false;
    var iChars = "*|,\":<>[]{}`\';()&$#%";
    for (var i = 0; i < string.length; i++) {
        if (iChars.indexOf(string.charAt(i)) != -1)
            return false;
    }
    return true;
}
function isIP(ip) {
    var parts = ip.split(".");
    if (parts.length != 4) return false;
    if (Number(parts[0]) == 0) {
        return false;
    }
    var len = parts.length;
    var stri;
    var numi;
    for (var i = 0; i < len; i++) {
        stri = parts[i];
        numi = parseInt(stri);
        if (numi > 255 || stri != numi.toString()) {
            return false;
        }
    }
    return true;
}
function Left(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else
        return String(str).substring(0, n);
}
function Right(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}
function Mid(str, start, len) {
    if (start < 0 || len < 0) return "";
    var iEnd, iLen = String(str).length;
    if (start + len > iLen)
        iEnd = iLen;
    else
        iEnd = start + len;
    return String(str).substring(start, iEnd);
}
function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g, "");
}
function IntStr(strSearch, charSearchFor) {
    for (i = 0; i < strSearch.length; i++) {
        if (charSearchFor == Mid(strSearch, i, 1)) {
            return i;
        }
    }
    return -1;
}
function NumAlan(AlanDeger, AlanAdi, MaxDeger, MinDeger, BosKabul) {
    var UyariMesaji = "";
    if (trim(AlanDeger) != AlanDeger) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanının başında veya sonunda boşluk(lar) bulunmaktadır.\n";
        return UyariMesaji;
    }
    if (IntStr(AlanDeger, '+') > -1 || IntStr(AlanDeger, '-') > -1 || IntStr(AlanDeger, "'") > -1) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Geçersiz Karakterler İçeriyor.\n";
        return UyariMesaji;
    }
    if (AlanDeger == "" && !BosKabul) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Boş Geçilemez.\n";
        return UyariMesaji;
    }
    if (!BosKabul || AlanDeger != "") {
        if (IsNumeric(AlanDeger)) {
            if (AlanDeger != parseInt(AlanDeger) || IntStr(AlanDeger, '.') > -1 || IntStr(AlanDeger, ',') > -1) {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanındaki Değer Tamsayı Olmalıdır.\n";
                return UyariMesaji;
            }
            if (parseInt(AlanDeger) > parseInt(MaxDeger) && MaxDeger != -1) {
                UyariMesaji = UyariMesaji + AlanAdi + "  Alanındaki Değer " + MaxDeger + " Değerinden Büyük Olamaz.\n";
                return UyariMesaji;
            }
            if (parseInt(AlanDeger) < parseInt(MinDeger) && MinDeger != -1) {
                UyariMesaji = UyariMesaji + AlanAdi + "  Alanındaki Değer " + MinDeger + " Değerinden Küçük Olamaz.\n";
                return UyariMesaji;
            }
        }
        else {
            UyariMesaji = UyariMesaji + AlanAdi + "  Alanına Nümerik Bir Değer Girilmesi Gereklidir.\n";
            return UyariMesaji;
        }
    }
    return UyariMesaji;
}
function NumAlanHaneKontrol(AlanDeger, AlanAdi, MaxDeger, MinDeger, HaneSayisi, BosKabul) {
    var UyariMesaji = "";
    var Anahtar, Alert, Durum = true;
    if (trim(AlanDeger) != AlanDeger) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanının başında veya sonunda boşluk(lar) bulunmaktadır.\n";
        return UyariMesaji;
    }
    if (IntStr(AlanDeger, '+') > -1 || IntStr(AlanDeger, '-') > -1 || IntStr(AlanDeger, "'") > -1) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Geçersiz Karakterler İçeriyor.\n";
        return UyariMesaji;
    }
    if (AlanDeger == "" && !BosKabul) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Boş Geçilemez.\n";
        return UyariMesaji;
    }
    if (!BosKabul || AlanDeger != "") {

        if (IsNumeric(AlanDeger)) {
            Alert = AlanDeger.replace(".", ",");
            for (i = 0; i < Alert.length; i++)
                Alert = Alert.replace(".", ",");
            for (i = 0; i < Alert.length; i++) {
                for (j = i + 1; j < Alert.length; j++) {
                    if (Mid(Alert, i, 1) == ",")
                        if (Mid(Alert, i, 1) == Mid(Alert, j, 1))
                        { Durum = false; break; }
                }
                if (!Durum) break;
            }
            if (!Durum) {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanına Nümerik Bir Değer Girilmesi Gereklidir.\n";
                return UyariMesaji;
            }
            if (parseInt(AlanDeger) > parseInt(MaxDeger) && MaxDeger != -1) {
                UyariMesaji = UyariMesaji + AlanAdi + "  Alanındaki Değer " + MaxDeger + " Değerinden Büyük Olamaz.\n";
                return UyariMesaji;
            }
            if (parseInt(AlanDeger) < parseInt(MinDeger) && MinDeger != -1) {
                UyariMesaji = UyariMesaji + AlanAdi + "  Alanındaki Değer " + MinDeger + " Değerinden Küçük Olamaz.\n";
                return UyariMesaji;
            }
            if (IntStr(AlanDeger, ',') > -1) {
                Anahtar = Alert.split(",");
                if (Anahtar[1].length > HaneSayisi) {
                    UyariMesaji = UyariMesaji + AlanAdi + " Alanındaki Değer " + (HaneSayisi) + " Haneli Bir Sayı Olmalıdır.\n";
                    return UyariMesaji;
                }
            }
        }
        else {
            UyariMesaji = UyariMesaji + AlanAdi + "  Alanına Nümerik Bir Değer Girilmesi Gereklidir.\n";
            return UyariMesaji;
        }
    }
    return UyariMesaji;
}
function TelefonAlan(AlanDeger, AlanAdi, BosKabul) {
    var UyariMesaji = "";
    if (trim(AlanDeger) != AlanDeger) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanının başında veya sonunda boşluk(lar) bulunmaktadır.\n";
        return UyariMesaji;
    }
    if (IntStr(AlanDeger, '+') > -1 || IntStr(AlanDeger, '-') > -1 || IntStr(AlanDeger, "'") > -1) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Geçersiz Karakterler İçeriyor.\n";
        return UyariMesaji;
    }
    if (AlanDeger == "" && !BosKabul) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Boş Geçilemez.\n";
        return UyariMesaji;
    }
    if (!BosKabul || AlanDeger != "") {
        if (IsNumeric(AlanDeger)) {
            if (AlanDeger != parseInt(AlanDeger) || IntStr(AlanDeger, '.') > -1 || IntStr(AlanDeger, ',') > -1) {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanına Alan Kodu + 7 Hane Rakam Girilmelidir.\n";
                return UyariMesaji;
            }
            if (parseInt(AlanDeger) > 9999999999) {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanına Alan Kodu + 7 Hane Rakam Girilmelidir.\n";
                return UyariMesaji;
            }
            if (parseInt(AlanDeger) < 0) {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanına Alan Kodu + 7 Hane Rakam Girilmelidir.\n";
                return UyariMesaji;
            }
            if (AlanDeger.length < 10) {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanına Alan Kodu + 7 Hane Rakam Girilmelidir.\n";
                return UyariMesaji;
            }
            if (Left(String(AlanDeger), 1) == "0") {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanına Alan Kodu + 7 Hane Rakam Girilmelidir.\n";
                UyariMesaji = UyariMesaji + " Alan Kodu yazılırken başına 0 eklenmemelidir.\n";
                return UyariMesaji;
            }
        }
        else {
            UyariMesaji = UyariMesaji + AlanAdi + "  Alanına Alan Kodu + 7 Hane Rakam Girilmelidir.\n";
            return UyariMesaji;
        }
    }
    return UyariMesaji;
}
function TarihAlan(AlanDeger, AlanAdi, BosKabul) {
    var UyariMesaji = "";
    var TarihAlan = AlanDeger;
    var MyIsDate = true;
    if (trim(AlanDeger) != AlanDeger) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanının başında veya sonunda boşluk(lar) bulunmaktadır.\n";
        return UyariMesaji;
    }
    AlanDeger = trim(AlanDeger)
    if (AlanDeger == "" && !BosKabul) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Boş Geçilemez.\n";
        return UyariMesaji;
    }
    if (!BosKabul || AlanDeger != "") {
        if (AlanDeger.length > 0) {
            if (isDate(AlanDeger)) {
                if (Mid(AlanDeger, 1, 1) == "/") AlanDeger = "0" + AlanDeger;
                if (Mid(AlanDeger, 4, 1) == "/") AlanDeger = Left(AlanDeger, 3) + "0" + Right(AlanDeger, AlanDeger.length - 3);
                if (AlanDeger.length != 10) {
                    UyariMesaji = UyariMesaji + AlanAdi + " Alanına (gg/aa/yyyy) Şeklinde Geçerli Bir Tarih Girilmesi Gereklidir.\n";
                    return UyariMesaji;
                }
                if (Mid(AlanDeger, 2, 1) != "/" || Mid(AlanDeger, 5, 1) != "/") MyIsDate = false;
                if (parseInt(Right(AlanDeger, 4)) < 1900) MyIsDate = false;
                if (parseInt(Right(AlanDeger, 4)) > 2050) MyIsDate = false;
            }
            else {
                MyIsDate = false;
            }
        }
        if (!MyIsDate) {
            UyariMesaji = UyariMesaji + AlanAdi + " Alanına (gg/aa/yyyy) Şeklinde Geçerli Bir Tarih Girilmesi Gereklidir.\n";
            return UyariMesaji;
        }
    }
    return UyariMesaji;
}

function TextAlan(AlanDeger, AlanAdi, Uzunluk, BosKabul) {
    var UyariMesaji = "";
    if (trim(AlanDeger) != AlanDeger) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanının başında veya sonunda boşluk(lar) bulunmaktadır.\n";
        return UyariMesaji;
    }
    if (AlanDeger == "" && !BosKabul) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Boş Geçilemez.\n";
        return UyariMesaji;
    }
    if (!BosKabul || AlanDeger != "") {
        if (IntStr(AlanDeger, '"') > -1 || IntStr(AlanDeger, '<') > -1 || IntStr(AlanDeger, '>') > -1 || IntStr(AlanDeger, "'") > -1 || IntStr(AlanDeger, '!') > -1) {
            UyariMesaji = UyariMesaji + AlanAdi + " Alanı Geçersiz Karakterler İçeriyor. '<>! karakterlerini kullanmayınız!\n";
            return UyariMesaji;
        }
        if (AlanDeger.length > Uzunluk) {
            UyariMesaji = UyariMesaji + AlanAdi + " Alanına en uzun " + Uzunluk + " karakter veri girilebilir.\n";
            return UyariMesaji;
        }
    }
    return UyariMesaji;
}
function EMailAlan(AlanDeger, AlanAdi, Uzunluk, BosKabul) {
    var UyariMesaji = "";
    var sEmail, nAtLoc, nNokLoc;
    var ChkMail = true;
    if (trim(AlanDeger) != AlanDeger) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanının başında veya sonunda boşluk(lar) bulunmaktadır.\n";
        return UyariMesaji;
    }
    if (AlanDeger == "" && !BosKabul) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Boş Geçilemez.\n";
        return UyariMesaji;
    }
    if (!BosKabul || AlanDeger != "") {
        if (isEmail(AlanDeger)) {
            if (AlanDeger.length > Uzunluk) {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanına en uzun " + Uzunluk + " karakter veri girilebilir.\n";
                return UyariMesaji;
            }
            if (Left(AlanDeger, 4) == "www.") {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanının başına www yazmanıza gerek yoktur!\n";
                return UyariMesaji;
            }
        }
        else {
            UyariMesaji = UyariMesaji + AlanAdi + " Alanı elektronik posta adresine uygun olmayan karakterler içeriyor!\n";
            return UyariMesaji;
        }

        sEmail = trim(AlanDeger);
        nAtLoc = IntStr(sEmail, "@");
        nNokLoc = IntStr(sEmail, ".");
        //if ((nAtLoc<1 || (sEmail.indexOf('.')<nAtLoc))) ChkMail=false; //(.@)
        //else 
        if (IntStr(Mid(sEmail, nAtLoc + 1, sEmail.length - nAtLoc + 1), "@") == 0) ChkMail = false;//(@@)
        else if (IntStr(Mid(sEmail, nNokLoc + 1, sEmail.length - nNokLoc + 1), ".") == 0) ChkMail = false;//(..)
        else if (Mid(sEmail, nAtLoc + 1, 1) == ".") ChkMail = false;//(@.)
        else if (IntStr(Right(sEmail, 2), ".") > -1) ChkMail = false;

        if (!ChkMail) {
            UyariMesaji = UyariMesaji + AlanAdi + " Alanı elektronik posta adresi düzenine uygun bir yapıda değildir.\n";
            return UyariMesaji;
        }
    }
    return UyariMesaji;
}

function IPAlan(AlanDeger, AlanAdi, BosKabul) {

    var UyariMesaji = "";
    if (trim(AlanDeger) != AlanDeger) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanının başında veya sonunda boşluk(lar) bulunmaktadır.\n";
        return UyariMesaji;
    }
    if (AlanDeger == "" && !BosKabul) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanına Geçerli Bir IP Adresi Girilmelidir.\n";
        return UyariMesaji;
    }
    if (!BosKabul || AlanDeger != "") {
        if (isIP(AlanDeger)) {
            if (IsNumeric(AlanDeger)) {
                if (IntStr(AlanDeger, ',') > -1) {
                    UyariMesaji = UyariMesaji + AlanAdi + " Alanına Geçerli Bir IP Adresi Girilmelidir.\n";
                    return UyariMesaji;
                }
                if (AlanDeger == "0.0.0.0" || AlanDeger == "255.255.255.255") {
                    UyariMesaji = UyariMesaji + AlanAdi + " Alanına Geçerli Bir IP Adresi Girilmelidir.\n";
                    UyariMesaji = UyariMesaji + "Her Üç Rakam Grubu 256 dan küçük olmak koşuluyla xxx.xxx.xxx.xxx Şeklinde Geçerli Bir IP Adresi Giriniz.";
                    return UyariMesaji;
                }
            }
            else {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanına Geçerli Bir IP Adresi Girilmelidir.\n";
                return UyariMesaji;
            }
        }
        else {
            UyariMesaji = UyariMesaji + AlanAdi + " Alanına Geçerli Bir IP Adresi Girilmelidir.\n";
            return UyariMesaji;
        }
    }
    return UyariMesaji;
}
function buyukHarfYap(inpControl) {

    var UyariMesaji = "";
    UyariMesaji = inpControl.replace("ı", "I");
    for (i = 0; i < UyariMesaji.length; i++)
        UyariMesaji = UyariMesaji.replace("ı", "I");
    UyariMesaji = UyariMesaji.replace("i", "İ");
    for (i = 0; i < UyariMesaji.length; i++)
        UyariMesaji = UyariMesaji.replace("i", "İ");
    UyariMesaji = UyariMesaji.toUpperCase();
    return UyariMesaji;
}
function BosKontrol(AlanDeger, AlanAdi) {
    var UyariMesaji = "";
    AlanDeger = trim(AlanDeger);
    if (AlanDeger.length == 0) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Boş Geçilemez.\n";
        return UyariMesaji;
    }
    return UyariMesaji;
}

function SifreKarakterKontrol(AlanDeger) {
    var UyariMesaji = "";
    var ozelKarakterler;
    var rakamlar;
    var harfler;
    var strTemp;
    var ozel = 0;
    var harf = 0;
    var rakam = 0;

    ozelKarakterler = [".", ":", "+", "-", "*", "/", "_", "@", "#", "$", "%", "&"];
    rakamlar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    harfler = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z", "w", "x", "q", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "W", "X", "Q"];

    for (i = 0; i < AlanDeger.length; i++) {
        strTemp = AlanDeger.substr(i, 1);

        for (x1 = 0; x1 < ozelKarakterler.length; x1++) {
            if (ozelKarakterler[x1] == strTemp) {
                ozel = 1;
                break;
            }
        }
        for (x1 = 0; x1 < rakamlar.length; x1++) {
            if (rakamlar[x1] == strTemp) {
                rakam = 1;
                break;
            }
        }
        for (x1 = 0; x1 < harfler.length; x1++) {
            if (harfler[x1] == strTemp) {
                harf = 1;
                break;
            }
        }
    }
    if ((harf == 0) || (rakam == 0) || (ozel == 0)) {
        UyariMesaji = UyariMesaji + " Şifreniz içerisinde en az bir tane özel karakter (.:+-/_@#$%&), sayı ve harf olmalıdır.\n";
    }
    return UyariMesaji;
}

function SaatAlan(AlanDeger, AlanAdi, BosKabul) {
    var UyariMesaji = "";
    var SaatAlan = AlanDeger;
    var MyIsDate = true;

    if (trim(AlanDeger) != AlanDeger) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanının başında veya sonunda boşluk(lar) bulunmaktadır.\n";
        return UyariMesaji;
    }
    AlanDeger = trim(AlanDeger)
    if (AlanDeger == "" && !BosKabul) {
        UyariMesaji = UyariMesaji + AlanAdi + " Alanı Boş Geçilemez.\n";
        return UyariMesaji;
    }

    if (AlanDeger != "") {

        if (AlanDeger.length > 0) {

            if (AlanDeger.substring(2, 3) != ":") {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanına (ss:dd) Şeklinde Geçerli Bir Saat Girilmesi Gereklidir.\n";
                return UyariMesaji;
            }

            if (AlanDeger.length == 5) {
                var saat = parseInt(AlanDeger.substring(0, 2));
                var dakika = parseInt(AlanDeger.substring(3, 5));

                if (IsNumeric(saat) && IsNumeric(dakika)) {
                    if ((saat > 23) && (saat < 0)) {
                        UyariMesaji = UyariMesaji + AlanAdi + " Alanına (ss:dd) Şeklinde Geçerli Bir Saat Girilmesi Gereklidir.\n";
                        return UyariMesaji;
                    }

                    if ((dakika > 59) && (dakika < 0)) {
                        UyariMesaji = UyariMesaji + AlanAdi + " Alanına (ss:dd) Şeklinde Geçerli Bir Saat Girilmesi Gereklidir.\n";
                        return UyariMesaji;
                    }
                }
            }
            else {
                UyariMesaji = UyariMesaji + AlanAdi + " Alanına (ss:dd) Şeklinde Geçerli Bir Saat Girilmesi Gereklidir.\n";
                return UyariMesaji;
            }


        }
    }
    return UyariMesaji;
}