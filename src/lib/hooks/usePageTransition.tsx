import { useRouter } from "next/navigation";

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const usePageTransition = () => {
    const router = useRouter();

    return async (
        href: string,
    ) => {
        // Add page transition class to the body
        const body = document.querySelector(".animation-wrapper");
        body?.classList.add("page-transition");

        // Wait for the transition animation
        await sleep(500);

        // Navigate to the new route
        router.push(href);

        // Wait for the navigation to complete
        await sleep(500);

        // Remove page transition class from the body
        body?.classList.remove("page-transition");
    };

};