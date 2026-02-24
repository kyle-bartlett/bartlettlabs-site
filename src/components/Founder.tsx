import Image from "next/image";
import AuditButton from "./AuditButton";

export default function Founder() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="container-bl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Photo */}
          <div className="lg:col-span-4 fade-in-section">
            <div className="aspect-square w-full max-w-xs mx-auto lg:mx-0 rounded-xl overflow-hidden">
              <Image
                src="/kyle-bartlett.png"
                alt="Kyle Bartlett — Founder of Bartlett Labs"
                width={400}
                height={400}
                className="h-full w-full object-cover object-top"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8 fade-in-section">
            <p className="label-mono text-burnt-orange mb-4">
              The Handshake
            </p>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl mb-6">
              From the Shop Floor to AI Engineering
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-silver max-w-2xl">
              <p>
                I grew up in a town of 1,000 people in rural Indiana,
                hand-washing cars and working the shop floor at my
                family&rsquo;s Ford dealership. I learned early on that in a
                small town, your reputation is the only thing that keeps you in
                business. You treat people right, you do the job properly, or
                you don&rsquo;t stay in business.
              </p>
              <p>
                After graduating with an Industrial Engineering degree from
                Purdue, I spent 15 years in the corporate world&mdash;working
                for global giants like Apple and leading AI automation teams for
                international brands. I realized that the businesses that need
                this technology the most are the ones being left behind by the
                &lsquo;big tech&rsquo; firms because those firms think local
                service is &lsquo;too small&rsquo; for them.
              </p>
              <p>
                I built Bartlett Labs to bridge the gap between old-school
                service and the new world of AI. I&rsquo;m a Purdue-trained
                engineer who isn&rsquo;t afraid to get his hands dirty. I
                don&rsquo;t sell jargon or fluff; I build the sturdy, automated
                systems that work as hard as you do.
              </p>
              <p className="font-heading font-bold text-navy text-lg">
                Purdue Engineering meets a Small-Town Handshake. Let&rsquo;s
                get your Sundays back.
              </p>
            </div>

            <div className="mt-8">
              <AuditButton className="btn-primary">
                Request a 10-Minute Efficiency Audit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </AuditButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
