body = $response.body.replace(/while.{7}\n/, "");
let obj = JSON.parse(body);
obj.update="2025-10-17T13:51:00.617073Z";
obj.entitlement.status="subscriber";
obj.current_subs={
      "product_id": "lightroom",
      "store": "adobe",
      "purchase_date":"2025-10-07T12:41:39.856692Z",
      "sao": {
        "inpkg_CCES": "0",
        "inpkg_CCLE": "1",
        "inpkg_CCSN": "0",
        "inpkg_CCSV": "0",
        "inpkg_LCCC": "0",
        "inpkg_LPES": "0",
        "inpkg_LRBRL": "0",
        "inpkg_LRMAC": "0",
        "inpkg_LRMC": "0",
        "inpkg_LRMP": "0",
        "inpkg_LRTB": "0",
        "inpkg_PHLT": "0",
        "inpkg_PHLT2": "0",
        "inpkg_PLES": "0",
        "storage_quota": "100"
      }
    };
obj.entitlement.storage={
      "used": 0,
      "limit": 112742891520,
      "display_limit": 107374182400,
      "warn": 85899345920
    };
obj.avatar.placeholder=true;
body = JSON.stringify(obj); 
$done({body});
