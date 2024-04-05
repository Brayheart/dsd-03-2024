function Recipies() {
  return (
    <div className="p-8">
      <section>
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="flex space-x-4 mb-8">
          {/* Placeholder for category cards */}
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="flex-1 bg-gray-300 h-24"></div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex justify-between items-center">
          <span>My Recipes</span>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400">
            Add Recipes
          </button>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Placeholder for recipe cards */}
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="bg-gray-500 p-4 rounded-lg space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Recipe Name</h3>
                <span>♥</span>
              </div>
              <p># Calories</p>
              <button className="text-indigo-600 hover:text-indigo-800">
                View Ingredients
              </button>
              <div className="flex space-x-2">
                {/* Tags */}
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                  TAG 1
                </span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                  TAG 2
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">All Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder for recipe cards */}
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="bg-gray-500 p-4 rounded-lg space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Recipe Name</h3>
                <span>♥</span>
              </div>
              <p># Calories</p>
              <button className="text-indigo-600 hover:text-indigo-800">
                View Ingredients
              </button>
              <div className="flex space-x-2">
                {/* Tags */}
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                  TAG 1
                </span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                  TAG 2
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Recipies;
