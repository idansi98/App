# Marak Teimani API
This is a chatting site co-developed by [Ido Tziony](https://github.com/ghsumhubh) and [Idan Simai](https://github.com/idansi98) as part of the course "89211-Algorithmic Programming II" @ Bar-Illan Univeristy.


## How to Run 
1. Make sure you have MariaDB installed at your machine.
2. Open WebApplication1/ChatWebsiteSolution.sln using Visual Studio.  
3. Open Package Manager Console and execute `Update-Database`.  
4. Run WebApplication1 using VS.  
5. Connect to http://localhost:25565/ via a web browser(If not connected Automatically).  


## How to Use  
We offer various screens which can be navigated using site buttons or can directly be accessed with these addresses:  
- `http://localhost:25565/login`  
- `http://localhost:25565/signup`   
- `http://localhost:25565/chats`    
- `http://localhost:25565/Ratings`    

To show the database, open MySQL Client at your machine, enter the password: 12345678, and then write use webappdb.  
To see the full ratings table - `select * from ratings`.  
To see the full users table - `select * from users`.  
To see the full contacts table - `select * from contacts`.  
To see the full messages table - `select * from messages`.  
The user can expect the normal behavior expected from a chatting website, with the exclusion of media support.  

### Notes for Usage
1. In the contact creation screen, the expected server format is "ADDRESS_WITHOUT_HTTP:PORT", e.g., "localhost:25565".  
2. It is advised to open `http://localhost:25565/api/logout` in order to log out of the current user, since the default session duration is quite long.  

### Available API Routes
- http://localhost:25565/api/logout - GET  (Only in order to hasten the process - for now - even though POST would be more appropriate here)  
- http://localhost:25565/api/self - GET  
- http://localhost:25565/api/signup - POST
- http://localhost:25565/api/contacts - GET/POST  
- http://localhost:25565/api/contacts/CONTACT_ID - GET/PUT/DELETE  
- http://localhost:25565/api/contacts/CONTACT_ID/messages - GET/POST  
- http://localhost:25565/api/contacts/CONTACT_ID/messages/MSG_ID - GET/PUT/DELETE  
- http://localhost:25565/api/invitations - POST  
- http://localhost:25565/api/transfer - POST  
- http://localhost:25565/api/firebase - GET/POST


### Expected Behavior
1. Whenever a user tries to add a contact, if the request cannot be satisfied by either the local server or the contact's server, the contact should not be added to either one. 
2. Any change to a contact and or a message should be reflected in real time - including the editing.  
3. The demo chats are not meant for actual messaging, but only for design showcase, chatting with them might lead to an undefined behavior.  
4. The messages and contacts are saved in a static list, while the rantings are stored in a database, so expect the former to be reset accordingly with every new run.  


## Dependencies  
### Website Side
1.  Jquery   
2.  React  
3.  React-bootstrap   
4.  React-dom   
5.  React-router-dom   
6.  React-scripts   
7.  Web-vitals  
8.  Microsoft SignalR 
### Server Side
1. Microsoft ASP.NET MVC  
2. Entity Framework  
3. Microsoft SignalR 
4. Google FireBase 
