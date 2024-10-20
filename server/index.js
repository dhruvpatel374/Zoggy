import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
const SWIGGY_API_BASE_URL = "https://www.swiggy.com/dapi/restaurants/list/v5";
function isMobileDevice(userAgent) {
  const mobileKeywords = [
    "Android",
    "webOs",
    "iPhone",
    "iPad",
    "iPod",
    "BlackBerry",
    "Windows Phone",
  ];
  return mobileKeywords.some((keyword) => userAgent.includes(keyword));
}

app.get("/", (req, res) => {
  res.send(
    "<h1>For Swiggy Restaurant Card api go to /api/res(For Mobile /api/mobileres) and For menu api api/menu and add restaurantid </h1>"
  );
});

app.get("/api/res", async (req, res) => {
  try {
    const userAgent = req.headers["user-agent"];
    const timestamp = Date.now();
    const limit = 20;
    const offset = 0;
    const isMobile = isMobileDevice(userAgent);
    const platform = isMobile ? "MOBILE_WEB_LISTING" : "DESKTOP_WEB_LISTING";
    const url =
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0948864&lng=72.5549056&page_type=DESKTOP_WEB_LISTING";
      `${SWIGGY_API_BASE_URL}?lat=23.0948864&lng=72.5549056&is-seo-homepage-enabled=true&page_type=${platform}&${timestamp}&limit=${limit}&offset=${offset}`;
    const response = await fetch(url, {
      headers: {
        "User-Agent": userAgent,
        Accept: "application/json",
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error proxying request: " + error);
    res.status(500).json({ error: "Invertal server error" });
  }
});

app.get("/api/menu", async (req, res) => {
  try {
    const restaurantId = Number(req.query.restaurantId);
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0948864&lng=72.5549056&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": req.headers["user-agent"],
        Accept: "application/json",
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error proxying request: " + error);
    res.status(500).json({ error: "Invertal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
app.get("/api/mobileres", async (req, res) => {
  try {
    const userAgent = req.headers["user-agent"];
    const timestamp = Date.now();
    const limit = 20;
    const offset = 0;
    const isMobile = isMobileDevice(userAgent);
    const platform = isMobile ? "MOBILE_WEB_LISTING" : "DESKTOP_WEB_LISTING";
    const url =
      "https://www.swiggy.com/mapi/homepage/getCards?lat=23.102477&lng=72.55750069999999";
    const response = await fetch(url, {
      headers: {
        "User-Agent": userAgent,
        Accept: "application/json",
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error proxying request: " + error);
    res.status(500).json({ error: "Invertal server error" });
  }
});
