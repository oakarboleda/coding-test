import Link from 'next/link';
import { createServerSupabaseClient } from '../../supabase-server';
import SignOutButton from './SignoutButton';



export default async function Navbar() {
    const supabase = createServerSupabaseClient();
    const {
        data: { user }
    } = await supabase.auth.getUser();

    return (
        <nav className="">
            <a href="#skip" className="sr-only focus:not-sr-only">
                Skip to content
            </a>
            <div className="max-w-6xl px-6 mx-auto">
                <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
                    <div className="flex items-center flex-1">
                        <Link href="/" className="" aria-label="Logo">

                        </Link>
                        <nav className="hidden ml-6 space-x-2 lg:block">
                            <Link href="/" className="">

                            </Link>
                            {user && (
                                <><Link href="/account" className="">
                                    Account Management
                                </Link><Link href="/checkin" className="">
                                   CheckIn
                                </Link>
                                <Link href="/locations" className="">
                                Location Table
                                </Link></>
                            )}
                        </nav>
                    </div>
                    <div className="flex justify-end flex-1 space-x-8">
                        {user ? (
                            <SignOutButton />
                        ) : (
                            <Link href="/signin" className="">
                                Sign in
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
