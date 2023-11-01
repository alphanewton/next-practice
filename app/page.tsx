"use client ";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import HeavyComponent from "./components/HeavyComponent";

export default function Home() {
  const session = getServerSession(authOptions);
  return (
    <main>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <Link href="/users">Users</Link>
      <ProductCard />
      <HeavyComponent />
    </main>
  );
}
