const onFileInputChange = (e,setUrl)=> {
    const file = e.target.files[0]
    const reader = new FileReader();

    reader.onload = () => {
        const imgData = reader.result;
        let createImg = document.createElement("img")
        {/*// @ts-ignore */}
        createImg.src = imgData;
        createImg.onload = () =>{
        if(createImg.width > createImg.height){
            let img = document.getElementById("img");
            {/*// @ts-ignore */}
            img.style.width = "auto";
            {/*// @ts-ignore */}
            img.style.height = "100%"
        }

        }
        {/*// @ts-ignore */}
        setUrl(imgData)
    }
    if (file) {
    reader.readAsDataURL(file);
    }
}

export default onFileInputChange
