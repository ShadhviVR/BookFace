interface Props {
  commentPicture: string;
  commentName: string;
  commentText: string;
}
function Comments(props: Props) {
  return (
    <>
      <div className="flex m-4 ml-6 dark:bg-slate-600">
        <img
          src={props.commentPicture}
          className="w-12 h-10 md:w-10 rounded-full object-cover"
          alt="profile picture"
        />
        <div className="ml-4 w-full border shadow-md p-2 rounded-lg dark:border-none">
          <h3 className="font-bold text-primary-200">{props.commentName}</h3>
          <p className="text-black">{props.commentText}</p>
        </div>
      </div>
    </>
  );
}
export default Comments;
