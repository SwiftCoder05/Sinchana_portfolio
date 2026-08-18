import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap" style={{ padding: "5rem 0" }}>
      <p className="kicker">404</p>
      <h1 style={{ margin: "0.8rem 0 1.2rem" }}>This page is not in the index.</h1>
      <Link className="btn btn-primary" href="/">
        Back home
      </Link>
    </section>
  );
}
