# Publish with Wix

## Embed the current design

Wix does not run this repository's Node.js server or import a GitHub repository as a native Wix website. The included HTML embed bundles the storefront, JavaScript, styles and illustrations into one file. It does not require separate hosting.

1. Create or open your Wix site in the Wix editor.
2. Add an **Embed HTML / Embed Code** element (usually under **Add Elements → Embed Code**; labels vary by editor).
3. Choose the option to enter HTML code. Copy the **entire contents** of `wix/room-for-music.html` into it and apply the change. Do not paste a GitHub file URL: that shows GitHub's file viewer, not the storefront.
4. Make the element span the page content width. Give it enough height for the full storefront, or allow scrolling within the frame. Set its height separately in the mobile editor. This is an iframe; it does not automatically resize its containing Wix element.
5. Preview desktop and mobile. Check that illustrations appear, category filters work, sorting changes order, the bag opens, quantity changes update totals, and the bottom of the page is reachable. Cart persistence depends on whether the browser permits iframe storage; the cart still works during the visit when storage is unavailable.
6. Publish using Wix's **Publish** action. Connect your domain in Wix when ready. The Node.js server and cloud environment publication are not required for this embed.

Rebuild the file after editing the source:

```sh
npm run build:wix
```

Then replace the code in the Wix embed and publish again. GitHub pushes do not automatically update the embedded copy.

## Before taking real orders

The embed retains the demo cart and demo checkout. It is not connected to Wix Stores and cannot create orders or collect payment. Products, prices and dimensions are illustrative concepts; the contact email is a placeholder.

For a working shop, add **Wix Stores** to your Wix site and recreate the thirteen concept products from `src/app.js` as Wix products. Use categories for cabinetry, shelving, stands, guitars, bass, keyboards, MIDI controllers, sequencers, synths and microphones. Supply real photos, verified dimensions, equipment compatibility, prices, stock, shipping terms and return policies. Configure payment methods, shipping and tax in Wix, and choose a Wix plan that supports payments. Replace the placeholder contact address.

Use Wix's native product galleries, product pages, cart and checkout for sales. You can use this design as a reference for rebuilding the homepage in Wix, or retain a presentation embed alongside native Wix store pages. The demo bag is separate from the Wix cart; do not advertise it as a working checkout. Native Wix content is also the appropriate place for searchable product information and site SEO settings, since the embed is isolated in an iframe.

Publishing and payment setup must be completed in your Wix account. No Wix account access or live Wix deployment was performed from this repository. The bundle is validated locally; test it in Wix Preview before publishing.
