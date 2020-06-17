import Header from "../components/common/Header";
import Feed from "../components/common/Feed";
import Footer from "../components/common/Footer";
import Banner from "../components/common/Banner";
import Stats from "../components/common/Stats";

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
