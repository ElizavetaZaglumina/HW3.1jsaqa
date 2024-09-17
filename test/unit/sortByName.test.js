const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Negative books names test", () => {
  it("Books names should be sorted whith similar names", () => {
    const input = [
      "Гарри Поттер и философский камень",
      "Властелин Колец",
      "Гарри Поттер и Тайная комната",
    ];
    const expected = [
      "Властелин Колец",
      "Гарри Поттер и Тайная комната",
      "Гарри Поттер и философский камень"
    ];
      const output = sorting.sortByName(input);
      expect(output).toEqual(expected);
  });
});