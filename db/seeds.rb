puts "Destroying Old Data"

Match.destroy_all
User.destroy_all

puts "Seeding players"


player = User.create(username: 'stavino', password: 'ghfjfhd')
player2 = User.create(username: 'wooblies', password: 'jooblies')
player3 = User.create(username: 'coolguy123', password: 'pikachu12')

puts "Seeding Matches"


match = Match.create(player1_id: player.id, player2_id: player2.id)
match2 = Match.create(player1_id: player2.id, player2_id: player3.id)
match3 = Match.create(player1_id: player3.id, player2_id: player.id)