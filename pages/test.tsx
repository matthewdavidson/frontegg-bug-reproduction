import { useAuth, withSSRSession } from "@frontegg/nextjs";
import Link from "next/link";

export const getServerSideProps = withSSRSession(() => ({ props: {} }));

export default function MyPage() {
  const auth = useAuth();

  return (
    <div>
      <h1>Welcome to NextJS with Frontegg</h1>
      <Link href="/">Click me</Link>
    </div>
  );
}
