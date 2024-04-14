import { toGifSimple } from "./gif-views.js";

export const toHomeView = (gifData) => `
<div id="home">
<h1><span class="golden-text">Giphy Hunters</span></h1>
<div class="content">
    <p>Welcome to <span class="golden-text">Giphy Hunters</span>, the ultimate destination crafted by a dynamic trio of coding enthusiasts <br /><span class="golden-text">Tisho</span>, <span class="golden-text">Tanya</span>, and <span class="golden-text">Rado</span>.</p>
    <br />
    <p>As students at <span class="green-background">Telerik Academy Alpha</span>, we've harnessed the power of <span class="golden-text">JavaScript</span> to bring you a seamless gif-fetching experience that's as entertaining as it is efficient.</p>
    <br />
    <p>Dive into a world where the top 50 trending gifs come alive, curated just for you.</p>
    <br />
    <p>Our site's <span class="golden-text">localStore</span> feature is your personal gif vault, where favorites are never more than a heartbeat away. And for those gif maestros among you, we offer the stage to shine - upload your creations and bask in the glory as they take their place on our <span class="golden-text">'Uploaded Gifs'</span> page.</p>
    <br />
    <p><span class="golden-text">Giphy Hunters</span> isn't just a project, it's a movement. It's a brand that stands for fun, flair, and the freedom to express yourself in the universal language of gifs. So, whether you're here to browse, collect, create, or just have a good laugh, remember - in the great hunt for gifs, we're all in this together. <span class="golden-text">Happy hunting!</span>
    </p>
    <br />
    <h2>Random Gif</h2>
    <p>Here is a random gif for you:</p>

  <div>${toGifSimple(gifData)}</div>
<div>
`;