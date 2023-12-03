const cheerio = require("cheerio");
const { default: axios } = require("axios");
const TrackModel = require("../model/TrackModel");

const scrape = async (url, email, exp_price) => {
  try {
    await getHTML(url).then(async (html) => {
      const $ = cheerio.load(html);
      let title = $("#productTitle").text();
      if (title.length > 100) {
        if (title.includes(",")) {
          title = title.split(",")[0];
        } else {
          title = title.substring(0, 90) + "...";
        }
      }
      let features = [];
      $("#feature-bullets>ul>li").each((i, desc) => {
        if (i < 2) {
          features.push(
            $(desc)
              .text()
              .trim()
              .replace(/[|&;$%@"<>()+,]/g, "")
          );
        }
      });
      let imgUrl = $("#imgTagWrapperId>img").attr("src");
      let curr_price = $(".a-price-whole").text();
      curr_price = curr_price.replace(/,/g, "");
      curr_price = parseInt(curr_price);
      let inStock = $("#availability>span").text().trim();
      let rating = $("#acrPopover>span>a>span").text().trim();

      const data = {
        url: url,
        title: title.trim().replace(/[|&;$%@"<>()+,]/g, ""),
        features: features,
        imgUrl: imgUrl,
        inStock: inStock == "In stock" ? true : false,
        rating: parseFloat(rating),
        exp_price: exp_price,
        curr_price: curr_price,
        email: email,
      };

      console.log(data);

      const track = new TrackModel(data);
      await track.save();
    });
  } catch (error) {
    console.log(error);
  }
};

const getHTML = async (url) => {
  const { data: html } = await axios.get(url);
  return html;
};

module.exports = scrape;
