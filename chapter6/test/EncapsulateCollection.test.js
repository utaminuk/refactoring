import { Person, Course } from "../src/EncapsulateCollection";

describe("EncapsulateCollection: class Person", () => {
  beforeEach(() => { });
  afterEach(() => { });
  test("name: 名前の取得", () => {
    let person = new Person("Ben")
    expect(person.name).toEqual("Ben");
  });
  test("courses: コースの設定->取得", () => {
    let person = new Person("Ben")
    person.courses = ["course1", "course2"];
    expect(person.courses).toStrictEqual(["course1", "course2"]);
  });
});

describe("EncapsulateCollection: class Course", () => {
  beforeEach(() => { });
  afterEach(() => { });
  test("name: 名前の取得", () => {
    let course = new Course("English", false)
    expect(course.name).toEqual("English");
  });
  test("isAdvanced: コースの設定->取得", () => {
    let course = new Course("English", true)
    expect(course.isAdvanced).toBe(true);
  });
});

