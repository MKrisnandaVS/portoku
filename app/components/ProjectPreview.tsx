import Image from "next/image"
import Link from "next/link"

interface ProjectPreviewProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectPreview({ title, description, image, link }: ProjectPreviewProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link
          href={link}
          className="text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
        >
          View Project
        </Link>
      </div>
    </div>
  )
}

