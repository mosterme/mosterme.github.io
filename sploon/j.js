var language=navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage;language=language.substring(0,2); "denesfrit".indexOf(language)>=0||(language="en"); (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-63519733-4','auto');ga('send','pageview');
var stages="//s3-ap-northeast-1.amazonaws.com/splatoon-data.nintendo.net/stages_info.json";
var images="//www.nintendo.co.jp/wiiu/agmj/stage/images/stage/",suffix=".png";

var messages={
	de:{turf:"Revierkampf",rank:"Rangkampf",splat:"Herrschaft",eefffc33ee1956b7b70e250d5835aa67be9152d42bc76aa8874987ebdfc19944:"Dekabahnstation",b8067d2839476ec39072e371b4c59fa85454cdb618515af080ca6080772f3264:"Heilbutt-Hafen","50c01bca5b3117f4f7893df86d2e2d95435dbb1aae1da6831b8e74838859bc7d":"Bohrinsel Nautilus","9a1736540c3fde7e409cb9c7e333441157d88dfe8ce92bc6aafcb9f79c56cb3d":"Punkasius-Skatepark",d7bf0ca4466e980f994ef7b32faeb71d80611a28c5b9feef84a00e3c4c9d7bc1:"Kofferfisch-Lager","8c69b7c9a81369b5cfd22adbf41c13a8df01969ff3d0e531a8bcb042156bc549":"Arowana-Center",c52a7ab7202a576ee18d94be687d97190e90fdcc25fc4b1591c1a8e0c1c299a5:"Tümmlerkuppel","1ac0981d03c18576d9517f40461b66a472168a8f14f6a8714142af9805df7b8c":"Blauflossen-Depot"},
	en:{turf:"Turf War",rank:"Ranked Battle",splat:"Splat Zones",eefffc33ee1956b7b70e250d5835aa67be9152d42bc76aa8874987ebdfc19944:"Urchin Underpass",b8067d2839476ec39072e371b4c59fa85454cdb618515af080ca6080772f3264:"Port Mackerel","50c01bca5b3117f4f7893df86d2e2d95435dbb1aae1da6831b8e74838859bc7d":"Saltspray Rig","9a1736540c3fde7e409cb9c7e333441157d88dfe8ce92bc6aafcb9f79c56cb3d":"Blackbelly Skatepark",d7bf0ca4466e980f994ef7b32faeb71d80611a28c5b9feef84a00e3c4c9d7bc1:"Walleye Warehouse","8c69b7c9a81369b5cfd22adbf41c13a8df01969ff3d0e531a8bcb042156bc549":"Arowana Mall",c52a7ab7202a576ee18d94be687d97190e90fdcc25fc4b1591c1a8e0c1c299a5:"Kelp Dome","1ac0981d03c18576d9517f40461b66a472168a8f14f6a8714142af9805df7b8c":"Bluefin Depot"},
	es:{turf:"estilo territorial",rank:"combate competitivo",splat:"estilo pintazonas",eefffc33ee1956b7b70e250d5835aa67be9152d42bc76aa8874987ebdfc19944:"Parque Viaducto",b8067d2839476ec39072e371b4c59fa85454cdb618515af080ca6080772f3264:"Puerto Jurel","50c01bca5b3117f4f7893df86d2e2d95435dbb1aae1da6831b8e74838859bc7d":"Plataforma Gaviota","9a1736540c3fde7e409cb9c7e333441157d88dfe8ce92bc6aafcb9f79c56cb3d":"Parque Lubina",d7bf0ca4466e980f994ef7b32faeb71d80611a28c5b9feef84a00e3c4c9d7bc1:"Almacén Rodaballo","8c69b7c9a81369b5cfd22adbf41c13a8df01969ff3d0e531a8bcb042156bc549":"Plazuela del Calamar",c52a7ab7202a576ee18d94be687d97190e90fdcc25fc4b1591c1a8e0c1c299a5:"jardín botánico","1ac0981d03c18576d9517f40461b66a472168a8f14f6a8714142af9805df7b8c":"mina costera"},
	fr:{turf:"guerre de territoire",rank:"match pro",splat:"défense de zone",eefffc33ee1956b7b70e250d5835aa67be9152d42bc76aa8874987ebdfc19944:"passage Turbot",b8067d2839476ec39072e371b4c59fa85454cdb618515af080ca6080772f3264:"docks Haddock","50c01bca5b3117f4f7893df86d2e2d95435dbb1aae1da6831b8e74838859bc7d":"station Doucebrise","9a1736540c3fde7e409cb9c7e333441157d88dfe8ce92bc6aafcb9f79c56cb3d":"skatepark Mako",d7bf0ca4466e980f994ef7b32faeb71d80611a28c5b9feef84a00e3c4c9d7bc1:"encrepôt","8c69b7c9a81369b5cfd22adbf41c13a8df01969ff3d0e531a8bcb042156bc549":"centre Arowana",c52a7ab7202a576ee18d94be687d97190e90fdcc25fc4b1591c1a8e0c1c299a5:"serre Goémon","1ac0981d03c18576d9517f40461b66a472168a8f14f6a8714142af9805df7b8c":"mine marine"},
	it:{turf:"mischie mollusche",rank:"Partita pro",splat:"Zona splat",eefffc33ee1956b7b70e250d5835aa67be9152d42bc76aa8874987ebdfc19944:"Periferia urbana",b8067d2839476ec39072e371b4c59fa85454cdb618515af080ca6080772f3264:"Porto Polpo","50c01bca5b3117f4f7893df86d2e2d95435dbb1aae1da6831b8e74838859bc7d":"Raffineria","9a1736540c3fde7e409cb9c7e333441157d88dfe8ce92bc6aafcb9f79c56cb3d":"Pista Polposkate",d7bf0ca4466e980f994ef7b32faeb71d80611a28c5b9feef84a00e3c4c9d7bc1:"Magazzino","8c69b7c9a81369b5cfd22adbf41c13a8df01969ff3d0e531a8bcb042156bc549":"Centro commerciale",c52a7ab7202a576ee18d94be687d97190e90fdcc25fc4b1591c1a8e0c1c299a5:"Serra di alghe","1ac0981d03c18576d9517f40461b66a472168a8f14f6a8714142af9805df7b8c":"Molo Mollusco"}
};

function tick(){
	var a=14400-((new Date).getTime()/1e3+7200)%14400|0,
	e=Math.floor(a/3600)%24, c=Math.floor(a/60)%60, f=a%60, b=tack(e,c,f);
	$("time").text(b), document.title='Sploon '+b, a%150===0&&tock()
}

function tock(){
	$.getJSON(stages).done(function(a){
		$("#t1i").attr("src","i/"+a[0].stages[0].id+".png"),
		$("#t2i").attr("src","i/"+a[0].stages[1].id+".png"),
		$("#r1i").attr("src","i/"+a[1].stages[0].id+".png"),
		$("#r2i").attr("src","i/"+a[1].stages[1].id+".png"),
		$("#t1n").text(messages[language][a[0].stages[0].id]),
		$("#t2n").text(messages[language][a[0].stages[1].id]),
		$("#r1n").text(messages[language][a[1].stages[0].id]),
		$("#r2n").text(messages[language][a[1].stages[1].id])
	})
}

function tack(a,e,c){
	var f="0"+a+":"; return 10>e&&(f+="0"),f+=e+":",10>c&&(f+="0"),f+=c
}

$(document).ready(function(){
	$(".turf").text(messages[language].turf),
	$(".rank").text(messages[language].splat),
	setInterval(tick,1e3),tick(),tock()
});