import profile from "../../content/profile.jpg";
import Comments from "../Comments/Comments";
import PostAcomment from "../Comments/PostAcomment";
interface postProps {
  id: number;
  name: string;
  picture: string;
  image: string;
  hashtag: string[];
  commentsProps: commentsProps[];
  postAcommentProps: string;
}
interface commentsProps {
  commentPicture: string;
  commentName: string;
  commentText: string;
  commentID: number;
}
interface postAcommentProps {
  yourPicture: string;
}
function Post(props: postProps) {
  return (
    <section className=" drop-shadow-md mt-8 mx-8 sm:mt-12 sm:mx-12 rounded-lg bg-slate-50">
      <div className="flex items-center">
        <img
          src={props.picture}
          className="w-12 h-12 rounded-full m-4 object-cover"
          alt="profile picture"
        />
        <div className="dark:text-black">
          <h3 className="font-title font-bold text-primary-200">{props.name}</h3>
        </div>
      </div>
      <div className="p-4 after:block after:mx-auto after:my-0 after:h-1 after:pt-6 after:w-[90%] after:content-[''] after:border-b after:border-b-gray-400 ">
        <img src={props.image}/>
        <p className="pt-4 text-primary-500">{props.hashtag.map((item) => item + " ")}</p>
      </div>
      {props.commentsProps.map((comment) => (
        <Comments
          key={comment.commentID}
          commentName={comment.commentName}
          commentPicture={comment.commentPicture}
          commentText={comment.commentText}
        />
      ))}
      <PostAcomment
        yourPicture={props.postAcommentProps}
        commentID={props.id}
      />
    </section>
  );
}
export default Post;
