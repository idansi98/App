import {useNavigate} from 'react-router-dom';
import LoginPage from './LoginPage';


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
        return (
            <div> We are in !</div>
        )
    }

}
export default ChatPage;