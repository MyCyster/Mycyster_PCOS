import { articles } from "./HomeData";

export const LatestArticles = () => {
  return (
    <section className="bg-[#F9F9F9] py-6 sm:py-10 my-16 sm:my-20">
      <div className="px-6 sm:px-[2rem] lg:px-[5rem] ">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-[21px] md:text-[25px] font-bold">
            Latest Articles
          </h2>
          <a
            href="https://medium.com/@mycyster"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#069494] font-semibold  cursor-pointer"
          >
            View all articles
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl  shadow-md  hover:shadow-lg transition"
            >
              {/* Article Image */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[250px] object-fill"
              />

              {/* Article Content */}
              <div className="p-4 space-y-4">
                <p
                  className={`font-semibold text-[18px] ${article.categoryColor}`}
                >
                  {article.category}
                </p>
                <h3 className="text-lg font-bold text-[#000000] mt-2 font-sora">
                  {article.title}
                </h3>
                <p className="font-manrope mt-2 text-[#000000] text-base">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
