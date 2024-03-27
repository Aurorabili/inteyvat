import { url } from "inspector";

export default function Home() {
  return (
    <section className="bg-base-100 hero hero-svgbg">
      {/* <div className="hero-overlay bg-opacity-30"></div> */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12 xl:py-64">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-base-content md:text-5xl lg:text-6xl">
          The dream yet to be dreamed
        </h1>
        <p className="mb-8 text-lg font-normal text-base-content lg:text-xl sm:px-16 xl:px-48 ">
          Khaenri&apos;ah was a powerful nation, built purely by humans, an
          unprecedented flourishing and glorious civilization — it was the pride
          of humankind.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button className="btn btn-primary">
            Learn more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="btn">
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch video
          </button>
        </div>
      </div>
    </section>
  );
}
