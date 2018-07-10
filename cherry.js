const Discord = require('discord.js');
const client = new Discord.Client();
const spy = new Discord.Client();
const db = require ('quick.db');
const cat = "http://random.cat/meow"
const snek = require('snekfetch')
const agree    = "✅";
const disagree = "❎";
const urban = require ('urban')
const parsems = require('parse-ms');
const economy = require('discord-eco');
const { get } = require("snekfetch"); 
const weather = require('weather-js');
const offUser = new Set();
const mutedChannel = new Set();
const ascii = require('ascii-art')
const math = require ('mathjs');
const search = require ('yt-search');


client.on('ready',() => {
    console.log('I\'m Online\nI\'m Online');
    client.user.setActivity("HAAAAX", {type: "WATCHING"});
});


var ree = 'REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE :angry:'
var games = "Do you know what is gay? your mom."
var prefix = "b"
var ow = "ow"
var bwords = "bwords"
var eightball = ['It is certain', 'It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.', 'It is certain', 'It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.', 'yes', 'no', 'it smells bad ew'];

//functions


//146944503092084736


function shootresponse() {
	var rand = ['2', '3', '4', '5', '6', '6'];

	return rand[Math.floor(Math.random()*rand.length)];
}

   

client.on('message', message => {
	let args = message.content.split(' ').slice(1);
	var result = args.join(' ');

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
    } else

  
    if (message.content == 'gay') {
        message.channel.sendMessage('no u');
    }

    const ytdl = require('ytdl-core');
    const async = require('async')

    if (message.content === (prefix + 'play')) {
    if(!message.member.voiceChannel){
        message.channel.send("<:warning:408740166715310100> You are not in a voice channel");
        return;
    }

    if (message.content.startsWith(prefix + 'web')) { // We are using a .startsWith because the command will have arguments.

        // Delete the message that the user sends
        message.delete();

        if (message.content.startsWith(prefix + 'web')) { // This checks if the only thing they sent was 'Hook'
            return hook(message.channel, 'Hook Usage', `${prefix}hook <title>, <message>, [HEXcolor], [avatarURL]\n\n**<> is required\n[] is optional**`,'FC8469','https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/129-512.png') // Remeber that \n means new line. This is also using a custom HEX id, and an image.
        }

        let hookArgs = message.content.slice(prefix.length + 4).split(","); // This slices the first 6 letters (prefix & the word hook) then splits them by 'commas'

        hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]); // This is where it actually calls the hook.
    }


    // only check for joinable if not already in voiceChannel
    var botUserId = client.user.id;
    if(!message.member.voiceChannel.members.get(botUserId)
                && !message.member.voiceChannel.joinable){
        message.channel.send("<:warning:408740166715310100> Not allowed to join. Maybe full channel");
        return;
    }

    // search string
    args.shift();
    var searchString = args.join(" ");

    ap.queueSong(message, searchString);
};

    

    if (message.content.startsWith(prefix + 'e')) {
        message.channel.sendMessage('DID SOMEONE SAY HAAAAAX?')
    }

 

    

    if (message.content.startsWith(prefix + 'asciify')) {
    ascii.font(args.join(' '), 'Doom', function(rendered) {
        //args holds an array of the words following the command, so if we join them we get a string of tword following the command

        //The rendered variable now contains our output
        //Although, there is usually a few Spaces on the end
        rendered = rendered.trimRight(); //this will remove the whitespace on the right side of the string

        //now We need to check if the string excedds max characters.
        if (rendered.lenght> 2000) return message.channel.send('That message is too long.');

       message.channel.send(rendered,{
        code: 'md'
               });

        });
}

  if (message.content.startsWith(prefix + 'potato')) {
    if (!args[0]) {
        message.reply(`Please mention a user.`)
        return;
    }

    if(message.content.startsWith(prefix + 'ecat')) {
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setImage(res.body.file)
				return msg.channel.send({embed});
			});
		} catch(err) {
			return msg.channel.send(error.stack);
		}
	}
	
	// Non-embedded
	if(message.content.startsWith(prefix + 'acat')) {
		try {
			get('https://aws.random.cat/meow').then(res => {
				return message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[2]}`}]});
			});
		} catch(err) {
			return msg.channel.send(error.stack);
		}
	}

    if (!message.mentions.members.first()) {
        message.reply(`I couldn't find a user with that name.`)
        return;
    }

    if (message.content.includes(`<@${message.author.id}>`)) {
        message.reply(`You cannot give a potato to yourself!`)
        return;
    }

    message.channel.send(`**${message.author.username} gave  ${message.mentions.users.first().username} a potato! :potato:**`)
  }
  
 

   if (message.content.startsWith(prefix + 'everyoneimportant')) {
       message.channel.sendMessage('@everyone pvz hd lord wants you.')
   }


    if (message.content === 'de wae') {
        message.delete();
        message.author.send('The word de wae is banned, please dont say that, normie.');
    }

    if (message.content.startsWith(prefix + 'dm')) {
        message.author.send('get dm`d')
    }

    var desc;

    var defineduser = '';

    if (message.content.startsWith(prefix + 'profile')) {
    if (!args[0]) {
    defineduser = message.author;
    }
    if (args[0]) {
    defineduser = message.mentions.members.first().user;
    }

    db.fetchObject(`userDesc_${defineduser.id}`).then(h => {
    db.fetchObject(`userBadge_${defineduser.id}`).then(b => {
    db.fetchObject(`userProfileColor_${defineduser.id}`).then(c => {
    db.fetchObject(`userTickets_${defineduser.id + message.guild.id}`).then(userTickets => {
    db.fetchObject(`userOs_${defineduser.id}`).then(o => {


        var desc;

        if (!h.text) h.text = 'This is a description.'
        if (!b.text) b.text = `:beginner:`
        if (!c.text) c.text = `#ff0000`

        db.fetchObject(defineduser.id).then(i => { // This is the object of messages sent
        db.fetchObject(`userLevel_${defineduser.id}`).then(l => { // This is the object of their level
            
        var totalos = new Discord.RichEmbed()
        .setDescription(`**Name:** ${defineduser.username}#${defineduser.discriminator}\n\n**ID:** ${defineduser.id}\n\n**Bot:** ${defineduser.bot}\n`)        
        .setColor(c.text)
        .setThumbnail(defineduser.avatarURL)

        message.channel.send(totalos);
        })
    })
})
        })
    })
    })
})
}

var defineduser = '';



    
    if (message.content.startsWith(prefix + 'clear')) {
    if(message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply(":thumbsdown: " + "| You need to have the \"ADMINISTRATOR\" Permission")
      }
        let messagecount = parseInt(args[0]);
      
        if(isNaN(messagecount)) return message.channel.send(":thumbsdown: " + "| Please Enter A Number!");
      
        if(messagecount > 10000){
          message.channel.send(":thumbsdown: " + "| Sorry, You can only clean up to 9999 messages ")
        }else if(messagecount < 2 ) {
          message.channel.send(":thumbsdown: " + "| Sorry, You can only clean up to 9999 messages ")
        } else {

        }{
          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
        }
      } else {



      }

      if (message.content.startsWith(prefix + 'cat')) {

      var embed = new Discord.RichEmbed()
      .setImage(file)
      .setColor(generateHex())
  
      message.channel.send(embed)
  }

  if (message.content.includes('fuck')) {
    message.delete();
}
  

      if (message.content.startsWith(prefix + 'urban')) {
      if (!args[0]) {
        urban.random().first(randurban => {
          
            var randurbanemb = new Discord.RichEmbed()
            .setTitle(`:book: ${randurban.word}`)
            .setDescription(randurban.definition || "None")
            .addField(`Example:`, `${randurban.example}` || "None")
            .setFooter(`Definition By: ${randurban.author}`)

            message.channel.send(randurbanemb);
        })
        return;
    }
    let str = args.join(' ')

    urban(str).first(json => {
        
        if (!json) {
            message.reply(':thumbsdown:  No results found.')
            return;
        }

        if (message.content.includes('The Longest Definitionda On Urbandictionary')) return;

        var searchres = new Discord.RichEmbed()
        .setTitle(` ${json.word}`)
        .setDescription(json.definition || "None")
        .addField(`Example:`, `${json.example}` || "None")
        .setFooter(`Definition By: ${json.author}`)

        message.channel.send(searchres);
    })
}

if (message.content.startsWith(prefix + 'test')) {
    message.channel.send("truth").then(sentMessage => sentMessage.edit("Shrink is a bitch "));
    // message now reads : "Blah"
}

if (message.content.startsWith(prefix + 'cookie')) {

function cookienum() {
    var rand = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26']

    return rand[Math.floor(Math.random()*rand.length)];
};




if (!args[0]) {
    message.reply(`Please mention a user.`)
    return;
}

if (!message.mentions.members.first()) {
    message.reply(`I could not find a user with that name.`)
    return;
}

if (message.content.includes(`<@${message.author.id}>`)) {
    message.reply(`You cannot give a cookie to yourself!`)
    return;
}

db.fetchObject(`sentCookies_${message.author.id}`).then(cookiesSent => {
db.fetchObject(`receivedCookies_${message.author.id}`).then(cookiesReceived => {

    var cookieembed = new Discord.RichEmbed()
    .setAuthor(`Cookie's giving!`, message.author.avatarURL)
    .setDescription(`**${message.author.username} has given ${message.mentions.users.first().username} a cookie 🍪**!`)

    db.updateValue(`sentCookies_${message.author.id}`, 1).then(cookiesSent => {
    db.updateValue(`receivedCookies_${message.mentions.users.first().id}`, 1).then(cookiesSent => {
        message.channel.send(cookieembed)
})
    })

})
})
}



	if (message.content.startsWith(prefix + 'send')) {
		client.channels.get('439448762100875274').sendMessage('die');
    } else

    if(message.content.startsWith(prefix + 'serverinfo')) {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Total Members", message.guild.memberCount);
    
        return message.channel.send(serverembed);
      }

      if (message.content.startsWith(prefix + 'csay')) {
      message.delete();
      if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`)
      let botmessage = args.join(" ");
      message.channel.send(botmessage);
    }


    if (message.content.startsWith(prefix + 'warn')) {
    var reason = args.slice(1).join(' ');
    var user = message.mentions.users.first();
    var modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('general');
    if (reason.length < 1) return message.reply('You must give a reason for the warning.');
    if (message.mentions.users.size < 1) return message.reply('You must ping someone to warn them.').catch(console.error);
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
    return client.channels.get(modlog.id).send({embed});
  };

    if (message.content.startsWith(prefix + 'kick')) {

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "mod-log");
    if(!kickChannel) return message.channel.send("Can't find mod-log channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

    if (message.content.startsWith(prefix + 'test')) {
        message.delete();
    }

    if (message.author.id === '306857389565673492') {
        message.delete();
        }

    if (message.content.startsWith(prefix + 'help')) {
        message.author.sendMessage("So this is a basic bot for DreamyImpy Discord Server, its for moderation, fun etc, this bot isnt finished.")
    }    

        if (message.content.startsWith(prefix + 'ban')) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No.");
        let reason = args.slice(1).join(' ');
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mod-log');
        if (!modlog) return message.reply('I cannot find a mod-log channel');
        if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
        if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
      
        if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
        message.guild.ban(user, 2);
      
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('Action:', 'Ban')
          .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
          .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
          .addField('Reason', reason);
        return client.channels.get(modlog.id).sendEmbed(embed);
      };
    

    if (message.content == "owo") {
        message.channel.sendMessage("What is this");
    }

    if(message.content.startsWith(prefix + 'report')) {

        //!report @ned this is the reason
    
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Couldn't find user.");
        let rreason = args.join(" ").slice(22);
    
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Report case")
        .setColor("#15f153")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Reason", rreason);
    
        let reportschannel = message.guild.channels.find(`name`, "mod-log");
        if(!reportschannel) return message.channel.send("chat");
    
    
        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
    
        return;
      }


    if (offUser.has(message.author.id)) {
        message.delete();
    } else

    if (mutedChannel.has(message.channel.id)) {
        message.channel.bulkDelete(1);
    } else

 


    if (message.content.startsWith(prefix + 'weather')) { // This checks to see if the beginning of the message is calling the weather command.
        // You can find some of the code used here on the weather-js npm page in the description.

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err) message.channel.send(err);

            // We also want them to know if a place they enter is invalid.
            if (result === 0) {
                message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
                return; // This exits the code so the rest doesn't run.
            }

            // Variables
            var current = result[0].current; // This is a variable for the current part of the JSON output
            var location = result[0].location; // This is a variable for the location part of the JSON output

            // Let's use an embed for this.
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
                .setAuthor(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
                .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
                .addField('Timezone',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
                .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

                // Now, let's display it when called
                message.channel.send({embed});
        });
    }



    
    if (message.content.startsWith(prefix + 'serverroles')) {
    ROLEZZ = message.guild.roles.array()
  
    var ROLES = "";
  
      ROLEZZ.forEach(function(element){
          ROLES += element.name + "\n"
      });
      
      message.channel.send("```" + "\n" +
                           "---------------------------------" + "\n" +
                           "---------------------------------" + "\n" +
                           `Server Roles: ${ROLES}` + "```");
  
  }






      

  if (message.content.startsWith(prefix + 'role')) {
  if(message.member.hasPermission("ADMINISTRATOR")) {
    let member2 = message.mentions.members.first();
    if(!member2) return message.reply(":x: " + "| You need to mention an user");

    let muteRole2 = message.mentions.roles.first();
    if(!muteRole2) return message.reply(":x: " + `| I cant find a role with that name`);
    
    let time2 = args[2];
    if(!time2) {
      member2.addRole(muteRole2.id);
      message.channel.send(member2 + `  ` + muteRole2.name);
    }else {
      member2.addRole(muteRole2.id);
      message.channel.send(member2 + `   ` + muteRole2.name + ` for: ${ms(ms(time2), {long: true})}`);

      setTimeout(function(){
        member2.removeRole(muteRole2.id);
        message.channel.send(member2 + ` Rip your role ${ms(ms(time2), {long: true})}`)

      }, ms(time2));

      };
      }else {
        return message.reply(" " + "| You need to have the \"ADMINISTRATOR\" Permission")
      };
}


    if (message.content.startsWith(prefix + 'ohboi')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/430179758442151938/431223231454642176/Z.png')
    }



    if (message.content.startsWith(prefix + 'colors')) {
        var colors = message.guild.roles(role => role.name.startsWith("#"));
        if(colors.size < 1) return message.channel.send("There are no colors in this server");

        console.log(colors.map(c =>c.name));
    }  

    if (message.content == "g a u") {
        message.delete().then(() => {
            message.author.send(`do not say that`);
          });
    }

    if (message.content == "gau") {
        message.delete().then(() => {
            message.author.send(`do not say that`);
          });
    }

    if (message.content == "gáy") {
        message.delete().then(() => {
            message.author.send(`do not say that`);
          });
    }

    if (message.content == "gây") {
        message.delete().then(() => {
            message.author.send(`do not say that`);
          });
    }

    if (message.content === "fgt") {
        message.delete().then(() => {
            message.author.send(`do not say that`);
          });
    }

    if (message.content === "nigg") {
        message.delete().then(() => {
            message.author.send(`do not say that`);
          });
    }

    if(message.content === "gáy") {
        message.delete();
      }
      

    if (message.content == "g a y") {
        message.delete();
    }




    

    if (message.content.startsWith(prefix + 'mute')) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage('You dont have the manage messages permission');

        var toMute = message.mentions.user || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("You did not specify a user mention or ID!");


    }

    var hd = [
        "Heads :frowning:",
        "Tails :smile:"
    ];

    
    if (message.content.startsWith(prefix + 'coinflip')) {
    message.channel.send(message.author.toString() + " You got: " + (hd[Math.floor(Math.random() * hd.length)]));
}

   if (message.content.startsWith(prefix + 'poll')) {
    message.delete();
let question = args.slice(0).join(" ");

if (args.length === 0)
return message.reply('**Invalid Format:** `!Poll <Question>`')

const embed = new Discord.RichEmbed()
.setTitle("A Poll Has Been Started!")
.setColor("#5599ff")
.setDescription(`${question}`)
.setFooter(`Poll Started By: ${message.author.username}`, `${message.author.avatarURL}`)



message.channel.send({embed})
.then(() => message.channel.sendMessage('React with: 👎 for no, and 👍 for yes.')) 
.then(() => message.pin())
   }

        
    if (message.content.startsWith(prefix + 'dsay')) {
        message.delete();
        if (message.author.id !== '264096393801629706') return message.channel.send(`:x:  |  Bot owner only...`)
        let botmessage = args.join(" ");
        message.channel.send(botmessage);
      }

	if (message.content.startsWith(prefix + 'thinkcap')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/429007520355581962/431226344903540746/emote.png');
    }
    


client.on('guildMemberAdd', member => {


    console.log('User' + member.user.username + 'has joined')
    console.log(member)


    member.guild.channels.get('412019695307456522').send('**' + member.user.username + '**, has joined the server!, make sure to read the rules');
});

client.on('guildMemberRemove', member => {
 
    member.guild.channels.get('412019695307456522').send('**' + member.user.username + '**, has left the server')
});

	if (message.content.startsWith(prefix + 'faggot')) {
		message.channel.sendMessage("Abfan is a great friend and he have a youtube channel so check it - > https://www.youtube.com/user/Boltrock/featured");
    }
    
  
	if (message.content.startsWith(prefix + 'shoot')) {
		message.channel.sendMessage(`I killed ${shootresponse()} zombies in \`${Date.now() - message.createdTimestamp} ms\``);
	} else


    
  
 

	if (message.content.startsWith(prefix + 'say')) { // creates command say
        if (!message.member.roles.some(r=>["Crystal League"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
        var sayMessage = message.content.substring(4)
        message.delete();
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
    }

    client.on('serverNewMember', function(server, user) {
        client.channel.sendMessage(server, "A new member has arrived. Welcome, " + user.username + " to " + server.name + ". Type adaahelp for commands.");
    });
    
	if (message.content.startsWith(prefix + '8ball')) { // creates the command 8ball
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
        else message.channel.send(" what is your question?"); // if not, error
    }
    
    if (message.content.startsWith(prefix + 'emotepoll')) {
        if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`)
        message.channel.sendMessage('Should we add that emote? thumbsup for yes thumbsdown for not');
        message.react('👍');
        message.react('👎');
    }

        // Add / Remove Money For Admins
        if (message.content.startsWith(prefix + `addmoney`)) {
            if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`)

            // Check if they have the modRole
    
            // Check if they defined an amount
            if (!args[0]) {
                message.channel.send(`**You need to define an amount. Usage: ${prefix}addmoney <amount> <user>**`);
                return;
            }
    
            // We should also make sure that args[0] is a number
            if (isNaN(args[0])) {
                message.channel.send(`**The amount has to be a number. Usage: ${prefix}addmoney <amount> <user>**`);
                return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
            }
    
            // Check if they defined a user
            let defineduser = '';
            if (!args[1]) { // If they didn't define anyone, set it to their own.
                defineduser = message.author.id;
            } else { // Run this if they did define someone...
                let firstMentioned = message.mentions.users.first();
                defineduser = firstMentioned.id;
            }
    
            // Finally, run this.. REMEMBER IF you are doing the guild-unique method, make sure you add the guild ID to the end,
            economy.updateBalance(defineduser + message.guild.id, parseInt(args[0])).then((i) => { // AND MAKE SURE YOU ALWAYS PARSE THE NUMBER YOU ARE ADDING AS AN INTEGER
                message.channel.send(`**User defined had ${args[0]} added/removed from their account.**`)
            });
    
        }

        if (message.content.startsWith(prefix + 'infoauser')); 
        function userInfo(user) {
        var finalString = '';
     
        finalString += '**' + user.username + '**, with the **ID** of **' + user.id + '**';
     
     
         var userCreated = user.createdAt.toString().split(' ');
         finalString += ', was **created on' + userCreated[1] + ', ' + userCreated[2] + ' ' + userCreated[3] + '.**'
     
         return finalString;
     }
     
    
        // Balance & Money
        if (message.content.startsWith(prefix + `balance`) || message.content.startsWith(prefix + `MONEY`)) { // This will run if the message is either ~BALANCE or ~MONEY
    
            // Additional Tip: If you want to make the values guild-unique, simply add + message.guild.id whenever you request.
            economy.fetchBalance(message.author.id + message.guild.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts the data with it into i.
                // Lets use an embed for This
                const embed = new Discord.RichEmbed()
                    .setDescription(`**${message.guild.name} account**`)
                    .setColor(0xcd0303) // You can set any HEX color if you put 0x before it.
                    .addField('Account Name',message.author.username,true) // The TRUE makes the embed inline. Account Holder is the title, and message.author is the value
                    .addField('Account Balance',i.money,true)
    
    
                // Now we need to send the message
                message.channel.send({embed})
    
            })
    
        }


	if (message.content.startsWith(prefix + 'setgame')) {
		if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`)
		message.channel.sendMessage('successfully changed my game status!');
		if (!result) {
			result = null;
		}
		client.user.setGame(result);
	} else

	if (message.content.startsWith(prefix + 'setstatus')) {
		if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`)
		message.channel.sendMessage('Done');
		if (!result) {
			result = 'online';
		}
		client.user.setStatus(result);
	} else

	if (message.content.startsWith(prefix + 'foo')) {
		message.channel.sendMessage('bar');
	}
		
	if (message.content.startsWith(prefix + 'gay')) {
		message.channel.sendMessage('<@389223568413687815> <@268159757016236032>');
	}

	if (message.content.startsWith(prefix + 'fucker')) {
		message.delete();
	}

	if (message.content.startsWith(prefix + 'partnersservers')) 
		message.channel.sendMessage('https://discord.gg/QCSJgN3 https://discord.gg/hyTrSBS https://discord.gg/3SfpjCM ');
	    
    if (message.content.startsWith(prefix + 'wakeuptheowner')) {
        message.channel.sendMessage('They are calling you <@146944503092084736>');
	}
    
    if (message.content.startsWith(prefix + 'userinfo')) {

        if (message.content === prefix + 'userinfo') {
            message.channel.send();
        }
    }

    if (message.content.startsWith(bwords)) {
        message.delete();
        message.channel.sendMessage('Do not say these type of words!')
	}
    console.log(`${message.author.tag} (ID: ${message.author.id} sent a message in ${message.guild.name} with the content: ${message.content}.`) 

	if (message.content.startsWith(prefix + 'pingloop')) {
		if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`)
		message.channel.sendMessage('tbh<@146944503092084736>');
	}

	if (message.content.startsWith(prefix + '<@146944503092084736>')) {
		message.channel.sendMessage('tbh<@146944503092084736>');
    }
    

	if (message.content.startsWith(prefix + 'dice')) {
	function generateHex() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

 

    function dicenum() {
        var rand = ['1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }

    var rolldice = new Discord.RichEmbed()
    .setTitle(":game_die: Dice")
    .setDescription(`You rolled a **${dicenum()}!**`)
    .setColor(generateHex())

    message.channel.send(rolldice)

}

if (message.content.startsWith(prefix + 'eval')) {
    if (message.author.id !== '146944503092084736') return console.log(`Access Denied to command eval.\nUser: ${message.author.tag}\nID: ${message.author.id}\nReason: User is not bot owner.`)

        message.delete();

        if (!args[0]) return;

        try {
            var code = args.join(' ');
            var evaled = eval(code);
        
            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
        
                var evalembed = new Discord.RichEmbed()
                .setDescription(`:inbox_tray: **Input:**\n\`\`\`css\n${code}\`\`\`\n\n:outbox_tray: **Output:** \`\`\`css\n${clean(evaled)}\`\`\``)
                .setColor(0x52c357)
        
                message.channel.send(evalembed).then(m => m.delete(50000));
            } catch(err) {
        
                var errembed = new Discord.RichEmbed()
                .setDescription(`:inbox_tray: **Input:**\n\`\`\`css\n${code}\`\`\`\n\n:x: \`ERROR\` \`\`\`css\n${clean(err)}\n\`\`\``)
                .setColor(0xff0000)
        
                message.channel.send(errembed).then(m => m.delete(50000));
            } 
    }


    if(message.content === "owo") {
        message.channel.send("What is this?");
      }


        if (message.content.startsWith(prefix + 'importantthing')) {
        if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`);
        message.delete();
		message.channel.sendMessage('✅Annoucement Time @everyone! ✅');
		message.channel.sendMessage('This is an automatic message by the dev ');
		message.channel.sendMessage('Dont complain about the ping!');
	}

});

client.login("NDY1ODM0MTc2OTUyNzk1MTQ2.DiTUMA.CrPetWSfcNM2XIYV7EKDowLNM_g");