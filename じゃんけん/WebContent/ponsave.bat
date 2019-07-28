cd ./
set fname=pon
set fext=.html
set time2=%time: =0%
set time2=%time2::=%
set time2=%time2:~0,6%
copy %fname%%fext% %fname%_%date:/=%_%time2%%fext%
set fext=.js
copy %fname%%fext% %fname%_%date:/=%_%time2%%fext%
set fext=.css
copy %fname%%fext% %fname%_%date:/=%_%time2%%fext%
