import React from "react";

export type CRect = {
  leftTop: CPoint;
  rightTop: CPoint;
  leftBottom: CPoint;
  rightBottom: CPoint;
};

export class Rect {
  coordinate: CRect;

  constructor(data: CRect) {
    this.coordinate = data;
  }

  static fromDivRef(ref: React.RefObject<HTMLDivElement>): Rect {
    const top = ref.current?.offsetTop || 0;
    const left = ref.current?.offsetLeft || 0;
    const width = ref.current?.clientWidth || 0;
    const height = ref.current?.clientHeight || 0;

    const leftTop = {
      x: left,
      y: top,
    };

    const rightTop = {
      x: left + width,
      y: top,
    };

    const leftBottom = {
      x: left,
      y: top + height,
    };

    const rightBottom = {
      x: left + width,
      y: top + height,
    };

    return new Rect({
      leftTop,
      rightTop,
      leftBottom,
      rightBottom,
    });
  }
}

export type CPoint = {
  x: number;
  y: number;
};

export class Point {
  coordinate: CPoint;

  constructor(data: CPoint) {
    this.coordinate = data;
  }

  isInsideRect(rect: Rect): boolean {
    return (
      this.coordinate.x >= rect.coordinate.leftTop.x &&
      this.coordinate.x <= rect.coordinate.rightTop.x &&
      this.coordinate.y <= rect.coordinate.leftBottom.y &&
      this.coordinate.y >= rect.coordinate.leftTop.y
    );
  }

  static fromDragEvent(e: React.DragEvent) {
    return new Point({
      x: e.clientX,
      y: e.clientY,
    });
  }
}
