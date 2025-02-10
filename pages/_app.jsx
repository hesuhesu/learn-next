import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
      <div>
        <nav>
          <Link href="/home">Home</Link> | <Link href="/login">Login</Link>
        </nav>
        <Component {...pageProps}/>
      </div>
  );
}