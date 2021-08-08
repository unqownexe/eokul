var loaderGif = ["Ogretmenler,SinifSube"]; //chhosen
function ReadMultiComboId(nesneadi) {
    var ktpId = $(nesneadi).val();
    if (ktpId == null)
        ktpId = "-1";
    else
        ktpId = $(nesneadi).val().toString();
    return ktpId;
}
function ReturnRecord2(result, funcparameter, nesneadi) {

    //var Combolist1 = []; //chosen
    //var Combolist2 = []; // düz
    //var Combolist1 = ["Ogretmenler", "cmbIller", "cmbIlceler"]; //chosen

    //if (Combolist1.indexOf(funcparameter) > -1) {
    if (result.d != '') {
        if (funcparameter.cmbType == "chosen") {
            if (typeof funcparameter.ilkeleman == "undefined")
                funcparameter.ilkeleman = "Seçiniz";
            if (funcparameter.ilkeleman == "-1") {
                $("#" + funcparameter.nesneadi).html(result.d).trigger('liszt:updated');
            }
            else
                $("#" + funcparameter.nesneadi).html("<option value='-1'>" + funcparameter.ilkeleman + "</option>" + result.d).trigger('liszt:updated');
            if ($("#" + funcparameter.nesneadi).val() != "-1") {
                setCookie(funcparameter.nesneadi, $("#" + funcparameter.nesneadi).val(), 365);
                PageCommonFunction(funcparameter.nesneadi, $("#" + funcparameter.nesneadi).val());
            }
        }
        else {
            $("#" + nesneadi).html("<option value='-1'>Kayıt Bulunamadı.</option>");
        }
    }

    if (funcparameter.gifanimation) {
        $("#loaderGif" + funcparameter.nesneadi).hide();
    }
    PageCommonFunction("ComboDoldur", funcparameter);

}
function ComboDoldurCommon(parametre) {
    //new Object({nesneadi: "combo nesnesinin adı başında cmb olmadan", parameters: "veritabanına gider ona göre değer doldurulur",gifanimation:true,seciliItem:-1,Id:0,ustId:0}
    if (parametre.gifanimation) {
        $("#loaderGif" + parametre.nesneadi).show();
    }
    var Keyler = ["parameters", "IndexNo", "prmId", "prmUstId", "prmSecim1", "prmSecim2"];
    var Degerler = [parametre.parameters, parametre.seciliItem, parametre.Id, parametre.ustId, parametre.prmSecim1, parametre.prmSecim2];
    AjaxGonder2(Keyler, Degerler, pagePathMP, "getComboST", parametre, parametre.nesneadi, "json");
    return false;
}
function getComboDoldurST(nesneadi, parameters, seciliItem) {
    if (loaderGif.indexOf(parameters) > -1) {
        $("#loaderGif" + nesneadi).show();
    }
    var Keyler = ["parameters", "IndexNo", "prmId", "prmUstId"];
    var Degerler = [parameters, seciliItem, 0, 0];
    AjaxGonder2(Keyler, Degerler, pagePathMP, "getComboST", parameters, nesneadi, "json");
    return false;
}

//il ilçe comboları için
function getComboDoldurSTDetayli(nesneadi, prmId, prmUstId, parameters, seciliItem) {

    var Keyler = ["parameters", "IndexNo", "prmId", "prmUstId"];
    var Degerler = [parameters, seciliItem, prmId, prmUstId];
    AjaxGonder2(Keyler, Degerler, pagePathMP, "getComboST", parameters, nesneadi, "json");
    return false;
}

function ComboDoldur(parametre) {
    var secenekler = "";
    result = parametre.veri;
    var elemansayisi = 0;
    var secilecekItem = 0;
    var selectedValue = $("#" + parametre.nesneadi).data("value");
    if (typeof selectedValue == "undefined") {
        selectedValue = "-1";
    }
    if (parametre.temizle == true) {
        //if (parametre.bosekleTekse) {
        //    secenekler = "<option value='-1'>" + parametre.ilkeleman + "</option>" + secenekler;
        //}
        elemansayisi = 1;
    }
    else {


        $.each(result, function (index, dataRow) {
            if (typeof parametre.dataname == "undefined")
                secenekler += "<option value='" + dataRow.eIndex + "'>" + dataRow.eAdi + "</option>";
            else
                secenekler += "<option value='" + dataRow.eIndex + "' data-" + parametre.dataname + "='" + dataRow.Data + "'>" + dataRow.eAdi + "</option>";
            elemansayisi++;
            secilecekItem = dataRow.eIndex;
        });
    }
    if (parametre.bosekleTekse && elemansayisi == 1) {
        secenekler = "<option value='-1'>" + parametre.ilkeleman + "</option>" + secenekler;
    }
    else if (elemansayisi > 1 && parametre.bosekle) {
        secenekler = "<option value='-1'>" + parametre.ilkeleman + "</option>" + secenekler;
    }
    $("#" + parametre.nesneadi).html(secenekler);
    if (elemansayisi == 1) {
        $("#" + parametre.nesneadi).val(secilecekItem);
    }
    else if (selectedValue != "-1") {
        $("#" + parametre.nesneadi).val(selectedValue);
    }
    if (parametre.cmbType == "chosen") {
        $("#" + parametre.nesneadi).trigger('liszt:updated');
    }
    if (parametre.cmbType == "select2" && (selectedValue != "-1")) {
        var degerler = selectedValue.split(",");
        $("#" + parametre.nesneadi).val(degerler).trigger('change');
    }
    try {
        PageCommonFunction("ComboDoldur", parametre.nesneadi);
    } catch (e) {

    }

}
function GetCombo(nesneadi) {
    if ($('#' + nesneadi).val() == "" || $('#' + nesneadi).val() == null)
        return "-1";
    else
        return $('#' + nesneadi).val().toString();
}