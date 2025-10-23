// import{useState , useEffect} from 'react'
// import {io , Socket } from "socket.io-client"

// //  connect to socket server 
// const socket :Socket = io("http://localhost:3000",{
//     transports:["websocket"] // unsures websocket is used 
// })
// const  Chat:React.FC=()=> {
//     const [msg, setMsg] = useState("")
//     const [msgs, setMsgs] = useState<String[]>([])
//     useEffect(()=>{
//         // listen for incomming chat msg 
//         socket.on("chat_msg",(msg:string)=>{
//             setMsgs((prev)=>[...prev,msg])
//         })
//         // cleanup on unmount 
//         return ()=>{
//             socket.off("chat_msg") sdf;lksd;lf
//         }
//     } , [])
//     const sendMSG  =()=>{
//         if (msg.trim() !== "" ) {
//             socket.emit("chat_msg", msg) //send the msg to server 
//             setMsg("") 
//         }
//     }
//   return (
//      <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
//       <h2>Simple Chat</h2>
//       <div
//         style={{
//           border: "1px solid #ccc",
//           height: "200px",
//           overflowY: "auto",
//           marginBottom: "10px",
//           padding: "5px",
//         }}
//       >
//         {msgs.map((msg, index) => (
//           <div key={index} style={{ padding: "5px 0" }}>
//             {msg}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={msg}
//         onChange={(e) => setMsg(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && sendMSG()}
//         placeholder="Type a message..."
//         style={{ width: "70%", padding: "5px" }}
//       />
//       <button onClick={sendMSG} style={{ marginLeft: "10px", padding: "5px 10px" }}>
//         Send
//       </button>
//     </div>
//   )
// }

// export default Chat