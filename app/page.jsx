"use client"
import Link from "next/link"
import "./assset/home.css"
export default function Home() {
  return (
    <main className="home">
      <Link href="/login">Connexion</Link>
      <Link href="/signup">Inscription</Link>
    </main>
  )
}
