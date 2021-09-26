let raf = function (callback: any): any {
  let id = setTimeout(() => {
    callback();
  });
  return id;
};

let cancel = function (id: number) {
  clearTimeout(id);
};

if ((window as any).requestAnimationFrame) {
  raf = function (callback: any) {
    let id = requestAnimationFrame(callback);
    return id;
  };
  cancel = function (id) {
    cancelAnimationFrame(id);
  };
}

const wrapper = (callback: any) => {};
