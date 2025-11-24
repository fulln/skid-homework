import RequireAiKey from "@/components/guards/RequireAiKey";
import ChatPage from "@/components/pages/ChatPage";

export default function ChatRoute() {
  return (
    <RequireAiKey fallback="/init">
      <ChatPage />
    </RequireAiKey>
  );
}
