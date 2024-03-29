﻿function categoryChange(e) {
  var sel_city= ["시/도/군"];
  var sel_Seoul=["서울전체","강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구",
  "동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
  var sel_Gyeonggi = ["경기전체", "가평군","고양시","과천시", "광명시","광주시","구리시","군포시","김포시","남양주시","동두천시",
  "부천시","성남시", "수원시", "시흥시","안산시","안성시","안양시","양주시","양평군","여주시","연천군","오산시","용인시","의왕시",
  "의정부시","이천시","파주시","평택시","포천시","하남시","화성시"];
  var sel_Incheon = ["인천전체", "강화군","계양구","남동구","동구","미추홀구","부평구","서구","연수구","옹진군","중구"];
  var sel_Gangwon = ["강원전체", "강릉시","고성군","동해시","삼척시","속초시","양구군","양양군","영월군","원주시","인제군","정선군",
  "철원군","춘천시","태백시","평창군","홍천군","화천군","횡성군"];
  var sel_Daejeon = ["대전전체","대덕구","동구","서구","유성구","중구"];
  var sel_Sejong = ["세종전체","세종시"];
  var sel_Chungcheongnam = ["충남전체","계룡시","공주시","금산군","논산시","당진시","보령시","부여군","서산시","서천군","아산시",
  "예산군","천안시","청양군","태안군","홍성군"];
  var sel_NorthChungcheong = ["충북전체","괴산군","단양군","보은군","영동군","옥천군","음성군","제천시","증평군","진천군","청주시","충주시"];
  var sel_Busan = ["부산전체","강서구","금정구","기장군","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구",
  "연제구","영도구","중구","해운대구"];
  var sel_Ulsan = ["울산전체","남구","동구","북구","울주군","중구"];
  var sel_Gyeongsangnam = ["경남전체","거제시","거창군","고성군","김해시","남해군","밀양시","사천시","산청군","양산시","의령군","진주시",
  "창녕군","창원시","통영시","하동군","함안군","함양군","합천군"];
  var sel_Gyeongbuk = ["경북전체","경산시","경주시","고령군","구미시","군위군","김천시","문경시","봉화군","상주시","성주군","안동시","영덕군",
  "영양군","영주시","영천시","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군","포항시","북구"];
  var sel_Daegu=["대구전체","남구","달서구","달성군","동구","북구","서구","수성구","중구"];
  var sel_Gwangju = ["광주전체","광산구","남구","동구","북구","서구"];
  
  var sel_Jeonnam = ["전남전체","강진군","고흥군","곡성군","광양시","구례군","나주시","담양군","목포시","무안군","보성군","순천시","신안군",
  "여수시","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
  var sel_Jeonbuk = ["전북전체","고창군","군산시","김제시","남원시","무주군","부안군","순창군","완주군","익산시","임실군","장수군",
  "전주시","정읍시","진안군"];
  var sel_Jeju = ["제주전체","서귀포시","제주시"];


  var target = document.getElementById("reg_select_village");
  if(e.value == "reg_city") var d = sel_city;
  else if(e.value == "서울") var d = sel_Seoul;
  else if(e.value == "경기") var d = sel_Gyeonggi;
  else if(e.value == "인천") var d = sel_Incheon;
  else if(e.value == "강원") var d = sel_Gangwon;
  else if(e.value == "대전") var d = sel_Daejeon;
  else if(e.value == "세종") var d = sel_Sejong;
  else if(e.value == "충남") var d = sel_Chungcheongnam;
  else if(e.value == "충북") var d = sel_NorthChungcheong;
  else if(e.value == "부산") var d = sel_Busan;
  else if(e.value == "울산") var d = sel_Ulsan;
  else if(e.value == "경남") var d = sel_Gyeongsangnam;
  else if(e.value == "경북") var d = sel_Gyeongbuk;
  else if(e.value == "대구") var d = sel_Daegu;
  else if(e.value == "광주") var d = sel_Gwangju;
  else if(e.value == "전남") var d = sel_Jeonnam;
  else if(e.value == "전북") var d = sel_Jeonbuk;
  else if(e.value == "제주") var d = sel_Jeju;

  target.options.length = 0;
 
  for (x in d) {
    var opt = document.createElement("option");
    opt.value = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  } 
}


function categoryChange2(e) {
	  var sel_city= ["시/도/군"];
	  var sel_Seoul=["서울전체","강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구",
	  "동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
	  var sel_Gyeonggi = ["경기전체", "가평군","고양시","과천시", "광명시","광주시","구리시","군포시","김포시","남양주시","동두천시",
	  "부천시","성남시", "수원시", "시흥시","안산시","안성시","안양시","양주시","양평군","여주시","연천군","오산시","용인시","의왕시",
	  "의정부시","이천시","파주시","평택시","포천시","하남시","화성시"];
	  var sel_Incheon = ["인천전체", "강화군","계양구","남동구","동구","미추홀구","부평구","서구","연수구","옹진군","중구"];
	  var sel_Gangwon = ["강원전체", "강릉시","고성군","동해시","삼척시","속초시","양구군","양양군","영월군","원주시","인제군","정선군",
	  "철원군","춘천시","태백시","평창군","홍천군","화천군","횡성군"];
	  var sel_Daejeon = ["대전전체","대덕구","동구","서구","유성구","중구"];
	  var sel_Sejong = ["세종전체","세종시"];
	  var sel_Chungcheongnam = ["충남전체","계룡시","공주시","금산군","논산시","당진시","보령시","부여군","서산시","서천군","아산시",
	  "예산군","천안시","청양군","태안군","홍성군"];
	  var sel_NorthChungcheong = ["충북전체","괴산군","단양군","보은군","영동군","옥천군","음성군","제천시","증평군","진천군","청주시","충주시"];
	  var sel_Busan = ["부산전체","강서구","금정구","기장군","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구",
	  "연제구","영도구","중구","해운대구"];
	  var sel_Ulsan = ["울산전체","남구","동구","북구","울주군","중구"];
	  var sel_Gyeongsangnam = ["경남전체","거제시","거창군","고성군","김해시","남해군","밀양시","사천시","산청군","양산시","의령군","진주시",
	  "창녕군","창원시","통영시","하동군","함안군","함양군","합천군"];
	  var sel_Gyeongbuk = ["경북전체","경산시","경주시","고령군","구미시","군위군","김천시","문경시","봉화군","상주시","성주군","안동시","영덕군",
	  "영양군","영주시","영천시","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군","포항시","북구"];
	  var sel_Daegu=["대구전체","남구","달서구","달성군","동구","북구","서구","수성구","중구"];
	  var sel_Gwangju = ["광주전체","광산구","남구","동구","북구","서구"];
	  
	  var sel_Jeonnam = ["전남전체","강진군","고흥군","곡성군","광양시","구례군","나주시","담양군","목포시","무안군","보성군","순천시","신안군",
	  "여수시","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
	  var sel_Jeonbuk = ["전북전체","고창군","군산시","김제시","남원시","무주군","부안군","순창군","완주군","익산시","임실군","장수군",
	  "전주시","정읍시","진안군"];
	  var sel_Jeju = ["제주전체","서귀포시","제주시"];


	  var target = document.getElementById("reg_select_village");
	  if(e.value == "reg_city") var d = sel_city;
	  else if(e == "서울") var d = sel_Seoul;
	  else if(e== "경기") var d = sel_Gyeonggi;
	  else if(e == "인천") var d = sel_Incheon;
	  else if(e == "강원") var d = sel_Gangwon;
	  else if(e == "대전") var d = sel_Daejeon;
	  else if(e == "세종") var d = sel_Sejong;
	  else if(e == "충남") var d = sel_Chungcheongnam;
	  else if(e == "충북") var d = sel_NorthChungcheong;
	  else if(e == "부산") var d = sel_Busan;
	  else if(e == "울산") var d = sel_Ulsan;
	  else if(e == "경남") var d = sel_Gyeongsangnam;
	  else if(e == "경북") var d = sel_Gyeongbuk;
	  else if(e == "대구") var d = sel_Daegu;
	  else if(e == "광주") var d = sel_Gwangju;
	  else if(e == "전남") var d = sel_Jeonnam;
	  else if(e == "전북") var d = sel_Jeonbuk;
	  else if(e == "제주") var d = sel_Jeju;

	  target.options.length = 0;
	 
	  for (x in d) {
	    var opt = document.createElement("option");
	    opt.value = d[x];
	    opt.innerHTML = d[x];
	    target.appendChild(opt);
	  } 
	}


