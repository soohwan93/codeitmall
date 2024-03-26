import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import axios from "@/lib/axios";
import Head from "next/head";

export default function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  const getProducts = useCallback(async (query) => {
    const response = await axios.get(`/products/?q=${query}`);
    const result = response.data.results;
    setProducts(result);
  }, []);

  useEffect(() => {
    if (!q) return;
    getProducts(q);
  }, [getProducts, q]);
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
