import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-gray-600 dark:text-gray-300">
        {children}
      </p>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        className="rounded-lg border border-gray-200 dark:border-gray-700"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded-md bg-gray-100 px-2 py-1 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100">
        {children}
      </code>
    ),
    ...components,
  };
}
