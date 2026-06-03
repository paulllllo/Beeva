import InputArea from './InputArea';
import MessageArea from './MessageArea';

function ChatWindow() {
    return (
        <div className="chat-window flex flex-col gap-4">
            <MessageArea />
            <InputArea />
        </div>
    )
}

export default ChatWindow;