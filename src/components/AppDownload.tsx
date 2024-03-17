import Image from "next/image";

const AppDownload = () => {
  return (
    <section className="mt-20 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="w-full flex items-center justify-center">
        <Image
          src="/images/food-app.png"
          alt="food app"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center text-center gap-5">
        <h3 className="text-2xl md:text-3xl font-bold">
          Order take-away event faster!
        </h3>
        <p>
          Download the MernPanda App for faster ordering and personalized
          recommendations.
        </p>
        <div className="flex items-center gap-5">
          <button>
            <Image
              src="/images/ios-download.png"
              alt="ios download"
              width={200}
              height={200}
            />
          </button>
          <button>
            <Image
              src="/images/android-download.png"
              alt="android download"
              width={270}
              height={270}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
