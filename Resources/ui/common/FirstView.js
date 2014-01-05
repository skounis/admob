// http://www.youtube.com/watch?v=FCmFBo0wZS8
var Admob = require('ti.admob');
//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);

	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	var publisherIds = {
		android: 'ca-app-pub-3965039466794589/6021268441',
		ios : 'ca-app-pub-3965039466794589/3765806045'
	};
	
	var pId;
	var osname = Ti.Platform.osname;
	 
	if (osname === 'android') {
      pId = publisherIds.android;
    } else {
      pId = publisherIds.ios;
    }
	
	var ab = Admob.createView({
		bottom:0, left:0, right: 0,
		height: 50, 
		publisherId : pId,
		testing: 'false'
	});

	self.add(ab);

	return self;
}

module.exports = FirstView;
