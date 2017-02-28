# MovieDatabase
Denna examinerande uppgift ska fokusera på att utnyttja de designmönster som finns tillgängliga för att strukturera upp sin kod. Samtidigt ska uppgiften hjälpa er att utforska scopes, context samt prototypkedjan.  Uppgift  Du ska skapa en applikation i JavaScript som är en filmdatabas. Till applikationen ska du implementera ett eller flera designmönster så som:  Contructor Pattern Prototype Pattern Module Pattern Revealing Module Pattern Mönstrena är inget som måste separeras från varandra och vilket mönster du använder är upp till dig. 


Jag har valt att använda mig av designmönstret Revealing Module Pattern. För denna uppgift valde jag mellan detta och Module pattern då de passa uppgiftens och kodens uppbyggnad. Jag tyckter att Revealing Module pattern är lättare att ta till sig då funktionerna skrivs så som jag är van vid: function myFunction(){} till skillnad från Module Pattern där de istället skrivs: myFunction: function (){} Jag irriterade mig också på att man måste separera alla funktioner med ett , i Module pattern vilket jag hela tiden glömmer bort. Detta gör att jag tycker revealing module patern är enklare att använda sig av. Det känns också logiskt att de funktioner, listor, variabler osv som man vill komma åt utifrån returnas längst ned i "module" och det man vill hålla privata och således inte kan skriva över av misstag utanför module väljer man att inte returnera där. 



Länk till GitHub-repo: https://github.com/ninasjoberg/MovieDatabase