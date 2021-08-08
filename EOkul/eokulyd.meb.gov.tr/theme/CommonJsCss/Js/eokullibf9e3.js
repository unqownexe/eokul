var pagePathMP = "HddWebService.aspx/";
var servispage = "../../Common/eOkulService.asmx"
var genelpage = "../../giris.aspx"
var isSafari = false;///^((?!chrome|android).)*safari/i.test(navigator.userAgent);

function butonSec(nesneadi, sec) {
    if (sec) {
        $(nesneadi).removeClass().addClass("btn btn-icon btn-warning has-ripple");
        $(nesneadi + " i").removeClass().addClass("fas fa-folder-open");

    }
    else {
        $(nesneadi).removeClass().addClass("btn btn-icon btn-primary has-ripple");
        $(nesneadi + " i").removeClass().addClass("fas fa-folder");

    }

}
function kopyala(satir) {

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(satir).select();
    document.execCommand("copy");
    $temp.remove();
    sgMsgbox("i", "Bilgi", "Kopyalandı", true, true, false, "TR", 1);
}

/* ortak kullanım fonksiyonları*/
function isMobile() {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}
function LutfenBekleyinizButon(nesneadi, beklet, butonmetni) {
    if (beklet == true) {
        $("#" + nesneadi).html('<span class="spinner-border spinner-border-sm" role="status"></span>Lütfen Bekleyiniz');
    }
    else {
        $("#" + nesneadi).html(butonmetni);
    }

}
function IslemYapiliyor(goster) {
    //sgMsgbox("w", "Uyarı", "Devam eden isteğiniz mevcut. Lütfen Bekleyiniz", true, true, true, "TF", 5);
    if (goster)
        metroMsgbox('i', 'Bilgi', 'İsteğiniz İşleniyor. Lütfen Bekleyiniz', '1');
    else
        $("#msgBoxMaster").hide();

}
function chkBoxOku(nesneadi) {
    return ($("#" + nesneadi).prop("checked") ? "1" : "0");
}
function sgMsgbox(mesajtip, baslik, mesaj, kapat, progress, enust, posizyon, sure) {
    $("#imgMsgLoader").hide();
    $("#msgBoxMaster").hide();
    var mesajtipi = "success";
    switch (mesajtip) {
        case "s":
        case "S":
            mesajtipi = "success";
            break;
        case "E":
        case "e":
            mesajtipi = "error";
            break;
        case "i":
        case "I":
            mesajtipi = "info";
            break;
        case "w":
        case "W":
            mesajtipi = "warning";
            break;
    }
    var pozisyonnew = "toast-top-right";
    switch (posizyon) {
        case "TR":
            pozisyonnew = "toast-top-right";
            break;
        case "BR":
            pozisyonnew = "toast-bottom-right";
            break;
        case "BL":
            pozisyonnew = "toast-bottom-left";
            break;
        case "TL":
            pozisyonnew = "toast-top-left";
            break;
        case "TF":
            pozisyonnew = "toast-top-full-width";
            break;
        case "BF":
            pozisyonnew = "toast-bottom-full-width";
            break;
        case "TC":
            pozisyonnew = "toast-top-center";
            break;
        case "BC":
            pozisyonnew = "toast-bottom-center";
            break;
    }
    if (sure == 5) {
        sure = 7;
    }
    toastr.options = {
        closeButton: kapat
        , progressBar: progress
        , newestOnTop: enust
        , positionClass: pozisyonnew
        , timeOut: sure * 1000
    };
    toastr.clear();
    toastr[mesajtipi](mesaj, baslik);

}
function FBoxMsgBox(metin, buton) {
    $('#container').prepend('<div style="display:none; font:bold 16pt/150px A"><div id="islembasladi">' + metin + '</div></div>');
    $.fancybox({
        'width': '40%',
        'height': '40%',
        'autoScale': true,
        'transitionIn': 'fade',
        'transitionOut': 'fade',
        'type': 'inline',
        'closeBtn': buton,
        'href': '#islembasladi'
    });
    $(".fancybox-skin").css("backgroundColor", "transparent");
}
function metroMsgbox(mesajtip, baslik, mesaj, loader) {
    $("#imgMsgLoader").hide();
    if (loader == '1')
        $("#imgMsgLoader").show();
    $("#msgBoxMasterButon").removeClass();
    if (mesajtip == 'E' || mesajtip == 'e')
        $("#msgBoxMasterButon").addClass('alert alert-block alert-error fade in');
    else if (mesajtip == 'w' || mesajtip == 'W')
        $("#msgBoxMasterButon").addClass('alert alert-block alert-warning fade in');
    else if (mesajtip == 'i' || mesajtip == 'I')
        $("#msgBoxMasterButon").addClass('alert alert-block alert-info fade in');
    else if (mesajtip == 's' || mesajtip == 'S')
        $("#msgBoxMasterButon").addClass('alert alert-block alert-success fade in');
    //else 
    //    $("#msgBoxMasterButon").addClass('alert alert-block alert-success fade in');
    $("#msgBoxMaster").show();
    $("#msgBoxMasterBaslik").html(baslik);
    $("#msgBoxMasterBaslikMesaj").html(mesaj);
}
function metroModalMsgbox(baslik, mesaj, butontext) {
    $('#myModalPopup .modal-header label').html(baslik);
    $('#myModalPopup .modal-body').html('<div class="space10"></div>' + mesaj);
    $('#myModalPopup .btn btn-primary a').html(butontext);
    $('#myModalPopup').modal({ show: true })
}
function LutfenBekleyiniz() {
    sgMsgbox("w", "Uyarı", "Devam eden isteğiniz mevcut. Lütfen Bekleyiniz", true, true, true, "TF", 5);
    //metroMsgbox('i', 'Bilgi', 'Devam eden isteğiniz mevcut. Lütfen Bekleyiniz', '1')

}
function combooku(gelen) {
    var deger = $("#" + gelen).val();
    if (deger == null)
        deger = "-1";
    else
        deger = $("#" + gelen).val().toString();
    return deger;
}
function DatatableDeleteRow(satir, parametre) {
    var tabloadi = satir.offsetParent.offsetParent.id;
    var oTable = $('#' + tabloadi).dataTable();
    var nRow = $(satir).parents('tr')[0];
    var satirbilgi = oTable.fnGetData(nRow);
    $("#hdnMainRecordId").val(satirbilgi[sindex.dataid]);
    MetroModalConfirmByValue("Sil", "Bu kaydı Silmek İstediğinize emin misiniz ?", "Evet", "Hayır", parametre);
}
//datateble
function tablosatirsayisi(tabloadi) {
    try {
        var oTable = $('#' + tabloadi).dataTable();
        var aData = oTable.fnGetData();
        var satirsay = aData.length;// $('#' + tabloadi + ' >tbody >tr').length;
        return satirsay;
    }
    catch (err) {
        return 0;
    }
}
function SecilenDegerOku(gelen, uyari) {
    var chkSec = $('input[id="' + gelen + '"]:checked');
    if (chkSec.length == 0 && uyari) {
        sgMsgbox("w", "Uyarı", "Lütfen Seçim Yapınız", true, true, false, "TL", 5);
        return "-1";
    }
    else {
        toastr.clear();
        var veri = [];
        var deger = [];
        var okunan = '';

        for (var i = 0; i < chkSec.length; i++) {
            deger = chkSec[i].value.split(',');
            for (var j = 0; j < deger.length; j++) {
                if (veri[j] == null) veri[j] = "";
                veri[j] = veri[j] + deger[j] + ',';
            }
        }
        for (var i = 0; i < veri.length; i++) {
            if (veri[i].length > 0) {
                veri[i] = veri[i].substring(0, veri[i].length - 1);
                okunan = okunan + veri[i] + '*';
            }
        }
        if (okunan.length > 0) {
            okunan = okunan.substring(0, okunan.length - 1);
        }
        return okunan;

    }
}
function SecilenDegerOku_IdBaslayan(gelen, uyari) {
    var chkSec = $('input[id^="' + gelen + '"]:checked');
    if (chkSec.length == 0 && uyari) {
        sgMsgbox("w", "Uyarı", "Lütfen Seçim Yapınız", true, true, false, "TL", 5);
        return "-1";
    }
    else {
        toastr.clear();
        var veri = [];
        var deger = [];
        var okunan = '';

        for (var i = 0; i < chkSec.length; i++) {
            deger = chkSec[i].value.split(',');
            for (var j = 0; j < deger.length; j++) {
                if (veri[j] == null) veri[j] = "";
                veri[j] = veri[j] + deger[j] + ',';
            }
        }
        for (var i = 0; i < veri.length; i++) {
            if (veri[i].length > 0) {
                veri[i] = veri[i].substring(0, veri[i].length - 1);
                okunan = okunan + veri[i] + '*';
            }
        }
        if (okunan.length > 0) {
            okunan = okunan.substring(0, okunan.length - 1);
        }
        return okunan;

    }
}

/* ortak kullanım fonksiyonları son*/

/*tema ilgili fonksiyonlar*/
/*seçim özelliği açık tablodaki seçili satırı okuma*/
function secilisatir(tabloadi) {
    var oTable = $('#' + tabloadi).dataTable();
    var nRow = $('#' + tabloadi + ' tr.selected');
    if (nRow.length == 0)
        return "-1";
    else {
        var satirbilgi = oTable.fnGetData(nRow);
        return satirbilgi;
    }
}
function SayfaBilgisi(link1, baslik1, link2, baslik2, link3, baslik3) {
    $('.breadcrumb li:nth-child(1) a').attr("href", link1);
    $('.breadcrumb li:nth-child(1) a').html(baslik1);
    $('.breadcrumb li:nth-child(2) a').attr("href", link2);
    $('.breadcrumb li:nth-child(2) a').html(baslik2);
    $('.breadcrumb li:nth-child(3) a').attr("href", link3);
    $('.breadcrumb li:nth-child(3) a').html(baslik3);

}
function SayfaBilgisiOku() {
    var ekrankodu = "#a" + EkranKodu();
    $(ekrankodu).parent("li").parent("ul").parent("li").addClass("active open");
    $(ekrankodu).parent("li").parent("ul").parent("li").children("a").children(".arrow").addClass("open");
    $(ekrankodu).parent("li").attr("class", "active")
    SayfaBilgisi("Default.aspx", 'Denetim Masası', "#", $(ekrankodu).html(), "#", EkranKodu());
}
function dataTableHazirlaDTv4WithColums(tabloadi, kolonlar, bosmesaj) {
    $('#' + tabloadi).DataTable({
        scrollY: '50vh',
        scrollCollapse: true,
        "columnDefs": kolonlar,
        paging: false,
        oLanguage: {
            sSearch: "<span id=\"dataTables_search\">Ara:</span>",
            sInfo: "_TOTAL_ kaydın _START_ - _END_  kayıt Görüntüleniyor",
            sInfoEmpty: "Görüntülecek Kayıt Bulunamadı",
            sLoadingRecords: "Görüntülenecek Kayıtları Seçerek Filtrele veya Ara Butonuna Basınız",
            sEmptyTable: bosmesaj
        }
    });
}
function dataTableHazirlaDTv4(tabloadi, bosmesaj) {
    $('#' + tabloadi).DataTable({
        scrollY: '50vh',
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        oLanguage: {
            sSearch: "<span id=\"dataTables_search\">Ara:</span>",
            sInfo: "_TOTAL_ kaydın _START_ - _END_  kayıt Görüntüleniyor",
            sInfoEmpty: "Görüntülecek Kayıt Bulunamadı",
            sLoadingRecords: "Görüntülenecek Kayıtları Seçerek Filtrele veya Ara Butonuna Basınız",
            sEmptyTable: bosmesaj
        }
    });
}
function dataTableHazirla(tabloadi, kolonlar) {

    $('#' + tabloadi).dataTable({
        "scrollX": true,
        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        "sPaginationType": "bootstrap",
        //"pageLength": 0,
        "iDisplayLength": 25,
        // "bLengthChange": false,
        "aLengthMenu": [[25, 50, 100, -1], [25, 50, 100, "Tümü"]],
        "oLanguage": {
            "sLengthMenu": "_MENU_ Kayıt Sayısı",
            "sInfo": "_START_ - _END_ / _TOTAL_ Görüntüleniyor",
            "sSearch": "<span id=\"dataTables_search\">Ara:</span>",
            "sInfoEmpty": "Görüntülecek Kayıt Bulunamadı",
            "sProcessing": "<img src='/theme/img/loader.gif' style='width: 16px; height: 16px' />Lütfen Bekleyiniz - Kayıtlar Yükleniyor...",
            //"sLoadingRecords": "<img src='../images/buttons/loader.gif' style='width: 16px; height: 16px' />Lütfen Bekleyiniz - Kayıtlar Yükleniyor...",
            "sLoadingRecords": "Görüntülenecek Kayıtları Seçerek Filtrele veya Ara Butonuna Basınız",
            "sZeroRecords": "Görüntülecek Kayıt Bulunamadı",
            "sEmptyTable": "Arama kutusuna aradığınız ifadeyi yazınız",
            "sInfoFiltered": " Sonuç Bulunamadı",
            "oPaginate": {
                "sPrevious": "Önceki",
                "sNext": "Sonraki"
            }
        },
        "aoColumnDefs": kolonlar,
        //"aDataSort": false,
        "aaSorting": [] // otmatik sıralama kapatma
        //,"bAutoWidth":true
    });
}
function dataTableHazirlaBasit(tabloadi, kolonlar) {

    $('#' + tabloadi).dataTable({
        "scrollX": true,
        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        "sPaginationType": "bootstrap",
        //"aLengthMenu": false,
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": false,
        "oLanguage": {
            "sLengthMenu": "_MENU_ Kayıt Sayısı",
            "sInfo": "_START_ - _END_ / _TOTAL_ Görüntüleniyor",
            "sSearch": "<span id=\"dataTables_search\">Ara:</span>",
            "sInfoEmpty": "Görüntülecek Kayıt Bulunamadı",
            "sProcessing": "<img src='/theme/img/loader.gif' style='width: 16px; height: 16px' />Lütfen Bekleyiniz - Kayıtlar Yükleniyor...",
            //"sLoadingRecords": "<img src='../images/buttons/loader.gif' style='width: 16px; height: 16px' />Lütfen Bekleyiniz - Kayıtlar Yükleniyor...",
            "sLoadingRecords": "Görüntülenecek Kayıtları Seçerek Filtrele veya Ara Butonuna Basınız",
            "sZeroRecords": "Görüntülecek Kayıt Bulunamadı",
            "sEmptyTable": "Seçim Yapınız",
            "sInfoFiltered": " Sonuç Bulunamadı",
            "oPaginate": {
                "sFirst": "İlk",
                "sLast": "Son",
                "sNext": "Sonraki",
                "sPrevious": "Önceki"
            },
        },
        "aoColumnDefs": kolonlar,
        //"aDataSort": false,
        "aaSorting": [] // otmatik sıralama kapatma
        //,"bAutoWidth":true
    });
}
function AddTHEAD(tableName) {
    //Cannot read property 'mData' of undefined hatasını çözmek için kullanıyoruz
    var table = document.getElementById(tableName);
    if (table != null) {
        var head = document.createElement("THEAD");
        head.style.display = "table-header-group";
        head.appendChild(table.rows[0]);
        table.insertBefore(head, table.childNodes[0]);
    }
}
function sayfaValidationKontrol(nesneler, nesneturu) {
    $("#msgBoxMaster").hide();
    for (var i = 0; i < nesneler.length ; i++) {
        if (nesneturu[i] == "combo") {
            nesnehatatemizle("#" + nesneler[i]);
            if ($("#" + nesneler[i]).val() == null || $("#" + nesneler[i]).val() == -1) {
                sgMsgbox("e", "Hata", 'Lütfen ' + LabelOku(nesneler[i], "label") + ' Seçiniz', true, true, false, "TL", 5);
                nesnehatasec("#" + nesneler[i]);
                return false;
            }
        }
        else if (nesneturu[i] == "ntext") {
            nesnehatatemizle("#" + nesneler[i] + "_wrapper");
            if ($("#" + nesneler[i] + "_text").val().trim() == null || $("#" + nesneler[i] + "_text").val().trim() == "") {
                sgMsgbox("e", "Hata", 'Lütfen ' + LabelOku(nesneler[i] + "_wrapper", "label") + ' Seçiniz', true, true, false, "TL", 5);
                nesnehatasec("#" + nesneler[i] + "_wrapper");
                return false;
            }
        }
        else {
            nesnehatatemizle("#" + nesneler[i]);
            if ($("#" + nesneler[i]).val() == '') {
                sgMsgbox("e", "Hata", 'Lütfen ' + LabelOku(nesneler[i], "label") + ' Giriniz', true, true, false, "TL", 5);
                nesnehatasec("#" + nesneler[i]);
                return false;
            }

        }
    }
    return true;
}
function nesnehatatemizle(kontroladi) {
    //var kontroldizisi = kontroladi.split(",");
    //for (var i = 0; i < kontroldizisi.length; i++) {
    //    $("#" + kontroldizisi[i]).parent(".controls").parent("div").removeClass();
    //    $("#" + kontroldizisi[i]).parent(".controls").parent("div").addClass("control-group");

    //}
    $(kontroladi).parent(".controls").parent("div").removeClass();
    $(kontroladi).parent(".controls").parent("div").addClass("control-group");

}
function LabelOku(nesneadi, donecek) {
    //dönecek label ise başlık yoksa açıklama
    var getLabel = "";
    if (donecek = "label") {
        //if (nesneturu == "text") {

        getLabel = $("#" + nesneadi).parent().parent().children("label").html();
        if (typeof getLabel === "undefined")
            getLabel = $("#" + nesneadi).attr("data-placeholder");
        return getLabel;
        //}
        //if (nesneturu == "combo") {
        //    return $("#" + nesneadi).children("label").html()
        //}
        //else
        //    return ""
    }
    else
        return "";
}
function nesnehatasec(kontroladi) {
    //var kontroldizisi = kontroladi.split(",");
    //for (var i = 0; i < kontroldizisi.length; i++) {
    //    $("#" + kontroldizisi[i]).parent(".controls").parent("div").addClass("error");

    //}
    $(kontroladi).parent(".controls").parent("div").addClass("error");
}
function setFocusToTextBox(elementId) {
    var textbox = document.getElementById(elementId);
    textbox.focus();
    textbox.scrollIntoView();
}
//tarih fonksiyanları
function getTime() {
    var now = new Date();
    now = (now.getHours() < 10 ? "0" : "") + now.getHours() + ':' + (now.getMinutes() < 10 ? "0" : "") + now.getMinutes() + ':' + (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
    return now;
}
function tarihoku(ayrac) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10)
        dd = "0" + dd;
    if (mm < 10)
        mm = "0" + mm;
    return dd + ayrac + mm + ayrac + yyyy;
}
function getLastMonth() {
    var now = new Date();
    var lastday = new Date(now.getFullYear(), now.getMonth(), 0);
    var firstday = new Date(lastday.getFullYear(), lastday.getMonth(), 1);
    var lastMonth = (firstday.getDate() < 10 ? "0" : "") + firstday.getDate() + '/' + (firstday.getMonth() + 1 < 10 ? "0" : "") + (firstday.getMonth() + 1) + '/' + firstday.getFullYear() + ' - '
        + (lastday.getDate() < 10 ? "0" : "") + lastday.getDate() + '/' + (firstday.getMonth() + 1 < 10 ? "0" : "") + (firstday.getMonth() + 1) + '/' + lastday.getFullYear();
    return lastMonth;
}
function getThisMonth() {
    var now = new Date();
    var lastday = new Date(now.getFullYear(), now.getMonth(), 1);
    var firstday = new Date(lastday.getFullYear(), (now.getMonth() == 12 ? 1 : now.getMonth() + 1), 0);
    var thisMonth = (lastday.getDate() < 10 ? "0" : "") + lastday.getDate() + '/' + (lastday.getMonth() + 1 < 10 ? "0" : "") + (lastday.getMonth() + 1) + '/' + lastday.getFullYear() + ' - '
        + (firstday.getDate() < 10 ? "0" : "") + firstday.getDate() + '/' + (firstday.getMonth() + 1 < 10 ? "0" : "") + (firstday.getMonth() + 1) + '/' + firstday.getFullYear();
    return thisMonth;
}
function tarihoku2(ayrac, gun, ay, yil) {
    var today = new Date();
    var gunsay = new Date(today);

    gunsay.setDate(today.getDate() + gun);
    var dd = gunsay.getDate();
    if (gunsay.getFullYear() > today.getFullYear()) {
        //yil = yil + 1;
        ay = 1;
    }
    //else if (gunsay.getMonth() > today.getMonth()) ay = ay + 1;
    var mm = gunsay.getMonth() + 1 + ay; //January is 0!
    var yyyy = today.getFullYear() + yil;
    if (mm == 13) {
        mm = 1;
        yyyy = yyyy + 1;
    }
    else if (mm == 0) {
        mm = 12;
        yyyy = yyyy - 1;
    }
    if (dd < 10)
        dd = "0" + dd;
    if (mm < 10)
        mm = "0" + mm;
    return dd + ayrac + mm + ayrac + yyyy;
}
function ComparaDate(adate, bdate, ayrac) {

    //1. tarih 2. tarihten küçükse true
    a = adate.split(ayrac);
    b = bdate.split(ayrac);
    var sDate = new Date();
    sDate.setFullYear(a[2], a[1] - 1, a[0]);
    var eDate = new Date();
    eDate.setFullYear(b[2], b[1] - 1, b[0]);

    if (sDate <= eDate) {
        return true;
    }
    else {
        return false;
    }
}
function addDate(adate, ayrac, hafta, gun, ay, yil) {
    gun = parseInt(gun) + parseInt((hafta * 7));
    a = adate.split(ayrac);
    var gunsay = new Date();

    gunsay.setFullYear(a[2], a[1] - 1, a[0]);
    gunsay.setDate(gunsay.getDate() + gun);

    //gün
    var dd = gunsay.getDate();
    //ay
    var mm = (gunsay.getMonth() + 1) + ay; //January is 0!
    if (mm > 12) {
        mm = mm - 12;
        yil = yil + 1;
    }
    var yyyy = gunsay.getFullYear() + yil;
    if (dd < 10)
        dd = "0" + dd;
    if (mm < 10)
        mm = "0" + mm;
    return dd + ayrac + mm + ayrac + yyyy;
}
/*tema ilgili fonksiyonlar son*/

/*-------------------------------------------------------------------------*/
function AjaxGonder(Keys, Degerler, pagePath, funcname, funcparameter, data_Type) {

    //AjaxGonder("-1", Degerler, "-1", "getBarkodKontrol", "barkodkontrol", "json")
    //AjaxGonder("-1", Degerler, "-1", "getBarkodKontrol", "barkodkontrol", "xml")
    //AjaxGonder(Keys, Degerler, pagePath, funcname, funcparameter, data_Type)
    // barkod kontrol aynı sayfada birden fazla istek yapılırsa ayırmak için
    var jsonText;
    if (Keys != "-1")
        jsonText = JSON.stringify({ Keys: Keys, Degerler: Degerler });
    else
        jsonText = JSON.stringify({ Degerler: Degerler });
    if (pagePath == "-1")
        pagePath = window.location.pathname;
    try {
        IslemYapiliyor(true);
        $.ajax({
            type: "POST",
            url: pagePath + "/" + funcname,
            contentType: "application/json; charset=utf-8",
            dataType: data_Type,
            data: jsonText,
            success: function (result) {
                ReturnRecord(result, funcparameter);
            },
            error: function (e, b, x) {
                hatagoster(e, b, x);
                try {
                    ReturnPageError(funcparameter);
                } catch (e) {

                }
            }
        });
        IslemYapiliyor(false);
        return false;
    }
    catch (err) {
        sgMsgbox("E", "Hata Oluştu", err.message, true, true, false, "TF", 5);
        Iptal();
    }
    return false;
}
function AjaxGonder2(Keys, Degerler, pagePath, funcname, funcparameter, nesneadi, data_Type) {

    //AjaxGonder("-1", Degerler, "-1", "getBarkodKontrol", "barkodkontrol", "json")
    //AjaxGonder("-1", Degerler, "-1", "getBarkodKontrol", "barkodkontrol", "xml")
    //AjaxGonder(Keys, Degerler, pagePath, funcname, funcparameter, data_Type)
    var jsonText;
    if (Keys != "-1")
        jsonText = JSON.stringify({ Keys: Keys, Degerler: Degerler });
    else
        jsonText = JSON.stringify({ Degerler: Degerler });
    if (pagePath == "-1")
        pagePath = window.location.pathname;
    try {
        $.ajax({
            type: "POST",
            url: pagePath + "/" + funcname,
            contentType: "application/json; charset=utf-8",
            dataType: data_Type,
            data: jsonText,
            success: function (result) {
                ReturnRecord2(result, funcparameter, nesneadi);
            },
            error: function (e, b, x) {
                hatagoster(e, b, x);
                try {
                    ReturnPageError(funcparameter);
                } catch (e) {

                }
            }
        });
        return false;
    }
    catch (err) {
        sgMsgbox("E", "Hata Oluştu", err.message, true, true, false, "TF", 5);
        Iptal();
    }
    return false;
}
function AjaxGonderParametresiz(pagePath, funcname, funcparameter, data_Type) {
    if (pagePath == "-1")
        pagePath = window.location.pathname;
    try {
        IslemYapiliyor(true);
        $.ajax({
            type: "POST",
            url: pagePath + "/" + funcname,
            contentType: "application/json; charset=utf-8",
            dataType: data_Type,
            success: function (result) {
                ReturnRecord(result, funcparameter);
            },
            error: function (e, b, x) {
                hatagoster(e, b, x);
                try {
                    ReturnPageError(funcparameter);
                } catch (e) {

                }
            }
        });
        IslemYapiliyor(false);
        return false;
    }
    catch (err) {
        sgMsgbox("E", "Hata Oluştu", err.message, true, true, false, "TF", 5);
        Iptal();
    }
    return false;
}
