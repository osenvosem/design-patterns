// Flyweight
export interface ImageInterface {
  filename: string;
  display(x: number, y: number, width: number, height: number): string;
}

// Concrete flyweight
export class Image implements ImageInterface {
  constructor(public filename: string) {}
  display(x: number, y: number, width: number, height: number): string {
    return `<img src="${this.filename}" style="left:${x}px;top:${y}px;width:${width}px;height:${height}px;" />`;
  }
}

// Flyweight factory
export class ImageFactory {
  private images = new Map();

  getImage(filepath: string): Image {
    if (this.images.has(filepath)) {
      return this.images.get(filepath);
    } else {
      const newImage = new Image(filepath);
      this.images.set(filepath, newImage);
      return newImage;
    }
  }

  getLength(): number {
    return this.images.size;
  }
}
