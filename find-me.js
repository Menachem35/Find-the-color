$(document).ready(function() {
			$('div#Jeremy').on('click', function () 
			{ 
				$('div#Secret-line').css('background', 'red').css('color', 'white');
				$( 'p#SecretColor' ).html( "Red" );

			});
			
			$('div#Greg').on('click', function () 
			{ 
				$('div#Secret-line').css('background', 'green').css('color', 'white');
				$( 'p#SecretColor' ).html( "Green" );

			});
			
			$('div#Patrick').on('click', function () 
			{ 
				$('div#Secret-line').css('background', 'pink').css('color', 'white');
				$( 'p#SecretColor' ).html( "Pink" );

			});
			
			$('button').on('click', function ()
			{
				$('div#Secret-line').css('background', 'white').css('color', 'black');
				$( 'p#SecretColor' ).html( "???" );
			});
			
			var JeremyTimestamp = 1477509774000;
			var currentDateJeremy = new Date(JeremyTimestamp);
			var currentDateJeremy = (currentDateJeremy.getMonth()) + '/' + currentDateJeremy.getDate() + '/' + currentDateJeremy.getFullYear();
			$('p#JeremyDate').append(currentDateJeremy)
			
			var GregTimestamp = 1474658574000;
			var currentDateGreg = new Date(GregTimestamp);
			var currentDateGreg = (currentDateGreg.getMonth()) + '/' + currentDateGreg.getDate() + '/' + currentDateGreg.getFullYear();
			$('p#GregDate').append(currentDateGreg)
			
			var PatrickTimestamp = 1428002688000;
			var currentDatePatrick = new Date(PatrickTimestamp);
			var currentDatePatrick = (currentDatePatrick.getMonth()) + '/' + currentDatePatrick.getDate() + '/' + currentDatePatrick.getFullYear();
			$('p#PatrickDate').append(currentDatePatrick)
			
	
	});
