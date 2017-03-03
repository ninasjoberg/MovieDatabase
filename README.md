# MovieDatabase

Uppgift:
"Denna examinerande uppgift ska fokusera på att utnyttja de designmönster som finns tillgängliga för att strukturera upp sin kod. Samtidigt ska uppgiften hjälpa er att utforska scopes, context samt prototypkedjan. Du ska skapa en applikation (i vanilla JavaScript) som är en filmdatabas. Till applikationen ska du implementera ett eller flera designmönster så som: Contructor Pattern, Prototype Pattern, Module Pattern, Revealing Module Pattern.. Mönstrena är inget som måste separeras från varandra och vilket mönster du använder är upp till dig."



Jag har valt att använda mig av designmönstret Revealing Module Pattern. För denna uppgift valde jag mellan detta och Module pattern då de passa uppgiftens och kodens uppbyggnad. Till skillnad mot object literal patterns behöver man inte skriva order 'this' hela tiden, vilket känns skönt. I ett module pattern kan man skapa privata variabler osv, vilket i många fall är väldigt användbart, så att det inte går att ändra på säg objekt i en lista som inte bör gå att ändra utfrån. Vilket kan ske av misstag. 

Jag tyckter att Revealing Module pattern är lättare att ta till sig då funktionerna skrivs så som jag är van vid: function myFunction(){} till skillnad från Module Pattern där de istället skrivs: myFunction: function (){} Jag irriterade mig också på att man måste separera alla funktioner med ett , i Module pattern vilket jag hela tiden glömmer bort. Detta gör att jag tycker revealing module pattern är enklare att använda sig av. Det känns också logiskt att de funktioner, listor, variabler osv som man vill komma åt utifrån returnas längst ned i "module" och det man vill hålla privata och således inte kan skriva över av misstag utanför module väljer man att inte returnera där. 


Länk till GitHub-repo: https://github.com/ninasjoberg/MovieDatabase
Länk till sidan: https://ninasjoberg.github.io/MovieDatabase/