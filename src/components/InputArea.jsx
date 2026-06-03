function InputArea() {
    return (
        <div className="input-area flex flex-row gap-2">
            <input className="width-full h-10 border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Type your message here..." />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
        </div>
    )
}

export default InputArea;