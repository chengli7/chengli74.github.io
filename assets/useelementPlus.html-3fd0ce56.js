import{_ as n,o as s,c as a,b as e}from"./app-536d921a.js";const t={},i=e(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装element-plus</span>
<span class="token function">npm</span> <span class="token function">install</span> element-plus <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在.vuepress文件夹中新建client.js文件，写入以下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/client&#39;</span><span class="token punctuation">;</span>
<span class="token function">import</span> ElementPlus from <span class="token string">&#39;element-plus&#39;</span>
<span class="token comment"># import &#39;./styles/index.scss&#39;</span>
<span class="token function">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>
<span class="token builtin class-name">export</span> default defineClientConfig<span class="token punctuation">(</span><span class="token punctuation">{</span>
  enhance<span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app.use<span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function p(c,o){return s(),a("div",null,l)}const d=n(t,[["render",p],["__file","useelementPlus.html.vue"]]);export{d as default};
