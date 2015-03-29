var foundationRoutes = [{"name":"user page","url":"/user","animationIn":"fadeIn","path":"templates/user_page.html"},{"name":"stores","url":"/stores","abstract":true,"path":"templates/stores.html"},{"name":"store reviews","parent":"reviews","url":"/store/:id","animationIn":"fadeIn","stores":[{"name":"Best Store","url":"www.beststore.example"},{"name":"Future Buy","url":"futurebuy.example"},{"name":"iBay","url":"ibay.example"},{"name":"Pear","url":"pear.example"},{"name":"Home Repo","url":"homerepo.example"}],"reviews":[{"reviewer":{"id":1,"name":"Bob"},"date":1328388888006,"rating":{"overall":[true,true,true,true,false],"communication":[true,true,true,true,false],"delivery":[true,true,true,true,false],"safety":[true,true,true,true,false]},"helpfulness":{"agree":12,"total":15}},{"reviewer":{"id":2,"name":"Kat"},"date":1288323623006,"rating":{"overall":[true,true,true,false,false],"communication":[true,true,true,false,false],"delivery":[true,true,false,false,false],"safety":[true,true,true,false,false]},"helpfulness":{"agree":10,"total":13}},{"reviewer":{"id":3,"name":"Sunny"},"date":1388323623006,"rating":{"overall":[true,true,true,true,true],"communication":[true,true,true,true,true],"delivery":[true,true,true,true,false],"safety":[true,true,true,true,false]},"helpfulness":{"agree":11,"total":15}},{"reviewer":{"id":4,"name":"Billy"},"date":1388323623006,"rating":{"overall":[true,true,true,true,false],"communication":[true,true,true,true,true],"delivery":[true,true,true,true,false],"safety":[true,true,true,false,false]},"helpfulness":{"agree":3,"total":5}}],"path":"templates/review_all.html"},{"name":"reviews","url":"/reviews","abstract":true,"path":"templates/reviews.html"},{"name":"list my reviews","parent":"reviews","url":"/list","animationIn":"fadeIn","path":"templates/review_list.html"},{"name":"store info","parent":"stores","url":"/info/:id","animationIn":"fadeIn","stores":[{"name":"Best Store","url":"www.beststore.example","description":"Large electronics store in Canada. Thank you for being a friend. Travelled down the road and back again. Your heart is true you're a pal and a confidant. Come and knock on our door. We've been waiting for you. Three's company too.","tags":["electronics","battery","gift cards"],"stars":{"overall":[true,true,true,true,false],"communication":[true,true,true,false,false],"delivery":[true,true,true,true,true],"safety":[true,true,true,true,false]}},{"name":"Future Buy","url":"futurebuy.example","description":"electronics chain that was founded in Canada, now absorbed into Best Store..","tags":["electronics","gift cards"],"stars":{"overall":[true,true,true,true,true],"communication":[true,true,true,true,false],"delivery":[true,true,true,true,false],"safety":[true,true,true,true,true]}},{"name":"iBay","url":"ibay.example","description":"massive online bidding site","tags":["shoes","game console","laptop","smartphones","bitcoin"],"stars":{"overall":[true,true,true,false,false],"communication":[true,true,true,false,false],"delivery":[true,true,true,true,false],"safety":[true,true,false,false,false]}},{"name":"Pear","url":"pear.example","description":"Believe it or not I'm walking on air. I never thought I could feel so free. Flying away on a wing and a prayer. Who could it be? Believe it or not its just me. Believe it or not I'm walking on air. I never thought I could feel so free. Flying away on a wing and a prayer.","tags":["student discounts","quality"],"stars":{"overall":[true,true,true,true,true],"communication":[true,true,true,true,true],"delivery":[true,true,true,true,false],"safety":[true,true,true,true,true]}},{"name":"Home Repo","url":"homerepo.example","description":"Plants and refrigerators","tags":["plant","stove","refrigerator"],"stars":{"overall":[true,true,true,true,false],"communication":[true,true,true,true,false],"delivery":[true,true,true,true,false],"safety":[true,true,true,true,false]}}],"path":"templates/store_info.html"},{"name":"show review","parent":"reviews","url":"/detail/:id","animationIn":"fadeIn","stores":[{"name":"Best Store","url":"www.beststore.example"},{"name":"Future Buy","url":"futurebuy.example"},{"name":"iBay","url":"ibay.example"},{"name":"Pear","url":"pear.example"},{"name":"Home Repo","url":"homerepo.example"}],"reviews":[{"reviewer":{"id":1,"name":"Bob"},"date":1328388888006,"rating":{"overall":[true,true,true,true,false],"communication":[true,true,true,true,false],"delivery":[true,true,true,true,false],"safety":[true,true,true,true,false]},"helpfulness":{"agree":12,"total":15}},{"reviewer":{"id":2,"name":"Kat"},"date":1288323623006,"rating":{"overall":[true,true,true,false,false],"communication":[true,true,true,false,false],"delivery":[true,true,false,false,false],"safety":[true,true,true,false,false]},"helpfulness":{"agree":10,"total":13}},{"reviewer":{"id":3,"name":"Sunny"},"date":1388323623006,"rating":{"overall":[true,true,true,true,true],"communication":[true,true,true,true,true],"delivery":[true,true,true,true,false],"safety":[true,true,true,true,false]},"helpfulness":{"agree":11,"total":15}},{"reviewer":{"id":4,"name":"Billy"},"date":1388323623006,"rating":{"overall":[true,true,true,true,false],"communication":[true,true,true,true,true],"delivery":[true,true,true,true,false],"safety":[true,true,true,false,false]},"helpfulness":{"agree":3,"total":5}}],"path":"templates/review_detail.html"},{"name":"write review","parent":"reviews","url":"/create","animationIn":"fadeIn","path":"templates/review_write.html"},{"name":"home","url":"/","animationIn":"fadeIn","stores":[{"name":"Best Store","url":"www.beststore.example","description":"large electronics store in Canada","tags":["electronics","battery","gift cards"],"stars":[true,true,true,true,false],"reviews":{"all":64,"friend":9}},{"name":"Future Buy","url":"futurebuy.example","description":"electronics store originally founded in Canada, now absorbed into Best Store..","tags":["electronics","gift cards"],"stars":[true,true,true,true,true],"reviews":{"all":88,"friend":12}},{"name":"iBay","url":"ibay.example","description":"massive online bidding site","tags":["shoes","game console","laptop","smartphones","bitcoin"],"stars":[true,true,true,false,false],"reviews":{"all":123,"friend":5}},{"name":"Pear","url":"pear.example","description":"Sells iPwn and Pear OS X","tags":["student discounts","quality","expensive"],"stars":[true,true,true,true,true],"reviews":{"all":21,"friend":3}},{"name":"Home Repo","url":"homerepo.example","description":"Plants and refrigerators","tags":["plant","stove","refrigerator"],"stars":[true,true,true,true,false],"reviews":{"all":30,"friend":2}}],"path":"templates/home.html"}]; 