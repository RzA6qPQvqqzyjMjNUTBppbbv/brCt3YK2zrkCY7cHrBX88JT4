async function fetchimage() {
    var userid = document.getElementById("useridxd").value;
    if(!userid) return;
    const apid = await fetch(`https://japi.rest/discord/v1/user/${userid}`).then(res => res.json()).catch(error => {
  console.log(error.response)
  return
});

        if(!apid){
          document.getElementById("buttondownload").style.display = "none"
          document.getElementById("useravatar").src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`
          return
        }
        if(!apid.data){
          document.getElementById("buttondownload").style.display = "none"
          document.getElementById("useravatar").src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`
          return
        }
        if(!apid.data.bannerURL){
          document.getElementById("buttondownload").style.display = "none"
          document.getElementById("useravatar").src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`
          return
        }
          document.getElementById("useravatar").src = apid.data.bannerURL + "?size=4096"
          document.getElementById("downloadlink").href = apid.data.bannerURL + "?size=4096"
          document.getElementById("buttondownload").style.display = "inline"

}

  

  