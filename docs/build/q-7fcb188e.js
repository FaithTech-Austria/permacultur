import{p as _}from"./q-7b203fc8.js";function k(n,t,f){if(n!==null)for(var i,s,P,y,b,r,c,u=0,o=0,g,C=n.type,G=C==="FeatureCollection",w=C==="Feature",S=G?n.features.length:1,e=0;e<S;e++){c=G?n.features[e].geometry:w?n.geometry:n,g=c?c.type==="GeometryCollection":!1,b=g?c.geometries.length:1;for(var v=0;v<b;v++){var l=0,h=0;if(y=g?c.geometries[v]:c,y!==null){r=y.coordinates;var a=y.type;switch(u=f&&(a==="Polygon"||a==="MultiPolygon")?1:0,a){case null:break;case"Point":if(t(r,o,e,l,h)===!1)return!1;o++,l++;break;case"LineString":case"MultiPoint":for(i=0;i<r.length;i++){if(t(r[i],o,e,l,h)===!1)return!1;o++,a==="MultiPoint"&&l++}a==="LineString"&&l++;break;case"Polygon":case"MultiLineString":for(i=0;i<r.length;i++){for(s=0;s<r[i].length-u;s++){if(t(r[i][s],o,e,l,h)===!1)return!1;o++}a==="MultiLineString"&&l++,a==="Polygon"&&h++}a==="Polygon"&&l++;break;case"MultiPolygon":for(i=0;i<r.length;i++){for(h=0,s=0;s<r[i].length;s++){for(P=0;P<r[i][s].length-u;P++){if(t(r[i][s][P],o,e,l,h)===!1)return!1;o++}h++}l++}break;case"GeometryCollection":for(i=0;i<y.geometries.length;i++)if(k(y.geometries[i],t,f)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function M(n){var t=[1/0,1/0,-1/0,-1/0];return k(n,function(f){t[0]>f[0]&&(t[0]=f[0]),t[1]>f[1]&&(t[1]=f[1]),t[2]<f[0]&&(t[2]=f[0]),t[3]<f[1]&&(t[3]=f[1])}),t}M.default=M;const p=(n,t)=>{const f=M({type:"FeatureCollection",features:t});n.fitBounds(f,{animate:!1})};export{_ as _hW,p as s_i0AFyFi7Gc4};
