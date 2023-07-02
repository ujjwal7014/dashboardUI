import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../dashboard/Dashboard.module.css";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isMobileView, setIsMobileView] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to handle sidebar toggle

    useEffect(() => {
        if (status === "authenticated" && !session) {
            router.push("/");
        }
    }, [session, status, router]);

    useEffect(() => {
        // Check if the viewport matches the mobile view media query
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.dashboard}>
            {isMobileView ? (
                <header className={styles.mobileHeader}>
                    <button
                        className={styles.hamburgerButton}
                        onClick={() => {
                            setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
                        }}>
                        <span className={styles.hamburgerIcon}></span>
                    </button>
                    <h1>Dashboard</h1>
                </header>
            ) : (
                <aside
                    className={`${styles.sidebar} ${
                        isSidebarOpen ? styles.sidebarOpen : ""
                    }`}>
                    {/* Sidebar content */}
                </aside>
            )}
            <div className={styles.content}>{/* Main content */}</div>
        </div>
    );
}
