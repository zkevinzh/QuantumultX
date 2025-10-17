let body = $response.body.replace(/while.{7}\n/, "");
let obj = JSON.parse(body);

// Set subscriber status
obj.entitlement = {
  status: "subscriber",
  current_subs: {
    product_id: "lightroom",
    store: "adobe",
    purchase_date":"2025-10-07T12:41:39.856692Z"
  },
  storage: {
    used: 6316803008,
    limit: 112742891520,
    display_limit: 107374182400,
    warn: 85899345920
  }
};

// Add missing config field that signals premium
obj.config = obj.config || {};
obj.config.one_quota = true;

// Optionally patch payload if missing
obj.payload = obj.payload || {};
obj.payload.universal = obj.payload.universal || {};
obj.payload.universal.communication_preference = "sv-EG";

body = JSON.stringify(obj);
$done({ body });
