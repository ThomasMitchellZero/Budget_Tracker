/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"budget_tracker/Budget_Tracker/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});