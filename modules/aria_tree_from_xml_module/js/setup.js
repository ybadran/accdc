$A.bind(window, 'load', function(){

	// Declare a tmp variable for tracking setTimeout
	var tmp = null;

	var treeId = $A.setTree(
					{
					path: 'files/tree.xml',
					title: 'Choose Region',
					container: 'div.tree',
					treeTag: 'ul',
					dividerTag: 'li',
					treeClass: 'branch',
					treeItemTag: 'a',
					treeItemClass: 'leaf',
					topClass: 'TreeView',
					bind: 'focus',
					callback: function(ev, dc){
						if (tmp)
							clearTimeout(tmp);
						var i = $A.inArray(this, dc.tree.childNodes), lat = dc.xmlNodes[i].attributes.getNamedItem('lat').value,
							lng = dc.xmlNodes[i].attributes.getNamedItem('lng').value,
							zoom = dc.xmlNodes[i].attributes.getNamedItem('zoom').value;
						// Use setTimeout to prevent process stacking when using the arrow keys to navigate
						tmp = setTimeout(function(){
							// Call the 'set' method in the Google Map AccDC Object using its "id" property
							// Equivalent to : $A.reg['map']
							$A.reg.map.google.set(lat, lng, zoom);
						}, 1000);
					}
					});
});