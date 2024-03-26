import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter();
  const { id, q } = router.query;
  return (
    <>
      <h1>Movie 페이지 #{id}</h1>
      <h1>검색내용: {q}</h1>
    </>
  );
}
