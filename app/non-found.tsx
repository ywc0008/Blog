import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
      <Link href="/">메인으로 돌아가기</Link>
    </div>
  );
}
