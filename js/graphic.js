//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key = "1rRtW3aeEj0N_ao-nqakI4JkNckX2RPxo1kXVPK3kVPA";

//"data" refers to the column name with no spaces and no capitals
	//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [ 
    { "data": "solrbase", "title": "Solr Field" },
    { "data": "origin", "title": "Field Origin" },
    { "data": "modstoplevelelement", "title": "MODS Top Level Element" },
	{ "data": "path", "title": "Elements+Attributes" },
	{ "data": "fulldescriptiondisplay", "title": "Full Description Display" },
	{ "data": "facetlabel", "title": "Facet Label" },
	{ "data": "solrfacetfields", "title": "Facet Field" },
	{ "data": "solrdisplaysearchresultslabel", "title": "Search Results Label" },
	{ "data": "solrdisplaysearchfield", "title": "Search Results Field" },
	{ "data": "sortlabel", "title": "Sort Label" },
	{ "data": "solrsortfield", "title": "Sort Field" },
	{ "data": "advancedsearchlabelone", "title": "Advanced Search Label" },
	{ "data": "advancedsearchsolrfieldone", "title": "Advanced Search Field" },
	{ "data": "advancedsearchlabeltwo", "title": "Secondary Advanced Search Label" },
	{ "data": "advancedsearchsolrfieldtwo", "title": "Secondary Advanced Search Field" },
	{ "data": "advancedsearchlabelthree", "title": "Tertiary Advanced Search Label" },
	{ "data": "advancedsearchsolrfieldthree", "title": "Tertiary Advanced Search Field" }];

$(document).ready(function() {

    function initializeTabletopObject(){
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) { 
            writeTable(data); //call up datatables function
            }, 
        simpleSheet: true,
        debug: false
    });
}

    initializeTabletopObject();

    function writeTable(data){
        //select main div and put a table there
		//use bootstrap css to customize table style: http://getbootstrap.com/css/#tables 
        $('#graphic').html('<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed" id="mySelection"></table>');

        //initilize the DataTable object and put settings in
        $("#mySelection").DataTable({
            "data": data,
            "columns": columns,
            dom: 'B<"dt-buttons">lfrtip',
        buttons: [
        {
            extend: 'copy',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
        {
            extend: 'csv',
            extension: '.csv',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            {
            extend: 'excel',
            extension: '.xlsx',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
                    {
            extend: 'pdf',
            extension: '.pdf',
            orientation: 'landscape',
            download: 'open',
            pageSize: 'A3',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            ],
            "order":[[2, "asc"]], //order on 1st column//
            "pagingType": "full_numbers", //no page numbers
			//uncomment these options to simplify your table
			//"paging": false,
			//"searching": false,
			//"info": false,
		"pageLength": 197,
		"scrollY": "550px",
                //"scrollCollapse": false,
                "scrollX": true,
    		"scrollCollapse": true,
                "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]],
                "language": {
      "infoFiltered": " - filtering from _MAX_ records"},
		"columnDefs": [
       {type: 'non-empty-string', targets: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
       {type: 'non-empty-string', targets: 0}, // define column as non-empty-string type
       { "visible": false, "targets": [1, 6, 8, 10, 12, 13, 14, 15, 16 ]}
    ]
            });

        }      
});

//end of writeTable
//originMODS query
$(document).ready(function() {
    $('button.toggle-originMODS').on('click', function (e) {
        e.preventDefault();
        var table = $('#mySelection').dataTable({
        "order":[[2, "asc"]],
        "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]],
        dom: 'B<"dt-buttons">lfrtip',
        buttons: [
        {
            extend: 'copy',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
        {
            extend: 'csv',
            extension: '.csv',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            {
            extend: 'excel',
            extension: '.xlsx',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
                    {
            extend: 'pdf',
            extension: '.pdf',
            orientation: 'landscape',
            download: 'open',
            pageSize: 'A3',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            ],
        "pageLength": 100,
        "scrollCollapse": true,
        "scrollY": "550px",
        "scrollX": true,
        destroy: true,
       "language": {
      "infoFiltered": " - filtering from _MAX_ records"},
  "searchCols": [
    null,
    { "search": ("^"+"MODS"+"$"), "regex": true,
}
  ],
  "columnDefs": [
       {type: 'non-empty-string', targets: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
       {type: 'non-empty-string', targets: 0} // define column as non-empty-string type
    ]
}); 
});
});
//originRELSEXT query
$(document).ready(function() {
    $('button.toggle-originRELSEXT').on('click', function (e) {
        e.preventDefault();
        var table = $('#mySelection').dataTable({
        "order":[[2, "asc"]],
        dom: 'B<"dt-buttons">lfrtip',
         buttons: [
        {
            extend: 'copy',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
        {
            extend: 'csv',
            extension: '.csv',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            {
            extend: 'excel',
            extension: '.xlsx',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
                    {
            extend: 'pdf',
            extension: '.pdf',
            orientation: 'landscape',
            download: 'open',
            pageSize: 'A3',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            ],
        "scrollY": "550px",
        "scrollX": true,
        "scrollCollapse": true,
        "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]],
        "pageLength": 100,
        destroy: true,
       "language": {
      "infoFiltered": " - filtering from _MAX_ records"},
  "searchCols": [
    null,
    { "search": ("^"+"RELS_EXT"+"$"), "regex": true,
}
  ],
  "columnDefs": [
       {type: 'non-empty-string', targets: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
       {type: 'non-empty-string', targets: 0}, // define column as non-empty-string type
       { "visible": false, "targets": [ 2, 4, 9, 10, 11, 12 ]}
    ]
}); 
});
});
//originFoXML query
$(document).ready(function() {
    $('button.toggle-originFoXML').on('click', function (e) {
        e.preventDefault();
        var table = $('#mySelection').dataTable({
        "order":[[2, "asc"]],
        "scrollY": "550px",
        dom: 'B<"dt-buttons">lfrtip',
         buttons: [
        {
            extend: 'copy',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
        {
            extend: 'csv',
            extension: '.csv',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            {
            extend: 'excel',
            extension: '.xlsx',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
                    {
            extend: 'pdf',
            extension: '.pdf',
            orientation: 'landscape',
            download: 'open',
            pageSize: 'A3',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            ],
        "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]],
        "pageLength": 50,
        "scrollCollapse": true,
        "scrollX": true,
        destroy: true,
       "language": {
      "infoFiltered": " - filtering from _MAX_ records"},
  "searchCols": [
    null,
    { "search": ("^"+"FoXML"+"$"), "regex": true,
}
  ],
  "columnDefs": [
       {type: 'non-empty-string', targets: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
       {type: 'non-empty-string', targets: 0}, // define column as non-empty-string type
       { "visible": false, "targets": [ 2, 4, 5, 6, 7, 8, 11, 12 ]}
    ]
}); 
});
});
//column toggle
$(document).ready(function() {
  $('button.toggle-vis').on('click', function (e) {
       e.preventDefault();
 
        // table
     var table = $('#mySelection').dataTable();
 
        // column
        //var ColNum = $(this).attr('data-column');
        var column = $('#mySelection').dataTable().api().column($(this).attr('data-column'));
        column.visible( ! column.visible() );
 
        // Define
        //var bVis = table.fnSettings().aoColumns[ColNum].bVisible;
//        var bVis = table.settings().table.column[ColNum].visible;
 
        // Toggle
        //table.fnSetColumnVis(ColNum, bVis ? false : true); 
//table.column.visible(! column.visible() );
           
 
  });
});



//toggle all solr
$(document).ready(function() {
    $('button.toggle-solr').on('click', function (e) {
        e.preventDefault();
        var table = $('#mySelection').dataTable({
         "order":[[2, "asc"]], //order on 1st column//
            "pagingType": "full_numbers", //no page numbers
			//uncomment these options to simplify your table
			//"paging": false,
			//"searching": false,
			//"info": false,
		"pageLength": 200,
		dom: 'B<"dt-buttons">lfrtip',
         buttons: [
        {
            extend: 'copy',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
        {
            extend: 'csv',
            extension: '.csv',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            {
            extend: 'excel',
            extension: '.xlsx',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
                    {
            extend: 'pdf',
            extension: '.pdf',
            orientation: 'landscape',
            download: 'open',
            pageSize: 'A3',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            ],
		"scrollCollapse": true,
		destroy: true,
		"scrollY": "550px",
                //"scrollCollapse": false,
                "scrollX": true,
    		"scrollCollapse": true,
                "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]],
                "language": {
      "infoFiltered": " - filtering from _MAX_ records"},
		"columnDefs": [
       {type: 'non-empty-string', targets: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
       {type: 'non-empty-string', targets: 0}, // define column as non-empty-string type
{ "visible": true, "targets": [ 0, 6, 8, 10, 12, 13, 14, 15, 16 ]}
    ]
        });

});
});
//toggle search
$(document).ready(function() {
    $('button.toggle-searchResults').on('click', function (e) {
        e.preventDefault();
        var table = $('#mySelection').dataTable({
        "order":[[7, "asc"]],
        destroy: true,
        "scrollY": "550px",
        dom: 'B<"dt-buttons">lfrtip',
         buttons: [
        {
            extend: 'copy',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
        {
            extend: 'csv',
            extension: '.csv',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            {
            extend: 'excel',
            extension: '.xlsx',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
                    {
            extend: 'pdf',
            extension: '.pdf',
            orientation: 'landscape',
            download: 'open',
            pageSize: 'A3',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            ],
        "scrollCollapse": true,
        "pageLength": 50,
        "scrollX": true,
          "searchCols": [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { "search": ("^.+$"), "regex": true,
}
  ],
      "columnDefs": [
       {type: 'non-empty-string', targets: [ 1, 2, 3, 7, 8]},
       { "visible": false, "targets": [ 0, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16 ]}
    ]
       });

});
});
//toggle sort
$(document).ready(function() {
    $('button.toggle-sortLabel').on('click', function (e) {
        e.preventDefault();
        var table = $('#mySelection').dataTable({
        "order":[[9, "asc"]],
        destroy: true,
        dom: 'B<"dt-buttons">lfrtip',
         buttons: [
        {
            extend: 'copy',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
        {
            extend: 'csv',
            extension: '.csv',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            {
            extend: 'excel',
            extension: '.xlsx',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
                    {
            extend: 'pdf',
            extension: '.pdf',
            orientation: 'landscape',
            download: 'open',
            pageSize: 'A3',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            ],
        "scrollCollapse": true,
        "scrollY": "550px",
        "pageLength": 50,
        "scrollX": true,
          "searchCols": [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { "search": ("^.+$"), "regex": true,
}
  ],
      "columnDefs": [
       {type: 'non-empty-string', targets: [ 1, 2, 3, 9, 10 ]},
       { "visible": false, "targets": [ 0, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16 ]}
       ]
       });
});
});
//toggle facet
$(document).ready(function() {
    $('button.toggle-facet').on('click', function (e) {
        e.preventDefault();
        var table = $('#mySelection').dataTable({
        "order":[[5, "asc"]],
        destroy: true,
        dom: 'B<"dt-buttons">lfrtip',
        buttons: [ 'copy', 'csv', 'excel', 'pdf'],
        "scrollY": "550px",
        "pageLength": 150,
        "scrollX": true,
          "searchCols": [
    null,
    null,
    null,
    null,
    null,
    { "search": ("^.+$"), "regex": true,
}
  ],
      "columnDefs": [
       {type: 'non-empty-string', targets: [ 1, 2, 3, 5, 6 ]},
       { "width": "5%", "targets": [ 1, 2 ]},
       { "width": "20%", "targets": 5 },
       { "visible": false, "targets": [ 0, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]}
    ]
       });
});
});
//toggle advSearch
$(document).ready(function() {
    $('button.toggle-advSearch').on('click', function (e) {
        e.preventDefault();
        var table = $('#mySelection').dataTable({
        "order":[[2, "asc"]],
        destroy: true,
        dom: 'B<"dt-buttons">lfrtip',
         buttons: [
        {
            extend: 'copy',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
        {
            extend: 'csv',
            extension: '.csv',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            {
            extend: 'excel',
            extension: '.xlsx',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
                    {
            extend: 'pdf',
            extension: '.pdf',
            orientation: 'landscape',
            download: 'open',
            pageSize: 'A3',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            ],
        "scrollCollapse": true,
        "scrollY": "550px",
        "pageLength": 50,
        "scrollX": true,
                  "searchCols": [
    null,
    { "search": ("MODS|FULL|OCR"), "regex": true
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { "search": ("^.+$"), "regex": true,
}
  ],
        "scrollX": true,
      "columnDefs": [
       {type: 'non-empty-string', targets: [ 1, 2, 3, 11, 12]},
    { "visible": false, "targets": [ 0, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16 ]}
    ]
       });
});
});
//toggle full description
$(document).ready(function() {
    $('button.toggle-fullDesc').on('click', function (e) {
        e.preventDefault();
        var table = $('#mySelection').dataTable({
        "order":[[4, "asc"]],
        destroy: true,
        "scrollCollapse": true,
        dom: 'B<"dt-buttons">lfrtip',
         buttons: [
        {
            extend: 'copy',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
        {
            extend: 'csv',
            extension: '.csv',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            {
            extend: 'excel',
            extension: '.xlsx',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
                    {
            extend: 'pdf',
            extension: '.pdf',
            orientation: 'landscape',
            download: 'open',
            pageSize: 'A3',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            ],
        "scrollY": "550px",
        "pageLength": 150,
        "scrollX": true,
          "searchCols": [
    null,
    null,
    null,
    null,
    { "search": ("^.+$"), "regex": true,
}
  ],
      "columnDefs": [
       {type: 'non-empty-string', targets: [0, 1, 2, 3, 4 ]},
       { "width": "25%", "targets": 3 },
       { "width": "30%", "targets": 4 },
       { "width": "5%", "targets": [0, 1, 2 ] },
       { "visible": false, "targets": [ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]}
    ]
       });
});
});
//reset table
$(document).ready(function() {
    $('button.resetTable').on('click', function (e) {
        e.preventDefault();
        var table = $('#mySelection').dataTable({
            "order":[[2, "asc"]], //order on 1st column/
		"pageLength": 200,
		destroy: true,
		dom: 'B<"dt-buttons">lfrtip',
         buttons: [
        {
            extend: 'copy',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
        {
            extend: 'csv',
            extension: '.csv',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            {
            extend: 'excel',
            extension: '.xlsx',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
                    {
            extend: 'pdf',
            extension: '.pdf',
            orientation: 'landscape',
            download: 'open',
            pageSize: 'A3',
            exportOptions: { 
            columns: ':visible',
            rows: ':visible'},
            },
            ],
		"scrollY": "550px",
                "scrollX": true,
    		"scrollCollapse": true,
                "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]],
                "language": {
      "infoFiltered": " - filtering from _MAX_ records"},
		"columnDefs": [
       {type: 'non-empty-string', targets: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
       {type: 'non-empty-string', targets: 0}, // define column as non-empty-string type
       { "visible": false, "targets": [1, 6, 8, 10, 12, 13, 14, 15, 16 ]}
    ]
		
});
});
});

//empty field sort to bottom
//jQuery.extend( jQuery.fn.dataTableExt.oSort, {
//    "non-empty-string-asc": function (str1, str2) {
//        if(str1 == "")
//            return 1;
//        if(str2 == "")
//            return -1;
//        return ((str1 < str2) ? -1 : ((str1 > str2) ? 1 : 0));
//    },
 
//    "non-empty-string-desc": function (str1, str2) {
//        if(str1 == "")
//            return 1;
//        if(str2 == "")
//            return -1;
//        return ((str1 < str2) ? 1 : ((str1 > str2) ? -1 : 0));
//    }
//} );

$.extend( $.fn.dataTable.ext.type.order, {
    "non-empty-string-asc": function (str1, str2) {
        if(str1 == "")
            return 1;
        if(str2 == "")
            return -1;
        return ((str1 < str2) ? -1 : ((str1 > str2) ? 1 : 0));
    },
 
    "non-empty-string-desc": function (str1, str2) {
        if(str1 == "")
            return 1;
        if(str2 == "")
            return -1;
        return ((str1 < str2) ? 1 : ((str1 > str2) ? -1 : 0));
    }
} );

    
    
