import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/yourusername" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/yourusername" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/yourusername" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/yourusername" },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                <link.icon className="h-6 w-6" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

