let title =
  "boAt Rockerz 245 v2 Pro Wireless Neckband with Up to 30 hrs Playtime, ENxᵀᴹ Tech, ASAPᵀᴹ Charge, BEASTᵀᴹ Mode, Dual Pairing, Magnetic Buds,USB Type-C Interface&IPX5(Teal Green)";
if (title.length > 100) {
  if (title.includes(",")) {
    title = title.split(",")[0];
  } else {
    title = title.substring(0, 90) + "...";
  }
}

console.log(title);
