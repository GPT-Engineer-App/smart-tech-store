import { Button, Stack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialMediaButtons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={() => alert("Shared on Facebook")}>
        <FaFacebook />
      </Button>
      <Button onClick={() => alert("Shared on Twitter")}>
        <FaTwitter />
      </Button>
      <Button onClick={() => alert("Shared on Instagram")}>
        <FaInstagram />
      </Button>
    </Stack>
  );
};

export default SocialMediaButtons;
