const html = `<!DOCTYPE html>
<head>
      <title>bruh</title>
</head>
<style>
.changelog{text-align: center}
    p {color:white}
    h1 {color:white}
    a {color:white}
</style>
<body style="background-color:black;">
    <h1>Hello World</h1>
    <p>//todo: make this pretty </p>
    <p> Mail: Kowichine11@gmail.com </p>
    <p>Discord: oh, ok#2517 </p>
    <p>Genshin EU: 706054981 </p>
    <p>Steam Friend: 338086989 </p>
    <p>Steam Trade:<a href="https://steamcommunity.com/tradeoffer/new/?partner=338086989&token=TuIiZVlg">https://steamcommunity.com/tradeoffer/new/?partner=338086989&token=TuIiZVlg</a></p>
    </div>
    <p>Ganyu</p>
    <picture>
        <img src="https://cdn.discordapp.com/attachments/852692918623272990/1028669728568393769/unknown.png" style="width:auto;">
    </picture>
    <div class="changelog">
        <p> Changelisty </p>
        <p> 2022.10.01: HTML and HYPERLINKS YAY! </p>
        <p> 2022.10.09: GANYU!!!</p>
        <p> 2022.10.29: Fixed link, broke spacing. </p>
        <p> 2022.11.05: Fixed Spacing. Created Github repo. <a href="https://github.com/ardaxxdd/Very-good-about-me-page-cloudflare-workers/">https://github.com/ardaxxdd/Very-good-about-me-page-cloudflare-workers/</a></p> 
    </div>
</body>`;
async function handleRequest(request) {
  //const views = await KV.get("views");

  //await KV.put("views", parseInt(views) + 1);
  
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request));
});