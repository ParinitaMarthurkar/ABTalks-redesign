"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    House,
    LayoutDashboard,
    Target,
} from "lucide-react";

const navigation = [
    {
        label: "Home",
        href: "/",
        icon: House,
    },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Challenge",
        href: "/day/12",
        icon: Target,
    },
];

export default function BottomNavigation() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-surface/90 backdrop-blur-xl supports-[backdrop-filter]:bg-surface/80">
            <div className="mx-auto flex max-w-sm items-center justify-around px-5 py-3 pb-[max(env(safe-area-inset-bottom),12px)]">
                {navigation.map((item) => {
                    const Icon = item.icon;

                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 rounded-2xl px-4 py-2 transition-all duration-300 ${active
                                ? "bg-primary/10 text-primary"
                                : "text-text-secondary hover:text-text-primary"
                                }`}
                        >
                            <Icon
                                size={22}
                                strokeWidth={2.2}
                            />

                            <span className="text-xs font-medium">
                                {item.label}
                            </span>

                            {active && (
                                <div className="mt-1 h-1 w-6 rounded-full bg-primary" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}