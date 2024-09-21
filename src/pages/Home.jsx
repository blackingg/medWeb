import Hero from "../components/Hero";
import PostGrid from "../components/PostGrid";
import VideoGrid from "../components/VideoGrid";

function Home() {
  return (
    <div className="mb-[10%] space-y-[5%]">
      <Hero />
      <PostGrid />
      <VideoGrid />
    </div>
  );
}

export default Home;
