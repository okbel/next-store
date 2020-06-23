import Banner from "../../components/examples/trr/Banner";
import Footer from "../../components/examples/trr/Footer";
import Header from "../../components/examples/trr/Header";
import Main from "../../components/examples/trr/Main";

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
