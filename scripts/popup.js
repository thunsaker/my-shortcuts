function init(){
	var options;

	// Google Apps for Your Domain
	if(localStorage["google_apps_url"] != "" && localStorage["google_apps_url"] != null && localStorage["google_apps_url_display"] != "true") {
		document.getElementById("span_google_apps_url").innerHTML = localStorage["google_apps_url"];
		document.getElementById("div_site_wrapper").style.display = 'block';
	}
	else
		document.getElementById("div_site_wrapper").style.display = 'none';

	// Gmail
	options = document.getElementById("div_gmail");
	if(localStorage["gmail"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	options = document.getElementById("div_gmail_new");
	if(localStorage["gmail_new"] == "true")
		options.style.display = 'none';
	else {
		var gmailNewLabel = "New Email";
		if(localStorage["gmail_new_new_window"] == "true")
			gmailNewLabel = "New Email <img src=\"icons/icon-new-window.png\" height=\"12px\">";

		document.getElementById("span_gmail_new").innerHTML = gmailNewLabel;
		options.style.display = 'block';
	}

	options = document.getElementById("div_contacts");
	if(localStorage["contacts"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	options = document.getElementById("div_tasks");
	if(localStorage["tasks"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	options = document.getElementById("div_buzz");
	if(localStorage["buzz"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	// Calendar
	options = document.getElementById("div_calendar");
	if(localStorage["calendar"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	options = document.getElementById("div_calendar_new");
	if(localStorage["calendar_new"] == "true")
		options.style.display = 'none';
	else {
		var calendarNewLabel = "New Event";
		if(localStorage["calendar_new_new_window"] == "true")
			calendarNewLabel = "New Event  <img src=\"icons/icon-new-window.png\" height=\"12px\">";

		document.getElementById("span_calendar_new").innerHTML = calendarNewLabel;
		options.style.display = 'block';
	}

	// Docs
	options = document.getElementById("div_docs");
	if(localStorage["docs"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	options = document.getElementById("div_docs_new_document");
	if(localStorage["docs_new_document"] == "true")
		options.style.display = 'none';
	else {
		options.style.display = 'block';
		if(localStorage["docs_new_document_old_format"] == "true")
			document.getElementById("img_docs_new_document_icon").src = "icons/icon-document-new.png";
		else
			document.getElementById("img_docs_new_document_icon").src = "icons/icon-document-new-format-new.png";
	}

	options = document.getElementById("div_docs_new_spreadsheet");
	if(localStorage["docs_new_spreadsheet"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';
		
	options = document.getElementById("div_docs_new_form");
	if(localStorage["docs_new_form"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';
	
	options = document.getElementById("div_docs_new_drawing");
	if(localStorage["docs_new_drawing"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	options = document.getElementById("div_docs_new_presentation");
	if(localStorage["docs_new_presentation"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';
		
	options = document.getElementById("div_docs_new_from_template");
	if(localStorage["docs_new_from_template"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	// Other options
	options = document.getElementById("div_reader");
	if(localStorage["reader"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	options = document.getElementById("div_voice");
	if(localStorage["voice"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	options = document.getElementById("div_plus");
	if(localStorage["plus"] == "true")
		options.style.display = 'none';
	else
		options.style.display = 'block';

	// Fix the hrs for each section
	if(localStorage["hidehr"] == "false") {
		if(localStorage["gmail"] == "false" || localStorage["gmail_new"] == "false" || localStorage["contacts"] == "false" || localStorage["tasks"] == "false" || localStorage["buzz"] == "false")
			document.getElementById("div_gmail_hr").style.display = 'block';
	
		if(localStorage["calendar"] == "false" || localStorage["calendar_new"] == "false")
			document.getElementById("div_calendar_hr").style.display = 'block';
	
		if(localStorage["docs"] == "false" || localStorage["docs_new_document"] == "false" || localStorage["docs_new_spreadsheet"] == "false" || localStorage["docs_new_presentation"] == "false")
			document.getElementById("div_docs_hr").style.display = 'block';
	
		if(localStorage["reader"] == "false" || localStorage["voice"] == "false" || localStorage["plus"] == "false")
			document.getElementById("div_other_hr").style.display = 'block';
		
		if(localStorage["custom1"] == "true" || localStorage["custom2"] == "true" || localStorage["custom3"] == "true" || localStorage["custom4"] == "true" || localStorage["custom5"] == "true") {
			if(localStorage["custom_location"] == "top")
				document.getElementById("div_custom_hr_top").style.display = 'block';
			else
				document.getElementById("div_custom_hr_bottom").style.display = 'block';
		}
	}

	// Fix font color for themes that change it to white
	document.getElementById("the_body").style.color = 'black';
	
	// Custom links
	var newDivHtml = "";

	// Cycle through the custom links
	for (i=0;i<10;i++) {
		if(localStorage["custom" + i] == "true") {
			newDivHtml += "<div id=\"div_custom" + i + "\" class=\"item\" onclick=\"openLink('custom','" + i + "')\">";
			newDivHtml += "<img src=\"http://www.google.com/s2/favicons?domain=" + localStorage["custom" + i + "_url"].replace("http://", "") + "\">";
			newDivHtml += "<span id=\"span_custom" + i + "\">" + localStorage["custom" + i + "_name"] + "</span></div>";
		}
	}

	if(localStorage["custom_location"] == "top")
		document.getElementById("div_custom_links_top").innerHTML = newDivHtml;
	else
		document.getElementById("div_custom_links_bottom").innerHTML = newDivHtml;
}

function openLink(service, page) {
	var url;
	var googleappsurl = "";
	var usegoogleapps = false;
	var newWindow = false;
	var useolddocs = false;
	var usenewcontacts = false;

	if(localStorage["google_apps_url"] != "" && localStorage["google_apps_url"] != null) {
		usegoogleapps = true;
		googleappsurl = "a/" + localStorage["google_apps_url"];
	}
	else {
		usegoogleapps = false;
		googleappsurl = "";
	}
	
	if(localStorage["docs_new_document_old_format"] == "true")
		useolddocs = true;
	else
		useolddocs = false;
		
	if(localStorage["contacts_new_format"] == "true")
		usenewcontacts = true;
	else
		usenewcontacts = false;

	switch(service) {
		case "gmail":
			if(usegoogleapps == true) {
				if(page == "new")
					url = "http://mail.google.com/" + googleappsurl + "/?ui=1&view=cm&fs=1&tf=1";
				else
					url = "http://mail.google.com/" + googleappsurl;
			}
			else {
				if(page == "new")
					url = "http://mail.google.com/mail/?ui=1&view=cm&fs=1&tf=1";
				else
					url = "http://mail.google.com/";
			}
			break;
		case "contacts" :
			if(usegoogleapps == true)
				if(usenewcontacts == true)
					url = "http://mail.google.com/" + googleappsurl + "/u/0/#contacts";
				else
					url = "http://www.google.com/contacts/" + googleappsurl;
			else
				if(usenewcontacts == true)
					url = "http://mail.google.com/mail/u/0/#contacts";
				else
					url = "http://www.google.com/contacts/";
			break;
		case "calendar" :
			if(usegoogleapps == true) {
				if(page == "new")
					url = "http://www.google.com/calendar/" + googleappsurl + "/event?ctext=&action=TEMPLATE&pprop=HowCreated:QUICKADD";
				else
					url = "http://calendar.google.com/" + googleappsurl;
			}
			else {
				if(page == "new")
					url = "http://www.google.com/calendar/event?ctext=&action=TEMPLATE&pprop=HowCreated:QUICKADD";
				else
					url = "http://calendar.google.com";
			}
			break;
		case "docs" :
			switch(page) {
				case "newDocument" :
					if(usegoogleapps == true) {
						if(useolddocs == true)
							url = "http://docs.google.com/" + googleappsurl + "/DocAction?action=newdoc&hl=en";
						else
							url = "http://docs.google.com/" + googleappsurl + "/document/create";
					} else {
						if(useolddocs == true)
							url = "http://docs.google.com/DocAction?action=newdoc&hl=en";
						else
							url = "http://docs.google.com/document/create";
					}
					
					break;
				case "newSpreadsheet" :
					if(usegoogleapps == true)
						url = "http://spreadsheets.google.com/" + googleappsurl + "/ccc?new=true";
					else
						url = "http://spreadsheets.google.com/ccc?new=true";
					break;
				case "newForm" :
					if(usegoogleapps == true)
						url = "http://spreadsheets.google.com/" + googleappsurl + "/newform?hl=en";
					else
						url = "http://spreadsheets.google.com/newform?hl=en";
					break;
				case "newDrawing" :
					if(usegoogleapps == true)
						url = "http://docs.google.com/" + googleappsurl + "/drawings/create";
					else
						url = "http://docs.google.com/drawings/create";
					break;
				case "newPresentation" :
					if(usegoogleapps == true)
						url = "http://docs.google.com/" + googleappsurl + "/?action=new_presentation";
					else
						url = "http://docs.google.com/?action=new_presentation";
					break;
				case "newFromTemplate" :
					if(usegoogleapps == true)
						url = "http://docs.google.com/" + googleappsurl + "/templates?hl=en";
					else
						url = "http://docs.google.com/templates?hl=en";
					break;
				default :
					if(usegoogleapps == true)
						url = "http://docs.google.com/" + googleappsurl;
					else
						url = "http://docs.google.com";
					break;
			}
			break;
		case "tasks" :
			if(usegoogleapps == true)
				url = "http://mail.google.com/tasks/" + googleappsurl + "/canvas?pli=1"
			else
				url = "http://mail.google.com/tasks/canvas?pli=1";
			break;
		case "buzz" :
			/*if(usegoogleapps == true)
				url = "http://mail.google.com/tasks/canvas?pli=1/" + googleappsurl;
			else*/
			url = "https://mail.google.com/mail/#buzz";
			break;
		case "reader" :
			url = "http://reader.google.com/";
			break;
		case "voice" :
			url = "http://voice.google.com/";
			break;
		case "plus" :
			url = "http://plus.google.com/";
			break;
		case "site" :
			if(localStorage["google_apps_url"] != "" && localStorage["google_apps_url"] != null)
				url = "http://" + localStorage["google_apps_url"];
			break;
		case "options" :
			url = "options.html";
			break;
		case "custom" :
			url = localStorage["custom" + page + "_url"];
			break;
			/*
			switch(page) {
				case "1" :
					url = localStorage["custom1_url"];
					break;
				case "2" :
					url = localStorage["custom2_url"];
					break;
				case "3" :
					url = localStorage["custom3_url"];
					break;
				case "4" :
					url = localStorage["custom4_url"];
					break;
				case "5" :
					url = localStorage["custom5_url"];
					break;
				default:
					break;
			}
			*/
		default:
			break;
	}

	if(url != "") {
		if(service == "gmail" && page == "new" && localStorage["gmail_new_new_window"] == "true")
			chrome.windows.create({ url: url, left: 10, top: 30, width: 650, height: 700 });
		else if(service == "calendar" && page == "new" && localStorage["calendar_new_new_window"] == "true")
			chrome.windows.create({ url: url, left: 10, top: 30, width: 800, height: 600 });
		else {
			if(localStorage["ssl"] == "true") {
				if(service != "reader" && service != "custom")
					window.open(url.replace("http", "https"));
				else
					window.open(url);
			}
			else
				window.open(url);
		}
	}
}