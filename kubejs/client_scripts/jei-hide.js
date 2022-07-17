// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide('kubejs:common_lootbox'),
	event.hide('kubejs:rare_lootbox'),
	event.hide('kubejs:epic_lootbox'),
    event.hide('kubejs:legendary_lootbox'),
    event.hide('kubejs:miners_delight'),
    event.hide('kubejs:sorceresr_delight'),
    event.hide('kubejs:farmers_delight'),
    event.hide('kubejs:blacksmiths_delight'),
    event.hide('kubejs:scavengers_delight'),
    event.hide('kubejs:alchemists_delight'),
    event.hide('kubejs:altered_recipe_indicator'),
    event.hide('kubejs:disabled_recipe_indicator'),
    event.hide('occultism:debug_wand'),
    event.hide('occultism:debug_foliot_luberjack'),
    event.hide('occultism:debug_foliot_transport_items'),
    event.hide('occultism:debug_foliot_cleaner'),
    event.hide('occultism:debug_foliot_trader'),
    event.hide('occultism:debug_djinni_manage_machine'),
    event.hide('occultism:debug_debug_djinni_test'),
    event.hide('occultism:miner_debug_unspecialized'),
    event.hide('zerocore:debugtool'),
    event.hide('titanium:block_test'),
    event.hide('titanium:block_twenty_four_test'),
    event.hide('titanium:block_asset_test'),
    event.hide('titanium:machine_test'),
    event.hide('titanium:creative_generator'),
    event.hide('occultism:lighted_air'),
    
    event.hide(Item.of('sophisticatedstorage:netherite_chest').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:diamond_chest').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:gold_chest').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:iron_chest').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:chest').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:netherite_barrel').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:diamond_barrel').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:gold_barrel').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:iron_barrel').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:barrel').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:netherite_shulker_box').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:diamond_shulker_box').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:gold_shulker_box').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:iron_shulker_box').ignoreNBT()),
    event.hide(Item.of('sophisticatedstorage:shulker_box').ignoreNBT()),
    
    event.hide(Item.of('tconstruct:crafting_station').ignoreNBT()),
    event.hide(Item.of('tconstruct:tinker_station').ignoreNBT()),
    event.hide(Item.of('tconstruct:part_builder').ignoreNBT()),
    event.hide(Item.of('tconstruct:tinkers_anvil').ignoreNBT()),
    event.hide(Item.of('tconstruct:scorched_anvil').ignoreNBT()),
    
    event.hide(Item.of('tconstruct:repair_kit').ignoreNBT()),
    event.hide(Item.of('tconstruct:pick_head').ignoreNBT()),
    event.hide(Item.of('tconstruct:hammer_head').ignoreNBT()),
    event.hide(Item.of('tconstruct:small_axe_head').ignoreNBT()),
    event.hide(Item.of('tconstruct:tool_binding').ignoreNBT()),
    event.hide(Item.of('tconstruct:broad_axe_head').ignoreNBT()),
    event.hide(Item.of('tconstruct:tool_handle').ignoreNBT()),
    event.hide(Item.of('tconstruct:large_plate').ignoreNBT()),
    event.hide(Item.of('tconstruct:round_plate').ignoreNBT()),
    event.hide(Item.of('tconstruct:tough_handle').ignoreNBT()),
    event.hide(Item.of('tconstruct:small_blade').ignoreNBT()),
    event.hide(Item.of('tconstruct:broad_blade').ignoreNBT()),
    
    event.hide(Item.of('tconstruct:mattock').ignoreNBT()),
    event.hide(Item.of('tconstruct:scythe').ignoreNBT()),
    event.hide(Item.of('tconstruct:hand_axe').ignoreNBT()),
    event.hide(Item.of('tconstruct:pickaxe').ignoreNBT()),
    event.hide(Item.of('tconstruct:kama').ignoreNBT()),
    event.hide(Item.of('tconstruct:sword').ignoreNBT()),
    event.hide(Item.of('tconstruct:excavator').ignoreNBT()),
    event.hide(Item.of('tconstruct:vein_hammer').ignoreNBT()),
    event.hide(Item.of('tconstruct:dagger').ignoreNBT()),
    event.hide(Item.of('tconstruct:pickadze').ignoreNBT()),
    event.hide(Item.of('tconstruct:cleaver').ignoreNBT()),
    event.hide(Item.of('tconstruct:broad_axe').ignoreNBT()),
    event.hide(Item.of('tconstruct:sledge_hammer').ignoreNBT()),
    
    event.hide(/minecraft:.*(?:white|black|red|orange|magenta|yellow|lime|pink|gray|light_gray|light_blue|cyan|purple|blue|brown|green)_[^d]/);
    event.hide(/absentbydesign:.*(?:white|black|red|orange|magenta|yellow|lime|pink|gray|light_gray|light_blue|cyan|purple|blue|brown|green)/);
    event.hide(/(?:tconstruct|rftoolsbuilder|projecte|hexerei|pickletweaks|refinedstorage|mekanismadditions|quark|immersiveengineering|botania):.*(?:white|black|red|orange|magenta|yellow|lime|pink|gray|light_gray|light_blue|cyan|purple|blue|brown|green)_.*/);

    
})

onEvent('jei.add.items', event => {
    
    event.add(Item.of('sophisticatedstorage:netherite_chest', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:diamond_chest', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:gold_chest', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:iron_chest', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:chest', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:netherite_barrel', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:diamond_barrel', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:gold_barrel', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:iron_barrel', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:barrel', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:netherite_shulker_box', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:diamond_shulker_box', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:gold_shulker_box', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:iron_shulker_box', {woodType:"oak"}));
    event.add(Item.of('sophisticatedstorage:shulker_box', {woodType:"oak"}));
    
    event.add(Item.of('tconstruct:crafting_station', {texture: "oak_wood"}));
    event.add(Item.of('tconstruct:tinker_station', {texture: "oak_wood"}));
    event.add(Item.of('tconstruct:part_builder', {texture: "oak_wood"}));
    event.add(Item.of('tconstruct:tinkers_anvil', {texture: "alltheores:invar_block"}));
    event.add(Item.of('tconstruct:scorched_anvil', {texture: "alltheores:invar_block"}));

    event.add(Item.of('tconstruct:repair_kit', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:pick_head', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:hammer_head', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:small_axe_head', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:tool_binding', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:broad_axe_head', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:tool_handle', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:large_plate', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:round_plate', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:tough_handle', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:small_blade', {Material: "tconstruct:wood"}));
    event.add(Item.of('tconstruct:broad_blade', {Material: "tconstruct:wood"}));
    
    event.add('tconstruct:mattock');
    event.add('tconstruct:scythe');
    event.add('tconstruct:hand_axe');
    event.add('tconstruct:pickaxe');
    event.add('tconstruct:kama');
    event.add('tconstruct:sword');
    event.add('tconstruct:excavator');
    event.add('tconstruct:vein_hammer');
    event.add('tconstruct:dagger');
    event.add('tconstruct:pickadze');
    event.add('tconstruct:cleaver');
    event.add('tconstruct:broad_axe');
    event.add('tconstruct:sledge_hammer');
})