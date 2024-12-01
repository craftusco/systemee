import { LockedIcon, Setting07Icon, UserMultiple02Icon, UserSearch01Icon } from "hugeicons-react";

export const settingLinks = [
  {
    title: "Utenti e ruoli",
    items: [
      {
        label: "Utenti",
        description: "Gestisci gli utenti",
        icon: <UserMultiple02Icon size={22} className="text-primary"/>,
        url: "/settings/users",
      },
      {
        label: "Ruoli",
        description: "Gestisci i ruoli",
        icon: <LockedIcon size={22} className="text-primary"/>,
        url: "/settings/roles",
      },
    ]},
    {
      title: "Altro",
      items: [
      {
        label: "Activity viewer",
        description: "Activity reports overview",
        icon: <Setting07Icon size={22} className="text-primary"/>,
        url: "/reports/activity",
      }
    ],
  }
];

