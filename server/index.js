import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "<h1>For Swiggy Restaurant Card api go to /api/res and For menu api api/menu and add restaurantid </h1>"
  );
});

app.get("/api/res", async (req, res) => {
  try {
    const userAgent = req.headers["user-agent"];

    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0948864&lng=72.5549056&page_type=DESKTOP_WEB_LISTING";

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
