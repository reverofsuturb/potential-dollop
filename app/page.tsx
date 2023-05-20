import Image from "next/image";
import Header from "./Header";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function Home() {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
}
