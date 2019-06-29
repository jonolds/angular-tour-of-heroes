git add .

IF [%1] EQU [] (git commit -m "win") ELSE (git commit -m %1)

git push
