import MessageBubble from './MessageBubble';

function MessageArea() {
    return (
        <div className="message-area flex flex-col gap-2 h-full flex-shrink-0">Message Area
        <MessageBubble side="left" message="Hello, how are you?"/>
        <MessageBubble side="right" message="I'm fine, thank you!" />
        <MessageBubble side="left"  message="I'm fine, thank you!" />
        <MessageBubble side="right" message="Hello, how are you?"/>
        </div>
    )
}

export default MessageArea;