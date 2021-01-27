# Wstęp

Ten program służy do generowania fraz muzycznych. Program jest zdolny do generowania melodii oraz progresji akordów. Program zakłąda aktywne uczestnitwo użytkownika w generowaniu kolejnych pokoleń fraz. Użytkownik ocenia, które frazy mu się podobają co decyduje o cechcach kolejnych pokoleń fraz.

# UI

Panel użytkownika składa się z sekcji z parametram, które może zmieniać przed rozpoczęciem procesu ewolucji oraz sekcji zawierającej frazy. 

### Parametry

``Tempo`` - reguluje tempo fraz (w efekcie prędkość odtwarzania)   
``Progression Length`` - reguluje ogólną długość tworzonych progresji   
``Population Size`` - reguluje ilość osobników w populacji   
``Mutation Chance`` - szansa na wystąpienie losowej mutacji osobnika w kolejnej generacji   
``Min. Note Length`` - minimalna długość nut występujących w ramach frazy   
``Max. Note Length`` - maksymalna długość nut występujących w ramach frazy   
``Jazziness`` - ten parametr steruje poziomem skomplikowania harmonii wewnątrz akordu   
``Number of Notes`` - ilość nut, z których budowane są akordy - ustawienie tego parametru na warość ``1`` spowoduje, że generator będzie działał jako generator melodii   

Dodatkowo użytkownik ma dostęp do dwóch guzików: ``RESTART`` oraz ``EVOLVE``:    
``RESTART`` - resetuje frazy i wraca do generacji zerowej   
``EVOLVE`` - powoduje przejście do kolejnej generacji   

### Frazy

Frazy przedstawione są za pomocą zapisu midi. Kliknięcie na frazę spowoduje jej odtworzenie. W dolnym lewym rogu każdego graficznego przedstawienia frazy widnieje ikonka, której kliknięcie powoduje pobranie frazy w formacie midi.

# Pierwsza generacja

Pierwsza generacja fraz jest generowana w sposób zupełnie losowy. Wpierw generowany jest rytm frazy. Generowanie odbywa się poprzez losowe wybieranie długości nut z predefiniowanej tablicy. Wybór ten jest ograniczoney przez parametry ``Min. Note Length`` oraz ``Max. Note Length``. W wyniku tego procesu powstaje tablica długości, których suma jest równa ``Progression Length``. Następnie dobierana jest skala. Obecnie wspierane są jedynie 12 skal durowych/molowych. Następnie dla każdej długości z tablicy długości wybierana jest bazowa nuta i z niej budowany jest akord. Budowa akordu polega na dobieraniu harmoni według predefiniowanej tabeli wszystkich harmoni durowych oraz molowych. Ilość nut w akordzie jest zależna od parametru ``Number of Notes``, a skomplikowaność harmonii zależna jest od parametru ``Jazziness``. 

# Kolejne generacje

### Ocena

Tworzenie kolejnej generacji rozpoczyna się od oceny fraz przez użytkownika. Ocena to wartość z przedziału od 0 do 100. Każda fraza zaczyna z oceną 10. Ustawienie oceny 0 spowoduje, że fraza nie będzie brała udziału w kreacji kolejnej generacji.

### Selekcja

Populacja nowej generacji jest generowana poprzez krzyżowanie wybranych osobników oraz mutacje. Selekcja osobników do krzyżowania wybierana jest metodą ruletkową.

### Krzyżowanie

Krzyżowanie zaczyna się od uzgodnienia skali. Skala obu rodziców jest sprowadzana do skali pomiędzy oryginalnymi skalami rodziców. Nastepnie następuje tworzenie rytmu potomka. Rytm potomka jest tworzony z początków oraz końców nut/akordów rodziców. Dla każdej długości z nowopowstałego rytmu określana jest pula bazowych nut, które występują w danym przedziale czasowym u rodziców. Z tej puli wybierana jest nuta bazowa dla danej długości z rytmu potomka. Dla tej notu bazowej budowana jest reszta akordów na podobnych zasadach co podczas budowy akordów w pierwszej generacji. Główna różnica polega na tym, że zamiast wybierać nuty z tabeli harmonii, nuty akordu są dobierane ze zbioru nut akordu, które występują w danym przedziale czasowym u rodzica i również bazuję na parametrze ``Jazziness``. 

### Mutacje

