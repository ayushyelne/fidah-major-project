class User {
    readonly name: string;
    readonly email: string;
    readonly pfp: string;
    /** ### nu_prefs
     * Nutrition Preferences of the User.
     * Stores the preferences in the format:
     * ```
     * [
     *      ["Protein", 8],
     *      ["Carbs", 3],
     *      ["Fats", 2],
     *      ["Vitamins", 8],
     * ]
     * ```
     * As a tuple of Nutrient and its priority value.
     */
    readonly n_prefs: [string,number][];

    constructor(obj: any) {
        this.name = obj.name;
        this.email = obj.email;
        this.pfp = obj.pfp;
        this.n_prefs = obj.n_prefs;
    }

    static mock(): User {
        return new User({
            name: "Rakshit Shetty",
            email: "rakshit@fidah.com",
            pfp: "https://scontent-bom1-1.cdninstagram.com/v/t51.2885-19/312713966_2280232985478241_5792435505316935963_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=oZsxMwhKe7YAX884Grn&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfB1VzBL4n7-kbvNwNTF2555FkdGY75Ej8h_BDriCdQhww&oe=644ECD58&_nc_sid=1527a3",
            n_prefs: [
                ["Protein", 9],
                ["Carbohydrates", 3],
                ["Fats", 4],
                ["Vitamins", 5],
                ["Zinc", 7],
            ]
        })
    }
}

export default User;