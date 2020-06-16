import Header from "../components/Header";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
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
