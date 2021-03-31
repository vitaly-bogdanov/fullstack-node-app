Сначала запускаем монгу:  

sudo docker-compose up --build  
или, если контейнер уже собран - sudo docker-compose up  

Команды:  

npm run server - запустит только api  
npm run client - запустит только фронт  
npm run dev - запустит api и фрон  

БД:  
В рамках MERN  

APP:  

http://localhost:5000  
'/repositories' - вернуть все репозитории  
'/repositories/update' - перезаписать репозитории в бд и вернуть, сбросит таймер  
'/repositories/get-by-id/:id' - получить все репозитории с заданным id(обычно один)  
'/repositories/get-by-name/:name' - получить все репозитории с заданным name(обычно один)  
'/repositories/delete' - очистить бд  

используются все ядра(cluster)  
дочерние воркеры - принимают запросы и имеют соединение с бд, делает запросы к api github, посылает сообщение к родительскому воркеру, для сброса таймера  
родительский воркер - ведет счетчик (20 мин), делает запросы к api github, имеет свое соединение с бд  

FRONT:  
http://localhost:3000  

Работа с cli:  
Запускать Api не нужно для работы с cli, не имеет связь с таймером  

npm run sync - заполняем базу  
npm run getById {нужный id}, id репозиториев, а не id бд с инкрементом  
npm run getByName {name}  
npm run getAll - вывод всех репозиториев  