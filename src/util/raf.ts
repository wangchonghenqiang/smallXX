import { clean } from '@umijs/deps/compiled/semver';

let raf = function (callback: any): any {
  let id = setTimeout(() => {
    callback();
  });
  return id;
};

let caf = function (id: number) {
  clearTimeout(id);
};

if ((window as any).requestAnimationFrame) {
  raf = function (callback: any) {
    let id = requestAnimationFrame(callback);
    return id;
  };
  caf = function (id) {
    cancelAnimationFrame(id);
  };
}

let map = new Map();
let rid = 0;

function cleanup(id: number) {
  map.delete(id);
}

const wrapper = (callback: any, times = 1) => {
  rid++;
  let id: number = rid;
  function next(times: number) {
    if (times === 0) {
      caf(id);
      callback();
    }
    let realId = raf(() => {
      next(times - 1);
    });
    map.set(id, realId);
  }
  next(times);
  return id;
};

wrapper.cancel = function (id: number) {
  let realId = map.get(id);
  cleanup(id);
  return caf(realId);
};

export default wrapper;
