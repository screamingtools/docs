import{_ as s,c as a,o as n,a as l}from"./app.098dbfaf.js";const d=JSON.parse('{"title":"createClasses","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Modes","slug":"modes"},{"level":3,"title":"No Argument","slug":"no-argument"},{"level":3,"title":"String","slug":"string"},{"level":3,"title":"Function","slug":"function"},{"level":3,"title":"Object","slug":"object"},{"level":2,"title":"Type Definitions","slug":"type-definitions"}],"relativePath":"tables/helpers/create-classes.md","lastUpdated":1667215223000}'),p={name:"tables/helpers/create-classes.md"},e=l(`<h1 id="createclasses" tabindex="-1">createClasses <a class="header-anchor" href="#createclasses" aria-hidden="true">#</a></h1><blockquote><p>Creates a classes object for a <code>&lt;Table&gt;</code> or <code>&lt;MiniTable&gt;</code>.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Table</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createClasses</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@screaming/tables</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> classes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createClasses</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- other props omitted for brevity --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Table</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">classes</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">classes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="modes" tabindex="-1">Modes <a class="header-anchor" href="#modes" aria-hidden="true">#</a></h2><p>The <code>createClasses</code> function can be used in several different ways, based on the type of argument passed in.</p><h3 id="no-argument" tabindex="-1">No Argument <a class="header-anchor" href="#no-argument" aria-hidden="true">#</a></h3><p>Passing in no arguments to <code>createClasses</code> will yield an object filled with sensible, default class names. This is primarily intended for simple projects with a single table.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">createClasses</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// {</span></span>
<span class="line"><span style="color:#676E95;">//   table: &#39;sf-table&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//   head: {</span></span>
<span class="line"><span style="color:#676E95;">//     thead: &#39;sf-table__head&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tr: &#39;sf-table__row sf-table__row--head&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     th: &#39;sf-table__cell sf-table__cell--head&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     thSorted: &#39;sf-table__cell--sorted&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     thRanked: &#39;sf-table__cell--ranked&#39;</span></span>
<span class="line"><span style="color:#676E95;">//   },</span></span>
<span class="line"><span style="color:#676E95;">//   body: {</span></span>
<span class="line"><span style="color:#676E95;">//     tbody: &#39;sf-table__body&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tr: &#39;sf-table__row sf-table__row--body&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     td: &#39;sf-table__cell sf-table__cell--body&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tdSorted: &#39;sf-table__cell--sorted&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tdRanked: &#39;sf-table__cell--ranked&#39;</span></span>
<span class="line"><span style="color:#676E95;">//   },</span></span>
<span class="line"><span style="color:#676E95;">//   indicator: &#39;sf-table__indicator&#39;</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span></code></pre></div><h3 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-hidden="true">#</a></h3><p>Providing a string to <code>createClasses</code> will return the same output as providing no arguments, except that the prefix <code>&quot;sf-table&quot;</code> will be replaced with the input string.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">createClasses</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new-prefix</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// {</span></span>
<span class="line"><span style="color:#676E95;">//   table: &#39;new-prefix&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//   head: {</span></span>
<span class="line"><span style="color:#676E95;">//     thead: &#39;new-prefix__head&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tr: &#39;new-prefix__row new-prefix__row--head&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     th: &#39;new-prefix__cell new-prefix__cell--head&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     thSorted: &#39;new-prefix__cell--sorted&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     thRanked: &#39;new-prefix__cell--ranked&#39;</span></span>
<span class="line"><span style="color:#676E95;">//   },</span></span>
<span class="line"><span style="color:#676E95;">//   body: {</span></span>
<span class="line"><span style="color:#676E95;">//     tbody: &#39;new-prefix__body&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tr: &#39;new-prefix__row new-prefix__row--body&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     td: &#39;new-prefix__cell new-prefix__cell--body&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tdSorted: &#39;new-prefix__cell--sorted&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tdRanked: &#39;new-prefix__cell--ranked&#39;</span></span>
<span class="line"><span style="color:#676E95;">//   },</span></span>
<span class="line"><span style="color:#676E95;">//   indicator: &#39;new-prefix__indicator&#39;</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span></code></pre></div><h3 id="function" tabindex="-1">Function <a class="header-anchor" href="#function" aria-hidden="true">#</a></h3><p>A callback function can be provided to <code>createClasses</code>, which accepts a single argument containing the same <a href="#no-argument">default class names</a> obtained from calling <code>createClasses</code> with no arguments. This allows for the creation of class objects targeting specific elements (e.g. only <code>&lt;table&gt;</code> and <code>&lt;tbody&gt;</code>), rather than every element in the table.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">createClasses</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">defaults</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> defaults</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> defaults</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// {</span></span>
<span class="line"><span style="color:#676E95;">//   table: &#39;sf-table&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//   body: {</span></span>
<span class="line"><span style="color:#676E95;">//     tbody: &#39;sf-table__body some-other-class&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tr: &#39;sf-table__body-row&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     td: &#39;sf-table__body-cell&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tdSorted: &#39;sf-table__body-cell--sorted&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tdRanked: &#39;sf-table__body-cell--ranked&#39;</span></span>
<span class="line"><span style="color:#676E95;">//   }</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span></code></pre></div><p>This functionality is helpful when wanting to add custom class names to specific elements whilst retaining the default class names.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">createClasses</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">defaults</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">defaults</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tbody</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">defaults</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tbody</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> some-other-class</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// {</span></span>
<span class="line"><span style="color:#676E95;">//   table: &#39;sf-table&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//   head: {</span></span>
<span class="line"><span style="color:#676E95;">//     thead: &#39;sf-table__head&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tr: &#39;sf-table__head-row&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     th: &#39;sf-table__head-cell&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     thSorted: &#39;sf-table__head-cell--sorted&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     thRanked: &#39;sf-table__head-cell--ranked&#39;</span></span>
<span class="line"><span style="color:#676E95;">//   },</span></span>
<span class="line"><span style="color:#676E95;">//   body: {</span></span>
<span class="line highlighted"><span style="color:#676E95;">//     tbody: &#39;sf-table__body some-other-class&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tr: &#39;sf-table__body-row&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     td: &#39;sf-table__body-cell&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tdSorted: &#39;sf-table__body-cell--sorted&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//     tdRanked: &#39;sf-table__body-cell--ranked&#39;</span></span>
<span class="line"><span style="color:#676E95;">//   },</span></span>
<span class="line"><span style="color:#676E95;">//   indicator: &#39;sf-table__indicator&#39;</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span></code></pre></div><h3 id="object" tabindex="-1">Object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><p>Passing an object to <code>createClasses</code> will simply return the same object. In this instance, <code>createClasses</code> acts more as an intellisense-provider rather than a function. This is useful in circumstances such as using a utility-class framework such as <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind CSS</a>.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">createClasses</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w-full text-lg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">indicator</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fixed right-1 bottom-1 w-4 h-4</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// {</span></span>
<span class="line"><span style="color:#676E95;">//   table: &#39;w-full text-lg&#39;,</span></span>
<span class="line"><span style="color:#676E95;">//   head: { ... },</span></span>
<span class="line"><span style="color:#676E95;">//   body: { ... },</span></span>
<span class="line"><span style="color:#676E95;">//   indicator: &#39;fixed right-1 bottom-1 w-4 h-4&#39;</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span></code></pre></div><h2 id="type-definitions" tabindex="-1">Type Definitions <a class="header-anchor" href="#type-definitions" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Classes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">thead</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">thSorted</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">thRanked</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tbody</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tdSorted</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tdRanked</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">indicator</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CreateClassesModifier</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Classes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Classes</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Classes</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">modifier</span><span style="color:#676E95;"> - The prefix, modification function, or plain classes object.</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createClasses</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">modifier</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CreateClassesModifier</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Classes</span></span>
<span class="line"></span></code></pre></div>`,22),o=[e];function t(c,r,y,i,D,C){return n(),a("div",null,o)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
