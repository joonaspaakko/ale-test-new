var r={methods:{timeStringToSeconds:function(t){if(t&&t.match(/\d/)){const c=t.match(/[0-9]( ?)+(m|min|分)/),n=t.match(/\d+/g),e={},s=function(m){return+m*60*60},o=function(m){return+m*60};return n.length===2?(e.h=n[0],e.m=n[1],e.numbers=s(e.h)+o(e.m)):c?(e.m=n[0],e.numbers=o(e.m)):(e.h=n[0],e.numbers=s(e.h)),e.numbers}else return 0}}};export{r as t};