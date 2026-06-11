// EmpowerFit Nutrition App - Expanded Australian Food Database v4
// Sources: FatSecret AU (fatsecret.com.au), CalorieKing AU, NHMRC
// All values verified per 100g or 100ml

const FOOD_DATABASE = {

  // ================================================================
  // WOOLWORTHS — CHICKEN
  // ================================================================
  "Chicken Breast Raw (Woolworths)": { protein: 23.1, carbs: 0, fat: 1.5, fibre: 0, sodium: 74, calories: 109, category: "Protein", unit: "g" },
  "Chicken Breast Mince (Woolworths)": { protein: 23.0, carbs: 0, fat: 2.0, fibre: 0, sodium: 80, calories: 112, category: "Protein", unit: "g" },
  "Chicken Mince (Woolworths)": { protein: 17.5, carbs: 0, fat: 8.0, fibre: 0, sodium: 95, calories: 136, category: "Protein", unit: "g" },
  "Chicken Thigh Fillets No Skin (Woolworths)": { protein: 19.5, carbs: 0, fat: 5.6, fibre: 0, sodium: 85, calories: 125, category: "Protein", unit: "g" },
  "Chicken Breast Strips Mexican Style (Woolworths)": { protein: 19.3, carbs: 2.2, fat: 2.2, fibre: 0, sodium: 380, calories: 107, category: "Protein", unit: "g" },
  "Chicken Breast Steaks Sweet Soy BBQ (Woolworths)": { protein: 21.5, carbs: 3.5, fat: 1.6, fibre: 0, sodium: 410, calories: 116, category: "Protein", unit: "g" },
  "Chicken Tenderloins (Woolworths)": { protein: 22.5, carbs: 0, fat: 1.8, fibre: 0, sodium: 75, calories: 108, category: "Protein", unit: "g" },
  "Chicken Drumsticks (Woolworths)": { protein: 18.0, carbs: 0, fat: 8.5, fibre: 0, sodium: 88, calories: 148, category: "Protein", unit: "g" },
  "Roast Chicken (Woolworths)": { protein: 22.5, carbs: 0, fat: 9.8, fibre: 0, sodium: 320, calories: 164, category: "Protein", unit: "g" },
  "Chicken Schnitzel Crumbed (Woolworths)": { protein: 18.0, carbs: 13.0, fat: 8.0, fibre: 0.8, sodium: 500, calories: 198, category: "Protein", unit: "g" },

  // ================================================================
  // WOOLWORTHS — BEEF
  // ================================================================
  "Beef Extra Lean Mince (Woolworths)": { protein: 21.2, carbs: 1.0, fat: 5.0, fibre: 0, sodium: 60, calories: 130, category: "Protein", unit: "g" },
  "Beef Lean Mince (Woolworths)": { protein: 18.5, carbs: 1.0, fat: 10.0, fibre: 0, sodium: 68, calories: 168, category: "Protein", unit: "g" },
  "Beef Mince Premium (Woolworths)": { protein: 21.4, carbs: 0, fat: 5.0, fibre: 0, sodium: 65, calories: 137, category: "Protein", unit: "g" },
  "Beef Mince Regular (Woolworths)": { protein: 15.9, carbs: 1.0, fat: 18.0, fibre: 0, sodium: 72, calories: 228, category: "Protein", unit: "g" },
  "Beef Extra Lean Stir Fry (Woolworths)": { protein: 27.6, carbs: 1.0, fat: 2.4, fibre: 0, sodium: 60, calories: 133, category: "Protein", unit: "g" },
  "Beef Eye Fillet Steak (Woolworths)": { protein: 19.5, carbs: 0, fat: 12.0, fibre: 0, sodium: 55, calories: 194, category: "Protein", unit: "g" },
  "Beef Scotch Fillet Steak (Woolworths)": { protein: 21.5, carbs: 0, fat: 9.3, fibre: 0, sodium: 60, calories: 170, category: "Protein", unit: "g" },
  "Beef Porterhouse Steak (Woolworths)": { protein: 21.4, carbs: 0, fat: 15.3, fibre: 0, sodium: 55, calories: 222, category: "Protein", unit: "g" },
  "Beef Meatballs Beef & Lamb (Woolworths)": { protein: 18.0, carbs: 4.8, fat: 18.4, fibre: 0.3, sodium: 490, calories: 256, category: "Protein", unit: "g" },
  "Beef Heart Smart Extra Lean Mince (Woolworths)": { protein: 20.4, carbs: 1.0, fat: 5.0, fibre: 0, sodium: 62, calories: 131, category: "Protein", unit: "g" },

  // ================================================================
  // WOOLWORTHS — LAMB, PORK & DELI
  // ================================================================
  "Lamb Mince (Woolworths)": { protein: 18.5, carbs: 0, fat: 15.0, fibre: 0, sodium: 80, calories: 211, category: "Protein", unit: "g" },
  "Lamb Strips Mongolian Style (Woolworths)": { protein: 19.8, carbs: 8.0, fat: 9.5, fibre: 0.3, sodium: 580, calories: 197, category: "Protein", unit: "g" },
  "Pork Mince (Woolworths)": { protein: 17.5, carbs: 0, fat: 10.5, fibre: 0, sodium: 70, calories: 165, category: "Protein", unit: "g" },
  "Champagne Leg Ham (Woolworths)": { protein: 18.5, carbs: 1.5, fat: 2.2, fibre: 0, sodium: 1050, calories: 110, category: "Protein", unit: "g" },
  "Shaved Turkey Breast (Woolworths)": { protein: 19.5, carbs: 1.0, fat: 1.5, fibre: 0, sodium: 750, calories: 95, category: "Protein", unit: "g" },
  "Beef Jerky (Woolworths)": { protein: 38.0, carbs: 18.0, fat: 5.5, fibre: 0.5, sodium: 1850, calories: 273, category: "Protein", unit: "g" },

  // ================================================================
  // WOOLWORTHS — SEAFOOD
  // ================================================================
  "Salmon Skin On Fillets (Woolworths)": { protein: 20.4, carbs: 0, fat: 13.4, fibre: 0, sodium: 59, calories: 208, category: "Protein", unit: "g" },
  "Salmon Portions (Woolworths)": { protein: 20.4, carbs: 0, fat: 13.4, fibre: 0, sodium: 59, calories: 208, category: "Protein", unit: "g" },
  "Prawns Cooked Peeled (Woolworths)": { protein: 22.8, carbs: 0, fat: 1.0, fibre: 0, sodium: 210, calories: 103, category: "Protein", unit: "g" },
  "Tuna in Springwater (Woolworths)": { protein: 25.5, carbs: 0, fat: 1.0, fibre: 0, sodium: 290, calories: 111, category: "Protein", unit: "g" },

  // ================================================================
  // WOOLWORTHS — EGGS & DAIRY
  // ================================================================
  "Eggs Free Range (Woolworths)": { protein: 12.6, carbs: 0.7, fat: 9.9, fibre: 0, sodium: 124, calories: 147, category: "Protein", unit: "g" },
  "Greek Yoghurt High Protein Plain (Woolworths)": { protein: 10.0, carbs: 4.5, fat: 0.5, fibre: 0, sodium: 48, calories: 60, category: "Protein", unit: "g" },
  "Greek Yoghurt Natural (Woolworths)": { protein: 5.8, carbs: 7.2, fat: 5.0, fibre: 0, sodium: 55, calories: 99, category: "Protein", unit: "g" },
  "Cottage Cheese (Woolworths)": { protein: 11.5, carbs: 3.5, fat: 2.0, fibre: 0, sodium: 340, calories: 78, category: "Protein", unit: "g" },
  "Light Tasty Shredded Cheese (Woolworths)": { protein: 30.0, carbs: 0, fat: 13.5, fibre: 0, sodium: 720, calories: 238, category: "Fats", unit: "g" },
  "Mozzarella Cheese (Woolworths)": { protein: 23.5, carbs: 1.1, fat: 25.4, fibre: 0, sodium: 490, calories: 325, category: "Fats", unit: "g" },
  "Greek Style Feta (Woolworths)": { protein: 14.5, carbs: 1.5, fat: 26.5, fibre: 0, sodium: 1120, calories: 295, category: "Fats", unit: "g" },
  "Full Cream Milk (Woolworths)": { protein: 3.3, carbs: 4.8, fat: 3.8, fibre: 0, sodium: 44, calories: 63, category: "Fats", unit: "ml" },
  "Lite Milk (Woolworths)": { protein: 3.4, carbs: 5.0, fat: 1.5, fibre: 0, sodium: 48, calories: 45, category: "Fats", unit: "ml" },
  "Skim Milk (Woolworths)": { protein: 3.5, carbs: 4.9, fat: 0.1, fibre: 0, sodium: 50, calories: 34, category: "Fats", unit: "ml" },

  // ================================================================
  // WOOLWORTHS — CARBS & PANTRY
  // ================================================================
  "Traditional Rolled Oats (Woolworths)": { protein: 11.0, carbs: 58.5, fat: 7.5, fibre: 9.0, sodium: 4, calories: 360, category: "Carbs", unit: "g" },
  "Quick Oats (Woolworths)": { protein: 10.8, carbs: 59.5, fat: 7.2, fibre: 8.5, sodium: 5, calories: 359, category: "Carbs", unit: "g" },
  "White Bread (Woolworths)": { protein: 8.5, carbs: 48.0, fat: 3.2, fibre: 2.5, sodium: 430, calories: 256, category: "Carbs", unit: "g" },
  "Grain Bread Roll (Woolworths)": { protein: 10.2, carbs: 42.9, fat: 3.7, fibre: 5.5, sodium: 390, calories: 261, category: "Carbs", unit: "g" },
  "White Rice Raw (Woolworths)": { protein: 7.1, carbs: 78.9, fat: 0.6, fibre: 0.4, sodium: 1, calories: 350, category: "Carbs", unit: "g" },
  "Pasta Dry (Woolworths)": { protein: 12.5, carbs: 70.0, fat: 1.5, fibre: 3.0, sodium: 3, calories: 347, category: "Carbs", unit: "g" },
  "Crushed Tomatoes (Woolworths)": { protein: 1.2, carbs: 4.5, fat: 0.2, fibre: 1.0, sodium: 130, calories: 30, category: "Vegetables", unit: "g" },

  // ================================================================
  // WOOLWORTHS — VEGETABLES & FRUIT
  // ================================================================
  "Baby Spinach (Woolworths)": { protein: 2.2, carbs: 1.6, fat: 0.3, fibre: 1.6, sodium: 65, calories: 17, category: "Vegetables", unit: "g" },
  "Cherry Tomatoes (Woolworths)": { protein: 0.9, carbs: 4.5, fat: 0.2, fibre: 1.5, sodium: 5, calories: 22, category: "Vegetables", unit: "g" },
  "Qukes Baby Cucumber (Woolworths)": { protein: 0.6, carbs: 2.5, fat: 0.1, fibre: 0.5, sodium: 2, calories: 15, category: "Vegetables", unit: "g" },
  "Mixed Salad Leaves (Woolworths)": { protein: 1.5, carbs: 2.0, fat: 0.3, fibre: 1.5, sodium: 30, calories: 15, category: "Vegetables", unit: "g" },
  "Frozen Mixed Vegetables (Woolworths)": { protein: 2.8, carbs: 8.0, fat: 0.3, fibre: 3.5, sodium: 40, calories: 47, category: "Vegetables", unit: "g" },
  "Edamame Frozen Shelled (Woolworths)": { protein: 11.9, carbs: 7.6, fat: 5.2, fibre: 5.2, sodium: 15, calories: 121, category: "Protein", unit: "g" },
  "Mixed Berries Frozen (Woolworths)": { protein: 1.0, carbs: 9.5, fat: 0.4, fibre: 3.5, sodium: 5, calories: 43, category: "Carbs", unit: "g" },
  "Frozen Mango (Woolworths)": { protein: 1.0, carbs: 11.6, fat: 1.0, fibre: 1.5, sodium: 3, calories: 55, category: "Carbs", unit: "g" },
  "Natural Almonds (Woolworths)": { protein: 21.0, carbs: 5.5, fat: 53.0, fibre: 12.0, sodium: 1, calories: 600, category: "Fats", unit: "g" },
  "Walnuts (Woolworths)": { protein: 14.4, carbs: 3.0, fat: 69.2, fibre: 6.7, sodium: 2, calories: 696, category: "Fats", unit: "g" },
  "Maple Syrup Pure (Woolworths)": { protein: 0, carbs: 67.0, fat: 0.1, fibre: 0, sodium: 9, calories: 260, category: "Extras", unit: "ml" },

  // ================================================================
  // COLES — CHICKEN
  // ================================================================
  "Chicken Breast Raw (Coles)": { protein: 23.5, carbs: 0, fat: 1.6, fibre: 0, sodium: 75, calories: 110, category: "Protein", unit: "g" },
  "Chicken Breast Mince 2% Fat (Coles)": { protein: 23.0, carbs: 0.1, fat: 1.6, fibre: 0, sodium: 80, calories: 107, category: "Protein", unit: "g" },
  "Chicken Mince (Coles)": { protein: 18.0, carbs: 2.0, fat: 4.7, fibre: 0, sodium: 90, calories: 117, category: "Protein", unit: "g" },
  "Chicken Tenderloins Raw (Coles)": { protein: 22.5, carbs: 0, fat: 1.8, fibre: 0, sodium: 75, calories: 108, category: "Protein", unit: "g" },
  "Chicken Thigh Fillets (Coles)": { protein: 19.0, carbs: 0, fat: 6.0, fibre: 0, sodium: 85, calories: 130, category: "Protein", unit: "g" },
  "Roast Chicken (Coles)": { protein: 22.5, carbs: 0, fat: 9.8, fibre: 0, sodium: 320, calories: 164, category: "Protein", unit: "g" },
  "Chicken Schnitzel Crumbed (Coles)": { protein: 18.5, carbs: 12.0, fat: 8.5, fibre: 0.8, sodium: 480, calories: 200, category: "Protein", unit: "g" },
  "Chicken Drumsticks (Coles)": { protein: 18.0, carbs: 0, fat: 8.5, fibre: 0, sodium: 88, calories: 148, category: "Protein", unit: "g" },
  "Chicken Honey Soy Wings (Coles)": { protein: 18.5, carbs: 7.5, fat: 11.5, fibre: 0.2, sodium: 520, calories: 203, category: "Protein", unit: "g" },

  // ================================================================
  // COLES — BEEF, LAMB & PORK
  // ================================================================
  "Beef Mince Lean (Coles)": { protein: 20.5, carbs: 0, fat: 7.0, fibre: 0, sodium: 72, calories: 133, category: "Protein", unit: "g" },
  "Beef Mince Extra Lean (Coles)": { protein: 22.0, carbs: 0, fat: 4.5, fibre: 0, sodium: 65, calories: 125, category: "Protein", unit: "g" },
  "Beef Strips Stir Fry (Coles)": { protein: 21.0, carbs: 0, fat: 4.5, fibre: 0, sodium: 65, calories: 124, category: "Protein", unit: "g" },
  "Beef Rump Steak (Coles)": { protein: 22.0, carbs: 0, fat: 5.8, fibre: 0, sodium: 58, calories: 143, category: "Protein", unit: "g" },
  "Beef Sausages (Coles)": { protein: 12.0, carbs: 5.5, fat: 18.5, fibre: 0.5, sodium: 780, calories: 238, category: "Protein", unit: "g" },
  "Lamb Leg Steaks (Coles)": { protein: 20.5, carbs: 0, fat: 8.5, fibre: 0, sodium: 72, calories: 160, category: "Protein", unit: "g" },
  "Lamb Mince (Coles)": { protein: 18.5, carbs: 0, fat: 15.0, fibre: 0, sodium: 80, calories: 211, category: "Protein", unit: "g" },
  "Pork Mince (Coles)": { protein: 17.5, carbs: 0, fat: 10.5, fibre: 0, sodium: 70, calories: 165, category: "Protein", unit: "g" },
  "Pork Tenderloin (Coles)": { protein: 21.8, carbs: 0, fat: 2.7, fibre: 0, sodium: 63, calories: 112, category: "Protein", unit: "g" },
  "Turkey Mince (Coles)": { protein: 21.0, carbs: 0, fat: 4.5, fibre: 0, sodium: 80, calories: 124, category: "Protein", unit: "g" },
  "Shaved Ham (Coles)": { protein: 17.0, carbs: 2.0, fat: 2.5, fibre: 0, sodium: 980, calories: 100, category: "Protein", unit: "g" },
  "Leg Ham (Coles)": { protein: 18.0, carbs: 1.5, fat: 3.0, fibre: 0, sodium: 950, calories: 105, category: "Protein", unit: "g" },

  // ================================================================
  // COLES — SEAFOOD
  // ================================================================
  "Tuna in Springwater (Coles)": { protein: 25.5, carbs: 0, fat: 1.0, fibre: 0, sodium: 290, calories: 111, category: "Protein", unit: "g" },
  "Barramundi Fillets (Coles)": { protein: 19.5, carbs: 0, fat: 2.8, fibre: 0, sodium: 68, calories: 105, category: "Protein", unit: "g" },
  "Basa Fillets Frozen (Coles)": { protein: 18.5, carbs: 0, fat: 2.0, fibre: 0, sodium: 85, calories: 92, category: "Protein", unit: "g" },
  "Salmon Portions (Coles)": { protein: 20.4, carbs: 0, fat: 13.4, fibre: 0, sodium: 59, calories: 208, category: "Protein", unit: "g" },
  "Prawns Raw Peeled (Coles)": { protein: 18.5, carbs: 0, fat: 0.8, fibre: 0, sodium: 180, calories: 81, category: "Protein", unit: "g" },

  // ================================================================
  // COLES — EGGS & DAIRY
  // ================================================================
  "Eggs Free Range (Coles)": { protein: 12.6, carbs: 0.7, fat: 9.9, fibre: 0, sodium: 124, calories: 147, category: "Protein", unit: "g" },
  "Egg Whites Liquid (Coles)": { protein: 10.9, carbs: 0.7, fat: 0.2, fibre: 0, sodium: 166, calories: 50, category: "Protein", unit: "g" },
  "Greek Yoghurt Perform High Protein (Coles)": { protein: 10.2, carbs: 4.8, fat: 0.4, fibre: 0, sodium: 52, calories: 62, category: "Protein", unit: "g" },
  "Cottage Cheese Low Fat (Coles)": { protein: 12.5, carbs: 3.8, fat: 1.5, fibre: 0, sodium: 370, calories: 79, category: "Protein", unit: "g" },
  "Full Cream Milk (Coles)": { protein: 3.3, carbs: 4.8, fat: 3.8, fibre: 0, sodium: 44, calories: 63, category: "Fats", unit: "ml" },
  "Skim Milk (Coles)": { protein: 3.5, carbs: 4.9, fat: 0.1, fibre: 0, sodium: 50, calories: 34, category: "Fats", unit: "ml" },
  "Ricotta (Coles)": { protein: 8.0, carbs: 3.5, fat: 9.5, fibre: 0, sodium: 105, calories: 133, category: "Protein", unit: "g" },

  // ================================================================
  // COLES — CARBS & PANTRY
  // ================================================================
  "Sourdough Bread (Coles Bakery)": { protein: 8.5, carbs: 47.0, fat: 2.5, fibre: 2.8, sodium: 480, calories: 247, category: "Carbs", unit: "g" },
  "White Bread (Coles)": { protein: 8.5, carbs: 48.0, fat: 3.2, fibre: 2.5, sodium: 430, calories: 256, category: "Carbs", unit: "g" },
  "White Rice Raw (Coles)": { protein: 7.1, carbs: 78.9, fat: 0.6, fibre: 0.4, sodium: 1, calories: 350, category: "Carbs", unit: "g" },
  "Pasta Dry (Coles)": { protein: 12.0, carbs: 71.0, fat: 1.5, fibre: 3.0, sodium: 3, calories: 347, category: "Carbs", unit: "g" },
  "Sweet Potato (Coles)": { protein: 1.6, carbs: 20.1, fat: 0.1, fibre: 3.0, sodium: 55, calories: 87, category: "Carbs", unit: "g" },
  "Diced Tomatoes Canned (Coles)": { protein: 1.0, carbs: 4.0, fat: 0.2, fibre: 1.0, sodium: 120, calories: 26, category: "Vegetables", unit: "g" },
  "Chickpeas Canned (Coles)": { protein: 6.0, carbs: 16.5, fat: 1.5, fibre: 5.4, sodium: 290, calories: 103, category: "Protein", unit: "g" },
  "Black Beans Canned (Coles)": { protein: 6.5, carbs: 16.0, fat: 0.8, fibre: 6.5, sodium: 250, calories: 98, category: "Protein", unit: "g" },
  "Kidney Beans Canned (Coles)": { protein: 7.0, carbs: 17.5, fat: 0.5, fibre: 6.0, sodium: 260, calories: 105, category: "Protein", unit: "g" },
  "Lentils Canned (Coles)": { protein: 7.5, carbs: 14.5, fat: 0.5, fibre: 5.5, sodium: 240, calories: 94, category: "Protein", unit: "g" },
  "Peanut Butter Smooth (Coles)": { protein: 24.5, carbs: 16.0, fat: 50.0, fibre: 6.0, sodium: 350, calories: 610, category: "Fats", unit: "g" },
  "Hummus (Coles)": { protein: 6.5, carbs: 12.0, fat: 8.5, fibre: 4.5, sodium: 380, calories: 152, category: "Extras", unit: "g" },
  "Tomato Sauce (Coles)": { protein: 1.2, carbs: 22.0, fat: 0.1, fibre: 0.8, sodium: 890, calories: 95, category: "Extras", unit: "g" },
  "Rolled Oats (Coles)": { protein: 10.8, carbs: 59.0, fat: 7.2, fibre: 9.0, sodium: 5, calories: 358, category: "Carbs", unit: "g" },

  // ================================================================
  // ALDI — CHICKEN & MEAT
  // ================================================================
  "Chicken Breast Frozen (Aldi Westcliff)": { protein: 22.0, carbs: 0, fat: 2.5, fibre: 0, sodium: 95, calories: 111, category: "Protein", unit: "g" },
  "Chicken Mince (Aldi)": { protein: 18.5, carbs: 0, fat: 5.5, fibre: 0, sodium: 88, calories: 122, category: "Protein", unit: "g" },
  "Beef Mince Lean (Aldi)": { protein: 20.0, carbs: 0, fat: 8.5, fibre: 0, sodium: 70, calories: 155, category: "Protein", unit: "g" },
  "Beef Mince Extra Lean (Aldi)": { protein: 21.5, carbs: 0, fat: 5.0, fibre: 0, sodium: 65, calories: 128, category: "Protein", unit: "g" },
  "Salmon Portions (Aldi)": { protein: 20.0, carbs: 0, fat: 13.0, fibre: 0, sodium: 60, calories: 200, category: "Protein", unit: "g" },
  "Tuna in Springwater (Aldi)": { protein: 25.0, carbs: 0, fat: 1.0, fibre: 0, sodium: 310, calories: 109, category: "Protein", unit: "g" },
  "Lamb Mince (Aldi)": { protein: 18.0, carbs: 0, fat: 15.0, fibre: 0, sodium: 78, calories: 208, category: "Protein", unit: "g" },
  "Pork Mince (Aldi)": { protein: 17.0, carbs: 0, fat: 11.0, fibre: 0, sodium: 68, calories: 168, category: "Protein", unit: "g" },
  "Ham Leg (Aldi)": { protein: 18.0, carbs: 1.8, fat: 3.5, fibre: 0, sodium: 1000, calories: 110, category: "Protein", unit: "g" },
  "Turkey Breast Sliced (Aldi)": { protein: 20.0, carbs: 1.0, fat: 1.5, fibre: 0, sodium: 720, calories: 97, category: "Protein", unit: "g" },

  // ================================================================
  // ALDI — DAIRY & EGGS
  // ================================================================
  "Eggs Free Range (Aldi)": { protein: 12.6, carbs: 0.7, fat: 9.9, fibre: 0, sodium: 124, calories: 147, category: "Protein", unit: "g" },
  "Greek Yoghurt Yoguri High Protein (Aldi)": { protein: 10.0, carbs: 5.0, fat: 0.1, fibre: 0, sodium: 50, calories: 61, category: "Protein", unit: "g" },
  "Greek Yoghurt Natural (Aldi)": { protein: 6.0, carbs: 6.5, fat: 5.0, fibre: 0, sodium: 52, calories: 95, category: "Protein", unit: "g" },
  "Cottage Cheese (Aldi)": { protein: 11.5, carbs: 3.8, fat: 2.0, fibre: 0, sodium: 350, calories: 79, category: "Protein", unit: "g" },
  "Full Cream Milk (Aldi Farmdale)": { protein: 3.3, carbs: 4.9, fat: 3.8, fibre: 0, sodium: 44, calories: 63, category: "Fats", unit: "ml" },
  "Skim Milk (Aldi Farmdale)": { protein: 3.5, carbs: 5.0, fat: 0.1, fibre: 0, sodium: 50, calories: 35, category: "Fats", unit: "ml" },
  "Lite Milk (Aldi Farmdale)": { protein: 3.4, carbs: 5.0, fat: 1.5, fibre: 0, sodium: 48, calories: 45, category: "Fats", unit: "ml" },
  "Mozzarella (Aldi)": { protein: 22.0, carbs: 1.0, fat: 22.5, fibre: 0, sodium: 460, calories: 295, category: "Fats", unit: "g" },
  "Cheddar Cheese (Aldi)": { protein: 25.0, carbs: 0.1, fat: 33.0, fibre: 0, sodium: 610, calories: 400, category: "Fats", unit: "g" },

  // ================================================================
  // ALDI — CARBS & PANTRY
  // ================================================================
  "Rolled Oats (Aldi Farmland)": { protein: 10.5, carbs: 59.0, fat: 7.0, fibre: 9.0, sodium: 5, calories: 355, category: "Carbs", unit: "g" },
  "Pasta Dry (Remano Aldi)": { protein: 12.0, carbs: 71.0, fat: 1.5, fibre: 3.0, sodium: 3, calories: 347, category: "Carbs", unit: "g" },
  "Basmati Rice (Aldi)": { protein: 7.2, carbs: 78.0, fat: 0.5, fibre: 0.5, sodium: 2, calories: 348, category: "Carbs", unit: "g" },
  "White Bread (Aldi)": { protein: 8.0, carbs: 47.5, fat: 3.5, fibre: 2.5, sodium: 440, calories: 255, category: "Carbs", unit: "g" },
  "Wholegrain Bread (Aldi)": { protein: 9.5, carbs: 41.0, fat: 4.0, fibre: 5.5, sodium: 400, calories: 242, category: "Carbs", unit: "g" },
  "Almonds Natural (Aldi)": { protein: 21.0, carbs: 5.5, fat: 53.0, fibre: 12.0, sodium: 1, calories: 600, category: "Fats", unit: "g" },
  "Peanut Butter (Aldi Bramwells)": { protein: 25.0, carbs: 15.0, fat: 51.0, fibre: 6.0, sodium: 300, calories: 608, category: "Fats", unit: "g" },
  "Mixed Nuts (Aldi)": { protein: 18.0, carbs: 12.0, fat: 55.0, fibre: 7.0, sodium: 5, calories: 610, category: "Fats", unit: "g" },
  "Olive Oil Extra Virgin (Aldi)": { protein: 0, carbs: 0, fat: 100.0, fibre: 0, sodium: 0, calories: 884, category: "Fats", unit: "ml" },
  "Coconut Oil (Aldi)": { protein: 0, carbs: 0, fat: 100.0, fibre: 0, sodium: 0, calories: 862, category: "Fats", unit: "ml" },
  "Honey Pure (Aldi)": { protein: 0.3, carbs: 82.0, fat: 0, fibre: 0.2, sodium: 4, calories: 304, category: "Extras", unit: "g" },
  "Dark Chocolate 85% (Aldi Moser Roth)": { protein: 9.0, carbs: 19.5, fat: 48.5, fibre: 11.0, sodium: 10, calories: 558, category: "Extras", unit: "g" },
  "Frozen Broccoli Florets (Aldi)": { protein: 3.5, carbs: 4.5, fat: 0.5, fibre: 3.0, sodium: 30, calories: 36, category: "Vegetables", unit: "g" },
  "Frozen Vegetables Mixed (Aldi)": { protein: 2.8, carbs: 8.5, fat: 0.3, fibre: 3.5, sodium: 40, calories: 48, category: "Vegetables", unit: "g" },
  "Edamame Frozen (Aldi)": { protein: 11.9, carbs: 7.6, fat: 5.2, fibre: 5.2, sodium: 15, calories: 121, category: "Protein", unit: "g" },

  // ================================================================
  // ALDI — PROTEIN BARS & SUPPLEMENTS
  // ================================================================
  "Protein Bar Hillcrest Triple Choc (Aldi)": { protein: 22.5, carbs: 28.0, fat: 10.0, fibre: 8.0, sodium: 220, calories: 363, category: "Protein", unit: "g" },
  "Protein Bar Hillcrest Dark Choc (Aldi)": { protein: 21.5, carbs: 29.0, fat: 9.5, fibre: 7.5, sodium: 210, calories: 360, category: "Protein", unit: "g" },
  "Protein Bar Hillcrest Coconut (Aldi)": { protein: 20.0, carbs: 30.0, fat: 11.0, fibre: 6.5, sodium: 200, calories: 355, category: "Protein", unit: "g" },

  // ================================================================
  // BRANDED — TUNA & SEAFOOD
  // ================================================================
  "Tuna in Springwater (Sirena)": { protein: 26.5, carbs: 0, fat: 0.8, fibre: 0, sodium: 320, calories: 115, category: "Protein", unit: "g" },
  "Tuna in Springwater (John West)": { protein: 26.0, carbs: 0, fat: 0.9, fibre: 0, sodium: 300, calories: 113, category: "Protein", unit: "g" },
  "Tuna in Oil (John West)": { protein: 24.5, carbs: 0, fat: 6.2, fibre: 0, sodium: 350, calories: 158, category: "Protein", unit: "g" },
  "Sardines in Springwater (John West)": { protein: 24.0, carbs: 0, fat: 5.5, fibre: 0, sodium: 430, calories: 148, category: "Protein", unit: "g" },

  // ================================================================
  // BRANDED — DAIRY
  // ================================================================
  "Greek Yoghurt Plain (Chobani)": { protein: 9.5, carbs: 4.1, fat: 0.5, fibre: 0, sodium: 45, calories: 59, category: "Protein", unit: "g" },
  "Greek Yoghurt (Farmers Union)": { protein: 7.8, carbs: 5.2, fat: 3.8, fibre: 0, sodium: 55, calories: 87, category: "Protein", unit: "g" },
  "Cottage Cheese Low Fat (Bulla)": { protein: 12.5, carbs: 3.8, fat: 1.5, fibre: 0, sodium: 370, calories: 79, category: "Protein", unit: "g" },
  "Cheddar Cheese (Mainland)": { protein: 25.5, carbs: 0.1, fat: 33.5, fibre: 0, sodium: 620, calories: 404, category: "Fats", unit: "g" },
  "Parmesan Grated (Perfect Italiano)": { protein: 33.0, carbs: 0, fat: 30.0, fibre: 0, sodium: 1650, calories: 420, category: "Fats", unit: "g" },
  "Mozzarella (Perfect Italiano)": { protein: 22.0, carbs: 0.5, fat: 22.0, fibre: 0, sodium: 450, calories: 292, category: "Fats", unit: "g" },
  "Almond Milk Unsweetened (Sanitarium)": { protein: 0.4, carbs: 0.5, fat: 1.1, fibre: 0.3, sodium: 65, calories: 13, category: "Fats", unit: "ml" },
  "Oat Milk (Oatly)": { protein: 1.0, carbs: 6.5, fat: 1.5, fibre: 0.5, sodium: 80, calories: 45, category: "Fats", unit: "ml" },
  "Soy Milk Reduced Fat (So Good)": { protein: 3.5, carbs: 4.0, fat: 1.5, fibre: 0.5, sodium: 85, calories: 43, category: "Fats", unit: "ml" },

  // ================================================================
  // BRANDED — SUPPLEMENTS
  // ================================================================
  "Whey Protein WPC (Bulk Nutrients)": { protein: 74.0, carbs: 8.0, fat: 5.5, fibre: 0, sodium: 130, calories: 380, category: "Protein", unit: "g" },
  "Whey Isolate WPI (Bulk Nutrients)": { protein: 82.0, carbs: 4.0, fat: 2.0, fibre: 0, sodium: 110, calories: 362, category: "Protein", unit: "g" },
  "Casein Protein (Bulk Nutrients)": { protein: 77.0, carbs: 5.5, fat: 2.5, fibre: 0, sodium: 120, calories: 350, category: "Protein", unit: "g" },
  "Mass Gainer (Bulk Nutrients)": { protein: 28.0, carbs: 52.0, fat: 5.0, fibre: 3.0, sodium: 150, calories: 365, category: "Protein", unit: "g" },
  "Collagen Powder": { protein: 90.0, carbs: 0, fat: 0, fibre: 0, sodium: 150, calories: 360, category: "Protein", unit: "g" },
  "BCAAs Amino Acids Powder": { protein: 78.0, carbs: 3.0, fat: 0, fibre: 0, sodium: 50, calories: 324, category: "Protein", unit: "g" },
  "Creatine Monohydrate": { protein: 0, carbs: 0, fat: 0, fibre: 0, sodium: 0, calories: 0, category: "Protein", unit: "g" },
  "Pre-Workout Generic Per 10g": { protein: 5.0, carbs: 20.0, fat: 0, fibre: 0, sodium: 200, calories: 100, category: "Protein", unit: "g" },
  "Electrolyte Powder (Hydralyte)": { protein: 0, carbs: 7.0, fat: 0, fibre: 0, sodium: 400, calories: 28, category: "Extras", unit: "g" },

  // ================================================================
  // BRANDED — PROTEIN BARS & DRINKS
  // ================================================================
  "Protein Bar (Quest)": { protein: 20.0, carbs: 25.0, fat: 9.0, fibre: 14.0, sodium: 260, calories: 200, category: "Protein", unit: "g" },
  "Protein Bar Lo Carb (Aussie Bodies)": { protein: 30.0, carbs: 16.0, fat: 6.5, fibre: 5.0, sodium: 180, calories: 243, category: "Protein", unit: "g" },
  "Musashi High Protein Bar": { protein: 33.0, carbs: 15.0, fat: 7.0, fibre: 4.0, sodium: 200, calories: 255, category: "Protein", unit: "g" },
  "Up&Go Original (Sanitarium)": { protein: 5.6, carbs: 18.5, fat: 2.5, fibre: 1.5, sodium: 105, calories: 118, category: "Protein", unit: "ml" },
  "Up&Go High Protein (Sanitarium)": { protein: 9.0, carbs: 15.5, fat: 2.0, fibre: 1.5, sodium: 120, calories: 118, category: "Protein", unit: "ml" },
  "Rokeby Farms Whole Protein Smoothie": { protein: 10.0, carbs: 8.0, fat: 2.5, fibre: 0.5, sodium: 85, calories: 94, category: "Protein", unit: "ml" },

  // ================================================================
  // BRANDED — GRAINS, BREAD & CARBS
  // ================================================================
  "Rolled Oats (Uncle Tobys)": { protein: 11.0, carbs: 58.7, fat: 7.5, fibre: 9.4, sodium: 4, calories: 361, category: "Carbs", unit: "g" },
  "Weet-Bix (Sanitarium)": { protein: 12.0, carbs: 63.0, fat: 1.5, fibre: 11.5, sodium: 270, calories: 315, category: "Carbs", unit: "g" },
  "White Rice Raw (SunRice)": { protein: 7.1, carbs: 78.9, fat: 0.6, fibre: 0.4, sodium: 1, calories: 350, category: "Carbs", unit: "g" },
  "Brown Rice Raw (SunRice)": { protein: 7.5, carbs: 73.0, fat: 2.7, fibre: 3.5, sodium: 4, calories: 357, category: "Carbs", unit: "g" },
  "Basmati Rice Raw (SunRice)": { protein: 7.3, carbs: 78.0, fat: 0.5, fibre: 0.5, sodium: 2, calories: 349, category: "Carbs", unit: "g" },
  "Microwave Rice White 90sec (SunRice)": { protein: 2.8, carbs: 33.5, fat: 0.5, fibre: 0.3, sodium: 3, calories: 150, category: "Carbs", unit: "g" },
  "Microwave Rice Brown 90sec (SunRice)": { protein: 3.0, carbs: 31.5, fat: 1.5, fibre: 1.5, sodium: 5, calories: 152, category: "Carbs", unit: "g" },
  "Pasta Dry (San Remo)": { protein: 12.5, carbs: 70.2, fat: 1.5, fibre: 3.2, sodium: 3, calories: 348, category: "Carbs", unit: "g" },
  "Pasta Wholemeal Dry (San Remo)": { protein: 13.5, carbs: 64.0, fat: 2.0, fibre: 7.5, sodium: 5, calories: 334, category: "Carbs", unit: "g" },
  "Quinoa Raw": { protein: 14.1, carbs: 64.2, fat: 6.1, fibre: 7.0, sodium: 5, calories: 368, category: "Carbs", unit: "g" },
  "Wholegrain Bread 9 Grain (Tip Top)": { protein: 9.5, carbs: 40.0, fat: 4.2, fibre: 5.8, sodium: 390, calories: 240, category: "Carbs", unit: "g" },
  "White Bread Soft (Tip Top)": { protein: 8.0, carbs: 47.5, fat: 3.5, fibre: 2.5, sodium: 450, calories: 258, category: "Carbs", unit: "g" },
  "Multigrain Bread (Helgas)": { protein: 9.8, carbs: 42.0, fat: 4.5, fibre: 5.5, sodium: 410, calories: 248, category: "Carbs", unit: "g" },
  "Pita Bread (Mission)": { protein: 9.0, carbs: 51.0, fat: 2.5, fibre: 2.8, sodium: 420, calories: 265, category: "Carbs", unit: "g" },
  "Tortilla Wraps Plain (Mission)": { protein: 8.5, carbs: 50.5, fat: 5.5, fibre: 3.0, sodium: 550, calories: 287, category: "Carbs", unit: "g" },
  "Wholemeal Tortilla Wraps (Mission)": { protein: 9.5, carbs: 46.5, fat: 5.5, fibre: 6.0, sodium: 530, calories: 276, category: "Carbs", unit: "g" },
  "Rice Cakes Plain (Sunrice)": { protein: 7.5, carbs: 78.0, fat: 1.0, fibre: 1.5, sodium: 5, calories: 355, category: "Carbs", unit: "g" },
  "Corn Thins (Real Foods)": { protein: 7.5, carbs: 76.0, fat: 1.5, fibre: 2.5, sodium: 5, calories: 352, category: "Carbs", unit: "g" },
  "Vita-Weat Crackers (Arnotts)": { protein: 10.5, carbs: 64.0, fat: 5.5, fibre: 8.5, sodium: 510, calories: 350, category: "Carbs", unit: "g" },
  "Ryvita Crispbread": { protein: 9.0, carbs: 62.0, fat: 2.0, fibre: 16.5, sodium: 350, calories: 303, category: "Carbs", unit: "g" },
  "English Muffins (Woolworths)": { protein: 9.0, carbs: 44.0, fat: 2.5, fibre: 3.0, sodium: 480, calories: 237, category: "Carbs", unit: "g" },

  // ================================================================
  // FRUIT
  // ================================================================
  "Banana Raw": { protein: 1.1, carbs: 22.8, fat: 0.3, fibre: 2.6, sodium: 1, calories: 90, category: "Carbs", unit: "g" },
  "Apple Raw": { protein: 0.3, carbs: 13.8, fat: 0.2, fibre: 2.4, sodium: 1, calories: 57, category: "Carbs", unit: "g" },
  "Blueberries Fresh": { protein: 0.7, carbs: 14.5, fat: 0.3, fibre: 2.4, sodium: 1, calories: 57, category: "Carbs", unit: "g" },
  "Strawberries Fresh": { protein: 0.8, carbs: 7.7, fat: 0.3, fibre: 2.0, sodium: 1, calories: 32, category: "Carbs", unit: "g" },
  "Mango Raw": { protein: 0.8, carbs: 17.0, fat: 0.4, fibre: 1.8, sodium: 2, calories: 70, category: "Carbs", unit: "g" },
  "Orange Raw": { protein: 1.0, carbs: 11.8, fat: 0.1, fibre: 2.4, sodium: 0, calories: 47, category: "Carbs", unit: "g" },
  "Watermelon Raw": { protein: 0.6, carbs: 7.6, fat: 0.2, fibre: 0.4, sodium: 1, calories: 30, category: "Carbs", unit: "g" },
  "Grapes Raw": { protein: 0.6, carbs: 18.1, fat: 0.2, fibre: 0.9, sodium: 2, calories: 69, category: "Carbs", unit: "g" },
  "Kiwi Fruit Raw": { protein: 1.1, carbs: 14.0, fat: 0.5, fibre: 3.0, sodium: 4, calories: 61, category: "Carbs", unit: "g" },
  "Pineapple Raw": { protein: 0.5, carbs: 13.1, fat: 0.1, fibre: 1.4, sodium: 1, calories: 50, category: "Carbs", unit: "g" },

  // ================================================================
  // VEGETABLES
  // ================================================================
  "Broccoli Raw": { protein: 2.8, carbs: 7.0, fat: 0.4, fibre: 2.6, sodium: 33, calories: 34, category: "Vegetables", unit: "g" },
  "Broccolini Raw": { protein: 3.6, carbs: 5.3, fat: 0.5, fibre: 2.8, sodium: 30, calories: 35, category: "Vegetables", unit: "g" },
  "Spinach Raw": { protein: 2.9, carbs: 3.6, fat: 0.4, fibre: 2.2, sodium: 79, calories: 23, category: "Vegetables", unit: "g" },
  "Kale Raw": { protein: 4.3, carbs: 8.8, fat: 1.5, fibre: 3.6, sodium: 53, calories: 50, category: "Vegetables", unit: "g" },
  "Capsicum Red Raw": { protein: 1.0, carbs: 6.0, fat: 0.3, fibre: 2.1, sodium: 4, calories: 31, category: "Vegetables", unit: "g" },
  "Capsicum Green Raw": { protein: 0.9, carbs: 4.6, fat: 0.2, fibre: 1.7, sodium: 3, calories: 20, category: "Vegetables", unit: "g" },
  "Capsicum Yellow Raw": { protein: 1.0, carbs: 6.3, fat: 0.2, fibre: 2.1, sodium: 2, calories: 27, category: "Vegetables", unit: "g" },
  "Zucchini Raw": { protein: 1.2, carbs: 3.1, fat: 0.3, fibre: 1.0, sodium: 8, calories: 17, category: "Vegetables", unit: "g" },
  "Cucumber Raw": { protein: 0.7, carbs: 3.6, fat: 0.1, fibre: 0.5, sodium: 2, calories: 16, category: "Vegetables", unit: "g" },
  "Tomato Raw": { protein: 0.9, carbs: 3.9, fat: 0.2, fibre: 1.2, sodium: 5, calories: 18, category: "Vegetables", unit: "g" },
  "Carrot Raw": { protein: 0.9, carbs: 9.6, fat: 0.2, fibre: 2.8, sodium: 69, calories: 32, category: "Vegetables", unit: "g" },
  "Mushrooms Button Raw": { protein: 2.5, carbs: 4.0, fat: 0.3, fibre: 1.0, sodium: 5, calories: 22, category: "Vegetables", unit: "g" },
  "Onion Brown Raw": { protein: 1.1, carbs: 9.3, fat: 0.1, fibre: 1.7, sodium: 4, calories: 40, category: "Vegetables", unit: "g" },
  "Red Onion Raw": { protein: 1.1, carbs: 8.5, fat: 0.1, fibre: 1.4, sodium: 4, calories: 38, category: "Vegetables", unit: "g" },
  "Asparagus Raw": { protein: 2.2, carbs: 3.9, fat: 0.1, fibre: 2.1, sodium: 2, calories: 20, category: "Vegetables", unit: "g" },
  "Green Beans Raw": { protein: 1.8, carbs: 7.1, fat: 0.1, fibre: 3.4, sodium: 6, calories: 31, category: "Vegetables", unit: "g" },
  "Peas Frozen (Birds Eye)": { protein: 5.4, carbs: 14.0, fat: 0.4, fibre: 5.1, sodium: 3, calories: 81, category: "Vegetables", unit: "g" },
  "Sweet Potato Raw": { protein: 1.6, carbs: 20.1, fat: 0.1, fibre: 3.0, sodium: 55, calories: 87, category: "Carbs", unit: "g" },
  "White Potato Raw": { protein: 2.0, carbs: 17.0, fat: 0.1, fibre: 1.8, sodium: 7, calories: 77, category: "Carbs", unit: "g" },
  "Cauliflower Raw": { protein: 1.9, carbs: 5.0, fat: 0.3, fibre: 2.0, sodium: 30, calories: 25, category: "Vegetables", unit: "g" },
  "Celery Raw": { protein: 0.7, carbs: 3.0, fat: 0.1, fibre: 1.6, sodium: 80, calories: 14, category: "Vegetables", unit: "g" },
  "Bok Choy Raw": { protein: 1.5, carbs: 2.2, fat: 0.2, fibre: 1.0, sodium: 65, calories: 13, category: "Vegetables", unit: "g" },
  "Corn Kernels Canned (SPC)": { protein: 3.2, carbs: 17.5, fat: 1.0, fibre: 2.5, sodium: 220, calories: 90, category: "Vegetables", unit: "g" },
  "Beetroot Canned (Edgell)": { protein: 1.5, carbs: 9.0, fat: 0.1, fibre: 1.8, sodium: 300, calories: 42, category: "Vegetables", unit: "g" },
  "Tofu Firm": { protein: 8.1, carbs: 1.5, fat: 4.2, fibre: 0.3, sodium: 7, calories: 76, category: "Protein", unit: "g" },

  // ================================================================
  // FATS & OILS
  // ================================================================
  "Avocado Raw": { protein: 2.0, carbs: 1.9, fat: 15.4, fibre: 6.7, sodium: 7, calories: 160, category: "Fats", unit: "g" },
  "Olive Oil Extra Virgin": { protein: 0, carbs: 0, fat: 100.0, fibre: 0, sodium: 0, calories: 884, category: "Fats", unit: "ml" },
  "Coconut Oil": { protein: 0, carbs: 0, fat: 100.0, fibre: 0, sodium: 0, calories: 862, category: "Fats", unit: "ml" },
  "Canola Oil": { protein: 0, carbs: 0, fat: 100.0, fibre: 0, sodium: 0, calories: 884, category: "Fats", unit: "ml" },
  "Butter (Mainland)": { protein: 0.6, carbs: 0.5, fat: 81.0, fibre: 0, sodium: 630, calories: 740, category: "Fats", unit: "g" },
  "Peanut Butter Natural (Bega)": { protein: 26.0, carbs: 13.0, fat: 52.0, fibre: 6.5, sodium: 8, calories: 614, category: "Fats", unit: "g" },
  "Almond Butter (Macro Woolworths)": { protein: 20.0, carbs: 7.0, fat: 56.0, fibre: 10.0, sodium: 5, calories: 614, category: "Fats", unit: "g" },
  "Almonds Raw": { protein: 21.2, carbs: 5.6, fat: 53.5, fibre: 12.5, sodium: 1, calories: 589, category: "Fats", unit: "g" },
  "Cashews Raw": { protein: 15.3, carbs: 30.2, fat: 46.4, fibre: 3.3, sodium: 12, calories: 580, category: "Fats", unit: "g" },
  "Walnuts Raw": { protein: 14.4, carbs: 3.0, fat: 69.2, fibre: 6.7, sodium: 2, calories: 696, category: "Fats", unit: "g" },
  "Chia Seeds": { protein: 17.0, carbs: 42.1, fat: 31.0, fibre: 34.4, sodium: 16, calories: 486, category: "Fats", unit: "g" },
  "Flaxseeds Ground": { protein: 18.0, carbs: 18.0, fat: 42.0, fibre: 28.0, sodium: 30, calories: 500, category: "Fats", unit: "g" },
  "Sunflower Seeds": { protein: 20.8, carbs: 20.0, fat: 51.5, fibre: 8.6, sodium: 9, calories: 585, category: "Fats", unit: "g" },

  // ================================================================
  // CONDIMENTS & EXTRAS
  // ================================================================
  "Tomato Sauce (Heinz)": { protein: 1.5, carbs: 24.0, fat: 0.1, fibre: 1.0, sodium: 960, calories: 105, category: "Extras", unit: "g" },
  "BBQ Sauce (Masterfoods)": { protein: 1.5, carbs: 36.0, fat: 0.2, fibre: 0.5, sodium: 910, calories: 155, category: "Extras", unit: "g" },
  "Soy Sauce Low Salt (Kikkoman)": { protein: 8.1, carbs: 7.9, fat: 0.1, fibre: 0.2, sodium: 5720, calories: 60, category: "Extras", unit: "ml" },
  "Honey (Capilano)": { protein: 0.3, carbs: 82.0, fat: 0, fibre: 0.2, sodium: 4, calories: 304, category: "Extras", unit: "g" },
  "Mayonnaise Light (Hellmans)": { protein: 0.8, carbs: 7.5, fat: 18.5, fibre: 0, sodium: 480, calories: 202, category: "Extras", unit: "g" },
  "Salsa (Old El Paso)": { protein: 1.2, carbs: 6.5, fat: 0.2, fibre: 1.0, sodium: 580, calories: 32, category: "Extras", unit: "g" },
  "Hot Sauce (Tabasco)": { protein: 0.5, carbs: 1.5, fat: 0.2, fibre: 0.3, sodium: 1200, calories: 12, category: "Extras", unit: "ml" },
  "Dark Chocolate 85% (Lindt)": { protein: 9.0, carbs: 20.0, fat: 48.0, fibre: 11.0, sodium: 10, calories: 560, category: "Extras", unit: "g" },
};

const MEAL_SLOTS = [
  { id: "breakfast", label: "Breakfast" },
  { id: "snack1", label: "Morning Snack" },
  { id: "lunch", label: "Lunch" },
  { id: "snack2", label: "Afternoon Snack" },
  { id: "dinner", label: "Dinner" },
  { id: "snack3", label: "Evening Snack / Shake" }
];

const GOALS = {
  "Fat Loss (Aggressive)": { adjustment: -500 },
  "Fat Loss (Moderate)": { adjustment: -250 },
  "Maintenance": { adjustment: 0 },
  "Recomp": { adjustment: 0 },
  "Lean Bulk": { adjustment: 200 },
  "Muscle Gain (Moderate)": { adjustment: 350 },
  "Athletic Performance": { adjustment: 100 },
  "Endurance": { adjustment: 0 },
  "Enhanced Athlete": { adjustment: 500 }
};

const ACTIVITY_MULTIPLIERS = {
  "Sedentary (desk job, no exercise)": 1.2,
  "Lightly Active (1-2 days/week)": 1.375,
  "Moderately Active (3-4 days/week)": 1.55,
  "Very Active (5-6 days/week, hard training)": 1.725,
  "Extremely Active (2x/day or physical job + training)": 1.9
};
