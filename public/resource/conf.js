requirejs.config({
    baseUrl: './resource',
    paths: {
        "Vue" 			: 'lib/vue',
        "VueRouter" 	: "lib/vue-router",
		"Promise" 		: 'lib/bluebird.min',
		"jquery"		: 'lib/jquery.min',
		"store"			: 'lib/store.min',	
		"fastclick"		: 'lib/fastclick.min',		
		"ejs"			: 'lib/ejs.min',				
		"fontawesome" 	: "lib/fontawesome/css/font-awesome.min",
		"ratchet"		: 'lib/ratchet-2.0.1/css/ratchet',
		"Dialog"		: 'lib/artDialog-master/dist/dialog'
    },
	shim: {	
		"ejs" : {
			exports : "ejs"
		},
		"VueRouter" : {
			deps : ["Vue"]
		},
		"Dialog" : {
			deps : ["jquery"],
			exports: "dialog"
		},
		"jquery": {
			deps: [],
			exports: "jquery"
		}
	}
});