sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	
	return Controller.extend("budget_tracker.Budget_Tracker.controller.App", {

		onInit: function () {
			
		},
		
		emptyModel: function(){
			
			// in future, replace with recursive function that clears an entire object.
			var newInputs = new JSONModel({
				"product" : null,
				"price": null,
				"source" : null
				
			});
			this.getView().setModel(newInputs, "newInputsID");
			
		},
		onBeforeRendering: function(){
			var oModel = new JSONModel("model/TableItems.json");
			this.getView().setModel(oModel, "TableItemsID");
			// sets properties of newInputsID model to null.
			this.emptyModel();
		},
		
		onClickAddButton: function(){
			
			var collectedUserInputs = this.getView().getModel("newInputsID").getData();
			var oModel = this.getView().getModel("TableItemsID");
			// we don't ask the user if it should be selected.  It always starts as false.
			collectedUserInputs.selected = false;
			console.log(collectedUserInputs);
			
			oModel.getData().transactions.push(collectedUserInputs);
			console.log(oModel.getData());
			oModel.refresh();  //which will add the new record
			
			this.emptyModel();
			
		},
		
		onClickTrashButton: function(evSource){
			var oModel = this.getView().getModel("TableItemsID")
			var transactionList = oModel.getData().transactions;

			// loop through the transaction list and delete all entries where selected === true
			for(var i = (transactionList.length-1); i>=0; i--){
				var cur = transactionList[i];
				if(cur.selected){
					transactionList.splice(i, 1);
				}
			}
			oModel.refresh();
		}
		
	});
});