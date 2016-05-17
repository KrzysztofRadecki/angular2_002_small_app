## Szkielet aplikacji Angular2

Kurs internetowy dla zielonych programistów we framework'u Angular 2, 
przeprowadzany jest darmowo na stronie internetowej. Kurs zawiera elementy ze znanych narzędzi typu, gulp, bower, jspm.
[http://nepras.pl](http://nepras.pl)

### Wymagania
Do poprawnego korzystania z projektu w systemie Windows, konieczne jest zainstalowanie dwóch programów.

- nodeJS
- Git

### Instalacja
Celem rozpoczęcia korzystania z projektu pobranego z tego repozytorium, wykonujemy następujące czynności.

- klonujemy repozytorium na dysk
~~~
git clone https://github.com/nepras/angular2_001_basic.git master
~~~
- instalujemy oprogramowanie globalne:
~~~
npm install -g gulp
npm install -g jspm
npm install -g bower
~~~
- instalujemy oprogramowanie i narzędzia lokalne, będąc w głównym folderze projektu
~~~
npm install
jspm install
bower install
~~~

### Uruchomienie
Główny plik uruchamiający projekt jest w folderze src\index.html.

Projekt uruchamiamy wykonując polecenie z głównego folderu w wierszu poleceń
~~~
http-server ./src
~~~
Przechodzimy pod adres `http://localhost:8080`
