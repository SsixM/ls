const CONFIG = {
    serverLogoLight: "https://ui-avatars.com/api/?name=LS&background=fff&color=22c55e&rounded=true&bold=true&border=1",
    serverLogoDark: "https://ui-avatars.com/api/?name=LS&background=000&color=22c55e&rounded=true&bold=true",
    teamLogos: {
        "Pepe Shneine": "https://ui-avatars.com/api/?name=PS&background=f59e0b&color=fff&rounded=true&bold=true",
        "NoSmurfs": "https://ui-avatars.com/api/?name=NS&background=3b82f6&color=fff&rounded=true&bold=true",
        "команда Гаврюшков": "https://ui-avatars.com/api/?name=КГ&background=ef4444&color=fff&rounded=true&bold=true",
        "казахгойда67": "https://ui-avatars.com/api/?name=К&background=8b5cf6&color=fff&rounded=true&bold=true",
        "РОЙ БИДРИЛ": "https://ui-avatars.com/api/?name=РБ&background=10b981&color=fff&rounded=true&bold=true",
        "зайчик жуди хопс": "https://ui-avatars.com/api/?name=ЗЖ&background=06b6d4&color=fff&rounded=true&bold=true",
        "SashiMi": "https://ui-avatars.com/api/?name=SM&background=f43f5e&color=fff&rounded=true&bold=true",
        "Z": "https://ui-avatars.com/api/?name=Z&background=f97316&color=fff&rounded=true&bold=true",
        "Пока не известно": "https://ui-avatars.com/api/?name=?&background=333&color=fff&rounded=true&bold=true"
    },
    defaultLogo: "https://ui-avatars.com/api/?name=T&background=333&color=fff&rounded=true&bold=true",
    matchLinkBase: "https://example.com/match/"
};

const LS_LEAGUE_CUP_S8 = {
    info: {
        title: "LS League Cup Season 8",
        teamsCount: 4,
        mode: "Capitan's Mode",
        type: "Серверный турнир по приглашениям",
        dates: "30 марта - 3 мая",
        notes: "Матчи организуются по договоренности"
    },
    teams: [
        { seed: 1, name: "Pepe Shneine", qualification: "Приглашение" },
        { seed: 2, name: "NoSmurfs", qualification: "Приглашение" },
        { seed: 3, name: "команда Гаврюшков", qualification: "Приглашение" },
        { seed: 4, name: "казахгойда67", qualification: "Приглашение" }
    ],
    prizes: [
        { place: 1, reward: "10800 ₽, золото в Зале славы" },
        { place: 2, reward: "серебро в Зале славы" },
        { place: 3, reward: "бронза в Зале славы" }
    ],
    matches: [
        { stage: "ГЭ", date: "09.04 (22:00)", t1: "команда Гаврюшков", s1: 0, t2: "казахгойда67", s2: 2, link: "1" },
        { stage: "ГЭ", date: "11.04 (22:00)", t1: "Pepe Shneine", s1: 2, t2: "казахгойда67", s2: 0, link: "2" },
        { stage: "ГЭ", date: "13.04 (22:00)", t1: "Pepe Shneine", s1: 0, t2: "команда Гаврюшков", s2: 2, link: "3" },
        { stage: "ГЭ", date: "14.04 (20:00)", t1: "NoSmurfs", s1: 1, t2: "казахгойда67", s2: 1, link: "4" },
        { stage: "ГЭ", date: "14.04 (22:45)", t1: "NoSmurfs", s1: 0, t2: "команда Гаврюшков", s2: 2, link: "5" },
        { stage: "ГЭ", date: "15.04 (22:00)", t1: "Pepe Shneine", s1: 1, t2: "NoSmurfs", s2: 1, link: "6" }
    ],
    standings: [
        { team: "команда Гаврюшков", score: "4-2", status: "сетка победителей в плей-офф", isWin: true },
        { team: "Pepe Shneine", score: "3-3", status: "сетка победителей в плей-офф", isWin: true },
        { team: "казахгойда67", score: "3-3", status: "сетка проигравших в плей-офф", isWin: false },
        { team: "NoSmurfs", score: "2-4", status: "сетка проигравших в плей-офф", isWin: false }
    ],
    bracket: {
        col1: [
            { id: "UB_F", date: "Пока не известно", format: "bo3", t1: "команда Гаврюшков", s1: "", t2: "Pepe Shneine", s2: "" },
            { id: "LB_R1", date: "19.04 (21:30)", format: "bo3", t1: "казахгойда67", s1: "", t2: "NoSmurfs", s2: "" }
        ],
        col2: [
            { id: "LB_F", date: "Пока не известно", format: "bo3", t1: "Пока не известно", s1: "", t2: "Пока не известно", s2: "" }
        ],
        col3: [
            { id: "GF", date: "Пока не известно", format: "bo3", t1: "Пока не известно", s1: "", t2: "Пока не известно", s2: "" }
        ]
    }
};

const LS_FASTCUP_12 = {
    info: {
        title: "LS Fastcup #12",
        teamsCount: 4,
        mode: "Capitan's Mode",
        type: "Сумма тиров на команду не более 37. Минимальный ранг - Герой",
        dates: "21.03 - 22.03"
    },
    teams: [
        { seed: 1, name: "РОЙ БИДРИЛ", qualification: "Регистрация" },
        { seed: 2, name: "зайчик жуди хопс", qualification: "Регистрация" },
        { seed: 3, name: "SashiMi", qualification: "Регистрация" },
        { seed: 4, name: "Z", qualification: "Регистрация" }
    ],
    prizes: [
        { place: 1, team: "SashiMi", reward: "3000 ₽" },
        { place: 2, team: "зайчик жуди хопс", reward: "-" },
        { place: "3-4", team: "РОЙ БИДРИЛ", reward: "-" },
        { place: "3-4", team: "Z", reward: "-" }
    ],
    matches: [
        { stage: "ГЭ 1.1", date: "День 1 - 20:30", format: "bo1", t1: "зайчик жуди хопс", s1: 0, t2: "SashiMi", s2: 1, link: "f1" },
        { stage: "ГЭ 1.2", date: "День 1 - 20:30", format: "bo1", t1: "РОЙ БИДРИЛ", s1: 1, t2: "Z", s2: 0, link: "f2" },
        { stage: "ГЭ 2.1", date: "День 1 - 21:45", format: "bo1", t1: "зайчик жуди хопс", s1: 1, t2: "РОЙ БИДРИЛ", s2: 0, link: "f3" },
        { stage: "ГЭ 2.2", date: "День 1 - 21:45", format: "bo1", t1: "SashiMi", s1: 1, t2: "Z", s2: 0, link: "f4" },
        { stage: "ГЭ 3.1", date: "День 1 - 23:00", format: "bo1", t1: "зайчик жуди хопс", s1: 1, t2: "Z", s2: 0, link: "f5" },
        { stage: "ГЭ 3.2", date: "День 1 - 23:00", format: "bo1", t1: "SashiMi", s1: 1, t2: "РОЙ БИДРИЛ", s2: 0, link: "f6" }
    ],
    standings: [
        { team: "SashiMi", score: "3-0", status: "Выход в финал", isWin: true },
        { team: "зайчик жуди хопс", score: "2-1", status: "Выход в полуфинал", isWin: true },
        { team: "РОЙ БИДРИЛ", score: "1-2", status: "Выход в полуфинал", isWin: true },
        { team: "Z", score: "0-3", status: "-", isWin: false }
    ],
    bracket: {
        col1: [
            { id: "SF1", date: "День 2 - 20:00", format: "bo1", t1: "зайчик жуди хопс", s1: 1, t2: "РОЙ БИДРИЛ", s2: 0, isPast: true }
        ],
        col2: [
            { id: "GF", date: "День 2 - 21:15", format: "bo3", t1: "SashiMi", s1: 2, t2: "зайчик жуди хопс", s2: 0, isPast: true }
        ]
    }
};

let PLAYERS_STATISTICS = {
    active: [
        { rank: 1, name: "cYc.Lon3", R: 12, G: 9, W: 5, D: 2, L: 2, p: 0, wr: "66,67%" },
        { rank: 2, name: "dravzen", R: 10, G: 6, W: 4, D: 2, L: 0, p: 0, wr: "83,33%" },
        { rank: 3, name: "ДЕД_ЕСЕНИН", R: 10, G: 7, W: 4, D: 2, L: 1, p: 0, wr: "71,43%" },
        { rank: 4, name: "Shima~", R: 10, G: 9, W: 4, D: 2, L: 3, p: 0, wr: "55,56%" },
        { rank: 5, name: "Zol", R: 9, G: 6, W: 4, D: 1, L: 1, p: 0, wr: "75,00%" },
        { rank: 6, name: "greencat", R: 9, G: 9, W: 4, D: 1, L: 4, p: 0, wr: "50,00%" },
        { rank: 7, name: "fxreveryoungg", R: 8, G: 5, W: 4, D: 0, L: 1, p: 0, wr: "80,00%" },
        { rank: 8, name: "MirrorShard", R: 8, G: 7, W: 3, D: 2, L: 2, p: 0, wr: "57,14%" },
        { rank: 9, name: "zobaa", R: 8, G: 7, W: 3, D: 2, L: 2, p: 0, wr: "57,14%" },
        { rank: 10, name: "Ame's bastard", R: 8, G: 8, W: 4, D: 1, L: 3, p: -1, wr: "56,25%" },
        { rank: 11, name: ".flowerZ", R: 8, G: 8, W: 3, D: 2, L: 3, p: 0, wr: "50,00%" },
        { rank: 12, name: "Gavr", R: 8, G: 8, W: 3, D: 2, L: 3, p: 0, wr: "50,00%" },
        { rank: 13, name: "Pancake", R: 8, G: 8, W: 3, D: 2, L: 3, p: 0, wr: "50,00%" },
        { rank: 14, name: "lavchik", R: 8, G: 9, W: 3, D: 2, L: 4, p: 0, wr: "44,44%" },
        { rank: 15, name: "Fayde", R: 6, G: 6, W: 3, D: 0, L: 3, p: 0, wr: "50,00%" },
        { rank: 16, name: "frokeng", R: 6, G: 9, W: 2, D: 2, L: 5, p: 0, wr: "33,33%" },
        { rank: 17, name: "hohlokit", R: 5, G: 3, W: 2, D: 1, L: 0, p: 0, wr: "83,33%" },
        { rank: 18, name: "is~", R: 5, G: 5, W: 1, D: 3, L: 1, p: 0, wr: "50,00%" },
        { rank: 19, name: "IUPAK9", R: 5, G: 6, W: 2, D: 1, L: 3, p: 0, wr: "41,67%" },
        { rank: 20, name: "DrkspIce", R: 4, G: 2, W: 2, D: 0, L: 0, p: 0, wr: "100,00%" },
        { rank: 21, name: "iloveiran", R: 4, G: 3, W: 2, D: 0, L: 1, p: 0, wr: "66,67%" },
        { rank: 22, name: "Son1c", R: 4, G: 3, W: 2, D: 0, L: 1, p: 0, wr: "66,67%" },
        { rank: 23, name: "evo", R: 4, G: 5, W: 1, D: 2, L: 2, p: 0, wr: "40,00%" },
        { rank: 24, name: "Wuqing", R: 4, G: 6, W: 1, D: 2, L: 3, p: 0, wr: "33,33%" },
        { rank: 25, name: "hvru", R: 3, G: 2, W: 1, D: 1, L: 0, p: 0, wr: "75,00%" },
        { rank: 26, name: "chep", R: 3, G: 3, W: 1, D: 1, L: 1, p: 0, wr: "50,00%" },
        { rank: 27, name: "N4ZE", R: 3, G: 3, W: 0, D: 3, L: 0, p: 0, wr: "50,00%" },
        { rank: 28, name: "l0gu", R: 3, G: 5, W: 1, D: 1, L: 3, p: 0, wr: "30,00%" },
        { rank: 29, name: ".Purvs", R: 2, G: 1, W: 1, D: 0, L: 0, p: 0, wr: "100,00%" },
        { rank: 30, name: "Heiqnux", R: 2, G: 1, W: 1, D: 0, L: 0, p: 0, wr: "100,00%" },
        { rank: 31, name: "umbrella", R: 2, G: 1, W: 1, D: 0, L: 0, p: 0, wr: "100,00%" },
        { rank: 32, name: "Inmortal", R: 2, G: 3, W: 1, D: 1, L: 1, p: -1, wr: "50,00%" },
        { rank: 33, name: "Leeroy", R: 2, G: 3, W: 1, D: 1, L: 1, p: -1, wr: "50,00%" },
        { rank: 34, name: "Linkovatel", R: 2, G: 2, W: 1, D: 0, L: 1, p: 0, wr: "50,00%" },
        { rank: 35, name: "SKYRIS", R: 2, G: 2, W: 1, D: 0, L: 1, p: 0, wr: "50,00%" },
        { rank: 36, name: "Yozhik", R: 2, G: 2, W: 1, D: 0, L: 1, p: 0, wr: "50,00%" },
        { rank: 37, name: "eosom", R: 2, G: 3, W: 1, D: 0, L: 2, p: 0, wr: "33,33%" },
        { rank: 38, name: "Katakan", R: 2, G: 3, W: 1, D: 0, L: 2, p: 0, wr: "33,33%" },
        { rank: 39, name: "cyl19", R: 2, G: 6, W: 0, D: 2, L: 4, p: 0, wr: "16,67%" },
        { rank: 41, name: "GOLDEN POPI", R: 1, G: 3, W: 0, D: 1, L: 2, p: 0, wr: "16,67%" },
        { rank: 42, name: "Yasama", R: 0, G: 4, W: 0, D: 1, L: 3, p: -1, wr: "12,50%" },
        { rank: 43, name: "vhskraaq", R: 0, G: 2, W: 0, D: 0, L: 2, p: 0, wr: "0,00%" },
        { rank: 44, name: "laf", R: 0, G: 1, W: 0, D: 0, L: 1, p: 0, wr: "0,00%" },
        { rank: 45, name: "reality", R: 0, G: 1, W: 0, D: 0, L: 1, p: 0, wr: "0,00%" }
    ],
    inactive: [
        { rank: 1, name: "cherepashka", R: 4, G: 2, W: 2, D: 0, L: 0, p: 0, wr: "100,00%" },
        { rank: 2, name: "Gary", R: 2, G: 3, W: 1, D: 0, L: 2, p: 0, wr: "33,33%" },
        { rank: 3, name: "Bot Fergus", R: 1, G: 1, W: 0, D: 1, L: 0, p: 0, wr: "50,00%" },
        { rank: 4, name: "sobriety", R: 1, G: 1, W: 0, D: 1, L: 0, p: 0, wr: "50,00%" },
        { rank: 5, name: "Ar4ud1ksss", R: 1, G: 1, W: 0, D: 1, L: 0, p: 0, wr: "50,00%" },
        { rank: 6, name: "lotain", R: 1, G: 2, W: 0, D: 1, L: 1, p: 0, wr: "25,00%" },
        { rank: 7, name: "AlaStoR", R: 0, G: 1, W: 0, D: 0, L: 1, p: 0, wr: "0,00%" },
        { rank: 8, name: "escapist", R: 0, G: 1, W: 0, D: 0, L: 1, p: 0, wr: "0,00%" },
        { rank: 9, name: "gogogo", R: 0, G: 1, W: 0, D: 0, L: 1, p: 0, wr: "0,00%" },
        { rank: 10, name: "shu", R: 0, G: 1, W: 0, D: 0, L: 1, p: 0, wr: "0,00%" },
        { rank: 11, name: "Yontlone", R: 0, G: 1, W: 0, D: 0, L: 1, p: 0, wr: "0,00%" },
        { rank: 12, name: "InWalker", R: -1, G: 0, W: 0, D: 0, L: 0, p: -1, wr: "#DIV/0!" }
    ]
};

let currentSort = { key: 'R', asc: true };

const getAvatarUrl = (name) => {
    if (CONFIG.teamLogos[name]) return CONFIG.teamLogos[name];
    return CONFIG.defaultLogo.replace('T', encodeURIComponent(name.charAt(0)));
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('site-logo-dark').src = CONFIG.serverLogoDark;
    document.getElementById('site-logo-light').src = CONFIG.serverLogoLight;
    
    initTheme();
    initTabs();
    renderLeague();
    renderFastcup();
    renderPlayersTable();
    initModal();
    setTimeout(drawOrganicThreads, 200);
    window.addEventListener('resize', drawOrganicThreads);
});

function initTheme() {
    const savedTheme = localStorage.getItem('ls-esports-theme') || 'theme-dark-default';
    document.body.className = savedTheme;
    const themeDots = document.querySelectorAll('.theme-dot');
    
    themeDots.forEach(dot => {
        if(dot.dataset.theme === savedTheme) dot.classList.add('active-dot');
    });

    themeDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const themeName = e.target.dataset.theme;
            document.body.className = themeName;
            localStorage.setItem('ls-esports-theme', themeName);
            themeDots.forEach(d => d.classList.remove('active-dot'));
            e.target.classList.add('active-dot');
            drawOrganicThreads();
        });
    });
}

function initTabs() {
    const btns = document.querySelectorAll('.nav-btn');
    const panes = document.querySelectorAll('.tab-pane');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            
            const targetPane = document.getElementById(btn.dataset.tab + '-tab');
            targetPane.classList.add('active');
            
            const animPanels = targetPane.querySelectorAll('.anim-panel');
            animPanels.forEach(panel => {
                panel.style.animation = 'none';
                panel.offsetHeight; 
                panel.style.animation = null; 
            });
            setTimeout(drawOrganicThreads, 150);
        });
    });
}

function formatMatchDate(dateString) {
    if (!dateString) return '';
    return dateString.replace(' (', '<br>(').replace(' - ', '<br>- ');
}

function createVerticalScore(s1, s2) {
    if(s1 === undefined || s1 === '-' || s1 === '') return `<div class="match-score">- : -</div>`;
    return `
        <div class="match-score vertical-score">
            <span>${s1}</span>
            <span class="colon">:</span>
            <span>${s2}</span>
        </div>
    `;
}

function renderMatches(matchesArray, containerId) {
    const processedMatches = matchesArray.map(m => ({
        ...m,
        isUpcoming: m.s1 === '' || m.s1 === undefined || m.s1 === '-'
    }));

    processedMatches.sort((a, b) => {
        if (a.isUpcoming && !b.isUpcoming) return -1;
        if (!a.isUpcoming && b.isUpcoming) return 1;
        return 0;
    });

    const html = processedMatches.map((m, index) => {
        const linkAttr = (!m.isUpcoming && m.link) ? `href="${CONFIG.matchLinkBase}${m.link}" target="_blank"` : '';
        const clickableClass = (!m.isUpcoming && m.link) ? 'clickable' : '';
        const tag = (!m.isUpcoming && m.link) ? 'a' : 'div';

        return `
        <${tag} ${linkAttr} class="match-row anim-panel ${clickableClass}" style="animation-delay: ${0.05 + (index * 0.05)}s">
            <div class="match-date">${formatMatchDate(m.date)}</div>
            <div class="match-team right">
                <span>${m.t1}</span>
                <img src="${getAvatarUrl(m.t1)}" class="team-avatar" alt="logo" loading="lazy">
            </div>
            ${createVerticalScore(m.s1, m.s2)}
            <div class="match-team">
                <img src="${getAvatarUrl(m.t2)}" class="team-avatar" alt="logo" loading="lazy">
                <span>${m.t2}</span>
            </div>
        </${tag}>`;
    }).join('');
    document.getElementById(containerId).innerHTML = html;
}

function renderBracket(rounds, containerId) {
    const html = rounds.map((round, rIndex) => `
        <div class="bracket-col anim-panel" style="animation-delay: ${0.1 + (rIndex * 0.1)}s">
            ${round.map(m => {
                if(m.format === "-") {
                    return `<div class="matchup placeholder-match" style="visibility: hidden; height: 45px;"></div>`;
                }

                const isUpcoming = m.s1 === '' || m.s1 === '-' || m.s1 === undefined || m.isPast === false;
                const matchupClass = isUpcoming ? 'matchup upcoming-match active-matchup' : 'matchup active-matchup';
                const dateBadge = isUpcoming && m.date && m.date !== 'Пока не известно' ? `<div class="match-time-badge">${m.date}</div>` : '';

                const w1 = (!isUpcoming && parseInt(m.s1) > parseInt(m.s2)) ? 'winner' : '';
                const w2 = (!isUpcoming && parseInt(m.s2) > parseInt(m.s1)) ? 'winner' : '';
                
                const img1 = m.t1 !== 'Пока не известно' && m.t1 !== '-' ? `<img src="${getAvatarUrl(m.t1)}" class="team-avatar" style="width:28px;height:28px;">` : '';
                const img2 = m.t2 !== 'Пока не известно' && m.t2 !== '-' ? `<img src="${getAvatarUrl(m.t2)}" class="team-avatar" style="width:28px;height:28px;">` : '';

                return `
                <div class="${matchupClass}">
                    ${dateBadge}
                    <div class="team ${w1}">
                        <div style="display:flex; align-items:center; gap:10px;">${img1} <span>${m.t1}</span></div>
                        <span class="score">${m.s1}</span>
                    </div>
                    <div class="team ${w2}">
                        <div style="display:flex; align-items:center; gap:10px;">${img2} <span>${m.t2}</span></div>
                        <span class="score">${m.s2}</span>
                    </div>
                </div>`;
            }).join('')}
        </div>
    `).join('');
    document.getElementById(containerId).innerHTML = html;
}

function renderLeague() {
    renderMatches(LS_LEAGUE_CUP_S8.matches, 'league-matches');
    const leagueBracketRounds = [ LS_LEAGUE_CUP_S8.bracket.col1, LS_LEAGUE_CUP_S8.bracket.col2, LS_LEAGUE_CUP_S8.bracket.col3 ];
    renderBracket(leagueBracketRounds, 'league-bracket');
    
    const html = `
        <table>
            <thead>
                <tr>
                    <th>Команда</th>
                    <th>Счет</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                ${LS_LEAGUE_CUP_S8.standings.map((r, index) => `
                    <tr class="interactive-row anim-panel" style="animation-delay: ${0.05 + (index * 0.05)}s">
                        <td>
                            <div class="team-cell">
                                <img src="${getAvatarUrl(r.team)}" class="team-avatar" alt="logo" loading="lazy">
                                ${r.team}
                            </div>
                        </td>
                        <td class="font-mono">${r.score}</td>
                        <td><span class="${r.isWin ? 'badge-win' : 'badge-loss'}">${r.status}</span></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    document.getElementById('league-standings').innerHTML = html;
}

function renderFastcup() {
    renderMatches(LS_FASTCUP_12.matches, 'fastcup-matches');
    const fastcupBracketRounds = [ LS_FASTCUP_12.bracket.col1, LS_FASTCUP_12.bracket.col2 ];
    renderBracket(fastcupBracketRounds, 'fastcup-bracket');
    
    const html = `
        <table>
            <thead>
                <tr>
                    <th>Команда</th>
                    <th>Счет</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                ${LS_FASTCUP_12.standings.map((r, index) => `
                    <tr class="interactive-row anim-panel" style="animation-delay: ${0.05 + (index * 0.05)}s">
                        <td>
                            <div class="team-cell">
                                <img src="${getAvatarUrl(r.team)}" class="team-avatar" alt="logo" loading="lazy">
                                ${r.team}
                            </div>
                        </td>
                        <td class="font-mono">${r.score}</td>
                        <td><span class="${r.status !== '-' ? 'badge-win' : 'badge-loss'}">${r.status}</span></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    document.getElementById('fastcup-standings').innerHTML = html;
}

function sortPlayers(key) {
    if (currentSort.key === key) {
        currentSort.asc = !currentSort.asc;
    } else {
        currentSort.key = key;
        currentSort.asc = false; 
    }
    
    PLAYERS_STATISTICS.active.sort((a, b) => {
        let valA = a[key];
        let valB = b[key];
        
        if (key === 'wr') {
            valA = parseFloat(a.wr.replace(',', '.'));
            valB = parseFloat(b.wr.replace(',', '.'));
        }
        if (key === 'name') {
            valA = a.name.toLowerCase();
            valB = b.name.toLowerCase();
        }
        
        if (valA < valB) return currentSort.asc ? -1 : 1;
        if (valA > valB) return currentSort.asc ? 1 : -1;
        return 0;
    });
    
    renderPlayersTable();
}

function renderPlayersTable() {
    const tbody = PLAYERS_STATISTICS.active.map((p, index) => `
        <tr class="interactive-row anim-panel" data-index="${index}" style="animation-delay: ${0.01 * index}s">
            <td class="font-mono">${p.R}</td>
            <td style="font-weight: 700; color: var(--md-text-primary);">${p.name}</td>
            <td class="font-mono">${p.G}</td>
            <td class="text-win font-mono">${p.W}</td>
            <td class="font-mono">${p.D}</td>
            <td class="text-loss font-mono">${p.L}</td>
            <td><strong style="color: var(--g-primary);">${p.wr}</strong></td>
        </tr>
    `).join('');

    const headers = [
        { key: 'R', label: 'Rank' },
        { key: 'name', label: 'Игрок' },
        { key: 'G', label: 'Матчи (G)' },
        { key: 'W', label: 'Победы (W)' },
        { key: 'D', label: 'Ничьи (D)' },
        { key: 'L', label: 'Поражения (L)' },
        { key: 'wr', label: 'Винрейт' }
    ];

    const thead = headers.map(h => `
        <th onclick="sortPlayers('${h.key}')" style="cursor:pointer; user-select:none;">
            ${h.label} ${currentSort.key === h.key ? (currentSort.asc ? '▲' : '▼') : ''}
        </th>
    `).join('');

    document.getElementById('global-players').innerHTML = `
        <table>
            <thead><tr>${thead}</tr></thead>
            <tbody>${tbody}</tbody>
        </table>
    `;
}

function initModal() {
    const dialog = document.getElementById('player-modal');
    const closeBtn = document.getElementById('close-modal');
    const tableContainer = document.getElementById('global-players');

    tableContainer.addEventListener('click', (e) => {
        const row = e.target.closest('.interactive-row');
        if (!row) return;
        const p = PLAYERS_STATISTICS.active[row.getAttribute('data-index')];

        document.getElementById('modal-player-name').textContent = p.name;
        document.getElementById('modal-player-rank').textContent = p.R;
        document.getElementById('modal-g').textContent = p.G;
        document.getElementById('modal-w').textContent = p.W;
        document.getElementById('modal-d').textContent = p.D;
        document.getElementById('modal-l').textContent = p.L;
        
        document.getElementById('modal-player-avatar').innerHTML = `<span class="material-symbols-outlined" style="font-size: 36px;">person</span>`;
        
        const wrBar = document.getElementById('modal-wr-bar');
        const wrText = document.getElementById('modal-wr-text');
        const wrValue = parseFloat(p.wr.replace(',', '.'));
        
        wrBar.style.width = '0%';
        wrText.textContent = p.wr;
        
        dialog.showModal();
        
        setTimeout(() => { wrBar.style.width = `${wrValue}%`; }, 150);
    });

    closeBtn.addEventListener('click', () => dialog.close());
    
    dialog.addEventListener('click', (e) => {
        const d = dialog.getBoundingClientRect();
        if (e.clientX < d.left || e.clientX > d.right || e.clientY < d.top || e.clientY > d.bottom) {
            dialog.close();
        }
    });
}

function drawOrganicThreads() {
    document.querySelectorAll('.bracket-svg-canvas').forEach(el => el.remove());
    
    const activeTab = document.querySelector('.tab-pane.active');
    if(!activeTab) return;
    
    const wrappers = activeTab.querySelectorAll('.bracket-wrapper');
    
    wrappers.forEach(wrapper => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('bracket-svg-canvas');
        
        svg.style.width = `${wrapper.scrollWidth}px`;
        svg.style.height = `${wrapper.scrollHeight}px`;
        
        const cols = wrapper.querySelectorAll('.bracket-col');
        for(let i = 0; i < cols.length - 1; i++) {
            const currentMatches = cols[i].querySelectorAll('.active-matchup');
            const nextMatches = cols[i+1].querySelectorAll('.active-matchup');
            
            if(nextMatches.length === 0) continue;

            currentMatches.forEach((match, index) => {
                const targetMatch = nextMatches.length === 1 ? nextMatches[0] : nextMatches[Math.floor(index / 2)];
                
                if(targetMatch) {
                    const rect1 = match.getBoundingClientRect();
                    const rect2 = targetMatch.getBoundingClientRect();
                    const wrapperRect = wrapper.getBoundingClientRect();
                    
                    const scrollLeft = wrapper.parentNode.scrollLeft || 0;
                    const scrollTop = wrapper.parentNode.scrollTop || 0;
                    
                    const x1 = (rect1.right - wrapperRect.left);
                    const y1 = (rect1.top + rect1.height / 2 - wrapperRect.top);
                    
                    const x2 = (rect2.left - wrapperRect.left);
                    const y2 = (rect2.top + rect2.height / 2 - wrapperRect.top);
                    
                    const cp1x = x1 + 40; 
                    const cp1y = y1;
                    const cp2x = x2 - 40; 
                    const cp2y = y2;
                    
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`);
                    path.classList.add('organic-thread');
                    path.style.animationDelay = `${Math.random() * 2}s`;
                    svg.appendChild(path);
                }
            });
        }
        wrapper.appendChild(svg);
    });
}