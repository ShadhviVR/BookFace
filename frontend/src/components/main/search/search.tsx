import React, { useState, useRef, ChangeEvent } from "react";
import Profile from "../../../assets/user.png";
import { UilLocationPoint, UilPlayCircle, UilSchedule, UilScenery} from '@iconscout/react-unicons';
import { Link } from "react-router-dom";

const PostShare: React.FC = () => {
  const [image, setImage] = useState<{ image: string } | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  
  return (
    <div className="PostShare flex gap-1 bg-cardColor p-1 rounded-lg">
      <Link to="/user">
      <img src={Profile} alt="" className=" h-14 w-14 m-1 lg:m-3 xl:m-4 2xl:m-5 rounded-full bg-slate-500" />
      </Link>
      <div className="flex flex-col w-full gap-1">
        <input type="text" placeholder="What's happening" className="bg-inputColor rounded-lg p-3 text-lg text-purple-500 focus:outline-none" />
        <div className="postOptions flex justify-around">
          <div
            className="option flex items-center justify-center text-sm rounded-lg text-primary-500 cursor-pointer"
            onClick={() => imageRef.current?.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option flex items-center justify-center text-sm rounded-lg text-primary-500" >
          <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option flex items-center justify-center text-sm rounded-lg text-primary-500" >
          <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option flex items-center justify-center text-sm rounded-lg text-primary-500" >
          <UilSchedule />
            Schedule
          </div>
          <button className="my-8   p-2 font-semibold text-primary-200 outline-none">
                Share
              </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default PostShare;
