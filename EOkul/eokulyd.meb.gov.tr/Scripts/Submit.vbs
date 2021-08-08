Function SubmitHelp(pageName)
Dim frm
Dim newWindow
	Set frm = Document.Forms("help_submit_form")
	frm.hlpPageName.value=pageName
	frm.submit
	set newWindow= window.open("","yardim_sayfasi")
	newWindow.focus()
End Function

Function Yazdir()
Dim frm
Dim newWindow
	Set frm = Document.Forms("rapor_submit_form")
	set newWindow= window.open("","Raporlar","toolbar=1,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1")
	'set newWindow= window.open("","Raporlar","toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1,resizable=1")
	frm.submit
	newWindow.focus()
End Function

Function SubmitRapor()
Dim frm
Dim newWindow
	Set frm = Document.Forms("rapor_submit_form")
	set newWindow= window.open("","Raporlar","toolbar=1,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1")
	'set newWindow= window.open("","Raporlar","toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1,resizable=1")
	frm.submit
	newWindow.focus()
End Function

Function RaporSec(RaporName)
Dim frm
Dim newWindow
	Set frm = Document.Forms("rapor_secim_form")
	frm.raporKodu.value=RaporName
	frm.submit
	
End Function

Function SubmitHata(modulKodu,ekranKodu,kullaniciNo)
Dim frm
Dim newWindow
	set newWindow = window.open("../../hataBildirim/hataGiris.asp?ModulKodu=" & modulKodu & "&EkranKodu=" & ekranKodu & "&KullaniciNo=" & kullaniciNo ,"hata_bildirim","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=520,height=420")
	newWindow.focus()
End Function

Function SubmitKurumAra(form_adi,cmbIl,cmbIlce,kontrol_adi,kontrol_adi1)
Dim newWindow
	set newWindow = window.open("../../common/kurumAra3.asp?form_adi=" & form_adi & "&cmbIl=" & cmbIl & "&cmbIlce=" & cmbIlce & "&kontrol_adi=" & kontrol_adi & "&kontrol_adi1=" & kontrol_adi1 ,"kurum_arama","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=560,height=410")
	newWindow.focus()
End Function

'Function SubmitKurumAra(form_adi,kontrol_kodu,kontrol_adi)
'Dim newWindow
'	set newWindow = window.open("kur00005.aspx?form_adi=" & form_adi & "&kontrol_kodu=" & kontrol_kodu & "&kontrol_adi=" & kontrol_adi ,"kurum_arama","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=560,height=410")
'	newWindow.focus()
'End Function


Function KurumAra(form_adi,textBoxAdi)
Dim newWindow
	set newWindow = window.open("kur00005.aspx?form_adi=" & form_adi & "&textBoxAdi=" & textBoxAdi,"kurum_arama","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=560,height=410")
	newWindow.focus()
End Function


Function SubmitEtkinlikAra(form_adi, kontrol_kodu, kontrol_adi)
Dim newWindow
	set newWindow = window.open("../common/etkinlikAra.asp?form_adi=" & form_adi & "&kontrol_kodu=" & kontrol_kodu & "&kontrol_adi=" & kontrol_adi ,"etkinlik_arama","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=560,height=410")
	newWindow.focus()
End Function

Function NormalTerfiSonucGoster(form_adi, personelYil, personelAy,personelIl,personelIlce,personelMukteseb)
Dim newWindow
	set newWindow = window.open("../common/normalTerfiSonucGoster.asp?form_adi=" & form_adi & "&personelYil=" & personelYil & "&personelAy=" & personelAy & "&personelIl=" & personelIl & "&personelIlce=" & personelIlce & "&personelMukteseb=" & personelMukteseb,"NormalTerfiSonuclari","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=560,height=410")
	newWindow.focus()
End Function



Function SubmitKurumAra2(form_adi,cmbIl,cmbIlce,kontrol_adi, kontrol2_adi)
Dim newWindow
	set newWindow = window.open("../common/kurumAra2.asp?form_adi=" & form_adi & "&cmbIl=" & cmbIl & "&cmbIlce=" & cmbIlce & "&kontrol_adi=" & kontrol_adi & "&kontrol2_adi=" & kontrol2_adi,"kurum_arama","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=560,height=410")
	newWindow.focus()
End Function

Function SubmitPersonelAra2(form_adi,kontrol_adi, kontrol2_adi, kontrol3_adi, kontrol4_adi)
Dim newWindow
Dim m_queryString
m_queryString = "../common/personelAra.asp?form_adi=" & form_adi & "&kontrol_adi=" & kontrol_adi & "&kontrol2_adi=" & kontrol2_adi & "&kontrol3_adi=" & kontrol3_adi & "&kontrol4_adi=" & kontrol4_adi

	set newWindow = window.open(m_queryString,"personel_arama","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=760,height=510")
	newWindow.focus()
End Function

Function SubmitPersonelAra(form_adi,kontrol_adi, kontrol2_adi, kontrol3_adi, kontrol4_adi, cmbIl, cmbIlce)
	Dim newWindow
	Dim m_queryString
	m_queryString = "../common/personelAra.asp?form_adi=" & form_adi & "&kontrol_adi=" & kontrol_adi & "&kontrol2_adi=" & kontrol2_adi & "&kontrol3_adi=" & kontrol3_adi & "&kontrol4_adi=" & kontrol4_adi & "&cmbIl=" & cmbIl & "&cmbIlce=" & cmbIlce

		set newWindow = window.open(m_queryString,"personel_arama","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=760,height=510")
		newWindow.focus()
End Function

Function SubmitNorm(form_adi,kontrol_adi, kontrol2_adi, kontrol3_adi, cmbIl, cmbIlce,cmbKurumAdi,cmbBransAdi)
	Dim newWindow
	Dim m_queryString
	m_queryString = "ata00003.asp?form_adi=" & form_adi & "&kontrol_adi=" & kontrol_adi & "&kontrol2_adi=" & kontrol2_adi & "&kontrol3_adi=" & kontrol3_adi & "&cmbIl=" & cmbIl & "&cmbIlce=" & cmbIlce & "&cmbKurumAdi=" & cmbKurumAdi & "&cmbBransAdi=" & cmbBransAdi

		set newWindow = window.open(m_queryString,"personel_arama","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=760,height=510")
		newWindow.focus()
End Function

Function SubmitYoneticiNorm(form_adi,kontrol_adi, kontrol2_adi, kontrol3_adi, cmbIl, cmbIlce,cmbKurumAdi,cmbGorevAdi)
	Dim newWindow
	Dim m_queryString
	m_queryString = "ata00007.asp?form_adi=" & form_adi & "&kontrol_adi=" & kontrol_adi & "&kontrol2_adi=" & kontrol2_adi & "&kontrol3_adi=" & kontrol3_adi & "&cmbIl=" & cmbIl & "&cmbIlce=" & cmbIlce & "&cmbKurumAdi=" & cmbKurumAdi & "&cmbGorevAdi=" & cmbGorevAdi

		set newWindow = window.open(m_queryString,"personel_arama","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=760,height=510")
		newWindow.focus()
End Function

Function SubmitSiraNorm(form_adi,cmbKurumAdi,cmbBransAdi)
	Dim newWindow
	Dim m_queryString
	m_queryString = "ata00005.asp?form_adi=" & form_adi & "&cmbKurumAdi=" & cmbKurumAdi & "&cmbBransAdi=" & cmbBransAdi

		set newWindow = window.open(m_queryString,"personel_arama","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=760,height=510")
		newWindow.focus()
End Function

Function SubmitKurumIstek(KurumKodu,BransKodu,BransAdi,KurumAdi)
	Dim newWindow
	Dim m_queryString
		m_queryString = "ata00006.asp?KurumKodu=" & KurumKodu & "&BransKodu=" & BransKodu & "&BransAdi=" & BransAdi & "&KurumAdi=" & KurumAdi

		set newWindow = window.open(m_queryString,"kurum_tercih_listesi","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=760,height=510")
		newWindow.focus()
End Function
