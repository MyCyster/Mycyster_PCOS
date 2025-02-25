import { articles } from "./HomeData"

export const LatestArticles = () => {
  return (
    <section className="bg-[#F9F9F9] py-6 sm:py-10 my-16 sm:my-20">
    <div className="px-6 sm:px-[2rem] lg:px-[5rem] ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[21px] md:text-[25px] font-bold">
          Latest Articles
        </h2>
        <p className="text-[#069494] font-semibold hover:underline cursor-pointer">
          View all articles
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Article Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-100 object-cover"
            />

            {/* Article Content */}
            <div className="p-4 sm:p-6">
              <p className={`font-semibold text-[18px] ${article.categoryColor}`}>
                {article.category}
              </p>
              <h3 className="text-[18px] md:text-[20px] font-bold mt-2">{article.title}</h3>
              <p className="text-gray-600 mt-2 text-gray-700 vlg:text-[24px] xxl:text-[20px] text-18px">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
