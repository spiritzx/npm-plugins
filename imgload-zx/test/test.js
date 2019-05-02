require("should");
let ZxImgLoad = require("../dist/js/imgLoad.min");
let imgs = [
  "https://imgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111243182&di=2a684a1a86e9701c95b03bf91726efe9&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fac6eddc451da81cb167b12945466d016082431cd.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111243177&di=c8399b73801b570d1206b3c231fd2dc5&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FeGxOGOLu3S3q792uvhRqag%3D%3D%2F5727171351132061766.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111243173&di=ab62a95e526ae37115293bd6df7b291b&imgtype=0&src=http%3A%2F%2Fimg3.iqilu.com%2Fdata%2Fattachment%2Fforum%2F201308%2F22%2F161806ha55qtiz9s0qk900.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111313394&di=aa8aa600790f30878230ab1dc5a52419&imgtype=0&src=http%3A%2F%2Fpic.ffpic.com%2Ffiles%2F2014%2F0204%2Fsj1106dm06.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111313369&di=7bbc77f1f35fc6818be9e24d9197b95d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F10%2F20170710165031_XeGcP.jpeg",
  "https://imgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111313448&di=c5462d5dae9a36a6ed666b025cd790e0&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130524%2F0005018370272145_b.jpg"
];

var name = "zhaojian";

describe("Name", function() {
    it("The name should be zhaojian", function() {
        let obj = new ZxImgLoad(imgs, (num) => {
          console.log(num);
        });
        
        name.should.eql("zhaojian");
    });
});