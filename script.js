function parsUrlParams() {
    const urlSerchParams = new URLSearchParams(window.location.search)
     const param = Object.fromEntries(urlSerchParams)
     console.log(param);
    
}
parsUrlParams()