var sayi = 0, kurumDurum = 0;
AjaxGonder(["il"], ["-1"], "-1", "iller", "ReturnGetil", "json");

$(document).ready(function () {
    $('#cmbIl').select2({
        "language": {
            "noResults": function () { return "Sonuç Bulunamadı"; }
        }
    });





    $(document).on("click", "#kurumListeler", function () {
        var ilKodu = $("#cmbIl").val();
        var kurumTuru = $("#kurumTuru").val();
        AjaxGonder(["il", "kurumturu"], [ilKodu, kurumTuru], "-1", "kurumListe", "ReturnGetKurum", "json");
    });


});



function ReturnRecord(msg, funcparameter) {
    var readList = msg.d; var sonuc = "";
    if (funcparameter == "ReturnGetKurum") {
        $("#sonuc").empty(); var i = 1;
        $.each(readList, function () {
            $("#sonuc").append("<tr><td>" + i + "</td><td>" + this.il + "</td><td>" + this.ilce + "</td><td>" + this.kurumAdi + "</td><td>" + this.alan + "</td><td>" + this.kontenjan + "</td><td>" + this.y2Kontenjan + "</td><td>" + this.pansiyon + "</td></tr>");
            //$("#sonuc").append("<tr><td>" + i + "</td><td>" + this.il + "</td><td>" + this.ilce + "</td><td>" + this.kurumAdi + "</td><td>" + this.alan + "</td><td>" + this.kontenjan + "</td><td>" + this.y2Kontenjan + "</td><td>" + this.pansiyon + "</td></tr>");
            i++;
        });

    }
    else if (funcparameter == "ReturnGetil") {
        ComboDoldur((new Object({ nesneadi: "cmbIl", veri: readList, cmbType: "chosen", bosekle: true, ilkeleman: "İl Seçiniz" })));
    }
}