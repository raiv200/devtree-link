import { useState } from "react";
import { useMoralis } from "react-moralis";

const sendMessageClasses={
  form:"flex z-50 absolute  -bottom-36 md:-bottom-36 max-w-2xl rounded-full border-4 border-indigo-400 bg-black opacity-80 w-11/12 px-6 py-4 ",
  form__input:" flex-grow outline-none bg-transparent text-white placeholder-gray-500",
  form__btn:"font-bold font-ibm text-md text-gray-200",
}

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");


  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        () => {
          // there comes the message
        },
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form className={sendMessageClasses.form}>
      <input
        value={message}
        className={sendMessageClasses.form__input}
        placeholder={`Type your message here`}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className={sendMessageClasses.form__btn}
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;