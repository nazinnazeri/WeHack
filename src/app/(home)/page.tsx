import Link from "next/link";

export default function Home() {
  return (
    <div className="grid">
      <main className="flex flex-col p-20">
        <div className="text-left py-10">
          <h1 className="text-5xl font-medium text-magenta py-5">More than a memory.</h1>
          <h1 className="text-5xl font-medium text-magenta">A story.</h1>
        </div>
        <div className="min-w-30%">
          <button className="my-5 p-5 border-2 border-foreground rounded-2xl text-center bg-foreground text-background text-2xl hover:bg-background hover:text-foreground transition-all"><Link className="my-5 py-5 bg-magenta" href="/feed">Start Now</Link></button>
        </div>
      </main>
    </div>
  );
}