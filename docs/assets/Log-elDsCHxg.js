import{_ as r,M as c,u as i,r as d,a as l,c as _,b as a,t as e,d as u,o as p}from"./index-C2cwtrY7.js";const g={class:"paper",style:{width:"1000px",margin:"20px auto","margin-top":"50px","background-color":"white","min-height":"1800px",padding:"20px 50px","box-shadow":"0 0 10px rgba(0, 0, 0, 0.5)"}},h={class:"title"},m={class:"look-count"},x=["innerHTML"],v={__name:"Log",setup(f){const s=new c;var n={method:"get",url:`http://ai.tordor.top:36464/super/get/blog?id=${i().params.log_id}`};const t=d({});return l(n).then(function(o){t.value=o.data[0],console.log(t.value)}).catch(function(o){}),(o,b)=>(p(),_("div",g,[a("div",h,e(t.value.article_name),1),a("div",m,"阅读次数"+e(t.value.article_read_count)+"次",1),a("div",{class:"introduction",innerHTML:u(s).render(t.value.article_content)},null,8,x)]))}},M=r(v,[["__scopeId","data-v-0a732819"]]);export{M as default};
