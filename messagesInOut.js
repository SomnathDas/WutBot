const fs = require('fs')

exports.message = async function (message) {

	if(message.body == '!Hi') {
    	XClient.sendText(message.from, '👋 Hey! \n I\'m Takeshi!');
   	}

   	if(message.body == '!Prezz') {
   		XClient.sendText(message.from, 'Shinomiya UwU');
   	}

   	if(message.body == '!codesyaknow' || message.body == '!Codesyaknow') {
   		let culture_code;
        culture_code = Math.floor(Math.random() * 100001) + 10000;
        XClient.sendText(message.from, "Here you go b-ba-baka! *TwT* \n" + culture_code);
   	}

   	if(message.body == '!sauceyaknow' || message.body == '!Sauceyaknow') {
   		let culture_code;
        culture_code = Math.floor(Math.random() * 100001) + 10000;
        let sauce_Yaknow = "https://nhentai.net/g/" + culture_code;
        XClient.sendText(message.from, sauce_Yaknow);
   	}

   	if(message.body == '!Pokemon') {
   		r98 = Math.floor(Math.random() * 890) + 1;
   		await XClient.sendImage(message.from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+r98+'.png', '' , 'My Favourite is pikachu,\nbut here you go!');
   	}

   	if(message.body == '!Waifu' || message.body == '!waifu') {
   		r76 = Math.floor(Math.random() * 98) + 10;
        XClient.sendImage(message.from, 'http://randomwaifu.altervista.org/images/00'+r76+'.png', '' , 'How is she? *UwU*');
   	}



}