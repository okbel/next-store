import Header from "@/components/real/Header";
import ArticleWidget from "@/components/real/ArticleWidget";
import BlogWidget from "@/components/real/BlogWidget";
import ReadWidget from "@/components/real/ReadWidget";
import MainReadWidget from "@/components/real/MainReadWidget";

export async function getStaticProps() {
  const articles = [
    {
      imgId: "mmgh4fbuwnpvykpkbrit_jterje.jpg",
      title: "A Rebel At Heart & In The Park",
      description:
        "Gucci, Givenchy, Marc Jacobs And More, For The Tender Tough Guy",
      category: "Market",
    },
    {
      imgId: "xnijlyjiaucu7qzfqsbn_oly9e0.jpg",
      title: "Nikil Saval’s Political Imagination",
      description:
        "The Newly Elected Democratic Socialist Is Ready To Pick up When the Moment Calls",
      category: "Culture",
    },

    {
      imgId: "r345neeqn2u8tu8mp13c_yfskx5.jpg",
      title: "Creative Liaisons with Kyuhee Baik",
      description:
        "From Hyein Seo to Stüssy, the Creative Strategist on South Korea’s Ascent",
      category: "Art",
    },
    {
      imgId: "xnijlyjiaucu7qzfqsbn_jldgln.jpg",
      title: "Don't forget your mask",
      description: "Face Coverings from Wolford, R13, and Collina Strada",
      category: "Fashion",
    },
    {
      imgId: "obvwvqekqwyr2o8lsliu_g6uyor.jpg",
      title: "Market Research: GmbH’s “Asics Edition GEL-NANDI 360”",
      description:
        "Walter Scott’s Wendy Test-Drives Some Trendy Fashion Sneakers",
      category: "Fashion",
    },
    {
      imgId: "rmku32i48ohhvrds1w3j_gjw0do.jpg",
      title: "Black Lives Matter: A Working Resource for Mobilizing",
      description: "",
      category: "Culture",
    },

    {
      imgId: "zugsi2g8pdrcqx6hut9s_r7ihca.jpg",
      title: "Wanna Get Dressed?",
      description:
        "From Ganni to Molly Goddard, Melek Zertal Illustrates the FW20 SSENSE Exclusive Dress Capsule",
      category: "Culture",
    },
  ];

  const read = [
    {
      imgId: "ocepqbpt89b7aorool1r_m11jf9.jpg",
      title: "To Be Continued: The NBA Is Back",
      category: "Culture",
    },
    {
      imgId: "iebe9upbow5cyjfq52bq_q4nauf",
      title: "Getting Done Up When You’re Coming Undone",
      category: "Culture",
    },
    {
      imgId: "zjhuljaaj93vdl1ofird_r6bqtd.jpg",
      title: "Structure! Sabotage! Salvation! K-Pop Has It All",
      category: "Culture",
    },
    {
      imgId: "mqedcrlbdl2wkfmaqjrl_aunchx.jpg",
      title: "WFH Is Not The Work of Homemaking",
      category: "Fashion",
    },
  ];

  const shop = [
    {
      imgId: "",
      title: "To Be Continued: The NBA Is Back",
    },
    {
      imgId: "",
      title: "To Be Continued: The NBA Is Back",
    },
  ];

  const interviews = [];
  return {
    props: { articles, read, shop, interviews },
  };
}

export default ({ articles, read }) => (
  <div className="max-w-screen-xl mx-auto pt-12">
    <Header />
    <main>
      <div className="flex content-between justify-center mt-4 mb-10 -mx-24 px-10">
        <ArticleWidget {...articles[0]} />
        <ArticleWidget {...articles[1]} />
      </div>
      <div className="flex content-between justify-center my-8 -mx-48 px-10">
        <BlogWidget {...articles[2]} />
        <BlogWidget {...articles[3]} />
        <BlogWidget {...articles[4]} />
      </div>
      <div className="flex content-between justify-center -mx-24 mt-8 mb-24 px-10">
        <ArticleWidget {...articles[5]} />
        <ArticleWidget {...articles[6]} />
      </div>
      <div className="flex space-between my-8 -mx-40">
        <MainReadWidget />
        {read.map((data) => (
          <ReadWidget {...data} />
        ))}
      </div>
      <div className="flex space-between my-8 -mx-40">
        <div className="flex grid-rows-10 bg-primary bg-gray-400 px-4 py-2 m-2"></div>
        <div className="flex grid-rows-1 bg-primary bg-gray-400 px-4 py-2 m-2"></div>
        <div className="flex grid-rows-1 bg-primary bg-gray-400 px-4 py-2 m-2"></div>
      </div>
    </main>
    <footer></footer>
  </div>
);
