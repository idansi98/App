# Marak Teimani
This is a chatting app co-developed by [Ido Tziony](https://github.com/ghsumhubh) and [Idan Simai](https://github.com/idansi98) as part of the course "89211-Algorithmic Programming II" @ Bar-Illan Univeristy.


## How to run  
Type `npm start` in CLI to run.
Open [http://localhost:port](http://localhost:3000) to start the app [^1].


## How to use  
After you opened the app you will be at the login screen. You can switch back and fourth between the login and register screens at any time. 

After a successful login / signup you are treated to the chat page. Current functionalities include:
- Creating a new chat
- Sending a new text message
- Sending a new media message (audio/video/image)
- Searching a chat out of existing chats  

Currently this app supports a wide range of window sizes, for example if the window is horizontally small - the contacts tab will disappear so the user can focus on the current chat without too many menus taking screen real estate.

There exist a guest user for demo purposes that comes with some prebuilt chats:  
username: "Guest", password: "12345"    

Some more usernames that exist:
- 1
- 2
- 3
- 4
- Idan
- Ido
- Alice


## Dependencies  
We used these packages in our project:  
1.  Jquery.  
2.  React. 
3.  React-bootstrap.  
4.  React-dom.  
5.  React-router-dom.  
6.  React-scripts.   
7.  Web-vitals (project started with it automatically)  


[^1]: The default port is 3000, but the command should print the used port to the CLI.
