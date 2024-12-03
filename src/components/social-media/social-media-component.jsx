import React from "react";
import { selectCount } from "../../redux/socialMediaCountSlice";
import { useSelector } from "react-redux";
import "../../styles/styles.scss";

const SocialMedia = () => {
  const count = useSelector(selectCount);

  return (
    <div className="social-media-container">
      <span>Social Media Posts: </span>
      {count}
    </div>
  );
};

export default SocialMedia;
