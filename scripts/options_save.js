// Saves options to localStorage.
function save_options() {
	// Show/hide options
	// Gmail, etc
	var checkBox = document.getElementById("chk_gmail");
	localStorage["gmail"] = checkBox.checked;

	checkBox = document.getElementById("chk_gmail_new");
	localStorage["gmail_new"] = checkBox.checked;
	checkBox = document.getElementById("chk_gmail_new_new_window");
	localStorage["gmail_new_new_window"] = checkBox.checked;

	checkBox = document.getElementById("chk_contacts");
	localStorage["contacts"] = checkBox.checked;
	checkBox = document.getElementById("chk_contacts_new_format");
	localStorage["contacts_new_format"] = checkBox.checked;

	checkBox = document.getElementById("chk_tasks");
	localStorage["tasks"] = checkBox.checked;

	checkBox = document.getElementById("chk_buzz");
	localStorage["buzz"] = checkBox.checked;

	// Calendar
	checkBox = document.getElementById("chk_calendar");
	localStorage["calendar"] = checkBox.checked;

	checkBox = document.getElementById("chk_calendar_new");
	localStorage["calendar_new"] = checkBox.checked;
	checkBox = document.getElementById("chk_calendar_new_new_window");
	localStorage["calendar_new_new_window"] = checkBox.checked;

	// Docs
	checkBox = document.getElementById("chk_docs");
	localStorage["docs"] = checkBox.checked;

	checkBox = document.getElementById("chk_docs_new_document");
	localStorage["docs_new_document"] = checkBox.checked;
	
	checkBox = document.getElementById("chk_docs_new_document_old_format");
	localStorage["docs_new_document_old_format"] = checkBox.checked;

	checkBox = document.getElementById("chk_docs_new_spreadsheet");
	localStorage["docs_new_spreadsheet"] = checkBox.checked;
	
	checkBox = document.getElementById("chk_docs_new_form");
	localStorage["docs_new_form"] = checkBox.checked;
	
	checkBox = document.getElementById("chk_docs_new_drawing");
	localStorage["docs_new_drawing"] = checkBox.checked;

	checkBox = document.getElementById("chk_docs_new_presentation");
	localStorage["docs_new_presentation"] = checkBox.checked;
	
	checkBox = document.getElementById("chk_docs_new_from_template");
	localStorage["docs_new_from_template"] = checkBox.checked;

	// Other Apps
	checkBox = document.getElementById("chk_reader");
	localStorage["reader"] = checkBox.checked;

	checkBox = document.getElementById("chk_voice");
	localStorage["voice"] = checkBox.checked;

	checkBox = document.getElementById("chk_wave");
	localStorage["wave"] = checkBox.checked;

	var googleWaveUrl = document.getElementById("txt_google_wave_url");
	if(googleWaveUrl.value != ""){
		localStorage["google_wave_url"] = googleWaveUrl.value;
	}
	else
		localStorage["google_wave_url"] = "";

	// Google Apps for your domain options
	var googleAppsUrl = document.getElementById("txt_google_apps_url");
	if(googleAppsUrl.value != ""){
		localStorage["google_apps_url"] = googleAppsUrl.value;
	}
	else
		localStorage["google_apps_url"] = "";
	
	checkBox = document.getElementById("chk_google_apps_url");
	localStorage["google_apps_url_display"] = checkBox.checked;

	// Other options
	checkBox = document.getElementById("chk_ssl");
	localStorage["ssl"] = checkBox.checked;
	checkBox = document.getElementById("chk_hr");
	localStorage["hidehr"] = checkBox.checked;

	// Notify user changes have been saved
	var status = document.getElementById("status");
	status.innerHTML = "Saved";
	setTimeout(function() {
			status.innerHTML = "";
		}, 1250
	);

	// Save custom links
	var customUrl = "";
	var customName = "";
	//var customUrls = new Array();

	for (i=0;i<10;i++) {
		var checkBoxId = "chk_custom" + i.toString();
		checkBox = document.getElementById(checkBoxId);
		localStorage["custom" + i] = checkBox.checked;
		customUrl = document.getElementById("txt_custom" + i + "url");
		customName = document.getElementById("txt_custom" + i + "name");
		if(customUrl.value != "") {
			localStorage["custom" + i + "_url"] = customUrl.value;
			localStorage["custom" + i + "_name"] = customName.value;
		}
		else {
			localStorage["custom" + i + "_url"] = "";
			localStorage["custom" + i + "_name"] = "";
		}
	}

	localStorage["custom_location"] = document.getElementById("sel_custom_location").value;
}

// Restores select box state to saved value from localStorage.
function restore_options() {
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);

	// Restore Shortcuts
	document.getElementById("chk_gmail").checked = (localStorage.getItem("gmail") == "true");
	document.getElementById("chk_gmail_new").checked = (localStorage.getItem("gmail_new") == "true");
	document.getElementById("chk_contacts").checked = (localStorage.getItem("contacts") == "true");
	document.getElementById("chk_contacts_new_format").checked = (localStorage.getItem("contacts_new_format") == "true");
	
	document.getElementById("chk_tasks").checked = (localStorage.getItem("tasks") == "true");
	document.getElementById("chk_buzz").checked = (localStorage.getItem("buzz") == "true");

	document.getElementById("chk_calendar").checked = (localStorage.getItem("calendar") == "true");
	document.getElementById("chk_calendar_new").checked = (localStorage.getItem("calendar_new") == "true");

	document.getElementById("chk_docs").checked = (localStorage.getItem("docs") == "true");
	document.getElementById("chk_docs_new_document").checked = (localStorage.getItem("docs_new_document") == "true");
	document.getElementById("chk_docs_new_document_old_format").checked = (localStorage.getItem("docs_new_document_old_format") == "true");
	document.getElementById("chk_docs_new_spreadsheet").checked = (localStorage.getItem("docs_new_spreadsheet") == "true");
	document.getElementById("chk_docs_new_form").checked = (localStorage.getItem("docs_new_form") == "true");
	document.getElementById("chk_docs_new_drawing").checked = (localStorage.getItem("docs_new_drawing") == "true");
	document.getElementById("chk_docs_new_presentation").checked = (localStorage.getItem("docs_new_presentation") == "true");
	document.getElementById("chk_docs_new_from_template").checked = (localStorage.getItem("docs_new_from_template") == "true");

	// Restore Google Apps for Your Domain settings
	document.getElementById("txt_google_apps_url").value = localStorage.getItem("google_apps_url");
	document.getElementById("chk_google_apps_url").value = localStorage.getItem("google_apps_url_display");

	// Restore new window preferences
	document.getElementById("chk_gmail_new_new_window").checked = (localStorage.getItem("gmail_new_new_window") == "true");
	document.getElementById("chk_calendar_new_new_window").checked = (localStorage.getItem("calendar_new_new_window") == "true");

	// Restore other links
	document.getElementById("chk_reader").checked = (localStorage.getItem("reader") == "true");
	document.getElementById("chk_voice").checked = (localStorage.getItem("voice") == "true");
	document.getElementById("chk_wave").checked = (localStorage.getItem("wave") == "true");
	document.getElementById("txt_google_wave_url").value = localStorage.getItem("google_wave_url");
	
	// Restore Custom Links
	document.getElementById("sel_custom_location").value = localStorage.getItem("custom_location");
	
	// For custom link 1-10
	for (i=0;i<10;i++) {
		document.getElementById("chk_custom" + i).checked = (localStorage.getItem("custom" + i) == "true");
		document.getElementById("txt_custom" + i + "url").value = localStorage.getItem("custom" + i + "_url");
		document.getElementById("txt_custom" + i + "name").value = localStorage.getItem("custom" + i + "_name");
	}

	// Restore Other Options
	document.getElementById("chk_ssl").checked = (localStorage.getItem("ssl") == "true");
	document.getElementById("chk_hr").checked = (localStorage.getItem("hidehr") == "true");
}

function clear_apps_url() {
	document.getElementById("txt_google_apps_url").value = "";
	save_options();
}