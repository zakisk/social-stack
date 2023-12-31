import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../navbar/index.jsx";
import UserWidget from "../widgets/UserWidget.jsx";
import { useSelector } from "react-redux";
import CreatePostWidget from "../widgets/CreatePostWidget.jsx";
import PostsWidget from "../widgets/PostsWidget.jsx";
import AdvertWidget from "../widgets/AdvertWidget.jsx";
import FriendsListWidget from "../widgets/FriendsListWidget.jsx";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <CreatePostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendsListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
