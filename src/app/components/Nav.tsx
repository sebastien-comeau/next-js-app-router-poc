import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex gap-5">
      <Link href="/en">en</Link>
      <Link href="/fr">fr</Link>
    </div>
  );
};

export default Nav;
