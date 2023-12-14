import html2canvas from "html2canvas";
import PostApi from "./api/PostApi";

const getImage = (res)=>{
    const koko = document.getElementById('koko')!
    html2canvas(koko).then( canvas => { 
        const canvasImg =  canvas.toDataURL("image/png");
        const file = createPngFile4Base64(canvasImg,'a')
        PostApi.post( '/storeImg',{path: file, id: res.data.id},{
            headers: {
              'content-type': 'multipart/form-data',
            },
          }).then((res)=>{
            // console.log(res)
        })
    })
}

const createPngFile4Base64 = function (base64, name) {
    // base64のデコード
    var bin = atob(base64.replace(/^.*,/, ''));
    // バイナリデータ化
    var buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }
    // ファイルオブジェクト生成(この例ではjpegファイル)
    return new File([buffer.buffer], name, {type: "image/png"});
};

export default getImage