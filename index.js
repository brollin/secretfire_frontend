
// first param is CSS selector
$('button').click( function () {
    var id = $('#project_id').val();
    console.log(id);

    /*var url =  'http://se.cretfi.re/bentest/api/v1/projects/'+ id*/

    jQuery.get('test.json').done(function (data) {
      $('#budget').val( data.budget );
      $('#title').val( data.description );
      $('#lead_member_id').val( data.lead );
    });
});


