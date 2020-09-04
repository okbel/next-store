import Header from "@/components/real/Header";
import BlogWidget from "@/components/real/BlogWidget";
import ShopWidget from "@/components/real/ShopWidget";
import MainReadWidget from "@/components/real/MainReadWidget";
import ReadWidget from "@/components/real/ReadWidget";
import ReadWidgetRow from "@/components/real/ReadWidgetRow";
import ArticleWidget from "@/components/real/ArticleWidget";
import ArticleWidgetRow from "@/components/real/ArticleWidgetRow";
import MainContainer from "@/components/real/MainContainer";
import CTA from "@/components/real/CTA";
import Footer from "@/components/real/Footer";

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
      title: "Getting Done Up",
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
      imgId: "pslvzfu9arefxepbdt2m_lyfbwm.jpg",
      title: "Vans",
      text: "Shop Men",
    },
    {
      imgId: "n4k5rwrhzbqfbbrtc8xz_ryzvpr.jpg",
      title: "Vans",
      text: "Shop Woman",
    },
  ];

  const cta = {
    title: "Weekender Bags And The Luxury of Escape",
    description: "Getting Away, For Those Who Can...",
    text: "View Editorial",
  };

  const interviews = [];
  return {
    props: { articles, read, shop, interviews, cta },
  };
}

export default ({ articles, read, shop, cta }) => (
  <>
    <Header />
    <MainContainer>
      <section>
        <ArticleWidget {...articles[0]} />
        <ArticleWidget {...articles[1]} />
      </section>
      <section>
        <BlogWidget {...articles[2]} />
        <BlogWidget {...articles[3]} />
        <BlogWidget {...articles[4]} />
      </section>
      <section>
        <ArticleWidget {...articles[5]} />
        <ArticleWidget {...articles[6]} />
      </section>
      <section>
        <MainReadWidget headline="A Good Read" />
        {read.map((data) => (
          <ReadWidgetRow {...data} />
        ))}
      </section>
      <section>
        {shop.map((data) => (
          <ShopWidget {...data} />
        ))}
      </section>
      <section>
        <div>
          <ArticleWidgetRow {...articles[5]} />
          <ArticleWidgetRow {...articles[6]} />
        </div>
        <div>
          <BlogWidget {...articles[4]} />
        </div>
        <div>
          {read.map((data) => (
            <ReadWidget {...data} />
          ))}
        </div>
      </section>
      <section>
        <ArticleWidget {...articles[5]} />
        <ArticleWidget {...articles[6]} />
      </section>
      <section>
        {shop.map((data) => (
          <ShopWidget {...data} />
        ))}
      </section>
      <section>
        <CTA {...cta} />
      </section>
      <section>
        <BlogWidget {...articles[2]} />
        <BlogWidget {...articles[3]} />
        <BlogWidget {...articles[4]} />
      </section>
      <section>
        <MainReadWidget headline="Interviews" />
        {read.map((data) => (
          <ReadWidgetRow {...data} />
        ))}
      </section>
      <section>
        <BlogWidget {...articles[2]} />
        <BlogWidget {...articles[3]} />
        <BlogWidget {...articles[4]} />
      </section>
    </MainContainer>
    <Footer />
  </>
);
