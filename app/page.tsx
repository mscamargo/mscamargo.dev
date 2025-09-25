import Image from "next/image";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/profile1.jpg"
          alt="Profile Picture"
          width={400}
          height={400}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Marcos Camargo</h1>
          <p className="py-6">
            webdev @ <a href="https://barecode.io">barecode.io</a>
          </p>
          <button className="btn btn-info">LinkeIn</button>
          <button className="btn btn-neutral">GitHub</button>
          <button className="btn btn-error">YouTube</button>
        </div>
      </div>
    </div>
  );
}
