export interface NavigationItem {
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/work" },
  { label: "Articles", href: "/thinking" },
];
