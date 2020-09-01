import Header from "@/components/real/Header";
import ArticleWidget from "@/components/real/ArticleWidget";
import BlogWidget from "@/components/real/BlogWidget";
import ReadWidget from "@/components/real/ReadWidget";
import MainReadWidget from "@/components/real/MainReadWidget";

export default () => (
  <div className="max-w-screen-xl mx-auto">
    <Header />
    <main>
      <div className="flex space-between mt-4 mb-8">
        <ArticleWidget />
        <ArticleWidget />
      </div>
      <div className="flex space-between my-8 -mx-24">
        <BlogWidget />
        <BlogWidget />
        <BlogWidget />
      </div>
      <div className="flex space-between my-8">
        <ArticleWidget />
        <ArticleWidget />
      </div>
      <div className="flex space-between my-8 -mx-40">
        <MainReadWidget />
        <ReadWidget />
        <ReadWidget />
        <ReadWidget />
        <ReadWidget />
      </div>
    </main>
    <footer></footer>
  </div>
);
