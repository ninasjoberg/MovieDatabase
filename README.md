# MovieDatabase

Nina SJöberg, Kurs: JavaScript 2, Nackademin ht16 - vt18


## Uppgift:

"Denna examinerande uppgift ska fokusera på att utnyttja de designmönster som finns tillgängliga för att strukturera upp sin kod. Samtidigt ska uppgiften hjälpa er att utforska scopes, context samt prototypkedjan. Du ska skapa en applikation (i vanilla JavaScript) som är en filmdatabas. Till applikationen ska du implementera ett eller flera designmönster så som: Contructor Pattern, Prototype Pattern, Module Pattern, Revealing Module Pattern.. Mönstrena är inget som måste separeras från varandra och vilket mönster du använder är upp till dig."


## Designmönster

Jag har valt att använda mig av designmönstret Revealing Module Pattern. För denna uppgift valde jag mellan detta och Module pattern då de passa uppgiftens och kodens uppbyggnad. Till skillnad mot object literal patterns behöver man inte skriva order 'this' hela tiden, vilket känns skönt. I ett module pattern kan man skapa privata variabler osv, vilket i många fall är väldigt användbart, så att det inte går att ändra på säg objekt i en lista som inte bör gå att ändra utfrån. Vilket kan ske av misstag. 

Jag tyckter att Revealing Module pattern är lättare att ta till sig då funktionerna skrivs så som jag är van vid: function myFunction(){} till skillnad från Module Pattern där de istället skrivs: myFunction: function (){} Jag irriterade mig också på att man måste separera alla funktioner med ett , i Module pattern vilket jag hela tiden glömmer bort. Detta gör att jag tycker revealing module pattern är enklare att använda sig av. Det känns också logiskt att de funktioner, listor, variabler osv som man vill komma åt utifrån returnas längst ned i "module" och det man vill hålla privata och således inte kan skriva över av misstag utanför module väljer man att inte returnera där. 


## Konstruktor och prototypkedja

Jag har till denna uppgift valt att inte använda mig en av konstruktor. Jag kände inte att behovet fanns då det går precis lika bra att skapa ett nytt movieobjekt med 'object literal' metoden och pusha in det i min movie-lista direkt. 

En konstruktor skulle dock vara en ide att använda om jag på ett effektivt sätt skulle vilja skapa flera movieobjekt med samma egenskaper på samma gång. Om jag framöver skulle vilja utöka movieobjekten med fler egenskaper och då på ett enkelt sätt applicera dessa på alla mina movieobjekt så hade också en konstruktor varit en bra ide att använda.


Länk till GitHub-repo: https://github.com/ninasjoberg/MovieDatabase

Länk till sidan: https://ninasjoberg.github.io/MovieDatabase/