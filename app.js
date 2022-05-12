$(document).ready(() => {
  // TODO - Add hero images and info
  const heroes = [
    {
      name: "antimage",
      id: 1,
      localized_name: "Anti-Mage",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/anti-mage",
    },
    {
      name: "axe",
      id: 2,
      localized_name: "Axe",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/axe",
    },
    {
      name: "bane",
      id: 3,
      localized_name: "Bane",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/bane",
    },
    {
      name: "bloodseeker",
      id: 4,
      localized_name: "Bloodseeker",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/bloodseeker",
    },
    {
      name: "crystal_maiden",
      id: 5,
      localized_name: "Crystal Maiden",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/crystalmaiden",
    },
    {
      name: "drow_ranger",
      id: 6,
      localized_name: "Drow Ranger",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/drowranger",
    },
    {
      name: "earthshaker",
      id: 7,
      localized_name: "Earthshaker",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/earthshaker",
    },
    {
      name: "juggernaut",
      id: 8,
      localized_name: "Juggernaut",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/juggernaut",
    },
    {
      name: "mirana",
      id: 9,
      localized_name: "Mirana",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/mirana",
    },
    {
      name: "nevermore",
      id: 11,
      localized_name: "Shadow Fiend",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/nevermore",
    },
    {
      name: "morphling",
      id: 10,
      localized_name: "Morphling",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/morphling",
    },
    {
      name: "phantom_lancer",
      id: 12,
      localized_name: "Phantom Lancer",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/phantomlancer",
    },
    {
      name: "puck",
      id: 13,
      localized_name: "Puck",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/puck",
    },
    {
      name: "pudge",
      id: 14,
      localized_name: "Pudge",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/pudge",
    },
    {
      name: "razor",
      id: 15,
      localized_name: "Razor",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/razor",
    },
    {
      name: "sand_king",
      id: 16,
      localized_name: "Sand King",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/sandking",
    },
    {
      name: "storm_spirit",
      id: 17,
      localized_name: "Storm Spirit",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/stormspirit",
    },
    {
      name: "sven",
      id: 18,
      localized_name: "Sven",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/sven",
    },
    {
      name: "tiny",
      id: 19,
      localized_name: "Tiny",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/tiny",
    },
    {
      name: "vengefulspirit",
      id: 20,
      localized_name: "Vengeful Spirit",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/vengefulspirit",
    },
    {
      name: "windranger",
      id: 21,
      localized_name: "Windranger",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/windranger",
    },
    {
      name: "zeus",
      id: 22,
      localized_name: "Zeus",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/zeus",
    },
    {
      name: "kunkka",
      id: 23,
      localized_name: "Kunkka",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/kunkka",
    },
    {
      name: "lina",
      id: 25,
      localized_name: "Lina",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/lina",
    },
    {
      name: "lich",
      id: 31,
      localized_name: "Lich",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/lich",
    },
    {
      name: "lion",
      id: 26,
      localized_name: "Lion",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/lion",
    },
    {
      name: "shadow_shaman",
      id: 27,
      localized_name: "Shadow Shaman",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/shadowshaman",
    },
    {
      name: "slardar",
      id: 28,
      localized_name: "Slardar",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/slardar",
    },
    {
      name: "tidehunter",
      id: 29,
      localized_name: "Tidehunter",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/tidehunter",
    },
    {
      name: "witch_doctor",
      id: 30,
      localized_name: "Witch Doctor",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/witchdoctor",
    },
    {
      name: "riki",
      id: 32,
      localized_name: "Riki",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/riki",
    },
    {
      name: "enigma",
      id: 33,
      localized_name: "Enigma",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/enigma",
    },
    {
      name: "tinker",
      id: 34,
      localized_name: "Tinker",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/tinker",
    },
    {
      name: "sniper",
      id: 35,
      localized_name: "Sniper",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/sniper",
    },
    {
      name: "necrophos",
      id: 36,
      localized_name: "Necrophos",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/necrophos",
    },
    {
      name: "warlock",
      id: 37,
      localized_name: "Warlock",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/warlock",
    },
    {
      name: "beastmaster",
      id: 38,
      localized_name: "Beastmaster",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/beastmaster",
    },
    {
      name: "queenofpain",
      id: 39,
      localized_name: "Queen of Pain",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/queenofpain",
    },
    {
      name: "venomancer",
      id: 40,
      localized_name: "Venomancer",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/venomancer",
    },
    {
      name: "faceless_void",
      id: 41,
      localized_name: "Faceless Void",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/facelessvoid",
    },
    {
      name: "skeleton_king",
      id: 42,
      localized_name: "Skeleton King",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/skeletonking",
    },
    {
      name: "death_prophet",
      id: 43,
      localized_name: "Death Prophet",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/deathprophet",
    },
    {
      name: "phantom_assassin",
      id: 44,
      localized_name: "Phantom Assassin",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/phantomassassin",
    },
    {
      name: "pugna",
      id: 45,
      localized_name: "Pugna",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/pugna",
    },
    {
      name: "templar_assassin",
      id: 46,
      localized_name: "Templar Assassin",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/templarassassin",
    },
    {
      name: "viper",
      id: 47,
      localized_name: "Viper",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/viper",
    },
    {
      name: "luna",
      id: 48,
      localized_name: "Luna",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/luna",
    },
    {
      name: "dragon_knight",
      id: 49,
      localized_name: "Dragon Knight",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/dragonknight",
    },
    {
      name: "dazzle",
      id: 50,
      localized_name: "Dazzle",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/dazzle",
    },
    {
      name: "rattletrap",
      id: 51,
      localized_name: "Clockwerk",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/rattletrap",
    },
    {
      name: "leshrac",
      id: 52,
      localized_name: "Leshrac",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/leshrac",
    },
    {
      name: "furion",
      id: 53,
      localized_name: "Nature's Prophet",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/nature'sprophet",
    },
    {
      name: "life_stealer",
      id: 54,
      localized_name: "Lifestealer",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/lifestealer",
    },
    {
      name: "dark_seer",
      id: 55,
      localized_name: "Dark Seer",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/darkseer",
    },
    {
      name: "clinkz",
      id: 56,
      localized_name: "Clinkz",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/clinkz",
    },
    {
      name: "omniknight",
      id: 57,
      localized_name: "Omniknight",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/omniknight",
    },
    {
      name: "enchantress",
      id: 58,
      localized_name: "Enchantress",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/enchantress",
    },
    {
      name: "huskar",
      id: 59,
      localized_name: "Huskar",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/huskar",
    },
    {
      name: "night_stalker",
      id: 60,
      localized_name: "Night Stalker",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/nightstalker",
    },
    {
      name: "broodmother",
      id: 61,
      localized_name: "Broodmother",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/broodmother",
    },
    {
      name: "bounty_hunter",
      id: 62,
      localized_name: "Bounty Hunter",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/bountyhunter",
    },
    {
      name: "weaver",
      id: 63,
      localized_name: "Weaver",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/weaver",
    },
    {
      name: "jakiro",
      id: 64,
      localized_name: "Jakiro",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/jakiro",
    },
    {
      name: "batrider",
      id: 65,
      localized_name: "Batrider",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/batrider",
    },
    {
      name: "chen",
      id: 66,
      localized_name: "Chen",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/chen",
    },
    {
      name: "spectre",
      id: 67,
      localized_name: "Spectre",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/spectre",
    },
    {
      name: "doom_bringer",
      id: 69,
      localized_name: "Doom",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/doombringer",
    },
    {
      name: "ancient_apparition",
      id: 68,
      localized_name: "Ancient Apparition",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/ancientapparition",
    },
    {
      name: "ursa",
      id: 70,
      localized_name: "Ursa",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/ursa",
    },
    {
      name: "spirit_breaker",
      id: 71,
      localized_name: "Spirit Breaker",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/spiritbreaker",
    },
    {
      name: "gyrocopter",
      id: 72,
      localized_name: "Gyrocopter",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/gyrocopter",
    },
    {
      name: "alchemist",
      id: 73,
      localized_name: "Alchemist",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/alchemist",
    },
    {
      name: "invoker",
      id: 74,
      localized_name: "Invoker",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/invoker",
    },
    {
      name: "silencer",
      id: 75,
      localized_name: "Silencer",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/silencer",
    },
    {
      name: "obsidian_destroyer",
      id: 76,
      localized_name: "Outworld Devourer",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/outworlddestroyer",
    },
    {
      name: "lycan",
      id: 77,
      localized_name: "Lycanthrope",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/lycan",
    },
    {
      name: "brewmaster",
      id: 78,
      localized_name: "Brewmaster",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/brewmaster",
    },
    {
      name: "shadow_demon",
      id: 79,
      localized_name: "Shadow Demon",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/shadowdemon",
    },
    {
      name: "lone_druid",
      id: 80,
      localized_name: "Lone Druid",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/lonedruid",
    },
    {
      name: "chaos_knight",
      id: 81,
      localized_name: "Chaos Knight",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/chaosknight",
    },
    {
      name: "meepo",
      id: 82,
      localized_name: "Meepo",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/meepo",
    },
    {
      name: "treant",
      id: 83,
      localized_name: "Treant Protector",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/treant",
    },
    {
      name: "ogre_magi",
      id: 84,
      localized_name: "Ogre Magi",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/ogremagi",
    },
    {
      name: "undying",
      id: 85,
      localized_name: "Undying",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/undying",
    },
    {
      name: "rubick",
      id: 86,
      localized_name: "Rubick",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/rubick",
    },
    {
      name: "disruptor",
      id: 87,
      localized_name: "Disruptor",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/disruptor",
    },
    {
      name: "nyx_assassin",
      id: 88,
      localized_name: "Nyx Assassin",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/nyxassassin",
    },
    {
      name: "naga_siren",
      id: 89,
      localized_name: "Naga Siren",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/nagasiren",
    },
    {
      name: "keeper_of_the_light",
      id: 90,
      localized_name: "Keeper of the Light",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/keeperofthelight",
    },
    {
      name: "wisp",
      id: 91,
      localized_name: "Wisp",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/wisp",
    },
    {
      name: "visage",
      id: 92,
      localized_name: "Visage",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/visage",
    },
    {
      name: "slark",
      id: 93,
      localized_name: "Slark",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/slark",
    },
    {
      name: "medusa",
      id: 94,
      localized_name: "Medusa",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/medusa",
    },
    {
      name: "troll_warlord",
      id: 95,
      localized_name: "Troll Warlord",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/trollwarlord",
    },
    {
      name: "centaur",
      id: 96,
      localized_name: "Centaur Warrunner",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/centaurwarrunner",
    },
    {
      name: "magnataur",
      id: 97,
      localized_name: "Magnus",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/magnataur",
    },
    {
      name: "shredder",
      id: 98,
      localized_name: "Timbersaw",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/shredder",
    },
    {
      name: "bristleback",
      id: 99,
      localized_name: "Bristleback",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/bristleback",
    },
    {
      name: "tusk",
      id: 100,
      localized_name: "Tusk",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/tusk",
    },
    {
      name: "skywrath_mage",
      id: 101,
      localized_name: "Skywrath Mage",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/skywrathmage",
    },
    {
      name: "abaddon",
      id: 102,
      localized_name: "Abaddon",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/abaddon",
    },
    {
      name: "elder_titan",
      id: 103,
      localized_name: "Elder Titan",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/eldertitan",
    },
    {
      name: "legion_commander",
      id: 104,
      localized_name: "Legion Commander",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/legioncommander",
    },
    {
      name: "techies",
      id: 105,
      localized_name: "Techies",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/techies",
    },
    {
      name: "ember_spirit",
      id: 106,
      localized_name: "Ember Spirit",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/emberspirit",
    },
    {
      name: "earth_spirit",
      id: 107,
      localized_name: "Earth Spirit",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/earthspirit",
    },
    {
      name: "abyssal_underlord",
      id: 108,
      localized_name: "Abyssal Underlord",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/abyssalunderlord",
    },
    {
      name: "terrorblade",
      id: 109,
      localized_name: "Terrorblade",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/terrorblade",
    },
    {
      name: "phoenix",
      id: 110,
      localized_name: "Phoenix",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/phoenix",
    },
    {
      name: "oracle",
      id: 111,
      localized_name: "Oracle",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/oracle",
    },
    {
      name: "winter_wyvern",
      id: 112,
      localized_name: "Winter Wyvern",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/winterwyvern",
    },
    {
      name: "arc_warden",
      id: 113,
      localized_name: "Arc Warden",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/arcwarden",
    },
    {
      name: "monkey_king",
      id: 114,
      localized_name: "Monkey King",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/monkeyking",
    },
    {
      name: "pangolier",
      id: 115,
      localized_name: "Pangolier",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/pangolier",
    },
    {
      name: "dark_willow",
      id: 116,
      localized_name: "Dark Willow",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/darkwillow",
    },
    {
      name: "grimstroke",
      id: 117,
      localized_name: "Grimstroke",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/grimstroke",
    },
    {
      name: "mars",
      id: 118,
      localized_name: "Mars",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/mars",
    },
    {
      name: "dawnbreaker",
      id: 119,
      localized_name: "Dawnbreaker",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/dawnbreaker",
    },
    {
      name: "hoodwink",
      id: 120,
      localized_name: "Hoodwink",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/hoodwink",
    },
    {
      name: "io",
      id: 121,
      localized_name: "IO",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/io",
    },
    {
      name: "marci",
      id: 122,
      localized_name: "Marci",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/marci",
    },
    {
      name: "primal beast",
      id: 123,
      localized_name: "Primal Beast",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/primalbeast",
    },
    {
      name: "snapfire",
      id: 124,
      localized_name: "Snapfire",
      primary_attr: "agi",
      info: "https://www.dota2.com/hero/snapfire",
    },
    {
      name: "void_spirit",
      id: 125,
      localized_name: "Void Spirit",
      primary_attr: "int",
      info: "https://www.dota2.com/hero/void_spirit",
    },
    {
      name: "wraithking",
      id: 126,
      localized_name: "Wraith King",
      primary_attr: "str",
      info: "https://www.dota2.com/hero/wraith_king",
    },
  ];
  // TODO - fix odd player names
  const players = [
    "OGABEK",
    "MAFTUNBEK",
    "BEHRUZ",
    "NAVRUZ",
    "YUNUSBEK",
    "SUROJIDDIN",
    "BEKTURDI",
    "DONIYOR",
  ];
  const len = players.length / 2;
  function shuffle(array) {
    const id = Math.floor(Math.random() * array.length);
    return array[id];
  }
  function randomTeam() {
    const randomHeroes = [];
    const randomPlayers = [];
    for (let i = 0; i < len; i++) {
      let hero = shuffle(heroes);
      let player = shuffle(players);
      if (!randomHeroes.includes(hero)) {
        randomHeroes.push(hero);
      }
      if (!randomPlayers.includes(player)) {
        randomPlayers.push(player);
      }
    }
    return { randomHeroes, randomPlayers };
  }
  $("#start").click(function () {
    const { randomHeroes, randomPlayers } = randomTeam();
    console.log("====================================");
    console.log("Clicked!");
    console.log("====================================");
    const team1 = [];
    const team2 = [];
    if (randomHeroes.length == len && randomPlayers.length == len) {
      $("#start").remove();
      randomPlayers.map((player, index) => {
        team1.push({
          player: player,
          hero: randomHeroes[index],
        });
      });
      const tableBody = $("<tbody>");
      team1.map((player, index) => {
        tableBody.append(
          $("<tr>").append(
            $("<td>").text(index + 1),
            $("<td>").text(player.player),
            $("<td>").html(`<a href="${player.hero.info}" class="hover:text-black">${player.hero.localized_name}</a>`),
          )
        );
      });
      $("#team1").append(tableBody);
      let team2players = players.filter(
        (player) => !randomPlayers.includes(player)
      );
      let filteredHeros = heroes.filter((hero) => !randomHeroes.includes(hero));
      team2players.map((player) => {
        team2.push({
          player: player,
          hero: shuffle(filteredHeros),
        });
      });
      const tableBody2 = $("<tbody>");
      team2.map((player, index) => {
        tableBody2.append(
          $("<tr>").append(
            $("<td>").text(index + 1),
            $("<td>").text(player.player),
            $("<td>").html(`<a href="${player.hero.info}" class="hover:text-black">${player.hero.localized_name}</a>`),
          )
        );
      });
      $("#team2").append(tableBody2);
    } else {
      randomTeam();
    }
  });
});
