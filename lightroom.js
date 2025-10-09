body = $response.body.replace(/while.{7}\n/, "");
let obj = JSON.parse(body);
obj.entitlement.status="creative cloud pro";
obj.current_subs={
      "product_id": "creative cloud pro",
      "store": "adobe",
      "purchase_date": "2025-10-01T16:32:10.254954Z",
    };
obj.entitlement.storage={
      "used": 0,
      "limit": 1154487209165,
      "display_limit": 1099511627776,
      "warn": 992137445376
    };
obj.avatar.placeholder=true;
body = JSON.stringify(obj); 
$done({body});
