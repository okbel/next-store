import Header from "../../components/examples/common/Header";
import Feed from "../../components/examples/common/Feed";
import Footer from "../../components/examples/common/Footer";
import Banner from "../../components/examples/common/Banner";
import Stats from "../../components/examples/common/Stats";

export default function Index() {
  return (
    <>
      <Banner />
      <main className="container mx-auto relative bg-white px-6npm">
        <Header />
        <Feed />
        <Stats />
      </main>
      <Footer />
    </>
  );
}
