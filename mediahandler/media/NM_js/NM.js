$(document).ready(function(){$("a[href*='northwesternmutual.com']").each(function(){var n=$(this).attr("href");n.indexOf("intcmp=fws-content")==-1&&(n+=n.indexOf("?")==-1?"?intcmp=fws-content":"&intcmp=fws-content");n.indexOf("agentid")==-1&&agentId.length!=0&&(n+="&agentid="+agentId);$(this).attr("href",n)})});/*This js file was minified by WSM.*/