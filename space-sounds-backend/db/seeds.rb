# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# const soundFiles = ['audio/_1spookysaturn.mp3', 
#   'audio/_2kepler_star_KIC12268220C.mp3',
#   'audio/_3kepler_star_KIC7671081B.mp3',
#   'audio/_4584795main_saturn_radio_waves.mp3',
#   'audio/_5584796main_enceladus.mp3',
#   'audio/_6598980main_stardust_tempel1.mp3',
#   'audio/_7603921main_voyager_jupiter_lightning.mp3',
#   'audio/_8693857main_emfisis_chorus_1.mp3',
#   'audio/_9bowshock_PIA20754.wav',
#   'audio/_10shieldsup.mp3',
#   'audio/_11Enceladus Hiss audio 256 kbps.mp3',
#   'audio/_12ganymede.mp3'
# ]

Sound.delete_all

s1 = Sound.create(title: 'Cassini: Saturn Radio Emissions #1', audio: 'audio/_1spookysaturn.mp3', description: 'This is an audio file of radio emissions from Saturn. Saturn is a source of intense radio emissions, which were monitored by the Cassini spacecraft. The radio waves are closely related to the auroras near the poles of the planet. These auroras are similar to Earth\'s northern and southern lights.')
s2 = Sound.create(title: 'Kepler: Star KIC12268220C Light Curve Waves to Sound', audio: 'audio/_2kepler_star_KIC12268220C.mp3', description: 'The Kepler space telescope stared down roughly 100,000 stars for years, looking for faint signals of orbiting planets - and found at least 10 that might be Earth-like. Here\'s what data on the loan star system KIC12268220C, originally recorded as light, sounds like')
s3 = Sound.create(title: 'Kepler: Star KIC7671081B Light Curve Waves to Sound', audio: 'audio/_3kepler_star_KIC7671081B.mp3', description: 'The Kepler space telescope stared down roughly 100,000 stars for years, looking for faint signals of orbiting planets - and found at least 10 that might be Earth-like. Here\'s what data on the loan star system KIC7671081B, originally recorded as light, sounds like.')
s4 = Sound.create(title: 'Cassini: Saturn Radio Emissions #2', audio: 'audio/_4584795main_saturn_radio_waves.mp3', description: 'This is an audio file of radio emissions from Saturn. Saturn is a source of intense radio emissions, which were monitored by the Cassini spacecraft. The radio waves are closely related to the auroras near the poles of the planet. These auroras are similar to Earth\'s northern and southern lights.')
s5 = Sound.create(title: 'Cassini: Enceladus Sound', audio: 'audio/_5584796main_enceladus.mp3', description: 'Saturn’s ocean-bearing moon also bears some spooky sounds! Here’s one captured by our Cassini spacecraft.')
s6 = Sound.create(title: 'Stardust: Passing Comet Tempel 1', audio: 'audio/_6598980main_stardust_tempel1.mp3', description: 'Changes in the nucleus of Comet Tempel 1 were of particular interest because the comet was hit with an impactor from the passing Deep Impact spacecraft in 2005.')
s7 = Sound.create(title: 'Voyager: Lightning on Jupiter', audio: 'audio/_7603921main_voyager_jupiter_lightning.mp3', description: 'In 1979, NASA\'s Voyager 1 spacecraft detected very low-frequency radio emissions from the solar system\'s largest planet — emissions that one might expect from lightning. The radio emissions that Voyager 1 detected from Jupiter — dubbed "whistlers" because they resemble descending, whistled tones — were the first signs of lightning in the giant planet\'s atmosphere.')
s8 = Sound.create(title: 'Chorus Radio Waves within Earth\'s Atmosphere', audio: 'audio/_8693857main_emfisis_chorus_1.mp3', description: 'There is no life where these sounds are made, in the dazzling and dangerous stream of highly charged particles that surrounds our planet. For years, Kletzing, physics professor at the University of Iowa, has been monitoring the radio waves that undulate through the void around Earth. When the data is turned into sound files, the result is an eerie cosmic symphony.')
s9 = Sound.create(title: 'Juno: Crossing Jupiter\'s Bow Shock', audio: 'audio/_9bowshock_PIA20754.wav', description: 'Juno will improve our understanding of the solar system\'s beginnings by revealing the origin and evolution of Jupiter.')
s10 = Sound.create(title: 'Cassini Shields Up', audio: 'audio/_10shieldsup.mp3', description: 'Before settling into orbit around Saturn, Cassini faced a white-knuckle ride through the plane of the planet’s rings. When converted into an audio file, the interstellar cacophony is reminiscent of a hellstorm on Earth.')
s11 = Sound.create(title: 'Sounds of Saturn: Hear Radio Emissions of the Planet and Its Moon Enceladus', audio: 'audio/_11Enceladus_Hiss_audio_256_kbps.mp3', description: 'New research from the up-close Grand Finale orbits of NASA\’s Cassini mission shows a surprisingly powerful interaction of plasma waves moving from Saturn to its moon Enceladus. Researchers converted the recording of plasma waves into a “whooshing” audio file that we can hear -- in the same way a radio translates electromagnetic waves into music. Much like air or water, plasma (the fourth state of matter) generates waves to carry energy.')
s12 = Sound.create(title: 'Beware of Jupiter’s Largest Moon Ganymede', audio: 'audio/_12ganymede.mp3', description: 'Beware of Jupiter’s Largest Moon Ganymede. And beware the weird radio emissions Galileo gathered from Jupiter\'s largest moon, Ganymede.')




puts "-----------SEEDED------------"
