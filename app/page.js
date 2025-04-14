import Link from "next/link"
import { inter } from "./fonts"
import Image from "next/image";
import { Badge } from "@/components/ui/badge";


export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col ${inter.className}`}>
      <header className="text-lg">
        <div className="mx-auto flex h-14 max-w-[1024px] items-center justify-between px-4">
          <div className="font- font-extrabold">
            <Link href="/">

            <Image alt="LisboaUX logotype" src={'logo.svg'} width={100} height={100}/>
            </Link>
            
          </div>
          <nav className="flex gap-5 text-base">
            <Link href="https://lu.ma/lisboaux" className="hover:text-primary hover:opacity-30 transition-all">
              Events
            </Link>
            <Link
              href='/mentors'
              className='hover:text-primary hover:opacity-30 transition-all'
            >
              Mentorship <Badge className={'bg-blue-700'}>New</Badge>
            </Link>
            <Link href="https://lisboaux.com/slack" className="hover:text-primary hover:opacity-30 transition-all">
              Community
            </Link>
            <Link href="https://www.linkedin.com/company/lisboaux/" className="hover:text-primary hover:opacity-30 transition-all">
              LinkedIn
            </Link>
            <Link href='https://www.youtube.com/@LisboaUX' className="hover:text-primary hover:opacity-30 transition-all">Youtube</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 text-lg animate-in">
        <section className="mx-auto max-w-[1024px] py-10 px-4">
          <h1 className="text-4xl mx-auto text-muted-foreground scroll-m-20 tracking-tight lg:text-4xl">Welcome to LisboaUX</h1>
          <p className="max-w-[624px] text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
          We are a community of designers based in Lisboa. Every month, we host <span className="font-bold">talks</span> & <span className="font-bold">intimate dinners</span> to nurture growth and belonging. Come listen to our stories and hone your craft together with us.
          </p>
          <Link className="text-muted-foreground text-muted-foreground leading-7 block w-fit mt-6 border-b pb-1 hover:border-0 transition-all hover:opacity-30" href='https://lisboaux.com/slack'>Join our community on Slack.</Link>
        </section>
      </main>

      <footer className="">
        <div className="mx-auto flex max-w-[1024px] items-center justify-between px-4 py-4">
          <p className="text-muted-foreground">© {new Date().getFullYear()} LisboaUX</p>
          {/* <div className="flex gap-3 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
