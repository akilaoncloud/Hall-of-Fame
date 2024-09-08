let dados = [
    {
        titulo: "Hollow Knight",
        descricao: "Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis. Explore cavernas serpenteantes, lute contra criaturas malignas e alie-se a insetos bizarros num estilo clássico 2D desenhado à mão.",
        link: "https://www.igdb.com/games/hollow-knight"
    },
    {
        titulo: "Celeste",
        descricao: "Ajude Madeline a enfrentar seus demônios internos em sua jornada até o topo da Montanha Celeste, nesse jogo de plataforma super afiado dos criadores de TowerFall. Desbrave centenas de desafios meticulosos, descubra segredos complicados e desvende o mistério da montanha.",
        link: "https://www.igdb.com/games/celeste"
    },
    {
        titulo: "The Legend of Zelda: Majora's Mask",
        descricao: "Majora's Mask é a sequência do primeiro jogo de Zelda tridimensional, Ocarina of Time, utilizando o mesmo motor e recursos gráficos desse game.",
        link: "https://www.igdb.com/games/the-legend-of-zelda-majora-s-mask"
    },
    {
        titulo: "Paper Mario 64",
        descricao: "Uma aventura RPG que combina o universo de Mario com elementos de papel, com batalhas por turnos e quebra-cabeças desafiadores.",
        link: "https://www.igdb.com/games/paper-mario"
    },
    {
        titulo: "Mario & Luigi: Superstar Saga",
        descricao: "Um RPG com os irmãos Mario em um estilo cômico, com batalhas em tempo real e comandos precisos.",
        link: "https://www.igdb.com/games/mario-and-luigi-superstar-saga"
    },
    {
        titulo: "Hyrule Warriors",
        descricao: "Um hack and slash ambientado no universo de Zelda, com batalhas épicas e hordas de inimigos.",
        link: "https://www.igdb.com/games/hyrule-warriors"
    },
    {
        titulo: "Sonic the Hedgehog 3 & Knuckles",
        descricao: "Um clássico dos jogos de plataforma, com o ouriço azul mais rápido do mundo em uma aventura épica.",
        link: "https://www.igdb.com/games/sonic-the-hedgehog-3"
    },
    {
        titulo: "Sonic Mania",
        descricao: "Um tributo aos clássicos jogos de Sonic, com gráficos modernos e uma jogabilidade fiel aos originais.",
        link: "https://www.igdb.com/games/sonic-mania"
    },
    {
        titulo: "Sonic Generations",
        descricao: "Um jogo que celebra a história de Sonic, com fases clássicas e modernas em um mesmo jogo.",
        link: "https://www.igdb.com/games/sonic-generations"
    },
    {
        titulo: "Freedom Planet",
        descricao: "Um jogo de plataforma inspirado nos clássicos do gênero, com personagens carismáticos e uma jogabilidade desafiadora.",
        link: "https://www.igdb.com/games/freedom-planet"
    },
    {
        titulo: "Katana Zero",
        descricao: "Um jogo de ação com elementos de bullet hell, onde você controla um ninja mortal em um mundo cyberpunk.",
        link: "https://www.igdb.com/games/katana-zero"
    },
    {
        titulo: "Castle Crashers",
        descricao: "Um beat 'em up cooperativo com gráficos coloridos e personagens divertidos.",
        link: "https://www.igdb.com/games/castle-crashers"
    },
    {
        titulo: "Portal 2",
        descricao: "Uma sequência épica do revolucionário jogo de quebra-cabeças com portais.",
        link: "https://www.igdb.com/games/portal-2"
    },
    {
        titulo: "Luigi's Mansion",
        descricao: "Um jogo de terror cômico onde você controla Luigi para capturar fantasmas em uma mansão assombrada.",
        link: "https://www.igdb.com/games/luigis-mansion"
    },
    {
        titulo: "The Legend of Zelda: Ocarina of Time",
        descricao: "Um clássico atemporal dos jogos de aventura, considerado um dos melhores jogos já feitos.",
        link: "https://www.igdb.com/games/the-legend-of-zelda-ocarina-of-time"
    },
    {
        titulo: "Super Mario World",
        descricao: "Um dos jogos de plataforma mais amados de todos os tempos, com um mundo vasto e cheio de segredos.",
        link: "https://www.igdb.com/games/super-mario-world"
    },
    {
        titulo: "Minecraft",
        descricao: "Um jogo de mundo aberto onde você pode construir tudo o que imaginar.",
        link: "https://www.igdb.com/games/minecraft"
    },
    {
        titulo: "The Witness",
        descricao: "Um jogo de quebra-cabeças ambientado em uma ilha misteriosa, com desafios visuais e sonoros.",
        link: "https://www.igdb.com/games/the-witness"
    },
    {
        titulo: "Rhythm Doctor",
        descricao: "Um jogo de ritmo desafiador e viciante, com uma trilha sonora original e contagiante.",
        link: "https://www.igdb.com/games/rhythm-doctor"
    },
    {
        titulo: "Animal Crossing: New Horizons",
        descricao: "Construa sua própria ilha paradisíaca, interaja com adoráveis animais e crie uma comunidade única.",
        link: "https://www.igdb.com/games/animal-crossing-new-horizons"
    },
    {
        titulo: "Muse Dash",
        descricao: "Um jogo de ritmo com personagens adoráveis e músicas cativantes, onde você precisa sincronizar seus toques com as notas musicais.",
        link: "https://www.igdb.com/games/muse-dash"
    },
    {
        titulo: "Garry's Mod",
        descricao: "Um sandbox onde você pode criar e experimentar tudo o que imaginar, desde construir estruturas até criar mini-jogos.",
        link: "https://www.igdb.com/games/garrys-mod"
    },
    {
        titulo: "Pókken Tournament DX",
        descricao: "Um jogo de luta em estilo Pokémon, com gráficos vibrantes e batalhas emocionantes.",
        link: "https://www.igdb.com/games/pokken-tournament-dx"
    },
    {
        titulo: "Mario Kart 8 Deluxe",
        descricao: "O jogo de corrida mais divertido da série Mario Kart, com uma variedade de personagens, pistas e modos de jogo.",
        link: "https://www.igdb.com/games/mario-kart-8-deluxe"
    },
    {
        titulo: "Mario Kart 64",
        descricao: "Um clássico dos jogos de corrida, com personagens icônicos e pistas memoráveis.",
        link: "https://www.igdb.com/games/mario-kart-64"
    },
    {
        titulo: "OSU!",
        descricao: "Um jogo de ritmo gratuito e personalizável, com uma enorme biblioteca de músicas e modos de jogo.",
        link: "https://www.igdb.com/games/osu"
    },
    {
        titulo: "Counter-Strike: Global Offensive",
        descricao: "Um dos jogos de tiro em primeira pessoa mais populares do mundo, com modos de jogo competitivos e cooperativos.",
        link: "https://www.igdb.com/games/counter-strike-global-offensive"
    },
    {
        titulo: "Alto's Adventure",
        descricao: "Um jogo de snowboard com visuais deslumbrantes e uma trilha sonora relaxante, perfeito para momentos de paz.",
        link: "https://www.igdb.com/games/altos-adventure"
    },
    {
        titulo: "Alto's Odyssey",
        descricao: "A sequência de Alto's Adventure, com novas mecânicas e paisagens ainda mais impressionantes.",
        link: "https://www.igdb.com/games/altos-odyssey"
    },
    {
        titulo: "Naboki",
        descricao: "Um jogo de plataforma com elementos de puzzle, onde você controla um gato para explorar um mundo misterioso.",
        link: "https://www.igdb.com/games/naboki"
    },
    {
        titulo: "Deemo",
        descricao: "Um jogo de ritmo com uma história emocionante, onde você toca piano para fazer uma árvore crescer.",
        link: "https://www.igdb.com/games/deemo"
    },
    {
        titulo: "Beat Stomper",
        descricao: "Um jogo de ritmo frenético, onde você precisa esmagar os blocos no ritmo da música.",
        link: "https://www.igdb.com/games/beat-stomper"
    },
    {
        titulo: "Enigmbox",
        descricao: "Um jogo de puzzle com desafios lógicos e visuais, onde você precisa manipular caixas para alcançar seus objetivos.",
        link: "https://www.igdb.com/games/enigmbox"
    },
    {
        titulo: "∞ Loop",
        descricao: "Um jogo de plataforma com elementos de puzzle, onde você precisa explorar um mundo infinito e desafiar a gravidade.",
        link: "https://www.igdb.com/games/loop"
    },
    {
        titulo: "Zhed",
        descricao: "Um jogo de plataforma com elementos de roguelike, onde você controla um robô em um mundo gerado proceduralmente.",
        link: "https://www.igdb.com/games/zhed"
    },
    {
        titulo: "Hocus",
        descricao: "Um jogo de puzzle onde você precisa manipular o tempo para resolver desafios.",
        link: "https://www.igdb.com/games/hocus"
    },
    {
        titulo: "The Guides Axiom",
        descricao: "Um jogo de aventura com elementos de puzzle, onde você explora um mundo misterioso e descobre seus segredos.",
        link: "https://www.igdb.com/games/the-guides-axiom"
    }
];