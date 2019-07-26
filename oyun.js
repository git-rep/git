/* ---------- View ---------- */
const view = {
	showMessage: function(msg){
		document.getElementById("mesaj").innerHTML = msg;
	},
	showShipOrAsteroid: function(id,veziyyet){
		let xana = document.getElementById(id);

		let klas = (veziyyet) ? "dolu" : "bosh";
		xana.setAttribute("class", klas);
	}
};

/* ------- Controller ------- */
const controller = {
	atishEle: function(id){
		let veziyyet = model.xanaYoxla(id);
		let txt = model.shot(veziyyet);
		view.showMessage(txt);
		view.showShipOrAsteroid(id,veziyyet);
	}
};

/* --------- Model ---------- */
const model = {
	n: 8,
	gemiler: [
		{yer:[11,12,13],vez:[0,0,0]},
		{yer:[34,44],vez:[0,0]},
		{yer:[63,64,65,66],vez:[0,0,0,0]}
	],
	xanaYoxla: function(id) {
		for(i=0; i<this.gemiler.length; i++){
			gemi = this.gemiler[i];
			for(j=0; j<gemi.yer.length; j++){
				if(id == gemi.yer[j]) return true;
			}
		}
		return false;
	},
	shot: function(veziyyet) {
		var id = '';
		if(veziyyet) return 'deydi';
		return 'deymedi';
	}
};

/* ----- Initialisation ----- */
(function(){
	const app = {
		init: function(){
			this.main();
			this.event();
		},
		main: function(){
			let n = 8;
			let kod = "";
			for(i=0; i<n; i++){
				kod += "<tr>";
				for(j=0; j<n; j++){
					kod += '<td id="'+i+j+'"></td>';
				}
				kod += "</tr>";
			}
			document.getElementById("oyun").innerHTML = kod;
			document.getElementById("mesaj").innerHTML = "Start";			
		},
		event: function(){
			var table = document.getElementById('oyun');
			table.onclick = function(e) {
				id = e.target.id;
				if(e.target.id)
					controller.atishEle(e.target.id);
			}
		}
	}
	
	app.init();
})();