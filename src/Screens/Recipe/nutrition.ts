/** ## Quantity 
 * Is simply a tuple of `( number, unit )`    
 * e.g. 34kcal is represented as `( 34, "kcal")` */
type Quantity = [number, string];
/*
    Vitamins: A, B1, B2, B3, B6, B12, C, D, E, K
    Minerals: Calcium, Chromium, Folic Acid, Iodine, 
            Iron, Magnesium, Potassium, Selenium, 
            Zinc
    Fat: Saturated, Unsaturated
*/

/** # Nutrition
 * A type that stores all nutrition 
 * information of a food item.
 * @property {Quantity} protein                     Protein count
 * @property {Quantity} carbs                       Carbohydrates count
 * @property {Quantity} fats                        Fats count
 * @property {Quantity} fiber                       Fiber count
 * @property {Array<[string, Quantity]>} vitamins   Vitamins count
 * @property {Array<[string, Quantity]>} micro      Micronutrients count
 * @property {Quantity} calories                    Calories
 */
class Nutrition {
    protein: Quantity;
    carbs: Quantity;
    fats: Quantity;
    fiber: Quantity;
    vitamins?: Array<[string, Quantity]>;
    micro?: Array<[string, Quantity]>;
    calories: Quantity;

    constructor(obj: any) {
        this.protein = obj.protein;
        this.carbs = obj.carbs;
        this.fats = obj.fats;
        this.fiber = obj.fiber;
        this.vitamins = obj.vitamins;
        this.micro = obj.micro;
        this.calories = obj.calories;
    }
}

export default Nutrition