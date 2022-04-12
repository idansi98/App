import {useNavigate} from 'react-router-dom';
import ChatWindow from '../chatStuff/ChatWindow';
import LoginPage from './LoginPage';
import ContactBox from '../chatStuff/ContactBox';
import Chat from '../classes/chat';
import TextMessage from '../classes/textMessage';
import './ChatPage.css'
import ChatBox from '../chatStuff/ChatBox';


function ChatPage() {
    if (global.token === 0) {
        alert("Please sign in first, you can't fool me! :)")
        const nextURL = '/login';
        const nextTitle = 'Don\'t try to be sneaky!';
        const nextState = { additionalInformation: "Woohoo"};
        window.history.pushState(nextState,nextTitle,nextURL);
        return (
            <LoginPage/>
        );
    } else {
      var chats = [];
      var chat1 =  new Chat("Ido Tziony","/IMG-8479.PNG");
      var chat2 =  new Chat("Idan Simai", "/IMG-8479.PNG");
      chat1.addMessage( new TextMessage("Blabla",true));
      chat2.addMessage( new TextMessage("Blabla2",true));
      chats.push(chat1);
      chats.push(chat2);
        return (
            <>
            <div className="back-container">
            <div className="container-fluid front-container">
              <div className="back-top" />
              <div className="back-main" />
            </div>
            <div className="container front-container1">
            {/*The top row of the chat*/}
              <div className="row chat-top">
                <div className="col-sm-4 border-right border-secondary">
                  <img
                    src="/IMG-8479.PNG"
                    alt=""
                    className="profile-image rounded-circle"
                  />
                {/*The three left buttons*/}
                  <span className="float-right mt-2">
                  {/*The left button*/}
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                        height={22}
                  fill="currentColor"
                  className="bi bi-person-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
                  </span>
                </div>
                
                
                <div className="col-sm-8">
                {/*The contact's profile picture*/}
                  <img
                    src="images/p2.jpg"
                    alt=""
                    className="profile-image rounded-circle"
                  />
                  <span className="ml-2">Rahul Kumar</span>
                  {/*The two right buttons*/}
                  <span className="float-right mt-2">
                    {/*The right button*/}
                    <svg
                    width={22}
                        height={22}
                      viewBox="0 0 16 16"
                      className="bi bi-three-dots-vertical mx-3"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              
              <div className="row">
              <ContactBox chats={chats}/>
                <div className="col-sm-8 message-area">
                  <ChatBox />
                  <div className="row message-box p-3">
                  {/*The lower row*/}
                    <div className="col-sm-2 mt-2">
                    {/*The left emoji*/}
                      <svg
                        width={30}
                        height={40}
                        viewBox="0 0 16 16"
                        className="bi bi-paperclip mx-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
                        />
                      </svg>
                    </div>
                    {/*The message form*/}
                    <div className="col-sm-8">
                      <form action="">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Write message..."
                        />
                      </form>
                    </div>
                    
                    {/*The sent button*/}
                    <div className="col-sm-2 mt-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                        height={22}
                    fill="currentColor"
                    className="bi bi-send"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                  
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
</>
        )
    }

}
export default ChatPage;