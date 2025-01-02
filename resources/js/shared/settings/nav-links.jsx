import { Icon123, IconCalendar, IconLockAccess, IconTicket, IconUsers } from "@tabler/icons-react";

export const settingLinks = [
  {
    title: "Utenti e ruoli",
    items: [
      {
        label: "Utenti",
        description: "Gestisci gli utenti",
        icon: <IconUsers/>,
        url: "/settings/users",
      },
      {
        label: "Ruoli",
        description: "Gestisci i ruoli",
        icon: <IconLockAccess/>,
        url: "/settings/roles",
      },
    ]},
    {
      title: "Generale",
      items: [
      {
        label: "Tipologie eventi",
        description: "Modifica le tipologie di eventi",
        icon: <IconTicket/>,
        url: "/settings/event-types",
      }
    ],
  },
  {
      title: "Altro",
      items: [
      {
        label: "Activity viewer",
        description: "Activity reports overview",
        icon: <Icon123/>,
        url: "/settings/activity",
      }
    ],
  }
];

