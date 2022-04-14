import { useNavigate } from 'react-router-dom';
import ChatWindow from '../chatStuff/ChatWindow';
import LoginPage from './LoginPage';
import ContactBox from '../typeBoxes/ContactBox';
import Chat from '../classes/chat';
import TextMessage from '../classes/textMessage';
import './ChatPage.css'
import ChatBox from '../typeBoxes/ChatBox';
import UserCollection from '../classes/userCollection';
import User from '../classes/user';


function ChatPage() {
  const navigate = useNavigate();
  if (global.token === 0) {
    navigate('/login');
    return (
      <LoginPage />
    );
  } else {
    console.log(global.currentUser);
    return (
      <>
      
        <div className="back-container">        
          <div className="container-fluid front-container">
            <div className="back-top" />
            <div className="back-main" />
          </div>
          <div className="container front-container1">
            {/*The top row of the chat*/}
            <div className="row chat-top" id = "Upper">
              <div className="col-sm-4 border-right border-secondary">
                <img
                  src="/IMG-8479.PNG"
                  alt=""
                  className="profile-image rounded-circle"
                />
                {/*The three left buttons*/}
                <span className="float-right mt-2">
                  {/*The left button*/}
                  <button type="button" class="btn btn-light" id = "AddContact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
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
                  </button>
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
              <ContactBox chats={global.currentUser.chats} />
              <div className="col-sm-8 message-area">
                <ChatBox />
                <div className="row message-box p-3" id = "Lower">
                  {/*The lower row*/}
                  <div className="col-sm-2 mt-2">
                    {/*The left emoji*/}
                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownAttach" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                      </svg>
                    </button>

                    <ul className="dropdown-menu" aria-labelledby="dropdownAttach" id = "UL">
                    <div id = "WRAP">
                      <li><a className="dropdown-item" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={20}
                          fill="currentColor"
                          className="bi bi-camera"
                          viewBox="0 0 16 16" >
                          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg>
                      </a>

                        <a className="dropdown-item" href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
                            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </a>
                        

                        <a className="dropdown-item" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-mic"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                          </svg>

                        </a>
                      </li>
                      </div>
                    </ul>
                    
                  </div>
                  {/*The message form*/}
                  <div className="col-sm-8">
                    <form action="">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Write message..."
                        id = "Form"
                      />
                    </form>
                  </div>

                  {/*The sent button*/}
                  <div className="col-sm-2 mt-1" >
                  <button type="button" className="btn btn-info" id = "Send">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={16}
                      fill="currentColor"
                      className="bi bi-send"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg></button>

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