const games = [

    {
        name: 'Tumble Fish',
        url: 'https://js13kgames.com/games/tumble-fish/index.html',
        release: '2012-09-09',
        platform: '🖥️ 📱 Play in browser for desktop, tablet or mobile',
        description: 'A platform game where on mobile you can tilt your phone left and right (like LocoRoco) to help get the fish bowl to the home. Made for the <a href="https://2012.js13kgames.com/" target="_blank">Js1kGamesJam</a>. The whole game fits in 13kb of javascript.',
        instructions: 'Instructions on start screen. Note that on mobile you can tap the fish bowl to restart the level!',
        reception: `It didn't rank in the top 10 for the game jam. I was very pleased with it but it may have been too hard.`,
        image: 'tumble-fish.jpg'
    },

    // {
    //     name: 'Captain Nicebeard',
    //     url: 'http://nicebeard.patrickw.tech/',
    //     release: '2015-10-01',
    //     platform: '🖥️ Play in browser for desktop',
    //     description: `Captain Nicebeard is a reverse pirate where instead of making landlubbers walk the plank and plundering treasure he rescues ship mates and distributes coin.
    //         Made for the Js13kGames game jam which had the theme 'Reversed'. It runs on a server and stores the play through of each player and then replays it back as another player on subsequent plays thus making it
    //         a challenge to avoid other players and fire coins at them but without the need to have people playing at the same time. The whole game fits in 13kb. The backgrounds are procedurally generated. `,
    //     instructions: 'Use arrow keys to rotate ship. Press Z/X to fire coins at other boats. Collect all the shipmates. Note it is kind of buggy when going to next level so it will restart you back sometimes sadly.',
    //     reception: `This got <a href="https://2015.js13kgames.com/" target="_blank">3rd place for the Server category</a>. Unfortunately their server kept restarting and so losing the previous play throughs so it seemed fairly empty to people playing it.`,
    //     image: 'nicebeard.jpg'
    // },

    {
        name: 'Swing the Cat',
        url: './assets/games/swing-the-cat.zip',
        release: '2005-11-20',
        platform: '🪟 Download for Windows',
        description: `A one-button game - you are a cat being swung by a knight but you can dig in your claws to move around the
         level and collect all the fish. Features some classical midi music. Made for a one button themed game jam in a week. Made in Real Basic.`,
        instructions: `First download and extract the zip file. Then run Swing The Cat.exe, Windows defender 
        will complain but click More Info and Run Anyway (you can trust me bro). Change the direction the cat/knight are turning by pressing space, collect the fish with the cat end and murder dogs with knight end.`,
        instructions: 'Just press space to switch which way you are spinning.',
        reception: `Amazingly the <a href="http://ravuya.com/1w1b2/results.html" target="_blank">game jam page is still up</a>. It came 8th out of 33.`,
        image: 'swing-the-cat.png'
    },

    {
        name: 'Precious Things',
        url: 'https://jimmynoshoes.itch.io/precious-things',
        release: '2018-08-12',
        platform: 'Play in browser for desktop only',
        description: `Your house is shrinking and you have pile objects on top of each other jenga style to make sure they don't get crushed.
        Made for Ludum Dare game jam over 48 hours which had the theme 'Running out of space' using Construct2. I was going to do something
        much more ambitious but then settled on this simple game. `,
        instructions: 'Drag and drop objects.',
        reception: 'It came in <a href="https://ldjam.com/events/ludum-dare/42/precious-things" target="_blank">437th out of 2013</a>, and for the theme it came in at 89th.',
        image: 'precious-things.png'
    },

    {
        name: 'Clock Watcher',
        url: 'https://patrick64.github.io/clock-watcher/',
        release: '2017-06-22',
        platform: '🖥️ 📱 Play in browser for desktop or tablet',
        description: `Made for a work themed game jam. It's made up of some <a href="https://www.youtube.com/watch?v=Qm49HqGuYvg" target="_blank">office olympics</a>
            style mini-games where you have to make it through the work day. Win an office chair race, prop eyes open during a boring meeting, collect all the tea, jump over miserable coworkers to get the cake and beat up a printer.`,
        instructions: `On desktop use the arrow keys to move around/jump or beat up the printer. On tablet you can tap and drag to move around. 
        If you win a round the clock goes forward. You need to make it to 5pm.`,
        reception: `After submitting this to game jam it went unnoticed and the game jam shut down shortly after.
        I forced a colleague at work to play it, he let out a groan of pain when he had to replay the pacman level`,
        image: 'clock-watcher.jpg',
    },

    {
        name: 'Boris Pants',
        url: 'https://patrick64.github.io/boris-pants/',
        release: '2016-10-01',
        platform: '🖥️ Play in browser for desktop',
        description: `Boris Johnson is trapped on a zipline and lying so much his pants are on fire. The fire brigade must put his pants out before it burns down London. Made for a Brexit themed jam a friend organised. Features text and audio clips of the various porkies he has told. They were not hard to find. `,
        instructions: `Move mouse to direct the water hose to put the flames out`,
        reception: `Sadly this was not quite enough to stop Brexit. Although thanks to Boris' continued lying in Parliament it's still relevant today.`,
        image: 'boris-pants.png'
    },

    {
        name: 'Space Suckers',
        url: 'https://jimmynoshoes.itch.io/space-suckers',
        release: '2017-12-02',
        platform: '🖥️ Play in browser for desktop only',
        description: `Space monsters try to grab onto your space ship and you have to drop them in black holes to avoid
        being dragged down.  Made for Ludum Dare game jam. I had help from my housemates Tim with coding and Pieta who did the lovely artwork. `,
        instructions: 'Instructions on intro screen.',
        reception: 'Overall it came 501st out of 1846 entries so not bad.',
        image: 'space-suckers.png'
    },
    {
        name: 'Ancient Snake',
        url: 'https://patrick64.github.io/AncientSnake/',
        release: '2016-08-29',
        platform: '🖥️ 📱 Play in browser for desktop or tablet',
        description: `Play snake on an old nokia phone. Made for Ludum Dare with the theme Ancient Technology`,
        instructions: 'Use arrows keys on desktop or tap the arrow keys on the mobile',
        reception: '',
        image: 'snake.png'
    },

    {
        name: 'Timeless',
        url: 'https://jimmynoshoes.itch.io/timeless',
        release: '2016-03-10',
        platform: '😔 See it not working',
        description: `A story based game that uses google streetview. It doesn't work anymore as google have updated 
        streetview for the areas it covers. When it did work it used dialogue boxes for the story and ghouls would chase you. The ghouls were actually
        maps markers in streetview. Made for the Nar8 game jam.`,
        instructions: `It doesn't work anymore sorry`,
        reception: `This got <a href="https://itch.io/jam/nar8-jam/results" target="_blank">second place</a> in the game jam!`,
        image: 'timeless.png'
    },
    
    
    {
        name: 'Batdolphin',
        url: 'https://patrick64.github.io/batdolphin/',
        release: '2017-12-01',
        platform: '🖥️ Play in browser for desktop',
        description: `Enter the world of Bat Dolphin. 50% dolphin, 50% bat, 100% reliant on echo location! Made for the in-person Global Game Jam in Bristol in a team of 4.  Also has a <a href="https://globalgamejam.org/2017/games/bat-dolphin" target="_blank">windows download</a>`,
        instructions: 'Fly through the air or swim through the water in this side scroller, where the terrain is invisible until hit with your echo location ability. Earn points by eating fireflies and fish, but beware each one you eat pushes you closer to being 100% bat or dolphin! Controls: Option 1. Use up/down arrows to move up/down and right arrow to accelerate. Press space bar to use your echo-location ability Option 2. Use W/S keys to move up/down and D to speed up. Press Lmb to activate your echo-location ability. Or why not use a controller?',
        reception: 'I think we won the game jam for Bristol games hub. The team worked pretty well.',
        image: 'batdolphin.jpg'
    }, {
        name: 'Gin Monster Bob',
        url: 'https://patrick64.github.io/gin-monster-bob/',
        release: '2012-12-17',
        platform: '🖥️ Play in browser for desktop',
        description: `You're very drunk and you have walk to the kitchen, stay up right and avoid furniture and flatmates. Made for Ludum Dare 25.`,
        instructions: 'Instructions on start screen.',
        reception: `I can't remember it was so long ago.`,
        image: 'gin-monster-bob.png'
    },

    {
        name: 'The Tea Room',
        url: 'https://patrick64.github.io/the-tearoom/',
        release: '2016-12-11',
        platform: '🖥️ Play in browser for desktop',
        description: `A point and click adventure where you have to make a cup of tea. It uses a youtube video I made of myself making a tea and plays different parts for each action. Made for Ludum Dare`,
        instructions: `To start you'll need to click the left arrow. I think youtube has changed it's api so it can't autostart the video. From then on it plays the video ok although there's an annoying suggested videos overlay when it's paused now. Click the Hints icons to read more instructions.`,
        reception: `I think people found it novel but a bit confusing.`,
        image: 'the-tea-room.png'
    },

    {
        name: 'Chip in Unknown World',
        url: './assets/games/chip-in-unknown-world-amstrad.SNA',
        release: '1994-01-01',
        platform: 'Download snapshot for emulator',
        description: 'My magnum opus which I made on the Amstrad CPC 464 (with OG green screen) aged about 11. You must collect all the items and get to the spaceship to finish the level. ',
        instructions: `I wouldn't bother but if you must first you'll need to download <a href="http://www.winape.net/" target="_blank">WinAPE</a> then you'll need to set the <a href="./games/WinAPE.ini">WinAPE.ini to this one</a> then load the downloaded snapshot, then setup the joystick controls in winape.`,
        reception: `My dad was unimpressed with the spelling.`,
        image: 'chip-in-unknown-world.png'
    },

]