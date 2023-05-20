import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

function Header() {
  const session = true;
  if (session)
    return (
      <header className="stick top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            src="/sigmund-authorphoto-Is-unsplash.jpg"
            alt="profile picture"
          />
          <div>
            <p className="text-purple-500">Logged in as:</p>
            <p className="font-bol text-lg">Octopus</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );
  return (
    <header className="stick top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image src="/octoLogo.png" height={50} width={50} alt="octologo" />
          <p className="text-purple-800">Welcome to OctoChat</p>
        </div>
        <Link
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          href="/auth/signin"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
