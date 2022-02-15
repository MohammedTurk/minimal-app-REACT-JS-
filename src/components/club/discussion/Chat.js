import { useEffect } from "react";
// material
import { Card, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

// redux
import { useDispatch } from "../../../redux/store";
import { getConversations, getContacts } from "../../../redux/slices/chat";

// components
import ChatWindow from "./ChatWindow";
import ChatSidebar from "./ChatSidebar";
import ThemeLocalization from "../../ThemeLocalization";
import ChatHeader from "./chatHeader/ChatHeader";

// ----------------------------------------------------------------------

const CardStyle = styled(Card)(({ theme }) => ({
  display: "flex",
  position: "relative",
  boxShadow: theme.customShadows.z20,
  height: "100vh",
  borderRadius: theme.shape.borderRadiusMd,
}));
export default function Chat() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container>
      <ChatHeader />
      <ThemeLocalization>
        <CardStyle>
          <ChatSidebar />
          <ChatWindow />
        </CardStyle>
      </ThemeLocalization>
    </Container>
  );
}
