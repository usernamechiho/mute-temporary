import { Drama, Search, Plus, User } from "lucide-react";

const NAV_LIST = [
  { Icon: Drama, path: "/" },
  { Icon: Search, path: "/search" },
  {
    Icon: Plus,
    path: "/create",
    alwaysActive: true,
  },
  { Icon: User, path: "/profile" },
];

export default NAV_LIST;
