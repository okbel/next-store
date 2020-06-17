import Banner from "../components/trr/Banner";
import Footer from "../components/trr/Footer";
import Header from "../components/trr/Header";
import Main from "../components/trr/Main";

export async function getStaticProps() {
  const menuLinks = [
    "NEW ARRIVALS",
    "DESIGNERS",
    "WOMEN",
    "MEN",
    "JEWELRY",
    "WATCHES",
    "HOME",
    "KIDS",
    "SALE",
  ];

  return {
    props: {
      menuLinks,
    },
  };
}

export default function Home({ menuLinks }) {
  return (
    <>
      <Banner />
      <Header menuLinks={menuLinks} />
      <Main />
      <Footer />
    </>
  );
}
