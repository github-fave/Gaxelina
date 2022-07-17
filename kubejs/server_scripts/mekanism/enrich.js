//priority: 900

onEvent('recipes', (event) => {
    event.replaceOutput({}, 'mekanism:block_raw_osmium', '#forge:storage_blocks/raw_osmium')
})

onEvent('recipes', event => {
    event.recipes.mekanismEnriching("12x alltheores:zinc_dust", "#forge:storage_blocks/raw_zinc"),
    event.recipes.mekanismEnriching("12x alltheores:silver_dust", "#forge:storage_blocks/raw_silver"),
    event.recipes.mekanismEnriching("12x alltheores:aluminum_dust", "#forge:storage_blocks/raw_aluminum"),
    event.recipes.mekanismEnriching("12x alltheores:nickel_dust", "#forge:storage_blocks/raw_nickel"),
    event.recipes.mekanismEnriching("12x alltheores:platinum_dust", "#forge:storage_blocks/raw_platinum")
})


onEvent('recipes', event => {
    //                          OLD                     NEW
    event.replaceOutput({}, 'mekanism:dust_gold', 'alltheores:gold_dust'),
    event.replaceOutput({}, 'mekanism:dust_osmium', 'alltheores:osmium_dust'),
    event.replaceOutput({}, 'mekanism:dust_iron', 'alltheores:iron_dust')
})

