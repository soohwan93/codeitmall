import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm({ initialValue = "" }) {
  const [searchValue, setSearchValue] = useState(initialValue);
  const router = useRouter();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) {
      router.push(`/`);
      return;
    }
    router.push(`/search?q=${searchValue}`);
  };
  return (
    <>
      <div>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input
            className={styles.searchInput}
            placeholder="내용을 입력하세요"
            onChange={handleChange}
            value={searchValue}
          />
          <button className={styles.searchButton}>검색</button>
        </form>
      </div>
    </>
  );
}
