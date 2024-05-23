"use client"
import Link from 'next/link';


export default function Home() {

  return (

      <div>
        <h1 className="text-blue-500">I'm blue23</h1>
        <div>hihihi</div>
        <Link href="/category/100/flashcard">
          <span className="text-white">Profile</span>
        </Link>
      </div>
  )
}
