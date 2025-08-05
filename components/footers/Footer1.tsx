"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  iconClass: string;
  label: string;
  className?: string;
}


const navItems: NavItem[] = [
  {
    href: "/home",
    iconClass: "icon-home2",
    label: "Home",
    className: "active",
  },
  { href: "/exchange-market", iconClass: "icon-exchange", label: "Exchange" },
  { href: "/earn", iconClass: "icon-earn", label: "Earn" },
  { href: "/wallet", iconClass: "icon-wallet", label: "Wallet" },
];

export default function Footer1() {
  const pathname = usePathname();
  return (
    <div className="menubar-footer footer-fixed">
      <ul className="inner-bar">
        {navItems.map((item, index) => (
          <li key={index} className={pathname === item.href ? "active" : ""}>
            <Link href={item.href}>
              <i className={`icon ${item.iconClass}`} />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
