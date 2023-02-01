// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

console.log( "===========================  OPDRACHT 1 ============================" )

// functie waarbij de email als parameter is ingegeven

function getEmailDomain(email) {

  // Het argument email slaan we op in een variabele zodat er een method kan worden toegepast
  
  const domain = email;

  // testen of de variabele de email ontvangt

  // console.log(domain);

  // Opslaan van de uitkomst method in een variabele en deze return uit de functie.
  // methode substring = geeft een deel van de string weer volgens opgegeven index tot einde opgegeven index en laat deze weg. 
  // We weten dat @ het index nummer is dat we moeten weten dus passen we indexOf toe. Let op wel +1 want we tellen vanaf 0 met index.
  // domain.indexOf('@') + 1 geeft de juiste positie indexnummer per mailadres weer.
  // Door alleen deze als waarde in het substring object te plaatsen tonen we alleen het laatste deel na de @ teken.
  
  const findIndex = domain.substring(domain.indexOf("@") + 1);
 
  return findIndex

}

const final = getEmailDomain("n.eeken@novi-education.nl");

console.log(final);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

console.log( "===========================  OPDRACHT 2 ============================" )

function typeOfEmail(email) {

  // Het argument email slaan we op in een variabele zodat er een method kan worden toegepast
  
  const domain = email;
  
  const findDomain = domain.substring(domain.indexOf('@') + 1);
  let message = "";
  
  if (findDomain === "novi-education.nl") {
    message = "Dit is een Student met het domein " + "{ " + findDomain + " }" + " in het e-mailadres"
  } else if (findDomain === "novi.nl") {
    message = "Dit is een Medewerker met het domein " + "{ " + findDomain + " }" + " in het e-mailadres"
  } else {
    message = "Dit is een Extern e-mailadres met het domein " + "{ " + findDomain + " }"
  }

 return message

}

const mailChecker = typeOfEmail("a.wiersma@outlook.com");

console.log(mailChecker);


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
// checkEmailValidity("tessmellink@novinl") geeft false - want er staat geen . in

console.log( "===========================  OPDRACHT 3 ============================" )



function checkEmailValidity(email) {

  const domain = email;
  // console.log(domain);

  // gestript email adres na @ teken ivm check op aanwezigheid .nl of .com of .info - niet op vaste positie ivm diverse domeinen. Als er een punt voor de @ wordt gebruikt wordt deze nu genegeerd.
 
  const emailStripped = domain.substring(domain.indexOf("@") + 1);
  // console.log(emailStripped);
  let message = "";

  if (domain.charAt(domain.indexOf("@")) !== "@" || 
      domain.charAt(domain.indexOf(",")) === ",")  {
    
    message = "false";

  } else if (domain.endsWith(".") ||
             emailStripped.charAt(emailStripped.indexOf(".")) !== ".") {
    
    message = "false";
    

  }  else {

    message = "true";

  }

  return message;

}

const validator = checkEmailValidity("tess.mellink@novi.info");


console.log(validator);
