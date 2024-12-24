import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <h2 className="text-2xl font-bold mb-4">Not Found</h2>
        <span className="mb-4">
          죄송합니다. 요청하신 페이지를 찾을 수 없습니다.
        </span>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
