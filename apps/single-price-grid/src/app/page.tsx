export default function Page() {
  return (
    <main className="grid max-w-[635px] overflow-hidden rounded-[5px] md:grid-cols-2">
      <div className="bg-white px-6 pb-8 pt-7 md:col-span-2">
        <div className="text-xl font-bold md:text-2xl">Join our community</div>
        <div className="mt-6 text-[15px] font-bold leading-[20px] text-bright-yellow md:text-[18px] md:leading-[1.2]">
          30-day, hassle-free money back guarantee
        </div>
        <div className="mt-4 text-sm leading-[26px] text-grayish-blue">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </div>
      </div>
      <div className="bg-cyan px-6 py-6">
        <div className="text-[18px] font-bold leading-[1.2] text-white">
          Monthly Subscription
        </div>
        <div className="mt-[18px] flex flex-row items-center text-[32px] leading-[1.2] text-white">
          $29
          <span className="ml-3 text-[16px] leading-[26px] text-white text-opacity-50">
            per month
          </span>
        </div>
        <div className="mt-1 leading-[26px] text-white">
          Full access for less than $1 a day
        </div>
        <button className="mt-[26px] flex h-12 w-full flex-row items-center justify-center rounded-[5px] bg-bright-yellow font-bold text-white drop-shadow-[0_10_10_#000000/0.0973] hover:bg-bright-yellow/90">
          Sign Up
        </button>
      </div>
      <div className="bg-[#4ABFBD] px-6 py-6">
        <div className="text-[18px] font-bold leading-[1.2] text-white">
          Why Us
        </div>
        <ul className="mt-[18px] text-[14px] leading-[20px] text-white text-opacity-75">
          <li>Tutorials by industry experts</li>
          <li>Peer &amp; expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </main>
  )
}
