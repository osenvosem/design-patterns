import { MyView, Post } from "./MVP";

describe("MVP", () => {
  it("should go through the mechanism and render new optput ", () => {
    const view = new MyView();
    const mockedRenderPosts = jest.fn();
    view.renderPosts = mockedRenderPosts;

    const testPost1: Post = {
      title: "This is post one",
      body: "This is the body of the post one",
    };
    const testPost2: Post = {
      title: "This is post two",
      body: "This is the body of the post two",
    };

    view.handleSubmitButtonClick(testPost1);
    view.handleSubmitButtonClick(testPost2);

    expect(mockedRenderPosts).toBeCalledWith([testPost1, testPost2]);
  });
});
