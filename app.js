// load all meal

const meal = async () => {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    const data = await res.json();
    mealShow(data.categories);
  } catch (error) {
    console.log(error);
  }
};

meal();

const mealShow = (data) => {
  data.forEach((element) => {
    const {
      strCategory,
      strCategoryThumb,
      strCategoryDescription,
      idCategory,
    } = element;

    const div = document.createElement('div');
    div.innerHTML = `

    <div class="border shadow-lg rounded-lg flex gap-4">
            <img class="w-36 h-36" src="${strCategoryThumb}" alt="">
            <div class="space-y-4 py-6 px-4 overflow-hidden">
              <h1 class="font-bold text-xl">${strCategory}</h1>
              <p class="text-sm font-semibold text-gray-500 w-90 text-nowrap text-ellipsis overflow-hidden">${strCategoryDescription}</p>
              <button  class="font-semibold text-lg text-yellow-400 border-b-2 border-yellow-400">View Details</button>
            </div>
          </div>

    `;
    document.getElementById('food-container').appendChild(div);
  });
};
