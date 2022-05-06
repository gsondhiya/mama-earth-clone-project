

 function search(){
    let searchtext= document.getElementById("search").value
  let filterdata= products.filter(function(elem){
        return elem.name.includes(searchtext)
    })
    console.log(filterdata)
    displayData(filterdata)
   
}





let products=[
   {poster:"https://honasa-mamaearth-production.imgix.net/_/f/_foaming-face-wash-for-kids_.jpg?auto=compress&fit=scale&w=400&h=400",name:"Foaming Face Wash For Kids With AloeVera &Coconut For Gentle Cleansing- 1..",detail:"Gently Cleanses | Sulfate-Free | Keeps Skin",rating:"⭐5.0",price:599},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/g/agent-apple-body-wash.jpg?auto=compress&fit=scale&w=400&h=400",name:"Agent Apple Body Wash for Kids withApple &Oat Protein 300 ml (Pack of 2)",detail:"Gently Cleanses | Sulfate-Free | Keeps Skin",rating:"⭐5.0",price:999},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/a/mango-body-wash.jpg?auto=compress&fit=scale&w=400&h=400",name:"Major Mango Body Wash For Kids with Mango &Oat Protein -300 ml (Pack of 2)",detail:"Gently Cleanses | Sulfate-Free | Keeps Skin",rating:"⭐5.0",price:599},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/u/super-strawberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",name:"Super Strawberry Body Lotion for KidsWith Strawberry & Shea Butter - 400 m...",detail:"Gently Nourishes Skin | Makes Skin Soft",rating:"⭐5.0",price:798},
    {poster:"https://honasa-mamaearth-production.imgix.net/o/r/original-orange-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",name:"Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml ",detail:"Gently Nourishes Skin | Makes Skin Soft",rating:"⭐5.0",price:899},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/a/major-mango-body-lotion-for-kids.jpg?auto=compress&fit=scale&w=400&h=400",name:"Major Mango Body Lotion For Kids with Mango Butter & Milk Protein - 400 ml.",detail:"Gently Nourishes Skin | Makes Skin Soft &supple",rating:"⭐5.0",price:299},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/g/agent-apple-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",name:"Super Strawberry Body Lotion for KidsWith Strawberry & Shea Butter-400 m",detail:"Gently Nourishes Skin | Makes Skin Soft & supple",rating:"⭐5.0",price:399},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/t/strawberry-body-lotions.jpg?auto=compress&fit=scale&w=400&h=400",name:"Agent Apple Body Lotion for Kids withApple & Oat Milk- 400 ml",detail:"Gently Nourishes Skin | Makes Skin Soft & supple",rating:"⭐5.0",price:'₹.800'},
    {poster:"https://honasa-mamaearth-production.imgix.net/o/r/orange-body-lotions.jpg?auto=compress&fit=scale&w=400&h=400",name:"Super Strawberry Body Lotion for Kids With Strawberry & Shea Butter-400 m",detail:"Gently Nourishes Skin | Makes Skin Soft & supple",rating:"⭐5.0",price:799},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/a/mango-body-lotions.jpg?auto=compress&fit=scale&w=400&h=400",name:"Agent Apple Body Lotion for Kids withApple &Oat Milk- 400 ml (Pack of 2)",detail:"Gently Nourishes Skin | Makes Skin Soft & supple",rating:"⭐5.0",price:133},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/r/brave-blueberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",name:"Original Orange Body Lotion For KidsWith Orange & Shea Butter - 400 ml",detail:"Gently Nourishes | Makes Skin Soft & Supple",rating:"⭐5.0",price:499},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/g/agent_apple-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",name:"Major Mango Body Lotion For Kids withMango Butter & Milk Protein-400 ml",detail:"Gently Nourishes | Makes Skin Soft & Supple",rating:"⭐5.0",price:299},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-lip-balm-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Brave Blueberry Body Lotion For Kidswith Blueberry and Kokum Butter- 400 ml",detail:"Gently Nourishes | Makes Skin Soft & Supple",rating:"⭐5.0",price:399},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-diaper-rash-cream-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Agent Apple Body Lotion for Kids withApple & Oat Milk- 400 ml",detail:"Gently Nourishes | Makes Skin Soft & Supple",rating:"⭐5.0",price:584},
    {poster:"https://honasa-mamaearth-production.imgix.net/_/m/_milky-soft-body-lotion__1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Milky Soft Natural Lip Balm for Babies with Oats, Milk &Calendula - 4g",detail:"12-Hour Moisturization| Heals Chapped Lips",rating:"⭐5.0",price:599},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-shampoo-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Milky Soft Body Lotion for Babies with oats, Milk and Calendula - 400ml",detail:"Prevents Rashes Soothes Redness & Itching",rating:"⭐5.0",price:699},
    {poster:"https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",name:"Milky Soft Diaper Rash Cream for Babies -Milky Soft Shampoo with Oats, ",detail:"Deeply Nourishes Skin |24-Hour",rating:"⭐5.0",price:799},
    {poster:"https://honasa-mamaearth-production.imgix.net/n/o/nourishing-bathing-bars_2_anb6wlrvagej2noa.jpg?auto=compress&fit=scale&w=400&h=400",name:"Calendula for Babies -400 ml50g",detail:"Gently Cleanses Hair | Balances Scalp pH",rating:"⭐5.0",price:899},
    {poster:"https://honasa-mamaearth-production.imgix.net/i/m/img_4810probs_goyh8daj1sppnciu.jpg?auto=compress&fit=scale&w=400&h=400",name:"Milky Soft Face Cream With MurumuruButter for Babies, 60 ml",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:999},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/a/baby_hair_oil_200_ml_1200x1200__yh1i6qtlgyc253s5.jpg?auto=compress&fit=scale&w=400&h=400",name:"Nourishing Bathing Bar Soap For Kids - (  Pack of 5, 75g Each)",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:155},
    {poster:"https://honasa-mamaearth-production.imgix.net/f/d/fds_9573-props_qwhqvlzshodrynok.jpg?auto=compress&fit=scale&w=400&h=400",name:"Moisturizing Daily Lotion For Babies,200ml",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:266},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/a/baby_massage_oil_200_ml__1200x1200__i0oy2adtieurwcls.jpg?auto=compress&fit=scale&w=400&h=400",name:"Moisturizing Daily Lotion For Babies,200ml",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:145},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/h/shampo_props_ky0ozlvydza60eyc.jpg?auto=compress&fit=scale&w=400&h=400",name:"Moisturizing Bathing Bar Soap For Babies",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:521},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?auto=compress&fit=scale&w=400&h=400",name:"Deeply Nourishing Body Wash for babies",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:814},
    {poster:"https://honasa-mamaearth-production.imgix.net/o/r/orange_baby_body_wash_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Original Orange Body Wash For Kids withOrange and Oat Protein -300 ml",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:164},
    {poster:"https://honasa-mamaearth-production.imgix.net/g/r/green_apple_baby_body_wash_1_1_.jpg?auto=compress&fit=scale&w=400&h=400",name:"Agent Apple Body Wash for Kids withApple and Oat Protein - 300 ml",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:89},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/a/mango_baby_body_wash.jpg?auto=compress&fit=scale&w=400&h=400",name:"Major Mango Body Wash For Kids withMango and Oat Protein 300 ml",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:"₹.445"},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/t/strawberry_baby_body_wash_1.jpeg?auto=compress&fit=scale&w=400&h=400",name:"Super Strawberry Body Wash for Kidswith Strawberry and Oat Protein - 300 ml",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:784},
    {poster:"https://honasa-mamaearth-production.imgix.net/d/i/diapers-xl-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Plant-Based Diaper Pants for Babies - 1217 kg (Size XL -30 Diapers)",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:145},
    {poster:"https://honasa-mamaearth-production.imgix.net/d/i/diapers-l-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Plant-Based Diaper Pants for Babies -9-14 kg (Size L-30 Diapers)",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:584},
    {poster:"https://honasa-mamaearth-production.imgix.net/d/i/diapers-m-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Plant-Based Diaper Pants for Babies -7-12 kg (Size M-30 Diapers)",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:256},
    {poster:"https://honasa-mamaearth-production.imgix.net/d/i/diapers-m-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Plant-Based Diaper Pants for Babies - 4-6kg (Size S-30 Diapers)",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:321},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/a/baby_wash_shampoo_400ml__1_1_hwl1d0hyj5mzwzsz.jpg?auto=compress&fit=scale&w=400&h=400",name:"Deeply Nourishing Body Wash for Babies400ml and Gentle Cleansing Shampoo",detail:"Natural Cleansers Tear-Free Formula",rating:"⭐5.0",price:74},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/o/soap_baby_shampoo_200ml__te5ubahbxo8gd5yf.jpg?auto=compress&fit=scale&w=400&h=400",name:"Moisturizing Bathing Bar (Pack of 2) andGentle Cleansing Shampoo 200ml Combo",detail:"Natural Cleansers Tear-Free Formula",rating:"⭐5.0",price:258},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/a/baby_massage_oil_200_ml__1200x1200__i0oy2adtieurwcls.jpg?auto=compress&fit=scale&w=400&h=400",name:"Moisturizing Daily Lotion For Babies,200ml",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:145},
    {poster:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Charcoal Facewash for oil control, 100ml",detail:"Pollution Defense Formula | Controls Excess Oil",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Facewash for acne and pimples,100ml",detail:"Controls Acne & Pimples | Removes Excess Oil",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Ubtan Face Wash with Turmeric &Saffron for Tan Removal - 100ml",detail:"Removes Tan | Repairs Sun Damage| Brightens Skin",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Anti Dandruff Hair Mask, 200ml",detail:"Reduces Dandruff & Controls Oil| Minimizes Itching",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/l/almond-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml |Almond",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/r/i/rice1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Rice",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Tea Tree",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hob_7.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Onion",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/k/skin-illuminate-face-cream.jpg?auto=compress&fit=scale&w=400&h=400",name:"Skin illuminate Face Cream with Vitamin Aloe Vera Gel Moisturizer with Aloe Vera",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Onion Hair Styling Cream for Men",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/l/aloe-vera-sunscreen-face-serum.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera Sunscreen Face Serum",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-styling-cream.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera &&Ashwagandha for UVA",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/h/e/henna-shampoo-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera &&Ashwagandha for UVA",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/l/aloe-vera-face-serum.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera Face Serum with Aloe Vera & Ashwagandha for a Youthful Glow- 30 ml",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/r/artboard_2_8.jpg?auto=compress&fit=scale&w=400&h=400",name:"Glow Serum Foundation-Toffee Glow",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/v/i/vitamin-c-underarm-scrub.jpg?auto=compress&fit=scale&w=400&h=400",name:"Vitamin Underarm Scrub with Vitamin and Turmeric for Brighter Underarms - 5...",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Charcoal Facewash for oil control, 100ml",detail:"Pollution Defense Formula | Controls Excess Oil",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Facewash for acne and pimples,100ml",detail:"Controls Acne & Pimples | Removes Excess Oil",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Ubtan Face Wash with Turmeric &Saffron for Tan Removal - 100ml",detail:"Removes Tan | Repairs Sun Damage| Brightens Skin",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Anti Dandruff Hair Mask, 200ml",detail:"Reduces Dandruff & Controls Oil| Minimizes Itching",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/l/almond-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml |Almond",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/r/i/rice1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Rice",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Tea Tree",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hob_7.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Onion",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/k/skin-illuminate-face-cream.jpg?auto=compress&fit=scale&w=400&h=400",name:"Skin illuminate Face Cream with Vitamin Aloe Vera Gel Moisturizer with Aloe Vera",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Onion Hair Styling Cream for Men",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/l/aloe-vera-sunscreen-face-serum.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera Sunscreen Face Serum",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/r/artboard_2_8.jpg?auto=compress&fit=scale&w=400&h=400",name:"Glow Serum Foundation-Toffee Glow",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/v/i/vitamin-c-underarm-scrub.jpg?auto=compress&fit=scale&w=400&h=400",name:"Vitamin Underarm Scrub with Vitamin and Turmeric for Brighter Underarms - 5...",detail:"",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Charcoal Facewash for oil control, 100ml",detail:"Pollution Defense Formula | Controls Excess Oil",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Facewash for acne and pimples,100ml",detail:"Controls Acne & Pimples | Removes Excess Oil",rating:"⭐5.5",price:594},
    {poster:"https://honasa-mamaearth-production.imgix.net/_/f/_foaming-face-wash-for-kids_.jpg?auto=compress&fit=scale&w=400&h=400",name:"Foaming Face Wash For  With AloeVera &Coconut For Gentle Cleansing- 1..",detail:"Gently Cleanses | Sulfate-Free | Keeps Skin",rating:"⭐5.0",price:599},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/g/agent-apple-body-wash.jpg?auto=compress&fit=scale&w=400&h=400",name:"Agent Apple Body Wash for  withApple &Oat Protein 300 ml (Pack of 2)",detail:"Gently Cleanses | Sulfate-Free | Keeps Skin",rating:"⭐5.0",price:999},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/a/mango-body-wash.jpg?auto=compress&fit=scale&w=400&h=400",name:"Major Mango Body Wash For  with Mango &Oat Protein -300 ml (Pack of 2)",detail:"Gently Cleanses | Sulfate-Free | Keeps Skin",rating:"⭐5.0",price:599},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/u/super-strawberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",name:"Super Strawberry Body Lotion for With Strawberry & Shea Butter - 400 m...",detail:"Gently Nourishes Skin | Makes Skin Soft",rating:"⭐5.0",price:798},
    {poster:"https://honasa-mamaearth-production.imgix.net/o/r/original-orange-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",name:"Original Orange Body Lotion For  With Orange & Shea Butter - 400 ml ",detail:"Gently Nourishes Skin | Makes Skin Soft",rating:"⭐5.0",price:989},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/a/major-mango-body-lotion-for-kids.jpg?auto=compress&fit=scale&w=400&h=400",name:"Major Mango Body Lotion For  with Mango Butter & Milk Protein - 400 ml.",detail:"Gently Nourishes Skin | Makes Skin Soft &supple",rating:"⭐5.0",price:299},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/g/agent-apple-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",name:"Super Strawberry Body Lotion for With Strawberry & Shea Butter-400 m",detail:"Gently Nourishes Skin | Makes Skin Soft & supple",rating:"⭐5.0",price:399},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/t/strawberry-body-lotions.jpg?auto=compress&fit=scale&w=400&h=400",name:"Agent Apple Body Lotion for  withApple & Oat Milk- 400 ml",detail:"Gently Nourishes Skin | Makes Skin Soft & supple",rating:"⭐5.0",price:800},
    {poster:"https://honasa-mamaearth-production.imgix.net/o/r/orange-body-lotions.jpg?auto=compress&fit=scale&w=400&h=400",name:"Super Strawberry Body Lotion for  With Strawberry & Shea Butter-400 m",detail:"Gently Nourishes Skin | Makes Skin Soft & supple",rating:"⭐5.0",price:799},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/a/mango-body-lotions.jpg?auto=compress&fit=scale&w=400&h=400",name:"Agent Apple Body Lotion for  withApple &Oat Milk- 400 ml (Pack of 2)",detail:"Gently Nourishes Skin | Makes Skin Soft & supple",rating:"⭐5.0",price:133},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/r/brave-blueberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",name:"Original Orange Body Lotion For With Orange & Shea Butter - 400 ml",detail:"Gently Nourishes | Makes Skin Soft & Supple",rating:"⭐5.0",price:499},
    {poster:"https://honasa-mamaearth-production.imgix.net/a/g/agent_apple-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",name:"Major Mango Body Lotion For  withMango Butter & Milk Protein-400 ml",detail:"Gently Nourishes | Makes Skin Soft & Supple",rating:"⭐5.0",price:299},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-lip-balm-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Brave Blueberry Body Lotion For with Blueberry and Kokum Butter- 400 ml",detail:"Gently Nourishes | Makes Skin Soft & Supple",rating:"⭐5.0",price:399},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-diaper-rash-cream-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Agent Apple Body Lotion for  withApple & Oat Milk- 400 ml",detail:"Gently Nourishes | Makes Skin Soft & Supple",rating:"⭐5.0",price:499},
    {poster:"https://honasa-mamaearth-production.imgix.net/_/m/_milky-soft-body-lotion__1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Milky Soft Natural Lip Balm for Babies with Oats, Milk &Calendula - 4g",detail:"12-Hour Moisturization| Heals Chapped Lips",rating:"⭐5.0",price:599},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-shampoo-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Milky Soft Body Lotion for Babies with oats, Milk and Calendula - 400ml",detail:"Prevents Rashes Soothes Redness & Itching",rating:"⭐5.0",price:69},
    {poster:"https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",name:"Milky Soft Diaper Rash Cream for Babies -Milky Soft Shampoo with Oats, ",detail:"Deeply Nourishes Skin |24-Hour",rating:"⭐5.0",price:799},
    {poster:"https://honasa-mamaearth-production.imgix.net/n/o/nourishing-bathing-bars_2_anb6wlrvagej2noa.jpg?auto=compress&fit=scale&w=400&h=400",name:"Calendula for Babies -400 ml50g",detail:"Gently Cleanses Hair | Balances Scalp pH",rating:"⭐5.0",price:995},
    {poster:"https://honasa-mamaearth-production.imgix.net/i/m/img_4810probs_goyh8daj1sppnciu.jpg?auto=compress&fit=scale&w=400&h=400",name:"Milky Soft Face Cream With MurumuruButter for Babies, 60 ml",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:999},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/a/baby_hair_oil_200_ml_1200x1200__yh1i6qtlgyc253s5.jpg?auto=compress&fit=scale&w=400&h=400",name:"Nourishing Bathing Bar Soap For  - (  Pack of 5, 75g Each)",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:155},
    {poster:"https://honasa-mamaearth-production.imgix.net/f/d/fds_9573-props_qwhqvlzshodrynok.jpg?auto=compress&fit=scale&w=400&h=400",name:"Moisturizing Daily Lotion For Babies,200ml",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:266},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/a/baby_massage_oil_200_ml__1200x1200__i0oy2adtieurwcls.jpg?auto=compress&fit=scale&w=400&h=400",name:"Moisturizing Daily Lotion For Babies,200ml",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:145},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/h/shampo_props_ky0ozlvydza60eyc.jpg?auto=compress&fit=scale&w=400&h=400",name:"Moisturizing Bathing Bar Soap For Babies",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:321},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?auto=compress&fit=scale&w=400&h=400",name:"Deeply Nourishing Body Wash for babies",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:145},
    {poster:"https://honasa-mamaearth-production.imgix.net/o/r/orange_baby_body_wash_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Original Orange Body Wash For  withOrange and Oat Protein -300 ml",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:164},
    {poster:"https://honasa-mamaearth-production.imgix.net/g/r/green_apple_baby_body_wash_1_1_.jpg?auto=compress&fit=scale&w=400&h=400",name:"Agent Apple Body Wash for  withApple and Oat Protein - 300 ml",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:89},
    {poster:"https://honasa-mamaearth-production.imgix.net/m/a/mango_baby_body_wash.jpg?auto=compress&fit=scale&w=400&h=400",name:"Major Mango Body Wash For  withMango and Oat Protein 300 ml",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:445},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/t/strawberry_baby_body_wash_1.jpeg?auto=compress&fit=scale&w=400&h=400",name:"Super Strawberry Body Wash for with Strawberry and Oat Protein - 300 ml",detail:"Gently Cleanses Skin| Sulfate-Free | Fruity Essence",rating:"⭐5.0",price:784},
    {poster:"https://honasa-mamaearth-production.imgix.net/d/i/diapers-xl-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Plant-Based Diaper Pants for Babies - 1217 kg (Size XL -30 Diapers)",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:145},
    {poster:"https://honasa-mamaearth-production.imgix.net/d/i/diapers-l-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Plant-Based Diaper Pants for Babies -9-14 kg (Size L-30 Diapers)",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:985},
    {poster:"https://honasa-mamaearth-production.imgix.net/d/i/diapers-m-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Plant-Based Diaper Pants for Babies -7-12 kg (Size M-30 Diapers)",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:256},
    {poster:"https://honasa-mamaearth-production.imgix.net/d/i/diapers-m-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Plant-Based Diaper Pants for Babies - 4-6kg (Size S-30 Diapers)",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:321},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/a/baby_wash_shampoo_400ml__1_1_hwl1d0hyj5mzwzsz.jpg?auto=compress&fit=scale&w=400&h=400",name:"Deeply Nourishing Body Wash for Babies400ml and Gentle Cleansing Shampoo",detail:"Natural Cleansers Tear-Free Formula",rating:"⭐5.0",price:741},
    {poster:"https://honasa-mamaearth-production.imgix.net/s/o/soap_baby_shampoo_200ml__te5ubahbxo8gd5yf.jpg?auto=compress&fit=scale&w=400&h=400",name:"Moisturizing Bathing Bar (Pack of 2) andGentle Cleansing Shampoo 200ml Combo",detail:"Natural Cleansers Tear-Free Formula",rating:"⭐5.0",price:258},
    {poster:"https://honasa-mamaearth-production.imgix.net/b/a/baby_massage_oil_200_ml__1200x1200__i0oy2adtieurwcls.jpg?auto=compress&fit=scale&w=400&h=400",name:"Moisturizing Daily Lotion For Babies,200ml",detail:"2x Absorbtion | 12-Hour Leak Protection",rating:"⭐5.0",price:145},
    
   {poster:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Charcoal Facewash for oil control, 100ml",detail:"Pollution Defense Formula | Controls Excess Oil",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Facewash for acne and pimples,100ml",detail:"Controls Acne & Pimples | Removes Excess Oil",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Ubtan Face Wash with Turmeric &Saffron for Tan Removal - 100ml",detail:"Removes Tan | Repairs Sun Damage| Brightens Skin",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Anti Dandruff Hair Mask, 200ml",detail:"Reduces Dandruff & Controls Oil| Minimizes Itching",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/l/almond-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml |Almond",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/r/i/rice1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Rice",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Tea Tree",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hob_7.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Onion",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/s/k/skin-illuminate-face-cream.jpg?auto=compress&fit=scale&w=400&h=400",name:"Skin illuminate Face Cream with Vitamin Aloe Vera Gel Moisturizer with Aloe Vera",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Onion Hair Styling Cream for Men",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/l/aloe-vera-sunscreen-face-serum.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera Sunscreen Face Serum",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-styling-cream.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera &&Ashwagandha for UVA",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/h/e/henna-shampoo-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera &&Ashwagandha for UVA",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/l/aloe-vera-face-serum.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera Face Serum with Aloe Vera & Ashwagandha for a Youthful Glow- 30 ml",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/r/artboard_2_8.jpg?auto=compress&fit=scale&w=400&h=400",name:"Glow Serum Foundation-Toffee Glow",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/v/i/vitamin-c-underarm-scrub.jpg?auto=compress&fit=scale&w=400&h=400",name:"Vitamin Underarm Scrub with Vitamin and Turmeric for Brighter Underarms - 5...",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Charcoal Facewash for oil control, 100ml",detail:"Pollution Defense Formula | Controls Excess Oil",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Facewash for acne and pimples,100ml",detail:"Controls Acne & Pimples | Removes Excess Oil",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Ubtan Face Wash with Turmeric &Saffron for Tan Removal - 100ml",detail:"Removes Tan | Repairs Sun Damage| Brightens Skin",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Anti Dandruff Hair Mask, 200ml",detail:"Reduces Dandruff & Controls Oil| Minimizes Itching",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/l/almond-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml |Almond",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/r/i/rice1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Rice",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Tea Tree",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hob_7.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Onion",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/s/k/skin-illuminate-face-cream.jpg?auto=compress&fit=scale&w=400&h=400",name:"Skin illuminate Face Cream with Vitamin Aloe Vera Gel Moisturizer with Aloe Vera",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Onion Hair Styling Cream for Men",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/l/aloe-vera-sunscreen-face-serum.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera Sunscreen Face Serum",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/r/artboard_2_8.jpg?auto=compress&fit=scale&w=400&h=400",name:"Glow Serum Foundation-Toffee Glow",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/v/i/vitamin-c-underarm-scrub.jpg?auto=compress&fit=scale&w=400&h=400",name:"Vitamin Underarm Scrub with Vitamin and Turmeric for Brighter Underarms - 5...",detail:"",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Charcoal Facewash for oil control, 100ml",detail:"Pollution Defense Formula | Controls Excess Oil",rating:"⭐5.5",price:854},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Facewash for acne and pimples,100ml",detail:"Controls Acne & Pimples | Removes Excess Oil",rating:"⭐5.5",price:854},
   
   {poster:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Charcoal Facewash for oil control, 100ml",detail:"Pollution Defense Formula | Controls Excess Oil",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Facewash for acne and pimples,100ml",detail:"Controls Acne & Pimples | Removes Excess Oil",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Ubtan Face Wash with Turmeric &Saffron for Tan Removal - 100ml",detail:"Removes Tan | Repairs Sun Damage| Brightens Skin",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Anti Dandruff Hair Mask, 200ml",detail:"Reduces Dandruff & Controls Oil| Minimizes Itching",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/l/almond-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml |Almond",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/r/i/rice1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Rice",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Tea Tree",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hob_7.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Onion",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/s/k/skin-illuminate-face-cream.jpg?auto=compress&fit=scale&w=400&h=400",name:"Skin illuminate Face Cream with Vitamin Aloe Vera Gel Moisturizer with Aloe Vera",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Onion Hair Styling Cream for Men",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/l/aloe-vera-sunscreen-face-serum.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera Sunscreen Face Serum",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-styling-cream.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera &&Ashwagandha for UVA",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/h/e/henna-shampoo-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera &&Ashwagandha for UVA",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/l/aloe-vera-face-serum.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera Face Serum with Aloe Vera & Ashwagandha for a Youthful Glow- 30 ml",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/r/artboard_2_8.jpg?auto=compress&fit=scale&w=400&h=400",name:"Glow Serum Foundation-Toffee Glow",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/v/i/vitamin-c-underarm-scrub.jpg?auto=compress&fit=scale&w=400&h=400",name:"Vitamin Underarm Scrub with Vitamin and Turmeric for Brighter Underarms - 5...",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Charcoal Facewash for oil control, 100ml",detail:"Pollution Defense Formula | Controls Excess Oil",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Facewash for acne and pimples,100ml",detail:"Controls Acne & Pimples | Removes Excess Oil",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Ubtan Face Wash with Turmeric &Saffron for Tan Removal - 100ml",detail:"Removes Tan | Repairs Sun Damage| Brightens Skin",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Anti Dandruff Hair Mask, 200ml",detail:"Reduces Dandruff & Controls Oil| Minimizes Itching",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/l/almond-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml |Almond",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/r/i/rice1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Rice",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Tea Tree",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hob_7.jpg?auto=compress&fit=scale&w=400&h=400",name:"Hair Oil Booster 30 ml | Onion",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/s/k/skin-illuminate-face-cream.jpg?auto=compress&fit=scale&w=400&h=400",name:"Skin illuminate Face Cream with Vitamin Aloe Vera Gel Moisturizer with Aloe Vera",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Onion Hair Styling Cream for Men",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/l/aloe-vera-sunscreen-face-serum.jpg?auto=compress&fit=scale&w=400&h=400",name:"Aloe Vera Sunscreen Face Serum",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/a/r/artboard_2_8.jpg?auto=compress&fit=scale&w=400&h=400",name:"Glow Serum Foundation-Toffee Glow",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/v/i/vitamin-c-underarm-scrub.jpg?auto=compress&fit=scale&w=400&h=400",name:"Vitamin Underarm Scrub with Vitamin and Turmeric for Brighter Underarms - 5...",detail:"",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Charcoal Facewash for oil control, 100ml",detail:"Pollution Defense Formula | Controls Excess Oil",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Tea Tree Facewash for acne and pimples,100ml",detail:"Controls Acne & Pimples | Removes Excess Oil",rating:"⭐5.5",price:857},
   {poster:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_1.jpg?auto=compress&fit=scale&w=400&h=400",name:"Ubtan Face Wash with Turmeric &Saffron for Tan Removal - 100ml",detail:"Removes Tan | Repairs Sun Damage| Brightens Skin",rating:"⭐5.5",price:857},
]


let arr = JSON.parse(localStorage.getItem("cartdata"))||[]



function displayData(filterdata){
   filterdata.map(function(elem){
//  document.getElementById("beautydata").innerHTML =null
let maindiv= document.createElement("div")
maindiv.setAttribute("class","beautyproduct")

let image= document.createElement("img")
image.setAttribute("class","beautyproimage")
image.setAttribute("src",elem.poster)
let imgdiv= document.createElement("div")
imgdiv.setAttribute("class","beautyimgdiv")
imgdiv.append(image)


let name= document.createElement("h3")
name.innerText= elem.name
let detail= document.createElement("p")
detail.innerText= elem.detail
let rating = document.createElement("p")
rating.innerText= elem.rating
let price= document.createElement("h3")
price.innerText = elem.price
let textdiv= document.createElement("div")
textdiv.setAttribute("class","beautytextdiv")
textdiv.append(name,detail,rating,price)


let cart= document.createElement("button")
cart.innerText = "Add To Cart"
cart.setAttribute("class","beautycartbutton") 
cart.addEventListener("click",function(){
   arr.push(elem)
       localStorage.setItem("cartdata",JSON.stringify(arr))  
})
let buttondiv= document.createElement("div")
buttondiv.setAttribute("class","beautybuttondiv")
buttondiv.append(cart)

maindiv.append(imgdiv,textdiv,buttondiv)
document.querySelector("#beautydata").append(maindiv)
})
}
