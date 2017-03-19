function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}
function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Nieznane połączenie';
    states[Connection.ETHERNET] = 'Połączenie Ethernet';
    states[Connection.WIFI]     = 'Połączenia WiFi';
    states[Connection.CELL_3G]  = 'Połączenie z siecią 3G';
    states[Connection.CELL_4G]  = 'Połączenie z siecią 4G';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'Brak połączenia';

		alert('Typ połączenia: ' + states[networkState]);
}

checkConnection();
