import React, { lazy, Suspense } from "react";
import { capitalCase } from "change-case";
import { useState, useEffect } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShareIcon from "@mui/icons-material/Share";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { styled } from "@mui/material/styles";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
// material
import { Container, Tab, Box, Tabs, Stack } from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";
// redux
import { useDispatch } from "../redux/store";
import {
  getCards,
  getProfile,
  getInvoices,
  getAddressBook,
  getNotifications,
} from "../redux/slices/user";
// components
import HeaderBreadcrumbs from "../components/HeaderBreadcrumbs";
const AccountGeneral = lazy(() =>
  import("../components/user/account/AccountGeneral")
);
const ReceiptsAndDocs = lazy(() =>
  import("../components/user/account/receipts&docs/ReceiptsAndDocs")
);
const Notification = lazy(() =>
  import("../components/user/account/notifications/Notification")
);
const SocialLinks = lazy(() =>
  import("../components/user/account/social/SocialLinks")
);
const ChangePasswors = lazy(() =>
  import("../components/user/account/password/ChangePasswors")
);
// ----------------------------------------------------------------------

const BoxItem = styled(Box)(({ theme }) => ({
  marginTop: "80px",
}));
export default function UserAccount() {
  const { themeStretch } = useSettings();
  const [currentTab, setCurrentTab] = useState("general");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
    dispatch(getAddressBook());
    dispatch(getInvoices());
    dispatch(getNotifications());
    dispatch(getProfile());
  }, [dispatch]);
  const ACCOUNT_TABS = [
    {
      value: "general",
      icon: <AccountBoxIcon />,
      component: <AccountGeneral />,
    },
    {
      value: "Receipts & Documents",
      icon: <ArticleIcon />,
      component: <ReceiptsAndDocs />,
    },
    {
      value: "notifications",
      icon: <NotificationsIcon />,
      component: <Notification />,
    },
    {
      value: "social_links",
      icon: <ShareIcon />,
      component: <SocialLinks />,
    },
    {
      value: "change_password",
      icon: <VpnKeyIcon />,
      component: <ChangePasswors />,
    },
  ];

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <BoxItem>
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="Account"
          links={[
            { name: "Account Settings", href: "/user/account" },
            { name: "User" },
          ]}
        />

        <Stack spacing={5}>
          <Tabs
            value={currentTab}
            scrollButtons="auto"
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={handleChangeTab}
          >
            {ACCOUNT_TABS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                label={capitalCase(tab.value)}
                icon={tab.icon}
                value={tab.value}
              />
            ))}
          </Tabs>

          {ACCOUNT_TABS.map((tab) => {
            const isMatched = tab.value === currentTab;
            return (
              isMatched && (
                <Box key={tab.value}>
                  <Suspense fallback={<span>loading</span>}>
                    {tab.component}
                  </Suspense>
                </Box>
              )
            );
          })}
        </Stack>
      </Container>
    </BoxItem>
  );
}
