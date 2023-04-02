import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-6">
      <a
        href="https://za16.co"
        target="_blank"
        rel="noreferrer"
        className="text-zinc-800 font-medium"
      >
        Made by Zaid Mukaddam
      </a>
      <Link href="/legal/terms" className="text-zinc-800 font-medium">
        Terms of Service
      </Link>
      <Link href="/legal/privacy" className="text-zinc-800 font-medium">
        Privacy Policy
      </Link>
    </div>
  );
}

export default Footer;
