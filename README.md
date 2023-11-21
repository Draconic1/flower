1. создать пользователя бд     
  localhost  
  authentication type: Standard !!!!

2. создать БД в воркбенче  
  CREATE DATABASE flower;  
  GRANT ALL PRIVILEGES ON flower.* TO dbuser@'localhost';  

3. запустить бэк  
  запустить в воркбенче database.sql  
 
4. после первого запуска бэка в файле server.js (бэк)  изменить строки:  
  30 строка: .sync({ force: true}) изменить на  .sync({ })    (убрать force: true)  
  удалить 33 строку  initial();   
  иначе БД будет каждый раз пересоздаваться

______________________________

1. админка на бэке  
  npm run mysql-admin  
  http://127.0.0.1:8082/  
  admin  
  QQqq44 

2. пользователь админ на фронтенде:  
  http://localhost:3000/  
  лог: admin  
  пароль: admin  
