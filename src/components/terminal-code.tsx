import { Terminal, TypingAnimation } from "./magicui/terminal";

export default function TerminalCode({ text }: { text: string }) {
  return (
    <Terminal>
      <TypingAnimation>{text}</TypingAnimation>
    </Terminal>
  );
}
