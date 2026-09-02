export interface NavigationItem {
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { label: "Now", href: "/now" },
  { label: "Work", href: "/work" },
  { label: "Story", href: "/story" },
  { label: "Thinking", href: "/thinking" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
