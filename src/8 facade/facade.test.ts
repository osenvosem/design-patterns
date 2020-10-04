import {
  mediaFacade,
  FetchSong,
  fetchMovie,
  fetchTvShow,
  bookResource,
} from "./facade";

describe("Facade", () => {
  const testId = 2;
  const nonExistingId = 5;

  it("should return correct song or undefined", () => {
    const songGetter = mediaFacade("song");

    expect(songGetter(testId)).toEqual(new FetchSong().fetch(testId));
    expect(songGetter(nonExistingId)).toBeUndefined();
  });

  it("should return correct movie or undefined", () => {
    const movieGetter = mediaFacade("movie");

    expect(movieGetter(testId)).toEqual(fetchMovie.fetch(testId));
    expect(movieGetter(nonExistingId)).toBeUndefined();
  });

  it("should return correct show or undefined", () => {
    const showGetter = mediaFacade("show");

    expect(showGetter(testId)).toEqual(fetchTvShow(testId));
    expect(showGetter(nonExistingId)).toBeUndefined();
  });

  it("should return correct book or undefined", () => {
    const bookGetter = mediaFacade("book");

    expect(bookGetter(testId)).toEqual(
      bookResource.find((item) => item.id === testId)
    );
    expect(bookGetter(nonExistingId)).toBeUndefined();
  });
});
