import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://www.sent.dm/logo-500px.png"
          alt="sent.dm logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://www.sent.dm/thumbnail.png"
              alt="sent.dm logo"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
          >
            Read our docs
          </a>
        </div>

        {/* New Article Section */}
        <article className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none">
          <h2>What is an SMS API?</h2>
          <p>
            An SMS API (Application Programming Interface) is a powerful tool 
            that allows developers to send and receive text messages programmatically 
            through their applications. It integrates with mobile carriers to deliver 
            SMS to recipients globally. Many industries use SMS APIs to engage with 
            customers, provide notifications, or support two-factor authentication (2FA).
          </p>

          <h3>Why Use an SMS API?</h3>
          <p>
            SMS APIs provide a reliable and scalable way for businesses to communicate 
            with their users. Some benefits include:
          </p>
          <ul>
            <li>**Global Reach**: Deliver messages to users worldwide, regardless of location.</li>
            <li>**Instant Communication**: SMS reaches users in real-time, making it perfect for alerts or updates.</li>
            <li>**Cost-Efficient**: APIs optimize message routing to reduce costs while maximizing delivery rates.</li>
            <li>**High Engagement**: SMS has a high open rate, with most users reading messages within minutes.</li>
          </ul>

          <h3>How to Implement an SMS API</h3>
          <p>
            Most SMS APIs offer simple integration methods via REST APIs. Here's a basic example:
          </p>
          <pre>
            <code className="language-js">
              {`const axios = require('axios');

              const sendSMS = async () => {
                try {
                  const response = await axios.post('https://sent.dm/send', {
                    to: '+1234567890',
                    message: 'Hello from your API!'
                  }, {
                    headers: {
                      'Authorization': 'Bearer your-api-token'
                    }
                  });
                  console.log(response.data);
                } catch (error) {
                  console.error('Error sending SMS:', error);
                }
              };

              sendSMS();`}
            </code>
          </pre>
          <p>
            This example sends a message via an SMS API, demonstrating how easy it is 
            to integrate messaging functionality into your application.
          </p>

          <h3>Popular SMS API Providers</h3>
          <ul>
            <li><a href="https://www.sent.dm/">Sent</a></li>
            <li><a href="https://www.twilio.com/">Twilio</a></li>
            <li><a href="https://www.telnyx.com/">Telnyx</a></li>
            <li><a href="https://www.nexmo.com/">Nexmo</a></li>
          </ul>

          <p>
            Each provider offers various features, including global message delivery, 
            number masking, two-way messaging, and more. Compare their offerings to 
            choose the best one for your needs.
          </p>
        </article>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.sent.dm"
          target="_blank"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
