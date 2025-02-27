import { Terminal, TypingAnimation } from "./magicui/terminal";

export default function TerminalDemo({ text }: { text: string }) {
  return (
    <Terminal>
      <TypingAnimation>{text}</TypingAnimation>
    </Terminal>
  );
}
