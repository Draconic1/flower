# Flower shop   

<img src="https://github.com/Draconic1/flower/blob/main/img/start.png" alt="Startpage screenshot" height="80%" width="80%"> 
  
<img src="https://github.com/Draconic1/flower/blob/main/img/bouquets.png" alt="Film about screenshot" height="80%" width="80%"> 
  
<img src="https://github.com/Draconic1/flower/blob/main/img/profile.png" alt="Film about screenshot" height="80%" width="80%"> 

<details><summary>Screenshots of some other pages:</summary> 
<img src="https://github.com/Draconic1/flower/blob/main/img/search.png" alt="Search" height="80%" width="80%"> 
   
<img src="https://github.com/Draconic1/flower/blob/main/img/admin.png" alt="Admin panel" height="80%" width="80%"> 
</details>

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
