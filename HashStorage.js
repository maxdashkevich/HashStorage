class HashStorage {
    constructor() {
        this.storage = {};
    }

    addValue(key, value) {
        this.storage[key] = value;
    }

    getValue(key) {
        return this.storage[key];
    }

    deleteValue(key) {
        if (!(key in this.storage)) {
            return false;
        } else {
            return delete this.storage[key];
        }
    }

    getKeys() {
        return Object.keys(this.storage);
    }
}

const coctailsStorage = new HashStorage();

const addCoctailBtn = document.querySelector("#add-coctail");
const getRecipeBtn = document.querySelector("#get-recipe");
const deleteCoctailBtn = document.querySelector("#delete-coctail");
const getCoctailsBtn = document.querySelector("#get-coctails");

addCoctailBtn.addEventListener("click", function() {
    const name = window.prompt("Название коктейля: ");
    const isAlcohol = window.prompt(`Коктейль ${name} алкогольный?`);
    const ingredients = window.prompt(`Ингридиенты для приготовления коктейля ${name}: `);
    const recipe = window.prompt(`Рецепт приготовления коктейля ${name}: `);

    coctailsStorage.addValue(name, {isAlcohol, ingredients, recipe});
    alert(`Коктейль ${name} добавлен!`);
});

getRecipeBtn.addEventListener("click", function() {
    const name = window.prompt("Рецепт какого напитка вы хотите получить?");

    coctailsStorage.getValue(name) ? alert(`
        Коктейль "${name}" (алкогольный: ${coctailsStorage.getValue(name).isAlcohol})
        Ингредиенты: ${coctailsStorage.getValue(name).ingredients}
        Рецепт приготовления: ${coctailsStorage.getValue(name).recipe}`) :
    alert("Такого коктейля нет в хранилище");    
});

deleteCoctailBtn.addEventListener("click", function() {
    const name = window.prompt("Какой коктейль Вы хотите удалить из хранилища?");

    if (coctailsStorage.getValue(name)) {
        coctailsStorage.deleteValue(name);
        alert(`Коктейль "${name}" успешно удалён из хранилища!`);
    } else {
        alert("Такого коктейля нет в хранилище.");
    }
});

getCoctailsBtn.addEventListener("click", function() {
    alert(`В нашем хранилище имеются рецепты следующих коктейлей: ${coctailsStorage.getKeys()}`);
});

coctailsStorage.addValue("Мохито", { isAlcohol: "да",
    ingredients: "Белый ром 50мл, сахарный сироп 15мл, содовая 100мл, лайм 80г, мята 3г, лёд 200г",
    recipe: "Положи в хайбол три дольки лайма и подави мадлером, добавь мяту, наполни бокал льдом, добавь туда 15мл сахарного сиропа и 50мл белого рома, затем долей содовую доверху и аккуратно размешай, укрась веточкой мяты и долькой лайма"});

coctailsStorage.addValue("Б-52", { isAlcohol: "да",
    ingredients: "Кофейный ликёр BOLS 15мл, Айриш крим 15мл, трипл сек BOLS 15мл",
    recipe: "Налей в стопку кофейный ликёр 15мл, затем, используя ложку, уложи слой айриш крим 15мл и слой ликёра трипл сек 15мл, подожги и вооружись трубочкой!"});

coctailsStorage.addValue("Дайкири", { isAlcohol: "да",
    ingredients: "Белый ром 60мл, сахарный сироп 15мл, лаймовый сок 30мл, лёд 200г",
    recipe: "Налей в шейкер лаймовый сок 30мл, сахарный сироп 15мл и белый ром 60мл, затем наполни шейкер кубиками льда и взбей, после чего перелей через стрейнер в охлаждённое шампанское блюдце"});

coctailsStorage.addValue("Джин-тоник", { isAlcohol: "да",
    ingredients: "Сухой джин 50мл, тоник 150мл, лайм 20г, лёд в кубиках 180г",
    recipe: "Наполни хайбол кубиками льда, налей джин 50мл, долей тоник доверхну и аккуратно размешай, укрась дольками лайма и наслаждайся!"});