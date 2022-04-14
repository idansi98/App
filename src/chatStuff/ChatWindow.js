import GreenBackground from "../greenBackground/GreenBackGround";

function ChatWindow() {
    return (
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <h4 id="scrollspyHeading1">First heading</h4>
        <GreenBackground />
        <h4 id="scrollspyHeading2">Second heading</h4>
        <GreenBackground />
        <h4 id="scrollspyHeading3">Third heading</h4>
        <GreenBackground />
        <h4 id="scrollspyHeading4">Fourth heading</h4>
        <GreenBackground />
        <h4 id="scrollspyHeading5">Fifth heading</h4>
        
        <GreenBackground />
        <GreenBackground />
      </div>
    );
}
export default ChatWindow;