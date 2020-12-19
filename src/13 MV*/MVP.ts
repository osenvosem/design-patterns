export interface Post {
  title: string;
  body: string;
}

interface MyViewInterface {
  renderPosts(posts: Post[]): string;
}

type SubscriptionListener = (posts: Post[]) => void;

export class MyModel {
  private state: Post[] = [];
  private subscriptions: SubscriptionListener[] = [];

  constructor(initState: Post[]) {
    this.state = initState;
  }

  getState(): Post[] {
    return this.state;
  }

  addPost(post: Post): void {
    this.state.push(post);
    this.subscriptions.forEach((listener) => listener(this.state));
  }

  subscribe(handler: SubscriptionListener): void {
    this.subscriptions.push(handler);
  }
}

export class MyView implements MyViewInterface {
  private presenter: MyPresenter;

  constructor() {
    this.presenter = new MyPresenter(this);
  }

  renderPosts(posts: Post[]): string {
    return posts
      .map((post) => {
        return `<article><h2>${post.title}</h2><div>${post.body}</div></article>`;
      })
      .join("");
  }

  // in real application this would be an event handler
  // that receives event object and collects data from HTML form
  handleSubmitButtonClick(post: Post): void {
    this.presenter.submitNewPost(post);
  }
}

export class MyPresenter {
  private model: MyModel;
  private view: MyView;

  constructor(view: MyView) {
    this.view = view;
    this.model = new MyModel([]);

    this.model.subscribe(this.updatePosts);
  }

  submitNewPost(post: Post): void {
    this.model.addPost(post);
  }

  updatePosts = (posts: Post[]): void => {
    this.view.renderPosts(posts);
  };
}
