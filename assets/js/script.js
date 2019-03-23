$( '#middle-nav .nav-tabs a' ).on( 'click', function () {
	$( '#middle-nav .nav-tabs' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

