const {GildedRose, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("think a good test name or delete it", function() {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
  });
});
