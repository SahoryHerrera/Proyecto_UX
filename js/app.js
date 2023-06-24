// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'AppBase',
  	routes: [
		{
		path: '/inicio/',
    	url: 'index.html',
    	name: 'inicio',
  		},
		{
		path: '/crear/',
    	url: 'crear.html',
    	name: 'crear',
  		},
		{
		path: '/iniciar/',
    	url: 'iniciar.html',
    	name: 'iniciar',
  		},
		{
		path: '/olvido/',
    	url: 'olvido.html',
    	name: 'olvido',
  		},
		{
		path: '/reenviar/',
    	url: 'reenviar.html',
    	name: 'reenviar',
  		},
		{
		path: '/homepage/',
    	url: 'homepage.html',
    	name: 'homepage',
  		},
		{
		path: '/buscador/',
    	url: 'buscador.html',
    	name: 'buscador',
  		},
		{
		path: '/sitio/',
    	url: 'sitio.html',
    	name: 'sitio',
  		},
		{
		path: '/reserva_uno/',
    	url: 'reserva_uno.html',
    	name: 'reserva_uno',
  		},
		{
		path: '/reserva_dos/',
    	url: 'reserva_dos.html',
    	name: 'reserva_dos',
  		},
		{
		path: '/reserva_tres/',
    	url: 'reserva_tres.html',
    	name: 'reserva_tres',
  		},
		{
		path: '/reserva_cuatro/',
    	url: 'reserva_cuatro.html',
    	name: 'reserva_cuatro',
  		},
		{
		path: '/reservas/',
    	url: 'reservas.html',
    	name: 'reservas',
  		},
		{
		path: '/favoritos/',
    	url: 'favoritos.html',
    	name: 'favoritos',
  		},
		{
		path: '/resultados/',
    	url: 'resultados.html',
    	name: 'resultados',
  		},
		{
		path: '/filtros/',
    	url: 'filtros.html',
    	name: 'filtros',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		}, 
		{
		path: '/editperfil/',
    	url: 'editperfil.html',
    	name: 'editperfil',
  		},
		{
		path: '/resenas/',
    	url: 'resenas.html',
    	name: 'resenas',
  		}, 
		{
		path: '/ajustes/',
    	url: 'ajustes.html',
    	name: 'ajustes',
  		}, 
		{
		path: '/moneda/',
    	url: 'moneda.html',
    	name: 'moneda',
  		},
		
		
		
	],
	dialog: {
		title: 'AppBase',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});

var ac1 = app.actions.create({
  buttons: [
    {
      text: 'Español',
      bold: true
    },
    {
      text: 'Inglés'
    },
    {
      text: 'Cancelar',
      color: 'red'
    },
  ]
})

$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('!Welcome to AppBase !');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
	
});

$$('.ac-1').on('click', function () {
    ac1.open();
});



