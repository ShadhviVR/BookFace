import Post from "./post";
import { useState, useEffect } from "react";
import posts from "./posts";
import { Filters } from "./Filters";
import MessageInput from "./MessageInput";
import profile from "../../../assets/user.png";

function Combine() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  const [filter, setFilter] = useState<Filters>({});
  const [noPost, setNoPost] = useState(false);
  const handleFilterChange = (newFilter: Filters) => {
    setFilter(newFilter);
    setNoPost(false);
  };
  const matchingAllFilters = Object.values(posts).filter((post) => {
    const selectedCompanies = Object.keys(filter).filter(
      (company) => filter[company]
    );
    const selectedSubjects = Object.keys(filter).filter(
      (subject) => filter[subject]
    );

  });

  const matchingSomeFilters = Object.values(posts).filter((post) => {
    const selectedCompanies = Object.keys(filter).filter(
      (company) => filter[company]
    );
    const selectedSubjects = Object.keys(filter).filter(
      (subject) => filter[subject]
    );

  });

  useEffect(() => {
    if (
      Object.keys(filter).some((company) => filter[company]) &&
      matchingAllFilters.length === 0 &&
      matchingSomeFilters.length <
        Object.values(filter).filter((value) => value === true).length
    ) {
      setNoPost(true);
    } else {
      setNoPost(false);
    }
  }, [filter, matchingAllFilters]);

  const hasFilteredPosts = matchingAllFilters.length > 0;
  const noPostsFilter = Object.entries(filter)
    .filter(
      ([key, value]) =>
        value &&
        !matchingSomeFilters.some((post) => post.image.includes(key))
    )
    .map(([key]) => key)
    .join(", ");
  console.log(
    matchingSomeFilters.length,
    Object.values(filter).filter((value) => value === true).length
  );
  return (
    <>

        {hasFilteredPosts ? (
          <div className={isSidebarOpen ? "lg:ml-[451.25px]" : "lg:mx-60"}>
            
            {matchingAllFilters.map((post) => (
              <Post
                id={post.id}
                key={post.id}
                name={post.name}
                picture={post.picture}
                image={post.image}
                hashtag={post.hashtag}
                postAcommentProps={profile}
                commentsProps={post.comments}
              />
            
            ))}
          </div>
        ) : matchingSomeFilters.length === 0 ? (
          <div className="lg:ml-[451.25px]">
            <MessageInput
              onSubmit={(message) => {
                console.log(message);
              }}
            />
            {Object.values(posts).map((post) => (
              <Post
                id={post.id}
                key={post.id}
                name={post.name}
                picture={post.picture}
                image={post.image}
                hashtag={post.hashtag}
                postAcommentProps={profile}
                commentsProps={post.comments}
              />
            ))}

          </div>
        ) : (
          <div className="lg:ml-[451.25px]">
            <MessageInput
              onSubmit={(message) => {
                console.log(message);
              }}
            />
            {matchingSomeFilters.map((post) => (
              <Post
                id={post.id}
                key={post.id}
                name={post.name}
                picture={post.picture}
                image={post.image}
                hashtag={post.hashtag}
                postAcommentProps={profile}
                commentsProps={post.comments}
              />
            ))}
          </div>
        )}

    </>
  );
}
export default Combine;
