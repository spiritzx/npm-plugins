import Imgload from "../utils/imgLoad";

let _img:ArrayLike<{[propName: string]: any}> = document.querySelectorAll("img");
let imgs:Array<any> = Array.from(_img);
let _imgs:Array<any> = imgs.map(val => val.src);
let len:number = imgs.length;
let readyRE:RegExp = /complete|loaded|interactive/;
let ready:Function = function(callback){
  if (readyRE.test(document.readyState) && document.body) callback()
  else document.addEventListener('DOMContentLoaded', function(){ callback() }, false)
  return this
}
ready(() => {
  let hold:{[propName: string]: any} = document.querySelector(".hold");
  let mask:{[propName: string]: any} = document.querySelector(".mask");
  new Imgload(_imgs, (num:number) => {
    hold.style.transform = `translateX(-${(len - num)/len * 100}%)`;
    if (num == len) {
      mask.style.display = "none";
    }
  });
})