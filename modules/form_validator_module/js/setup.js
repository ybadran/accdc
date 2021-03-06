$A.bind(window, 'load', function(){

	// Configure the form fields for the Error Validation Demo

	$A.setFormFields($A.getEl('addressForm'),
					{

					// Configure error handling for Inputs with specific ID attribute values

					// Billing Address1 field
					'b-add1':
									{
									// Set default error text
									errorText: 'Please enter a valid street address.',
									// Configure a validation function to check the field
									validate: function(ev, dc){
										var s = this.value, r = true;

										if (!s){
											r = false;
											// Overwrite the default error text with custom values
											dc.source = 'The street address cannot be blank.';
										}

										else if (s.length < 5){
											r = false;
											dc.source = 'A valid street address is required.';
										}
										// Return true to pass, or false to fail validation
										return r;
									},
									// Optionally choose to hide or show the tooltip visually
									// false is set by default if omitted
									hideError: false,
// Set a class to be toggled when an error is detected
// This will be bound to the dc.triggerObj DOM node, or optionally to the dc.targetObj or dc.classObj DOM node instead if declared.
// 'validateError' is set by default if omitted
									toggleClass: 'validateError',
									// Pass AccDC overrides to change the behavior of the tooltip object when rendered
									// All API properties and methods documented on the Core API tab at WhatSock.com are applicable here.
									overrides:
													{
													// Change the beginning and ending boundary role text for screen reader users
													// 'Error' is set by default if omitted.
													role: 'Error',
// Change the accStart and accEnd properties to change the 'Start' and 'End' keywords, which are part of the boundary text for screen reader users.
// E.G
													accStart: 'Start',
													accEnd: 'End',
													// Change the DOM insertion point to the parent Div element by setting targetObj.
													// The triggering Input field is used by default if omitted
													targetObj: $A.getEl('b-add1').parentNode,
													// Set a node where the toggleClass property value will be toggled when validation fails
													// The triggering Input field or targetObj element is used by default if omitted
													classObj: $A.getEl('b-add1').parentNode.parentNode.parentNode,
													// Manually set the element where visual positioning calculations will be bound to
													posAnchor: $A.getEl('b-add1').parentNode.parentNode.parentNode,
													// Set the tooltip to appear on the left of the posAnchor element
													// If posAnchor is not set, triggerObj or targetObj is used for this purpose instead.
													// 3 is set by default if omitted
													autoPosition: 8,
													// Add an additional offset for spacing
													// 10 is set by default if omitted
													offsetLeft: -10,
													// Set a class for the tooltip container
													// 'errorTooltip' is set by default if omitted
													className: 'errorTooltip',
													// Set proper heading nesting for screen reader users.
													// 3 is set by default if omitted
													ariaLevel: 4
													}
									},

					// Billing City field
					'b-city':
									{
									errorText: 'Please enter a valid City.',
									validate: function(ev, dc){
										// The simplest form of validation
										return this.value ? true : false;
									},
									overrides:
													{
													targetObj: $A.getEl('b-city').parentNode,
													classObj: $A.getEl('b-city').parentNode.parentNode.parentNode,
													posAnchor: $A.getEl('b-city').parentNode.parentNode.parentNode,
													autoPosition: 8,
													offsetLeft: -10,
													ariaLevel: 4
													}
									},

					// Billing State field
					'b-state':
									{
									errorText: 'Please enter a valid State.',
									validate: function(ev, dc){
										return this.value ? true : false;
									},
									overrides:
													{
													targetObj: $A.getEl('b-state').parentNode,
													classObj: $A.getEl('b-state').parentNode.parentNode.parentNode,
													posAnchor: $A.getEl('b-state').parentNode.parentNode.parentNode,
													autoPosition: 8,
													offsetLeft: -10,
													ariaLevel: 4
													}
									},

					// Billing Zipcode field
					'b-zip':
									{
									errorText: 'Please enter a valid Zipcode.',
									validate: function(ev, dc){
										return this.value ? true : false;
									},
									overrides:
													{
													targetObj: $A.getEl('b-zip').parentNode,
													classObj: $A.getEl('b-zip').parentNode.parentNode.parentNode,
													posAnchor: $A.getEl('b-zip').parentNode.parentNode.parentNode,
													autoPosition: 8,
													offsetLeft: -10,
													ariaLevel: 4
													}
									},

					// Shipping Address1 field
					'm-add1':
									{
									errorText: 'Please enter a valid street address.',
									validate: function(ev, dc){
										return this.value ? true : false;
									},
									overrides:
													{
													targetObj: $A.getEl('m-add1').parentNode,
													classObj: $A.getEl('m-add1').parentNode.parentNode.parentNode,
													posAnchor: $A.getEl('m-add1').parentNode.parentNode.parentNode,
													// Set the tooltip to appear on the right of the targetObj element
													autoPosition: 3,
													offsetLeft: 10,
													ariaLevel: 4
													}
									},

					// Shipping City field
					'm-city':
									{
									errorText: 'Please enter a valid City.',
									validate: function(ev, dc){
										return this.value ? true : false;
									},
									overrides:
													{
													targetObj: $A.getEl('m-city').parentNode,
													classObj: $A.getEl('m-city').parentNode.parentNode.parentNode,
													posAnchor: $A.getEl('m-city').parentNode.parentNode.parentNode,
													autoPosition: 3,
													offsetLeft: 10,
													ariaLevel: 4
													}
									},

					// Shipping State field
					'm-state':
									{
									errorText: 'Please enter a valid State.',
									validate: function(ev, dc){
										return this.value ? true : false;
									},
									overrides:
													{
													targetObj: $A.getEl('m-state').parentNode,
													classObj: $A.getEl('m-state').parentNode.parentNode.parentNode,
													posAnchor: $A.getEl('m-state').parentNode.parentNode.parentNode,
													autoPosition: 3,
													offsetLeft: 10,
													ariaLevel: 4
													}
									},

					// Shipping Zipcode field
					'm-zip':
									{
									errorText: 'Please enter a valid Zipcode.',
									validate: function(ev, dc){
										return this.value ? true : false;
									},
									overrides:
													{
													targetObj: $A.getEl('m-zip').parentNode,
													classObj: $A.getEl('m-zip').parentNode.parentNode.parentNode,
													posAnchor: $A.getEl('m-zip').parentNode.parentNode.parentNode,
													autoPosition: 3,
													offsetLeft: 10,
													ariaLevel: 4,
													runAfter: function(dc){
													//alert('test');
													}
													}
									}
					}, function(ev){
		// Optionally do stuff when the form is submitted
		alert('Yay!');
		ev.preventDefault();
	});

	// Configure the form field for the Dynamic Help Tooltip demo

	$A.setFormFields($A.getEl('questionForm'),
					{

					// Configure the Input with id="questionId"
					'questionId':
									{
									// Set default help text
									helpText: 'Would you like a hint? It rymes with "Sarah".',
									validate: function(ev, dc){
										// First check if the field is blank
										if (!this.value){
											dc.source = 'Would you like a hint? It rymes with "Sarah".';
											dc.open();
											return false;
										}
										// Otherwise, check the inputted text against the correct character sequence
										var a = 'terra', s = this.value.toLowerCase(), pos = function(){
											var r = -1;

											for (var i = 0; i < s.length; i++){
												if (s.charAt(i) === a.charAt(i) && s.substring(0, i) === a.substring(0, i))
													r = i;
											}
											return r;
										}();

										// Customize the tooltip based on the values entered
										if (s.length === 1 && pos === -1){
											dc.source = 'Hmmm, it doesn\'t look like you\'re off to a good start.';
											// Now reopen the tooltip so that it renders the new message
											dc.open();
										}

										else if (s.length === 3 && pos === -1){
											dc.source = 'Well, you can keep going if you want, but it won\'t help much.';
											dc.open();
										}

										else if (s.length === 1 && pos === 0){
											dc.source = 'Ah, now you are on the right track!';
											dc.open();
										}

										else if (s.length === 3 && pos < 2){
											dc.source = 'It looks like you\'ve wandered off there a bit...';
											dc.open();
										}

										else if (s.length === 4 && pos === 3){
											dc.source = 'Excellent! You are almost there.';
											dc.open();
										}

										else if (s.length > 5){
											dc.source = 'Wo, hold on there cowboy!';
											dc.open();
										}

										else if (s.length === 5 && s.substring(0) !== a.substring(0)){
											dc.source = 'Ah, nice try with that one...';
											dc.open();
										}

										else if (s.length === 5 && s === a){
											dc.source = 'That\'s correct, you\'ve got it!';

											// Now, only render the confirmation message if previous tooltips are open first.
											// This prevents the tooltip from appearing again when setting focus to the field after it passes validation
											if (dc.loaded)
												dc.open();
											// Then return true to pass validation
											return true;
										}
										// Otherwise, return false if validation fails
										return false;
									},
									// Assign a class to be toggled
									toggleClass: 'passedValidation',
									// Set the above class to be toggled only when validation is true, and not when false
									togglePassed: true,
									overrides:
													{
													// Set a node where the toggleClass property value will be toggled when validation passes
													classObj: $A.getEl('questionId').parentNode,
													// Position the help tooltip on the right of the Input field
													autoPosition: 3,
													offsetLeft: 10,
													className: 'helpTooltip',
													ariaLevel: 3
													}
									}
					});
});