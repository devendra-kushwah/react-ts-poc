import React from "react";
import Avatar from "@mui/material/Avatar";

interface Props {
  sx?: {};
  src?: string;
  alt?: string;
  title?: string;
}

const ProfileAvatar: React.FC<Props> = (props) => {
  const { sx = {}, src = "", alt = "", title = "" } = props;
  const initials = title
    ?.split(" ")
    .map((word) => word.slice(0, 2))
    .join("");

  return (
    <Avatar alt={alt} sx={sx} src={src}>
      {!src && initials}
    </Avatar>
  );
};

export default ProfileAvatar;
