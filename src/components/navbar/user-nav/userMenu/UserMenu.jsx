import React, { lazy, Suspense } from "react";
import { Stack } from "@mui/material";
const NotificationsPopover = lazy(() => import("./NotificationPopover"));
const AccountPopover = lazy(() => import("./AccountPopover"));
const ContactsPopover = lazy(() => import("../ContactPopOver"));

function UserMenu(props) {
  return (
    <div>
      <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        <Suspense fallback={<span></span>}>
          <ContactsPopover />
        </Suspense>
        <Suspense fallback={<span></span>}>
          <NotificationsPopover />
        </Suspense>

        <Suspense fallback={<span></span>}>
          <AccountPopover />
        </Suspense>
      </Stack>
    </div>
  );
}

export default UserMenu;
