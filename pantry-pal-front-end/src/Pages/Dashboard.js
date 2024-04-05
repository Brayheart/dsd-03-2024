function Dashboard() {
  return (
    <div className="flex">
      {/* Main content area */}
      <div className="flex-grow p-5">
        <h2 className="text-2xl font-bold mb-5">My Ingredients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Ingredient Card */}
          <div className="bg-gray-300 p-4 rounded-lg">
            <div className="flex justify-between">
              <h3 className="text-xl">Tomatoes</h3>
              <div className="flex items-center">
                <button className="bg-gray-400 w-6 h-6 flex justify-center items-center mr-2">
                  +
                </button>
                <button className="bg-gray-400 w-6 h-6 flex justify-center items-center">
                  -
                </button>
              </div>
            </div>
            <p>3 in Pantry</p>
            <p>Carbs: #g</p>
            <p>Protein: #g</p>
          </div>
          {/* Repeat for other ingredients */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
