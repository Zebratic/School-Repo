# Lommeregner

**Skrevet af:**  Alexander Molberg Christiansen

**Vejleder:**     Christian Rigo Brinkmann Poulsen

3.G HTXVX

---

# Express Server

Hjemmesiden styres af en Node.js Express-server, som fungerer som baggrundsserveren til lommeregneren. Denne server håndterer forespørgsler og leverer de filer der er nødvendigt for at lommeregneren kan loades lokalt på brugerens browser.

# Brugergrænseflade

Der er blevet taget meget inspiration fra IOS lommeregneren til udviklingen af denne brugergrænseflade.

Der er også brugt et sort-rød farve tema som går igen over hele brugergrænsefladen.

# Klassediagram og forklaring

Lommeregneren er en HTML-baseret lommeregner, der kører lokalt på hjemmesiden. Den bruger en JavaScript-fil kaldet "calculator.js", som er en del af assets-mappen på serveren. Denne fil indeholder den logik, der styrer lommeregnerens funktionalitet og beregninger.

Når en bruger interagerer med lommeregneren på hjemmesiden, bliver der kaldt lokale funktioner fra Lommeregner klassens instance. Dette gør at lommeregneren er hurtig, effektiv og fungere også offline. 
