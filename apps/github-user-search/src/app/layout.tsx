import "./globals.css"

export const metadata = {
  title: "Github User Search",
  description: "Search for a GitHub user by username",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
