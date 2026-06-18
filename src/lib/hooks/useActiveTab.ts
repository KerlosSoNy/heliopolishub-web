import { useEffect } from "react";
import { usePathname } from "next/navigation";

const pathToTabIndex: Record<string, number> = {
    "/": 0,
    "/aboutus": 1,
    "/thelab": 2,
    "/projects": 3,
    // "/products": 4,
    // "/events": 5,
    "/destinations": 4,
    "/destinations/somabay": 4,
    "/community":5,
    "/shop": 6,
};

const prefixToTabIndex: [string, number][] = [
    ["/thelab/", 2],
    ["/destinations/", 4],
    ["/community/", 5],
    ["/shop/", 6],
];

export function useActiveTab(handleActiveTab: (index: number) => void) {
    const pathname = usePathname();

    useEffect(() => {
        const exactMatch = pathToTabIndex[pathname];

        if (exactMatch !== undefined) {
            handleActiveTab(exactMatch);
            return;
        }

        const prefixMatch = prefixToTabIndex.find(([prefix]) =>
            pathname.startsWith(prefix)
        );

        handleActiveTab(prefixMatch ? prefixMatch[1] : 0);
    }, [pathname, handleActiveTab]);
}