import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex items-center gap-10">
          <Link href="/signin" className="p-5 bg-black text-white rounded-2xl">
            Sign-In
          </Link>
          <Link href="/signup" className="p-5 bg-black text-white rounded-2xl">
            Sign-Up
          </Link>
        </div>
      </div>
    </>
  );
}
