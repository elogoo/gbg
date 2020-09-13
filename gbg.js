var foundConsentBump = false;
var consent = {};
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function gbg() {
	while(foundConsentBump === false){
		console.log(foundConsentBump)
		if(document.getElementById("consent-bump") == null){
			await sleep(1000);
		}
		else{
			consent = document.getElementById("consent-bump");
			//foundConsentBump = true;
			consent.remove();
		}
	
	}
}
gbg();



