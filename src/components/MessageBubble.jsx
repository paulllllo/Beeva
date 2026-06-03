function MessageBubble({ side = 'left' , message }) {
    return (
        <div className={side === "left" ? "flex flex-row gap-2 width-full justify-start h-22 " : "flex flex-row gap-2 width-full justify-end h-22 "}>
            <div className={side === "left" ?  "p-6 border-2 border-gray-300 rounded-xl bg-blue-400 w-[70%] h-full" :  "p-6 border-2 border-gray-300 rounded-xl bg-gray-200 w-[70%] h-full    "} >{message}</div>
        </div>
    )
}

export default MessageBubble;