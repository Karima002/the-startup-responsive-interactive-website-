# Milledoni

## Inleiding
### Over Milledoni
[Milledoni]([URL](https://milledoni.nl/)) Het idee van Milledoni is ontstaan uit de passie voor cadeaus. In Nederland is het kopen van een cadeau meer een last, terwijl het in andere landen een teken van liefde is. Milledoni is een platform voor mensen die echt willen nadenken over welk cadeau ze willen halen. De naam is ontstaan omdat het in het Italiaans duizend cadeau’s betekent.

### Probleem
De website in zijn algeheel was verouderd. De layout paste niet bij hetgeen de ondernemer voor ogen ziet voor Milledoni.


### Oplossing
De nieuwe Milledoni is gebaseerd op AI. Er zal een zoekfunctie komen dat leidt tot een chat met AI. Uit die chat zullen resultaten uitkomen voor cadeau ideeën gebaseerd op de persoon aan wie het cadeau gegeven wordt.

Link naar de [live website](https://karima002.github.io/the-startup-responsive-interactive-website-/)


## Beschrijving

### Mobile first
De website is gebouwd vanuit het mobile first principe. Het mobile-first principe is een manier voor webdesign waarbij het ontwerp begint met de kleinste schermen (zoals smartphones) en vervolgens wordt opgeschaald naar grotere schermformaten (zoals tablets en desktops). Daarbij begin je met het bouwen van een HTML prototype waarbij je de volledige website bouwt met alleen HTML.
![image](https://github.com/user-attachments/assets/b3bc2bb8-851d-4011-af0f-2dfab359a60d)

Vanuit mijn HTML prototype heb ik de huisstijl toegepast met CSS. Vervolgens ben ik aan de slag gegaan met het bepalen van verschillende breakpoints om mijn website responsive te maken. De pagina bestaat uit 4 typen layouts: s, m, l, xl.
![image](https://github.com/user-attachments/assets/e89b94e0-299f-408a-a840-ad786e01e5af)

Wanneer de breakpoint zijn bepaald, media queries zijn gebruikt voor de responsiveness en de huisstijl is toegepast in CSS ziet de website er als volgt uit:
https://github.com/user-attachments/assets/bd040f68-c6f1-44e4-8c95-a552b969fc45

### Ontwerpkeuzes

#### Interactie Chat
Voor het bouwen van de chat interactie heb ik gebruik gemaakt van de [Exaggeration Disney](https://medium.com/@ruthiran_b/disneys-motion-principles-in-designing-interface-animations-9ac7707a2b43) principe. Zodra je op je chatknop klikt moet je aandacht daarop worden gevestigd. Dit heb ik proberen te bewerkstelligen door de chat te laten openen met een translation vanuit beneden. Na het openen van de chat komt er een sluit button tevoorschijn waardoor de gebruiker de chat kan sluiten (feedforward). De placeholder 'i'm looking for' is ook een vorm van feedforward. De gebruiker weet dan dat hij daar zijn cadeau input moet typen.


https://github.com/user-attachments/assets/ab0409b9-07fd-420e-9379-f96eec4fc024



Ook heb ik door de label in de chat-icoon feedforward toegepast. In het design was de chat icoon als volgt ontworpen:  
![image](https://github.com/user-attachments/assets/86b3b79b-e7d0-45f5-b6c0-08695be7ca88)  
Het ontwerp heb ik veranderd door feedforward toe te passen:  
![image](https://github.com/user-attachments/assets/30b2c052-66af-4813-923d-055bdb1275b4)


#### Interactie pop-up
Uit de user test kwam bij alle gebruikers een handeling naar voren: de tester probeerde een cadeau op te slaan maar er gebeurde niks. Dit heb ik opgelost door een pop up te laten verschijnen bij het klikken op de opslaan-button. Bij een hover beweegt de opslaan-button een aantal pixel omhoog op de y-as (feedback). De disney principe die hier is toegepast is [Anticipation](https://medium.com/@ruthiran_b/disneys-motion-principles-in-designing-interface-animations-9ac7707a2b43). Anticipation informeert de kijkers over wat er gaat gebeuren. De gebruiker krijgt daarna een pop up te zien dat de cadeau is opgeslagen in zijn wishlist (feedback). De popup verdwijnt na 3 seconden.

https://github.com/user-attachments/assets/6288d26d-bb5c-4027-b114-90dd767bbb77


#### Hover
Door verschillende effecten te creeren wanneer de gebruiker hovert krijgt de gebruiker feedforward. Zo wordt de tekst underlined bij een hover. Ook gaat de opslaan-button een paar pixels omhoog en verandert de profiel button van kleur.

https://github.com/user-attachments/assets/4ea6e2ff-99cb-41a9-a875-ecda35ef1ff2

## Kenmerken

### [HTML](https://github.com/Karima002/the-startup-responsive-interactive-website-/blob/main/index.html)
De HTML is opgebouwd uit een header, main en footer. De main bevat verschillende sections met daarin verschillende articles (cadeau's). 
https://github.com/Karima002/the-startup-responsive-interactive-website-/blob/acec8cc152bd9e3071b1c4307981ed9b0ec8e974/index.html#L193-L208

### [CSS](https://github.com/Karima002/the-startup-responsive-interactive-website-/blob/main/styles/style.css#L36-L44)
Ik ben te werk gegaan met twee verschillende stylesheets. De eerste stylesheet bevat custum properties die ik heb gebruikt in mijn andere stylesheet. 
https://github.com/Karima002/the-startup-responsive-interactive-website-/blob/acec8cc152bd9e3071b1c4307981ed9b0ec8e974/stylesheet.css#L33-L37

In mijn andere stylesheet heb ik gebruik gemaaakt van nesting. Media queries nest ik in de CSS property die erbij hoort. 
https://github.com/Karima002/the-startup-responsive-interactive-website-/blob/acec8cc152bd9e3071b1c4307981ed9b0ec8e974/styles/style.css#L36-L44

### [Javascript](https://github.com/Karima002/the-startup-responsive-interactive-website-/blob/main/scripts/index.js)
Met javascript heb ik onder andere de pop-up geprogrameerd. Zo komt de pop-up tevoorschijn bij het klikken van de opslaan button en verdwijnt de pop-up na 3 seconden.
https://github.com/Karima002/the-startup-responsive-interactive-website-/blob/acec8cc152bd9e3071b1c4307981ed9b0ec8e974/scripts/index.js#L23-L40


## Ademruimte en inspringen
Voor het inspringen van code gebruik ik een vast aantal spaties. Als er een element hoort bij een vorig element wordt dat element ingesprongen.
https://github.com/Karima002/the-startup-responsive-interactive-website-/blob/ec72ac4545890bc2ce3c9658b0702ba3b4d13f57/index.html#L40-L48

## Nesten van media queries
Voor het maken van een responsive website is het gebruiken van media query's essentieel. Media query's kun je sinds een aantal jaar nesten in CSS selectors. Dit gebruik ik in mijn code om een goed overzicht te behouden. 
https://github.com/Karima002/the-startup-responsive-interactive-website-/blob/ec72ac4545890bc2ce3c9658b0702ba3b4d13f57/styles/style.css#L36-L43

## Volgorde en nesten van CSS selectors
Bij het schrijven van CSS hou ik rekening met de volgorde in HTML. Door het consistence nesten van CSS selectors zorg ik ervoor dat er geen lange CSS ontstaat. 
https://github.com/Karima002/the-startup-responsive-interactive-website-/blob/ec72ac4545890bc2ce3c9658b0702ba3b4d13f57/styles/style.css#L76-L85


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


