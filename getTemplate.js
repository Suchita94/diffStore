// window.webkitRequestFileSystem(window.TEMPORARY, 1024*1024, saveF);
//         window.webkitRequestFileSystem(window.PERSISTENT , 1024*1024, saveF);
//         navigator.webkitPersistentStorage.requestQuota(1024*1024, function() {
//             window.webkitRequestFileSystem(window.PERSISTENT , 1024*1024, saveF);
//           });
var diffInfo = {};
// function saveF(localstorage) {
//     localstorage.root.getFile("info.txt", {create: true}), function(DatFile) {
//         DatFile.createWriter(function(DatContent) {
//           var blob = new Blob(["Lorem Ipsum"], {type: "text/plain"});
//           DatContent.write(blob);
//         });
//     }
// }
var start = 0;
var json = null;
var idx = 0;
var lim = 100;
var diffInfo = {};
async function load() {
  
     await $.getJSON("/website/artifacts.json", function(dat) {})
    .then(async function(dat) {
      
      json = dat;
        console.log(json); // this will show the info it in firebug console

        for (let i = 0; i < start; i++) {
          json.shift();
        }
        idx = 0;
        lim = 100;
        var promise = await processJSON(json, idx, lim).then(() => {
          console.log("returned...");
          console.log(diffInfo);
           console.log("in then");
         
            var jsonStr = JSON.stringify(diffInfo);
        //saveF(localstorage);
        
    

    var textFileAsBlob = new Blob([jsonStr], { type: 'text/plain' });

    if ('msSaveOrOpenBlob' in navigator) {
        navigator.msSaveOrOpenBlob(textFileAsBlob, "info.txt");
      } else {
        var downloadLink = document.createElement('a');
        downloadLink.download = "info.txt";
        downloadLink.innerHTML = 'Download File';
        if ('webkitURL' in window) {
          // Chrome allows the link to be clicked without actually adding it to the DOM.
          downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
          // Firefox requires the link to be added to the DOM before it can be clicked.
          downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
          downloadLink.onclick = destroyClickedElement;
          downloadLink.style.display = 'none';
          document.body.appendChild(downloadLink);
        }

        downloadLink.click();
      }

        
    });
  });
}

 async function processJSON(json, idx, lim) {
    
    console.log("yay");
    console.log(json);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    if (json.length && (idx < lim)) {
        let url = json[0].diff_url;
        try {
         await fetch(proxyurl + url)
            .then(response => response.text())
            .then(async function(contents) {
            let wrap = document.createElement('div');
            let parser = new DOMParser();
            let doc = parser.parseFromString(contents, "text/html");
            
            let linkElements = doc.getElementsByTagName("link");
            for (var loopVar = 0; loopVar < linkElements.length; loopVar++) {
                wrap.appendChild(linkElements[loopVar].cloneNode(true));
            }
            let labelEle = doc.getElementsByClassName("toc-diff-stats");
            
            wrap.appendChild(labelEle[0].cloneNode(true));

            let mainElements = doc.getElementsByClassName("diff-view ");

            
            wrap.appendChild(mainElements[0].cloneNode(true));
            diffInfo[url] = wrap.innerHTML;
            json.shift();
            //console.log(diffInfo);
            //$('#test').html(diffInfo[url]);
            return await processJSON(json, idx++, lim);
           
            }).catch(e => {
              console.log(e);
            });
          } catch (err) {
            console.log(err);
          }
        } else {
          return diffInfo;
        }
          }
