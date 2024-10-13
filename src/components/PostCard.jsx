import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <div className="flex">
      <Link to={`/post/${$id}`} className="flex flex-wrap w-60 h-72">
        <div className="w-full bg-gray-100 rounded-xl p-4">
          <div className="w-full justify-center mb-4">
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl h-32"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800 text-wrap">{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
