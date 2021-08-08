
$(document).ready(function () {

    $('#LoginModalKurum').on('shown.bs.modal', function (e) {
        $("#guvenlikKontrol").focus();
    });
    $('#LoginModalVBS').on('shown.bs.modal', function (e) {
        $("#txtVBSImage").focus();
    });
    $("#guvenlikKontrol,#txtKullaniciAd,#txtSifre").keypress(function (event) {
        KeyKontrol('eokul', event);
    });
    $("#txtVBSImage,#VBSKullanici,#VBSpassword").keypress(function (event) {
        KeyKontrol('VBS', event);
    });
    $("#txtMebAnahtar").keypress(function (event) {
        KeyKontrol('MEBANAHTAR', event);
    })
});
function EokulGiris(prmGiris) {
    if (prmGiris == "eokul") {
        UyariMesaji = "";
        UyariMesaji = UyariMesaji + NumAlan($("#guvenlikKontrol").val(), "Giriş Kodu", 9999, 1000, false);
        UyariMesaji = UyariMesaji + TextAlan($("#txtKullaniciAd").val(), "Kullanıcı Adı", 20, false);
        UyariMesaji = UyariMesaji + TextAlan($("#txtSifre").val(), "Şifre", 12, false);
        if (UyariMesaji != "") {
            swal({
                icon: "error",
                text: UyariMesaji,
                button: "Tamam",
                type: "success",
                allowEnterKey: true
            }).then(function (result) {
                $("#guvenlikKontrol").focus();
            });
            $(".swal-button").focus();
        }
        else {
            AjaxGonder(["gkod", "txtKullaniciAd", "sifre"], [$("#guvenlikKontrol").val(), $("#txtKullaniciAd").val(), $("#txtSifre").val()], "logineOkul.aspx", "EokulGiris", "ReturnGetGirisEokul", "json");
        }

    }
    else if (prmGiris == "VBS") {
        UyariMesaji = "";
        UyariMesaji = UyariMesaji + NumAlan($("#txtVBSImage").val(), "Resimdeki Rakamlar", 9999, 1000, false);
        UyariMesaji = UyariMesaji + NumAlan($("#VBSKullanici").val(), "Öğrenci T.C. Kimlik No", 99999999999, 10000000000, false);
        UyariMesaji = UyariMesaji + NumAlan($("#VBSpassword").val(), "Öğrenci Okul No", 9999999999, 1, false);
        if (UyariMesaji != "") {
            swal({
                icon: "error",
                text: UyariMesaji,
                button: "Tamam",
                type: "success",
                allowEnterKey: true
            }).then(function (result) {
                $("#txtVBSImage").focus();
            });
            $(".swal-button").focus();
        }
        else {
            AjaxGonder(["gkod", "txtKullaniciAd", "sifre"], [$("#txtVBSImage").val(), $("#VBSKullanici").val(), $("#VBSpassword").val()], "logineOkul.aspx", "VBSGiris", "ReturnGetGirisVBS", "json");
        }
    }
}
function KeyKontrol(gelen, e) {

    if (e.keyCode == 13) {
        if (gelen == "MEBANAHTAR")
            Dogrula();
        else
            EokulGiris(gelen);
    }
}
$('#LoginMebanahtar').on('shown.bs.modal', function () {
    $('#txtMebAnahtar').focus();
    document.getElementById('chkSorma').checked = false;
})
function ReturnRecord(msg, funcparameter) {
    var readList = msg.d;
    if (funcparameter == "ReturnGetGirisEokul" || funcparameter == "ReturnGetGirisVBS") {
        var sayac = 0;
        $.each(readList, function (index, dataRow) {
            if (sayac == 0) {
                if (dataRow.error) {
                    swal({
                        icon: "error",
                        text: dataRow.message,
                        button: "Tamam",
                        type: "success",
                        allowEnterKey: true
                    }).then(function (result) {
                        if (funcparameter == "ReturnGetGirisEokul")
                            $("#guvenlikKontrol").focus();
                        else
                            $("#txtVBSImage").focus();
                    });
                    $(".swal-button").focus();
                    yenileRESIM();
                }
                if (funcparameter == "ReturnGetGirisEokul") {
                    if (dataRow.redirect && dataRow.mebanahtar == false) {
                        window.location.href = dataRow.url;
                    }
                    else if (dataRow.redirect && dataRow.mebanahtar == true) {
                        $("#LoginMebanahtar").data("url", dataRow.url);
                        $("#txtMebAnahtar").focus();
                        $("#LoginMebanahtar").modal("show");
                    }
                }
                else if (funcparameter == "ReturnGetGirisVBS") {
                    if (dataRow.redirect) {
                        window.location.href = dataRow.url;
                    }
                }
            }
            sayac++;
        });


    }
    else if (funcparameter == "ReturngenerateCaptcha") {
        generateCaptcha(readList);
    }
    else if (funcparameter == "ReturnGetMebAnahtar") {
        var sayac = 0;
        $.each(readList, function (index, dataRow) {
            if (sayac == 0) {
                if (dataRow.error) {
                    swal({
                        icon: "error",
                        text: dataRow.message,
                        button: "Tamam",
                        type: "success",
                        allowEnterKey: true
                    }).then(function (result) {
                        $("#guvenlikKontrol").focus();
                    });
                    $(".swal-button").focus();
                    $("#txtMebAnahtar").val('');
                    yenileRESIM();
                    $("#LoginMebanahtar").modal("hide");
                }
                if (dataRow.redirect) {
                    window.location.href = dataRow.url;
                }
            }
            sayac++;
        });

    }
}
function yenileRESIM() {
    AjaxGonderParametresiz("logineOkul.aspx", "generateCaptcha", "ReturngenerateCaptcha", "json");
    $("#guvenlikKontrol,#txtVBSImage").val("");
}
function hatagoster(e, b, x) {
    swal({
        icon: "error",
        text: e.responseText,
        button: "Tamam",
        type: "success",
        allowEnterKey: true
    });
    //sgMsgbox("E", "Sistem Hatası", x + ":" + e.responseText, true, true, false, "TF", 5);
}
function Dogrula() {
    let UyariMesaji = "";
    UyariMesaji = UyariMesaji + NumAlan($("#txtMebAnahtar").val(), "MEB Anahtar", 999999, 1, false);
    if ($("#txtMebAnahtar").val().length != 6)
        UyariMesaji +="MEB Anahtar kodu 6 haneli olmalıdır";

    if (UyariMesaji != "") {
        swal({
            icon: "error",
            text: UyariMesaji,
            button: "Tamam",
            type: "success",
            allowEnterKey: true
        });
        $(".swal-button").focus();
    }
    else {
        //AjaxGonder(["MebAnahtar", "benihatirla", "User_Name"], [$("#txtMebAnahtar").val(), 'false', $("#txtKullaniciAd").val()], "logineOkul.aspx", "MebAnahtar", "ReturnGetMebAnahtar", "json");
        AjaxGonder(["MebAnahtar", "benihatirla", "User_Name"], [$("#txtMebAnahtar").val(), document.getElementById('chkSorma').checked, $("#txtKullaniciAd").val()], "logineOkul.aspx", "MebAnahtar", "ReturnGetMebAnahtar", "json");
    }
}