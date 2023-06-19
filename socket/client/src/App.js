import React, { useEffect } from "react";
import { Socket } from "socket.io-client";
import { io } from "socket.io-client";

function App() {
    useEffect(() => {
        const socket = io("http://localhost:3000");

        return () => {
            // 컴포넌트가 언마운트될 때 소켓 연결을 해제합니다.
            socket.disconnect();
        };
    }, []);

    function sendMessage() {
        Socket.emit("events", { name: "Nest" }, (data) => console.log(data));
        Socket.on("events", (data) => console.log(data));
    }

    return (
        <div>
            <ul id="messages"></ul>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default App;
