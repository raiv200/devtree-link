import { useMoralis } from "react-moralis";
import InMsgAvatar from "./InMsgAvatar";

const messageClassses={
  container:"relative flex items-center space-x-4",
  box1:"flex flex-col items-center justify-center space-y-1 ",
  box1__p:"items-center -bottom-5 text-xs font-semibold",
  box2:"flex space-x-4 rounded-lg p-2",
}

function Message({ message }) {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={` ${messageClassses.container}  ${isUserMessage && "justify-end"}`}
    >
      <div className={` ${messageClassses.box1} ${isUserMessage && "order-last ml-2"}`}>
        <InMsgAvatar username={message.get("username")} forMessageComponent={true}/>
        <p className={` ${messageClassses.box1__p}  ${
          isUserMessage ? "text-rose-100 " : "text-sky-200 "
        }`}
      >
        {message.get("username")}
      </p>
      </div>
      <div className={` ${messageClassses.box2}  ${
          isUserMessage
            ? "rounded-br-none bg-indigo-600"
            : "rounded-bl-none bg-fuchsia-800"
        }`}
      >
        <p className={`${isUserMessage ? 'text-pink-200' : 'text-sky-200'}`}>{message.get("message")}</p>
      </div>
    </div>
  );
}

export default Message;