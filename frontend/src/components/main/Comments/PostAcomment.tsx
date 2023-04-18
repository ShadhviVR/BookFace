import RoundButton from "./RoundButton";
import send from "../../../assets/send.svg";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import posts from "../posts/posts";

interface Props {
  yourPicture: string;
  commentID: number;
}

function PostAcomment(props: Props) {
  const { t } = useTranslation();

  const [comment, setComment] = useState("");
  function generateUniqueId(): string {
    const timestamp: number = Date.now();
    const random: number = Math.random() * Math.pow(10, 17);
    const uniqueId: string = `${timestamp}${random.toString().substr(0, 12)}`;
    return uniqueId;
  }
  const handleComment = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const value = event.target.value;

    setComment(value);
  };
  const postComment: React.MouseEventHandler<Element> = (event) => {
    event.preventDefault();
    console.log(comment, props.commentID);
    //ici il faudra ajouter dans l'array avec les autres comments et le post ds la DB
    handleCommentSubmit(props.commentID, comment);
  };
  function handleCommentSubmit(postId: number, commentText: string) {
    const comment = {
      id: generateUniqueId(),
      text: commentText,
    };

    // Find the post with the matching id and add the comment
    const updatedPosts = Object.values(posts).map((post) => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    });
  }
  return (
    <form className="flex justify-between p-4 pl-6 ">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={props.yourPicture}
        alt="Your profile picture"
      />
      <input
        className="w-[70%] rounded-full  p-1 px-2 border shadow-md  sm:w-full sm:flex-1 sm:mx-4 focus:outline-none"
        placeholder={t("What's on your mind?") as string}
        type="text"
        onChange={handleComment}
        name="newComment"
      />
      <RoundButton
        svg={<img src={send} alt="send" className="w-1/2 translate-x-[-2px]" />}
        clickHandler={postComment}
        classname="bg-primary-200"
        color=""
        type="submit"
      />
    </form>
  );
}

export default PostAcomment;
