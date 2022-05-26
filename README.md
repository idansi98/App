# Marak Teimani
This is a chatting site co-developed by [Ido Tziony](https://github.com/ghsumhubh) and [Idan Simai](https://github.com/idansi98) as part of the course "89211-Algorithmic Programming II" @ Bar-Illan Univeristy.


## How to Run  
1. Open WebApplication1/ChatWebsiteSolution.sln using Visual Studio.  
2. Open Package Manager Console and execute `Remove-Migration`.  
3. Open SQL Server Object Explorer and remove "OurDB" if it already exists.
4. Open Package Manager Console and execute `Add-Migration Initialize`
5. In the same console, execute `Update-Database`.  
6. Run WebApplication1 using VS.  
7. Connect to https://localhost:25565/ via a web browser.  



## How to Use  
We offer various screens which can be navigated using site buttons or can directly be accessed with these addresses:  
- `https://localhost:25565/login`  
- `https://localhost:25565/signup`   
- `https://localhost:25565/chats`    
- `https://localhost:25565/Ratings`    

The user can expect the normal behavior expected from a chatting website, with the exclusion of media support.


There exists a guest user for demo purposes that comes with some prebuilt chats:  
username: "1", password: "2"    
Note that it has demo chats from FAKE servers, so sending messages there isn't really productive.

For testing purposes we would suggest logging to the following users:  
username: 1, password: 2  
username: 5, password: 6  


### Notes for Usage
1. In the contact creation screen, the expected server format is "ADDRESS_WITHOUT_HTTP:PORT", e.g., "localhost:7100".  
2. It is advised to open `https://localhost:25565/api/logout` in order to log out of the current user, since the default session duration is quite long.  
3. Since all the opened tabs will be considered the same session, in order to run 2 users simultaneously, one can enter the site using a normal browser tab, and enter the site again with a different user, using an incognito tab.  
4. It is advised to not use the attachment button since, as of right now it is not functional.  

### Available API Routes
- https://localhost:25565/api/logout - GET  (Only in order to hasten the process - for now - even though POST would be more appropriate here)  
- https://localhost:25565/api/self - GET  
- https://localhost:25565/api/signup - POST
- https://localhost:25565/api/contacts - GET/POST  
- https://localhost:25565/api/contacts/CONTACT_ID - GET/PUT/DELETE  
- https://localhost:25565/api/contacts/CONTACT_ID/messages - GET/POST  
- https://localhost:25565/api/contacts/CONTACT_ID/messages/MSG_ID - GET/PUT/DELETE  
- https://localhost:25565/api/invitations - POST  
- https://localhost:25565/api/transfer - POST  


### Expected Behavior
1. Whenever a user tries to add a contact, if the request cannot be satisfied by either the local server or the contact's server, the contact should not be added to either one. 
2. Any change to a contact and or a message should be reflected in real time - including the editing.  
3. The demo chats are not meant for actual messaging, but only for design showcase, chatting with them might lead to an undefined behavior.  
4. The messages and contacts are saved in a static list, while the rantings are stored in a database, so expect the former to be reset accordingly with every new run.  


## Dependencies  
### Client Side
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





