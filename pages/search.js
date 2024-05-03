import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import Head from "next/head";

export async function getServerSideProps(context) {
  const q = context.query["q"];
  const response = await axios.get(`/products/?q=${q}`);
  const products = response.data.results;
  return {
    props: {
      products,
      q,
    },
  };
}

export default function Search({ products, q }) {
  return (
    <>
      <Head>
        <title>{q} 검색결과 - Codeitmall</title>
      </Head>
      <SearchForm initialValue={q} />
      <h1>{q} 검색 결과</h1>
      <ProductList products={products} />
    </>
  );
}
