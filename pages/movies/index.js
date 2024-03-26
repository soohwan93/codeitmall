import Link from "next/link";

export default function Movies() {
  return (
    <>
      <h1>Movie 목록</h1>
      <ul>
        <li>
          <Link href={"/movies/1"}>영화 1</Link>
        </li>
        <li>
          <Link href={"/movies/2"}>영화 2</Link>
        </li>
        <li>
          <Link href={"/movies/3"}>영화 3</Link>
        </li>
      </ul>
    </>
  );
}
