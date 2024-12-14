'use client';
import { useRouter } from "next/navigation";
import { destroySession } from "../auth/destroySession";
import Link from "next/link";
import { useAuth } from "../context/authContext";

export function TheHeader() {
    const router = useRouter();
    const { isAuthenticated, setIsAuthenticated} = useAuth();

    

    async function handleLogout() {
        const { success, error } = await destroySession();

        if(success) {
            setIsAuthenticated(false);
            router.push('/login');
        } else {
            console.log(error);
        }
    }

    return (
        <header>
            <nav>
              <ul>
                {
                    isAuthenticated && (
                        <>
                            <li>
                                <Link href='/profile'>Profile</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Sign out</button>
                            </li>
                        </>
                    )
                }
                {
                    !isAuthenticated && (
                        <>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            <li>
                                <Link href="/register">Register</Link>
                            </li>
                        </>
                    )
                }
              </ul>
            </nav>
          </header>
    )
}