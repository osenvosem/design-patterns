// Let's assume we have a few data sources with different API's.
// These may be microservices, different databases or foreign APIs.

export type TSong = {
  id: number;
  artist: string;
  title: string;
};

export class FetchSong {
  private resources: TSong[] = [
    { id: 1, artist: "Bob Dylan", title: "Like a Rolling Stone" },
    {
      id: 2,
      artist: "The Rolling Stones",
      title: "(I Can't Get No) Satisfaction",
    },
    { id: 3, artist: "John Lennon", title: "Imagine" },
    { id: 4, artist: "Marvin Gaye", title: "What's Going On" },
  ];
  fetch(id: number): TSong | undefined {
    return this.resources.find((item: TSong) => item.id === id);
  }
}

export type TMovie = {
  id: number;
  director: string;
  title: string;
};

export const fetchMovie = ((): { fetch(id: number): TMovie | undefined } => {
  const resources = [
    { id: 1, director: "Francis Ford Coppola", title: "The Godfather" },
    { id: 2, director: "Victor Fleming", title: "The Wizard of Oz" },
    { id: 3, director: "Orson Welles", title: "Citizen Kane" },
    { id: 4, director: "Frank Darabont", title: "The Shawshank Redemption" },
  ];

  return {
    fetch(id: number): TMovie | undefined {
      return resources.find((item: TMovie) => {
        item.id === id;
      });
    },
  };
})();

export type TShow = {
  id: number;
  title: string;
};

export const fetchTvShow = (id: number): TShow | undefined => {
  const resources = [
    { id: 1, title: "The Sopranos" },
    { id: 2, title: "The Wire" },
    { id: 3, title: "Breaking Bad" },
    { id: 4, title: "Mad Men" },
  ];

  return resources.find((item: TShow) => item.id === id);
};

export type TBook = {
  id: number;
  title: string;
  author: string;
};

export const bookResource: TBook[] = [
  { id: 1, title: "In Search of Lost Time", author: "Marcel Proust" },
  { id: 2, title: "Ulysses", author: "James Joyce" },
  { id: 3, title: "Don Quixote", author: "Miguel de Cervantes" },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

type TMediaType = "song" | "movie" | "show" | "book";
type TCultureFacadeReturnType = TSong | TMovie | TShow | TBook | undefined;

export const mediaFacade = (type: TMediaType) => (
  id: number
): TCultureFacadeReturnType => {
  const getSong = (id: number): TSong | undefined => {
    const db = new FetchSong();
    return db.fetch(id);
  };

  const getMovie = (id: number): TMovie | undefined => {
    return fetchMovie.fetch(id);
  };

  const getTvShow = (id: number): TShow | undefined => {
    return fetchTvShow(id);
  };

  const getBook = (id: number): TBook | undefined =>
    bookResource.find((item: TBook) => item.id === id);

  switch (type) {
    case "song":
      return getSong(id);
    case "movie":
      return getMovie(id);
    case "show":
      return getTvShow(id);
    case "book":
      return getBook(id);
    default:
      return undefined;
  }
};
