import {
  Campaign,
  CreditCard,
  Dashboard,
  Flag,
  Group,
  type IconComponent,
  Newspaper,
  Settings,
  Task,
} from "@/components/ui/icons";

export interface AdminNavItem {
  href: string;
  label: string;
  icon: IconComponent;
  /** Extra terms the top bar's search finds this entry by, beyond its label. */
  keywords?: string[];
}

/**
 * Shell configuration, and it lives here rather than in the route on purpose:
 * `icon` holds a React component, which cannot be handed from a server
 * component to a client one as a prop. AdminDashboardDesign1's sidebar and
 * top bar both read this list by default so the rail and the search stay in
 * step; a client caller can still pass its own `items`.
 *
 * Only the overview is wired up. Every other entry is a "#" placeholder —
 * point it at a real route as you add the page behind it.
 */
export const DEFAULT_ADMIN_NAV: AdminNavItem[] = [
  {
    href: "/admin",
    label: "Overview",
    icon: Dashboard,
    keywords: ["dashboard", "stats", "bookings", "home"],
  },
  {
    href: "#",
    label: "Applications",
    icon: Task,
    keywords: ["documents", "verification", "signup", "approve"],
  },
  {
    href: "#",
    label: "Reports",
    icon: Flag,
    keywords: ["moderation", "flagged", "reviews", "comments"],
  },
  {
    href: "#",
    label: "Accounts",
    icon: Group,
    keywords: ["users", "profiles", "suspend", "ban"],
  },
  {
    href: "#",
    label: "Ads",
    icon: Campaign,
    keywords: ["banner", "placement", "campaign", "promotion"],
  },
  {
    href: "#",
    label: "Content",
    icon: Newspaper,
    keywords: ["onboarding", "slides", "copy", "pages"],
  },
  {
    href: "#",
    label: "Subscriptions",
    icon: CreditCard,
    keywords: ["billing", "plan", "trial", "invoice"],
  },
  {
    href: "#",
    label: "Settings",
    icon: Settings,
    keywords: ["password", "email", "admins", "preferences"],
  },
];
