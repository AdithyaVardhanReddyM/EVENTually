import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Landing Page</p>
      <Link href={"/dashboard"}>
        <Button>Sign-In</Button>
      </Link>
    </div>
  );
}
