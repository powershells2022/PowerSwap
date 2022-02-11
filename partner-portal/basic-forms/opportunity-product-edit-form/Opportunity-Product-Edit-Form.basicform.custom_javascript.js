$(document).ready(function () {
 CreateOpportunityProductTypeValidators();
 VerifyOpportunityProductTypeValidators();
});

function setIsDirty(id) {
 if (!id) {
  return;
 }
 var className = "dirty";
 var element = document.getElementById(id);
 if (element == null) {
  return;
 }
 if (!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
  element.className += " " + className;
 }
 if (id == "isproductoverridden") {
  VerifyOpportunityProductTypeValidators();
 }
}

function VerifyOpportunityProductTypeValidators() {
 if (typeof (Page_Validators) == 'undefined') return;
 var tableData = ($('table[data-name="opportunity product information"]'));
 if (tableData) {
  if ($('#isproductoverridden_1').is(':checked')) {
   $(tableData).find("tr:eq(1)").hide();
   $(tableData).find("tr:eq(0)").find("td:eq(1)").show();
   if ($('#ValidationSummaryEntityFormControl_EntityFormView').length) {
    $("#ValidationSummaryEntityFormControl_EntityFormView").hide();
   }
   if ($('#productid').length) {
    $("#productid").closest("td.lookup.form-control-cell").find(".clearlookupfield").hide();
    $("#productid").closest("td.lookup.form-control-cell").find(".clearlookupfield").click();
   }
   if ($('#uomid').length) {
    $("#uomid").closest("td.lookup.form-control-cell").find(".clearlookupfield").click();
    $("#uomid").closest("td.lookup.form-control-cell").find(".clearlookupfield").hide();
   }
   if (typeof (productIdValidator) != 'undefined' && Page_Validators.includes(productIdValidator)) {
    Array.remove(Page_Validators, productIdValidator);
    $("#productid_label").parent().removeClass("required");
   }
   if (typeof (unitValidator) != 'undefined' && Page_Validators.includes(unitValidator)) {
    Array.remove(Page_Validators, unitValidator);
    $("#uomid_label").parent().removeClass("required");
   }
   if (typeof (productDescriptionValidator) != 'undefined' && !(Page_Validators.includes(productDescriptionValidator))) {
    Page_Validators.splice(0, 0, productDescriptionValidator);
    $("#productdescription_label").parent().addClass("required");
   }
  } else {
   $(tableData).find("tr:eq(1)").show();
   $(tableData).find("tr:eq(0)").find("td:eq(1)").hide();
   if ($('#ValidationSummaryEntityFormControl_EntityFormView').length) {
    $("#ValidationSummaryEntityFormControl_EntityFormView").hide();
   }
   if ($('#productdescription').length) {
    $("#productdescription").val('');
   }
   if (typeof (productIdValidator) != 'undefined' && !(Page_Validators.includes(productIdValidator))) {
    Page_Validators.splice(0, 0, productIdValidator);
    $("#productid_label").parent().addClass("required");
   }
   if (typeof (unitValidator) != 'undefined' && !Page_Validators.includes(unitValidator)) {
    Page_Validators.splice(1, 0, unitValidator);
    $("#uomid_label").parent().addClass("required");
   }
   if (typeof (productDescriptionValidator) != 'undefined' && Page_Validators.includes(productDescriptionValidator)) {
    Array.remove(Page_Validators, productDescriptionValidator);
    $("#productdescription_label").parent().removeClass("required");
   }
  }
 }
}

function CreateOpportunityProductTypeValidators() {
 if ($('#productid').length) {
  window.productIdValidator;
  productIdValidator = document.createElement('span');
  productIdValidator.style.display = "none";
  productIdValidator.id = "RequiredFieldValidatorproductid";
  productIdValidator.controltovalidate = "productid";
  productIdValidator.errormessage = "<a id='productidhref' href=\'#productid_label\' onclick=\'javascript:scrollToAndFocus(\"productid_label\",\"productid\"); return false;\'>".concat(window.ResourceManager['Required_Field_Error'].replace("{0}", $("#productid_label").text())).concat(" </a>");
  productIdValidator.initialvalue = "";
  productIdValidator.evaluationfunction = function () {
   var value = $("#productid").val();
   if (value == null || value == "") {
    return false;
   } else {
    return true;
   }
  };
 }

 if ($('#uomid').length) {
  window.unitValidator;
  unitValidator = document.createElement('span');
  unitValidator.style.display = "none";
  unitValidator.id = "RequiredFieldValidatoruomid";
  unitValidator.controltovalidate = "uomid";
  unitValidator.errormessage = "<a id='uomidhref' href=\'#uomid_label\' onclick=\'javascript:scrollToAndFocus(\"#uomid_label\",\"uomid\"); return false;\'>".concat(window.ResourceManager['Required_Field_Error'].replace("{0}", $("#uomid_label").text())).concat(" </a>");
  unitValidator.initialvalue = "";
  unitValidator.evaluationfunction = function () {
   var value = $("#uomid").val();
   if (value == null || value == "") {
    return false;
   } else {
    return true;
   }
  };
 }

 if ($('#productdescription').length) {
  window.productDescriptionValidator;
  productDescriptionValidator = document.createElement('span');
  productDescriptionValidator.style.display = "none";
  productDescriptionValidator.id = "RequiredFieldValidatorproductdescription";
  productDescriptionValidator.controltovalidate = "productdescription";
  productDescriptionValidator.errormessage = "<a id='productdescriptionhref' href=\'#productdescription_label\' onclick=\'javascript:scrollToAndFocus(\"productdescription_label\",\"productdescription\"); return false;\'>".concat(window.ResourceManager['Required_Field_Error'].replace("{0}", $("#productdescription_label").text())).concat(" </a>");
  productDescriptionValidator.initialvalue = "";
  productDescriptionValidator.evaluationfunction = function () {
   var value = $("#productdescription").val();
   if (value == null || value == "") {
    return false;
   } else {
    return true;
   }
  };
 }
}

if (!Array.prototype.includes) {
 Array.prototype.includes = function (searchElement) {
  'use strict';
  var O = Object(this);
  var len = parseInt(O.length) || 0;
  if (len === 0) {
   return false;
  }
  var n = parseInt(arguments[1]) || 0;
  var k;
  if (n >= 0) {
   k = n;
  } else {
   k = len + n;
   if (k < 0) { k = 0; }
  }
  var currentElement;
  while (k < len) {
   currentElement = O[k];
   if (searchElement === currentElement ||
      (searchElement !== searchElement && currentElement !== currentElement)) {
    return true;
   }
   k++;
  }
  return false;
 };
}