let x1 = document.getElementsByTagName("button")[0];
x1.onclick = ()=>{
      let t = document.getElementsByTagName("input")[0].value;
      let url = "index.html?value="+encodeURIComponent(t);
      window.location.href = url;
    }
