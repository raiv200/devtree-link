import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const messagesClasses={
  container:"pb-56 ",
  box1:"space-y-10 p-9 mr-5 ml-5 max-w-2xl lg:max-w-4xl lg:mx-auto rounded-xl shadow-2xl md bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-500",
  box2:"flex justify-center",
  box3:"text-center text-gray-400 mt-5 font-ibm",
  box3__p:"text-gray-400 dark:text-gray-200 mt-5 font-ibm",
};


function Messages() {
  const MINS_DUARTIONS = 43200;

  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);

  const { data, loading, error } = useMoralisQuery("Messages", (query) =>
    query
      .ascending("createdAt")
      .greaterThan(
        "createdAt",
        new Date(Date.now() - 1000 * 60 * MINS_DUARTIONS)
      ),
      [],
      {
        live: true,
      }
  );

  return (
    <div className={messagesClasses.container}>
      <div className={messagesClasses.box1}>
        {/* Each Message  */}
       {data.map((message) => (
         <Message key ={message.id} message={message} />
       ))}
      </div>

      <div className={messagesClasses.box2}>
        {/* Send Message  */}
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className={messagesClasses.box3}>
        <p className={messagesClasses.box3__p}>You are up to date 🎉.</p>
      </div>
    </div>
  );
}

export default Messages;