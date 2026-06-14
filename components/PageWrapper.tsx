"use client";

import ConstellationBg from "./ConstellationBg";
import Nav from "./Nav";
import Ticker from "./Ticker";
import Footer from "./Footer";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ConstellationBg />
      <Nav />
      <Ticker />
      {children}
      <Footer />
    </>
  );
}
