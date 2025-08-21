import React from "react";
import { YOUR_NAME } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {YOUR_NAME}. All rights reserved.</p>
    </footer>
  );
}
