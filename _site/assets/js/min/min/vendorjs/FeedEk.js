!function(a){a.fn.FeedEk=function(b){var c,d=a.extend({FeedUrl:"http://rss.cnn.com/rss/edition.rss",MaxCount:5,ShowDesc:!0,ShowPubDate:!0,CharacterLimit:0,TitleLinkTarget:"_blank",DateFormat:"",DateFormatLang:"en"},b),e=a(this).attr("id"),f="";a("#"+e).empty().append('<img src="loader.gif" />'),a.ajax({url:"http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num="+d.MaxCount+"&output=json&q="+encodeURIComponent(d.FeedUrl)+"&hl=en&callback=?",dataType:"json",success:function(b){a("#"+e).empty(),a.each(b.responseData.feed.entries,function(b,e){if(f+='<li><div class="itemTitle"><a href="'+e.link+'" target="'+d.TitleLinkTarget+'" >'+e.title+"</a></div>",d.ShowPubDate)if(c=new Date(e.publishedDate),a.trim(d.DateFormat).length>0)try{moment.lang(d.DateFormatLang),f+='<div class="itemDate">'+moment(c).format(d.DateFormat)+"</div>"}catch(b){f+='<div class="itemDate">'+c.toLocaleDateString()+"</div>"}else f+='<div class="itemDate">'+c.toLocaleDateString()+"</div>";d.ShowDesc&&(f+=d.DescCharacterLimit>0&&e.content.length>d.DescCharacterLimit?'<div class="itemContent">'+e.content.substr(0,d.DescCharacterLimit)+"...</div>":'<div class="itemContent">'+e.content+"</div>")}),a("#"+e).append('<ul class="feedEkList">'+f+"</ul>")}})}}(jQuery);