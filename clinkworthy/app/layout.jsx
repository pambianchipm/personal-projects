import './globals.css'

export const metadata = {
  title: 'Clinkworthy — Your wedding speech, written and rehearsed',
  description:
    "Don't wing the most-watched 4 minutes of your year. Clinkworthy interviews you like a speechwriter would, drafts a speech that sounds like you, and coaches you until you can deliver it with confidence.",
  metadataBase: new URL('https://clinkworthy.com'),
  openGraph: {
    title: 'Clinkworthy — Make it clinkworthy.',
    description:
      'A guided studio that turns your stories into a wedding speech that sounds like you — then helps you rehearse it until the nerves are gone.',
    url: 'https://clinkworthy.com',
    siteName: 'Clinkworthy',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
