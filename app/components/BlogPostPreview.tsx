import Link from "next/link"

interface BlogPostPreviewProps {
  title: string
  excerpt: string
  link: string
}

export default function BlogPostPreview({ title, excerpt, link }: BlogPostPreviewProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transform transition-all duration-300 hover:scale-105">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
      <Link
        href={link}
        className="text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
      >
        Read More
      </Link>
    </div>
  )
}

