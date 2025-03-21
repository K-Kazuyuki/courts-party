import { useEffect, useState } from "react";
import { Typography, Container } from "@mui/material";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import PageCard from "./components/PageCard";

const Body = () => {
  const [columns, setColumns] = useState("1fr");

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width > 500) {
        const n = Math.floor((width - 100) / 200);
        setColumns(`repeat(${n}, 1fr)`);
      } else {
        setColumns("1fr");
      }
    };

    updateColumns(); // 初期化
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);
  return (
    <Container>
      <Typography variant="h5">
        この Web サイトはテーブルトーク集団最高裁判所の公式 Web サイトです。
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: columns,
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <div style={{ padding: "10px" }}>
          <PageCard
            href="https://jarebon.courts.party"
            imgSrc="/images/books_002.png"
            alt="小説しりとり"
            text="小説しりとり"
          />
        </div>
      </div>
    </Container>
  );
};

export default Body;
