import { ImageFactory } from "./image";

describe("Flyweight image", () => {
  it("should return same image object by same key", () => {
    const testImagePath = "./assets/image.png";
    const imageFactory = new ImageFactory();
    const imageA = imageFactory.getImage(testImagePath);
    const imageB = imageFactory.getImage(testImagePath);

    expect(imageA).toBe(imageB);
    expect(imageFactory.getLength()).toBe(1);
  });

  it("should generate correct HTML for each instance of same Image class", () => {
    type Params = [number, number, number, number];
    const imagePath = "./assets/image.png";
    const paramSetA: Params = [100, 200, 300, 400];
    const paramSetB: Params = [101, 201, 301, 401];
    const paramSetC: Params = [102, 202, 302, 402];
    const generatedHtmlA = `<img src="${imagePath}" style="left:100px;top:200px;width:300px;height:400px;" />`;
    const generatedHtmlB = `<img src="${imagePath}" style="left:101px;top:201px;width:301px;height:401px;" />`;
    const generatedHtmlC = `<img src="${imagePath}" style="left:102px;top:202px;width:302px;height:402px;" />`;
    const imageFactory = new ImageFactory();
    const imageAHtml = imageFactory.getImage(imagePath).display(...paramSetA);
    const imageBHtml = imageFactory.getImage(imagePath).display(...paramSetB);
    const imageCHtml = imageFactory.getImage(imagePath).display(...paramSetC);

    expect(imageAHtml).toBe(generatedHtmlA);
    expect(imageBHtml).toBe(generatedHtmlB);
    expect(imageCHtml).toBe(generatedHtmlC);
  });
});
