const fetch = require("node-fetch");

exports.getRating = async (req, res) => {
  try {
    // Construct the request payload according to DHL Express MyDHL API documentation.
    // Update these fields with real data as needed.
    const requestPayload = {
      // Example payload fields. Replace with actual required parameters.
      ShipmentDetails: {
        // Shipper, receiver, package details, etc.
      }
    };

    const response = await fetch("https://express.api.dhl.com/mydhlapi/test/rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":
          "Basic " +
          Buffer.from(`${process.env.DHL_API_USER}:${process.env.DHL_API_PASSWORD}`).toString("base64")
      },
      body: JSON.stringify(requestPayload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error calling DHL Express API Rating:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
