import React from "react";
import styles from "./GoogleButton.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const GoogleButton = () => {
    const handleSignIn = async () => {
        try {
            await signIn("google");
        } catch (error) {
            console.error("Sign-in failed:", error);
        }
    };
    return (
        <div
            className={styles["google-btn"]}
            onClick={() =>
                signIn("google", {
                    callbackUrl: `/dashboard`,
                })
            }>
            <div className={styles["google-icon-wrapper"]}>
                <img
                    className={styles["google-icon"]}
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google Icon"
                />
            </div>
            <p className={styles["btn-text"]}>
                <b>Sign in with Google</b>
            </p>
        </div>
    );
};

export default GoogleButton;
