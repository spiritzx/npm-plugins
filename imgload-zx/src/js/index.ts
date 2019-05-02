class ZxImgLoad {
  imgs: Array<string>;
  len: Number;
  success: Boolean;
  count: Number;
  error: Array<Object>;
  options: Object;

  constructor(imgs: Array<string>, cb: Function) {
    this.imgs = imgs;
    this.len = imgs.length;
    this.success = false;
    this.count = 0;
    this.error = [];
    this.options = this._previewLoad(cb);
    this.load();
  }
  _previewLoad(cb: Function) {
    return {
      eachFn(count: Number) {
        // 传给img加载的个数
        cb && cb(count);
      },
      endFn(flag = false, error = {}) {
        this.success = flag;
        this.error.push(error);
      }
    }
  }
  load() {
    let _len = this.len,
      _count = 0,
      _options = this.options;
    for (let i = 0; i < _len; i++) {
      let _src = this.imgs[i];
      let img = new Image();
      img.onload = () => {
        _count++;
        this.count = _count;
        _options.eachFn && _options.eachFn.call(this, _count);
        if (_count >= _len) {
          _options.endFn && _options.endFn.call(this, true);
        }
      }
      img.onerror = (err) => {
        let error = {
          index: i,
          src: _src
        };
        _options.endFn && _options.endFn.call(this, false, error);
      }
      img.src = _src;
    }
  }
}