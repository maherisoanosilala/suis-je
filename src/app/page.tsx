import { TerminalExperience } from '@/components/terminal/TerminalExperience'
import { About } from '@/components/sections/About'
import { Missions } from '@/components/sections/Mission'
import { Stack } from '@/components/sections/Stack'
import { Contact } from '@/components/sections/Contact'
import { TerminalHeader } from '@/components/terminal/TerminalHeader'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTerminal } from '@/components/ui/BackToTerminal'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <BackToTerminal />

      <main>
        <TerminalExperience />
        <About />
        <Missions />
        <Stack />
        <Contact />

        <footer className="py-16 border-t border-border">
          <div className="max-w-3xl mx-auto px-6">
            <TerminalHeader command="exit" className="mb-0" />
            <p className="text-xs text-muted font-mono mt-4">
              © {new Date().getFullYear()} Arthur — Fait avec Next.js &amp;
              beaucoup de café.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}