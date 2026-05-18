// ============================================================
//  YOUR APPS LIST — this is the ONLY file you need to edit.
// ============================================================
//
//  To add a new app, copy one block below and paste it inside
//  the [ ... ] list. Don't forget the comma after each block
//  except the last one. Then just refresh the page.
//
//  Fields:
//    name        — shown as the card title (first letter = icon)
//    description — one short sentence about the app
//    url         — where the card links to (opens in a new tab)
//    category    — used for the filter chips at the top
//    tags        — optional, searchable keywords
//
// ============================================================

const APPS = [
  {
    name: "Inventory checker",
    description: "Quickly check if item is available in the inventory using barcode, qr or typing the number.",
    url: "https://inventory-checker-chi.vercel.app/",
    category: "Inventory",
    tags: ["stock", "checker"]
  },
  {
    name: "Purchase Summary",
    description: "Compare the amount of items purchased by a store with their GST numbers.",
    url: "https://purchase-summary.vercel.app/",
    category: "Finance",
    tags: ["outstanding", "gst", "comapare"]
  },
  {
    name: "Booking Fair Manager",
    description: "Get the overall details of items available in the stock, items to be ordered, etc all in one place.",
    url: "https://booking-fair-manager.vercel.app/",
    category: "Inventory",
    tags: ["fair", "booking"]
  }
];
