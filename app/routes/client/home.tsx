import { Contact } from "lucide-react";
import Banner from "~/components/Banner";
import BlogSummary from "~/components/BlogSummary";
import Client from "~/components/clients";
import Footer from "~/components/Footer";
import ImageSlider from "~/components/image-slider";
import NewsLetter from "~/components/Newsletter";
import ServiceSummary from "~/components/ServiceSummary";
import TeamSummary from "~/components/TeamSummary";
import Work from "~/components/Work";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* Hero section */}
      <div>
        <ImageSlider />
      </div>
      {/* service section */}
      <div>
        <ServiceSummary />
      </div>
      {/* work section */}
      <div>
        <Work />
      </div>
      {/* blog section */}
      <div>
        <BlogSummary />
      </div>
      {/* team section */}
      <div>
        <TeamSummary />
      </div>
      {/* client section */}
      <div>
        <Client />
      </div>
    </div>
  );
};

export default Home;
