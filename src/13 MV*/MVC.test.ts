import { PostController, PostModel, PostView } from "./MVC";

describe("MVC", () => {
  const fillModel = (model: PostModel, amount: number) =>
    Array.from({ length: amount }, (_, idx) => {
      model.insert({
        title: `Post #${idx + 1} title`,
        body: `Post #${idx + 1} body`,
      });
    });

  it("model#insert and model#findAll should work as expected", () => {
    const model = new PostModel();
    const amount = 4;
    fillModel(model, amount);

    expect(model.findAll().length).toBe(amount);
  });

  it("model#find should find a specific post", () => {
    const model = new PostModel();
    const testId = "aaa";
    const testTitle = "Post 1";
    const testBody = "Body 1";
    const testPost = { id: testId, title: testTitle, body: testBody };

    model.insert(testPost);

    expect(model.find(testId)?.title).toEqual(testTitle);
    expect(model.find(testId)?.body).toEqual(testBody);
  });

  it("model#update should update a post", () => {
    const model = new PostModel();
    const testId = "aaa";
    const newTitle = "Post 1";
    const newBody = "Body 1";
    const testPost = { id: testId, title: "old title", body: "old body" };

    model.insert(testPost);
    model.update(testId, { title: newTitle, body: newBody });

    expect(model.find(testId)?.title).toEqual(newTitle);
    expect(model.find(testId)?.body).toEqual(newBody);
  });

  it("model#remove should remove a post", () => {
    const model = new PostModel();
    const testId = "aaa";
    const testPost = { id: testId, title: "Title", body: "Body" };

    model.insert(testPost);

    expect(model.remove(testId)?.id).toBe(testPost.id);
    expect(model.findAll()).toEqual([]);
  });

  it("model#truncate should truncate the model data", () => {
    const model = new PostModel();
    const amount = 10;
    fillModel(model, amount);

    expect(model.findAll().length).toBe(amount);

    expect(model.truncate()).toBe(true);
    expect(model.findAll().length).toBe(0);
  });

  it("view#render should render correct HTML string", () => {
    const view = new PostView();
    const model = new PostModel();
    const amount = 4;
    fillModel(model, amount);

    Array.from({ length: amount }, (_, idx) => {
      expect(view.render(model.findAll())).toContain(`Post #${idx + 1} title`);
      expect(view.render(model.findAll())).toContain(`Post #${idx + 1} body`);
    });
  });

  // Model View Controller integration test
  it("controller#getAll should work correctly", () => {
    const controller = new PostController();
    const amount = 4;
    fillModel(controller.model, amount);

    expect(controller.getAll()).toContain("Post #4 title");
  });

  // the other controller methods do the same what were tested previously
});
