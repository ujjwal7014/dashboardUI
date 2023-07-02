import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import loginStyles from "../styles/Home.module.css";
import GoogleButton from "@/components/GoogleSigninBtn ";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const { data: session } = useSession(); // Access the session data
    const router = useRouter();
    
    if (session) {
        // If user is logged in, redirect to dashboard
        router.replace("/dashboard");
        return null; // Render nothing until redirection occurs
    }

    return (
        <>
            <div className={loginStyles.container}>
                <div className={loginStyles.leftContainer}>
                    <h1
                        className={`${loginStyles.leftContent} ${loginStyles.LeftContent}`}>
                        Board.
                    </h1>
                </div>
                <div className={loginStyles.rightContainer}>
                    <div>
                        <h1 className={loginStyles.heading}>Sign In</h1>
                        <div>Sign in to your account</div>
                        <GoogleButton />
                        <div className={loginStyles.loginSection}>
                            <label>Email</label>
                            <input
                                type="email"
                                className={loginStyles.styledInput}
                            />
                            <label>Password</label>
                            <input
                                type="email"
                                className={loginStyles.styledInput}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
