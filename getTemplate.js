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

var broken = [
  'https://github.com/openfisca/openfisca-france/compare/ca0222c049c311b478e661488d1a16564dc66d21..7954c6c880472de9f316a5df84461f4983b51cb3',

'https://github.com/ansible/ansible/compare/d3b83817d186e41983c24cce7a02007784f61bc5..d5f4f50bfb5b1519eb2593249076127048cf6f31',

'https://github.com/terasolunaorg/guideline/compare/9a2a4346ed4032ed80234b51a6e69713718d9f95..b3b8aefe600c258b63e8f51ef5c2cdd985843c04',

'https://github.com/terasolunaorg/guideline/compare/98ea93d613ef70c385f696ca6ac08110872e1341..7c007a9e4b24528e785b350de53c56619582c18e',

'https://github.com/terasolunaorg/guideline/compare/fe4ec981294885eddd5e14ad45a14c1e334eee32..9dc49516b5b5273e73d55acf8ff73ad1cca2727c',

'https://github.com/terasolunaorg/guideline/compare/ac90323422e178bf19751e1f80aa61c06b54b91e..5ed2b870afe463ad92f9ccb2e9d4f06990523703',

'https://github.com/terasolunaorg/guideline/compare/c5691595068f3d4fee918d70ea5b1c0fd127782f..789926d36f9ece3b62c48f2762d29965071faee0',

'https://github.com/belluccifranco/sic/compare/bc67123f73693bf34d95c87610debe3607328746..fb463af2b78d71e387b5c28334d6903989242f68',
'https://github.com/ansible/ansible/compare/d8a26c1827641bf17cf9baa9bd45ea59412d4c44..4ae3c1c0e6250f999c833cccc04120936a22271d',
'https://github.com/ansible/ansible/compare/23f0758250a6d0f2862d2d0d2a3b39b1de50f415..0f4b0509b366ef7de821dd1294bd340d3384a684',
'https://github.com/terasolunaorg/guideline/compare/84701fa19b3aab1382655f50a4a335335e4f24d6..5a71a7074e40da0e2ed6ac6af8ad359a30a1035e',

'https://github.com/terasolunaorg/guideline/compare/5027ce0cb6f44795303f9ce10ef5c0d1b2befee4..6fef4bfe1ffaa74b9d413effb6a9d589d1af3d84',
'https://github.com/terasolunaorg/guideline/compare/599a144e50e5b934cf7d8153168c1e4e7d5dcf93..e3099df86f97a933678af4a303364e3595cf7329',
'https://github.com/terasolunaorg/guideline/compare/b450941261857579d49c2fe0b4077fe385534924..39b8cf2e1df9ced98797349f676e47f3ef0ac254',
'https://github.com/terasolunaorg/guideline/compare/e5c758ab704088b8552d34e57375dba938046b1d..ca7bfccf7db739839af2c063f76671e46bd593f9',
'https://github.com/terasolunaorg/guideline/compare/5e9e7677e5ee93a4293d21e7bb8cc70f3dde3a91..7b1b8b11884e533b9e243e1a3db93c154385654f',
'https://github.com/terasolunaorg/guideline/compare/a256973d80c506b99984cff2a1e217210ed0b5ba..693c69f3050e6f3e5833054dd973b061cf26538e',
'https://github.com/terasolunaorg/guideline/compare/dd8d51b778bd69cc68b5ba6728eef6f50ea25ea2..0ed668d3cb5dc35246fa4ef6b42f912752f4cf08',
'https://github.com/terasolunaorg/guideline/compare/6aa742432cd997f5d027e699d32ac41a88c67ce1..6793289c32541fe5ba15028fe6f1edb3ef26c13e',
'https://github.com/terasolunaorg/guideline/compare/1396f193c94e51d079aa74c3ee569acf84fc685f..e46fe34fa388946aa4a5b7389850d1f23121f7b0',
'https://github.com/terasolunaorg/guideline/compare/ea91cfaedcf60c883b3b599644fd2e54354b6c65..fcff627db9b92f2e17ea8851b0092ef89b5550f1',
'https://github.com/terasolunaorg/guideline/compare/b4b714e80f89cadfb7663f5edd7c25afea62619e..404f082a60de0c078fff484269f10a62b003d218',
'https://github.com/terasolunaorg/guideline/compare/c66f4200b64ef1e3f1d9aa504c534f962e27d7f6..4514c05b4ce931a599c5112b113396f5e833a255',
'https://github.com/terasolunaorg/guideline/compare/b5efc91b265f40571f2fd6b029df7c81c879f14f..d1312c910bc87dcf8a1fb27205eb95ef774e730b',
'https://github.com/terasolunaorg/guideline/compare/6a5f5b301636e3f7b7229320a9f8a4be20827a15..dc54c7b236179892e6bf848959ed32d993bdc242',
'https://github.com/terasolunaorg/guideline/compare/b5ad84ce57042a7606e51e5e2728f8a650bf138e..ca8d9787ae89ce9b088f210fe7b45deddf7c8455',
'https://github.com/terasolunaorg/guideline/compare/0ab48d0a95b1f8c783193d12c370682514470357..54fdebc6ff6fdf9547f2a0e60be463e95e7c5b7e',
'https://github.com/terasolunaorg/guideline/compare/bc32c460da95c2964cf8ffc501065f4606755451..6d32d9c749fda192dc209dcabfcb4c0559dbaf8d',
'https://github.com/terasolunaorg/guideline/compare/019faafd1fe958b744f8238d65e0b3f53641f521..04a77ddb016d3eba2e6777ee3a3b783f0904200f',
'https://github.com/terasolunaorg/guideline/compare/103ca1248d69860c8e8420ba232e865f06b9efb1..ca7f0604bfa6ff7e5f768311971e34cb8ea0035b',
'https://github.com/terasolunaorg/guideline/compare/ef091507bdd04b8cefaca052610732906eeb8d0a..865fc9086488abe7323a274c5e761028c954848f',
'https://github.com/terasolunaorg/guideline/compare/782b4c6c9bdc0cb933e794fe81037874fe3e9482..425d9ebb160104f6c74435d16b561d7e4df20884',
'https://github.com/terasolunaorg/guideline/compare/4bc69fd155bc8c1104d56923363e40eb1541fd85..be3a688c4b4f15dc73e4001364b68acf73641759',
'https://github.com/terasolunaorg/guideline/compare/96b14b4666b55653154ab0a643b57bb569ea4256..d23efc4872da267b267b029625e8cecff01b86eb',
'https://github.com/terasolunaorg/guideline/compare/c7b3a9d5c4cb656bb7635e0b517135f8b7ae22a7..a351e03890d2b4fc07dd78b5d265f4ad2e5d1a9e',
'https://github.com/terasolunaorg/guideline/compare/893e47adb3b0acbbae8fa675db4cfdf6cd7d1fec..cb21255dd520b1750875fe8c23ded74cfb12ebd5',
'https://github.com/terasolunaorg/guideline/compare/145cf641995c4562cdd707f968ede5549eec3b9f..8a4f34ce31ae96ed05974955d19cf31c84ddb397',
'https://github.com/terasolunaorg/guideline/compare/6be801c8141a8d3be6a793cd75a885b72cb24d3b..171899dd6b2956b9b1b964340746781a92ab9220',
'https://github.com/terasolunaorg/guideline/compare/6be801c8141a8d3be6a793cd75a885b72cb24d3b..171899dd6b2956b9b1b964340746781a92ab9220',
'https://github.com/terasolunaorg/guideline/compare/b3910e732c7c3ea1b36e4eba1bff8e1f149fa007..c34b18e7a5dd6903a30c95260857573f50b63138',
'https://github.com/terasolunaorg/guideline/compare/6063d0cf045802f77a9c319f1c8017bedc41ee2f..b797984b9db9b74caf9cb22a04f5928db800777e',
'https://github.com/terasolunaorg/guideline/compare/a3576a3473e1f34f529482718cca9a92d53fbd5a..613acd85f12160045297085b1ae1342b45783f7a',
'https://github.com/terasolunaorg/guideline/compare/9bb4af560809163ba8805ab270671462ce31a7fa..8117fc882345bafe7e90b4d8fee334464ba88e5c',
'https://github.com/terasolunaorg/guideline/compare/9a1d04809a9a4dabb4651bd023934379c06e9748..85ff8f1fe701ba9d2c586810a39d1f32e8d42a15',
'https://github.com/terasolunaorg/guideline/compare/90b4f56ab4f6871b586b8771b42da5e4fc197052..f31174e2ebdba2b92cf8e6c103480248c01fd023',
'https://github.com/terasolunaorg/guideline/compare/f1b3ceb2ce5d5d7bd9b145cfdcc9e20ae6c6b950..0d613f8d54d6b9255ed7279ae23df588a6c95220',
'https://github.com/terasolunaorg/guideline/compare/3b1a73f4fefe559d65f2c4acf2c653bc3bdf7eb9..6ee2f1d0467fdfc9818cdd89570b0e83747cbdc3',
'https://github.com/terasolunaorg/guideline/compare/ecbfa9b1b636260b911851a37ceeeacd49c05ffd..7c5a958e44995a4fd85b62c2f8281384247f0314',
'https://github.com/terasolunaorg/guideline/compare/15b3e1f09954d659af208c843a87923e7a3331fb..db87cc19e0106677b7d1645206ebc2820a8a7339',
'https://github.com/scikit-learn/scikit-learn/compare/567a956338473edd38e9df19c71e2a6846c450e5..1274e48216c1549753cfb7d10f8ff79fcbac90ed',
'https://github.com/terasolunaorg/guideline/compare/56524005b26419539c1fba31479ed373a80c39f2..8cf7e59870df7713f8a5043fc446b56d6fce442e',
'https://github.com/terasolunaorg/guideline/compare/a07278f1308088d031af1f65e79417c40b2378b3..966fcc45d351e61fed97552bcf889aaa8e3bf091',
'https://github.com/terasolunaorg/guideline/compare/90b909749fcd5f868ef1d343071123a6f42470ad..eba84e6b4262e4634082889d27d3ac557da5f43f',
'https://github.com/terasolunaorg/guideline/compare/0f8a8e266b04bb557791b531fce6d074e1f85996..6c20a0417392db9e7c8885efbc22743ea99509e0',
'https://github.com/terasolunaorg/guideline/compare/1abd7a5cf1836b9da4d981fd1483fbaae4730d54..a4c74c4659c1846d78e1ed3a2303fb6cc9203f12',
'https://github.com/terasolunaorg/guideline/compare/8c7ba4165b6f4e318cb410fef5bf329bc0ae7155..f75dd168c5d20c43dbc2a1859e351c8fd5f138d1',
'https://github.com/terasolunaorg/guideline/compare/c592318f4517a82859d3cfb90f241f6cf2901717..e2e65708851b8d32182caa63752f639102439f0f'

]
var start = 1661;
var json = null;
var idx = 1661;
var lim = 1700;
var diffInfo = {};
async function load() {
  
     await $.getJSON("/website/artifacts.json", function(dat) {})
    .then(async function(dat) {
      
      json = dat;
        console.log(json); // this will show the info it in firebug console

        for (let i = 0; i < start; i++) {
          json.shift();
        }
        // idx = 1701;
        // lim = 1800;
        var promise = await processJSON(json, idx, lim).then(() => {
          console.log("returned...");
           console.log("in then");
         
            var jsonStr = JSON.stringify(diffInfo);
        //saveF(localstorage);
        
    

    var textFileAsBlob = new Blob([jsonStr], { type: 'application/json' });

    if ('msSaveOrOpenBlob' in navigator) {
        navigator.msSaveOrOpenBlob(textFileAsBlob, "gitTemplate" + start + "_" + lim + "_" + Object.keys(diffInfo).length + ".json");
      } else {
        var downloadLink = document.createElement('a');
        downloadLink.download = "gitTemplate" + start + "_" + lim + "_" + Object.keys(diffInfo).length + ".json";
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
  let wrap = document.createElement('div');
    console.log("yay");
    console.log(idx + "-" + lim);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    if (json.length && (idx < lim)) {
        let url = json[0].diff_url;
        console.log(url);
        if (broken.includes(url)) {
          json.shift();
            //console.log(diffInfo);
            //$('#test').html(diffInfo[url]);
            return await processJSON(json, idx + 1, lim);
        }

        try {
         await fetch(proxyurl + url)
            .then(response => {
              response.text()})
            .then(async function(contents) {
            
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
          }).then(async function(){
            
            diffInfo[url] = wrap.innerHTML;
            json.shift();
            //console.log(diffInfo);
            //$('#test').html(diffInfo[url]);
            return await processJSON(json, idx + 1, lim);
           
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


          function validate() {
            console.log(Object.keys(data2).length);
          }