# Wstęp

Ten program służy do generowania fraz muzycznych. Program jest zdolny do generowania melodii oraz progresji akordów. Program zakłąda aktywne uczestnitwo użytkownika w generowaniu kolejnych pokoleń fraz. Użytkownik ocenia, które frazy mu się podobają co decyduje o cechcach kolejnych pokoleń fraz.

# UI

Panel użytkownika składa się z sekcji z parametram, które może zmieniać przed rozpoczęciem procesu ewolucji oraz sekcji zawierającej frazy. 

## Parametry

``Tempo`` - reguluje tempo fraz (w efekcie prędkość odtwarzania)
``Progression Length`` - reguluje ogólną długość tworzonych progresji
``Population Size`` - reguluje ilość osobników w populacji
``Mutation Chance`` - szansa na wystąpienie losowej mutacji osobnika w kolejnej generacji
``Min. Note Length`` - minimalna długość nut występujących w ramach frazy
``Max. Note Length`` - maksymalna długość nut występujących w ramach frazy
``Jazziness`` - ten parametr steruje poziomem skomplikowania harmonii wewnątrz akordu
``Number of Notes`` - ilość nut, z których budowane są akordy - ustawienie tego parametru na warość ``1`` spowoduje, że generator będzie działał jako generator melodii

Dodatkowo użytkownik ma dostęp do dwóch guzików: ``RESTART`` oraz ``EVOLVE``. 
``RESTART`` - resetuje frazy i wraca do generacji zerowel
``EVOLVE`` - powoduje przejście do kolejnej generacji

## Frazy

Frazy przedstawione są za pomocą zapisu midi. Kliknięcie na frazę spowoduje jej odtworzenie. W dolnym lewym rogu każdego graficznego przedstawienia frazy widnieje ikonka, której kliknięcie powoduje pobranie frazy w formacie midi.