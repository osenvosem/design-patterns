interface Post {
  id: string;
  title: string;
  body: string;
  created: Date;
  updated: Date;
}

export class PostModel {
  private db: Post[] = [];

  findAll(): Post[] {
    return this.db;
  }

  find(id: string): Post | null {
    return this.db.find((post) => post.id === id) ?? null;
  }

  insert(data: Partial<Post>): Post {
    const post = Object.assign(
      {
        title: "",
        body: "",
        id: Math.random().toString(36).slice(2),
        created: new Date(),
        updated: new Date(),
      },
      data
    );

    this.db.push(post);

    return post;
  }

  update(id: string, update: Pick<Post, "title" | "body">): Post | null {
    return (
      this.db.find((post, idx) => {
        if (post.id !== id) return false;
        this.db[idx] = { ...post, ...update, updated: new Date() };
        return true;
      }) ?? null
    );
  }

  remove(id: string): Post | null {
    let removedPost: Post | undefined;

    this.db = this.db.filter((post) => {
      if (post.id !== id) return true;
      removedPost = post;
      return false;
    });

    return removedPost ?? null;
  }

  truncate(): boolean {
    this.db = [];
    return true;
  }
}

export class PostController {
  model = new PostModel();
  view = new PostView();

  // GET /posts
  getAll(): string {
    const posts = this.model.findAll();
    return this.view.render(posts);
  }

  // POST /posts
  post(post: { title: string; body: string }): string {
    this.model.insert(post);
    return this.view.render(this.model.findAll());
  }

  // GET /posts/:id
  get(id: string): string {
    this.model.find(id);
    return this.view.render(this.model.findAll());
  }

  // PUT /posts/:id
  put(id: string, update: Pick<Post, "title" | "body">): string {
    this.model.update(id, update);
    return this.view.render(this.model.findAll());
  }

  // PATCH /posts/:id
  patch(id: string, patch: Pick<Post, "title" | "body">): string {
    this.model.update(id, patch);
    return this.view.render(this.model.findAll());
  }

  // DELETE /posts/:id
  delete(id: string): string {
    this.model.remove(id);
    return this.view.render(this.model.findAll());
  }
}

export class PostView {
  render(posts: Post[]): string {
    const listStr = posts.reduce((acc, post) => {
      return (
        acc + `<article><h2>${post.title}</h2><div>${post.body}</div></article>`
      );
    }, "");

    return `<section>${listStr}</section>`;
  }
}
