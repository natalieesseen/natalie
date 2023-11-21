const createLayout = (items) => {
  return items.map(item => ({
    ...item,
    w: item.w || 1,
    h: item.h || 1,
    isResizable: false,
    isBounded: true,
  }));
};

export const layout = createLayout([
  { i: 'about', x: 0, y: 0, w: 2 },
  { i: 'freelance', x: 0, y: 1 },
  { i: 'placeholder', x: 2, y: 0 },
]);

export const layoutAbout = createLayout([
  { i: 'about', x: 0, y: 0, w: 2 },
  { i: 'freelance', x: 2, y: 0 },
  { i: 'placeholder', x: 0, y: 1},
]);
