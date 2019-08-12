var refreshDelay = 30000;

var api = 'https://mainnet.mycypruscoin.com/1';
var blockTargetInterval = 60;
var totalSupply = 38000000000000;
var coinUnits = 1000000;
var symbol = 'XCY';
var whiteTheme = "css/themes/white-theme.css";
var nightTheme = "css/themes/xcy-theme.css";
// add pools here by submitting PRs to https://github.com/CyprusCoinClub/pools
var poolsStat =  [
  ["tlrmxcy.merged.stx.nl", "https://tlrmxcy.merged.stx.nl/tlrmxcy-api/stats"],
  ["tlrmxcy.turbomine.co", "https://tlrmxcy.turbomine.co:8132/stats"],
  ["fastpool.xyz XCY", "https://backup.fastpool.xyz:8324/stats"],
  ["webxcy.semipool.com", "https://webxcy.semipool.com/api/pool/stats"],
  ["pool.xcy.hackerknowledge.de", "https://pool.xcy.hackerknowledge.de:8919/stats"],
  ["xcy.profitbotpro.com", "https://xcy.profitbotpro.com/api/stats"],
  ["cnpool.cc", "https://cnpool.cc/api/xcy/stats"],
  ["tlrmxcy.turbomine.co", "https://tlrmxcy.turbomine.co:8132/stats"],
  ["wtips.minercountry.com", "https://wtips.minercountry.com/mapi/stats"],
  ["xcy.bluerockpools.net", "https://xcy.bluerockpools.net:8116/stats"],
];
var nodesStat = [
  ["cyprus-1","https://mainnet.mycypruscoin.com/1"],
  ["cyprus-3","https://mainnet.mycypruscoin.com/3"],
  ["cyprus-4","https://mainnet.mycypruscoin.com/4"],
  ["public.nodes.mycypruscoin.com","https://mainnet.mycypruscoin.com/public-node"],
];

var _networks = {
  mainnet: {
    whiteTheme: "css/themes/white-theme.css",
    nightTheme: "css/themes/xcy-theme.css",
    api: "https://mainnet.mycypruscoin.com/1",
    symbol: "XCY",
    coinUnits: 1000000,
    blockTargetInterval: 60,
    totalSupply: 38000000000000,
    poolsStat: [
      ["tlrmxcy.merged.stx.nl", "https://tlrmxcy.merged.stx.nl/tlrmxcy-api/stats"],
      ["tlrmxcy.turbomine.co", "https://tlrmxcy.turbomine.co:8132/stats"],
      ["fastpool.xyz XCY", "https://backup.fastpool.xyz:8324/stats"],
      ["webxcy.semipool.com", "https://webxcy.semipool.com/api/pool/stats"],
      ["pool.xcy.hackerknowledge.de", "https://pool.xcy.hackerknowledge.de:8919/stats"],
      ["xcy.profitbotpro.com", "https://xcy.profitbotpro.com/api/stats"],
      ["cnpool.cc", "https://cnpool.cc/api/xcy/stats"],
      ["tlrmxcy.turbomine.co", "https://tlrmxcy.turbomine.co:8132/stats"],
      ["wtips.minercountry.com", "https://wtips.minercountry.com/mapi/stats"],
      ["xcy.bluerockpools.net", "https://xcy.bluerockpools.net:8116/stats"],
    ],
    nodesStat: [
      ["cyprus-1","https://mainnet.mycypruscoin.com/1"],
      ["cyprus-3","https://mainnet.mycypruscoin.com/3"],
      ["cyprus-4","https://mainnet.mycypruscoin.com/4"],
      ["public.nodes.mycypruscoin.com","https://mainnet.mycypruscoin.com/public-node"],
    ],
  },
  testnet: {
    whiteTheme: "css/themes/white-theme.css",
    nightTheme: "css/themes/xcy-theme.css",
    api: "https://testnet.mycypruscoin.com/1",
    symbol: "XCY",
    coinUnits: 1000000,
    blockTargetInterval: 60,
    totalSupply: 38000000000000,
    poolsStat: [
    ],
    nodesStat: [
      ["cyprus-1","https://testnet.mycypruscoin.com/1"],
      ["cyprus-3","https://testnet.mycypruscoin.com/3"],
      ["cyprus-4","https://testnet.mycypruscoin.com/4"],
    ],
  },
}
