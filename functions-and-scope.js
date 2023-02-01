// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// Bepalen aantal studenten cum laude is afgestudeerd
// Hoeveel cijfers in de array 8 of hoger
// Uitkomst opslaan in een variabele

console.log( "===========================  OPDRACHT 1a ============================" )

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

const cumLaudeStudents = [];


// for loop om de totale lengte van de array te bepalen

for (let i = 0; i < grades.length; i++) {
  
  // Als binnen de array cijfers 8 of hoger zijn sla deze op in een nieuwe array. Resultaat kunnen we nu buiten de for loop gebruiken en aanspreken.

  if (grades[i] >= 8) {
    
    const results = grades[i];
    cumLaudeStudents.push(results);

  }
      
}

const outComeGrades = "Dit blok zijn er " + cumLaudeStudents.length + " studenten  Cum Laude afgestudeerd";

console.log(outComeGrades);


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

console.log( "===========================  OPDRACHT 1b ============================" )

// function met als parameter een array
function cumLaude (arr) {

  // argument array wordt opgeslagen in een const zodat we deze kunnen gebruiken in de for loop
  const scoresStudent = arr;
  // dit is een const waarin het resultaat van de for loop wordt opgeslagen. Hierdoor kan deze buiten de scope van de for loop gebruikt worden en kan ik deze met behulp van return buiten de functie gebruiken.
  const finalGrade = [];
  // for loop waarmee de lengte en inhoud wordt bepaald voor de if statement
  for (let i = 0; i < scoresStudent.length; i++) {

    if (scoresStudent[i] >= 8) {
      // resultaat if satement wordt opgeslagen in een const en daarna buiten de scope via push gebruikt in const finalGrade.
      const results = scoresStudent[i];
      finalGrade.push(results);
    }

  }
  // Hiermee return ik het aantal studenten die een cijfer 8 of hoger hebben
  return finalGrade.length;
  
}

// Hiermee spreek ik het resultaat aan en gebruik ik de functie om het aantal te tonen met verschillende arrays.
const outCome = "Dit blok zijn er " + cumLaude(grades) + " studenten Cum Laude afgestudeerd";

console.log(outCome);


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

console.log( "===========================  OPDRACHT 2a ============================" )

// array moeten uitlezen met een for loop
// daarbij het aantal opslaan in een variabele
// de totale som opslaan in een variablel
// gemiddelde bereken met behulp van een rekensom
// totaal aantal cijfers 
// totaal aantal cijfers bij elkaar opgeteld
// gemiddelde is totaal cijfers delen door aantal cijfers

let sumOfGrades = 0;
const totalGrades = grades.length;

for (let i = 0; i < grades.length; i++) {
  
  sumOfGrades += grades[i];
     
}

const average = sumOfGrades / totalGrades;

const outComeAverage = "Het gemiddelde cijfer van dit blok is " + average;

console.log(outComeAverage);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

console.log( "===========================  OPDRACHT 2b ============================" )

function averageGrade(arr) {

  const arrayInput = arr;

  let sumOfGrades = 0;
  const totalGrades = grades.length;

  for (let i = 0; i < arrayInput.length; i++) {
  
  sumOfGrades += grades[i];
     
  }

  const average = sumOfGrades / totalGrades;
  // toFixed() - zorgt voor afronding decimalen. 0 is geen
  let sumDecimal = average.toFixed(2);
  return sumDecimal
}

const averageResult = averageGrade(grades);

const outcomeFunction = "Het gemiddelde cijfer van dit blok is " + averageResult;

console.log(outcomeFunction);


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!




/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

console.log( "===========================  OPDRACHT 3a ============================" )

let gradesExtra = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
// Declareer een variabel en stel deze in op het eerste element van de array. 
let highestGrade = gradesExtra[0];
// De for loop gaat door elk element heen en loopt van 0 t/m de lengte van de array
for (let i = 0; i < gradesExtra.length; i++) {
  
  
  if (highestGrade < gradesExtra[i]) {
    // Controleren of het huidge cijfer in de arry groter is dan het huidge hoogste cijfer. Als dit het geval is wordt het huidige cijfer in de array gezet als het nieuwe hoge cijfer.
    highestGrade = gradesExtra[i];
    
  }
    // Doordat elk element met elkaar wordt vergeleken blijft er uiteindelijk een hoog cijfer over.   
}

console.log("Het hoogst behaalde cijfer is een " + highestGrade);


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.



console.log( "===========================  OPDRACHT 3b ============================" )

function highGrade(arr) {

const gradesChecker = arr;
// Declareer een variabel en stel deze in op het eerste element van de array. 
let highestGrade = gradesChecker[0];
// De for loop gaat door elk element heen en loopt van 0 t/m de lengte van de array
for (let i = 0; i < gradesChecker.length; i++) {
  
  
  if (highestGrade < gradesChecker[i]) {
    // Controleren of het huidge cijfer in de arry groter is dan het huidge hoogste cijfer. Als dit het geval is wordt het huidige cijfer in de array gezet als het nieuwe hoge cijfer.
    highestGrade = gradesChecker[i];
    
  }
    // Doordat elk element met elkaar wordt vergeleken blijft er uiteindelijk een hoog cijfer over.   
}

return highestGrade

}

const finalHigestGrade = "Het hoogst behaalde cijfer is een " + highGrade([6, 4, 5]);
console.log(finalHigestGrade);

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
