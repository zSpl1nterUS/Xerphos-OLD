const database = require("../../configuração/database.js"); 

exports.run = async (xerphos, message, args, prefixo) => {

console.log(`comando setdzn ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let razaou = args.slice(0).join(' ')
let member = message.mentions.users.first() ? message.mentions.users.first() : xerphos.users.get(args[0])

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
 
    if(usuario.owner) {
      if (usuario) {
        if(razaou.length < 1) {
               message.channel.send(`<:cancel:504782695667335178> | ${message.author}, **mencione** ou insira o **ID** do usuário`)
            } else {
        
database.Users.findOne({_id: member.id}, function (erro, usuario) {
  
                if (usuario) {
                  if (usuario.dzn) {
                    usuario.dzn = false
                    usuario.save()
                    message.channel.send(`<a:okay:512392301037748251> | ${message.author}, **${member.tag}** não é mais **\`Designer\`**`)
                  } else {
                    usuario.dzn = true
                    usuario.save()
                    message.channel.send(`<a:okay:512392301037748251> | ${message.author}, **${member.tag}** agora é **\`Designer\`**`)
                  }
                } else {
                   message.channel.send(`<:cancel:504782695667335178> | ${message.author}, este **usuário** não está salvo em minha **\`Database\`**`)
                }
              })
            }
          
          } else {

            message.channel.send(`<:cancel:504782695667335178> | ${message.author}, este **usuário** não está salvo em minha **\`Database\`**`)

        }

    } else {
      var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:cancel:504782695667335178> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
    }
  })
}