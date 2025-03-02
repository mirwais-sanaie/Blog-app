import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { getDocs } from "firebase/firestore";
import { usePostsContext } from "../context/CreatePostProv";
import Post from "./Post";
import Notification from "../components/Notification";
import { useAuthContext } from "../context/FireAuthContext";
import Footer from "./Footer";
import HomeLoader from "../components/HomeLoader";

function Home() {
  const {
    posts,
    setPosts,
    collectionDb,
    isLoading,
    setIsLoading,
    searchQuery,
    setSearchQuery,
  } = usePostsContext();
  const { showNotification, setShowNotification } = useAuthContext();
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (posts.length === 0) {
      async function getPosts() {
        setIsLoading(true);
        try {
          const data = await getDocs(collectionDb);
          const postsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setPosts(postsData);
        } catch (e) {
          console.log(e.message);
        } finally {
          setIsLoading(false);
        }
      }
      getPosts();
    }
  }, [collectionDb, setPosts, setIsLoading, posts.length]);

  useEffect(
    function () {
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    },
    [posts, searchQuery]
  );

  return (
    <div className="relative">
      <Navigation searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="absolute">
        {showNotification && (
          <Notification onClose={() => setShowNotification(false)} />
        )}
      </div>
      <div className="container mx-auto pb-30">
        <h1 className="mt-25 font-WorkSans font-semibold text-center text-4xl text-[#364153]">
          Blog App
        </h1>
        <p className="text-stone-500 text-center md:max-w-3xl font-roboto px-2 sm:text-sm md:text-base my-4 mx-auto">
          Explore and share your thoughts with our blog app! Create, edit, and
          engage with posts, featuring user profiles and image uploads for a
          personalized experience.
        </p>
        {isLoading ? (
          <HomeLoader />
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mx-3">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => <Post post={post} key={post.id} />)
            ) : (
              <p className="py-30"></p>
            )}
          </ul>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
