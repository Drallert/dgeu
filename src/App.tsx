import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/a.css';
import Movie from './components/Movie';


var db = {
    content: [
        {
            "Title": "Wii Anubis II (USA) in 02:17.48 by CoolKirby.",

            "Description": `<em>Anubis II</em> (read: "Anubis, the Second") is a fast-paced
            platformer by Data Design Interactive, the creators of the
            infamous <em>Ninjabread Man</em>. The evil spirit Mumm'hotep has
            plunged Egypt into darkness, and Anubis II, the guardian of the
            tombs, sets out to stop him!
            <p>
              But it seems that this quest is much easier than it appears.
              After completely skipping going through the starting gate,
              Anubis decides to play a bunch of minigames. This somehow
              causes his quest to become completed. There was much
              rejoicing.
            </p>`,
            
            "Tags": ["Uses death to save time","Takes damage to save time","Major skip glitch","Final boss skip glitch","Heavy glitch abuse","Genre: Platform"],
            "Links": ["http:\/\/tasvideos.org\/4392S.html","http:\/\/tasvideos.org\/forum\/t\/15650","http:\/\/tasvideos.org\/2679M.html"],
            "YoutubeLinks": "http:\/\/www.youtube.com\/watch?v=-MORAvx-S70",
            "DownloadLinks": ["http:\/\/tasvideos.org\/movies\/dtm\/coolkirbyv1-anubis2.zip","http:\/\/tracker.tasvideos.org\/anubis2-tas-warpglitch-coolkirby.mkv.torrent","http:\/\/tracker.tasvideos.org\/anubis2-tas-warpglitch-coolkirby_512kb.mp4.torrent","http:\/\/archive.org\/download\/anubis2-tas-warpglitch-coolkirby\/anubis2-tas-warpglitch-coolkirby.mkv","http:\/\/archive.org\/download\/anubis2-tas-warpglitch-coolkirby\/anubis2-tas-warpglitch-coolkirby_512kb.mp4"],
            "Rating": 3.8,
            "img": "2679M.jpg",
            "tiers": ["fastest","vault"]
        },
        {
            "Title": "Wii Castlevania: The Adventure ReBirth (USA) in 18:29.4 by zggzdydp.",
            
            "Description":`<em>Castlevania: The Adventure ReBirth</em> is a WiiWare game that was released in 2009 by Konami. It is a remake of <a title="[1612] GBC Konami GB Collection Vol. 1: Castlevania: The Adventure (Europe) by arukAdo in 14:58.7" href="/1612M.html">the Game Boy game</a>, starring Christopher Belmont, seeking to defeat Dracula.
            <p><a href="/Zggzdydp.html">zggzdydp</a>, using various tricks, defeats Count Dracula in record time.
            </p>` ,
            
            
            "Tags": ["Takes damage to save time","Uses hardest difficulty","Genre: Action","Genre: Platform"],
            "Links": ["http:\/\/tasvideos.org\/5572S.html","http:\/\/tasvideos.org\/forum\/t\/19315","http:\/\/tasvideos.org\/3466M.html"],
            "YoutubeLinks": "http:\/\/www.youtube.com\/watch?v=1Z6vVOFkL8A",
            "DownloadLinks": ["http:\/\/tasvideos.org\/movies\/dtm\/zggzdydp-castlevaniatheadventurerebirth.zip","http:\/\/tracker.tasvideos.org\/castlevaniatheadventurerebirth-tas-zggzdydp.mkv.torrent","http:\/\/tracker.tasvideos.org\/castlevaniatheadventurerebirth-tas-zggzdydp_512kb.mp4.torrent","http:\/\/archive.org\/download\/castlevaniatheadventurerebirth-tas-zggzdydp\/castlevaniatheadventurerebirth-tas-zggzdydp.mkv","http:\/\/archive.org\/download\/castlevaniatheadventurerebirth-tas-zggzdydp\/castlevaniatheadventurerebirth-tas-zggzdydp_512kb.mp4"],
            "Rating": 7.5,
            "img":"3466M.jpg",
            "tiers":["fastest","moon"]
        },
        {
            "Title": "Wii Doc Louis's Punch-Out!! (USA) in 01:40.15 by McHazard.",
            
            "Description": `<em>Doc Louis's Punch-Out!!</em> is a standalone title released after the Wii remake of <em><a title="[2488] NES Mike Tyson's Punch-Out!! (USA PRG1) by McHazard in 17:39.45" href="/2488M.html">Punch-Out!!</a></em> as a Platinum reward for Club Nintendo members in North America. Taking place before the events of <em>Punch-Out!!</em>, the game sees Little Mac spar with his coach, Doc Louis, through three progressively difficult matches, which are each cleared by knocking him down once.
            <p>As with the other <em>Punch-Out!!</em> runs on this site, this run by McHazard aims for in-game time first, then real time. The clock times achieved are listed below:
            </p><p></p><pre>   Warm-up: 40.52
               Training: 41.83
               Sparring: 39.38
            </pre>We also have a run of <em><a title="[2530] SNES Super Punch-Out!! (USA) by McHazard in 15:52.66" href="/2530M.html">Super Punch-Out!!</a></em> for the SNES.
            `,

            "Tags": ["Aims for in-game time instead of real-time","Genre: Fighting","Genre: Sport"],
            "Links": ["http:\/\/tasvideos.org\/4306S.html","http:\/\/tasvideos.org\/forum\/t\/15330","http:\/\/tasvideos.org\/2605M.html"],
            "YoutubeLinks": "http:\/\/www.youtube.com\/watch?v=wWjaV3VH94w",
            "DownloadLinks": ["http:\/\/tasvideos.org\/movies\/dtm\/mchazardv1-doclouispunchout.zip","http:\/\/tracker.tasvideos.org\/doclouispunchout-tas-mchazard.mkv.torrent","http:\/\/tracker.tasvideos.org\/doclouispunchout-tas-mchazard_512kb.mp4.torrent","http:\/\/archive.org\/download\/MchazardsWiiDocLouissPunch-outIn0140.15\/doclouispunchout-tas-mchazard.mkv","http:\/\/archive.org\/download\/MchazardsWiiDocLouissPunch-outIn0140.15\/doclouispunchout-tas-mchazard_512kb.mp4"],
            "Rating": 6.8,
            "img":"2605M.jpg",
            "tiers":["vault","fastest"]
        },
        {
            "Title": "Wii GoldenEye: 007 (USA) \"007 Classic difficulty\" in 1:41:35.67 by FitterSpace.",
            "Description": `<em>Goldeneye: 007</em> for the Nintendo Wii is a full-scale re-imagining of the N64 game, and includes no assets from the original game. It takes the classic Goldeneye story and updates it to the standards of a modern first-person shooter. It also features Daniel Craig rather than Pierce Brosnan, who played James Bond in the film and the Nintendo 64 game. It has many modern features such as the ability to sprint and aim down sights.
            <p>The missions in this game are based on the ones from the classic Nintendo 64 version instead of the film. Some of the stages from the original game have been combined in this game (for example, Bunker on Wii is like Bunker+Silo on N64 and Cradle is like Control+Cradle on N64). But there are also some brand-new missions like Nightclub and Solar.
            </p><p>This TAS plays on the hardest difficulty, 007 Classic. Like the original N64 game, the harder difficulties have more objectives than the easier difficulties. This makes the route much more interesting because the goal isn't simply to sprint to the end of the mission. 007 Classic also removes regenerating health, so there is much more health management on this difficulty. Because a modern Call-of-Duty style FPS game with no health regeneration would be unfair, the developers added body armor that is only available on 007 classic, which the TAS makes great use of.
            </p><p>Since this game has roughly 35 minutes of unskippable cutscenes, the author provided a <a class="extlink" rel="nofollow" id="i3709A14C_1" href="//www.youtube.com/watch?v=hAHJw0kh6Gg">condensed video</a> with all the cutscenes and loading screens removed.
            </p>`,
            "Tags": ["Uses hardest difficulty","Genre: Action","Genre: Shooter"],
            "Links": ["http:\/\/tasvideos.org\/5464S.html","http:\/\/tasvideos.org\/forum\/t\/19048","http:\/\/tasvideos.org\/3410M.html"],
            "YoutubeLinks": "https:\/\/www.youtube.com\/watch?v=zt3FeB7pQyM",
            "DownloadLinks": ["http:\/\/tasvideos.org\/movies\/dtm\/fitterspace-goldeneye007-007classic.zip","http:\/\/tracker.tasvideos.org\/goldeneye007-tas-007classic-fitterspace.mkv.torrent","http:\/\/tracker.tasvideos.org\/goldeneye007-tas-007classic-fitterspace_512kb.mp4.torrent","http:\/\/archive.org\/download\/goldeneye007-tas-007classic-fitterspace\/goldeneye007-tas-007classic-fitterspace.mkv","http:\/\/archive.org\/download\/goldeneye007-tas-007classic-fitterspace\/goldeneye007-tas-007classic-fitterspace_512kb.mp4"],
            "Rating": 8.3,
            "img":"3410M.jpg",
            "tiers":["fastest","moon"]
        }
    ]
}
function App() {
  return (
    <div>
    <div id="anim">
    
  
    <div style={{textAlign: "center"}} id="banner">
        <table>
            <tbody>
                <tr>
                    <td id="tinymenu">
                        <ul>
                            <li className="selected">
                                <div id="tinyloginform">
                                    <form method="post" action="/Login.html"><a
                                            href="http://tasvideos.org/Login.html">Login</a>: <input type="text"
                                            name="user" data-size="8"/><input type="hidden" name="pass" data-size="8"/><input
                                            type="hidden" name="redir" value="http://tasvideos.org/Movies-Wii.html"/>
                                    </form>
                                </div>
                                <script type="text/javascript">
                                        CreateTinyLoginForm("tinyloginform", "\/Login.html")
                                   </script><noscript>
                                    <div style={{display: "inline"}}><a href="/Login.html">Login</a></div>
                                </noscript>
                            </li>
                            <li> <a href="http://tasvideos.org/Search.html">Search</a>: <form method="get"
                                    action="/Search.html" style={{display:"inline"}}>
                                    <div style={{display:"inline"}}><input type="text" name="key" data-size="20"/></div>
                                </form>
                            </li>
                        </ul>
                    </td>
                    <td style={{width: 20 + "%"}}></td>
                </tr>
                <tr style= {{verticalAlign :"bottom"}}>
                    <td colSpan={2} id="mainmenu">
                        <ul>
                            <li> <a href="http://tasvideos.org/FrontPage.html">Home</a>
                            </li>
                            <li className="selected"> <a href="http://tasvideos.org/Movies.html">Movies</a>
                            </li>
                            <li> <a href="http://tasvideos.org/GameResources.html">Game Resources</a>
                            </li>
                            <li> <a href="http://tasvideos.org/ArticleIndex.html">Articles</a>
                            </li>
                            <li> <a href="http://tasvideos.org/EmulatorResources.html">Emulators</a>
                            </li>
                            <li> <a href="http://tasvideos.org/Subs-List.html">Submissions</a>
                            </li>
                            <li> <a href="http://tasvideos.org/News.html">News</a>
                            </li>
                            <li> <a href="http://tasvideos.org/forum/">Forums</a>
                            </li>
                            <li> <a href="http://tasvideos.org/LiveChat.html">Chat</a>
                            </li>
                            <li> <a href="http://tasvideos.org/Users.html">Staff</a>
                            </li>
                            <li> <a href="http://tasvideos.org/WelcomeToTASVideos.html">About</a>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div id="mantra">
    <h1 className="m0" title="TASVideos"><span><a href="http://tasvideos.org/">TASVideos</a></span></h1>
    <div className="m1" title="Tool-assisted game movies"><span>Tool-assisted game movies</span></div>
    <div className="m2" title="When human skills are just not enough"><span>When human skills are just not enough</span>
    </div>
</div>
<div id="adbox1" style={{float:"left"}}></div>
<div id="page">
    <h1>Tool-assisted movies</h1>
    <div style={{display: "inline-block", cursor: "pointer", color: "rgb(68, 68, 255)", textDecoration: "underline"}}
        /*onClick={expand_filter}*/ id="filter_collapsed">Filters +</div>
    <div id="filter_expanded" style={{display: "none"}}>
        <form method="GET" action="/movies.cgi" /*onSubmit="return generate_filter()"*/>
            <table className="filtergenerator">
                <tbody>
                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label htmlFor="m_tier">Tier:</label>
                                            <br></br>
                                            <select id="m_tier" multiple={true} name="m_tier[]" data-size="6">
                                                <option value="Moons">Moons</option>
                                                <option value="Stars">Stars</option>
                                                <option value="Vault">Vault</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label htmlFor="m_flags">Flags:</label>
                                            <br></br>
                                            <select id="m_flags" multiple={true} name="m_flags[]" data-size="6">
                                                <option value="Atlas">Atlas Map Encode</option>
                                                <option value="Verified">Console-verified</option>
                                                <option value="FastestCompletion">Fastest Completion</option>
                                                <option value="Firstplatform">First platform</option>
                                                <option value="Commentary">Has commentary</option>
                                                <option value="Improve">Notable improvement</option>
                                                <option value="NewcomerRec">Recommended for newcomers</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label htmlFor="m_system">Platform:</label>
                                            <br></br>
                                            <select id="m_system" multiple={true} name="m_system[]" data-size="6">
                                                <option value="AppleII">Apple II</option>
                                                <option value="Arcade">Arcade</option>
                                                <option value="A2600">Atari 2600</option>
                                                <option value="A7800">Atari 7800</option>
                                                <option value="Lynx">Atari Lynx</option>
                                                <option value="Coleco">ColecoVision</option>
                                                <option value="C64">Commodore 64</option>
                                                <option value="DOOM">DooM</option>
                                                <option value="DOS">DOS</option>
                                                <option value="FDS">Famicom Disk System</option>
                                                <option value="GB">Game Boy</option>
                                                <option value="GBA">Game Boy Advance</option>
                                                <option value="GBC">Game Boy Color</option>
                                                <option value="GG">Game Gear</option>
                                                <option value="VEC">General Computer Vectrex</option>
                                                <option value="INTV">Intellivision</option>
                                                <option value="Linux">Linux</option>
                                                <option value="MSX">MSX Home Computer System</option>
                                                <option value="NGP">Neo Geo Pocket</option>
                                                <option value="N64">Nintendo 64</option>
                                                <option value="DS">Nintendo DS</option>
                                                <option value="NES">Nintendo Entertainment System</option>
                                                <option value="GC">Nintendo GameCube</option>
                                                <option value="PCFX">PC-FX</option>
                                                <option value="32X">Sega 32X</option>
                                                <option value="SegaCD">Sega CD</option>
                                                <option value="Genesis">Sega Genesis</option>
                                                <option value="SMS">Sega MasterSystem</option>
                                                <option value="Saturn">Sega Saturn</option>
                                                <option value="SG1000">Sega SG-1000</option>
                                                <option value="PSX">Sony PlayStation</option>
                                                <option value="SVI3x8">Spectravideo SVI-318/328</option>
                                                <option value="SGB">Super Game Boy</option>
                                                <option value="SNES">Super NES</option>
                                                <option value="SGX">SuperGrafx</option>
                                                <option value="TI83">Texas Instruments TI-83 Series</option>
                                                <option value="PCE">TurboGrafx 16</option>
                                                <option value="PCECD">TurboGrafx 16 CD</option>
                                                <option value="Uzebox">Uzebox</option>
                                                <option value="VBoy">Virtual Boy</option>
                                                <option value="Wii" selected={true}>Wii</option>
                                                <option value="Windows">Windows</option>
                                                <option value="WSWAN">WonderSwan</option>
                                                <option value="ZXS">ZX Spectrum</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label htmlFor="m_year">Year:</label>
                                            <br></br>
                                            <select id="m_year" multiple={true} name="m_year[]" data-size="6">
                                                <option value="2000">2000</option>
                                                <option value="2001">2001</option>
                                                <option value="2002">2002</option>
                                                <option value="2003">2003</option>
                                                <option value="2004">2004</option>
                                                <option value="2005">2005</option>
                                                <option value="2006">2006</option>
                                                <option value="2007">2007</option>
                                                <option value="2008">2008</option>
                                                <option value="2009">2009</option>
                                                <option value="2010">2010</option>
                                                <option value="2011">2011</option>
                                                <option value="2012">2012</option>
                                                <option value="2013">2013</option>
                                                <option value="2014">2014</option>
                                                <option value="2015">2015</option>
                                                <option value="2016">2016</option>
                                                <option value="2017">2017</option>
                                                <option value="2018">2018</option>
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label htmlFor="m_group">Game group:</label>
                                            <br></br>
                                            <select id="m_group" multiple={true} name="m_group[]" data-size="6">
                                                <option value="55">Action 52</option>
                                                <option value="107">Action Man</option>
                                                <option value="156">ActRaiser</option>
                                                <option value="131">Addams Family</option>
                                                <option value="77">Adventure Island</option>
                                                <option value="208">Aero the Acro-Bat</option>
                                                <option value="74">Alex Kidd</option>
                                                <option value="211">Alien</option>
                                                <option value="153">Another World</option>
                                                <option value="172">Arsene Lupin</option>
                                                <option value="122">Asterix</option>
                                                <option value="175">Avatar: The Last Airbender</option>
                                                <option value="83">Back to the Future</option>
                                                <option value="186">Banjo-Kazooie</option>
                                                <option value="183">Barbie</option>
                                                <option value="190">Battle Kid</option>
                                                <option value="5">Battletoads</option>
                                                <option value="180">Bishi Bashi</option>
                                                <option value="54">Blaster Master</option>
                                                <option value="7">Bomberman</option>
                                                <option value="63">Bonk</option>
                                                <option value="58">Boulder Dash</option>
                                                <option value="207">Boxxle</option>
                                                <option value="41">Boy and His Blob</option>
                                                <option value="42">Brain Age</option>
                                                <option value="115">Breakout</option>
                                                <option value="117">Breath of Fire</option>
                                                <option value="48">Bubble Bobble</option>
                                                <option value="212">Bubsy</option>
                                                <option value="109">Buster Bros.</option>
                                                <option value="220">Cabbage Patch Kids</option>
                                                <option value="27">Castlevania</option>
                                                <option value="126">Chameleon Twist</option>
                                                <option value="217">Chester Cheetah</option>
                                                <option value="169">Chip 'n Dale</option>
                                                <option value="111">Chuck Rock</option>
                                                <option value="227">Club Penguin</option>
                                                <option value="37">Commander Keen</option>
                                                <option value="91">Commando</option>
                                                <option value="26">Contra</option>
                                                <option value="25">Crash</option>
                                                <option value="105">Croc</option>
                                                <option value="86">DC Comics</option>
                                                <option value="104">Deja Vu</option>
                                                <option value="103">Digimon</option>
                                                <option value="90">Dizzy</option>
                                                <option value="89">Donald Duck</option>
                                                <option value="47">Donkey Kong</option>
                                                <option value="179">Doom</option>
                                                <option value="205">Dora the Explorer</option>
                                                <option value="34">Doraemon</option>
                                                <option value="3">Double Dragon</option>
                                                <option value="203">Dr. Franken</option>
                                                <option value="116">Dragon Ball</option>
                                                <option value="33">Dragon Quest</option>
                                                <option value="166">Dragon Slayer</option>
                                                <option value="38">Duke Nukem</option>
                                                <option value="72">Dungeons &amp; Dragons</option>
                                                <option value="185">Earthworm Jim</option>
                                                <option value="147">Ecco</option>
                                                <option value="66">Eggerland</option>
                                                <option value="213">Elevator Action</option>
                                                <option value="125">F-Zero</option>
                                                <option value="50">Fantasy Zone</option>
                                                <option value="199">Felix the Cat</option>
                                                <option value="189">Fighters Destiny</option>
                                                <option value="19">Final Fantasy</option>
                                                <option value="100">Final Fight</option>
                                                <option value="76">Fire Emblem</option>
                                                <option value="120">Fist of the North Star</option>
                                                <option value="143">Flintstones</option>
                                                <option value="22">Frogger</option>
                                                <option value="168">G.I. Joe</option>
                                                <option value="65">Garfield</option>
                                                <option value="64">Gex</option>
                                                <option value="146">Ghostbusters</option>
                                                <option value="59">Ghosts 'n Goblins</option>
                                                <option value="214">Giana Sisters</option>
                                                <option value="121">Golden Axe</option>
                                                <option value="181">Golden Sun</option>
                                                <option value="43">Gradius</option>
                                                <option value="23">Grand Theft Auto</option>
                                                <option value="177">Guilty Gear</option>
                                                <option value="129">Gunstar Heroes</option>
                                                <option value="128">Harry Potter</option>
                                                <option value="95">Indiana Jones</option>
                                                <option value="75">James Bond</option>
                                                <option value="182">James Pond</option>
                                                <option value="221">Jill of the Jungle</option>
                                                <option value="191">Joe &amp; Mac</option>
                                                <option value="96">Jurassic Park</option>
                                                <option value="167">Karateka</option>
                                                <option value="62">Kid Niki</option>
                                                <option value="102">King of Fighters</option>
                                                <option value="119">King's Quest</option>
                                                <option value="61">Kingdom Hearts</option>
                                                <option value="15">Kirby</option>
                                                <option value="112">Klonoa</option>
                                                <option value="162">Kunio-kun</option>
                                                <option value="101">Kururin</option>
                                                <option value="226">Legendary Axe</option>
                                                <option value="197">Lego</option>
                                                <option value="110">Little Nemo</option>
                                                <option value="87">Looney Tunes</option>
                                                <option value="39">Lucky Luke</option>
                                                <option value="8">Mario</option>
                                                <option value="81">Marvel</option>
                                                <option value="84">McDonald's</option>
                                                <option value="21">Mega Man</option>
                                                <option value="71">Metal Gear</option>
                                                <option value="154">Metal Max</option>
                                                <option value="14">Metal Slug</option>
                                                <option value="16">Metroid</option>
                                                <option value="88">Mickey Mouse</option>
                                                <option value="79">Micro Machines</option>
                                                <option value="106">Might and Magic</option>
                                                <option value="155">Milon</option>
                                                <option value="36">Mortal Kombat</option>
                                                <option value="24">Mother</option>
                                                <option value="209">Mystery Dungeon</option>
                                                <option value="124">Mystical Ninja</option>
                                                <option value="229">NFL</option>
                                                <option value="82">Ninja Gaiden</option>
                                                <option value="108">Ninja Turtles</option>
                                                <option value="206">Noddy</option>
                                                <option value="45">Oddworld</option>
                                                <option value="99">Pac-Man</option>
                                                <option value="215">Peanuts</option>
                                                <option value="157">Penta</option>
                                                <option value="118">Phantasy Star</option>
                                                <option value="218">Pinocchio</option>
                                                <option value="94">Pitfall</option>
                                                <option value="195">Pocky &amp; Rocky</option>
                                                <option value="46">Point Blank</option>
                                                <option value="17">Pokémon</option>
                                                <option value="132">Popeye</option>
                                                <option value="216">Portal</option>
                                                <option value="13">Power Rangers</option>
                                                <option value="78">Prince of Persia</option>
                                                <option value="53">Punch-Out!!</option>
                                                <option value="148">Puyo Puyo</option>
                                                <option value="188">Puzzle Boy</option>
                                                <option value="210">Puzzle League</option>
                                                <option value="176">Q*Bert</option>
                                                <option value="170">Quattro Adventure</option>
                                                <option value="196">Quest for Glory</option>
                                                <option value="165">Rad Racer</option>
                                                <option value="69">Rambo</option>
                                                <option value="51">Rayman</option>
                                                <option value="140">Ren and Stimpy</option>
                                                <option value="44">Resident Evil</option>
                                                <option value="1">RoboCop</option>
                                                <option value="144">Rocket Knight</option>
                                                <option value="204">Rolan's Curse</option>
                                                <option value="67">SaGa</option>
                                                <option value="133">Sailor Moon</option>
                                                <option value="161">Saint Seiya</option>
                                                <option value="223">Samurai Shodown</option>
                                                <option value="192">Scooby-Doo</option>
                                                <option value="184">Sesame Street</option>
                                                <option value="145">Shadow of the Beast</option>
                                                <option value="68">Shining</option>
                                                <option value="139">Shinobi</option>
                                                <option value="56">Skate or Die</option>
                                                <option value="2">SkyRoads</option>
                                                <option value="20">Sonic</option>
                                                <option value="224">Soulcalibur</option>
                                                <option value="113">Space Invaders</option>
                                                <option value="222">Space Quest</option>
                                                <option value="178">Spelunker</option>
                                                <option value="85">Splatterhouse</option>
                                                <option value="127">Splinter Cell</option>
                                                <option value="29">SpongeBob SquarePants</option>
                                                <option value="18">Spyro</option>
                                                <option value="11">Star Fox</option>
                                                <option value="225">Star Trek</option>
                                                <option value="70">Star Wars</option>
                                                <option value="164">StarTropics</option>
                                                <option value="93">Street Fighter</option>
                                                <option value="97">Streets of Rage</option>
                                                <option value="98">Strider</option>
                                                <option value="193">Stuart Little</option>
                                                <option value="52">Super Monkey Ball</option>
                                                <option value="10">Super Smash Bros.</option>
                                                <option value="219">Survival Kids</option>
                                                <option value="163">Tecmo</option>
                                                <option value="60">Tekken</option>
                                                <option value="228">Tempo</option>
                                                <option value="92">Tetris</option>
                                                <option value="160">The Goonies</option>
                                                <option value="142">The Jungle Book</option>
                                                <option value="4">The Legend of Zelda</option>
                                                <option value="57">The Legendary Starfy</option>
                                                <option value="141">The Lion King</option>
                                                <option value="158">The Noid</option>
                                                <option value="202">The Pink Panther</option>
                                                <option value="9">The Simpsons</option>
                                                <option value="130">The Smurfs</option>
                                                <option value="12">The Terminator</option>
                                                <option value="138">Thunder Force</option>
                                                <option value="40">Tintin</option>
                                                <option value="137">ToeJam &amp; Earl</option>
                                                <option value="136">Toki</option>
                                                <option value="32">Tom and Jerry</option>
                                                <option value="201">Tomb Raider</option>
                                                <option value="123">Tony Hawk</option>
                                                <option value="151">Top Gear</option>
                                                <option value="152">Top Gun</option>
                                                <option value="230">Touhou</option>
                                                <option value="198">Town &amp; Country</option>
                                                <option value="194">Track &amp; Field</option>
                                                <option value="35">Turok</option>
                                                <option value="49">Turrican</option>
                                                <option value="150">Ultima</option>
                                                <option value="114">Umihara Kawase</option>
                                                <option value="200">Valis</option>
                                                <option value="187">Valkyrie</option>
                                                <option value="135">Vectorman</option>
                                                <option value="31">Wario</option>
                                                <option value="174">Wars</option>
                                                <option value="134">Warsong</option>
                                                <option value="173">Where's Waldo?</option>
                                                <option value="149">Wizardry</option>
                                                <option value="73">Wizards &amp; Warriors</option>
                                                <option value="80">Wonder Boy</option>
                                                <option value="159">Yie Ar Kung-Fu</option>
                                                <option value="30">Yoshi</option>
                                                <option value="171">Ys</option>
                                                <option value="28">Yu-Gi-Oh!</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label htmlFor="m_game">Game:</label>
                                            <br></br>
                                            <select id="m_game" multiple={true} name="m_game[]" data-size="6">
                                                <option value="1786">007: Agent Under Fire (GC)</option>
                                                <option value="1364">007: Nightfire (GC)</option>
                                                <option value="402">007: The World is Not Enough (N64)</option>
                                                <option value="2002">10-Yard Fight (NES)</option>
                                                <option value="2149">1001 Spikes (Linux)</option>
                                                <option value="1841">3 Ninjas Kick Back (Genesis)</option>
                                                <option value="2069">3-D Tetris (VBoy)</option>
                                                <option value="458">8 Eyes (NES)</option>
                                                <option value="75">A Boy and His Blob, David Crane's: Trouble on
                                                    Blobolonia (NES)</option>
                                                <option value="487">A Boy and His Blob: The Rescue of Princess
                                                    Blobette (GB)</option>
                                                <option value="101">A Nightmare On Elm Street (NES)</option>
                                                <option value="1183">A Week of Garfield (NES)</option>
                                                <option value="1715">A-mazing Tater (GB)</option>
                                                <option value="882">Abadox: The Deadly Inner War (NES)</option>
                                                <option value="669">Action 52: The Cheetahmen (NES)</option>
                                                <option value="1529">Action Man: Robot Atak (GBA)</option>
                                                <option value="1527">Action Man: Search for Base X (GBC)</option>
                                                <option value="1802">Action Pachio (SNES)</option>
                                                <option value="148">ActRaiser (SNES)</option>
                                                <option value="1066">ActRaiser 2 (SNES)</option>
                                                <option value="718">Advance Wars (GBA)</option>
                                                <option value="588">Advance Wars 2: Black Hole Rising (GBA)</option>
                                                <option value="1892">Advanced Dungeons &amp; Dragons: Cloudy
                                                    Mountain (INTV)</option>
                                                <option value="865">Advanced Dungeons &amp; Dragons: Heroes of the
                                                    Lance (NES)</option>
                                                <option value="2101">Advanced Dungeons &amp; Dragons: Treasure of
                                                    Tarmin (INTV)</option>
                                                <option value="1401">Adventure (A2600)</option>
                                                <option value="42">Adventure Island 3 (NES)</option>
                                                <option value="528">Adventure Island 4, Hudson's (NES)</option>
                                                <option value="314">Adventure Island II (NES)</option>
                                                <option value="1833">Adventure Island IV (NES)</option>
                                                <option value="293">Adventure Island, Hudson's (NES)</option>
                                                <option value="1302">Adventure Time: Hey Ice King! Why’d You Steal
                                                    Our Garbage?! (DS)</option>
                                                <option value="877">Adventures in the Magic Kingdom (NES)</option>
                                                <option value="123">Adventures of Lolo (NES)</option>
                                                <option value="247">Adventures of Lolo 2 (NES)</option>
                                                <option value="445">Adventures of Lolo 3 (NES)</option>
                                                <option value="977">Adventures of Tom Sawyer (NES)</option>
                                                <option value="1994">Adventures of Yogi Bear (SNES)</option>
                                                <option value="797">Aero the Acro-Bat (Genesis)</option>
                                                <option value="2060">Aero the Acro-Bat 2 (Genesis)</option>
                                                <option value="1664">After Burst (GB)</option>
                                                <option value="245">Air (NES)</option>
                                                <option value="432">Air 2 (NES)</option>
                                                <option value="976">Air Fortress (NES)</option>
                                                <option value="1669">Airlock (A2600)</option>
                                                <option value="2005">Aladdin (Hummer Team) (NES)</option>
                                                <option value="1523">Aladdin, Disney's (SMS)</option>
                                                <option value="139">Aladdin, Disney's (SNES)</option>
                                                <option value="204">Aladdin, Disney's (Genesis)</option>
                                                <option value="604">Alex Kidd in Miracle World (SMS)</option>
                                                <option value="413">Alex Kidd in Shinobi World (SMS)</option>
                                                <option value="174">Alex Kidd in the Enchanted Castle (Genesis)
                                                </option>
                                                <option value="2192">Alex Kidd: High-Tech World (SMS)</option>
                                                <option value="1847">Alex Kidd: The Lost Stars (SMS)</option>
                                                <option value="981">ALF (SMS)</option>
                                                <option value="1014">Alfred Chicken (NES)</option>
                                                <option value="2102">Alien 3 (SMS)</option>
                                                <option value="1015">Alien 3 (NES)</option>
                                                <option value="2083">Alien 3 (Genesis)</option>
                                                <option value="795">Alien Carnage (DOS)</option>
                                                <option value="1426">Alien Hominid (GBA)</option>
                                                <option value="555">Alien Soldier (Genesis)</option>
                                                <option value="1575">Alien Storm (Genesis)</option>
                                                <option value="1503">Alien Syndrome (SMS)</option>
                                                <option value="2188">Aliens: Neoplasma (ZXS)</option>
                                                <option value="600">Alisia Dragoon (Genesis)</option>
                                                <option value="1435">Alter Ego (NES)</option>
                                                <option value="92">Altered Beast (Genesis)</option>
                                                <option value="1737">Altered Space: A 3-D Alien Adventure (GB)
                                                </option>
                                                <option value="322">Amagon (NES)</option>
                                                <option value="1016">American Gladiators (NES)</option>
                                                <option value="1216">An American Tail: Fievel Goes West (SNES)
                                                </option>
                                                <option value="2215">Angry Birds (NES)</option>
                                                <option value="2214">Angry Birds (Nice Code) (NES)</option>
                                                <option value="534">Animaniacs (SNES)</option>
                                                <option value="2048">Animorphs: Shattered Reality (PSX)</option>
                                                <option value="848">Antarctic Adventure (MSX)</option>
                                                <option value="1585">Anubis II (Wii)</option>
                                                <option value="1680">Apple Cider Spider (AppleII)</option>
                                                <option value="1077">Archon: The Light and the Dark (NES)</option>
                                                <option value="544">Ardy Lightfoot (SNES)</option>
                                                <option value="988">Argos no Juujiken (SMS)</option>
                                                <option value="63">Arkanoid (NES)</option>
                                                <option value="1893">Arm Wrestling (Arcade)</option>
                                                <option value="1558">Armadillo (NES)</option>
                                                <option value="2202">Armored Core (PSX)</option>
                                                <option value="1629">Arsene Lupin the 3rd - Babiron no Ougon
                                                    Densetsu (MSX)</option>
                                                <option value="847">Arsene Lupin the 3rd and the Castle of
                                                    Cagliostro (MSX)</option>
                                                <option value="479">Arumana no Kiseki (FDS)</option>
                                                <option value="1409">Astérix (SMS)</option>
                                                <option value="721">Astérix (NES)</option>
                                                <option value="1902">Astérix &amp; Obélix (SNES)</option>
                                                <option value="875">Astérix &amp; Obélix: Bash Them All! (GBA)
                                                </option>
                                                <option value="1301">Astérix and the Great Rescue (Genesis)</option>
                                                <option value="2001">Astérix: Search for Dogmatix (GBC)</option>
                                                <option value="1970">Astérix: The Gallic War (PSX)</option>
                                                <option value="1829">Astro Robo Sasa (NES)</option>
                                                <option value="90">Astyanax (NES)</option>
                                                <option value="23">Atlantis no Nazo (NES)</option>
                                                <option value="1691">Atlantis: The Lost Empire (GBA)</option>
                                                <option value="1480">Attack of the Killer Tomatoes (NES)</option>
                                                <option value="1024">Avatar: The Last Airbender (GBA)</option>
                                                <option value="614">Avenging Spirit (GB)</option>
                                                <option value="1021">Avoid the Noid (DOS)</option>
                                                <option value="2094">Axiom Verge (Linux)</option>
                                                <option value="617">Azure Dreams (PSX)</option>
                                                <option value="1935">B.C. Dash (Uzebox)</option>
                                                <option value="1974">B.C.'s Quest for Tires (Coleco)</option>
                                                <option value="685">B.O.B. (Genesis)</option>
                                                <option value="237">B.O.B. (SNES)</option>
                                                <option value="2251">Baba Is You (Linux)</option>
                                                <option value="1849">Baby Felix Halloween (GBC)</option>
                                                <option value="1143">Back to the Future 2 &amp; 3 (NES)</option>
                                                <option value="1517">Back to the Future Part III (Genesis)</option>
                                                <option value="496">Bad Dudes (NES)</option>
                                                <option value="1078">Balloon Fight (NES)</option>
                                                <option value="813">Bananan Ouji no Daibouken (NES)</option>
                                                <option value="511">Banjo-Kazooie (N64)</option>
                                                <option value="1731">Banjo-Kazooie: Grunty's Revenge (GBA)</option>
                                                <option value="1710">Barbie (NES)</option>
                                                <option value="2019">Barbie Game Girl (GB)</option>
                                                <option value="820">Barbie in The 12 Dancing Princesses (DS)
                                                </option>
                                                <option value="1877">Barnstorming (A2600)</option>
                                                <option value="1579">Barnyard Blaster (A7800)</option>
                                                <option value="2242">Baseball (NES)</option>
                                                <option value="365">Batman (Genesis)</option>
                                                <option value="592">Batman (GB)</option>
                                                <option value="57">Batman (NES)</option>
                                                <option value="455">Batman Begins (GBA)</option>
                                                <option value="1070">Batman Forever (Genesis)</option>
                                                <option value="1898">Batman Returns (Genesis)</option>
                                                <option value="1653">Batman Returns (SMS)</option>
                                                <option value="1728">Batman Returns (Lynx)</option>
                                                <option value="437">Batman: Return of the Joker (NES)</option>
                                                <option value="595">Batman: Return of the Joker (GB)</option>
                                                <option value="1926">Batman: The Caped Crusader (C64)</option>
                                                <option value="1471">Battle City (NES)</option>
                                                <option value="2155">Battle City: Zeng Ge Hack (NES)</option>
                                                <option value="1760">Battle Dodge Ball (SNES)</option>
                                                <option value="96">Battle Formula: Super Spy Hunter (NES)</option>
                                                <option value="1785">Battle Kid 2: Mountain of Torment (NES)
                                                </option>
                                                <option value="764">Battle Kid: Fortress of Peril (NES)</option>
                                                <option value="66">Battletoads (NES)</option>
                                                <option value="700">Battletoads (GB)</option>
                                                <option value="558">Battletoads &amp; Double Dragon: The Ultimate
                                                    Team (SNES)</option>
                                                <option value="778">Battletoads &amp; Double Dragon: The Ultimate
                                                    Team (NES)</option>
                                                <option value="206">Battletoads in Battlemaniacs (SNES)</option>
                                                <option value="1273">Bay Route (Arcade)</option>
                                                <option value="1181">Bébé's Kids (SNES)</option>
                                                <option value="1826">Beauty and the Beast (NES)</option>
                                                <option value="164">Beavis and Butt-Head (Genesis)</option>
                                                <option value="1825">Beetlejuice (NES)</option>
                                                <option value="1690">Beyblade: Metal Masters (DS)</option>
                                                <option value="1809">Bible Adventures (NES)</option>
                                                <option value="786">Bible Adventures (Genesis)</option>
                                                <option value="1803">Bible Buffet (NES)</option>
                                                <option value="359">Biker Mice from Mars (SNES)</option>
                                                <option value="1360">Billy Hatcher And The Giant Egg (GC)</option>
                                                <option value="771">Bio Force Ape (NES)</option>
                                                <option value="1041">Bio Menace: Episode 1 - Dr. Mangle's Lab (DOS)
                                                </option>
                                                <option value="404">Bionic Commando (GB)</option>
                                                <option value="681">Bionic Commando (Arcade)</option>
                                                <option value="32">Bionic Commando (NES)</option>
                                                <option value="1398">Bishi Bashi Special (PSX)</option>
                                                <option value="1688">Bishi Bashi Special 2 (PSX)</option>
                                                <option value="1662">Bishi Bashi Special 3: Step Champ (PSX)
                                                </option>
                                                <option value="1199">Bishoujo Senshi Sailor Moon R (GB)</option>
                                                <option value="1618">Blades of Vengeance (Genesis)</option>
                                                <option value="82">Blaster Master (NES)</option>
                                                <option value="408">Blaster Master 2 (Genesis)</option>
                                                <option value="351">Blaster Master: Enemy Below (GBC)</option>
                                                <option value="1706">Blockout (Lynx)</option>
                                                <option value="724">Bloody Wolf (PCE)</option>
                                                <option value="1381">Bobby is Going Home (A2600)</option>
                                                <option value="643">Bobby's World (SNES)</option>
                                                <option value="2234">Boing! (A2600)</option>
                                                <option value="1035">Bomberman 64 (N64)</option>
                                                <option value="1862">Bomberman 64: The Second Attack (N64)</option>
                                                <option value="1927">Bomberman Quest (GBC)</option>
                                                <option value="144">Bonanza Bros. (Genesis)</option>
                                                <option value="2168">Bonk 3: Bonk's Big Adventure (PCE)</option>
                                                <option value="686">Bonk's Adventure (PCE)</option>
                                                <option value="1499">Bonk's Adventure (NES)</option>
                                                <option value="526">Bonk's Revenge (PCE)</option>
                                                <option value="1514">Boogerman: A Pick and Flick Adventure (Genesis)
                                                </option>
                                                <option value="1233">Boomer's Adventure in Asmik World (GB)</option>
                                                <option value="1734">Borderline (SG1000)</option>
                                                <option value="2025">Boston Bomb Club (DOS)</option>
                                                <option value="205">Boulder Dash (NES)</option>
                                                <option value="1508">Boulder Dash EX (GBA)</option>
                                                <option value="2034">Boxing (A2600)</option>
                                                <option value="1939">Boxxle (GB)</option>
                                                <option value="1992">Boxxle II (GB)</option>
                                                <option value="1452">Braid (Windows)</option>
                                                <option value="662">Brain Age (DS)</option>
                                                <option value="1704">Bram Stoker's Dracula (Genesis)</option>
                                                <option value="881">Bram Stoker's Dracula (NES)</option>
                                                <option value="1533">Brandish (SNES)</option>
                                                <option value="1080">BreakThru (NES)</option>
                                                <option value="723">Breath of Fire (SNES)</option>
                                                <option value="568">Breath of Fire II (SNES)</option>
                                                <option value="774">Breath of Fire III (PSX)</option>
                                                <option value="607">Bubba 'n' Stix (Genesis)</option>
                                                <option value="61">Bubble Bobble (NES)</option>
                                                <option value="661">Bubble Ghost (GB)</option>
                                                <option value="1746">Bubsy 3D (PSX)</option>
                                                <option value="222">Bubsy in Claws Encounters of the Furred Kind
                                                    (SNES)</option>
                                                <option value="105">Bucky O'Hare (NES)</option>
                                                <option value="2039">Bugs Bunny &amp; Taz: Time Busters (PSX)
                                                </option>
                                                <option value="2186">BurgerTime (NES)</option>
                                                <option value="953">Bushido Blade 2 (PSX)</option>
                                                <option value="1202">Buster Brothers (GB)</option>
                                                <option value="1061">Buzz and Waldog (NES)</option>
                                                <option value="1627">C64anabalt (C64)</option>
                                                <option value="2198">Cabbage Patch Kids: Adventures in the Park
                                                    (A2600)</option>
                                                <option value="2095">Cabbage Patch Kids: The Patch Puppy Rescue
                                                    (GBA)</option>
                                                <option value="1997">Cacoma Knight in Bizyland (SNES)</option>
                                                <option value="261">Cadash (Genesis)</option>
                                                <option value="1196">California Games (NES)</option>
                                                <option value="899">Captain America and the Avengers (NES)</option>
                                                <option value="1917">Cars (DS)</option>
                                                <option value="1836">Castelian (NES)</option>
                                                <option value="1355">Castle Adventure (DOS)</option>
                                                <option value="173">Castle of Dragon (NES)</option>
                                                <option value="135">Castle of Illusion: Starring Mickey Mouse
                                                    (Genesis)</option>
                                                <option value="553">Castle of Illusion: Starring Mickey Mouse (SMS)
                                                </option>
                                                <option value="7">Castlevania (NES)</option>
                                                <option value="788">Castlevania Chronicles (PSX)</option>
                                                <option value="392">Castlevania II: Belmont's Revenge (GB)</option>
                                                <option value="2073">Castlevania II: Simon's Quest (FDS)</option>
                                                <option value="8">Castlevania II: Simon's Quest (NES)</option>
                                                <option value="55">Castlevania III: Dracula's Curse (NES)</option>
                                                <option value="433">Castlevania Legends (SGB)</option>
                                                <option value="2252">Castlevania Legends (GB)</option>
                                                <option value="253">Castlevania: Aria of Sorrow (GBA)</option>
                                                <option value="485">Castlevania: Bloodlines (Genesis)</option>
                                                <option value="196">Castlevania: Circle of the Moon (GBA)</option>
                                                <option value="562">Castlevania: Dawn of Sorrow (DS)</option>
                                                <option value="264">Castlevania: Dracula X (SNES)</option>
                                                <option value="327">Castlevania: Harmony of Dissonance (GBA)
                                                </option>
                                                <option value="561">Castlevania: Legacy of Darkness (N64)</option>
                                                <option value="872">Castlevania: Order of Ecclesia (DS)</option>
                                                <option value="520">Castlevania: Portrait of Ruin (DS)</option>
                                                <option value="547">Castlevania: Rondo of Blood (PCECD)</option>
                                                <option value="2054">Castlevania: Spectral Interlude (ZXS)</option>
                                                <option value="535">Castlevania: Symphony of the Night (Saturn)
                                                </option>
                                                <option value="497">Castlevania: Symphony of the Night (PSX)
                                                </option>
                                                <option value="1932">Castlevania: The Adventure ReBirth (Wii)
                                                </option>
                                                <option value="1231">Catrap (GB)</option>
                                                <option value="1407">Catwoman (GBC)</option>
                                                <option value="818">Cave Story (Windows)</option>
                                                <option value="1638">CD-Man Version 2.0 (DOS)</option>
                                                <option value="2115">Celeste (Linux)</option>
                                                <option value="1208">Chack'n Pop (NES)</option>
                                                <option value="263">Chakan: The Forever Man (Genesis)</option>
                                                <option value="495">Chameleon Twist (N64)</option>
                                                <option value="1007">Chameleon Twist 2 (N64)</option>
                                                <option value="1711">Cheese Cat-Astrophe Starring Speedy Gonzales
                                                    (SMS)</option>
                                                <option value="830">Cheetahmen II (NES)</option>
                                                <option value="2044">Chester Cheetah: Too Cool to Fool (SNES)
                                                </option>
                                                <option value="2030">Chester Cheetah: Wild Wild Quest (Genesis)
                                                </option>
                                                <option value="2097">Chiki Chiki Boys (Genesis)</option>
                                                <option value="30">Chip 'n Dale: Rescue Rangers (NES)</option>
                                                <option value="31">Chip 'n Dale: Rescue Rangers 2 (NES)</option>
                                                <option value="1938">Chip-chan Kick! (PCFX)</option>
                                                <option value="756">Chocobo no Fushigi na Dungeon (PSX)</option>
                                                <option value="697">Chocobo Racing (PSX)</option>
                                                <option value="1913">Choplifter (C64)</option>
                                                <option value="1560">Choplifter (A7800)</option>
                                                <option value="319">Choujin Sentai Jetman (NES)</option>
                                                <option value="251">Chrono Trigger (SNES)</option>
                                                <option value="117">Chuck Rock (Genesis)</option>
                                                <option value="641">Chuck Rock II: Son of Chuck (Genesis)</option>
                                                <option value="1846">Circus Caper (NES)</option>
                                                <option value="86">Circus Charlie (NES)</option>
                                                <option value="2040">City Connection (NES)</option>
                                                <option value="650">Civilization, Sid Meier's (SNES)</option>
                                                <option value="187">Clash at Demonhead (NES)</option>
                                                <option value="1613">classNameic Kong Complete (SNES)</option>
                                                <option value="1218">Claymates (SNES)</option>
                                                <option value="2057">Cliffhanger (NES)</option>
                                                <option value="1853">Clock Tower (SNES)</option>
                                                <option value="2052">Clockwork Knight (Saturn)</option>
                                                <option value="1209">Clu Clu Land (NES)</option>
                                                <option value="1246">Club Penguin: Elite Penguin Force (DS)</option>
                                                <option value="1602">Club Penguin: Elite Penguin Force: Herbert's
                                                    Revenge (DS)</option>
                                                <option value="879">Clue (SNES)</option>
                                                <option value="1504">Cobra Command (NES)</option>
                                                <option value="81">Cobra Triangle (NES)</option>
                                                <option value="1694">Coca Cola Kid (GG)</option>
                                                <option value="1089">Cocoron (NES)</option>
                                                <option value="969">Code Name: Viper (NES)</option>
                                                <option value="156">Comix Zone (Genesis)</option>
                                                <option value="1057">Commander Keen: Episode 1 - Marooned on Mars
                                                    (DOS)</option>
                                                <option value="1050">Commander Keen: Episode 2 - The Earth Explodes
                                                    (DOS)</option>
                                                <option value="822">Commander Keen: Episode 3 - Keen Must Die! (DOS)
                                                </option>
                                                <option value="1006">Commander Keen: Episode 4 - Secret of the
                                                    Oracle (DOS)</option>
                                                <option value="630">Commander Keen: Episode 5 - The Armageddon
                                                    Machine (DOS)</option>
                                                <option value="1029">Commander Keen: Episode 6 - Aliens Ate My Baby
                                                    Sitter! (DOS)</option>
                                                <option value="1516">Commander Keen: Keen Dreams (DOS)</option>
                                                <option value="2061">Conan: The Mysteries of Time (NES)</option>
                                                <option value="1923">Congo Bongo (C64)</option>
                                                <option value="1221">Congo's Caper (SNES)</option>
                                                <option value="369">Conquest of the Crystal Palace (NES)</option>
                                                <option value="748">Contra (MSX)</option>
                                                <option value="18">Contra (NES)</option>
                                                <option value="543">Contra 4 (DS)</option>
                                                <option value="658">Contra Force (NES)</option>
                                                <option value="94">Contra III: The Alien Wars (SNES)</option>
                                                <option value="93">Contra: Hard Corps (Genesis)</option>
                                                <option value="1924">Contra: The Alien Wars (GB)</option>
                                                <option value="1630">Cosmo Police: Galivan (NES)</option>
                                                <option value="1165">Cosmo Tank (GB)</option>
                                                <option value="1839">Crack Down (Genesis)</option>
                                                <option value="1090">Crash 'n' the Boys: Street Challenge (NES)
                                                </option>
                                                <option value="609">Crash Bandicoot (PSX)</option>
                                                <option value="608">Crash Bandicoot 2: Cortex Strikes Back (PSX)
                                                </option>
                                                <option value="707">Crash Bandicoot 2: N-Tranced (GBA)</option>
                                                <option value="859">Crash Bandicoot: The Huge Adventure (GBA)
                                                </option>
                                                <option value="1431">Crash Bandicoot: Warped (PSX)</option>
                                                <option value="1754">Crash Team Racing (PSX)</option>
                                                <option value="1709">Cratermaze (PCE)</option>
                                                <option value="978">Crayon Shin-Chan 4 (SGB)</option>
                                                <option value="2027">Crazy Balloon (A2600)</option>
                                                <option value="1634">Crazy Climber (WSWAN)</option>
                                                <option value="1552">Crazy Taxi (GC)</option>
                                                <option value="1438">Croc 2 (GBC)</option>
                                                <option value="743">Croc: Legend of the Gobbos (PSX)</option>
                                                <option value="890">Cross Fire (NES)</option>
                                                <option value="569">Crusader of Centy (Genesis)</option>
                                                <option value="2096">Crystal Beans from Dungeon Explorer (SNES)
                                                </option>
                                                <option value="2031">Crystal Caves: Volume 1 - Troubles with
                                                    Twibbles (DOS)</option>
                                                <option value="207">Crystalis (NES)</option>
                                                <option value="1150">Cybernoid: The Fighting Machine (NES)</option>
                                                <option value="575">Cyborg 009 (SNES)</option>
                                                <option value="459">Cyborg Hunter (SMS)</option>
                                                <option value="2016">D/Generation (DOS)</option>
                                                <option value="706">Daffy Duck: Fowl Play (GBC)</option>
                                                <option value="1696">Daffy Duck: The Marvin Missions (GB)</option>
                                                <option value="682">Daffy Duck: The Marvin Missions (SGB)</option>
                                                <option value="356">Daffy Duck: The Marvin Missions (SNES)</option>
                                                <option value="2085">Dahna: Megami Tanjou (Genesis)</option>
                                                <option value="1944">DAIVA Story 6: Nirsartia no Gyokuza (NES)
                                                </option>
                                                <option value="1689">Danan: The Jungle Fighter (SMS)</option>
                                                <option value="730">Dangerous Dave (DOS)</option>
                                                <option value="153">Dark Castle (Genesis)</option>
                                                <option value="1648">Darkman (NES)</option>
                                                <option value="69">Darkwing Duck (NES)</option>
                                                <option value="1392">Dash Galaxy in the Alien Asylum (NES)</option>
                                                <option value="125">Déjà Vu (NES)</option>
                                                <option value="295">Déjà Vu I &amp; II: The Casebooks of Ace Harding
                                                    (GBC)</option>
                                                <option value="106">Deadly Towers (NES)</option>
                                                <option value="1252">Death Duel (Genesis)</option>
                                                <option value="522">DecapAttack (Genesis)</option>
                                                <option value="2184">Decathlon (C64)</option>
                                                <option value="1472">Defender of the Crown (NES)</option>
                                                <option value="2212">Delta Warp (NGP)</option>
                                                <option value="1326">Dementium: The Ward (DS)</option>
                                                <option value="312">Demon Sword (NES)</option>
                                                <option value="460">Demon's Crest (SNES)</option>
                                                <option value="1722">Denki Blocks! (GBA)</option>
                                                <option value="701">Densetsu no Stafy (GBA)</option>
                                                <option value="490">Desert Demolition (Genesis)</option>
                                                <option value="291">Destiny of an Emperor (NES)</option>
                                                <option value="1934">Devil Island (GBC)</option>
                                                <option value="2221">Devilish: The Next Possession (Genesis)
                                                </option>
                                                <option value="1948">Diamond Mine (C64)</option>
                                                <option value="395">Diddy Kong Racing (N64)</option>
                                                <option value="1454">Die Hard (NES)</option>
                                                <option value="664">Digger: The Legend of the Lost City (NES)
                                                </option>
                                                <option value="1369">Digimon Battle Spirit (GBA)</option>
                                                <option value="2208">Digimon Ruby (GBA)</option>
                                                <option value="1619">Digimon Sapphire (GBA)</option>
                                                <option value="1789">DinoCity (SNES)</option>
                                                <option value="2012">Discworld II: Mortality Bytes! (PSX)</option>
                                                <option value="2160">Disney's 102 Dalmatians: Puppies to the Rescue
                                                    (PSX)</option>
                                                <option value="798">Disney's Bonkers (SNES)</option>
                                                <option value="1890">Disney's Extreme Skate Adventure (GC)</option>
                                                <option value="980">Disney's Hercules (PSX)</option>
                                                <option value="2070">Disney's Lilo &amp; Stitch (GBA)</option>
                                                <option value="2125">Disney's Magical Quest 3 Starring Mickey &amp;
                                                    Donald (SNES)</option>
                                                <option value="1497">Disney's The Jungle Book (SNES)</option>
                                                <option value="1720">Disney's The Lion King 1 1/2 (GBA)</option>
                                                <option value="500">Disney's Toy Story (Genesis)</option>
                                                <option value="2011">Disney's Toy Story (SNES)</option>
                                                <option value="384">Dizzy the Adventurer (NES)</option>
                                                <option value="1985">DK: King of Swing (GBA)</option>
                                                <option value="1551">Doc Louis's Punch-Out!! (Wii)</option>
                                                <option value="1540">Dodge 'Em (A2600)</option>
                                                <option value="1197">Dokapon Monster Hunter (GBA)</option>
                                                <option value="1770">Doki! Doki! Yuuenchi (NES)</option>
                                                <option value="2166">Donald Land (NES)</option>
                                                <option value="2107">Donkey Kong (INTV)</option>
                                                <option value="2106">Donkey Kong (ZXS)</option>
                                                <option value="1702">Donkey Kong (A2600)</option>
                                                <option value="2105">Donkey Kong (A7800)</option>
                                                <option value="2241">Donkey Kong (GBC)</option>
                                                <option value="2017">Donkey Kong (Arcade)</option>
                                                <option value="210">Donkey Kong (NES)</option>
                                                <option value="2108">Donkey Kong (Coleco)</option>
                                                <option value="1883">Donkey Kong &amp; Donkey Kong Jr. (NES)
                                                </option>
                                                <option value="2109">Donkey Kong (Atarisoft) (C64)</option>
                                                <option value="866">Donkey Kong 3 (NES)</option>
                                                <option value="1657">Donkey Kong 5: The Journey of Over Time and
                                                    Space (GBC)</option>
                                                <option value="1901">Donkey Kong 64 (N64)</option>
                                                <option value="132">Donkey Kong Country (SNES)</option>
                                                <option value="1931">Donkey Kong Country (GBA)</option>
                                                <option value="2171">Donkey Kong Country 2 (GBA)</option>
                                                <option value="258">Donkey Kong Country 2: Diddy's Kong Quest (SNES)
                                                </option>
                                                <option value="252">Donkey Kong Country 3: Dixie Kong's Double
                                                    Trouble! (SNES)</option>
                                                <option value="239">Donkey Kong Jr. (NES)</option>
                                                <option value="1909">Donkey Kong Junior (A2600)</option>
                                                <option value="1033">Donkey Kong Land (GB)</option>
                                                <option value="619">Donkey Kong Land 2 (SGB)</option>
                                                <option value="2131">Donkey Kong Land III (GBC)</option>
                                                <option value="2068">Donkey Kong, DK Jr., DK 3 &amp; DK Jr. Math
                                                    (NES)</option>
                                                <option value="1645">Donkey Kong: Original Edition (NES)</option>
                                                <option value="2074">Doom 64 (N64)</option>
                                                <option value="1708">Doom II: Hell on Earth (DOOM)</option>
                                                <option value="2204">Doom Troopers: Mutant Chronicles (Genesis)
                                                </option>
                                                <option value="1952">Dora the Explorer: Super Spies (GBA)</option>
                                                <option value="1979">Dora the Explorer: The Search for Pirate Pig's
                                                    Treasure (GBA)</option>
                                                <option value="1544">Doraemon: Midori no Wakusei Dokidoki
                                                    Daikyuushutsu! (GBA)</option>
                                                <option value="656">DoReMi Fantasy: Milon no Dokidoki Daibouken
                                                    (SNES)</option>
                                                <option value="1783">Dottori Kun (Arcade)</option>
                                                <option value="1022">Double Dare (NES)</option>
                                                <option value="1564">Double Dragon (Genesis)</option>
                                                <option value="2006">Double Dragon (Arcade)</option>
                                                <option value="50">Double Dragon (NES)</option>
                                                <option value="51">Double Dragon II: The Revenge (NES)</option>
                                                <option value="594">Double Dragon II: The Revenge (PCECD)</option>
                                                <option value="52">Double Dragon III: The Sacred Stones (NES)
                                                </option>
                                                <option value="1010">Double Moon Densetsu (NES)</option>
                                                <option value="1637">Doug's Big Game (GBC)</option>
                                                <option value="1953">Dr. Franken (GB)</option>
                                                <option value="1532">Dr. Franken II (GB)</option>
                                                <option value="832">Dr. Jekyll and Mr. Hyde (NES)</option>
                                                <option value="518">Dr. Mario (NES)</option>
                                                <option value="2220">Dr. Muto (GBA)</option>
                                                <option value="1108">Dr. Robotnik's Mean Bean Machine (Genesis)
                                                </option>
                                                <option value="1946">Drag Race (Arcade)</option>
                                                <option value="1217">Dragon Ball Z: Buu's Fury (GBA)</option>
                                                <option value="949">Dragon Ball Z: Super Gokuden: Totsugeki-hen
                                                    (SNES)</option>
                                                <option value="2032">Dragon Ball Z: Super Saiya Densetsu (SNES)
                                                </option>
                                                <option value="868">Dragon Ball Z: The Legacy of Goku (GBA)</option>
                                                <option value="1477">Dragon Ball Z: Ultimate Battle 22 (PSX)
                                                </option>
                                                <option value="216">Dragon Ball: Advanced Adventure (GBA)</option>
                                                <option value="739">Dragon Crystal (SMS)</option>
                                                <option value="514">Dragon Egg! (PCE)</option>
                                                <option value="300">Dragon Fighter (NES)</option>
                                                <option value="2029">Dragon Quest IX: Sentinels of the Starry Skies
                                                    (DS)</option>
                                                <option value="992">Dragon Quest V (SNES)</option>
                                                <option value="1354">Dragon Unit (Arcade)</option>
                                                <option value="1565">Dragon View (SNES)</option>
                                                <option value="67">Dragon Warrior (NES)</option>
                                                <option value="281">Dragon Warrior II (NES)</option>
                                                <option value="367">Dragon Warrior III (NES)</option>
                                                <option value="277">Dragon Warrior IV (NES)</option>
                                                <option value="405">Dragon Warrior Monsters (GBC)</option>
                                                <option value="1367">Dragon Warrior Monsters 2: Tara's Adventure
                                                    (GBC)</option>
                                                <option value="776">Dragon's Lair (SNES)</option>
                                                <option value="95">Dragon's Lair (NES)</option>
                                                <option value="1531">Dragon: The Bruce Lee Story (SNES)</option>
                                                <option value="2028">Dragonfire (Coleco)</option>
                                                <option value="1910">Dragster (A2600)</option>
                                                <option value="1812">Drake &amp; Josh (GBA)</option>
                                                <option value="1433">Driar (NES)</option>
                                                <option value="1269">Drill Dozer (GBA)</option>
                                                <option value="1140">Duck Hunt (NES)</option>
                                                <option value="26">DuckTales (NES)</option>
                                                <option value="1906">DuckTales (GB)</option>
                                                <option value="27">DuckTales 2 (NES)</option>
                                                <option value="1592">Duke Nukem 3D (Genesis)</option>
                                                <option value="397">Duke Nukem 64 (N64)</option>
                                                <option value="2036">Duke Nukem II (DOS)</option>
                                                <option value="649">Duke Nukem: Episode 1 - Shrapnel City (DOS)
                                                </option>
                                                <option value="1794">Duke Nukem: Episode 2 - Mission: Moonbase (DOS)
                                                </option>
                                                <option value="2021">Duke Nukem: Episode 3 - Trapped in the Future!
                                                    (DOS)</option>
                                                <option value="695">Dungeon Explorer (PCE)</option>
                                                <option value="475">Dungeon Magic: Sword of the Elements (NES)
                                                </option>
                                                <option value="672">Dungeons &amp; Dragons: Warriors of the Eternal
                                                    Sun (Genesis)</option>
                                                <option value="380">Dynamite Headdy (Genesis)</option>
                                                <option value="1372">E.T.: The Extra-Terrestrial (A2600)</option>
                                                <option value="565">E.V.O.: Search for Eden (SNES)</option>
                                                <option value="330">Earnest Evans (Genesis)</option>
                                                <option value="296">EarthBound (SNES)</option>
                                                <option value="527">EarthBound Beginnings (NES)</option>
                                                <option value="232">Earthworm Jim (Genesis)</option>
                                                <option value="1724">Earthworm Jim 2 (Genesis)</option>
                                                <option value="2203">Earthworm Jim 3D (N64)</option>
                                                <option value="716">Earthworm Jim: Special Edition (SegaCD)</option>
                                                <option value="228">Ecco the Dolphin (Genesis)</option>
                                                <option value="466">Ecco: The Tides of Time (Genesis)</option>
                                                <option value="1821">Ed, Edd n Eddy: The Mis-Edventures (GC)
                                                </option>
                                                <option value="1718">Eek! The Cat (SNES)</option>
                                                <option value="150">Eggerland (FDS)</option>
                                                <option value="2231">Eggsplode (NES)</option>
                                                <option value="956">Ehrgeiz: God Bless The Ring (PSX)</option>
                                                <option value="763">Einhänder (PSX)</option>
                                                <option value="233">El Viento (Genesis)</option>
                                                <option value="257">Elevator Action (NES)</option>
                                                <option value="2023">Elevator Action -Returns- (Saturn)</option>
                                                <option value="2187">Enduro Racer (SMS)</option>
                                                <option value="687">Epic Pinball (DOS)</option>
                                                <option value="1491">Eryi's Action (Windows)</option>
                                                <option value="2191">Esper Dream (FDS)</option>
                                                <option value="442">ESWAT: City Under Siege (Genesis)</option>
                                                <option value="733">Evel Knievel (GBC)</option>
                                                <option value="990">Eversion (Windows)</option>
                                                <option value="635">Ex-Mutants (Genesis)</option>
                                                <option value="68">Excitebike (NES)</option>
                                                <option value="548">Extra Mario Bros. (NES)</option>
                                                <option value="276">F-Zero (SNES)</option>
                                                <option value="834">F-Zero X (N64)</option>
                                                <option value="1226">F-Zero: Maximum Velocity (GBA)</option>
                                                <option value="498">Family Feud (SNES)</option>
                                                <option value="1878">Fantasia (Genesis)</option>
                                                <option value="337">Fantasy Zone (NES)</option>
                                                <option value="1340">Fantasy Zone II: The Tears of Opa-Opa (SMS)
                                                </option>
                                                <option value="414">Fatal Labyrinth (Genesis)</option>
                                                <option value="163">Faxanadu (NES)</option>
                                                <option value="103">Felix the Cat (NES)</option>
                                                <option value="1697">Fester's Quest (NES)</option>
                                                <option value="1763">Fighter Destiny 2 (N64)</option>
                                                <option value="1762">Fighters Destiny (N64)</option>
                                                <option value="1654">Final Doom (DOOM)</option>
                                                <option value="202">Final Fantasy (NES)</option>
                                                <option value="270">Final Fantasy Adventure (GB)</option>
                                                <option value="1677">Final Fantasy II (NES)</option>
                                                <option value="737">Final Fantasy III (NES)</option>
                                                <option value="454">Final Fantasy IV (SNES)</option>
                                                <option value="1013">Final Fantasy IX (PSX)</option>
                                                <option value="705">Final Fantasy Legend II (GB)</option>
                                                <option value="250">Final Fantasy Mystic Quest (SNES)</option>
                                                <option value="1957">Final Fantasy Tactics Advance (GBA)</option>
                                                <option value="394">Final Fantasy V (SNES)</option>
                                                <option value="654">Final Fantasy V &amp; VI (SNES)</option>
                                                <option value="287">Final Fantasy VI (SNES)</option>
                                                <option value="2165">Final Fantasy VII (PSX)</option>
                                                <option value="792">Final Fantasy VIII (PSX)</option>
                                                <option value="1986">Final Fantasy: Crystal Chronicles (GC)</option>
                                                <option value="862">Final Fight (Arcade)</option>
                                                <option value="318">Final Fight 3 (SNES)</option>
                                                <option value="1904">Final Zone II (PCECD)</option>
                                                <option value="1445">Finding Nemo (GBA)</option>
                                                <option value="1098">Fire 'n Ice (NES)</option>
                                                <option value="806">Fire Emblem (GBA)</option>
                                                <option value="1410">Fire Emblem: Fuuin no Tsurugi (GBA)</option>
                                                <option value="1588">Fire Emblem: Shadow Dragon (DS)</option>
                                                <option value="462">Fire Emblem: The Sacred Stones (GBA)</option>
                                                <option value="2143">FireStriker (SNES)</option>
                                                <option value="1418">Fisher-Price: Firehouse Rescue (NES)</option>
                                                <option value="262">Fist of the North Star (NES)</option>
                                                <option value="160">Flashback: The Quest for Identity (Genesis)
                                                </option>
                                                <option value="916">Flicky (Genesis)</option>
                                                <option value="2158">Forbidden Forest (C64)</option>
                                                <option value="2046">Formation Z (NES)</option>
                                                <option value="1046">Fortified Zone (GB)</option>
                                                <option value="1380">Frankenstein's Monster (A2600)</option>
                                                <option value="1670">Frankenstein: The Monster Returns (NES)
                                                </option>
                                                <option value="60">Friday the 13th (NES)</option>
                                                <option value="1539">Frogger (A2600)</option>
                                                <option value="1951">Frogger (C64)</option>
                                                <option value="1423">Frogger (MSX)</option>
                                                <option value="1449">Frogger 2 (GBC)</option>
                                                <option value="810">Frogger 2: Swampy's Revenge (PSX)</option>
                                                <option value="1511">Frogger II: ThreeeDeep! (Coleco)</option>
                                                <option value="1475">Frogger's Adventures: The Rescue (GC)</option>
                                                <option value="1554">Frogger: He's Back! (PSX)</option>
                                                <option value="833">Front Line (NES)</option>
                                                <option value="1972">Front Line (Arcade)</option>
                                                <option value="1788">Front Mission Series: Gun Hazard (SNES)
                                                </option>
                                                <option value="2237">FTL: Faster Than Light (Linux)</option>
                                                <option value="2247">Fushigi no Dungeon: Fuurai no Shiren GB:
                                                    Tsukikage Mura no Kaibu (GBC)</option>
                                                <option value="2253">Fushigi no Yume no Alice (PCE)</option>
                                                <option value="1420">Futari wa Precure Max Heart: Maji? Maji!? Fight
                                                    de IN Janai (GBA)</option>
                                                <option value="292">G.I. Joe (NES)</option>
                                                <option value="652">G.I. Joe: The Atlantis Factor (NES)</option>
                                                <option value="1376">Gain Ground (Genesis)</option>
                                                <option value="1412">Galaga (MSX)</option>
                                                <option value="1413">Galaga (A7800)</option>
                                                <option value="1414">Galaxian (MSX)</option>
                                                <option value="1973">Game &amp; Watch Collection: Donkey Kong (DS)
                                                </option>
                                                <option value="2223">Game Boy Camera (GB)</option>
                                                <option value="476">Ganbare Goemon 2 (SNES)</option>
                                                <option value="744">Ganryu (Arcade)</option>
                                                <option value="599">Ganso!! Yanchamaru (GB)</option>
                                                <option value="1705">Garfield and His Nine Lives (GBA)</option>
                                                <option value="434">Garfield: Caught in the Act (Genesis)</option>
                                                <option value="1011">Gargoyle's Quest II: The Demon Darkness (NES)
                                                </option>
                                                <option value="259">Gargoyle's Quest: Ghosts'n Goblins (GB)</option>
                                                <option value="218">Gauntlet (NES)</option>
                                                <option value="855">Gekisou Sentai Car Ranger (SNES)</option>
                                                <option value="1925">Generations Lost (Genesis)</option>
                                                <option value="2196">Genpei Touma Den (PCE)</option>
                                                <option value="983">George Foreman's KO Boxing (SMS)</option>
                                                <option value="494">Gex 3: Deep Cover Gecko (N64)</option>
                                                <option value="572">Gex 3: Deep Pocket Gecko (GBC)</option>
                                                <option value="363">Gex 64: Enter the Gecko (N64)</option>
                                                <option value="571">Ghostbusters (NES)</option>
                                                <option value="1281">Ghostbusters (Genesis)</option>
                                                <option value="1744">Ghosts 'n Goblins (Arcade)</option>
                                                <option value="6">Ghosts 'n Goblins (NES)</option>
                                                <option value="505">Ghoul School (NES)</option>
                                                <option value="524">Ghouls 'n Ghosts (Arcade)</option>
                                                <option value="506">Ghouls 'n Ghosts (Genesis)</option>
                                                <option value="102">Gimmick! (NES)</option>
                                                <option value="373">Glover (N64)</option>
                                                <option value="1881">Go! Go! Tank (GB)</option>
                                                <option value="225">Gods (Genesis)</option>
                                                <option value="1386">Goemon's Great Adventure (N64)</option>
                                                <option value="116">Golden Axe (Genesis)</option>
                                                <option value="1827">Golden Axe (Arcade)</option>
                                                <option value="1263">Golden Axe III (Genesis)</option>
                                                <option value="984">Golden Axe Warrior (SMS)</option>
                                                <option value="1678">Golden Sun (GBA)</option>
                                                <option value="410">GoldenEye 007 (N64)</option>
                                                <option value="1900">GoldenEye: 007 (Wii)</option>
                                                <option value="1919">Golf (NES)</option>
                                                <option value="1091">Golgo 13: Top Secret Episode (NES)</option>
                                                <option value="1805">Gomola Speed (PCE)</option>
                                                <option value="124">Goof Troop, Disney's (SNES)</option>
                                                <option value="838">Gordo 106: The Mutated Lab Monkey (Lynx)
                                                </option>
                                                <option value="1569">Gotcha! The Sport! (NES)</option>
                                                <option value="21">Gradius (NES)</option>
                                                <option value="122">Gradius III (SNES)</option>
                                                <option value="2007">Grand Prix (A2600)</option>
                                                <option value="951">Grand Theft Auto 2 (PSX)</option>
                                                <option value="584">Grand Theft Auto: Chinatown Wars (DS)</option>
                                                <option value="28">Gremlins 2: The New Batch (NES)</option>
                                                <option value="1771">Gremlins 2: The New Batch (GB)</option>
                                                <option value="1572">GS Mikami: Joreishi wa Nice Body (SNES)
                                                </option>
                                                <option value="110">Guerrilla War (NES)</option>
                                                <option value="1519">Guilty Gear (PSX)</option>
                                                <option value="1965">Guilty Gear Petit (WSWAN)</option>
                                                <option value="1640">Guilty Gear Petit 2 (WSWAN)</option>
                                                <option value="1813">Guilty Gear X: Advance Edition (GBA)</option>
                                                <option value="1777">Gummy Bears Minigolf (Wii)</option>
                                                <option value="1212">Gumshoe (NES)</option>
                                                <option value="118">Gunstar Heroes (Genesis)</option>
                                                <option value="576">Gunstar Super Heroes (GBA)</option>
                                                <option value="1215">Gyromite (NES)</option>
                                                <option value="1434">H.E.R.O. (A2600)</option>
                                                <option value="559">Hagane (SNES)</option>
                                                <option value="747">Hajime no Ippo: The Fighting! (GBA)</option>
                                                <option value="1807">Halo 2600 (A2600)</option>
                                                <option value="382">Hammerin' Harry (NES)</option>
                                                <option value="1534">Hamtaro: Ham-Hams Unite! (GBC)</option>
                                                <option value="1092">Hard Relay Mario (NES)</option>
                                                <option value="2089">Harry Potter 2: The Black Art Wtrstle Edition
                                                    (GBC)</option>
                                                <option value="1723">Harry Potter and the Chamber of Secrets (GC)
                                                </option>
                                                <option value="1921">Harry Potter and the Chamber of Secrets (GBC)
                                                </option>
                                                <option value="1339">Harry Potter and the Sorcerer's Stone (GBA)
                                                </option>
                                                <option value="1399">Harry Potter and the Sorcerer's Stone (GBC)
                                                </option>
                                                <option value="1905">Harry Potter and the Sorcerer's Stone (PSX)
                                                </option>
                                                <option value="2230">Harvest Moon 3 GBC (GBC)</option>
                                                <option value="1476">Haunted House (MSX)</option>
                                                <option value="2194">Heart of Darkness (PSX)</option>
                                                <option value="529">Heart of the Alien (SegaCD)</option>
                                                <option value="1333">Heavy Shreddin' (NES)</option>
                                                <option value="1831">Hero's Quest (DOS)</option>
                                                <option value="2190">Hexcite: The Shapes of Victory (GBC)</option>
                                                <option value="1717">Hey Arnold! The Movie (GBA)</option>
                                                <option value="22">Hi no Tori: Gaou no Bouken (NES)</option>
                                                <option value="1236">High Seas Havoc (Genesis)</option>
                                                <option value="489">High Speed (NES)</option>
                                                <option value="1176">Hikaru no Go (GBA)</option>
                                                <option value="715">Hocus Pocus (DOS)</option>
                                                <option value="2147">Hogs of War (PSX)</option>
                                                <option value="674">Hokuto no Ken (SMS)</option>
                                                <option value="275">Holy Diver (NES)</option>
                                                <option value="1180">Home Alone 2: Lost in New York (Genesis)
                                                </option>
                                                <option value="1158">Home Alone 2: Lost in New York (NES)</option>
                                                <option value="299">Hook (SNES)</option>
                                                <option value="666">Hook (NES)</option>
                                                <option value="1828">Hudson Hawk (NES)</option>
                                                <option value="1631">Hugo 2 1/2 (GBC)</option>
                                                <option value="1432">Hunchback (MSX)</option>
                                                <option value="344">Hydlide (NES)</option>
                                                <option value="1515">Hyper Princess Pitch (Windows)</option>
                                                <option value="2255">I Wanna Be The Boshy (Windows)</option>
                                                <option value="2058">I Want My Mommy (A2600)</option>
                                                <option value="133">Ice Climber (NES)</option>
                                                <option value="2132">Iji (Windows)</option>
                                                <option value="1547">Ikachan (Windows)</option>
                                                <option value="1922">Ikari Warriors (NES)</option>
                                                <option value="2249">Ikari Warriors II: Victory Road (NES)</option>
                                                <option value="1362">Ikaruga (GC)</option>
                                                <option value="211">Illusion of Gaia (SNES)</option>
                                                <option value="1966">Impossible Mission (SMS)</option>
                                                <option value="582">Indiana Jones and the Last Crusade (Genesis)
                                                </option>
                                                <option value="817">Indiana Jones and the Last Crusade (Taito) (NES)
                                                </option>
                                                <option value="2127">INK (Linux)</option>
                                                <option value="470">Inspector Gadget (SNES)</option>
                                                <option value="589">Instruments of Chaos starring Young Indiana
                                                    Jones (Genesis)</option>
                                                <option value="597">International Superstar Soccer Deluxe (SNES)
                                                </option>
                                                <option value="755">Invasion of the Zombie Monsters (MSX)</option>
                                                <option value="1483">Inversion (NES)</option>
                                                <option value="1775">Iron Man (Genesis)</option>
                                                <option value="1470">Iron Tank: The Invasion of Normandy (NES)
                                                </option>
                                                <option value="185">Ironsword: Wizards &amp; Warriors II (NES)
                                                </option>
                                                <option value="2213">It's Mr. Pants (GBA)</option>
                                                <option value="750">Ivy the Kiwi? (DS)</option>
                                                <option value="155">Jackal (NES)</option>
                                                <option value="49">Jackie Chan's Action Kung Fu (NES)</option>
                                                <option value="1982">Jail Break (Arcade)</option>
                                                <option value="1599">James Bond 007: The Duel (Genesis)</option>
                                                <option value="1096">James Bond Jr. (SNES)</option>
                                                <option value="1395">James Bond Jr. (NES)</option>
                                                <option value="1693">James Pond 2: Codename: RoboCod (Genesis)
                                                </option>
                                                <option value="417">James Pond 3: Operation Starfish (Genesis)
                                                </option>
                                                <option value="181">Jaws (NES)</option>
                                                <option value="3">Jazz Jackrabbit (DOS)</option>
                                                <option value="1451">Jetpack (DOS)</option>
                                                <option value="550">Jewel Master (Genesis)</option>
                                                <option value="1639">Jill of the Jungle: Volume I - Jill of the
                                                    Jungle (DOS)</option>
                                                <option value="1991">Jill of the Jungle: Volume II - Jill Goes
                                                    Underground (DOS)</option>
                                                <option value="2053">Jill of the Jungle: Volume III - Jill Saves The
                                                    Prince (DOS)</option>
                                                <option value="1336">Joe &amp; Mac (NES)</option>
                                                <option value="1787">Joe &amp; Mac 2: Lost in the Tropics (SNES)
                                                </option>
                                                <option value="443">John Romero's Daikatana (GBC)</option>
                                                <option value="1699">Johnny Test (DS)</option>
                                                <option value="33">Journey to Silius (NES)</option>
                                                <option value="1614">Joust (NES)</option>
                                                <option value="1937">Joyrider (Uzebox)</option>
                                                <option value="1584">Judge Dredd (SNES)</option>
                                                <option value="2098">Jumpin' Kid: Jack to Mame no Ki Monogatari
                                                    (NES)</option>
                                                <option value="1394">Jumpman Junior (Coleco)</option>
                                                <option value="2176">Junction (Genesis)</option>
                                                <option value="1915">Jungle Hunt (C64)</option>
                                                <option value="1950">Jungle Hunt (Arcade)</option>
                                                <option value="896">Jurassic Park (NES)</option>
                                                <option value="260">Jurassic Park (Genesis)</option>
                                                <option value="1266">Jurassic Park III: Island Attack (GBA)</option>
                                                <option value="1819">Jurassic Park Part 2: The Chaos Continues (GB)
                                                </option>
                                                <option value="2090">Jurassic Park: Rampage Edition (Genesis)
                                                </option>
                                                <option value="857">Jurassic Park: The Lost World (NES)</option>
                                                <option value="1791">Justice League Task Force (SNES)</option>
                                                <option value="1312">Ka-Ge-Ki: Fists of Steel (Genesis)</option>
                                                <option value="87">Kabuki: Quantum Fighter (NES)</option>
                                                <option value="563">Kaeru no Tame ni Kane wa Naru (GB)</option>
                                                <option value="1766">Kaizo Mario Bros. 3 (NES)</option>
                                                <option value="1422">Kaizo Mario World 3 (SNES)</option>
                                                <option value="348">Kaizou Choujin Shubibinman Zero (SNES)</option>
                                                <option value="1334">Kamen no Ninja: Akakage (NES)</option>
                                                <option value="1537">Kangaroo (A2600)</option>
                                                <option value="1065">Kanshaku tamanage Kantarō no Tōkaidō
                                                    Gojūsan-tsugi (NES)</option>
                                                <option value="1960">Kao the Kangaroo (GBA)</option>
                                                <option value="1912">Karate Champ (Arcade)</option>
                                                <option value="1941">Karate Champ: Player vs Player (Arcade)
                                                </option>
                                                <option value="89">Karnov (NES)</option>
                                                <option value="519">Kato Chan &amp; Ken Chan (PCE)</option>
                                                <option value="611">Kaze Kiri: Ninja Action (PCECD)</option>
                                                <option value="2013">Keitai Denjuu Telefang 2: Speed Version (GBA)
                                                </option>
                                                <option value="768">Keitai Denjuu Telefang: Speed Version (GBC)
                                                </option>
                                                <option value="532">Keith Courage in Alpha Zones (PCE)</option>
                                                <option value="290">Kendo Rage (SNES)</option>
                                                <option value="412">Kenseiden (SMS)</option>
                                                <option value="947">Kero Kero Keroppi no Daibouken 2: Donuts Ike ha
                                                    Oosawagi! (NES)</option>
                                                <option value="244">Kick Master (NES)</option>
                                                <option value="887">Kickle Cubicle (NES)</option>
                                                <option value="180">Kid Chameleon (Genesis)</option>
                                                <option value="85">Kid Dracula (NES)</option>
                                                <option value="411">Kid Dracula (GB)</option>
                                                <option value="46">Kid Icarus (NES)</option>
                                                <option value="1248">Kid Klown in Crazy Chase (SNES)</option>
                                                <option value="651">Kid Kool and the Quest for the Seven Wonder
                                                    Herbs (NES)</option>
                                                <option value="48">Kid Niki 2 (NES)</option>
                                                <option value="477">Kid Niki 3 (NES)</option>
                                                <option value="1315">Kid Niki: Radical Ninja (NES)</option>
                                                <option value="1837">Kiki KaiKai (MSX)</option>
                                                <option value="350">Killer Instinct (SNES)</option>
                                                <option value="1416">King &amp; Balloon (MSX)</option>
                                                <option value="325">King Kong 2: Ikari no Megaton Punch (NES)
                                                </option>
                                                <option value="335">King's Bounty (Genesis)</option>
                                                <option value="1144">King's Quest V: Absence Makes the Heart Go
                                                    Yonder! (NES)</option>
                                                <option value="2071">King's Quest: Quest for the Crown (DOS)
                                                </option>
                                                <option value="449">King's Quest: Quest for the Crown (SMS)</option>
                                                <option value="1456">Kingdom Hearts 358/2 Days (DS)</option>
                                                <option value="1591">Kingdom Hearts Re:coded (DS)</option>
                                                <option value="1280">Kingdom Hearts: Chain of Memories (GBA)
                                                </option>
                                                <option value="396">Kirby &amp; The Amazing Mirror (GBA)</option>
                                                <option value="974">Kirby 64: The Crystal Shards (N64)</option>
                                                <option value="714">Kirby Squeak Squad (DS)</option>
                                                <option value="145">Kirby Super Star (SNES)</option>
                                                <option value="41">Kirby's Adventure (NES)</option>
                                                <option value="215">Kirby's Avalanche (SNES)</option>
                                                <option value="333">Kirby's Dream Course (SNES)</option>
                                                <option value="240">Kirby's Dream Land (GB)</option>
                                                <option value="1660">Kirby's Dream Land 2 (GB)</option>
                                                <option value="385">Kirby's Dream Land 2 (SGB)</option>
                                                <option value="954">Kirby's Dream Land 3 (SNES)</option>
                                                <option value="447">Kirby's Pinball Land (GB)</option>
                                                <option value="740">Kirby's Star Stacker (SNES)</option>
                                                <option value="1823">Kirby: Canvas Curse (DS)</option>
                                                <option value="734">Kishin Douji Zenki: Batoru Raiden (SNES)
                                                </option>
                                                <option value="1945">Kiteretsu Daihyakka (NES)</option>
                                                <option value="304">Kiwi Kraze: A Bird-Brained Adventure! (NES)
                                                </option>
                                                <option value="1453">Klonoa: Door to Phantomile (PSX)</option>
                                                <option value="809">Knight Quest (GB)</option>
                                                <option value="790">Knightmare 2: The Maze of Galious (MSX)</option>
                                                <option value="355">Knuckles in Sonic the Hedgehog (Genesis)
                                                </option>
                                                <option value="1732">Knuckles in Sonic the Hedgehog 2 (Genesis)
                                                </option>
                                                <option value="284">Knuckles' Chaotix (32X)</option>
                                                <option value="677">Konami GB Collection Vol. 1: Castlevania: The
                                                    Adventure (GBC)</option>
                                                <option value="1615">Krazy Ace Miniature Golf (Lynx)</option>
                                                <option value="2008">Krusty's Super Fun House (SNES)</option>
                                                <option value="45">Kung Fu (NES)</option>
                                                <option value="985">Kung Fu Kid (SMS)</option>
                                                <option value="1958">Kung-Fu Master (Arcade)</option>
                                                <option value="474">Kung-Fu Master (GB)</option>
                                                <option value="531">Kuru Kuru Kururin (GBA)</option>
                                                <option value="536">Kururin Paradise (GBA)</option>
                                                <option value="372">Kwirk (GB)</option>
                                                <option value="305">Kyatto Ninden Teyandee (NES)</option>
                                                <option value="1274">Kyōryū Sentai Zyuranger (NES)</option>
                                                <option value="2175">L'Empereur (NES)</option>
                                                <option value="2170">Labyrinth (NES)</option>
                                                <option value="704">Lada: The Ultimate Challenge (DOS)</option>
                                                <option value="1267">Lady Sia (GBA)</option>
                                                <option value="186">Lagoon (SNES)</option>
                                                <option value="675">Lagrange Point (NES)</option>
                                                <option value="738">Lamborghini: American Challenge (SNES)</option>
                                                <option value="1570">Land of Illusion: Starring Mickey Mouse (SMS)
                                                </option>
                                                <option value="1153">Landstalker: The Treasures of King Nole
                                                    (Genesis)</option>
                                                <option value="1609">Langrisser 2 (Genesis)</option>
                                                <option value="1587">Last Action Hero (GB)</option>
                                                <option value="1782">Lee Trevino's Fighting Golf (NES)</option>
                                                <option value="1969">Legacy of Kain: Soul Reaver (PSX)</option>
                                                <option value="183">Legacy of the Wizard (NES)</option>
                                                <option value="717">Legend of Hero Tonma (PCE)</option>
                                                <option value="972">Legend of the Ghost Lion (NES)</option>
                                                <option value="1733">Lego Bionicle (GBA)</option>
                                                <option value="1918">Lego Star Wars II: The Original Trilogy (DS)
                                                </option>
                                                <option value="501">Lemmings (SNES)</option>
                                                <option value="1361">Lester the Unlikely (SNES)</option>
                                                <option value="1295">Lethal Enforcers (SNES)</option>
                                                <option value="1054">Lethal Weapon (SNES)</option>
                                                <option value="731">Linus Spacehead's Cosmic Crusade (NES)</option>
                                                <option value="1727">Liquid Kids (PCE)</option>
                                                <option value="1668">Little Magic (SNES)</option>
                                                <option value="581">Little Master (GB)</option>
                                                <option value="25">Little Nemo: The Dream Master (NES)</option>
                                                <option value="2112">Little Red Hood (NES)</option>
                                                <option value="303">Little Samson (NES)</option>
                                                <option value="2015">Lizard (NES)</option>
                                                <option value="601">Lode Runner (GBA)</option>
                                                <option value="646">Looney Tunes (GBC)</option>
                                                <option value="416">Looney Tunes (GB)</option>
                                                <option value="1327">Looney Tunes: Carrot Crazy (GBC)</option>
                                                <option value="1712">Lord of the Sword (SMS)</option>
                                                <option value="1059">Low G Man (NES)</option>
                                                <option value="1489">Lucky Luke (SNES)</option>
                                                <option value="867">Lucky Luke (GBC)</option>
                                                <option value="966">Lucky Luke: Desperado Train (GBC)</option>
                                                <option value="2217">Lucky Luke: On the Daltons' Trail (PSX)
                                                </option>
                                                <option value="354">Lufia II: Rise of the Sinistrals (SNES)</option>
                                                <option value="1546">Luigi's Mansion (GC)</option>
                                                <option value="625">Lunar Pool (NES)</option>
                                                <option value="1759">Lupin Sansei: Pandora no Isan (NES)</option>
                                                <option value="131">M.C. Kids (NES)</option>
                                                <option value="1342">Mad Max (NES)</option>
                                                <option value="1605">Madagascar (GBA)</option>
                                                <option value="593">Madou King Granzort (SGX)</option>
                                                <option value="537">Madou Monogatari I (Genesis)</option>
                                                <option value="2033">Magic Knight Rayearth (Saturn)</option>
                                                <option value="190">Magical Quest Starring Mickey Mouse (SNES)
                                                </option>
                                                <option value="441">Magical Taruruuto-Kun (Genesis)</option>
                                                <option value="1559">Magical Tetris Challenge (N64)</option>
                                                <option value="516">Magician (NES)</option>
                                                <option value="1562">Magician Lord (Arcade)</option>
                                                <option value="1349">Majou Densetsu II: Daimashikyou Galious (NES)
                                                </option>
                                                <option value="1798">Majyuuou (SNES)</option>
                                                <option value="1955">Mamono Hunter Youko: Dai 7 no Keishou (Genesis)
                                                </option>
                                                <option value="84">Maniac Mansion (NES)</option>
                                                <option value="928">Manic Miner (GBA)</option>
                                                <option value="1761">Mappy (NES)</option>
                                                <option value="130">Marble Madness (Genesis)</option>
                                                <option value="158">Marble Madness (NES)</option>
                                                <option value="2079">Mari0 (Linux)</option>
                                                <option value="4">Mario &amp; Luigi (DOS)</option>
                                                <option value="2180">Mario &amp; Luigi: Bowser's Inside Story (DS)
                                                </option>
                                                <option value="1959">Mario &amp; Luigi: Partners in Time (DS)
                                                </option>
                                                <option value="254">Mario Adventure (NES)</option>
                                                <option value="1329">Mario Bros. (NES)</option>
                                                <option value="921">Mario Kart 64 (N64)</option>
                                                <option value="1685">Mario Party (N64)</option>
                                                <option value="2246">Mario Party 7 (GC)</option>
                                                <option value="1764">Mario Party Advance (GBA)</option>
                                                <option value="377">Mario Pinball Land (GBA)</option>
                                                <option value="426">Mario vs. Donkey Kong (GBA)</option>
                                                <option value="618">Marko's Magic Football (Genesis)</option>
                                                <option value="1313">Marvel Land (Genesis)</option>
                                                <option value="931">Marvel Super Heroes vs. Street Fighter (Arcade)
                                                </option>
                                                <option value="775">Marvel Super Heroes: War of the Gems (SNES)
                                                </option>
                                                <option value="1358">Marvel vs. Capcom (Arcade)</option>
                                                <option value="1229">Master Karateka (GB)</option>
                                                <option value="919">Master of Darkness (SMS)</option>
                                                <option value="398">Maui Mallard in Cold Shadow (SNES)</option>
                                                <option value="512">McDonald's Treasure Land Adventure (Genesis)
                                                </option>
                                                <option value="1632">MDK (PSX)</option>
                                                <option value="2244">Mechanized Attack (NES)</option>
                                                <option value="789">MediEvil (PSX)</option>
                                                <option value="2161">Mega Man (GG)</option>
                                                <option value="9">Mega Man (NES)</option>
                                                <option value="863">Mega Man (DOS)</option>
                                                <option value="267">Mega Man &amp; Bass (SNES)</option>
                                                <option value="780">Mega Man 10 (Wii)</option>
                                                <option value="10">Mega Man 2 (NES)</option>
                                                <option value="1371">Mega Man 2: The Power Fighters (Arcade)
                                                </option>
                                                <option value="38">Mega Man 3 (NES)</option>
                                                <option value="375">Mega Man 3, 4, 5 &amp; 6 (NES)</option>
                                                <option value="39">Mega Man 4 (NES)</option>
                                                <option value="2211">Mega Man 4 Voyage (NES)</option>
                                                <option value="40">Mega Man 5 (NES)</option>
                                                <option value="72">Mega Man 6 (NES)</option>
                                                <option value="166">Mega Man 7 (SNES)</option>
                                                <option value="623">Mega Man 8 (PSX)</option>
                                                <option value="941">Mega Man 9 (Wii)</option>
                                                <option value="1352">Mega Man Battle Chip Challenge (GBA)</option>
                                                <option value="657">Mega Man Battle Network (GBA)</option>
                                                <option value="856">Mega Man Battle Network 2 (GBA)</option>
                                                <option value="308">Mega Man II (GB)</option>
                                                <option value="326">Mega Man III (GB)</option>
                                                <option value="1133">Mega Man IV (GB)</option>
                                                <option value="1815">Mega Man Legends (PSX)</option>
                                                <option value="1830">Mega Man Legends 2 (PSX)</option>
                                                <option value="1474">Mega Man V (SGB)</option>
                                                <option value="1980">Mega Man V (GB)</option>
                                                <option value="108">Mega Man X (SNES)</option>
                                                <option value="811">Mega Man X &amp; Mega Man X2 &amp; Mega Man X3
                                                    (SNES)</option>
                                                <option value="224">Mega Man X &amp; X2 (SNES)</option>
                                                <option value="129">Mega Man X2 (SNES)</option>
                                                <option value="128">Mega Man X3 (SNES)</option>
                                                <option value="1797">Mega Man X3 (PSX)</option>
                                                <option value="598">Mega Man X4 (PSX)</option>
                                                <option value="507">Mega Man X5 (PSX)</option>
                                                <option value="509">Mega Man X6 (PSX)</option>
                                                <option value="545">Mega Man Xtreme (GBC)</option>
                                                <option value="1402">Mega Man Xtreme 2 (GBC)</option>
                                                <option value="504">Mega Man Zero (GBA)</option>
                                                <option value="340">Mega Man Zero 2 (GBA)</option>
                                                <option value="255">Mega Man Zero 3 (GBA)</option>
                                                <option value="234">Mega Man Zero 4 (GBA)</option>
                                                <option value="732">Mega Man ZX (DS)</option>
                                                <option value="719">Mega Man ZX Advent (DS)</option>
                                                <option value="2216">Mega Man: Dr. Wily's Revenge (GBC)</option>
                                                <option value="200">Mega Man: Dr. Wily's Revenge (GB)</option>
                                                <option value="1254">Mega Man: The Wily Wars (Genesis)</option>
                                                <option value="622">Mega Turrican (Genesis)</option>
                                                <option value="1027">MegaMari: Marisa no Yabou (Windows)</option>
                                                <option value="1681">Men in Black: The Series (GBC)</option>
                                                <option value="711">Mendel Palace (NES)</option>
                                                <option value="230">Mercs (Genesis)</option>
                                                <option value="751">Mercs (Arcade)</option>
                                                <option value="1608">Metal Force (NES)</option>
                                                <option value="849">Metal Gear (MSX)</option>
                                                <option value="165">Metal Gear (NES)</option>
                                                <option value="1004">Metal Gear Solid (PSX)</option>
                                                <option value="1506">Metal Gear Solid: VR Missions (PSX)</option>
                                                <option value="510">Metal Max (NES)</option>
                                                <option value="1411">Metal Max Returns (SNES)</option>
                                                <option value="1469">Metal Mech: Man &amp; Machine (NES)</option>
                                                <option value="784">Metal Slug 3 (Arcade)</option>
                                                <option value="793">Metal Slug 4 (Arcade)</option>
                                                <option value="815">Metal Slug 5 (Arcade)</option>
                                                <option value="821">Metal Slug 7 (DS)</option>
                                                <option value="765">Metal Slug Advance (GBA)</option>
                                                <option value="574">Metal Slug X (Arcade)</option>
                                                <option value="2066">Metal Slug: 2nd Mission (NGP)</option>
                                                <option value="753">Metal Slug: Super Vehicle - 001 (Arcade)
                                                </option>
                                                <option value="192">Metal Storm (NES)</option>
                                                <option value="1365">Metal Warriors (SNES)</option>
                                                <option value="2145">Meteos (DS)</option>
                                                <option value="20">Metroid (NES)</option>
                                                <option value="268">Metroid Fusion (GBA)</option>
                                                <option value="374">Metroid II: Return of Samus (GB)</option>
                                                <option value="1337">Metroid Prime Hunters (DS)</option>
                                                <option value="942">Metroid Prime Pinball (DS)</option>
                                                <option value="799">Metroid Super ZeroMission (SNES)</option>
                                                <option value="195">Metroid: Zero Mission (GBA)</option>
                                                <option value="2248">Mickey Mania 7 (NES)</option>
                                                <option value="2051">Mickey Mania: The Timeless Adventures of Mickey
                                                    Mouse (SNES)</option>
                                                <option value="151">Mickey Mania: The Timeless Adventures of Mickey
                                                    Mouse (Genesis)</option>
                                                <option value="436">Mickey Mouse 3: Yume Fuusen (NES)</option>
                                                <option value="53">Mickey Mousecapade (NES)</option>
                                                <option value="1649">Mickey no Tokyo Disneyland Daibouken (SNES)
                                                </option>
                                                <option value="2164">Mickey's Adventures in Numberland (NES)
                                                </option>
                                                <option value="1977">Mickey's Dangerous Chase (GB)</option>
                                                <option value="2228">Mickey's Dangerous Chase (GBC)</option>
                                                <option value="1262">Micro Machines 64 Turbo (N64)</option>
                                                <option value="388">Midnight Resistance (Genesis)</option>
                                                <option value="371">Might and Magic (NES)</option>
                                                <option value="1314">Might and Magic II: Gates to Another World
                                                    (Genesis)</option>
                                                <option value="390">Mighty Bomb Jack (NES)</option>
                                                <option value="400">Mighty Final Fight (NES)</option>
                                                <option value="693">Mighty Morphin Power Rangers (SNES)</option>
                                                <option value="995">Mighty Morphin Power Rangers: The Movie (SGB)
                                                </option>
                                                <option value="1600">Mighty Morphin Power Rangers: The Movie (SNES)
                                                </option>
                                                <option value="56">Mike Tyson's Punch-Out!! (NES)</option>
                                                <option value="97">Milon's Secret Castle (NES)</option>
                                                <option value="2081">Miner 2049er (Coleco)</option>
                                                <option value="469">Minesweeper (GB)</option>
                                                <option value="1795">Mini Putt (NES)</option>
                                                <option value="2195">Miniature Golf (A2600)</option>
                                                <option value="2137">Minit (Linux)</option>
                                                <option value="480">Mischief Makers (N64)</option>
                                                <option value="994">Mission: Impossible (NES)</option>
                                                <option value="361">Mission: Impossible (GBC)</option>
                                                <option value="403">Mitsume ga Tooru (NES)</option>
                                                <option value="2087">MK5: Mortal Combat - Sub Zero (Genesis)
                                                </option>
                                                <option value="386">Moai-kun (NES)</option>
                                                <option value="742">Mole Mania (SGB)</option>
                                                <option value="958">Monkey Magic (PSX)</option>
                                                <option value="172">Monopoly (NES)</option>
                                                <option value="1363">Monster House (GBA)</option>
                                                <option value="473">Monster in My Pocket (NES)</option>
                                                <option value="746">Monster Party (NES)</option>
                                                <option value="1567">Monster Pro Wrestling (PCE)</option>
                                                <option value="2178">Monster World IV (Genesis)</option>
                                                <option value="2148">Montezuma's Revenge (A2600)</option>
                                                <option value="2138">Montezuma's Revenge (Coleco)</option>
                                                <option value="1574">Montezuma's Revenge (SMS)</option>
                                                <option value="2139">Montezuma's Revenge (C64)</option>
                                                <option value="2172">Monty on the Run (C64)</option>
                                                <option value="302">Moon Crystal (NES)</option>
                                                <option value="120">Moonwalker, Michael Jackson's (Genesis)</option>
                                                <option value="726">Moonwalker, Michael Jackson's (Arcade)</option>
                                                <option value="891">Mortal Kombat (SNES)</option>
                                                <option value="1135">Mortal Kombat 3 (GB)</option>
                                                <option value="892">Mortal Kombat 3 (SNES)</option>
                                                <option value="343">Mortal Kombat 4 (N64)</option>
                                                <option value="1106">Mortal Kombat 4 (GBC)</option>
                                                <option value="794">Mortal Kombat Advance (GBA)</option>
                                                <option value="703">Mortal Kombat II (GB)</option>
                                                <option value="317">Mortal Kombat II (SNES)</option>
                                                <option value="1427">Mortal Kombat Mythologies: Sub-Zero (PSX)
                                                </option>
                                                <option value="802">Mortal Kombat Trilogy (N64)</option>
                                                <option value="1406">Mortal Kombat: Deception (GC)</option>
                                                <option value="767">Mortal Kombat: Tournament Edition (GBA)</option>
                                                <option value="807">Mr. Driller 2 (GBA)</option>
                                                <option value="440">Mr. Nutz (SNES)</option>
                                                <option value="1612">Mr. Nutz (Genesis)</option>
                                                <option value="2236">Multidude (NES)</option>
                                                <option value="989">Muramasa: The Demon Blade (Wii)</option>
                                                <option value="943">Myst (DS)</option>
                                                <option value="864">Mystery Quest (NES)</option>
                                                <option value="217">Mystic Defender (Genesis)</option>
                                                <option value="2022">Mystic Towers (DOS)</option>
                                                <option value="610">Mystical Ninja Starring Goemon (N64)</option>
                                                <option value="2222">Namco Museum Megamix (Wii)</option>
                                                <option value="1460">Nanashi no Geemu (DS)</option>
                                                <option value="1387">Nancy Drew: Message in a Haunted Mansion (GBA)
                                                </option>
                                                <option value="464">Naruto: Ninja Council (GBA)</option>
                                                <option value="1521">Neo Turf Masters (Arcade)</option>
                                                <option value="1443">NeSnake 2 (NES)</option>
                                                <option value="1778">Nester's Funky Bowling (VBoy)</option>
                                                <option value="486">New Ghostbusters II (NES)</option>
                                                <option value="515">New Super Mario Bros. (DS)</option>
                                                <option value="1405">New Super Mario Bros. Wii (Wii)</option>
                                                <option value="1993">Newer Super Mario Bros. DS (DS)</option>
                                                <option value="2162">NFL Street (GC)</option>
                                                <option value="2197">NFL Street 2 (GC)</option>
                                                <option value="2045">Night Stalker (INTV)</option>
                                                <option value="2080">NiGHTS into Dreams... (Saturn)</option>
                                                <option value="273">Nightshade (NES)</option>
                                                <option value="1052">Nikujin (Windows)</option>
                                                <option value="2126">Nim &amp; Nom (NES)</option>
                                                <option value="409">Ninja Crusaders (NES)</option>
                                                <option value="223">Ninja Five-O (GBA)</option>
                                                <option value="428">Ninja Gaiden (SMS)</option>
                                                <option value="175">Ninja Gaiden (NES)</option>
                                                <option value="688">Ninja Gaiden (GG)</option>
                                                <option value="1486">Ninja Gaiden (PCE)</option>
                                                <option value="59">Ninja Gaiden II: The Dark Sword of Chaos (NES)
                                                </option>
                                                <option value="168">Ninja Gaiden III: The Ancient Ship of Doom (NES)
                                                </option>
                                                <option value="484">Ninja Gaiden Shadow (GB)</option>
                                                <option value="1679">Ninja Golf (A7800)</option>
                                                <option value="1522">Ninja Jajamaru: Ginga Daisakusen (NES)</option>
                                                <option value="1903">Ninja Kid (NES)</option>
                                                <option value="328">Ninja Spirit (GB)</option>
                                                <option value="602">Ninja Spirit (PCE)</option>
                                                <option value="1884">Nitemare 3D (DOS)</option>
                                                <option value="1745">No One Can Stop Mr. Domino (PSX)</option>
                                                <option value="1698">Nobunaga's Ambition (NES)</option>
                                                <option value="1961">Noddy and the Birthday Party (GBC)</option>
                                                <option value="1988">Noddy: A Day in Toyland (GBA)</option>
                                                <option value="800">Normy's Beach Babe-o-Rama (Genesis)</option>
                                                <option value="1350">North &amp; South (NES)</option>
                                                <option value="141">Nosferatu (SNES)</option>
                                                <option value="560">Nuts &amp; Milk (NES)</option>
                                                <option value="1820">Nuts &amp; Milk (MSX)</option>
                                                <option value="530">Oddworld Adventures (GB)</option>
                                                <option value="1577">Oddworld Adventures II (GBC)</option>
                                                <option value="1568">Oddworld: Abe's Exoddus (PSX)</option>
                                                <option value="783">Oddworld: Abe's Oddysee (PSX)</option>
                                                <option value="1581">Oddworld: Munch's Oddysee (GBA)</option>
                                                <option value="1752">Oil's Well (Coleco)</option>
                                                <option value="2136">Old Tower (ZXS)</option>
                                                <option value="1309">Olympic Gold: Barcelona '92 (Genesis)</option>
                                                <option value="1914">One Piece Mansion (PSX)</option>
                                                <option value="329">Operation C (GB)</option>
                                                <option value="692">Operation Logic Bomb (SNES)</option>
                                                <option value="1646">Orb-3D (NES)</option>
                                                <option value="2093">Order of Twilight (Linux)</option>
                                                <option value="1756">Osman (Arcade)</option>
                                                <option value="667">Otocky (FDS)</option>
                                                <option value="188">Out of This World (SNES)</option>
                                                <option value="219">Out to Lunch (SNES)</option>
                                                <option value="1308">OutRun (Genesis)</option>
                                                <option value="1341">Over the Hedge (DS)</option>
                                                <option value="2235">Overlord (NES)</option>
                                                <option value="1721">Pac-In-Time (GB)</option>
                                                <option value="1622">Pac-Land (Lynx)</option>
                                                <option value="2065">Pac-Man World (GBA)</option>
                                                <option value="1790">Pac-Man World 2 (GC)</option>
                                                <option value="660">Paladin's Quest (SNES)</option>
                                                <option value="1781">Palamedes II: Star Twinkles (NES)</option>
                                                <option value="1368">Pandemonium! (PSX)</option>
                                                <option value="423">Panic Restaurant (NES)</option>
                                                <option value="1331">Paper Mario (N64)</option>
                                                <option value="1535">Paper Mario: The Thousand-Year Door (GC)
                                                </option>
                                                <option value="339">Paperboy (NES)</option>
                                                <option value="837">Penguin Adventure (MSX)</option>
                                                <option value="1520">Pepsiman: The Running Hero (PSX)</option>
                                                <option value="626">Phantasy Star (SMS)</option>
                                                <option value="1495">Phantasy Star II (Genesis)</option>
                                                <option value="323">Phantasy Star III: Generations of Doom (Genesis)
                                                </option>
                                                <option value="586">Phantasy Star IV (Genesis)</option>
                                                <option value="1379">Phoenix (A2600)</option>
                                                <option value="745">Pilotwings (SNES)</option>
                                                <option value="1152">Pin-Bot (NES)</option>
                                                <option value="338">Pinball Quest (NES)</option>
                                                <option value="1671">Pingu: Sekai de Ichiban Genki na Penguin (GB)
                                                </option>
                                                <option value="1928">Pink Panther in Pink Goes to Hollywood (SNES)
                                                </option>
                                                <option value="1930">Pink Panther in Pink Goes to Hollywood
                                                    (Genesis)</option>
                                                <option value="2250">Pink Panther: Pinkadelic Pursuit (GBA)</option>
                                                <option value="1808">Pink Panther: Pinkadelic Pursuit (PSX)</option>
                                                <option value="1598">Pinocchio, Disney's (Genesis)</option>
                                                <option value="448">Pipe Dream (NES)</option>
                                                <option value="171">Pit-Fighter (Genesis)</option>
                                                <option value="1557">Pitfall II: Lost Caverns (A2600)</option>
                                                <option value="2156">Pitfall! (A2600)</option>
                                                <option value="884">Pitfall: The Mayan Adventure (Genesis)</option>
                                                <option value="502">Pitfall: The Mayan Adventure (SNES)</option>
                                                <option value="590">Pizza Pop! (NES)</option>
                                                <option value="1242">Platoon (NES)</option>
                                                <option value="249">Plok (SNES)</option>
                                                <option value="645">Pocket Bomberman (GBC)</option>
                                                <option value="1822">Pocket Monster (Genesis)</option>
                                                <option value="1703">Pocket Monster II (Genesis)</option>
                                                <option value="393">Pocket Monsters: Green (SGB)</option>
                                                <option value="2210">Pocket Monsters: White Jade Version (NES)
                                                </option>
                                                <option value="1249">Pocky &amp; Rocky (SNES)</option>
                                                <option value="1811">Pokémon Adventure (GBC)</option>
                                                <option value="2193">Pokémon Card GB2: GR-dan Sanjou! (GBC)</option>
                                                <option value="1701">Pokémon Puzzle Challenge (GBC)</option>
                                                <option value="1784">Pokémon Stadium (N64)</option>
                                                <option value="1773">Pokémon: Blue and Red Version (GB)</option>
                                                <option value="1473">Pokémon: Blue Version (GB)</option>
                                                <option value="241">Pokémon: Blue Version (SGB)</option>
                                                <option value="2004">Pokémon: Blue Version (GBC)</option>
                                                <option value="2086">Pokémon: Crystal Version (GBC)</option>
                                                <option value="1996">Pokémon: Diamond Version (DS)</option>
                                                <option value="1596">Pokémon: Emerald Version (GBA)</option>
                                                <option value="1478">Pokémon: FireRed Version (GBA)</option>
                                                <option value="294">Pokémon: Gold Version (GBC)</option>
                                                <option value="1674">Pokémon: Pearl Version (DS)</option>
                                                <option value="1611">Pokémon: Platinum Edition (GBC)</option>
                                                <option value="2254">Pokémon: Red Version (GBC)</option>
                                                <option value="16">Pokémon: Red Version (GB)</option>
                                                <option value="271">Pokémon: Red Version (SGB)</option>
                                                <option value="787">Pokémon: Ruby Version (GBA)</option>
                                                <option value="358">Pokémon: Sapphire Version (GBA)</option>
                                                <option value="1538">Pokémon: Silver Version (GBC)</option>
                                                <option value="690">Pokémon: Trading Card Game (GBC)</option>
                                                <option value="446">Pokémon: Yellow Version (GBC)</option>
                                                <option value="1068">Poko-Nyan! Henpokorin Adventure (SNES)</option>
                                                <option value="1482">Polarium (DS)</option>
                                                <option value="1647">Pop'n TwinBee: Rainbow Bell Adventures (SNES)
                                                </option>
                                                <option value="871">Popeye (NES)</option>
                                                <option value="1067">Popeye 2 (GB)</option>
                                                <option value="1806">Porky Pig's Haunted Holiday (SNES)</option>
                                                <option value="1983">Porky's (A2600)</option>
                                                <option value="2122">Portal (C64)</option>
                                                <option value="1769">Postman Pat and the Greendale Rocket (GBA)
                                                </option>
                                                <option value="109">Power Blade (NES)</option>
                                                <option value="1157">Prehistorik Man (SNES)</option>
                                                <option value="43">Prince of Persia (NES)</option>
                                                <option value="134">Prince of Persia (Genesis)</option>
                                                <option value="1843">Prince of Persia (SegaCD)</option>
                                                <option value="1956">Prince of Persia (PCECD)</option>
                                                <option value="242">Prince of Persia (SNES)</option>
                                                <option value="198">Prince of Persia 2 (SNES)</option>
                                                <option value="425">Prince of Persia: The Sands of Time (GBA)
                                                </option>
                                                <option value="2219">Prince of Persia: The Two Thrones (GC)</option>
                                                <option value="1990">Princess Rescue (A2600)</option>
                                                <option value="1072">Princess Tomato in the Salad Kingdom (NES)
                                                </option>
                                                <option value="2050">Private Eye (A2600)</option>
                                                <option value="1045">Pro Wrestling (NES)</option>
                                                <option value="429">Psychic World (SMS)</option>
                                                <option value="421">Psycho Fox (SMS)</option>
                                                <option value="1507">Psycho Waluigi (Windows)</option>
                                                <option value="1468">Pucca's Kisses Game (Wii)</option>
                                                <option value="785">Puggsy (Genesis)</option>
                                                <option value="316">Pulseman (Genesis)</option>
                                                <option value="1844">Punch-Out!! (Arcade)</option>
                                                <option value="2151">Punchy (C64)</option>
                                                <option value="513">Punky Skunk (PSX)</option>
                                                <option value="1566">Push-Over (SNES)</option>
                                                <option value="638">Putter Golf (Genesis)</option>
                                                <option value="874">Puzznic (NES)</option>
                                                <option value="1747">Pwn Adventure Z (NES)</option>
                                                <option value="2154">Pyjamarama (C64)</option>
                                                <option value="1601">Q Boy (NES)</option>
                                                <option value="1141">Q*bert (NES)</option>
                                                <option value="1635">Q*bert 3 (SNES)</option>
                                                <option value="91">QuackShot: Starring Donald Duck (Genesis)
                                                </option>
                                                <option value="670">Quartet (SMS)</option>
                                                <option value="288">Quarth (NES)</option>
                                                <option value="1625">Quattro Adventure: Boomerang Kid (NES)</option>
                                                <option value="1307">Quattro Adventure: Super Robin Hood (NES)
                                                </option>
                                                <option value="1001">Quattro Adventure: Treasure Island Dizzy (NES)
                                                </option>
                                                <option value="1968">Quest for Glory II: Trial by Fire (DOS)
                                                </option>
                                                <option value="444">R.B.I. Baseball (NES)</option>
                                                <option value="1840">R.C. Pro-Am (NES)</option>
                                                <option value="214">Rad Racer (NES)</option>
                                                <option value="1462">Radical Rex (SNES)</option>
                                                <option value="1894">Raid on Bungeling Bay (NES)</option>
                                                <option value="1373">Raiders of the Lost Ark (A2600)</option>
                                                <option value="888">Rainbow Islands: The Story of Bubble Bobble 2
                                                    (NES)</option>
                                                <option value="930">Rambo (NES)</option>
                                                <option value="712">Rambo, Sylvester Stallone in (MSX)</option>
                                                <option value="769">Ranger X (Genesis)</option>
                                                <option value="1277">Ranma Nibunnoichi: Chougi Ranbu Hen (SNES)
                                                </option>
                                                <option value="596">Rayman (GBC)</option>
                                                <option value="1207">Rayman (PSX)</option>
                                                <option value="1359">Rayman 2 (GBC)</option>
                                                <option value="1493">Rayman 3: Hoodlum Havoc (GC)</option>
                                                <option value="1458">Rayman Advance (GBA)</option>
                                                <option value="1851">Rayman Origins (Wii)</option>
                                                <option value="1633">Rayman: Hoodlums' Revenge (GBA)</option>
                                                <option value="648">Red Alarm (VBoy)</option>
                                                <option value="1159">Rescue: The Embassy Mission (NES)</option>
                                                <option value="1887">Resident Evil 2 (GC)</option>
                                                <option value="517">Resident Evil 3: Nemesis (PSX)</option>
                                                <option value="1467">Resident Evil 4 (GC)</option>
                                                <option value="591">Resident Evil: Deadly Silence (DS)</option>
                                                <option value="805">Resident Evil: Director's Cut (PSX)</option>
                                                <option value="1175">Riddick Bowe Boxing (SNES)</option>
                                                <option value="1683">Riddle of the Sphinx (A2600)</option>
                                                <option value="1848">Risky Woods (Genesis)</option>
                                                <option value="286">Ristar (Genesis)</option>
                                                <option value="36">River City Ransom (NES)</option>
                                                <option value="1429">River Raid (A2600)</option>
                                                <option value="2120">Riviera: The Promised Land (GBA)</option>
                                                <option value="836">Road Fighter (NES)</option>
                                                <option value="2157">Road Runner (A2600)</option>
                                                <option value="683">Road Runner's Death Valley Rally (SNES)</option>
                                                <option value="736">RoboCop (GBC)</option>
                                                <option value="1206">RoboCop (NES)</option>
                                                <option value="465">RoboCop 3 (NES)</option>
                                                <option value="1594">RoboCop 3 (Genesis)</option>
                                                <option value="424">Robocop vs. the Terminator (Genesis)</option>
                                                <option value="2077">Robot Wars: Extreme Destruction (GBA)</option>
                                                <option value="119">Rocket Knight Adventures (Genesis)</option>
                                                <option value="644">Rocket: Robot on Wheels (N64)</option>
                                                <option value="80">Rockin' Kats (NES)</option>
                                                <option value="1776">Rockman &amp; Forte - Mirai Kara no Chousensha
                                                    (WSWAN)</option>
                                                <option value="1661">Rockman 4 Burst Chaser × Air Sliding (NES)
                                                </option>
                                                <option value="1436">Rockman 4 Minus Infinity (NES)</option>
                                                <option value="1967">Rockman Battle &amp; Fighters (NGP)</option>
                                                <option value="1621">Rockman Complete Works: Rockman 2 (PSX)
                                                </option>
                                                <option value="1446">Rockman DX3 (GBC)</option>
                                                <option value="1799">Rockman EXE WS (WSWAN)</option>
                                                <option value="642">Rockman no Constancy (NES)</option>
                                                <option value="2146">Rockman: Spirits of Hackers (NES)</option>
                                                <option value="987">Rocky (SMS)</option>
                                                <option value="1124">Rocman X (NES)</option>
                                                <option value="970">Rod Land (NES)</option>
                                                <option value="491">Rolan's Curse (GB)</option>
                                                <option value="1987">Rolan's Curse II (GB)</option>
                                                <option value="2229">Rollerblade Racer (NES)</option>
                                                <option value="1455">Rollergames (NES)</option>
                                                <option value="220">Rolling Thunder (NES)</option>
                                                <option value="1279">Rolo to the Rescue (Genesis)</option>
                                                <option value="2200">Romance of the Three Kingdoms II (NES)</option>
                                                <option value="578">Romancing SaGa (SNES)</option>
                                                <option value="696">Romancing SaGa 2 (SNES)</option>
                                                <option value="708">Romancing SaGa 3 (SNES)</option>
                                                <option value="1017">Rosenkreuzstilette (Windows)</option>
                                                <option value="628">Rubik's World (DS)</option>
                                                <option value="450">Run Saber (SNES)</option>
                                                <option value="47">Rush'n Attack (NES)</option>
                                                <option value="29">Rygar (NES)</option>
                                                <option value="1936">Sabre Wulf (GBA)</option>
                                                <option value="1954">Sabrina the Teenage Witch: Potion Commotion
                                                    (GBA)</option>
                                                <option value="605">SaGa Frontier (PSX)</option>
                                                <option value="1008">Saiyuuki World (NES)</option>
                                                <option value="639">Salary Man Champ: Tatakau Salary Man (PSX)
                                                </option>
                                                <option value="1597">Samurai Shodown II (PSX)</option>
                                                <option value="2049">Samurai Shodown II (Arcade)</option>
                                                <option value="1682">Samurai Shodown IV: Amakusa's Revenge (Arcade)
                                                </option>
                                                <option value="1561">Saturday Night Slam Masters (SNES)</option>
                                                <option value="1555">Saturn Bomberman (Saturn)</option>
                                                <option value="1428">Scion (MSX)</option>
                                                <option value="1063">Scooby-Doo! classNameic Creep Capers (N64)</option>
                                                <option value="1792">Scooby-Doo! classNameic Creep Capers (GBC)</option>
                                                <option value="1835">Scooby-Doo! Mystery Mayhem (GBA)</option>
                                                <option value="1816">Scrapyard Dog (Lynx)</option>
                                                <option value="1875">Scrapyard Dog (A7800)</option>
                                                <option value="1549">Seaquest (A2600)</option>
                                                <option value="2091">Secret Agent Barbie: Royal Jewels Mission (GBA)
                                                </option>
                                                <option value="231">Secret of Evermore (SNES)</option>
                                                <option value="819">Secret of Mana (SNES)</option>
                                                <option value="1415">Sega-Galaga (SG1000)</option>
                                                <option value="1719">Sesame Street Countdown (NES)</option>
                                                <option value="2082">Sewer Sam (INTV)</option>
                                                <option value="2099">Shadow Blasters (Genesis)</option>
                                                <option value="321">Shadow Dancer: The Secret of Shinobi (Genesis)
                                                </option>
                                                <option value="570">Shadow of the Beast (Genesis)</option>
                                                <option value="573">Shadow of the Beast II (Genesis)</option>
                                                <option value="34">Shadow of the Ninja (NES)</option>
                                                <option value="37">Shadowgate (NES)</option>
                                                <option value="1586">Shantae (GBC)</option>
                                                <option value="64">Shatterhand (NES)</option>
                                                <option value="1908">Shin Nekketsu Kouha: Kunio-tachi no Banka
                                                    (SNES)</option>
                                                <option value="407">Shining Force (Genesis)</option>
                                                <option value="615">Shining Force II (Genesis)</option>
                                                <option value="552">Shining in the Darkness (Genesis)</option>
                                                <option value="647">Shining Soul (GBA)</option>
                                                <option value="655">Shining Soul II (GBA)</option>
                                                <option value="852">Shinobi (NES)</option>
                                                <option value="1800">Shinobi (Arcade)</option>
                                                <option value="306">Shinobi III: Return of the Ninja Master
                                                    (Genesis)</option>
                                                <option value="2063">Shinobi Legions (Saturn)</option>
                                                <option value="720">Shockman (PCE)</option>
                                                <option value="1886">Short Order (NES)</option>
                                                <option value="2075">Shovel Knight (Linux)</option>
                                                <option value="2114">Shrek: Fairy Tale Freakdown (GBC)</option>
                                                <option value="1642">Sid Meier's Railroad Tycoon (DOS)</option>
                                                <option value="1607">Silent Assault (NES)</option>
                                                <option value="357">Silent Scope (GBA)</option>
                                                <option value="1998">Silhouette Mirage (Saturn)</option>
                                                <option value="853">Silver Surfer (NES)</option>
                                                <option value="2224">Simple 1500 Series Vol.30: The Basket ~1 on 1
                                                    Plus~ (PSX)</option>
                                                <option value="2243">Skate Boardin' (A2600)</option>
                                                <option value="320">Skate or Die 2: The Search for Double Trouble
                                                    (NES)</option>
                                                <option value="2181">Skate or Die! (NES)</option>
                                                <option value="851">Skate or Die: Bad 'n Rad (GB)</option>
                                                <option value="2035">Skiing (A2600)</option>
                                                <option value="653">Skitchin' (Genesis)</option>
                                                <option value="1882">Skooter (MSX)</option>
                                                <option value="503">Skyblazer (SNES)</option>
                                                <option value="634">SkyRoads (DOS)</option>
                                                <option value="709">SkyRoads: Xmas Special (DOS)</option>
                                                <option value="221">Smart Ball (SNES)</option>
                                                <option value="2067">Smurf: Rescue in Gargamel's Castle (Coleco)
                                                </option>
                                                <option value="2150">Smurf: Rescue in Gargamel's Castle (A2600)
                                                </option>
                                                <option value="107">Snake Rattle 'n' Roll (NES)</option>
                                                <option value="463">Snake's Revenge (NES)</option>
                                                <option value="624">Snood (GBA)</option>
                                                <option value="2128">Snoopy (C64)</option>
                                                <option value="2020">Snoopy and Peanuts (DOS)</option>
                                                <option value="44">Snow Bros. (NES)</option>
                                                <option value="1542">Sokoban DS (DS)</option>
                                                <option value="227">Solar Jetman: Hunt for the Golden Warpship (NES)
                                                </option>
                                                <option value="439">Solitaire (NES)</option>
                                                <option value="5">Solomon's Key (NES)</option>
                                                <option value="13">Solstice: The Quest for the Staff of Demnos (NES)
                                                </option>
                                                <option value="2041">Sonic &amp; Knuckles (Genesis)</option>
                                                <option value="1130">Sonic 3 &amp; Amy Rose (Genesis)</option>
                                                <option value="127">Sonic 3 &amp; Knuckles (Genesis)</option>
                                                <option value="927">Sonic 3D Blast (Genesis)</option>
                                                <option value="297">Sonic Advance (GBA)</option>
                                                <option value="256">Sonic Advance 2 (GBA)</option>
                                                <option value="309">Sonic Advance 3 (GBA)</option>
                                                <option value="1103">Sonic Adventure 2: Battle (GC)</option>
                                                <option value="1487">Sonic Adventure DX: Director's Cut (GC)
                                                </option>
                                                <option value="1126">Sonic Battle (GBA)</option>
                                                <option value="1929">Sonic Blast (GG)</option>
                                                <option value="627">Sonic Chaos (SMS)</option>
                                                <option value="1056">Sonic Colors (DS)</option>
                                                <option value="2206">Sonic Heroes (GC)</option>
                                                <option value="1589">Sonic Jam 6 (Genesis)</option>
                                                <option value="2059">Sonic Labyrinth (GG)</option>
                                                <option value="1397">Sonic Pinball Party (GBA)</option>
                                                <option value="161">Sonic Spinball (Genesis)</option>
                                                <option value="587">Sonic the Hedgehog (GG)</option>
                                                <option value="248">Sonic the Hedgehog (Genesis)</option>
                                                <option value="964">Sonic the Hedgehog (SMS)</option>
                                                <option value="199">Sonic the Hedgehog 2 (Genesis)</option>
                                                <option value="418">Sonic the Hedgehog 2 (SMS)</option>
                                                <option value="729">Sonic the Hedgehog 3 (Genesis)</option>
                                                <option value="453">Sonic the Hedgehog CD (SegaCD)</option>
                                                <option value="2038">Sonic the Hedgehog Megamix (SegaCD)</option>
                                                <option value="2003">Sonic the Hedgehog Pocket Adventure (NGP)
                                                </option>
                                                <option value="1400">Sonic the Hedgehog: Triple Trouble (GG)
                                                </option>
                                                <option value="1545">Sorcerer's Kingdom (Genesis)</option>
                                                <option value="1048">Sorcerer's Maze (PSX)</option>
                                                <option value="1899">SOS (SNES)</option>
                                                <option value="1793">Soul Blade (PSX)</option>
                                                <option value="282">Soul Blazer (SNES)</option>
                                                <option value="1513">SoulCalibur II (GC)</option>
                                                <option value="1378">Space Invaders (A2600)</option>
                                                <option value="663">Space Invaders Extreme 2 (DS)</option>
                                                <option value="2189">Space Monsters Meet the Hardy (ZXS)</option>
                                                <option value="1975">Space Quest II: Chapter II - Vohaul's Revenge
                                                    (DOS)</option>
                                                <option value="814">Space Quest IV: Roger Wilco and the Time Rippers
                                                    (DOS)</option>
                                                <option value="1976">Space Quest: Chapter I - The Sarien Encounter
                                                    (DOS)</option>
                                                <option value="2227">Space Shuttle Project (NES)</option>
                                                <option value="1755">Space Station Silicon Valley (N64)</option>
                                                <option value="770">Spanky's Quest (SNES)</option>
                                                <option value="159">Sparkster (SNES)</option>
                                                <option value="482">Sparkster (Genesis)</option>
                                                <option value="1484">Spartan X 2 (NES)</option>
                                                <option value="1237">Spawn (SNES)</option>
                                                <option value="564">Speedy Gonzales: Aztec Adventure (GBC)</option>
                                                <option value="842">Speedy Gonzales: Los Gatos Bandidos (SNES)
                                                </option>
                                                <option value="289">Spelunker (NES)</option>
                                                <option value="1651">Spelunker II: Yūsha e no Chōsen (NES)</option>
                                                <option value="1571">Spelunky (Windows)</option>
                                                <option value="1377">Spider-Man (A2600)</option>
                                                <option value="1735">Spider-Man (N64)</option>
                                                <option value="691">Spider-Man 2 (DS)</option>
                                                <option value="1804">Spider-Man 2: Enter: Electro (PSX)</option>
                                                <option value="467">Spider-Man 3 (GBA)</option>
                                                <option value="154">Spider-Man vs. The Kingpin (Genesis)</option>
                                                <option value="998">Spider-Man/X-Men: Arcade's Revenge (SNES)
                                                </option>
                                                <option value="315">Spider-Man: Return of the Sinister Six (NES)
                                                </option>
                                                <option value="1726">Spider-Man: Shattered Dimensions (DS)</option>
                                                <option value="468">Spider-Man: Web of Fire (32X)</option>
                                                <option value="749">Spinmaster (Arcade)</option>
                                                <option value="1200">Spiritual Warfare (NES)</option>
                                                <option value="2179">Spirou: The Robot Invasion (GBC)</option>
                                                <option value="1713">Splatterhouse (PCE)</option>
                                                <option value="378">Splatterhouse 2 (Genesis)</option>
                                                <option value="331">Splatterhouse: Wanpaku Graffiti (NES)</option>
                                                <option value="758">SpongeBob SquarePants: Legend of the Lost
                                                    Spatula (GBC)</option>
                                                <option value="1999">SpongeBob SquarePants: SuperSponge (GBA)
                                                </option>
                                                <option value="1496">SpongeBob's Atlantis SquarePantis (GBA)
                                                </option>
                                                <option value="2037">Spy Hunter (NES)</option>
                                                <option value="1856">Spy Muppets: License to Croak (GBA)</option>
                                                <option value="1009">Spy vs. Spy (NES)</option>
                                                <option value="1053">Spyman (Windows)</option>
                                                <option value="640">Spyro 2: Ripto's Rage! (PSX)</option>
                                                <option value="801">Spyro The Dragon (PSX)</option>
                                                <option value="1485">Spyro: Attack of the Rhynocs (GBA)</option>
                                                <option value="1888">Spyro: Enter The Dragonfly (GC)</option>
                                                <option value="1055">Spyro: Year of the Dragon (PSX)</option>
                                                <option value="741">Squirrel King (Genesis)</option>
                                                <option value="2226">Stadium Events (NES)</option>
                                                <option value="2167">Star Control (Genesis)</option>
                                                <option value="364">Star Fox (SNES)</option>
                                                <option value="493">Star Fox 2 (SNES)</option>
                                                <option value="266">Star Ocean (SNES)</option>
                                                <option value="2018">Star Trek: 25th Anniversary (DOS)</option>
                                                <option value="1730">Star Trek: Invasion (PSX)</option>
                                                <option value="2134">Star Voyager (NES)</option>
                                                <option value="193">Star Wars (NES)</option>
                                                <option value="1543">Star Wars - Return of the Jedi: Death Star
                                                    Battle (A2600)</option>
                                                <option value="702">Star Wars Episode I: Jedi Power Battles (PSX)
                                                </option>
                                                <option value="808">Star Wars: The Empire Strikes Back (NES)
                                                </option>
                                                <option value="1306">Starflight (Genesis)</option>
                                                <option value="178">StarTropics (NES)</option>
                                                <option value="1978">Steamgear Mash (Saturn)</option>
                                                <option value="2084">SteamWorld Dig 2 (Linux)</option>
                                                <option value="1430">Streemerz: Super Strength Emergency Squad Zeta
                                                    (NES)</option>
                                                <option value="100">Street Fighter 2010: The Final Fight (NES)
                                                </option>
                                                <option value="873">Street Fighter Alpha 3 (Arcade)</option>
                                                <option value="676">Street Fighter II: Rainbow Edition (Arcade)
                                                </option>
                                                <option value="525">Street Fighter Zero 2 Alpha (Arcade)</option>
                                                <option value="1121">Street Smart (Genesis)</option>
                                                <option value="115">Streets of Rage (Genesis)</option>
                                                <option value="126">Streets of Rage 2 (Genesis)</option>
                                                <option value="1120">Streets of Rage 3 (Genesis)</option>
                                                <option value="360">Strider (NES)</option>
                                                <option value="136">Strider (Genesis)</option>
                                                <option value="508">Strider 2 (PSX)</option>
                                                <option value="1796">Stuart Little 2 (GBA)</option>
                                                <option value="1541">Stuart Little: The Journey Home (GBC)</option>
                                                <option value="420">Sub-Terrania (Genesis)</option>
                                                <option value="274">Sunset Riders (Genesis)</option>
                                                <option value="1325">Sunset Riders (SNES)</option>
                                                <option value="1896">Super 3D Portals 6 (A2600)</option>
                                                <option value="782">Super Adventure Island (SNES)</option>
                                                <option value="1450">Super Adventure Island II (SNES)</option>
                                                <option value="1620">Super Aladdin (NES)</option>
                                                <option value="2047">Super Arabian (NES)</option>
                                                <option value="2042">Super Bat Puncher (NES)</option>
                                                <option value="235">Super Bomberman (SNES)</option>
                                                <option value="182">Super Bomberman 2 (SNES)</option>
                                                <option value="1146">Super Bomberman 3 (SNES)</option>
                                                <option value="613">Super Bomberman 4 (SNES)</option>
                                                <option value="759">Super Bomberman 5 (SNES)</option>
                                                <option value="2239">Super Bowling (SNES)</option>
                                                <option value="1447">Super Boy II (SMS)</option>
                                                <option value="19">Super C (NES)</option>
                                                <option value="112">Super Castlevania IV (SNES)</option>
                                                <option value="1058">Super Contra 7 (NES)</option>
                                                <option value="236">Super Demo World: The Legend Continues (SNES)
                                                </option>
                                                <option value="336">Super Dodge Ball (NES)</option>
                                                <option value="1160">Super Donkey Kong 2 (NES)</option>
                                                <option value="603">Super Fantasy Zone (Genesis)</option>
                                                <option value="2116">Super Ghouls 'N Ghosts (GBA)</option>
                                                <option value="523">Super Ghouls 'n Ghosts (SNES)</option>
                                                <option value="1943">Super Glove Ball (NES)</option>
                                                <option value="585">Super Gussun Oyoyo (SNES)</option>
                                                <option value="2010">Super Mario 4 (GB)</option>
                                                <option value="246">Super Mario 64 (N64)</option>
                                                <option value="812">Super Mario 64 DS (DS)</option>
                                                <option value="1962">Super Mario 64: The Green Stars (N64)</option>
                                                <option value="913">Super Mario 74 (N64)</option>
                                                <option value="1481">Super Mario Advance (GBA)</option>
                                                <option value="893">Super Mario Advance 2: Super Mario World (GBA)
                                                </option>
                                                <option value="1260">Super Mario Advance 4: Super Mario Bros. 3
                                                    (GBA)</option>
                                                <option value="1779">Super Mario All-Stars: Super Mario Bros. 2
                                                    (SNES)</option>
                                                <option value="422">Super Mario All-Stars: Super Mario Bros. 3
                                                    (SNES)</option>
                                                <option value="310">Super Mario All-Stars: The Lost Levels (SNES)
                                                </option>
                                                <option value="352">Super Mario Bros. (FDS)</option>
                                                <option value="1">Super Mario Bros. (NES)</option>
                                                <option value="15">Super Mario Bros. 2 (FDS)</option>
                                                <option value="2">Super Mario Bros. 2 (NES)</option>
                                                <option value="17">Super Mario Bros. 3 (NES)</option>
                                                <option value="967">Super Mario Bros. Deluxe (GBC)</option>
                                                <option value="760">Super Mario Bros., 2, The Lost Levels &amp; 3
                                                    (NES)</option>
                                                <option value="370">Super Mario Kart (SNES)</option>
                                                <option value="197">Super Mario Land (GB)</option>
                                                <option value="452">Super Mario Land 2: 6 Golden Coins (GB)</option>
                                                <option value="194">Super Mario RPG: Legend of the Seven Stars
                                                    (SNES)</option>
                                                <option value="2043">Super Mario Sunshine (GC)</option>
                                                <option value="99">Super Mario World (SNES)</option>
                                                <option value="213">Super Mario World 2: Yoshi's Island (SNES)
                                                </option>
                                                <option value="1940">Super Mario World 64 (Genesis)</option>
                                                <option value="1240">Super Mario World: The Second Reality Project
                                                    Reloaded (SNES)</option>
                                                <option value="121">Super Metroid (SNES)</option>
                                                <option value="699">Super Metroid: MockingBird Station (SNES)
                                                </option>
                                                <option value="1525">Super Monkey Ball (GC)</option>
                                                <option value="1526">Super Monkey Ball 2 (GC)</option>
                                                <option value="2135">Super Monkey Ball Adventure (GC)</option>
                                                <option value="854">Super Monkey Ball Jr. (GBA)</option>
                                                <option value="1673">Super Monkey Ball: Touch &amp; Roll (DS)
                                                </option>
                                                <option value="77">Super Pitfall (NES)</option>
                                                <option value="113">Super Punch-Out!! (SNES)</option>
                                                <option value="1879">Super Punch-Out!! (Arcade)</option>
                                                <option value="1366">Super Putty (SNES)</option>
                                                <option value="556">Super Puyo Puyo 2 (SNES)</option>
                                                <option value="1700">Super Puzzle Fighter II Turbo (Arcade)</option>
                                                <option value="457">Super R-Type (SNES)</option>
                                                <option value="1528">Super Scribblenauts (DS)</option>
                                                <option value="471">Super Smash Bros. (N64)</option>
                                                <option value="844">Super Smash Bros. Melee (GC)</option>
                                                <option value="269">Super Smash T.V. (SNES)</option>
                                                <option value="2000">Super Spike V'Ball (NES)</option>
                                                <option value="1396">Super Star Wars (SNES)</option>
                                                <option value="906">Super Star Wars: Return of the Jedi (SNES)
                                                </option>
                                                <option value="986">Super Star Wars: The Empire Strikes Back (SNES)
                                                </option>
                                                <option value="238">Super Street Fighter II (SNES)</option>
                                                <option value="1743">Super Street Fighter II Turbo (Arcade)</option>
                                                <option value="2173">Super Tempo (Saturn)</option>
                                                <option value="1328">Super Tetris 2 + Bombliss: Genteiban (SNES)
                                                </option>
                                                <option value="24">Super Turrican (NES)</option>
                                                <option value="415">Super Turrican (SNES)</option>
                                                <option value="1316">Super Valis IV (SNES)</option>
                                                <option value="1375">Superman (A2600)</option>
                                                <option value="1286">Superman (Genesis)</option>
                                                <option value="1556">Superman (N64)</option>
                                                <option value="722">Survival Kids (GBC)</option>
                                                <option value="2024">Survival Kids 2: Dasshutsu! Futago Shima! (GBC)
                                                </option>
                                                <option value="1757">Suzuki Bakuhatsu (PSX)</option>
                                                <option value="1437">Sweet Home (NES)</option>
                                                <option value="176">Sword Master (NES)</option>
                                                <option value="1891">Sylvester and Tweety in Cagey Capers (Genesis)
                                                </option>
                                                <option value="843">Syobon Action (Windows)</option>
                                                <option value="752">Syvalion (SNES)</option>
                                                <option value="538">Tails in Sonic The Hedgehog (Genesis)</option>
                                                <option value="567">Tails' Skypatrol (GG)</option>
                                                <option value="542">Takeshi no Chousenjou (NES)</option>
                                                <option value="1161">TaleSpin, Disney's (NES)</option>
                                                <option value="2201">Tapper (C64)</option>
                                                <option value="1897">Tapper (Arcade)</option>
                                                <option value="1818">Tapper (A2600)</option>
                                                <option value="1963">Target Earth (Genesis)</option>
                                                <option value="389">Taz in Escape from Mars (Genesis)</option>
                                                <option value="283">Taz Mania (Genesis)</option>
                                                <option value="1810">Tear Ring Saga: Yutona Eiyū Senki (PSX)
                                                </option>
                                                <option value="58">Tecmo Super Bowl (NES)</option>
                                                <option value="673">Teenage Mutant Ninja Turtles (Arcade)</option>
                                                <option value="152">Teenage Mutant Ninja Turtles (NES)</option>
                                                <option value="98">Teenage Mutant Ninja Turtles II: The Arcade Game
                                                    (NES)</option>
                                                <option value="1895">Teenage Mutant Ninja Turtles III: Radical
                                                    Rescue (GB)</option>
                                                <option value="324">Teenage Mutant Ninja Turtles III: The Manhattan
                                                    Project (NES)</option>
                                                <option value="114">Teenage Mutant Ninja Turtles IV: Turtles in Time
                                                    (SNES)</option>
                                                <option value="1774">Tekken (PSX)</option>
                                                <option value="1457">Tekken 2 (PSX)</option>
                                                <option value="1530">Tekken 3 (PSX)</option>
                                                <option value="1244">Tekken Advance (GBA)</option>
                                                <option value="637">Teleroboxer (VBoy)</option>
                                                <option value="612">Tempo (32X)</option>
                                                <option value="1466">Tenchu: Stealth Assassins (PSX)</option>
                                                <option value="1168">Tengen Tetris (NES)</option>
                                                <option value="1636">Tennis (GB)</option>
                                                <option value="996">Terminator 2: Judgment Day (NES)</option>
                                                <option value="1076">Tetris (GB)</option>
                                                <option value="170">Tetris (NES)</option>
                                                <option value="1729">Tetris 2 + BomBliss (NES)</option>
                                                <option value="140">Tetris Attack (SNES)</option>
                                                <option value="580">Tetris Blast (SGB)</option>
                                                <option value="579">Tetris DS (DS)</option>
                                                <option value="332">Tetris DX (GBC)</option>
                                                <option value="2130">Tetris Party Deluxe (DS)</option>
                                                <option value="2121">Tetris the Absolute: The Grand Master 2 Plus
                                                    (Arcade)</option>
                                                <option value="280">Tetrisphere (N64)</option>
                                                <option value="1739">The 3-D Battles of WorldRunner (NES)</option>
                                                <option value="684">The 7th Saga (SNES)</option>
                                                <option value="383">The Addams Family (SNES)</option>
                                                <option value="1060">The Addams Family (GB)</option>
                                                <option value="65">The Addams Family (NES)</option>
                                                <option value="229">The Addams Family: Pugsley's Scavenger Hunt
                                                    (SNES)</option>
                                                <option value="2055">The Addams Family: Pugsley's Scavenger Hunt
                                                    (NES)</option>
                                                <option value="1824">The Adventure of Little Ralph (PSX)</option>
                                                <option value="169">The Adventures of Bayou Billy (NES)</option>
                                                <option value="975">The Adventures of Captain Comic (NES)</option>
                                                <option value="1580">The Adventures of Elmo in Grouchland (GBC)
                                                </option>
                                                <option value="1753">The Adventures of Pinocchio (GB)</option>
                                                <option value="184">The Adventures of Rad Gravity (NES)</option>
                                                <option value="1814">The Adventures of Rocky and Bullwinkle and
                                                    Friends (SNES)</option>
                                                <option value="1582">The Adventures of Rocky and Bullwinkle and
                                                    Friends (NES)</option>
                                                <option value="1676">The Adventures of Star Saver (GB)</option>
                                                <option value="762">The Amazing Spider-Man (DOS)</option>
                                                <option value="668">The Amazing Spider-Man: Lethal Foes (SNES)
                                                </option>
                                                <option value="76">The Battle of Olympus (NES)</option>
                                                <option value="1947">The Black Onyx (SG1000)</option>
                                                <option value="1736">The Blues Brothers (GB)</option>
                                                <option value="1317">The Blues Brothers (SNES)</option>
                                                <option value="71">The Blues Brothers (NES)</option>
                                                <option value="2225">The Bouncing Ball (GB)</option>
                                                <option value="754">The Bugs Bunny Birthday Blowout (NES)</option>
                                                <option value="781">The Bugs Bunny Crazy Castle (NES)</option>
                                                <option value="1448">The California Raisins: The Grape Escape (NES)
                                                </option>
                                                <option value="167">The Combatribes (SNES)</option>
                                                <option value="2072">The Conduit (Wii)</option>
                                                <option value="2144">The Cowlitz Gamers' 2nd Adventure (NES)
                                                </option>
                                                <option value="1509">The Cure (MSX)</option>
                                                <option value="1020">The Emperor's New Groove (GBC)</option>
                                                <option value="1257">The Faery Tale Adventure (Genesis)</option>
                                                <option value="689">The Final Fantasy Legend (GB)</option>
                                                <option value="1318">The Firemen (SNES)</option>
                                                <option value="1981">The Flash (SMS)</option>
                                                <option value="897">The Flintstones (Genesis)</option>
                                                <option value="70">The Flintstones: The Rescue of Dino &amp; Hoppy
                                                    (NES)</option>
                                                <option value="1219">The Flintstones: The Treasure of Sierra Madrock
                                                    (SNES)</option>
                                                <option value="2118">The GG Shinobi (GG)</option>
                                                <option value="79">The Goonies (NES)</option>
                                                <option value="78">The Goonies II (NES)</option>
                                                <option value="376">The Great Circus Mystery Starring Mickey and
                                                    Minnie (SNES)</option>
                                                <option value="1845">The Great Giana Sisters (C64)</option>
                                                <option value="2152">The Great Waldo Search (SNES)</option>
                                                <option value="1628">The Great Waldo Search (NES)</option>
                                                <option value="1321">The Guardian Legend (NES)</option>
                                                <option value="2104">The Hitchhiker's Guide to the Galaxy (DOS)
                                                </option>
                                                <option value="2153">The Human Race (C64)</option>
                                                <option value="379">The Humans (Genesis)</option>
                                                <option value="307">The Immortal (Genesis)</option>
                                                <option value="1920">The Immortal (NES)</option>
                                                <option value="2076">The Incredible Crash Dummies (Genesis)</option>
                                                <option value="1536">The Incredible Crash Dummies (GB)</option>
                                                <option value="659">The Incredible Hulk (SNES)</option>
                                                <option value="1583">The Jetsons: Invasion of the Planet Pirates
                                                    (SNES)</option>
                                                <option value="1179">The Jungle Book (NES)</option>
                                                <option value="583">The Jungle Book, Disney's (Genesis)</option>
                                                <option value="157">The Karate Kid (NES)</option>
                                                <option value="1749">The King Of Fighters '97 (Arcade)</option>
                                                <option value="968">The King of Fighters 2001 (Arcade)</option>
                                                <option value="201">The Krion Conquest (NES)</option>
                                                <option value="1663">The Last Ninja (NES)</option>
                                                <option value="1765">The Legend of Galahad (Genesis)</option>
                                                <option value="83">The Legend of Kage (NES)</option>
                                                <option value="1656">The Legend of Spyro: The Eternal Night (GBA)
                                                </option>
                                                <option value="149">The Legend of the Mystical Ninja (SNES)</option>
                                                <option value="12">The Legend of Zelda (NES)</option>
                                                <option value="1667">The Legend of Zelda (FDS)</option>
                                                <option value="191">The Legend of Zelda: A Link to the Past (SNES)
                                                </option>
                                                <option value="680">The Legend of Zelda: A Link to the Past (GBA)
                                                </option>
                                                <option value="226">The Legend of Zelda: Link's Awakening (GB)
                                                </option>
                                                <option value="311">The Legend of Zelda: Link's Awakening DX (GBC)
                                                </option>
                                                <option value="399">The Legend of Zelda: Majora's Mask (N64)
                                                </option>
                                                <option value="301">The Legend of Zelda: Ocarina of Time (N64)
                                                </option>
                                                <option value="1772">The Legend of Zelda: Oracle of Ages (GBC)
                                                </option>
                                                <option value="997">The Legend of Zelda: Oracle of Seasons (GBC)
                                                </option>
                                                <option value="539">The Legend of Zelda: Outlands (NES)</option>
                                                <option value="1859">The Legend of Zelda: Spirit Tracks (DS)
                                                </option>
                                                <option value="804">The Legend of Zelda: The Minish Cap (GBA)
                                                </option>
                                                <option value="1858">The Legend of Zelda: Twilight Princess (GC)
                                                </option>
                                                <option value="846">The Legendary Axe (PCE)</option>
                                                <option value="2177">The Legendary Axe II (PCE)</option>
                                                <option value="209">The Lion King (Genesis)</option>
                                                <option value="1282">The Lion King (NES)</option>
                                                <option value="2163">The Lion King (GB)</option>
                                                <option value="1606">The Lion King (SNES)</option>
                                                <option value="2119">The Lion King (SMS)</option>
                                                <option value="2123">The Lion King 2 (Genesis)</option>
                                                <option value="1880">The Little Mermaid (GB)</option>
                                                <option value="137">The Little Mermaid, Disney's (NES)</option>
                                                <option value="177">The Lost Vikings (Genesis)</option>
                                                <option value="499">The Lucky Dime Caper Starring Donald Duck (SMS)
                                                </option>
                                                <option value="1852">The Lucky Dime Caper Starring Donald Duck (GG)
                                                </option>
                                                <option value="1348">The Magic of Scheherazade (NES)</option>
                                                <option value="265">The Mask (SNES)</option>
                                                <option value="1949">The Morning Adventure (GBA)</option>
                                                <option value="2199">The Mutant Virus: Crisis in a Computer World
                                                    (NES)</option>
                                                <option value="2140">The Mysterious Murasame Castle (FDS)</option>
                                                <option value="1801">The Ninja (SMS)</option>
                                                <option value="472">The Ninja Warriors (SNES)</option>
                                                <option value="1675">The Oregon Trail (AppleII)</option>
                                                <option value="1748">The Pirates of Dark Water (Genesis)</option>
                                                <option value="2245">The Punisher (NES)</option>
                                                <option value="1643">The Quest of Ki (NES)</option>
                                                <option value="2124">The Rat (C64)</option>
                                                <option value="606">The Ren &amp; Stimpy Show Presents: Stimpy's
                                                    Invention (Genesis)</option>
                                                <option value="1578">The Ren &amp; Stimpy Show: Veediots! (SNES)
                                                </option>
                                                <option value="435">The Revenge of Shinobi (Genesis)</option>
                                                <option value="886">The Rocketeer (NES)</option>
                                                <option value="678">The Simpsons (Arcade)</option>
                                                <option value="345">The Simpsons: Bart vs. the Space Mutants (NES)
                                                </option>
                                                <option value="349">The Simpsons: Bart's Nightmare (SNES)</option>
                                                <option value="1707">The Smurfs (PSX)</option>
                                                <option value="387">The Smurfs (GB)</option>
                                                <option value="2233">The Smurfs (NES)</option>
                                                <option value="1741">The Smurfs (Genesis)</option>
                                                <option value="616">The SpongeBob SquarePants Movie (GBA)</option>
                                                <option value="679">The Terminator (SegaCD)</option>
                                                <option value="735">The Terminator (NES)</option>
                                                <option value="620">The Terminator (Genesis)</option>
                                                <option value="777">The Treasure of Uşas (MSX)</option>
                                                <option value="1655">The Ultimate Doom (DOOM)</option>
                                                <option value="1370">The Wild (GBA)</option>
                                                <option value="2238">The Wing of Madoola (NES)</option>
                                                <option value="999">The Young Indiana Jones Chronicles (NES)
                                                </option>
                                                <option value="816">Time Lord (NES)</option>
                                                <option value="1390">Timecop (SNES)</option>
                                                <option value="860">Tinhead (Genesis)</option>
                                                <option value="1505">Tintin in Tibet (GBC)</option>
                                                <option value="1510">Tintin: Prisoners of the Sun (GBC)</option>
                                                <option value="54">Tiny Toon Adventures (NES)</option>
                                                <option value="1345">Tiny Toon Adventures 2: Trouble in Wackyland
                                                    (NES)</option>
                                                <option value="773">Tiny Toon Adventures: Babs' Big Break (GB)
                                                </option>
                                                <option value="347">Tiny Toon Adventures: Buster Busts Loose! (SNES)
                                                </option>
                                                <option value="342">Tiny Toon Adventures: Buster's Hidden Treasure
                                                    (Genesis)</option>
                                                <option value="566">Tiny Toon Adventures: Montana's Movie Madness
                                                    (GB)</option>
                                                <option value="2232">Tiny Toon Adventures: Wacky Sports Challenge
                                                    (SNES)</option>
                                                <option value="1573">Titenic (NES)</option>
                                                <option value="2092">TMNT: Mutant Melee (GC)</option>
                                                <option value="1512">Tobal 2 (PSX)</option>
                                                <option value="2129">Tobu Tobu Girl (GB)</option>
                                                <option value="1659">TOCA Touring Car Championship (PSX)</option>
                                                <option value="1258">Todd's Adventures in Slime World (Genesis)
                                                </option>
                                                <option value="1039">ToeJam &amp; Earl in Panic on Funkotron
                                                    (Genesis)</option>
                                                <option value="1012">Toki (NES)</option>
                                                <option value="1984">Toki Tori (GBC)</option>
                                                <option value="285">Toki: Going Ape Spit (Genesis)</option>
                                                <option value="362">Tom &amp; Jerry (GB)</option>
                                                <option value="353">Tom &amp; Jerry (NES)</option>
                                                <option value="840">Tom &amp; Jerry (SNES)</option>
                                                <option value="725">Tom and Jerry in Mouse Attacks! (GBC)</option>
                                                <option value="1305">Tom and Jerry: Frantic Antics! (Genesis)
                                                </option>
                                                <option value="1838">Tom and Jerry: The Movie (SMS)</option>
                                                <option value="391">Tom Clancy's Splinter Cell (GBA)</option>
                                                <option value="1097">Tom Clancy's Splinter Cell: Pandora Tomorrow
                                                    (GBA)</option>
                                                <option value="1916">Tomb Raider (PSX)</option>
                                                <option value="772">Tomb Raider Chronicles (PSX)</option>
                                                <option value="2142">Tomb Raider II: Starring Lara Croft (PSX)
                                                </option>
                                                <option value="2064">Tomb Raider III: Adventures of Lara Croft (PSX)
                                                </option>
                                                <option value="2209">Tomb Raider: The Last Revelation (PSX)</option>
                                                <option value="633">Tomba! (PSX)</option>
                                                <option value="1665">Tony Hawk's Pro Skater (GBC)</option>
                                                <option value="761">Tony Hawk's Pro Skater (N64)</option>
                                                <option value="1005">Tony Hawk's Pro Skater 2 (N64)</option>
                                                <option value="993">Tony Hawk's Pro Skater 2 (GBA)</option>
                                                <option value="419">Tony Hawk's Pro Skater 3 (N64)</option>
                                                <option value="1742">Tony Hawk's Pro Skater 3 (GC)</option>
                                                <option value="1750">Tony Hawk's Underground (GC)</option>
                                                <option value="1672">Tony Hawk's Underground 2 (GC)</option>
                                                <option value="1391">Toobin' (NES)</option>
                                                <option value="104">Top Gear (SNES)</option>
                                                <option value="665">Top Gear 2 (SNES)</option>
                                                <option value="1163">Top Gun (NES)</option>
                                                <option value="757">Top Hunter: Roddy &amp; Cathy (Arcade)</option>
                                                <option value="492">Total Recall (NES)</option>
                                                <option value="313">Totally Rad (NES)</option>
                                                <option value="1465">Totally Spies! (GBA)</option>
                                                <option value="2100">Toto World 3 (SMS)</option>
                                                <option value="1684">Touch! Gostop DS (DS)</option>
                                                <option value="1995">Touhou Kanjuden ~ Legacy of Lunatic Kingdom
                                                    (Windows)</option>
                                                <option value="2088">TowerFall Ascension (Linux)</option>
                                                <option value="1885">Town &amp; Country Surf Designs II: Thrilla's
                                                    Surfari (NES)</option>
                                                <option value="1842">Town &amp; Country Surf Designs: Wood &amp;
                                                    Water Rage (NES)</option>
                                                <option value="2014">Toy Story (NES)</option>
                                                <option value="1964">Track &amp; Field (Arcade)</option>
                                                <option value="35">Track &amp; Field (NES)</option>
                                                <option value="1817">Track &amp; Field II (NES)</option>
                                                <option value="541">Transformers: Convoy no Nazo (NES)</option>
                                                <option value="1550">Traysia (Genesis)</option>
                                                <option value="1247">Treasure Master (NES)</option>
                                                <option value="876">Trials of Mana (SNES)</option>
                                                <option value="554">Trip World (GB)</option>
                                                <option value="74">Trojan (NES)</option>
                                                <option value="1942">Tryrush Deppy (Saturn)</option>
                                                <option value="728">Turbo Turtle Adventure (GBA)</option>
                                                <option value="2117">Turnabout (PSX)</option>
                                                <option value="631">Turok 3: Shadow of Oblivion (N64)</option>
                                                <option value="438">Turok: Dinosaur Hunter (N64)</option>
                                                <option value="1989">Turok: Evolution (GBA)</option>
                                                <option value="461">Twinkle Tale (Genesis)</option>
                                                <option value="2133">Ty the Tasmanian Tiger 2: Bush Rescue (GBA)
                                                </option>
                                                <option value="406">U.N. Squadron (SNES)</option>
                                                <option value="1498">Ucchan Nanchan no Honō no Challenge: Denryū
                                                    IraIra Bō (N64)</option>
                                                <option value="456">Uchuu no Kishi Tekkaman Blade (GB)</option>
                                                <option value="483">Ufouria: The Saga (NES)</option>
                                                <option value="1069">Ultima: Exodus (NES)</option>
                                                <option value="1650">Ultima: Quest of the Avatar (NES)</option>
                                                <option value="557">Ultima: The False Prophet (SNES)</option>
                                                <option value="2205">Ultima: Warriors of Destiny (NES)</option>
                                                <option value="1082">Ultimate Mortal Kombat 3 (Genesis)</option>
                                                <option value="546">Ultimate Mortal Kombat 3 (SNES)</option>
                                                <option value="1304">Ultimate Qix (Genesis)</option>
                                                <option value="779">Ultraman Ball (SGB)</option>
                                                <option value="111">Umihara Kawase (SNES)</option>
                                                <option value="636">Umihara Kawase Shun (PSX)</option>
                                                <option value="991">Uncanny X-Men (NES)</option>
                                                <option value="2169">Undertale (Linux)</option>
                                                <option value="88">Uninvited (NES)</option>
                                                <option value="621">Universal Soldier (Genesis)</option>
                                                <option value="577">Urban Champion (NES)</option>
                                                <option value="2207">Urusei Yatsura: Lum no Wedding Bell (NES)
                                                </option>
                                                <option value="1907">Valis: The Fantasm Soldier (Genesis)</option>
                                                <option value="1714">Valkyrie no Bouken: Toki no Kagi Densetsu (NES)
                                                </option>
                                                <option value="2062">Valkyrie Profile (PSX)</option>
                                                <option value="727">Vampire Killer (MSX)</option>
                                                <option value="2103">Vandal Hearts (PSX)</option>
                                                <option value="1100">Vapor Trail: Hyper Offence Formation (Genesis)
                                                </option>
                                                <option value="2078">Völgarr the Viking (Linux)</option>
                                                <option value="368">Vectorman (Genesis)</option>
                                                <option value="366">Vectorman 2 (Genesis)</option>
                                                <option value="1780">Vegas Dream (NES)</option>
                                                <option value="146">Vegas Stakes (SNES)</option>
                                                <option value="162">Vice: Project Doom (NES)</option>
                                                <option value="713">Vigilante (PCE)</option>
                                                <option value="2111">Violent Storm (Arcade)</option>
                                                <option value="632">Virtual Boy Wario Land (VBoy)</option>
                                                <option value="909">Volley Fire (GB)</option>
                                                <option value="1442">VVVVVV (Windows)</option>
                                                <option value="2159">VVVVVV (Linux)</option>
                                                <option value="451">Wacky Races (NES)</option>
                                                <option value="147">Wai Wai World (NES)</option>
                                                <option value="1002">Wait and See! (NES)</option>
                                                <option value="1658">Wally Bear and the NO! Gang (NES)</option>
                                                <option value="1524">Warcraft II: The Dark Saga (PSX)</option>
                                                <option value="1186">Wardner (Genesis)</option>
                                                <option value="272">Wario Land 4 (GBA)</option>
                                                <option value="401">Wario Land II (GBC)</option>
                                                <option value="803">Wario Land II (SGB)</option>
                                                <option value="698">Wario Land: Super Mario Land 3 (GB)</option>
                                                <option value="521">Wario's Woods (SNES)</option>
                                                <option value="2113">Warlock (Genesis)</option>
                                                <option value="2174">Warriors of Fate (Arcade)</option>
                                                <option value="1086">Warsong (Genesis)</option>
                                                <option value="1971">Water Ski (A7800)</option>
                                                <option value="2026">Waterworld (VBoy)</option>
                                                <option value="1518">Wayne's World (NES)</option>
                                                <option value="1832">We're Back! - A Dinosaur's Story (GB)</option>
                                                <option value="710">Wendy: Every Witch Way (GBC)</option>
                                                <option value="212">Werewolf: The Last Warrior (NES)</option>
                                                <option value="381">Wetrix (N64)</option>
                                                <option value="826">Where in Time is Carmen Sandiego? (NES)</option>
                                                <option value="827">Where's Waldo? (NES)</option>
                                                <option value="962">Who Framed Roger Rabbit (NES)</option>
                                                <option value="143">Whomp ‛Em (NES)</option>
                                                <option value="346">Widget (NES)</option>
                                                <option value="2110">Wii Sports (Wii)</option>
                                                <option value="2056">Wild Arms (PSX)</option>
                                                <option value="142">Wild Guns (SNES)</option>
                                                <option value="1030">Wildwaters Extreme Kayak (N64)</option>
                                                <option value="1911">Winnie the Pooh: Adventures in the 100 Acre
                                                    Wood (GBC)</option>
                                                <option value="1494">Winx Club (GBA)</option>
                                                <option value="791">Wizardry III: Legacy of Llylgamyn (NES)</option>
                                                <option value="1083">Wizardry V: Heart of the Maelstrom (SNES)
                                                </option>
                                                <option value="488">Wizardry: Proving Grounds of the Mad Overlord
                                                    (NES)</option>
                                                <option value="549">Wizardry: The Knight of Diamonds (NES)</option>
                                                <option value="73">Wizards &amp; Warriors (NES)</option>
                                                <option value="189">Wizards &amp; Warriors III: Kuros: Visions of
                                                    Power (NES)</option>
                                                <option value="427">Wizards &amp; Warriors X: Fortress of Fear (GB)
                                                </option>
                                                <option value="1751">Wolfenstein 3D (DOS)</option>
                                                <option value="973">Wolverine (NES)</option>
                                                <option value="533">Wolverine: Adamantium Rage (Genesis)</option>
                                                <option value="431">Wonder Boy (SMS)</option>
                                                <option value="430">Wonder Boy III: The Dragon's Trap (SMS)</option>
                                                <option value="961">Wonder Boy in Monster Land (SMS)</option>
                                                <option value="298">Wonder Boy in Monster World (Genesis)</option>
                                                <option value="2141">Wonder Boy in Monster World (SMS)</option>
                                                <option value="1353">World of Goo (Wii)</option>
                                                <option value="1114">World of Illusion Starring Mickey Mouse and
                                                    Donald Duck (Genesis)</option>
                                                <option value="138">Wrath of the Black Manta (NES)</option>
                                                <option value="1548">Wrecking Crew '98 (SNES)</option>
                                                <option value="2182">X-COM: UFO Defense (PSX)</option>
                                                <option value="1595">X-Men (Genesis)</option>
                                                <option value="278">X-Men 2: Clone Wars (Genesis)</option>
                                                <option value="551">X-Men vs. Street Fighter (Arcade)</option>
                                                <option value="334">X-Men: Mutant Apocalypse (SNES)</option>
                                                <option value="1590">X-Men: The Official Game (GBA)</option>
                                                <option value="1502">X-Men: Wolverine's Rage (GBC)</option>
                                                <option value="341">X2: Wolverine's Revenge (GBA)</option>
                                                <option value="671">Xena: Warrior Princess (GBC)</option>
                                                <option value="1193">Xexyz (NES)</option>
                                                <option value="883">Yie Ar Kung-Fu (NES)</option>
                                                <option value="1424">Yie Ar Kung-Fu II: The Emperor Yie-Gah (MSX)
                                                </option>
                                                <option value="540">Yo! Noid (NES)</option>
                                                <option value="1444">Yoshi's Safari (SNES)</option>
                                                <option value="796">Yoshi's Story (N64)</option>
                                                <option value="825">You Have to Burn the Rope DS (DS)</option>
                                                <option value="2183">You Have to Win the Game (Linux)</option>
                                                <option value="11">Youkai Douchuuki (NES)</option>
                                                <option value="481">Young Merlin (SNES)</option>
                                                <option value="1725">Ys III: Wanderers from Ys (Genesis)</option>
                                                <option value="1626">Ys: The Vanished Omens (SMS)</option>
                                                <option value="1479">Yu-Gi-Oh! 5D's World Championship 2011: Over
                                                    the Nexus (DS)</option>
                                                <option value="1850">Yu-Gi-Oh! 7 Trials to Glory: World Championship
                                                    Tournament 2005 (GBA)</option>
                                                <option value="1408">Yu-Gi-Oh! Forbidden Memories (PSX)</option>
                                                <option value="1933">Yume Nikki (Windows)</option>
                                                <option value="766">Yume Penguin Monogatari (NES)</option>
                                                <option value="1356">Yuu Yuu Hakusho: Makai no Tobira (GB)</option>
                                                <option value="179">Zanac (NES)</option>
                                                <option value="629">Zany Golf (Genesis)</option>
                                                <option value="1686">Zapper: One Wicked Cricket! (GC)</option>
                                                <option value="1692">Zaxxon (Coleco)</option>
                                                <option value="62">Zelda II: The Adventure of Link (FDS)</option>
                                                <option value="208">Zelda II: The Adventure of Link (NES)</option>
                                                <option value="478">Zen: Intergalactic Ninja (NES)</option>
                                                <option value="2218">Zen: Intergalactic Ninja (GB)</option>
                                                <option value="1593">Zero Tolerance (Genesis)</option>
                                                <option value="1117">Zero Wing (Genesis)</option>
                                                <option value="279">Zero: The Kamikaze Squirrel (SNES)</option>
                                                <option value="950">Zillion (SMS)</option>
                                                <option value="243">Zoda's Revenge: StarTropics II (NES)</option>
                                                <option value="203">Zombies Ate My Neighbors (SNES)</option>
                                                <option value="1738">Zook Hero Z (GBC)</option>
                                                <option value="1889">Zook Man ZX4 (GBA)</option>
                                                <option value="2009">Zool: Ninja of the "Nth" Dimension (Genesis)
                                                </option>
                                                <option value="2185">Zool: Ninja of the "Nth" Dimension (SMS)
                                                </option>
                                            </select>
                                        </td>
                                        <td>
                                            <label htmlFor="m_category">Category:</label>
                                            <br></br>
                                            <select id="m_category" multiple={true} name="m_category[]"
                                                data-size="6">
                                                <option value="1001Y">Playaround</option>
                                                <option value="1005Y">Aims for maximum score</option>
                                                <option value="1010Y">Contains speed/entertainment tradeoffs
                                                </option>
                                                <option value="1012Y">Aims for in-game time instead of real-time
                                                </option>
                                                <option value="1015Y">Demonstration</option>
                                                <option value="2000Y">100% completion</option>
                                                <option value="2000N">Low% completion</option>
                                                <option value="2005Y">Maximum kills</option>
                                                <option value="2005N">Pacifist version</option>
                                                <option value="2010Y">Best ending</option>
                                                <option value="2020Y">Multiple games in one movie</option>
                                                <option value="3000Y">2 Players</option>
                                                <option value="3005Y">One player in a multiplayer game</option>
                                                <option value="3015Y">3 Players</option>
                                                <option value="3020Y">4 Players</option>
                                                <option value="3021Y">5 Players</option>
                                                <option value="3025Y">Uses a suboptimal character</option>
                                                <option value="3030Y">Uses death to save time</option>
                                                <option value="3030N">Forgoes time-saving death</option>
                                                <option value="3035Y">Takes damage to save time</option>
                                                <option value="3035N">Forgoes time-saving damage</option>
                                                <option value="3040Y">Uses warps</option>
                                                <option value="3040N">Forgoes warps</option>
                                                <option value="3041Y">Major skip glitch</option>
                                                <option value="3041N">Forgoes major skip glitch</option>
                                                <option value="3042Y">Final boss skip glitch</option>
                                                <option value="3042N">Forgoes final boss skip glitch</option>
                                                <option value="3045Y">Uses a game restart sequence</option>
                                                <option value="3045N">Forgoes a time-saving restart sequence
                                                </option>
                                                <option value="3050Y">Executes arbitrary code</option>
                                                <option value="3055Y">Heavy glitch abuse</option>
                                                <option value="3056Y">Forgoes time-saving glitches</option>
                                                <option value="3057Y">Corrupts save data</option>
                                                <option value="3057N">Forgoes save data corruption</option>
                                                <option value="3058Y">Corrupts memory</option>
                                                <option value="3058N">Foregoes memory corruption</option>
                                                <option value="3060Y">Heavy luck manipulation</option>
                                                <option value="3061Y">Uses uninitialized initial state</option>
                                                <option value="4000Y">Single level</option>
                                                <option value="4005Y">Uses easiest difficulty</option>
                                                <option value="4005N">Uses hardest difficulty</option>
                                                <option value="4010Y">Second quest/Post game-completion</option>
                                                <option value="4015Y">Starts from a saved state or SRAM</option>
                                                <option value="4020Y">Uses a level password</option>
                                                <option value="4025Y">Unofficial game</option>
                                                <option value="4026Y">Abuses unintended environment</option>
                                                <option value="9000Y">Genre: Action</option>
                                                <option value="9005Y">Genre: Adventure</option>
                                                <option value="9010Y">Genre: Fighting</option>
                                                <option value="9015Y">Genre: Platform</option>
                                                <option value="9020Y">Genre: Puzzle</option>
                                                <option value="9025Y">Genre: Racing</option>
                                                <option value="9030Y">Genre: RPG</option>
                                                <option value="9035Y">Genre: Shooter</option>
                                                <option value="9045Y">Genre: Sport</option>
                                                <option value="9050Y">Genre: Storybook</option>
                                                <option value="9055Y">Genre: Strategy</option>
                                                <option value="9056Y">Genre: Board</option>
                                                <option value="9057Y">Genre: Gameshow</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Misc:
                                            <br></br>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Recommended/Notable:</td>
                                                        <td>
                                                            <select id="m_recn" name="m_recn">
                                                                <option value="NONE" selected={true}>No
                                                                    filtering</option>
                                                                <option value="rec">Recommended only</option>
                                                                <option value="notable">Notable improvements only
                                                                </option>
                                                                <option value="recnotable">Recommended&amp;Notable
                                                                </option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Obsolete:</td>
                                                        <td>
                                                            <select id="m_obs" name="m_obs">
                                                                <option value="NONE" selected={true}>Current
                                                                    only</option>
                                                                <option value="obs">All</option>
                                                                <option value="obsonly">Obsolete only</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>Display options:
                                            <br></br>
                                            <input type="checkbox" id="m_noscreenshot" name="m_noscreenshot"
                                                value="1"/>No screenshots<br></br>
                                            <input type="checkbox" id="m_notier" name="m_notier" value="1"/>No tier
                                            icons<br></br>
                                            <input type="checkbox" id="m_noflags" name="m_noflags" value="1"/>No flag
                                            icons<br></br>Sort by:
                                            <select id="m_sort" name="m_sort">
                                                <option value="NONE" selected={true}>Default</option>
                                                <option value="Y">Combined rating</option>
                                                <option value="E">Entertainment raring</option>
                                                <option value="Q">Technical rating</option>
                                                <option value="U">Newest first</option>
                                                <option value="V">Oldest first</option>
                                                <option value="S">Shortest first</option>
                                                <option value="L">Longest first</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" name="fdecode" value="Filter"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style={{display: "inline-block", cursor: "pointer", color: "rgb(68, 68, 255)", textDecoration: "underline"}}
                                /*onclick="collapse_filter()" */id="filter_collapse">Collapse</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <br></br>
    </div>
    <br></br>
    {/*
    <script
        type="text/javascript">var gamedata = [{ "id": 1786, "name": "007: Agent Under Fire", "platform": "GC" }, { "id": 1364, "name": "007: Nightfire", "platform": "GC" }, { "id": 402, "name": "007: The World is Not Enough", "platform": "N64" }, { "id": 2002, "name": "10-Yard Fight", "platform": "NES" }, { "id": 2149, "name": "1001 Spikes", "platform": "Linux" }, { "id": 1841, "name": "3 Ninjas Kick Back", "platform": "Genesis" }, { "id": 2069, "name": "3-D Tetris", "platform": "VBoy" }, { "id": 458, "name": "8 Eyes", "platform": "NES" }, { "id": 75, "name": "A Boy and His Blob, David Crane's: Trouble on Blobolonia", "platform": "NES" }, { "id": 487, "name": "A Boy and His Blob: The Rescue of Princess Blobette", "platform": "GB" }, { "id": 101, "name": "A Nightmare On Elm Street", "platform": "NES" }, { "id": 1183, "name": "A Week of Garfield", "platform": "NES" }, { "id": 1715, "name": "A-mazing Tater", "platform": "GB" }, { "id": 882, "name": "Abadox: The Deadly Inner War", "platform": "NES" }, { "id": 669, "name": "Action 52: The Cheetahmen", "platform": "NES" }, { "id": 1529, "name": "Action Man: Robot Atak", "platform": "GBA" }, { "id": 1527, "name": "Action Man: Search for Base X", "platform": "GBC" }, { "id": 1802, "name": "Action Pachio", "platform": "SNES" }, { "id": 148, "name": "ActRaiser", "platform": "SNES" }, { "id": 1066, "name": "ActRaiser 2", "platform": "SNES" }, { "id": 718, "name": "Advance Wars", "platform": "GBA" }, { "id": 588, "name": "Advance Wars 2: Black Hole Rising", "platform": "GBA" }, { "id": 1892, "name": "Advanced Dungeons & Dragons: Cloudy Mountain", "platform": "INTV" }, { "id": 865, "name": "Advanced Dungeons & Dragons: Heroes of the Lance", "platform": "NES" }, { "id": 2101, "name": "Advanced Dungeons & Dragons: Treasure of Tarmin", "platform": "INTV" }, { "id": 1401, "name": "Adventure", "platform": "A2600" }, { "id": 42, "name": "Adventure Island 3", "platform": "NES" }, { "id": 528, "name": "Adventure Island 4, Hudson's", "platform": "NES" }, { "id": 314, "name": "Adventure Island II", "platform": "NES" }, { "id": 1833, "name": "Adventure Island IV", "platform": "NES" }, { "id": 293, "name": "Adventure Island, Hudson's", "platform": "NES" }, { "id": 1302, "name": "Adventure Time: Hey Ice King! Why\u2019d You Steal Our Garbage?!", "platform": "DS" }, { "id": 877, "name": "Adventures in the Magic Kingdom", "platform": "NES" }, { "id": 123, "name": "Adventures of Lolo", "platform": "NES" }, { "id": 247, "name": "Adventures of Lolo 2", "platform": "NES" }, { "id": 445, "name": "Adventures of Lolo 3", "platform": "NES" }, { "id": 977, "name": "Adventures of Tom Sawyer", "platform": "NES" }, { "id": 1994, "name": "Adventures of Yogi Bear", "platform": "SNES" }, { "id": 797, "name": "Aero the Acro-Bat", "platform": "Genesis" }, { "id": 2060, "name": "Aero the Acro-Bat 2", "platform": "Genesis" }, { "id": 1664, "name": "After Burst", "platform": "GB" }, { "id": 245, "name": "Air", "platform": "NES" }, { "id": 432, "name": "Air 2", "platform": "NES" }, { "id": 976, "name": "Air Fortress", "platform": "NES" }, { "id": 1669, "name": "Airlock", "platform": "A2600" }, { "id": 2005, "name": "Aladdin (Hummer Team)", "platform": "NES" }, { "id": 1523, "name": "Aladdin, Disney's", "platform": "SMS" }, { "id": 139, "name": "Aladdin, Disney's", "platform": "SNES" }, { "id": 204, "name": "Aladdin, Disney's", "platform": "Genesis" }, { "id": 604, "name": "Alex Kidd in Miracle World", "platform": "SMS" }, { "id": 413, "name": "Alex Kidd in Shinobi World", "platform": "SMS" }, { "id": 174, "name": "Alex Kidd in the Enchanted Castle", "platform": "Genesis" }, { "id": 2192, "name": "Alex Kidd: High-Tech World", "platform": "SMS" }, { "id": 1847, "name": "Alex Kidd: The Lost Stars", "platform": "SMS" }, { "id": 981, "name": "ALF", "platform": "SMS" }, { "id": 1014, "name": "Alfred Chicken", "platform": "NES" }, { "id": 2102, "name": "Alien 3", "platform": "SMS" }, { "id": 1015, "name": "Alien 3", "platform": "NES" }, { "id": 2083, "name": "Alien 3", "platform": "Genesis" }, { "id": 795, "name": "Alien Carnage", "platform": "DOS" }, { "id": 1426, "name": "Alien Hominid", "platform": "GBA" }, { "id": 555, "name": "Alien Soldier", "platform": "Genesis" }, { "id": 1575, "name": "Alien Storm", "platform": "Genesis" }, { "id": 1503, "name": "Alien Syndrome", "platform": "SMS" }, { "id": 2188, "name": "Aliens: Neoplasma", "platform": "ZXS" }, { "id": 600, "name": "Alisia Dragoon", "platform": "Genesis" }, { "id": 1435, "name": "Alter Ego", "platform": "NES" }, { "id": 92, "name": "Altered Beast", "platform": "Genesis" }, { "id": 1737, "name": "Altered Space: A 3-D Alien Adventure", "platform": "GB" }, { "id": 322, "name": "Amagon", "platform": "NES" }, { "id": 1016, "name": "American Gladiators", "platform": "NES" }, { "id": 1216, "name": "An American Tail: Fievel Goes West", "platform": "SNES" }, { "id": 2215, "name": "Angry Birds", "platform": "NES" }, { "id": 2214, "name": "Angry Birds (Nice Code)", "platform": "NES" }, { "id": 534, "name": "Animaniacs", "platform": "SNES" }, { "id": 2048, "name": "Animorphs: Shattered Reality", "platform": "PSX" }, { "id": 848, "name": "Antarctic Adventure", "platform": "MSX" }, { "id": 1585, "name": "Anubis II", "platform": "Wii" }, { "id": 1680, "name": "Apple Cider Spider", "platform": "AppleII" }, { "id": 1077, "name": "Archon: The Light and the Dark", "platform": "NES" }, { "id": 544, "name": "Ardy Lightfoot", "platform": "SNES" }, { "id": 988, "name": "Argos no Juujiken", "platform": "SMS" }, { "id": 63, "name": "Arkanoid", "platform": "NES" }, { "id": 1893, "name": "Arm Wrestling", "platform": "Arcade" }, { "id": 1558, "name": "Armadillo", "platform": "NES" }, { "id": 2202, "name": "Armored Core", "platform": "PSX" }, { "id": 1629, "name": "Arsene Lupin the 3rd - Babiron no Ougon Densetsu", "platform": "MSX" }, { "id": 847, "name": "Arsene Lupin the 3rd and the Castle of Cagliostro", "platform": "MSX" }, { "id": 479, "name": "Arumana no Kiseki", "platform": "FDS" }, { "id": 1409, "name": "Ast\u00e9rix", "platform": "SMS" }, { "id": 721, "name": "Ast\u00e9rix", "platform": "NES" }, { "id": 1902, "name": "Ast\u00e9rix & Ob\u00e9lix", "platform": "SNES" }, { "id": 875, "name": "Ast\u00e9rix & Ob\u00e9lix: Bash Them All!", "platform": "GBA" }, { "id": 1301, "name": "Ast\u00e9rix and the Great Rescue", "platform": "Genesis" }, { "id": 2001, "name": "Ast\u00e9rix: Search for Dogmatix", "platform": "GBC" }, { "id": 1970, "name": "Ast\u00e9rix: The Gallic War", "platform": "PSX" }, { "id": 1829, "name": "Astro Robo Sasa", "platform": "NES" }, { "id": 90, "name": "Astyanax", "platform": "NES" }, { "id": 23, "name": "Atlantis no Nazo", "platform": "NES" }, { "id": 1691, "name": "Atlantis: The Lost Empire", "platform": "GBA" }, { "id": 1480, "name": "Attack of the Killer Tomatoes", "platform": "NES" }, { "id": 1024, "name": "Avatar: The Last Airbender", "platform": "GBA" }, { "id": 614, "name": "Avenging Spirit", "platform": "GB" }, { "id": 1021, "name": "Avoid the Noid", "platform": "DOS" }, { "id": 2094, "name": "Axiom Verge", "platform": "Linux" }, { "id": 617, "name": "Azure Dreams", "platform": "PSX" }, { "id": 1935, "name": "B.C. Dash", "platform": "Uzebox" }, { "id": 1974, "name": "B.C.'s Quest for Tires", "platform": "Coleco" }, { "id": 685, "name": "B.O.B.", "platform": "Genesis" }, { "id": 237, "name": "B.O.B.", "platform": "SNES" }, { "id": 2251, "name": "Baba Is You", "platform": "Linux" }, { "id": 1849, "name": "Baby Felix Halloween", "platform": "GBC" }, { "id": 1143, "name": "Back to the Future 2 & 3", "platform": "NES" }, { "id": 1517, "name": "Back to the Future Part III", "platform": "Genesis" }, { "id": 496, "name": "Bad Dudes", "platform": "NES" }, { "id": 1078, "name": "Balloon Fight", "platform": "NES" }, { "id": 813, "name": "Bananan Ouji no Daibouken", "platform": "NES" }, { "id": 511, "name": "Banjo-Kazooie", "platform": "N64" }, { "id": 1731, "name": "Banjo-Kazooie: Grunty's Revenge", "platform": "GBA" }, { "id": 1710, "name": "Barbie", "platform": "NES" }, { "id": 2019, "name": "Barbie Game Girl", "platform": "GB" }, { "id": 820, "name": "Barbie in The 12 Dancing Princesses", "platform": "DS" }, { "id": 1877, "name": "Barnstorming", "platform": "A2600" }, { "id": 1579, "name": "Barnyard Blaster", "platform": "A7800" }, { "id": 2242, "name": "Baseball", "platform": "NES" }, { "id": 365, "name": "Batman", "platform": "Genesis" }, { "id": 592, "name": "Batman", "platform": "GB" }, { "id": 57, "name": "Batman", "platform": "NES" }, { "id": 455, "name": "Batman Begins", "platform": "GBA" }, { "id": 1070, "name": "Batman Forever", "platform": "Genesis" }, { "id": 1898, "name": "Batman Returns", "platform": "Genesis" }, { "id": 1653, "name": "Batman Returns", "platform": "SMS" }, { "id": 1728, "name": "Batman Returns", "platform": "Lynx" }, { "id": 437, "name": "Batman: Return of the Joker", "platform": "NES" }, { "id": 595, "name": "Batman: Return of the Joker", "platform": "GB" }, { "id": 1926, "name": "Batman: The Caped Crusader", "platform": "C64" }, { "id": 1471, "name": "Battle City", "platform": "NES" }, { "id": 2155, "name": "Battle City: Zeng Ge Hack", "platform": "NES" }, { "id": 1760, "name": "Battle Dodge Ball", "platform": "SNES" }, { "id": 96, "name": "Battle Formula: Super Spy Hunter", "platform": "NES" }, { "id": 1785, "name": "Battle Kid 2: Mountain of Torment", "platform": "NES" }, { "id": 764, "name": "Battle Kid: Fortress of Peril", "platform": "NES" }, { "id": 66, "name": "Battletoads", "platform": "NES" }, { "id": 700, "name": "Battletoads", "platform": "GB" }, { "id": 558, "name": "Battletoads & Double Dragon: The Ultimate Team", "platform": "SNES" }, { "id": 778, "name": "Battletoads & Double Dragon: The Ultimate Team", "platform": "NES" }, { "id": 206, "name": "Battletoads in Battlemaniacs", "platform": "SNES" }, { "id": 1273, "name": "Bay Route", "platform": "Arcade" }, { "id": 1181, "name": "B\u00e9b\u00e9's Kids", "platform": "SNES" }, { "id": 1826, "name": "Beauty and the Beast", "platform": "NES" }, { "id": 164, "name": "Beavis and Butt-Head", "platform": "Genesis" }, { "id": 1825, "name": "Beetlejuice", "platform": "NES" }, { "id": 1690, "name": "Beyblade: Metal Masters", "platform": "DS" }, { "id": 1809, "name": "Bible Adventures", "platform": "NES" }, { "id": 786, "name": "Bible Adventures", "platform": "Genesis" }, { "id": 1803, "name": "Bible Buffet", "platform": "NES" }, { "id": 359, "name": "Biker Mice from Mars", "platform": "SNES" }, { "id": 1360, "name": "Billy Hatcher And The Giant Egg", "platform": "GC" }, { "id": 771, "name": "Bio Force Ape", "platform": "NES" }, { "id": 1041, "name": "Bio Menace: Episode 1 - Dr. Mangle's Lab", "platform": "DOS" }, { "id": 404, "name": "Bionic Commando", "platform": "GB" }, { "id": 681, "name": "Bionic Commando", "platform": "Arcade" }, { "id": 32, "name": "Bionic Commando", "platform": "NES" }, { "id": 1398, "name": "Bishi Bashi Special", "platform": "PSX" }, { "id": 1688, "name": "Bishi Bashi Special 2", "platform": "PSX" }, { "id": 1662, "name": "Bishi Bashi Special 3: Step Champ", "platform": "PSX" }, { "id": 1199, "name": "Bishoujo Senshi Sailor Moon R", "platform": "GB" }, { "id": 1618, "name": "Blades of Vengeance", "platform": "Genesis" }, { "id": 82, "name": "Blaster Master", "platform": "NES" }, { "id": 408, "name": "Blaster Master 2", "platform": "Genesis" }, { "id": 351, "name": "Blaster Master: Enemy Below", "platform": "GBC" }, { "id": 1706, "name": "Blockout", "platform": "Lynx" }, { "id": 724, "name": "Bloody Wolf", "platform": "PCE" }, { "id": 1381, "name": "Bobby is Going Home", "platform": "A2600" }, { "id": 643, "name": "Bobby's World", "platform": "SNES" }, { "id": 2234, "name": "Boing!", "platform": "A2600" }, { "id": 1035, "name": "Bomberman 64", "platform": "N64" }, { "id": 1862, "name": "Bomberman 64: The Second Attack", "platform": "N64" }, { "id": 1927, "name": "Bomberman Quest", "platform": "GBC" }, { "id": 144, "name": "Bonanza Bros.", "platform": "Genesis" }, { "id": 2168, "name": "Bonk 3: Bonk's Big Adventure", "platform": "PCE" }, { "id": 686, "name": "Bonk's Adventure", "platform": "PCE" }, { "id": 1499, "name": "Bonk's Adventure", "platform": "NES" }, { "id": 526, "name": "Bonk's Revenge", "platform": "PCE" }, { "id": 1514, "name": "Boogerman: A Pick and Flick Adventure", "platform": "Genesis" }, { "id": 1233, "name": "Boomer's Adventure in Asmik World", "platform": "GB" }, { "id": 1734, "name": "Borderline", "platform": "SG1000" }, { "id": 2025, "name": "Boston Bomb Club", "platform": "DOS" }, { "id": 205, "name": "Boulder Dash", "platform": "NES" }, { "id": 1508, "name": "Boulder Dash EX", "platform": "GBA" }, { "id": 2034, "name": "Boxing", "platform": "A2600" }, { "id": 1939, "name": "Boxxle", "platform": "GB" }, { "id": 1992, "name": "Boxxle II", "platform": "GB" }, { "id": 1452, "name": "Braid", "platform": "Windows" }, { "id": 662, "name": "Brain Age", "platform": "DS" }, { "id": 1704, "name": "Bram Stoker's Dracula", "platform": "Genesis" }, { "id": 881, "name": "Bram Stoker's Dracula", "platform": "NES" }, { "id": 1533, "name": "Brandish", "platform": "SNES" }, { "id": 1080, "name": "BreakThru", "platform": "NES" }, { "id": 723, "name": "Breath of Fire", "platform": "SNES" }, { "id": 568, "name": "Breath of Fire II", "platform": "SNES" }, { "id": 774, "name": "Breath of Fire III", "platform": "PSX" }, { "id": 607, "name": "Bubba 'n' Stix", "platform": "Genesis" }, { "id": 61, "name": "Bubble Bobble", "platform": "NES" }, { "id": 661, "name": "Bubble Ghost", "platform": "GB" }, { "id": 1746, "name": "Bubsy 3D", "platform": "PSX" }, { "id": 222, "name": "Bubsy in Claws Encounters of the Furred Kind", "platform": "SNES" }, { "id": 105, "name": "Bucky O'Hare", "platform": "NES" }, { "id": 2039, "name": "Bugs Bunny & Taz: Time Busters", "platform": "PSX" }, { "id": 2186, "name": "BurgerTime", "platform": "NES" }, { "id": 953, "name": "Bushido Blade 2", "platform": "PSX" }, { "id": 1202, "name": "Buster Brothers", "platform": "GB" }, { "id": 1061, "name": "Buzz and Waldog", "platform": "NES" }, { "id": 1627, "name": "C64anabalt", "platform": "C64" }, { "id": 2198, "name": "Cabbage Patch Kids: Adventures in the Park", "platform": "A2600" }, { "id": 2095, "name": "Cabbage Patch Kids: The Patch Puppy Rescue", "platform": "GBA" }, { "id": 1997, "name": "Cacoma Knight in Bizyland", "platform": "SNES" }, { "id": 261, "name": "Cadash", "platform": "Genesis" }, { "id": 1196, "name": "California Games", "platform": "NES" }, { "id": 899, "name": "Captain America and the Avengers", "platform": "NES" }, { "id": 1917, "name": "Cars", "platform": "DS" }, { "id": 1836, "name": "Castelian", "platform": "NES" }, { "id": 1355, "name": "Castle Adventure", "platform": "DOS" }, { "id": 173, "name": "Castle of Dragon", "platform": "NES" }, { "id": 135, "name": "Castle of Illusion: Starring Mickey Mouse", "platform": "Genesis" }, { "id": 553, "name": "Castle of Illusion: Starring Mickey Mouse", "platform": "SMS" }, { "id": 7, "name": "Castlevania", "platform": "NES" }, { "id": 788, "name": "Castlevania Chronicles", "platform": "PSX" }, { "id": 392, "name": "Castlevania II: Belmont's Revenge", "platform": "GB" }, { "id": 2073, "name": "Castlevania II: Simon's Quest", "platform": "FDS" }, { "id": 8, "name": "Castlevania II: Simon's Quest", "platform": "NES" }, { "id": 55, "name": "Castlevania III: Dracula's Curse", "platform": "NES" }, { "id": 433, "name": "Castlevania Legends", "platform": "SGB" }, { "id": 2252, "name": "Castlevania Legends", "platform": "GB" }, { "id": 253, "name": "Castlevania: Aria of Sorrow", "platform": "GBA" }, { "id": 485, "name": "Castlevania: Bloodlines", "platform": "Genesis" }, { "id": 196, "name": "Castlevania: Circle of the Moon", "platform": "GBA" }, { "id": 562, "name": "Castlevania: Dawn of Sorrow", "platform": "DS" }, { "id": 264, "name": "Castlevania: Dracula X", "platform": "SNES" }, { "id": 327, "name": "Castlevania: Harmony of Dissonance", "platform": "GBA" }, { "id": 561, "name": "Castlevania: Legacy of Darkness", "platform": "N64" }, { "id": 872, "name": "Castlevania: Order of Ecclesia", "platform": "DS" }, { "id": 520, "name": "Castlevania: Portrait of Ruin", "platform": "DS" }, { "id": 547, "name": "Castlevania: Rondo of Blood", "platform": "PCECD" }, { "id": 2054, "name": "Castlevania: Spectral Interlude", "platform": "ZXS" }, { "id": 535, "name": "Castlevania: Symphony of the Night", "platform": "Saturn" }, { "id": 497, "name": "Castlevania: Symphony of the Night", "platform": "PSX" }, { "id": 1932, "name": "Castlevania: The Adventure ReBirth", "platform": "Wii" }, { "id": 1231, "name": "Catrap", "platform": "GB" }, { "id": 1407, "name": "Catwoman", "platform": "GBC" }, { "id": 818, "name": "Cave Story", "platform": "Windows" }, { "id": 1638, "name": "CD-Man Version 2.0", "platform": "DOS" }, { "id": 2115, "name": "Celeste", "platform": "Linux" }, { "id": 1208, "name": "Chack'n Pop", "platform": "NES" }, { "id": 263, "name": "Chakan: The Forever Man", "platform": "Genesis" }, { "id": 495, "name": "Chameleon Twist", "platform": "N64" }, { "id": 1007, "name": "Chameleon Twist 2", "platform": "N64" }, { "id": 1711, "name": "Cheese Cat-Astrophe Starring Speedy Gonzales", "platform": "SMS" }, { "id": 830, "name": "Cheetahmen II", "platform": "NES" }, { "id": 2044, "name": "Chester Cheetah: Too Cool to Fool", "platform": "SNES" }, { "id": 2030, "name": "Chester Cheetah: Wild Wild Quest", "platform": "Genesis" }, { "id": 2097, "name": "Chiki Chiki Boys", "platform": "Genesis" }, { "id": 30, "name": "Chip 'n Dale: Rescue Rangers", "platform": "NES" }, { "id": 31, "name": "Chip 'n Dale: Rescue Rangers 2", "platform": "NES" }, { "id": 1938, "name": "Chip-chan Kick!", "platform": "PCFX" }, { "id": 756, "name": "Chocobo no Fushigi na Dungeon", "platform": "PSX" }, { "id": 697, "name": "Chocobo Racing", "platform": "PSX" }, { "id": 1913, "name": "Choplifter", "platform": "C64" }, { "id": 1560, "name": "Choplifter", "platform": "A7800" }, { "id": 319, "name": "Choujin Sentai Jetman", "platform": "NES" }, { "id": 251, "name": "Chrono Trigger", "platform": "SNES" }, { "id": 117, "name": "Chuck Rock", "platform": "Genesis" }, { "id": 641, "name": "Chuck Rock II: Son of Chuck", "platform": "Genesis" }, { "id": 1846, "name": "Circus Caper", "platform": "NES" }, { "id": 86, "name": "Circus Charlie", "platform": "NES" }, { "id": 2040, "name": "City Connection", "platform": "NES" }, { "id": 650, "name": "Civilization, Sid Meier's", "platform": "SNES" }, { "id": 187, "name": "Clash at Demonhead", "platform": "NES" }, { "id": 1613, "name": "classNameic Kong Complete", "platform": "SNES" }, { "id": 1218, "name": "Claymates", "platform": "SNES" }, { "id": 2057, "name": "Cliffhanger", "platform": "NES" }, { "id": 1853, "name": "Clock Tower", "platform": "SNES" }, { "id": 2052, "name": "Clockwork Knight", "platform": "Saturn" }, { "id": 1209, "name": "Clu Clu Land", "platform": "NES" }, { "id": 1246, "name": "Club Penguin: Elite Penguin Force", "platform": "DS" }, { "id": 1602, "name": "Club Penguin: Elite Penguin Force: Herbert's Revenge", "platform": "DS" }, { "id": 879, "name": "Clue", "platform": "SNES" }, { "id": 1504, "name": "Cobra Command", "platform": "NES" }, { "id": 81, "name": "Cobra Triangle", "platform": "NES" }, { "id": 1694, "name": "Coca Cola Kid", "platform": "GG" }, { "id": 1089, "name": "Cocoron", "platform": "NES" }, { "id": 969, "name": "Code Name: Viper", "platform": "NES" }, { "id": 156, "name": "Comix Zone", "platform": "Genesis" }, { "id": 1057, "name": "Commander Keen: Episode 1 - Marooned on Mars", "platform": "DOS" }, { "id": 1050, "name": "Commander Keen: Episode 2 - The Earth Explodes", "platform": "DOS" }, { "id": 822, "name": "Commander Keen: Episode 3 - Keen Must Die!", "platform": "DOS" }, { "id": 1006, "name": "Commander Keen: Episode 4 - Secret of the Oracle", "platform": "DOS" }, { "id": 630, "name": "Commander Keen: Episode 5 - The Armageddon Machine", "platform": "DOS" }, { "id": 1029, "name": "Commander Keen: Episode 6 - Aliens Ate My Baby Sitter!", "platform": "DOS" }, { "id": 1516, "name": "Commander Keen: Keen Dreams", "platform": "DOS" }, { "id": 2061, "name": "Conan: The Mysteries of Time", "platform": "NES" }, { "id": 1923, "name": "Congo Bongo", "platform": "C64" }, { "id": 1221, "name": "Congo's Caper", "platform": "SNES" }, { "id": 369, "name": "Conquest of the Crystal Palace", "platform": "NES" }, { "id": 748, "name": "Contra", "platform": "MSX" }, { "id": 18, "name": "Contra", "platform": "NES" }, { "id": 543, "name": "Contra 4", "platform": "DS" }, { "id": 658, "name": "Contra Force", "platform": "NES" }, { "id": 94, "name": "Contra III: The Alien Wars", "platform": "SNES" }, { "id": 93, "name": "Contra: Hard Corps", "platform": "Genesis" }, { "id": 1924, "name": "Contra: The Alien Wars", "platform": "GB" }, { "id": 1630, "name": "Cosmo Police: Galivan", "platform": "NES" }, { "id": 1165, "name": "Cosmo Tank", "platform": "GB" }, { "id": 1839, "name": "Crack Down", "platform": "Genesis" }, { "id": 1090, "name": "Crash 'n' the Boys: Street Challenge", "platform": "NES" }, { "id": 609, "name": "Crash Bandicoot", "platform": "PSX" }, { "id": 608, "name": "Crash Bandicoot 2: Cortex Strikes Back", "platform": "PSX" }, { "id": 707, "name": "Crash Bandicoot 2: N-Tranced", "platform": "GBA" }, { "id": 859, "name": "Crash Bandicoot: The Huge Adventure", "platform": "GBA" }, { "id": 1431, "name": "Crash Bandicoot: Warped", "platform": "PSX" }, { "id": 1754, "name": "Crash Team Racing", "platform": "PSX" }, { "id": 1709, "name": "Cratermaze", "platform": "PCE" }, { "id": 978, "name": "Crayon Shin-Chan 4", "platform": "SGB" }, { "id": 2027, "name": "Crazy Balloon", "platform": "A2600" }, { "id": 1634, "name": "Crazy Climber", "platform": "WSWAN" }, { "id": 1552, "name": "Crazy Taxi", "platform": "GC" }, { "id": 1438, "name": "Croc 2", "platform": "GBC" }, { "id": 743, "name": "Croc: Legend of the Gobbos", "platform": "PSX" }, { "id": 890, "name": "Cross Fire", "platform": "NES" }, { "id": 569, "name": "Crusader of Centy", "platform": "Genesis" }, { "id": 2096, "name": "Crystal Beans from Dungeon Explorer", "platform": "SNES" }, { "id": 2031, "name": "Crystal Caves: Volume 1 - Troubles with Twibbles", "platform": "DOS" }, { "id": 207, "name": "Crystalis", "platform": "NES" }, { "id": 1150, "name": "Cybernoid: The Fighting Machine", "platform": "NES" }, { "id": 575, "name": "Cyborg 009", "platform": "SNES" }, { "id": 459, "name": "Cyborg Hunter", "platform": "SMS" }, { "id": 2016, "name": "D\/Generation", "platform": "DOS" }, { "id": 706, "name": "Daffy Duck: Fowl Play", "platform": "GBC" }, { "id": 1696, "name": "Daffy Duck: The Marvin Missions", "platform": "GB" }, { "id": 682, "name": "Daffy Duck: The Marvin Missions", "platform": "SGB" }, { "id": 356, "name": "Daffy Duck: The Marvin Missions", "platform": "SNES" }, { "id": 2085, "name": "Dahna: Megami Tanjou", "platform": "Genesis" }, { "id": 1944, "name": "DAIVA Story 6: Nirsartia no Gyokuza", "platform": "NES" }, { "id": 1689, "name": "Danan: The Jungle Fighter", "platform": "SMS" }, { "id": 730, "name": "Dangerous Dave", "platform": "DOS" }, { "id": 153, "name": "Dark Castle", "platform": "Genesis" }, { "id": 1648, "name": "Darkman", "platform": "NES" }, { "id": 69, "name": "Darkwing Duck", "platform": "NES" }, { "id": 1392, "name": "Dash Galaxy in the Alien Asylum", "platform": "NES" }, { "id": 125, "name": "D\u00e9j\u00e0 Vu", "platform": "NES" }, { "id": 295, "name": "D\u00e9j\u00e0 Vu I & II: The Casebooks of Ace Harding", "platform": "GBC" }, { "id": 106, "name": "Deadly Towers", "platform": "NES" }, { "id": 1252, "name": "Death Duel", "platform": "Genesis" }, { "id": 522, "name": "DecapAttack", "platform": "Genesis" }, { "id": 2184, "name": "Decathlon", "platform": "C64" }, { "id": 1472, "name": "Defender of the Crown", "platform": "NES" }, { "id": 2212, "name": "Delta Warp", "platform": "NGP" }, { "id": 1326, "name": "Dementium: The Ward", "platform": "DS" }, { "id": 312, "name": "Demon Sword", "platform": "NES" }, { "id": 460, "name": "Demon's Crest", "platform": "SNES" }, { "id": 1722, "name": "Denki Blocks!", "platform": "GBA" }, { "id": 701, "name": "Densetsu no Stafy", "platform": "GBA" }, { "id": 490, "name": "Desert Demolition", "platform": "Genesis" }, { "id": 291, "name": "Destiny of an Emperor", "platform": "NES" }, { "id": 1934, "name": "Devil Island", "platform": "GBC" }, { "id": 2221, "name": "Devilish: The Next Possession", "platform": "Genesis" }, { "id": 1948, "name": "Diamond Mine", "platform": "C64" }, { "id": 395, "name": "Diddy Kong Racing", "platform": "N64" }, { "id": 1454, "name": "Die Hard", "platform": "NES" }, { "id": 664, "name": "Digger: The Legend of the Lost City", "platform": "NES" }, { "id": 1369, "name": "Digimon Battle Spirit", "platform": "GBA" }, { "id": 2208, "name": "Digimon Ruby", "platform": "GBA" }, { "id": 1619, "name": "Digimon Sapphire", "platform": "GBA" }, { "id": 1789, "name": "DinoCity", "platform": "SNES" }, { "id": 2012, "name": "Discworld II: Mortality Bytes!", "platform": "PSX" }, { "id": 2160, "name": "Disney's 102 Dalmatians: Puppies to the Rescue", "platform": "PSX" }, { "id": 798, "name": "Disney's Bonkers", "platform": "SNES" }, { "id": 1890, "name": "Disney's Extreme Skate Adventure", "platform": "GC" }, { "id": 980, "name": "Disney's Hercules", "platform": "PSX" }, { "id": 2070, "name": "Disney's Lilo & Stitch", "platform": "GBA" }, { "id": 2125, "name": "Disney's Magical Quest 3 Starring Mickey & Donald", "platform": "SNES" }, { "id": 1497, "name": "Disney's The Jungle Book", "platform": "SNES" }, { "id": 1720, "name": "Disney's The Lion King 1 1\/2", "platform": "GBA" }, { "id": 500, "name": "Disney's Toy Story", "platform": "Genesis" }, { "id": 2011, "name": "Disney's Toy Story", "platform": "SNES" }, { "id": 384, "name": "Dizzy the Adventurer", "platform": "NES" }, { "id": 1985, "name": "DK: King of Swing", "platform": "GBA" }, { "id": 1551, "name": "Doc Louis's Punch-Out!!", "platform": "Wii" }, { "id": 1540, "name": "Dodge 'Em", "platform": "A2600" }, { "id": 1197, "name": "Dokapon Monster Hunter", "platform": "GBA" }, { "id": 1770, "name": "Doki! Doki! Yuuenchi", "platform": "NES" }, { "id": 2166, "name": "Donald Land", "platform": "NES" }, { "id": 2107, "name": "Donkey Kong", "platform": "INTV" }, { "id": 2106, "name": "Donkey Kong", "platform": "ZXS" }, { "id": 1702, "name": "Donkey Kong", "platform": "A2600" }, { "id": 2105, "name": "Donkey Kong", "platform": "A7800" }, { "id": 2241, "name": "Donkey Kong", "platform": "GBC" }, { "id": 2017, "name": "Donkey Kong", "platform": "Arcade" }, { "id": 210, "name": "Donkey Kong", "platform": "NES" }, { "id": 2108, "name": "Donkey Kong", "platform": "Coleco" }, { "id": 1883, "name": "Donkey Kong & Donkey Kong Jr.", "platform": "NES" }, { "id": 2109, "name": "Donkey Kong (Atarisoft)", "platform": "C64" }, { "id": 866, "name": "Donkey Kong 3", "platform": "NES" }, { "id": 1657, "name": "Donkey Kong 5: The Journey of Over Time and Space", "platform": "GBC" }, { "id": 1901, "name": "Donkey Kong 64", "platform": "N64" }, { "id": 132, "name": "Donkey Kong Country", "platform": "SNES" }, { "id": 1931, "name": "Donkey Kong Country", "platform": "GBA" }, { "id": 2171, "name": "Donkey Kong Country 2", "platform": "GBA" }, { "id": 258, "name": "Donkey Kong Country 2: Diddy's Kong Quest", "platform": "SNES" }, { "id": 252, "name": "Donkey Kong Country 3: Dixie Kong's Double Trouble!", "platform": "SNES" }, { "id": 239, "name": "Donkey Kong Jr.", "platform": "NES" }, { "id": 1909, "name": "Donkey Kong Junior", "platform": "A2600" }, { "id": 1033, "name": "Donkey Kong Land", "platform": "GB" }, { "id": 619, "name": "Donkey Kong Land 2", "platform": "SGB" }, { "id": 2131, "name": "Donkey Kong Land III", "platform": "GBC" }, { "id": 2068, "name": "Donkey Kong, DK Jr., DK 3 & DK Jr. Math", "platform": "NES" }, { "id": 1645, "name": "Donkey Kong: Original Edition", "platform": "NES" }, { "id": 2074, "name": "Doom 64", "platform": "N64" }, { "id": 1708, "name": "Doom II: Hell on Earth", "platform": "DOOM" }, { "id": 2204, "name": "Doom Troopers: Mutant Chronicles", "platform": "Genesis" }, { "id": 1952, "name": "Dora the Explorer: Super Spies", "platform": "GBA" }, { "id": 1979, "name": "Dora the Explorer: The Search for Pirate Pig's Treasure", "platform": "GBA" }, { "id": 1544, "name": "Doraemon: Midori no Wakusei Dokidoki Daikyuushutsu!", "platform": "GBA" }, { "id": 656, "name": "DoReMi Fantasy: Milon no Dokidoki Daibouken", "platform": "SNES" }, { "id": 1783, "name": "Dottori Kun", "platform": "Arcade" }, { "id": 1022, "name": "Double Dare", "platform": "NES" }, { "id": 1564, "name": "Double Dragon", "platform": "Genesis" }, { "id": 2006, "name": "Double Dragon", "platform": "Arcade" }, { "id": 50, "name": "Double Dragon", "platform": "NES" }, { "id": 51, "name": "Double Dragon II: The Revenge", "platform": "NES" }, { "id": 594, "name": "Double Dragon II: The Revenge", "platform": "PCECD" }, { "id": 52, "name": "Double Dragon III: The Sacred Stones", "platform": "NES" }, { "id": 1010, "name": "Double Moon Densetsu", "platform": "NES" }, { "id": 1637, "name": "Doug's Big Game", "platform": "GBC" }, { "id": 1953, "name": "Dr. Franken", "platform": "GB" }, { "id": 1532, "name": "Dr. Franken II", "platform": "GB" }, { "id": 832, "name": "Dr. Jekyll and Mr. Hyde", "platform": "NES" }, { "id": 518, "name": "Dr. Mario", "platform": "NES" }, { "id": 2220, "name": "Dr. Muto", "platform": "GBA" }, { "id": 1108, "name": "Dr. Robotnik's Mean Bean Machine", "platform": "Genesis" }, { "id": 1946, "name": "Drag Race", "platform": "Arcade" }, { "id": 1217, "name": "Dragon Ball Z: Buu's Fury", "platform": "GBA" }, { "id": 949, "name": "Dragon Ball Z: Super Gokuden: Totsugeki-hen", "platform": "SNES" }, { "id": 2032, "name": "Dragon Ball Z: Super Saiya Densetsu", "platform": "SNES" }, { "id": 868, "name": "Dragon Ball Z: The Legacy of Goku", "platform": "GBA" }, { "id": 1477, "name": "Dragon Ball Z: Ultimate Battle 22", "platform": "PSX" }, { "id": 216, "name": "Dragon Ball: Advanced Adventure", "platform": "GBA" }, { "id": 739, "name": "Dragon Crystal", "platform": "SMS" }, { "id": 514, "name": "Dragon Egg!", "platform": "PCE" }, { "id": 300, "name": "Dragon Fighter", "platform": "NES" }, { "id": 2029, "name": "Dragon Quest IX: Sentinels of the Starry Skies", "platform": "DS" }, { "id": 992, "name": "Dragon Quest V", "platform": "SNES" }, { "id": 1354, "name": "Dragon Unit", "platform": "Arcade" }, { "id": 1565, "name": "Dragon View", "platform": "SNES" }, { "id": 67, "name": "Dragon Warrior", "platform": "NES" }, { "id": 281, "name": "Dragon Warrior II", "platform": "NES" }, { "id": 367, "name": "Dragon Warrior III", "platform": "NES" }, { "id": 277, "name": "Dragon Warrior IV", "platform": "NES" }, { "id": 405, "name": "Dragon Warrior Monsters", "platform": "GBC" }, { "id": 1367, "name": "Dragon Warrior Monsters 2: Tara's Adventure", "platform": "GBC" }, { "id": 776, "name": "Dragon's Lair", "platform": "SNES" }, { "id": 95, "name": "Dragon's Lair", "platform": "NES" }, { "id": 1531, "name": "Dragon: The Bruce Lee Story", "platform": "SNES" }, { "id": 2028, "name": "Dragonfire", "platform": "Coleco" }, { "id": 1910, "name": "Dragster", "platform": "A2600" }, { "id": 1812, "name": "Drake & Josh", "platform": "GBA" }, { "id": 1433, "name": "Driar", "platform": "NES" }, { "id": 1269, "name": "Drill Dozer", "platform": "GBA" }, { "id": 1140, "name": "Duck Hunt", "platform": "NES" }, { "id": 26, "name": "DuckTales", "platform": "NES" }, { "id": 1906, "name": "DuckTales", "platform": "GB" }, { "id": 27, "name": "DuckTales 2", "platform": "NES" }, { "id": 1592, "name": "Duke Nukem 3D", "platform": "Genesis" }, { "id": 397, "name": "Duke Nukem 64", "platform": "N64" }, { "id": 2036, "name": "Duke Nukem II", "platform": "DOS" }, { "id": 649, "name": "Duke Nukem: Episode 1 - Shrapnel City", "platform": "DOS" }, { "id": 1794, "name": "Duke Nukem: Episode 2 - Mission: Moonbase", "platform": "DOS" }, { "id": 2021, "name": "Duke Nukem: Episode 3 - Trapped in the Future!", "platform": "DOS" }, { "id": 695, "name": "Dungeon Explorer", "platform": "PCE" }, { "id": 475, "name": "Dungeon Magic: Sword of the Elements", "platform": "NES" }, { "id": 672, "name": "Dungeons & Dragons: Warriors of the Eternal Sun", "platform": "Genesis" }, { "id": 380, "name": "Dynamite Headdy", "platform": "Genesis" }, { "id": 1372, "name": "E.T.: The Extra-Terrestrial", "platform": "A2600" }, { "id": 565, "name": "E.V.O.: Search for Eden", "platform": "SNES" }, { "id": 330, "name": "Earnest Evans", "platform": "Genesis" }, { "id": 296, "name": "EarthBound", "platform": "SNES" }, { "id": 527, "name": "EarthBound Beginnings", "platform": "NES" }, { "id": 232, "name": "Earthworm Jim", "platform": "Genesis" }, { "id": 1724, "name": "Earthworm Jim 2", "platform": "Genesis" }, { "id": 2203, "name": "Earthworm Jim 3D", "platform": "N64" }, { "id": 716, "name": "Earthworm Jim: Special Edition", "platform": "SegaCD" }, { "id": 228, "name": "Ecco the Dolphin", "platform": "Genesis" }, { "id": 466, "name": "Ecco: The Tides of Time", "platform": "Genesis" }, { "id": 1821, "name": "Ed, Edd n Eddy: The Mis-Edventures", "platform": "GC" }, { "id": 1718, "name": "Eek! The Cat", "platform": "SNES" }, { "id": 150, "name": "Eggerland", "platform": "FDS" }, { "id": 2231, "name": "Eggsplode", "platform": "NES" }, { "id": 956, "name": "Ehrgeiz: God Bless The Ring", "platform": "PSX" }, { "id": 763, "name": "Einh\u00e4nder", "platform": "PSX" }, { "id": 233, "name": "El Viento", "platform": "Genesis" }, { "id": 257, "name": "Elevator Action", "platform": "NES" }, { "id": 2023, "name": "Elevator Action -Returns-", "platform": "Saturn" }, { "id": 2187, "name": "Enduro Racer", "platform": "SMS" }, { "id": 687, "name": "Epic Pinball", "platform": "DOS" }, { "id": 1491, "name": "Eryi's Action", "platform": "Windows" }, { "id": 2191, "name": "Esper Dream", "platform": "FDS" }, { "id": 442, "name": "ESWAT: City Under Siege", "platform": "Genesis" }, { "id": 733, "name": "Evel Knievel", "platform": "GBC" }, { "id": 990, "name": "Eversion", "platform": "Windows" }, { "id": 635, "name": "Ex-Mutants", "platform": "Genesis" }, { "id": 68, "name": "Excitebike", "platform": "NES" }, { "id": 548, "name": "Extra Mario Bros.", "platform": "NES" }, { "id": 276, "name": "F-Zero", "platform": "SNES" }, { "id": 834, "name": "F-Zero X", "platform": "N64" }, { "id": 1226, "name": "F-Zero: Maximum Velocity", "platform": "GBA" }, { "id": 498, "name": "Family Feud", "platform": "SNES" }, { "id": 1878, "name": "Fantasia", "platform": "Genesis" }, { "id": 337, "name": "Fantasy Zone", "platform": "NES" }, { "id": 1340, "name": "Fantasy Zone II: The Tears of Opa-Opa", "platform": "SMS" }, { "id": 414, "name": "Fatal Labyrinth", "platform": "Genesis" }, { "id": 163, "name": "Faxanadu", "platform": "NES" }, { "id": 103, "name": "Felix the Cat", "platform": "NES" }, { "id": 1697, "name": "Fester's Quest", "platform": "NES" }, { "id": 1763, "name": "Fighter Destiny 2", "platform": "N64" }, { "id": 1762, "name": "Fighters Destiny", "platform": "N64" }, { "id": 1654, "name": "Final Doom", "platform": "DOOM" }, { "id": 202, "name": "Final Fantasy", "platform": "NES" }, { "id": 270, "name": "Final Fantasy Adventure", "platform": "GB" }, { "id": 1677, "name": "Final Fantasy II", "platform": "NES" }, { "id": 737, "name": "Final Fantasy III", "platform": "NES" }, { "id": 454, "name": "Final Fantasy IV", "platform": "SNES" }, { "id": 1013, "name": "Final Fantasy IX", "platform": "PSX" }, { "id": 705, "name": "Final Fantasy Legend II", "platform": "GB" }, { "id": 250, "name": "Final Fantasy Mystic Quest", "platform": "SNES" }, { "id": 1957, "name": "Final Fantasy Tactics Advance", "platform": "GBA" }, { "id": 394, "name": "Final Fantasy V", "platform": "SNES" }, { "id": 654, "name": "Final Fantasy V & VI", "platform": "SNES" }, { "id": 287, "name": "Final Fantasy VI", "platform": "SNES" }, { "id": 2165, "name": "Final Fantasy VII", "platform": "PSX" }, { "id": 792, "name": "Final Fantasy VIII", "platform": "PSX" }, { "id": 1986, "name": "Final Fantasy: Crystal Chronicles", "platform": "GC" }, { "id": 862, "name": "Final Fight", "platform": "Arcade" }, { "id": 318, "name": "Final Fight 3", "platform": "SNES" }, { "id": 1904, "name": "Final Zone II", "platform": "PCECD" }, { "id": 1445, "name": "Finding Nemo", "platform": "GBA" }, { "id": 1098, "name": "Fire 'n Ice", "platform": "NES" }, { "id": 806, "name": "Fire Emblem", "platform": "GBA" }, { "id": 1410, "name": "Fire Emblem: Fuuin no Tsurugi", "platform": "GBA" }, { "id": 1588, "name": "Fire Emblem: Shadow Dragon", "platform": "DS" }, { "id": 462, "name": "Fire Emblem: The Sacred Stones", "platform": "GBA" }, { "id": 2143, "name": "FireStriker", "platform": "SNES" }, { "id": 1418, "name": "Fisher-Price: Firehouse Rescue", "platform": "NES" }, { "id": 262, "name": "Fist of the North Star", "platform": "NES" }, { "id": 160, "name": "Flashback: The Quest for Identity", "platform": "Genesis" }, { "id": 916, "name": "Flicky", "platform": "Genesis" }, { "id": 2158, "name": "Forbidden Forest", "platform": "C64" }, { "id": 2046, "name": "Formation Z", "platform": "NES" }, { "id": 1046, "name": "Fortified Zone", "platform": "GB" }, { "id": 1380, "name": "Frankenstein's Monster", "platform": "A2600" }, { "id": 1670, "name": "Frankenstein: The Monster Returns", "platform": "NES" }, { "id": 60, "name": "Friday the 13th", "platform": "NES" }, { "id": 1539, "name": "Frogger", "platform": "A2600" }, { "id": 1951, "name": "Frogger", "platform": "C64" }, { "id": 1423, "name": "Frogger", "platform": "MSX" }, { "id": 1449, "name": "Frogger 2", "platform": "GBC" }, { "id": 810, "name": "Frogger 2: Swampy's Revenge", "platform": "PSX" }, { "id": 1511, "name": "Frogger II: ThreeeDeep!", "platform": "Coleco" }, { "id": 1475, "name": "Frogger's Adventures: The Rescue", "platform": "GC" }, { "id": 1554, "name": "Frogger: He's Back!", "platform": "PSX" }, { "id": 833, "name": "Front Line", "platform": "NES" }, { "id": 1972, "name": "Front Line", "platform": "Arcade" }, { "id": 1788, "name": "Front Mission Series: Gun Hazard", "platform": "SNES" }, { "id": 2237, "name": "FTL: Faster Than Light", "platform": "Linux" }, { "id": 2247, "name": "Fushigi no Dungeon: Fuurai no Shiren GB: Tsukikage Mura no Kaibu", "platform": "GBC" }, { "id": 2253, "name": "Fushigi no Yume no Alice", "platform": "PCE" }, { "id": 1420, "name": "Futari wa Precure Max Heart: Maji? Maji!? Fight de IN Janai", "platform": "GBA" }, { "id": 292, "name": "G.I. Joe", "platform": "NES" }, { "id": 652, "name": "G.I. Joe: The Atlantis Factor", "platform": "NES" }, { "id": 1376, "name": "Gain Ground", "platform": "Genesis" }, { "id": 1412, "name": "Galaga", "platform": "MSX" }, { "id": 1413, "name": "Galaga", "platform": "A7800" }, { "id": 1414, "name": "Galaxian", "platform": "MSX" }, { "id": 1973, "name": "Game & Watch Collection: Donkey Kong", "platform": "DS" }, { "id": 2223, "name": "Game Boy Camera", "platform": "GB" }, { "id": 476, "name": "Ganbare Goemon 2", "platform": "SNES" }, { "id": 744, "name": "Ganryu", "platform": "Arcade" }, { "id": 599, "name": "Ganso!! Yanchamaru", "platform": "GB" }, { "id": 1705, "name": "Garfield and His Nine Lives", "platform": "GBA" }, { "id": 434, "name": "Garfield: Caught in the Act", "platform": "Genesis" }, { "id": 1011, "name": "Gargoyle's Quest II: The Demon Darkness", "platform": "NES" }, { "id": 259, "name": "Gargoyle's Quest: Ghosts'n Goblins", "platform": "GB" }, { "id": 218, "name": "Gauntlet", "platform": "NES" }, { "id": 855, "name": "Gekisou Sentai Car Ranger", "platform": "SNES" }, { "id": 1925, "name": "Generations Lost", "platform": "Genesis" }, { "id": 2196, "name": "Genpei Touma Den", "platform": "PCE" }, { "id": 983, "name": "George Foreman's KO Boxing", "platform": "SMS" }, { "id": 494, "name": "Gex 3: Deep Cover Gecko", "platform": "N64" }, { "id": 572, "name": "Gex 3: Deep Pocket Gecko", "platform": "GBC" }, { "id": 363, "name": "Gex 64: Enter the Gecko", "platform": "N64" }, { "id": 571, "name": "Ghostbusters", "platform": "NES" }, { "id": 1281, "name": "Ghostbusters", "platform": "Genesis" }, { "id": 1744, "name": "Ghosts 'n Goblins", "platform": "Arcade" }, { "id": 6, "name": "Ghosts 'n Goblins", "platform": "NES" }, { "id": 505, "name": "Ghoul School", "platform": "NES" }, { "id": 524, "name": "Ghouls 'n Ghosts", "platform": "Arcade" }, { "id": 506, "name": "Ghouls 'n Ghosts", "platform": "Genesis" }, { "id": 102, "name": "Gimmick!", "platform": "NES" }, { "id": 373, "name": "Glover", "platform": "N64" }, { "id": 1881, "name": "Go! Go! Tank", "platform": "GB" }, { "id": 225, "name": "Gods", "platform": "Genesis" }, { "id": 1386, "name": "Goemon's Great Adventure", "platform": "N64" }, { "id": 116, "name": "Golden Axe", "platform": "Genesis" }, { "id": 1827, "name": "Golden Axe", "platform": "Arcade" }, { "id": 1263, "name": "Golden Axe III", "platform": "Genesis" }, { "id": 984, "name": "Golden Axe Warrior", "platform": "SMS" }, { "id": 1678, "name": "Golden Sun", "platform": "GBA" }, { "id": 410, "name": "GoldenEye 007", "platform": "N64" }, { "id": 1900, "name": "GoldenEye: 007", "platform": "Wii" }, { "id": 1919, "name": "Golf", "platform": "NES" }, { "id": 1091, "name": "Golgo 13: Top Secret Episode", "platform": "NES" }, { "id": 1805, "name": "Gomola Speed", "platform": "PCE" }, { "id": 124, "name": "Goof Troop, Disney's", "platform": "SNES" }, { "id": 838, "name": "Gordo 106: The Mutated Lab Monkey", "platform": "Lynx" }, { "id": 1569, "name": "Gotcha! The Sport!", "platform": "NES" }, { "id": 21, "name": "Gradius", "platform": "NES" }, { "id": 122, "name": "Gradius III", "platform": "SNES" }, { "id": 2007, "name": "Grand Prix", "platform": "A2600" }, { "id": 951, "name": "Grand Theft Auto 2", "platform": "PSX" }, { "id": 584, "name": "Grand Theft Auto: Chinatown Wars", "platform": "DS" }, { "id": 28, "name": "Gremlins 2: The New Batch", "platform": "NES" }, { "id": 1771, "name": "Gremlins 2: The New Batch", "platform": "GB" }, { "id": 1572, "name": "GS Mikami: Joreishi wa Nice Body", "platform": "SNES" }, { "id": 110, "name": "Guerrilla War", "platform": "NES" }, { "id": 1519, "name": "Guilty Gear", "platform": "PSX" }, { "id": 1965, "name": "Guilty Gear Petit", "platform": "WSWAN" }, { "id": 1640, "name": "Guilty Gear Petit 2", "platform": "WSWAN" }, { "id": 1813, "name": "Guilty Gear X: Advance Edition", "platform": "GBA" }, { "id": 1777, "name": "Gummy Bears Minigolf", "platform": "Wii" }, { "id": 1212, "name": "Gumshoe", "platform": "NES" }, { "id": 118, "name": "Gunstar Heroes", "platform": "Genesis" }, { "id": 576, "name": "Gunstar Super Heroes", "platform": "GBA" }, { "id": 1215, "name": "Gyromite", "platform": "NES" }, { "id": 1434, "name": "H.E.R.O.", "platform": "A2600" }, { "id": 559, "name": "Hagane", "platform": "SNES" }, { "id": 747, "name": "Hajime no Ippo: The Fighting!", "platform": "GBA" }, { "id": 1807, "name": "Halo 2600", "platform": "A2600" }, { "id": 382, "name": "Hammerin' Harry", "platform": "NES" }, { "id": 1534, "name": "Hamtaro: Ham-Hams Unite!", "platform": "GBC" }, { "id": 1092, "name": "Hard Relay Mario", "platform": "NES" }, { "id": 2089, "name": "Harry Potter 2: The Black Art Wtrstle Edition", "platform": "GBC" }, { "id": 1723, "name": "Harry Potter and the Chamber of Secrets", "platform": "GC" }, { "id": 1921, "name": "Harry Potter and the Chamber of Secrets", "platform": "GBC" }, { "id": 1339, "name": "Harry Potter and the Sorcerer's Stone", "platform": "GBA" }, { "id": 1399, "name": "Harry Potter and the Sorcerer's Stone", "platform": "GBC" }, { "id": 1905, "name": "Harry Potter and the Sorcerer's Stone", "platform": "PSX" }, { "id": 2230, "name": "Harvest Moon 3 GBC", "platform": "GBC" }, { "id": 1476, "name": "Haunted House", "platform": "MSX" }, { "id": 2194, "name": "Heart of Darkness", "platform": "PSX" }, { "id": 529, "name": "Heart of the Alien", "platform": "SegaCD" }, { "id": 1333, "name": "Heavy Shreddin'", "platform": "NES" }, { "id": 1831, "name": "Hero's Quest", "platform": "DOS" }, { "id": 2190, "name": "Hexcite: The Shapes of Victory", "platform": "GBC" }, { "id": 1717, "name": "Hey Arnold! The Movie", "platform": "GBA" }, { "id": 22, "name": "Hi no Tori: Gaou no Bouken", "platform": "NES" }, { "id": 1236, "name": "High Seas Havoc", "platform": "Genesis" }, { "id": 489, "name": "High Speed", "platform": "NES" }, { "id": 1176, "name": "Hikaru no Go", "platform": "GBA" }, { "id": 715, "name": "Hocus Pocus", "platform": "DOS" }, { "id": 2147, "name": "Hogs of War", "platform": "PSX" }, { "id": 674, "name": "Hokuto no Ken", "platform": "SMS" }, { "id": 275, "name": "Holy Diver", "platform": "NES" }, { "id": 1180, "name": "Home Alone 2: Lost in New York", "platform": "Genesis" }, { "id": 1158, "name": "Home Alone 2: Lost in New York", "platform": "NES" }, { "id": 299, "name": "Hook", "platform": "SNES" }, { "id": 666, "name": "Hook", "platform": "NES" }, { "id": 1828, "name": "Hudson Hawk", "platform": "NES" }, { "id": 1631, "name": "Hugo 2 1\/2", "platform": "GBC" }, { "id": 1432, "name": "Hunchback", "platform": "MSX" }, { "id": 344, "name": "Hydlide", "platform": "NES" }, { "id": 1515, "name": "Hyper Princess Pitch", "platform": "Windows" }, { "id": 2255, "name": "I Wanna Be The Boshy", "platform": "Windows" }, { "id": 2058, "name": "I Want My Mommy", "platform": "A2600" }, { "id": 133, "name": "Ice Climber", "platform": "NES" }, { "id": 2132, "name": "Iji", "platform": "Windows" }, { "id": 1547, "name": "Ikachan", "platform": "Windows" }, { "id": 1922, "name": "Ikari Warriors", "platform": "NES" }, { "id": 2249, "name": "Ikari Warriors II: Victory Road", "platform": "NES" }, { "id": 1362, "name": "Ikaruga", "platform": "GC" }, { "id": 211, "name": "Illusion of Gaia", "platform": "SNES" }, { "id": 1966, "name": "Impossible Mission", "platform": "SMS" }, { "id": 582, "name": "Indiana Jones and the Last Crusade", "platform": "Genesis" }, { "id": 817, "name": "Indiana Jones and the Last Crusade (Taito)", "platform": "NES" }, { "id": 2127, "name": "INK", "platform": "Linux" }, { "id": 470, "name": "Inspector Gadget", "platform": "SNES" }, { "id": 589, "name": "Instruments of Chaos starring Young Indiana Jones", "platform": "Genesis" }, { "id": 597, "name": "International Superstar Soccer Deluxe", "platform": "SNES" }, { "id": 755, "name": "Invasion of the Zombie Monsters", "platform": "MSX" }, { "id": 1483, "name": "Inversion", "platform": "NES" }, { "id": 1775, "name": "Iron Man", "platform": "Genesis" }, { "id": 1470, "name": "Iron Tank: The Invasion of Normandy", "platform": "NES" }, { "id": 185, "name": "Ironsword: Wizards & Warriors II", "platform": "NES" }, { "id": 2213, "name": "It's Mr. Pants", "platform": "GBA" }, { "id": 750, "name": "Ivy the Kiwi?", "platform": "DS" }, { "id": 155, "name": "Jackal", "platform": "NES" }, { "id": 49, "name": "Jackie Chan's Action Kung Fu", "platform": "NES" }, { "id": 1982, "name": "Jail Break", "platform": "Arcade" }, { "id": 1599, "name": "James Bond 007: The Duel", "platform": "Genesis" }, { "id": 1096, "name": "James Bond Jr.", "platform": "SNES" }, { "id": 1395, "name": "James Bond Jr.", "platform": "NES" }, { "id": 1693, "name": "James Pond 2: Codename: RoboCod", "platform": "Genesis" }, { "id": 417, "name": "James Pond 3: Operation Starfish", "platform": "Genesis" }, { "id": 181, "name": "Jaws", "platform": "NES" }, { "id": 3, "name": "Jazz Jackrabbit", "platform": "DOS" }, { "id": 1451, "name": "Jetpack", "platform": "DOS" }, { "id": 550, "name": "Jewel Master", "platform": "Genesis" }, { "id": 1639, "name": "Jill of the Jungle: Volume I - Jill of the Jungle", "platform": "DOS" }, { "id": 1991, "name": "Jill of the Jungle: Volume II - Jill Goes Underground", "platform": "DOS" }, { "id": 2053, "name": "Jill of the Jungle: Volume III - Jill Saves The Prince", "platform": "DOS" }, { "id": 1336, "name": "Joe & Mac", "platform": "NES" }, { "id": 1787, "name": "Joe & Mac 2: Lost in the Tropics", "platform": "SNES" }, { "id": 443, "name": "John Romero's Daikatana", "platform": "GBC" }, { "id": 1699, "name": "Johnny Test", "platform": "DS" }, { "id": 33, "name": "Journey to Silius", "platform": "NES" }, { "id": 1614, "name": "Joust", "platform": "NES" }, { "id": 1937, "name": "Joyrider", "platform": "Uzebox" }, { "id": 1584, "name": "Judge Dredd", "platform": "SNES" }, { "id": 2098, "name": "Jumpin' Kid: Jack to Mame no Ki Monogatari", "platform": "NES" }, { "id": 1394, "name": "Jumpman Junior", "platform": "Coleco" }, { "id": 2176, "name": "Junction", "platform": "Genesis" }, { "id": 1915, "name": "Jungle Hunt", "platform": "C64" }, { "id": 1950, "name": "Jungle Hunt", "platform": "Arcade" }, { "id": 896, "name": "Jurassic Park", "platform": "NES" }, { "id": 260, "name": "Jurassic Park", "platform": "Genesis" }, { "id": 1266, "name": "Jurassic Park III: Island Attack", "platform": "GBA" }, { "id": 1819, "name": "Jurassic Park Part 2: The Chaos Continues", "platform": "GB" }, { "id": 2090, "name": "Jurassic Park: Rampage Edition", "platform": "Genesis" }, { "id": 857, "name": "Jurassic Park: The Lost World", "platform": "NES" }, { "id": 1791, "name": "Justice League Task Force", "platform": "SNES" }, { "id": 1312, "name": "Ka-Ge-Ki: Fists of Steel", "platform": "Genesis" }, { "id": 87, "name": "Kabuki: Quantum Fighter", "platform": "NES" }, { "id": 563, "name": "Kaeru no Tame ni Kane wa Naru", "platform": "GB" }, { "id": 1766, "name": "Kaizo Mario Bros. 3", "platform": "NES" }, { "id": 1422, "name": "Kaizo Mario World 3", "platform": "SNES" }, { "id": 348, "name": "Kaizou Choujin Shubibinman Zero", "platform": "SNES" }, { "id": 1334, "name": "Kamen no Ninja: Akakage", "platform": "NES" }, { "id": 1537, "name": "Kangaroo", "platform": "A2600" }, { "id": 1065, "name": "Kanshaku tamanage Kantar\u014d no T\u014dkaid\u014d Goj\u016bsan-tsugi", "platform": "NES" }, { "id": 1960, "name": "Kao the Kangaroo", "platform": "GBA" }, { "id": 1912, "name": "Karate Champ", "platform": "Arcade" }, { "id": 1941, "name": "Karate Champ: Player vs Player", "platform": "Arcade" }, { "id": 89, "name": "Karnov", "platform": "NES" }, { "id": 519, "name": "Kato Chan & Ken Chan", "platform": "PCE" }, { "id": 611, "name": "Kaze Kiri: Ninja Action", "platform": "PCECD" }, { "id": 2013, "name": "Keitai Denjuu Telefang 2: Speed Version", "platform": "GBA" }, { "id": 768, "name": "Keitai Denjuu Telefang: Speed Version", "platform": "GBC" }, { "id": 532, "name": "Keith Courage in Alpha Zones", "platform": "PCE" }, { "id": 290, "name": "Kendo Rage", "platform": "SNES" }, { "id": 412, "name": "Kenseiden", "platform": "SMS" }, { "id": 947, "name": "Kero Kero Keroppi no Daibouken 2: Donuts Ike ha Oosawagi!", "platform": "NES" }, { "id": 244, "name": "Kick Master", "platform": "NES" }, { "id": 887, "name": "Kickle Cubicle", "platform": "NES" }, { "id": 180, "name": "Kid Chameleon", "platform": "Genesis" }, { "id": 85, "name": "Kid Dracula", "platform": "NES" }, { "id": 411, "name": "Kid Dracula", "platform": "GB" }, { "id": 46, "name": "Kid Icarus", "platform": "NES" }, { "id": 1248, "name": "Kid Klown in Crazy Chase", "platform": "SNES" }, { "id": 651, "name": "Kid Kool and the Quest for the Seven Wonder Herbs", "platform": "NES" }, { "id": 48, "name": "Kid Niki 2", "platform": "NES" }, { "id": 477, "name": "Kid Niki 3", "platform": "NES" }, { "id": 1315, "name": "Kid Niki: Radical Ninja", "platform": "NES" }, { "id": 1837, "name": "Kiki KaiKai", "platform": "MSX" }, { "id": 350, "name": "Killer Instinct", "platform": "SNES" }, { "id": 1416, "name": "King & Balloon", "platform": "MSX" }, { "id": 325, "name": "King Kong 2: Ikari no Megaton Punch", "platform": "NES" }, { "id": 335, "name": "King's Bounty", "platform": "Genesis" }, { "id": 1144, "name": "King's Quest V: Absence Makes the Heart Go Yonder!", "platform": "NES" }, { "id": 2071, "name": "King's Quest: Quest for the Crown", "platform": "DOS" }, { "id": 449, "name": "King's Quest: Quest for the Crown", "platform": "SMS" }, { "id": 1456, "name": "Kingdom Hearts 358\/2 Days", "platform": "DS" }, { "id": 1591, "name": "Kingdom Hearts Re:coded", "platform": "DS" }, { "id": 1280, "name": "Kingdom Hearts: Chain of Memories", "platform": "GBA" }, { "id": 396, "name": "Kirby & The Amazing Mirror", "platform": "GBA" }, { "id": 974, "name": "Kirby 64: The Crystal Shards", "platform": "N64" }, { "id": 714, "name": "Kirby Squeak Squad", "platform": "DS" }, { "id": 145, "name": "Kirby Super Star", "platform": "SNES" }, { "id": 41, "name": "Kirby's Adventure", "platform": "NES" }, { "id": 215, "name": "Kirby's Avalanche", "platform": "SNES" }, { "id": 333, "name": "Kirby's Dream Course", "platform": "SNES" }, { "id": 240, "name": "Kirby's Dream Land", "platform": "GB" }, { "id": 1660, "name": "Kirby's Dream Land 2", "platform": "GB" }, { "id": 385, "name": "Kirby's Dream Land 2", "platform": "SGB" }, { "id": 954, "name": "Kirby's Dream Land 3", "platform": "SNES" }, { "id": 447, "name": "Kirby's Pinball Land", "platform": "GB" }, { "id": 740, "name": "Kirby's Star Stacker", "platform": "SNES" }, { "id": 1823, "name": "Kirby: Canvas Curse", "platform": "DS" }, { "id": 734, "name": "Kishin Douji Zenki: Batoru Raiden", "platform": "SNES" }, { "id": 1945, "name": "Kiteretsu Daihyakka", "platform": "NES" }, { "id": 304, "name": "Kiwi Kraze: A Bird-Brained Adventure!", "platform": "NES" }, { "id": 1453, "name": "Klonoa: Door to Phantomile", "platform": "PSX" }, { "id": 809, "name": "Knight Quest", "platform": "GB" }, { "id": 790, "name": "Knightmare 2: The Maze of Galious", "platform": "MSX" }, { "id": 355, "name": "Knuckles in Sonic the Hedgehog", "platform": "Genesis" }, { "id": 1732, "name": "Knuckles in Sonic the Hedgehog 2", "platform": "Genesis" }, { "id": 284, "name": "Knuckles' Chaotix", "platform": "32X" }, { "id": 677, "name": "Konami GB Collection Vol. 1: Castlevania: The Adventure", "platform": "GBC" }, { "id": 1615, "name": "Krazy Ace Miniature Golf", "platform": "Lynx" }, { "id": 2008, "name": "Krusty's Super Fun House", "platform": "SNES" }, { "id": 45, "name": "Kung Fu", "platform": "NES" }, { "id": 985, "name": "Kung Fu Kid", "platform": "SMS" }, { "id": 1958, "name": "Kung-Fu Master", "platform": "Arcade" }, { "id": 474, "name": "Kung-Fu Master", "platform": "GB" }, { "id": 531, "name": "Kuru Kuru Kururin", "platform": "GBA" }, { "id": 536, "name": "Kururin Paradise", "platform": "GBA" }, { "id": 372, "name": "Kwirk", "platform": "GB" }, { "id": 305, "name": "Kyatto Ninden Teyandee", "platform": "NES" }, { "id": 1274, "name": "Ky\u014dry\u016b Sentai Zyuranger", "platform": "NES" }, { "id": 2175, "name": "L'Empereur", "platform": "NES" }, { "id": 2170, "name": "Labyrinth", "platform": "NES" }, { "id": 704, "name": "Lada: The Ultimate Challenge", "platform": "DOS" }, { "id": 1267, "name": "Lady Sia", "platform": "GBA" }, { "id": 186, "name": "Lagoon", "platform": "SNES" }, { "id": 675, "name": "Lagrange Point", "platform": "NES" }, { "id": 738, "name": "Lamborghini: American Challenge", "platform": "SNES" }, { "id": 1570, "name": "Land of Illusion: Starring Mickey Mouse", "platform": "SMS" }, { "id": 1153, "name": "Landstalker: The Treasures of King Nole", "platform": "Genesis" }, { "id": 1609, "name": "Langrisser 2", "platform": "Genesis" }, { "id": 1587, "name": "Last Action Hero", "platform": "GB" }, { "id": 1782, "name": "Lee Trevino's Fighting Golf", "platform": "NES" }, { "id": 1969, "name": "Legacy of Kain: Soul Reaver", "platform": "PSX" }, { "id": 183, "name": "Legacy of the Wizard", "platform": "NES" }, { "id": 717, "name": "Legend of Hero Tonma", "platform": "PCE" }, { "id": 972, "name": "Legend of the Ghost Lion", "platform": "NES" }, { "id": 1733, "name": "Lego Bionicle", "platform": "GBA" }, { "id": 1918, "name": "Lego Star Wars II: The Original Trilogy", "platform": "DS" }, { "id": 501, "name": "Lemmings", "platform": "SNES" }, { "id": 1361, "name": "Lester the Unlikely", "platform": "SNES" }, { "id": 1295, "name": "Lethal Enforcers", "platform": "SNES" }, { "id": 1054, "name": "Lethal Weapon", "platform": "SNES" }, { "id": 731, "name": "Linus Spacehead's Cosmic Crusade", "platform": "NES" }, { "id": 1727, "name": "Liquid Kids", "platform": "PCE" }, { "id": 1668, "name": "Little Magic", "platform": "SNES" }, { "id": 581, "name": "Little Master", "platform": "GB" }, { "id": 25, "name": "Little Nemo: The Dream Master", "platform": "NES" }, { "id": 2112, "name": "Little Red Hood", "platform": "NES" }, { "id": 303, "name": "Little Samson", "platform": "NES" }, { "id": 2015, "name": "Lizard", "platform": "NES" }, { "id": 601, "name": "Lode Runner", "platform": "GBA" }, { "id": 646, "name": "Looney Tunes", "platform": "GBC" }, { "id": 416, "name": "Looney Tunes", "platform": "GB" }, { "id": 1327, "name": "Looney Tunes: Carrot Crazy", "platform": "GBC" }, { "id": 1712, "name": "Lord of the Sword", "platform": "SMS" }, { "id": 1059, "name": "Low G Man", "platform": "NES" }, { "id": 1489, "name": "Lucky Luke", "platform": "SNES" }, { "id": 867, "name": "Lucky Luke", "platform": "GBC" }, { "id": 966, "name": "Lucky Luke: Desperado Train", "platform": "GBC" }, { "id": 2217, "name": "Lucky Luke: On the Daltons' Trail", "platform": "PSX" }, { "id": 354, "name": "Lufia II: Rise of the Sinistrals", "platform": "SNES" }, { "id": 1546, "name": "Luigi's Mansion", "platform": "GC" }, { "id": 625, "name": "Lunar Pool", "platform": "NES" }, { "id": 1759, "name": "Lupin Sansei: Pandora no Isan", "platform": "NES" }, { "id": 131, "name": "M.C. Kids", "platform": "NES" }, { "id": 1342, "name": "Mad Max", "platform": "NES" }, { "id": 1605, "name": "Madagascar", "platform": "GBA" }, { "id": 593, "name": "Madou King Granzort", "platform": "SGX" }, { "id": 537, "name": "Madou Monogatari I", "platform": "Genesis" }, { "id": 2033, "name": "Magic Knight Rayearth", "platform": "Saturn" }, { "id": 190, "name": "Magical Quest Starring Mickey Mouse", "platform": "SNES" }, { "id": 441, "name": "Magical Taruruuto-Kun", "platform": "Genesis" }, { "id": 1559, "name": "Magical Tetris Challenge", "platform": "N64" }, { "id": 516, "name": "Magician", "platform": "NES" }, { "id": 1562, "name": "Magician Lord", "platform": "Arcade" }, { "id": 1349, "name": "Majou Densetsu II: Daimashikyou Galious", "platform": "NES" }, { "id": 1798, "name": "Majyuuou", "platform": "SNES" }, { "id": 1955, "name": "Mamono Hunter Youko: Dai 7 no Keishou", "platform": "Genesis" }, { "id": 84, "name": "Maniac Mansion", "platform": "NES" }, { "id": 928, "name": "Manic Miner", "platform": "GBA" }, { "id": 1761, "name": "Mappy", "platform": "NES" }, { "id": 130, "name": "Marble Madness", "platform": "Genesis" }, { "id": 158, "name": "Marble Madness", "platform": "NES" }, { "id": 2079, "name": "Mari0", "platform": "Linux" }, { "id": 4, "name": "Mario & Luigi", "platform": "DOS" }, { "id": 2180, "name": "Mario & Luigi: Bowser's Inside Story", "platform": "DS" }, { "id": 1959, "name": "Mario & Luigi: Partners in Time", "platform": "DS" }, { "id": 254, "name": "Mario Adventure", "platform": "NES" }, { "id": 1329, "name": "Mario Bros.", "platform": "NES" }, { "id": 921, "name": "Mario Kart 64", "platform": "N64" }, { "id": 1685, "name": "Mario Party", "platform": "N64" }, { "id": 2246, "name": "Mario Party 7", "platform": "GC" }, { "id": 1764, "name": "Mario Party Advance", "platform": "GBA" }, { "id": 377, "name": "Mario Pinball Land", "platform": "GBA" }, { "id": 426, "name": "Mario vs. Donkey Kong", "platform": "GBA" }, { "id": 618, "name": "Marko's Magic Football", "platform": "Genesis" }, { "id": 1313, "name": "Marvel Land", "platform": "Genesis" }, { "id": 931, "name": "Marvel Super Heroes vs. Street Fighter", "platform": "Arcade" }, { "id": 775, "name": "Marvel Super Heroes: War of the Gems", "platform": "SNES" }, { "id": 1358, "name": "Marvel vs. Capcom", "platform": "Arcade" }, { "id": 1229, "name": "Master Karateka", "platform": "GB" }, { "id": 919, "name": "Master of Darkness", "platform": "SMS" }, { "id": 398, "name": "Maui Mallard in Cold Shadow", "platform": "SNES" }, { "id": 512, "name": "McDonald's Treasure Land Adventure", "platform": "Genesis" }, { "id": 1632, "name": "MDK", "platform": "PSX" }, { "id": 2244, "name": "Mechanized Attack", "platform": "NES" }, { "id": 789, "name": "MediEvil", "platform": "PSX" }, { "id": 2161, "name": "Mega Man", "platform": "GG" }, { "id": 9, "name": "Mega Man", "platform": "NES" }, { "id": 863, "name": "Mega Man", "platform": "DOS" }, { "id": 267, "name": "Mega Man & Bass", "platform": "SNES" }, { "id": 780, "name": "Mega Man 10", "platform": "Wii" }, { "id": 10, "name": "Mega Man 2", "platform": "NES" }, { "id": 1371, "name": "Mega Man 2: The Power Fighters", "platform": "Arcade" }, { "id": 38, "name": "Mega Man 3", "platform": "NES" }, { "id": 375, "name": "Mega Man 3, 4, 5 & 6", "platform": "NES" }, { "id": 39, "name": "Mega Man 4", "platform": "NES" }, { "id": 2211, "name": "Mega Man 4 Voyage", "platform": "NES" }, { "id": 40, "name": "Mega Man 5", "platform": "NES" }, { "id": 72, "name": "Mega Man 6", "platform": "NES" }, { "id": 166, "name": "Mega Man 7", "platform": "SNES" }, { "id": 623, "name": "Mega Man 8", "platform": "PSX" }, { "id": 941, "name": "Mega Man 9", "platform": "Wii" }, { "id": 1352, "name": "Mega Man Battle Chip Challenge", "platform": "GBA" }, { "id": 657, "name": "Mega Man Battle Network", "platform": "GBA" }, { "id": 856, "name": "Mega Man Battle Network 2", "platform": "GBA" }, { "id": 308, "name": "Mega Man II", "platform": "GB" }, { "id": 326, "name": "Mega Man III", "platform": "GB" }, { "id": 1133, "name": "Mega Man IV", "platform": "GB" }, { "id": 1815, "name": "Mega Man Legends", "platform": "PSX" }, { "id": 1830, "name": "Mega Man Legends 2", "platform": "PSX" }, { "id": 1474, "name": "Mega Man V", "platform": "SGB" }, { "id": 1980, "name": "Mega Man V", "platform": "GB" }, { "id": 108, "name": "Mega Man X", "platform": "SNES" }, { "id": 811, "name": "Mega Man X & Mega Man X2 & Mega Man X3", "platform": "SNES" }, { "id": 224, "name": "Mega Man X & X2", "platform": "SNES" }, { "id": 129, "name": "Mega Man X2", "platform": "SNES" }, { "id": 128, "name": "Mega Man X3", "platform": "SNES" }, { "id": 1797, "name": "Mega Man X3", "platform": "PSX" }, { "id": 598, "name": "Mega Man X4", "platform": "PSX" }, { "id": 507, "name": "Mega Man X5", "platform": "PSX" }, { "id": 509, "name": "Mega Man X6", "platform": "PSX" }, { "id": 545, "name": "Mega Man Xtreme", "platform": "GBC" }, { "id": 1402, "name": "Mega Man Xtreme 2", "platform": "GBC" }, { "id": 504, "name": "Mega Man Zero", "platform": "GBA" }, { "id": 340, "name": "Mega Man Zero 2", "platform": "GBA" }, { "id": 255, "name": "Mega Man Zero 3", "platform": "GBA" }, { "id": 234, "name": "Mega Man Zero 4", "platform": "GBA" }, { "id": 732, "name": "Mega Man ZX", "platform": "DS" }, { "id": 719, "name": "Mega Man ZX Advent", "platform": "DS" }, { "id": 2216, "name": "Mega Man: Dr. Wily's Revenge", "platform": "GBC" }, { "id": 200, "name": "Mega Man: Dr. Wily's Revenge", "platform": "GB" }, { "id": 1254, "name": "Mega Man: The Wily Wars", "platform": "Genesis" }, { "id": 622, "name": "Mega Turrican", "platform": "Genesis" }, { "id": 1027, "name": "MegaMari: Marisa no Yabou", "platform": "Windows" }, { "id": 1681, "name": "Men in Black: The Series", "platform": "GBC" }, { "id": 711, "name": "Mendel Palace", "platform": "NES" }, { "id": 230, "name": "Mercs", "platform": "Genesis" }, { "id": 751, "name": "Mercs", "platform": "Arcade" }, { "id": 1608, "name": "Metal Force", "platform": "NES" }, { "id": 849, "name": "Metal Gear", "platform": "MSX" }, { "id": 165, "name": "Metal Gear", "platform": "NES" }, { "id": 1004, "name": "Metal Gear Solid", "platform": "PSX" }, { "id": 1506, "name": "Metal Gear Solid: VR Missions", "platform": "PSX" }, { "id": 510, "name": "Metal Max", "platform": "NES" }, { "id": 1411, "name": "Metal Max Returns", "platform": "SNES" }, { "id": 1469, "name": "Metal Mech: Man & Machine", "platform": "NES" }, { "id": 784, "name": "Metal Slug 3", "platform": "Arcade" }, { "id": 793, "name": "Metal Slug 4", "platform": "Arcade" }, { "id": 815, "name": "Metal Slug 5", "platform": "Arcade" }, { "id": 821, "name": "Metal Slug 7", "platform": "DS" }, { "id": 765, "name": "Metal Slug Advance", "platform": "GBA" }, { "id": 574, "name": "Metal Slug X", "platform": "Arcade" }, { "id": 2066, "name": "Metal Slug: 2nd Mission", "platform": "NGP" }, { "id": 753, "name": "Metal Slug: Super Vehicle - 001", "platform": "Arcade" }, { "id": 192, "name": "Metal Storm", "platform": "NES" }, { "id": 1365, "name": "Metal Warriors", "platform": "SNES" }, { "id": 2145, "name": "Meteos", "platform": "DS" }, { "id": 20, "name": "Metroid", "platform": "NES" }, { "id": 268, "name": "Metroid Fusion", "platform": "GBA" }, { "id": 374, "name": "Metroid II: Return of Samus", "platform": "GB" }, { "id": 1337, "name": "Metroid Prime Hunters", "platform": "DS" }, { "id": 942, "name": "Metroid Prime Pinball", "platform": "DS" }, { "id": 799, "name": "Metroid Super ZeroMission", "platform": "SNES" }, { "id": 195, "name": "Metroid: Zero Mission", "platform": "GBA" }, { "id": 2248, "name": "Mickey Mania 7", "platform": "NES" }, { "id": 2051, "name": "Mickey Mania: The Timeless Adventures of Mickey Mouse", "platform": "SNES" }, { "id": 151, "name": "Mickey Mania: The Timeless Adventures of Mickey Mouse", "platform": "Genesis" }, { "id": 436, "name": "Mickey Mouse 3: Yume Fuusen", "platform": "NES" }, { "id": 53, "name": "Mickey Mousecapade", "platform": "NES" }, { "id": 1649, "name": "Mickey no Tokyo Disneyland Daibouken", "platform": "SNES" }, { "id": 2164, "name": "Mickey's Adventures in Numberland", "platform": "NES" }, { "id": 1977, "name": "Mickey's Dangerous Chase", "platform": "GB" }, { "id": 2228, "name": "Mickey's Dangerous Chase", "platform": "GBC" }, { "id": 1262, "name": "Micro Machines 64 Turbo", "platform": "N64" }, { "id": 388, "name": "Midnight Resistance", "platform": "Genesis" }, { "id": 371, "name": "Might and Magic", "platform": "NES" }, { "id": 1314, "name": "Might and Magic II: Gates to Another World", "platform": "Genesis" }, { "id": 390, "name": "Mighty Bomb Jack", "platform": "NES" }, { "id": 400, "name": "Mighty Final Fight", "platform": "NES" }, { "id": 693, "name": "Mighty Morphin Power Rangers", "platform": "SNES" }, { "id": 995, "name": "Mighty Morphin Power Rangers: The Movie", "platform": "SGB" }, { "id": 1600, "name": "Mighty Morphin Power Rangers: The Movie", "platform": "SNES" }, { "id": 56, "name": "Mike Tyson's Punch-Out!!", "platform": "NES" }, { "id": 97, "name": "Milon's Secret Castle", "platform": "NES" }, { "id": 2081, "name": "Miner 2049er", "platform": "Coleco" }, { "id": 469, "name": "Minesweeper", "platform": "GB" }, { "id": 1795, "name": "Mini Putt", "platform": "NES" }, { "id": 2195, "name": "Miniature Golf", "platform": "A2600" }, { "id": 2137, "name": "Minit", "platform": "Linux" }, { "id": 480, "name": "Mischief Makers", "platform": "N64" }, { "id": 994, "name": "Mission: Impossible", "platform": "NES" }, { "id": 361, "name": "Mission: Impossible", "platform": "GBC" }, { "id": 403, "name": "Mitsume ga Tooru", "platform": "NES" }, { "id": 2087, "name": "MK5: Mortal Combat - Sub Zero", "platform": "Genesis" }, { "id": 386, "name": "Moai-kun", "platform": "NES" }, { "id": 742, "name": "Mole Mania", "platform": "SGB" }, { "id": 958, "name": "Monkey Magic", "platform": "PSX" }, { "id": 172, "name": "Monopoly", "platform": "NES" }, { "id": 1363, "name": "Monster House", "platform": "GBA" }, { "id": 473, "name": "Monster in My Pocket", "platform": "NES" }, { "id": 746, "name": "Monster Party", "platform": "NES" }, { "id": 1567, "name": "Monster Pro Wrestling", "platform": "PCE" }, { "id": 2178, "name": "Monster World IV", "platform": "Genesis" }, { "id": 2148, "name": "Montezuma's Revenge", "platform": "A2600" }, { "id": 2138, "name": "Montezuma's Revenge", "platform": "Coleco" }, { "id": 1574, "name": "Montezuma's Revenge", "platform": "SMS" }, { "id": 2139, "name": "Montezuma's Revenge", "platform": "C64" }, { "id": 2172, "name": "Monty on the Run", "platform": "C64" }, { "id": 302, "name": "Moon Crystal", "platform": "NES" }, { "id": 120, "name": "Moonwalker, Michael Jackson's", "platform": "Genesis" }, { "id": 726, "name": "Moonwalker, Michael Jackson's", "platform": "Arcade" }, { "id": 891, "name": "Mortal Kombat", "platform": "SNES" }, { "id": 1135, "name": "Mortal Kombat 3", "platform": "GB" }, { "id": 892, "name": "Mortal Kombat 3", "platform": "SNES" }, { "id": 343, "name": "Mortal Kombat 4", "platform": "N64" }, { "id": 1106, "name": "Mortal Kombat 4", "platform": "GBC" }, { "id": 794, "name": "Mortal Kombat Advance", "platform": "GBA" }, { "id": 703, "name": "Mortal Kombat II", "platform": "GB" }, { "id": 317, "name": "Mortal Kombat II", "platform": "SNES" }, { "id": 1427, "name": "Mortal Kombat Mythologies: Sub-Zero", "platform": "PSX" }, { "id": 802, "name": "Mortal Kombat Trilogy", "platform": "N64" }, { "id": 1406, "name": "Mortal Kombat: Deception", "platform": "GC" }, { "id": 767, "name": "Mortal Kombat: Tournament Edition", "platform": "GBA" }, { "id": 807, "name": "Mr. Driller 2", "platform": "GBA" }, { "id": 440, "name": "Mr. Nutz", "platform": "SNES" }, { "id": 1612, "name": "Mr. Nutz", "platform": "Genesis" }, { "id": 2236, "name": "Multidude", "platform": "NES" }, { "id": 989, "name": "Muramasa: The Demon Blade", "platform": "Wii" }, { "id": 943, "name": "Myst", "platform": "DS" }, { "id": 864, "name": "Mystery Quest", "platform": "NES" }, { "id": 217, "name": "Mystic Defender", "platform": "Genesis" }, { "id": 2022, "name": "Mystic Towers", "platform": "DOS" }, { "id": 610, "name": "Mystical Ninja Starring Goemon", "platform": "N64" }, { "id": 2222, "name": "Namco Museum Megamix", "platform": "Wii" }, { "id": 1460, "name": "Nanashi no Geemu", "platform": "DS" }, { "id": 1387, "name": "Nancy Drew: Message in a Haunted Mansion", "platform": "GBA" }, { "id": 464, "name": "Naruto: Ninja Council", "platform": "GBA" }, { "id": 1521, "name": "Neo Turf Masters", "platform": "Arcade" }, { "id": 1443, "name": "NeSnake 2", "platform": "NES" }, { "id": 1778, "name": "Nester's Funky Bowling", "platform": "VBoy" }, { "id": 486, "name": "New Ghostbusters II", "platform": "NES" }, { "id": 515, "name": "New Super Mario Bros.", "platform": "DS" }, { "id": 1405, "name": "New Super Mario Bros. Wii", "platform": "Wii" }, { "id": 1993, "name": "Newer Super Mario Bros. DS", "platform": "DS" }, { "id": 2162, "name": "NFL Street", "platform": "GC" }, { "id": 2197, "name": "NFL Street 2", "platform": "GC" }, { "id": 2045, "name": "Night Stalker", "platform": "INTV" }, { "id": 2080, "name": "NiGHTS into Dreams...", "platform": "Saturn" }, { "id": 273, "name": "Nightshade", "platform": "NES" }, { "id": 1052, "name": "Nikujin", "platform": "Windows" }, { "id": 2126, "name": "Nim & Nom", "platform": "NES" }, { "id": 409, "name": "Ninja Crusaders", "platform": "NES" }, { "id": 223, "name": "Ninja Five-O", "platform": "GBA" }, { "id": 428, "name": "Ninja Gaiden", "platform": "SMS" }, { "id": 175, "name": "Ninja Gaiden", "platform": "NES" }, { "id": 688, "name": "Ninja Gaiden", "platform": "GG" }, { "id": 1486, "name": "Ninja Gaiden", "platform": "PCE" }, { "id": 59, "name": "Ninja Gaiden II: The Dark Sword of Chaos", "platform": "NES" }, { "id": 168, "name": "Ninja Gaiden III: The Ancient Ship of Doom", "platform": "NES" }, { "id": 484, "name": "Ninja Gaiden Shadow", "platform": "GB" }, { "id": 1679, "name": "Ninja Golf", "platform": "A7800" }, { "id": 1522, "name": "Ninja Jajamaru: Ginga Daisakusen", "platform": "NES" }, { "id": 1903, "name": "Ninja Kid", "platform": "NES" }, { "id": 328, "name": "Ninja Spirit", "platform": "GB" }, { "id": 602, "name": "Ninja Spirit", "platform": "PCE" }, { "id": 1884, "name": "Nitemare 3D", "platform": "DOS" }, { "id": 1745, "name": "No One Can Stop Mr. Domino", "platform": "PSX" }, { "id": 1698, "name": "Nobunaga's Ambition", "platform": "NES" }, { "id": 1961, "name": "Noddy and the Birthday Party", "platform": "GBC" }, { "id": 1988, "name": "Noddy: A Day in Toyland", "platform": "GBA" }, { "id": 800, "name": "Normy's Beach Babe-o-Rama", "platform": "Genesis" }, { "id": 1350, "name": "North & South", "platform": "NES" }, { "id": 141, "name": "Nosferatu", "platform": "SNES" }, { "id": 560, "name": "Nuts & Milk", "platform": "NES" }, { "id": 1820, "name": "Nuts & Milk", "platform": "MSX" }, { "id": 530, "name": "Oddworld Adventures", "platform": "GB" }, { "id": 1577, "name": "Oddworld Adventures II", "platform": "GBC" }, { "id": 1568, "name": "Oddworld: Abe's Exoddus", "platform": "PSX" }, { "id": 783, "name": "Oddworld: Abe's Oddysee", "platform": "PSX" }, { "id": 1581, "name": "Oddworld: Munch's Oddysee", "platform": "GBA" }, { "id": 1752, "name": "Oil's Well", "platform": "Coleco" }, { "id": 2136, "name": "Old Tower", "platform": "ZXS" }, { "id": 1309, "name": "Olympic Gold: Barcelona '92", "platform": "Genesis" }, { "id": 1914, "name": "One Piece Mansion", "platform": "PSX" }, { "id": 329, "name": "Operation C", "platform": "GB" }, { "id": 692, "name": "Operation Logic Bomb", "platform": "SNES" }, { "id": 1646, "name": "Orb-3D", "platform": "NES" }, { "id": 2093, "name": "Order of Twilight", "platform": "Linux" }, { "id": 1756, "name": "Osman", "platform": "Arcade" }, { "id": 667, "name": "Otocky", "platform": "FDS" }, { "id": 188, "name": "Out of This World", "platform": "SNES" }, { "id": 219, "name": "Out to Lunch", "platform": "SNES" }, { "id": 1308, "name": "OutRun", "platform": "Genesis" }, { "id": 1341, "name": "Over the Hedge", "platform": "DS" }, { "id": 2235, "name": "Overlord", "platform": "NES" }, { "id": 1721, "name": "Pac-In-Time", "platform": "GB" }, { "id": 1622, "name": "Pac-Land", "platform": "Lynx" }, { "id": 2065, "name": "Pac-Man World", "platform": "GBA" }, { "id": 1790, "name": "Pac-Man World 2", "platform": "GC" }, { "id": 660, "name": "Paladin's Quest", "platform": "SNES" }, { "id": 1781, "name": "Palamedes II: Star Twinkles", "platform": "NES" }, { "id": 1368, "name": "Pandemonium!", "platform": "PSX" }, { "id": 423, "name": "Panic Restaurant", "platform": "NES" }, { "id": 1331, "name": "Paper Mario", "platform": "N64" }, { "id": 1535, "name": "Paper Mario: The Thousand-Year Door", "platform": "GC" }, { "id": 339, "name": "Paperboy", "platform": "NES" }, { "id": 837, "name": "Penguin Adventure", "platform": "MSX" }, { "id": 1520, "name": "Pepsiman: The Running Hero", "platform": "PSX" }, { "id": 626, "name": "Phantasy Star", "platform": "SMS" }, { "id": 1495, "name": "Phantasy Star II", "platform": "Genesis" }, { "id": 323, "name": "Phantasy Star III: Generations of Doom", "platform": "Genesis" }, { "id": 586, "name": "Phantasy Star IV", "platform": "Genesis" }, { "id": 1379, "name": "Phoenix", "platform": "A2600" }, { "id": 745, "name": "Pilotwings", "platform": "SNES" }, { "id": 1152, "name": "Pin-Bot", "platform": "NES" }, { "id": 338, "name": "Pinball Quest", "platform": "NES" }, { "id": 1671, "name": "Pingu: Sekai de Ichiban Genki na Penguin", "platform": "GB" }, { "id": 1928, "name": "Pink Panther in Pink Goes to Hollywood", "platform": "SNES" }, { "id": 1930, "name": "Pink Panther in Pink Goes to Hollywood", "platform": "Genesis" }, { "id": 2250, "name": "Pink Panther: Pinkadelic Pursuit", "platform": "GBA" }, { "id": 1808, "name": "Pink Panther: Pinkadelic Pursuit", "platform": "PSX" }, { "id": 1598, "name": "Pinocchio, Disney's", "platform": "Genesis" }, { "id": 448, "name": "Pipe Dream", "platform": "NES" }, { "id": 171, "name": "Pit-Fighter", "platform": "Genesis" }, { "id": 1557, "name": "Pitfall II: Lost Caverns", "platform": "A2600" }, { "id": 2156, "name": "Pitfall!", "platform": "A2600" }, { "id": 884, "name": "Pitfall: The Mayan Adventure", "platform": "Genesis" }, { "id": 502, "name": "Pitfall: The Mayan Adventure", "platform": "SNES" }, { "id": 590, "name": "Pizza Pop!", "platform": "NES" }, { "id": 1242, "name": "Platoon", "platform": "NES" }, { "id": 249, "name": "Plok", "platform": "SNES" }, { "id": 645, "name": "Pocket Bomberman", "platform": "GBC" }, { "id": 1822, "name": "Pocket Monster", "platform": "Genesis" }, { "id": 1703, "name": "Pocket Monster II", "platform": "Genesis" }, { "id": 393, "name": "Pocket Monsters: Green", "platform": "SGB" }, { "id": 2210, "name": "Pocket Monsters: White Jade Version", "platform": "NES" }, { "id": 1249, "name": "Pocky & Rocky", "platform": "SNES" }, { "id": 1811, "name": "Pok\u00e9mon Adventure", "platform": "GBC" }, { "id": 2193, "name": "Pok\u00e9mon Card GB2: GR-dan Sanjou!", "platform": "GBC" }, { "id": 1701, "name": "Pok\u00e9mon Puzzle Challenge", "platform": "GBC" }, { "id": 1784, "name": "Pok\u00e9mon Stadium", "platform": "N64" }, { "id": 1773, "name": "Pok\u00e9mon: Blue and Red Version", "platform": "GB" }, { "id": 1473, "name": "Pok\u00e9mon: Blue Version", "platform": "GB" }, { "id": 241, "name": "Pok\u00e9mon: Blue Version", "platform": "SGB" }, { "id": 2004, "name": "Pok\u00e9mon: Blue Version", "platform": "GBC" }, { "id": 2086, "name": "Pok\u00e9mon: Crystal Version", "platform": "GBC" }, { "id": 1996, "name": "Pok\u00e9mon: Diamond Version", "platform": "DS" }, { "id": 1596, "name": "Pok\u00e9mon: Emerald Version", "platform": "GBA" }, { "id": 1478, "name": "Pok\u00e9mon: FireRed Version", "platform": "GBA" }, { "id": 294, "name": "Pok\u00e9mon: Gold Version", "platform": "GBC" }, { "id": 1674, "name": "Pok\u00e9mon: Pearl Version", "platform": "DS" }, { "id": 1611, "name": "Pok\u00e9mon: Platinum Edition", "platform": "GBC" }, { "id": 2254, "name": "Pok\u00e9mon: Red Version", "platform": "GBC" }, { "id": 16, "name": "Pok\u00e9mon: Red Version", "platform": "GB" }, { "id": 271, "name": "Pok\u00e9mon: Red Version", "platform": "SGB" }, { "id": 787, "name": "Pok\u00e9mon: Ruby Version", "platform": "GBA" }, { "id": 358, "name": "Pok\u00e9mon: Sapphire Version", "platform": "GBA" }, { "id": 1538, "name": "Pok\u00e9mon: Silver Version", "platform": "GBC" }, { "id": 690, "name": "Pok\u00e9mon: Trading Card Game", "platform": "GBC" }, { "id": 446, "name": "Pok\u00e9mon: Yellow Version", "platform": "GBC" }, { "id": 1068, "name": "Poko-Nyan! Henpokorin Adventure", "platform": "SNES" }, { "id": 1482, "name": "Polarium", "platform": "DS" }, { "id": 1647, "name": "Pop'n TwinBee: Rainbow Bell Adventures", "platform": "SNES" }, { "id": 871, "name": "Popeye", "platform": "NES" }, { "id": 1067, "name": "Popeye 2", "platform": "GB" }, { "id": 1806, "name": "Porky Pig's Haunted Holiday", "platform": "SNES" }, { "id": 1983, "name": "Porky's", "platform": "A2600" }, { "id": 2122, "name": "Portal", "platform": "C64" }, { "id": 1769, "name": "Postman Pat and the Greendale Rocket", "platform": "GBA" }, { "id": 109, "name": "Power Blade", "platform": "NES" }, { "id": 1157, "name": "Prehistorik Man", "platform": "SNES" }, { "id": 43, "name": "Prince of Persia", "platform": "NES" }, { "id": 134, "name": "Prince of Persia", "platform": "Genesis" }, { "id": 1843, "name": "Prince of Persia", "platform": "SegaCD" }, { "id": 1956, "name": "Prince of Persia", "platform": "PCECD" }, { "id": 242, "name": "Prince of Persia", "platform": "SNES" }, { "id": 198, "name": "Prince of Persia 2", "platform": "SNES" }, { "id": 425, "name": "Prince of Persia: The Sands of Time", "platform": "GBA" }, { "id": 2219, "name": "Prince of Persia: The Two Thrones", "platform": "GC" }, { "id": 1990, "name": "Princess Rescue", "platform": "A2600" }, { "id": 1072, "name": "Princess Tomato in the Salad Kingdom", "platform": "NES" }, { "id": 2050, "name": "Private Eye", "platform": "A2600" }, { "id": 1045, "name": "Pro Wrestling", "platform": "NES" }, { "id": 429, "name": "Psychic World", "platform": "SMS" }, { "id": 421, "name": "Psycho Fox", "platform": "SMS" }, { "id": 1507, "name": "Psycho Waluigi", "platform": "Windows" }, { "id": 1468, "name": "Pucca's Kisses Game", "platform": "Wii" }, { "id": 785, "name": "Puggsy", "platform": "Genesis" }, { "id": 316, "name": "Pulseman", "platform": "Genesis" }, { "id": 1844, "name": "Punch-Out!!", "platform": "Arcade" }, { "id": 2151, "name": "Punchy", "platform": "C64" }, { "id": 513, "name": "Punky Skunk", "platform": "PSX" }, { "id": 1566, "name": "Push-Over", "platform": "SNES" }, { "id": 638, "name": "Putter Golf", "platform": "Genesis" }, { "id": 874, "name": "Puzznic", "platform": "NES" }, { "id": 1747, "name": "Pwn Adventure Z", "platform": "NES" }, { "id": 2154, "name": "Pyjamarama", "platform": "C64" }, { "id": 1601, "name": "Q Boy", "platform": "NES" }, { "id": 1141, "name": "Q*bert", "platform": "NES" }, { "id": 1635, "name": "Q*bert 3", "platform": "SNES" }, { "id": 91, "name": "QuackShot: Starring Donald Duck", "platform": "Genesis" }, { "id": 670, "name": "Quartet", "platform": "SMS" }, { "id": 288, "name": "Quarth", "platform": "NES" }, { "id": 1625, "name": "Quattro Adventure: Boomerang Kid", "platform": "NES" }, { "id": 1307, "name": "Quattro Adventure: Super Robin Hood", "platform": "NES" }, { "id": 1001, "name": "Quattro Adventure: Treasure Island Dizzy", "platform": "NES" }, { "id": 1968, "name": "Quest for Glory II: Trial by Fire", "platform": "DOS" }, { "id": 444, "name": "R.B.I. Baseball", "platform": "NES" }, { "id": 1840, "name": "R.C. Pro-Am", "platform": "NES" }, { "id": 214, "name": "Rad Racer", "platform": "NES" }, { "id": 1462, "name": "Radical Rex", "platform": "SNES" }, { "id": 1894, "name": "Raid on Bungeling Bay", "platform": "NES" }, { "id": 1373, "name": "Raiders of the Lost Ark", "platform": "A2600" }, { "id": 888, "name": "Rainbow Islands: The Story of Bubble Bobble 2", "platform": "NES" }, { "id": 930, "name": "Rambo", "platform": "NES" }, { "id": 712, "name": "Rambo, Sylvester Stallone in", "platform": "MSX" }, { "id": 769, "name": "Ranger X", "platform": "Genesis" }, { "id": 1277, "name": "Ranma Nibunnoichi: Chougi Ranbu Hen", "platform": "SNES" }, { "id": 596, "name": "Rayman", "platform": "GBC" }, { "id": 1207, "name": "Rayman", "platform": "PSX" }, { "id": 1359, "name": "Rayman 2", "platform": "GBC" }, { "id": 1493, "name": "Rayman 3: Hoodlum Havoc", "platform": "GC" }, { "id": 1458, "name": "Rayman Advance", "platform": "GBA" }, { "id": 1851, "name": "Rayman Origins", "platform": "Wii" }, { "id": 1633, "name": "Rayman: Hoodlums' Revenge", "platform": "GBA" }, { "id": 648, "name": "Red Alarm", "platform": "VBoy" }, { "id": 1159, "name": "Rescue: The Embassy Mission", "platform": "NES" }, { "id": 1887, "name": "Resident Evil 2", "platform": "GC" }, { "id": 517, "name": "Resident Evil 3: Nemesis", "platform": "PSX" }, { "id": 1467, "name": "Resident Evil 4", "platform": "GC" }, { "id": 591, "name": "Resident Evil: Deadly Silence", "platform": "DS" }, { "id": 805, "name": "Resident Evil: Director's Cut", "platform": "PSX" }, { "id": 1175, "name": "Riddick Bowe Boxing", "platform": "SNES" }, { "id": 1683, "name": "Riddle of the Sphinx", "platform": "A2600" }, { "id": 1848, "name": "Risky Woods", "platform": "Genesis" }, { "id": 286, "name": "Ristar", "platform": "Genesis" }, { "id": 36, "name": "River City Ransom", "platform": "NES" }, { "id": 1429, "name": "River Raid", "platform": "A2600" }, { "id": 2120, "name": "Riviera: The Promised Land", "platform": "GBA" }, { "id": 836, "name": "Road Fighter", "platform": "NES" }, { "id": 2157, "name": "Road Runner", "platform": "A2600" }, { "id": 683, "name": "Road Runner's Death Valley Rally", "platform": "SNES" }, { "id": 736, "name": "RoboCop", "platform": "GBC" }, { "id": 1206, "name": "RoboCop", "platform": "NES" }, { "id": 465, "name": "RoboCop 3", "platform": "NES" }, { "id": 1594, "name": "RoboCop 3", "platform": "Genesis" }, { "id": 424, "name": "Robocop vs. the Terminator", "platform": "Genesis" }, { "id": 2077, "name": "Robot Wars: Extreme Destruction", "platform": "GBA" }, { "id": 119, "name": "Rocket Knight Adventures", "platform": "Genesis" }, { "id": 644, "name": "Rocket: Robot on Wheels", "platform": "N64" }, { "id": 80, "name": "Rockin' Kats", "platform": "NES" }, { "id": 1776, "name": "Rockman & Forte - Mirai Kara no Chousensha", "platform": "WSWAN" }, { "id": 1661, "name": "Rockman 4 Burst Chaser \u00d7 Air Sliding", "platform": "NES" }, { "id": 1436, "name": "Rockman 4 Minus Infinity", "platform": "NES" }, { "id": 1967, "name": "Rockman Battle & Fighters", "platform": "NGP" }, { "id": 1621, "name": "Rockman Complete Works: Rockman 2", "platform": "PSX" }, { "id": 1446, "name": "Rockman DX3", "platform": "GBC" }, { "id": 1799, "name": "Rockman EXE WS", "platform": "WSWAN" }, { "id": 642, "name": "Rockman no Constancy", "platform": "NES" }, { "id": 2146, "name": "Rockman: Spirits of Hackers", "platform": "NES" }, { "id": 987, "name": "Rocky", "platform": "SMS" }, { "id": 1124, "name": "Rocman X", "platform": "NES" }, { "id": 970, "name": "Rod Land", "platform": "NES" }, { "id": 491, "name": "Rolan's Curse", "platform": "GB" }, { "id": 1987, "name": "Rolan's Curse II", "platform": "GB" }, { "id": 2229, "name": "Rollerblade Racer", "platform": "NES" }, { "id": 1455, "name": "Rollergames", "platform": "NES" }, { "id": 220, "name": "Rolling Thunder", "platform": "NES" }, { "id": 1279, "name": "Rolo to the Rescue", "platform": "Genesis" }, { "id": 2200, "name": "Romance of the Three Kingdoms II", "platform": "NES" }, { "id": 578, "name": "Romancing SaGa", "platform": "SNES" }, { "id": 696, "name": "Romancing SaGa 2", "platform": "SNES" }, { "id": 708, "name": "Romancing SaGa 3", "platform": "SNES" }, { "id": 1017, "name": "Rosenkreuzstilette", "platform": "Windows" }, { "id": 628, "name": "Rubik's World", "platform": "DS" }, { "id": 450, "name": "Run Saber", "platform": "SNES" }, { "id": 47, "name": "Rush'n Attack", "platform": "NES" }, { "id": 29, "name": "Rygar", "platform": "NES" }, { "id": 1936, "name": "Sabre Wulf", "platform": "GBA" }, { "id": 1954, "name": "Sabrina the Teenage Witch: Potion Commotion", "platform": "GBA" }, { "id": 605, "name": "SaGa Frontier", "platform": "PSX" }, { "id": 1008, "name": "Saiyuuki World", "platform": "NES" }, { "id": 639, "name": "Salary Man Champ: Tatakau Salary Man", "platform": "PSX" }, { "id": 1597, "name": "Samurai Shodown II", "platform": "PSX" }, { "id": 2049, "name": "Samurai Shodown II", "platform": "Arcade" }, { "id": 1682, "name": "Samurai Shodown IV: Amakusa's Revenge", "platform": "Arcade" }, { "id": 1561, "name": "Saturday Night Slam Masters", "platform": "SNES" }, { "id": 1555, "name": "Saturn Bomberman", "platform": "Saturn" }, { "id": 1428, "name": "Scion", "platform": "MSX" }, { "id": 1063, "name": "Scooby-Doo! classNameic Creep Capers", "platform": "N64" }, { "id": 1792, "name": "Scooby-Doo! classNameic Creep Capers", "platform": "GBC" }, { "id": 1835, "name": "Scooby-Doo! Mystery Mayhem", "platform": "GBA" }, { "id": 1816, "name": "Scrapyard Dog", "platform": "Lynx" }, { "id": 1875, "name": "Scrapyard Dog", "platform": "A7800" }, { "id": 1549, "name": "Seaquest", "platform": "A2600" }, { "id": 2091, "name": "Secret Agent Barbie: Royal Jewels Mission", "platform": "GBA" }, { "id": 231, "name": "Secret of Evermore", "platform": "SNES" }, { "id": 819, "name": "Secret of Mana", "platform": "SNES" }, { "id": 1415, "name": "Sega-Galaga", "platform": "SG1000" }, { "id": 1719, "name": "Sesame Street Countdown", "platform": "NES" }, { "id": 2082, "name": "Sewer Sam", "platform": "INTV" }, { "id": 2099, "name": "Shadow Blasters", "platform": "Genesis" }, { "id": 321, "name": "Shadow Dancer: The Secret of Shinobi", "platform": "Genesis" }, { "id": 570, "name": "Shadow of the Beast", "platform": "Genesis" }, { "id": 573, "name": "Shadow of the Beast II", "platform": "Genesis" }, { "id": 34, "name": "Shadow of the Ninja", "platform": "NES" }, { "id": 37, "name": "Shadowgate", "platform": "NES" }, { "id": 1586, "name": "Shantae", "platform": "GBC" }, { "id": 64, "name": "Shatterhand", "platform": "NES" }, { "id": 1908, "name": "Shin Nekketsu Kouha: Kunio-tachi no Banka", "platform": "SNES" }, { "id": 407, "name": "Shining Force", "platform": "Genesis" }, { "id": 615, "name": "Shining Force II", "platform": "Genesis" }, { "id": 552, "name": "Shining in the Darkness", "platform": "Genesis" }, { "id": 647, "name": "Shining Soul", "platform": "GBA" }, { "id": 655, "name": "Shining Soul II", "platform": "GBA" }, { "id": 852, "name": "Shinobi", "platform": "NES" }, { "id": 1800, "name": "Shinobi", "platform": "Arcade" }, { "id": 306, "name": "Shinobi III: Return of the Ninja Master", "platform": "Genesis" }, { "id": 2063, "name": "Shinobi Legions", "platform": "Saturn" }, { "id": 720, "name": "Shockman", "platform": "PCE" }, { "id": 1886, "name": "Short Order", "platform": "NES" }, { "id": 2075, "name": "Shovel Knight", "platform": "Linux" }, { "id": 2114, "name": "Shrek: Fairy Tale Freakdown", "platform": "GBC" }, { "id": 1642, "name": "Sid Meier's Railroad Tycoon", "platform": "DOS" }, { "id": 1607, "name": "Silent Assault", "platform": "NES" }, { "id": 357, "name": "Silent Scope", "platform": "GBA" }, { "id": 1998, "name": "Silhouette Mirage", "platform": "Saturn" }, { "id": 853, "name": "Silver Surfer", "platform": "NES" }, { "id": 2224, "name": "Simple 1500 Series Vol.30: The Basket ~1 on 1 Plus~", "platform": "PSX" }, { "id": 2243, "name": "Skate Boardin'", "platform": "A2600" }, { "id": 320, "name": "Skate or Die 2: The Search for Double Trouble", "platform": "NES" }, { "id": 2181, "name": "Skate or Die!", "platform": "NES" }, { "id": 851, "name": "Skate or Die: Bad 'n Rad", "platform": "GB" }, { "id": 2035, "name": "Skiing", "platform": "A2600" }, { "id": 653, "name": "Skitchin'", "platform": "Genesis" }, { "id": 1882, "name": "Skooter", "platform": "MSX" }, { "id": 503, "name": "Skyblazer", "platform": "SNES" }, { "id": 634, "name": "SkyRoads", "platform": "DOS" }, { "id": 709, "name": "SkyRoads: Xmas Special", "platform": "DOS" }, { "id": 221, "name": "Smart Ball", "platform": "SNES" }, { "id": 2067, "name": "Smurf: Rescue in Gargamel's Castle", "platform": "Coleco" }, { "id": 2150, "name": "Smurf: Rescue in Gargamel's Castle", "platform": "A2600" }, { "id": 107, "name": "Snake Rattle 'n' Roll", "platform": "NES" }, { "id": 463, "name": "Snake's Revenge", "platform": "NES" }, { "id": 624, "name": "Snood", "platform": "GBA" }, { "id": 2128, "name": "Snoopy", "platform": "C64" }, { "id": 2020, "name": "Snoopy and Peanuts", "platform": "DOS" }, { "id": 44, "name": "Snow Bros.", "platform": "NES" }, { "id": 1542, "name": "Sokoban DS", "platform": "DS" }, { "id": 227, "name": "Solar Jetman: Hunt for the Golden Warpship", "platform": "NES" }, { "id": 439, "name": "Solitaire", "platform": "NES" }, { "id": 5, "name": "Solomon's Key", "platform": "NES" }, { "id": 13, "name": "Solstice: The Quest for the Staff of Demnos", "platform": "NES" }, { "id": 2041, "name": "Sonic & Knuckles", "platform": "Genesis" }, { "id": 1130, "name": "Sonic 3 & Amy Rose", "platform": "Genesis" }, { "id": 127, "name": "Sonic 3 & Knuckles", "platform": "Genesis" }, { "id": 927, "name": "Sonic 3D Blast", "platform": "Genesis" }, { "id": 297, "name": "Sonic Advance", "platform": "GBA" }, { "id": 256, "name": "Sonic Advance 2", "platform": "GBA" }, { "id": 309, "name": "Sonic Advance 3", "platform": "GBA" }, { "id": 1103, "name": "Sonic Adventure 2: Battle", "platform": "GC" }, { "id": 1487, "name": "Sonic Adventure DX: Director's Cut", "platform": "GC" }, { "id": 1126, "name": "Sonic Battle", "platform": "GBA" }, { "id": 1929, "name": "Sonic Blast", "platform": "GG" }, { "id": 627, "name": "Sonic Chaos", "platform": "SMS" }, { "id": 1056, "name": "Sonic Colors", "platform": "DS" }, { "id": 2206, "name": "Sonic Heroes", "platform": "GC" }, { "id": 1589, "name": "Sonic Jam 6", "platform": "Genesis" }, { "id": 2059, "name": "Sonic Labyrinth", "platform": "GG" }, { "id": 1397, "name": "Sonic Pinball Party", "platform": "GBA" }, { "id": 161, "name": "Sonic Spinball", "platform": "Genesis" }, { "id": 587, "name": "Sonic the Hedgehog", "platform": "GG" }, { "id": 248, "name": "Sonic the Hedgehog", "platform": "Genesis" }, { "id": 964, "name": "Sonic the Hedgehog", "platform": "SMS" }, { "id": 199, "name": "Sonic the Hedgehog 2", "platform": "Genesis" }, { "id": 418, "name": "Sonic the Hedgehog 2", "platform": "SMS" }, { "id": 729, "name": "Sonic the Hedgehog 3", "platform": "Genesis" }, { "id": 453, "name": "Sonic the Hedgehog CD", "platform": "SegaCD" }, { "id": 2038, "name": "Sonic the Hedgehog Megamix", "platform": "SegaCD" }, { "id": 2003, "name": "Sonic the Hedgehog Pocket Adventure", "platform": "NGP" }, { "id": 1400, "name": "Sonic the Hedgehog: Triple Trouble", "platform": "GG" }, { "id": 1545, "name": "Sorcerer's Kingdom", "platform": "Genesis" }, { "id": 1048, "name": "Sorcerer's Maze", "platform": "PSX" }, { "id": 1899, "name": "SOS", "platform": "SNES" }, { "id": 1793, "name": "Soul Blade", "platform": "PSX" }, { "id": 282, "name": "Soul Blazer", "platform": "SNES" }, { "id": 1513, "name": "SoulCalibur II", "platform": "GC" }, { "id": 1378, "name": "Space Invaders", "platform": "A2600" }, { "id": 663, "name": "Space Invaders Extreme 2", "platform": "DS" }, { "id": 2189, "name": "Space Monsters Meet the Hardy", "platform": "ZXS" }, { "id": 1975, "name": "Space Quest II: Chapter II - Vohaul's Revenge", "platform": "DOS" }, { "id": 814, "name": "Space Quest IV: Roger Wilco and the Time Rippers", "platform": "DOS" }, { "id": 1976, "name": "Space Quest: Chapter I - The Sarien Encounter", "platform": "DOS" }, { "id": 2227, "name": "Space Shuttle Project", "platform": "NES" }, { "id": 1755, "name": "Space Station Silicon Valley", "platform": "N64" }, { "id": 770, "name": "Spanky's Quest", "platform": "SNES" }, { "id": 159, "name": "Sparkster", "platform": "SNES" }, { "id": 482, "name": "Sparkster", "platform": "Genesis" }, { "id": 1484, "name": "Spartan X 2", "platform": "NES" }, { "id": 1237, "name": "Spawn", "platform": "SNES" }, { "id": 564, "name": "Speedy Gonzales: Aztec Adventure", "platform": "GBC" }, { "id": 842, "name": "Speedy Gonzales: Los Gatos Bandidos", "platform": "SNES" }, { "id": 289, "name": "Spelunker", "platform": "NES" }, { "id": 1651, "name": "Spelunker II: Y\u016bsha e no Ch\u014dsen", "platform": "NES" }, { "id": 1571, "name": "Spelunky", "platform": "Windows" }, { "id": 1377, "name": "Spider-Man", "platform": "A2600" }, { "id": 1735, "name": "Spider-Man", "platform": "N64" }, { "id": 691, "name": "Spider-Man 2", "platform": "DS" }, { "id": 1804, "name": "Spider-Man 2: Enter: Electro", "platform": "PSX" }, { "id": 467, "name": "Spider-Man 3", "platform": "GBA" }, { "id": 154, "name": "Spider-Man vs. The Kingpin", "platform": "Genesis" }, { "id": 998, "name": "Spider-Man\/X-Men: Arcade's Revenge", "platform": "SNES" }, { "id": 315, "name": "Spider-Man: Return of the Sinister Six", "platform": "NES" }, { "id": 1726, "name": "Spider-Man: Shattered Dimensions", "platform": "DS" }, { "id": 468, "name": "Spider-Man: Web of Fire", "platform": "32X" }, { "id": 749, "name": "Spinmaster", "platform": "Arcade" }, { "id": 1200, "name": "Spiritual Warfare", "platform": "NES" }, { "id": 2179, "name": "Spirou: The Robot Invasion", "platform": "GBC" }, { "id": 1713, "name": "Splatterhouse", "platform": "PCE" }, { "id": 378, "name": "Splatterhouse 2", "platform": "Genesis" }, { "id": 331, "name": "Splatterhouse: Wanpaku Graffiti", "platform": "NES" }, { "id": 758, "name": "SpongeBob SquarePants: Legend of the Lost Spatula", "platform": "GBC" }, { "id": 1999, "name": "SpongeBob SquarePants: SuperSponge", "platform": "GBA" }, { "id": 1496, "name": "SpongeBob's Atlantis SquarePantis", "platform": "GBA" }, { "id": 2037, "name": "Spy Hunter", "platform": "NES" }, { "id": 1856, "name": "Spy Muppets: License to Croak", "platform": "GBA" }, { "id": 1009, "name": "Spy vs. Spy", "platform": "NES" }, { "id": 1053, "name": "Spyman", "platform": "Windows" }, { "id": 640, "name": "Spyro 2: Ripto's Rage!", "platform": "PSX" }, { "id": 801, "name": "Spyro The Dragon", "platform": "PSX" }, { "id": 1485, "name": "Spyro: Attack of the Rhynocs", "platform": "GBA" }, { "id": 1888, "name": "Spyro: Enter The Dragonfly", "platform": "GC" }, { "id": 1055, "name": "Spyro: Year of the Dragon", "platform": "PSX" }, { "id": 741, "name": "Squirrel King", "platform": "Genesis" }, { "id": 2226, "name": "Stadium Events", "platform": "NES" }, { "id": 2167, "name": "Star Control", "platform": "Genesis" }, { "id": 364, "name": "Star Fox", "platform": "SNES" }, { "id": 493, "name": "Star Fox 2", "platform": "SNES" }, { "id": 266, "name": "Star Ocean", "platform": "SNES" }, { "id": 2018, "name": "Star Trek: 25th Anniversary", "platform": "DOS" }, { "id": 1730, "name": "Star Trek: Invasion", "platform": "PSX" }, { "id": 2134, "name": "Star Voyager", "platform": "NES" }, { "id": 193, "name": "Star Wars", "platform": "NES" }, { "id": 1543, "name": "Star Wars - Return of the Jedi: Death Star Battle", "platform": "A2600" }, { "id": 702, "name": "Star Wars Episode I: Jedi Power Battles", "platform": "PSX" }, { "id": 808, "name": "Star Wars: The Empire Strikes Back", "platform": "NES" }, { "id": 1306, "name": "Starflight", "platform": "Genesis" }, { "id": 178, "name": "StarTropics", "platform": "NES" }, { "id": 1978, "name": "Steamgear Mash", "platform": "Saturn" }, { "id": 2084, "name": "SteamWorld Dig 2", "platform": "Linux" }, { "id": 1430, "name": "Streemerz: Super Strength Emergency Squad Zeta", "platform": "NES" }, { "id": 100, "name": "Street Fighter 2010: The Final Fight", "platform": "NES" }, { "id": 873, "name": "Street Fighter Alpha 3", "platform": "Arcade" }, { "id": 676, "name": "Street Fighter II: Rainbow Edition", "platform": "Arcade" }, { "id": 525, "name": "Street Fighter Zero 2 Alpha", "platform": "Arcade" }, { "id": 1121, "name": "Street Smart", "platform": "Genesis" }, { "id": 115, "name": "Streets of Rage", "platform": "Genesis" }, { "id": 126, "name": "Streets of Rage 2", "platform": "Genesis" }, { "id": 1120, "name": "Streets of Rage 3", "platform": "Genesis" }, { "id": 360, "name": "Strider", "platform": "NES" }, { "id": 136, "name": "Strider", "platform": "Genesis" }, { "id": 508, "name": "Strider 2", "platform": "PSX" }, { "id": 1796, "name": "Stuart Little 2", "platform": "GBA" }, { "id": 1541, "name": "Stuart Little: The Journey Home", "platform": "GBC" }, { "id": 420, "name": "Sub-Terrania", "platform": "Genesis" }, { "id": 274, "name": "Sunset Riders", "platform": "Genesis" }, { "id": 1325, "name": "Sunset Riders", "platform": "SNES" }, { "id": 1896, "name": "Super 3D Portals 6", "platform": "A2600" }, { "id": 782, "name": "Super Adventure Island", "platform": "SNES" }, { "id": 1450, "name": "Super Adventure Island II", "platform": "SNES" }, { "id": 1620, "name": "Super Aladdin", "platform": "NES" }, { "id": 2047, "name": "Super Arabian", "platform": "NES" }, { "id": 2042, "name": "Super Bat Puncher", "platform": "NES" }, { "id": 235, "name": "Super Bomberman", "platform": "SNES" }, { "id": 182, "name": "Super Bomberman 2", "platform": "SNES" }, { "id": 1146, "name": "Super Bomberman 3", "platform": "SNES" }, { "id": 613, "name": "Super Bomberman 4", "platform": "SNES" }, { "id": 759, "name": "Super Bomberman 5", "platform": "SNES" }, { "id": 2239, "name": "Super Bowling", "platform": "SNES" }, { "id": 1447, "name": "Super Boy II", "platform": "SMS" }, { "id": 19, "name": "Super C", "platform": "NES" }, { "id": 112, "name": "Super Castlevania IV", "platform": "SNES" }, { "id": 1058, "name": "Super Contra 7", "platform": "NES" }, { "id": 236, "name": "Super Demo World: The Legend Continues", "platform": "SNES" }, { "id": 336, "name": "Super Dodge Ball", "platform": "NES" }, { "id": 1160, "name": "Super Donkey Kong 2", "platform": "NES" }, { "id": 603, "name": "Super Fantasy Zone", "platform": "Genesis" }, { "id": 2116, "name": "Super Ghouls 'N Ghosts", "platform": "GBA" }, { "id": 523, "name": "Super Ghouls 'n Ghosts", "platform": "SNES" }, { "id": 1943, "name": "Super Glove Ball", "platform": "NES" }, { "id": 585, "name": "Super Gussun Oyoyo", "platform": "SNES" }, { "id": 2010, "name": "Super Mario 4", "platform": "GB" }, { "id": 246, "name": "Super Mario 64", "platform": "N64" }, { "id": 812, "name": "Super Mario 64 DS", "platform": "DS" }, { "id": 1962, "name": "Super Mario 64: The Green Stars", "platform": "N64" }, { "id": 913, "name": "Super Mario 74", "platform": "N64" }, { "id": 1481, "name": "Super Mario Advance", "platform": "GBA" }, { "id": 893, "name": "Super Mario Advance 2: Super Mario World", "platform": "GBA" }, { "id": 1260, "name": "Super Mario Advance 4: Super Mario Bros. 3", "platform": "GBA" }, { "id": 1779, "name": "Super Mario All-Stars: Super Mario Bros. 2", "platform": "SNES" }, { "id": 422, "name": "Super Mario All-Stars: Super Mario Bros. 3", "platform": "SNES" }, { "id": 310, "name": "Super Mario All-Stars: The Lost Levels", "platform": "SNES" }, { "id": 352, "name": "Super Mario Bros.", "platform": "FDS" }, { "id": 1, "name": "Super Mario Bros.", "platform": "NES" }, { "id": 15, "name": "Super Mario Bros. 2", "platform": "FDS" }, { "id": 2, "name": "Super Mario Bros. 2", "platform": "NES" }, { "id": 17, "name": "Super Mario Bros. 3", "platform": "NES" }, { "id": 967, "name": "Super Mario Bros. Deluxe", "platform": "GBC" }, { "id": 760, "name": "Super Mario Bros., 2, The Lost Levels & 3", "platform": "NES" }, { "id": 370, "name": "Super Mario Kart", "platform": "SNES" }, { "id": 197, "name": "Super Mario Land", "platform": "GB" }, { "id": 452, "name": "Super Mario Land 2: 6 Golden Coins", "platform": "GB" }, { "id": 194, "name": "Super Mario RPG: Legend of the Seven Stars", "platform": "SNES" }, { "id": 2043, "name": "Super Mario Sunshine", "platform": "GC" }, { "id": 99, "name": "Super Mario World", "platform": "SNES" }, { "id": 213, "name": "Super Mario World 2: Yoshi's Island", "platform": "SNES" }, { "id": 1940, "name": "Super Mario World 64", "platform": "Genesis" }, { "id": 1240, "name": "Super Mario World: The Second Reality Project Reloaded", "platform": "SNES" }, { "id": 121, "name": "Super Metroid", "platform": "SNES" }, { "id": 699, "name": "Super Metroid: MockingBird Station", "platform": "SNES" }, { "id": 1525, "name": "Super Monkey Ball", "platform": "GC" }, { "id": 1526, "name": "Super Monkey Ball 2", "platform": "GC" }, { "id": 2135, "name": "Super Monkey Ball Adventure", "platform": "GC" }, { "id": 854, "name": "Super Monkey Ball Jr.", "platform": "GBA" }, { "id": 1673, "name": "Super Monkey Ball: Touch & Roll", "platform": "DS" }, { "id": 77, "name": "Super Pitfall", "platform": "NES" }, { "id": 113, "name": "Super Punch-Out!!", "platform": "SNES" }, { "id": 1879, "name": "Super Punch-Out!!", "platform": "Arcade" }, { "id": 1366, "name": "Super Putty", "platform": "SNES" }, { "id": 556, "name": "Super Puyo Puyo 2", "platform": "SNES" }, { "id": 1700, "name": "Super Puzzle Fighter II Turbo", "platform": "Arcade" }, { "id": 457, "name": "Super R-Type", "platform": "SNES" }, { "id": 1528, "name": "Super Scribblenauts", "platform": "DS" }, { "id": 471, "name": "Super Smash Bros.", "platform": "N64" }, { "id": 844, "name": "Super Smash Bros. Melee", "platform": "GC" }, { "id": 269, "name": "Super Smash T.V.", "platform": "SNES" }, { "id": 2000, "name": "Super Spike V'Ball", "platform": "NES" }, { "id": 1396, "name": "Super Star Wars", "platform": "SNES" }, { "id": 906, "name": "Super Star Wars: Return of the Jedi", "platform": "SNES" }, { "id": 986, "name": "Super Star Wars: The Empire Strikes Back", "platform": "SNES" }, { "id": 238, "name": "Super Street Fighter II", "platform": "SNES" }, { "id": 1743, "name": "Super Street Fighter II Turbo", "platform": "Arcade" }, { "id": 2173, "name": "Super Tempo", "platform": "Saturn" }, { "id": 1328, "name": "Super Tetris 2 + Bombliss: Genteiban", "platform": "SNES" }, { "id": 24, "name": "Super Turrican", "platform": "NES" }, { "id": 415, "name": "Super Turrican", "platform": "SNES" }, { "id": 1316, "name": "Super Valis IV", "platform": "SNES" }, { "id": 1375, "name": "Superman", "platform": "A2600" }, { "id": 1286, "name": "Superman", "platform": "Genesis" }, { "id": 1556, "name": "Superman", "platform": "N64" }, { "id": 722, "name": "Survival Kids", "platform": "GBC" }, { "id": 2024, "name": "Survival Kids 2: Dasshutsu! Futago Shima!", "platform": "GBC" }, { "id": 1757, "name": "Suzuki Bakuhatsu", "platform": "PSX" }, { "id": 1437, "name": "Sweet Home", "platform": "NES" }, { "id": 176, "name": "Sword Master", "platform": "NES" }, { "id": 1891, "name": "Sylvester and Tweety in Cagey Capers", "platform": "Genesis" }, { "id": 843, "name": "Syobon Action", "platform": "Windows" }, { "id": 752, "name": "Syvalion", "platform": "SNES" }, { "id": 538, "name": "Tails in Sonic The Hedgehog", "platform": "Genesis" }, { "id": 567, "name": "Tails' Skypatrol", "platform": "GG" }, { "id": 542, "name": "Takeshi no Chousenjou", "platform": "NES" }, { "id": 1161, "name": "TaleSpin, Disney's", "platform": "NES" }, { "id": 2201, "name": "Tapper", "platform": "C64" }, { "id": 1897, "name": "Tapper", "platform": "Arcade" }, { "id": 1818, "name": "Tapper", "platform": "A2600" }, { "id": 1963, "name": "Target Earth", "platform": "Genesis" }, { "id": 389, "name": "Taz in Escape from Mars", "platform": "Genesis" }, { "id": 283, "name": "Taz Mania", "platform": "Genesis" }, { "id": 1810, "name": "Tear Ring Saga: Yutona Eiy\u016b Senki", "platform": "PSX" }, { "id": 58, "name": "Tecmo Super Bowl", "platform": "NES" }, { "id": 673, "name": "Teenage Mutant Ninja Turtles", "platform": "Arcade" }, { "id": 152, "name": "Teenage Mutant Ninja Turtles", "platform": "NES" }, { "id": 98, "name": "Teenage Mutant Ninja Turtles II: The Arcade Game", "platform": "NES" }, { "id": 1895, "name": "Teenage Mutant Ninja Turtles III: Radical Rescue", "platform": "GB" }, { "id": 324, "name": "Teenage Mutant Ninja Turtles III: The Manhattan Project", "platform": "NES" }, { "id": 114, "name": "Teenage Mutant Ninja Turtles IV: Turtles in Time", "platform": "SNES" }, { "id": 1774, "name": "Tekken", "platform": "PSX" }, { "id": 1457, "name": "Tekken 2", "platform": "PSX" }, { "id": 1530, "name": "Tekken 3", "platform": "PSX" }, { "id": 1244, "name": "Tekken Advance", "platform": "GBA" }, { "id": 637, "name": "Teleroboxer", "platform": "VBoy" }, { "id": 612, "name": "Tempo", "platform": "32X" }, { "id": 1466, "name": "Tenchu: Stealth Assassins", "platform": "PSX" }, { "id": 1168, "name": "Tengen Tetris", "platform": "NES" }, { "id": 1636, "name": "Tennis", "platform": "GB" }, { "id": 996, "name": "Terminator 2: Judgment Day", "platform": "NES" }, { "id": 1076, "name": "Tetris", "platform": "GB" }, { "id": 170, "name": "Tetris", "platform": "NES" }, { "id": 1729, "name": "Tetris 2 + BomBliss", "platform": "NES" }, { "id": 140, "name": "Tetris Attack", "platform": "SNES" }, { "id": 580, "name": "Tetris Blast", "platform": "SGB" }, { "id": 579, "name": "Tetris DS", "platform": "DS" }, { "id": 332, "name": "Tetris DX", "platform": "GBC" }, { "id": 2130, "name": "Tetris Party Deluxe", "platform": "DS" }, { "id": 2121, "name": "Tetris the Absolute: The Grand Master 2 Plus", "platform": "Arcade" }, { "id": 280, "name": "Tetrisphere", "platform": "N64" }, { "id": 1739, "name": "The 3-D Battles of WorldRunner", "platform": "NES" }, { "id": 684, "name": "The 7th Saga", "platform": "SNES" }, { "id": 383, "name": "The Addams Family", "platform": "SNES" }, { "id": 1060, "name": "The Addams Family", "platform": "GB" }, { "id": 65, "name": "The Addams Family", "platform": "NES" }, { "id": 229, "name": "The Addams Family: Pugsley's Scavenger Hunt", "platform": "SNES" }, { "id": 2055, "name": "The Addams Family: Pugsley's Scavenger Hunt", "platform": "NES" }, { "id": 1824, "name": "The Adventure of Little Ralph", "platform": "PSX" }, { "id": 169, "name": "The Adventures of Bayou Billy", "platform": "NES" }, { "id": 975, "name": "The Adventures of Captain Comic", "platform": "NES" }, { "id": 1580, "name": "The Adventures of Elmo in Grouchland", "platform": "GBC" }, { "id": 1753, "name": "The Adventures of Pinocchio", "platform": "GB" }, { "id": 184, "name": "The Adventures of Rad Gravity", "platform": "NES" }, { "id": 1814, "name": "The Adventures of Rocky and Bullwinkle and Friends", "platform": "SNES" }, { "id": 1582, "name": "The Adventures of Rocky and Bullwinkle and Friends", "platform": "NES" }, { "id": 1676, "name": "The Adventures of Star Saver", "platform": "GB" }, { "id": 762, "name": "The Amazing Spider-Man", "platform": "DOS" }, { "id": 668, "name": "The Amazing Spider-Man: Lethal Foes", "platform": "SNES" }, { "id": 76, "name": "The Battle of Olympus", "platform": "NES" }, { "id": 1947, "name": "The Black Onyx", "platform": "SG1000" }, { "id": 1736, "name": "The Blues Brothers", "platform": "GB" }, { "id": 1317, "name": "The Blues Brothers", "platform": "SNES" }, { "id": 71, "name": "The Blues Brothers", "platform": "NES" }, { "id": 2225, "name": "The Bouncing Ball", "platform": "GB" }, { "id": 754, "name": "The Bugs Bunny Birthday Blowout", "platform": "NES" }, { "id": 781, "name": "The Bugs Bunny Crazy Castle", "platform": "NES" }, { "id": 1448, "name": "The California Raisins: The Grape Escape", "platform": "NES" }, { "id": 167, "name": "The Combatribes", "platform": "SNES" }, { "id": 2072, "name": "The Conduit", "platform": "Wii" }, { "id": 2144, "name": "The Cowlitz Gamers' 2nd Adventure", "platform": "NES" }, { "id": 1509, "name": "The Cure", "platform": "MSX" }, { "id": 1020, "name": "The Emperor's New Groove", "platform": "GBC" }, { "id": 1257, "name": "The Faery Tale Adventure", "platform": "Genesis" }, { "id": 689, "name": "The Final Fantasy Legend", "platform": "GB" }, { "id": 1318, "name": "The Firemen", "platform": "SNES" }, { "id": 1981, "name": "The Flash", "platform": "SMS" }, { "id": 897, "name": "The Flintstones", "platform": "Genesis" }, { "id": 70, "name": "The Flintstones: The Rescue of Dino & Hoppy", "platform": "NES" }, { "id": 1219, "name": "The Flintstones: The Treasure of Sierra Madrock", "platform": "SNES" }, { "id": 2118, "name": "The GG Shinobi", "platform": "GG" }, { "id": 79, "name": "The Goonies", "platform": "NES" }, { "id": 78, "name": "The Goonies II", "platform": "NES" }, { "id": 376, "name": "The Great Circus Mystery Starring Mickey and Minnie", "platform": "SNES" }, { "id": 1845, "name": "The Great Giana Sisters", "platform": "C64" }, { "id": 2152, "name": "The Great Waldo Search", "platform": "SNES" }, { "id": 1628, "name": "The Great Waldo Search", "platform": "NES" }, { "id": 1321, "name": "The Guardian Legend", "platform": "NES" }, { "id": 2104, "name": "The Hitchhiker's Guide to the Galaxy", "platform": "DOS" }, { "id": 2153, "name": "The Human Race", "platform": "C64" }, { "id": 379, "name": "The Humans", "platform": "Genesis" }, { "id": 307, "name": "The Immortal", "platform": "Genesis" }, { "id": 1920, "name": "The Immortal", "platform": "NES" }, { "id": 2076, "name": "The Incredible Crash Dummies", "platform": "Genesis" }, { "id": 1536, "name": "The Incredible Crash Dummies", "platform": "GB" }, { "id": 659, "name": "The Incredible Hulk", "platform": "SNES" }, { "id": 1583, "name": "The Jetsons: Invasion of the Planet Pirates", "platform": "SNES" }, { "id": 1179, "name": "The Jungle Book", "platform": "NES" }, { "id": 583, "name": "The Jungle Book, Disney's", "platform": "Genesis" }, { "id": 157, "name": "The Karate Kid", "platform": "NES" }, { "id": 1749, "name": "The King Of Fighters '97", "platform": "Arcade" }, { "id": 968, "name": "The King of Fighters 2001", "platform": "Arcade" }, { "id": 201, "name": "The Krion Conquest", "platform": "NES" }, { "id": 1663, "name": "The Last Ninja", "platform": "NES" }, { "id": 1765, "name": "The Legend of Galahad", "platform": "Genesis" }, { "id": 83, "name": "The Legend of Kage", "platform": "NES" }, { "id": 1656, "name": "The Legend of Spyro: The Eternal Night", "platform": "GBA" }, { "id": 149, "name": "The Legend of the Mystical Ninja", "platform": "SNES" }, { "id": 12, "name": "The Legend of Zelda", "platform": "NES" }, { "id": 1667, "name": "The Legend of Zelda", "platform": "FDS" }, { "id": 191, "name": "The Legend of Zelda: A Link to the Past", "platform": "SNES" }, { "id": 680, "name": "The Legend of Zelda: A Link to the Past", "platform": "GBA" }, { "id": 226, "name": "The Legend of Zelda: Link's Awakening", "platform": "GB" }, { "id": 311, "name": "The Legend of Zelda: Link's Awakening DX", "platform": "GBC" }, { "id": 399, "name": "The Legend of Zelda: Majora's Mask", "platform": "N64" }, { "id": 301, "name": "The Legend of Zelda: Ocarina of Time", "platform": "N64" }, { "id": 1772, "name": "The Legend of Zelda: Oracle of Ages", "platform": "GBC" }, { "id": 997, "name": "The Legend of Zelda: Oracle of Seasons", "platform": "GBC" }, { "id": 539, "name": "The Legend of Zelda: Outlands", "platform": "NES" }, { "id": 1859, "name": "The Legend of Zelda: Spirit Tracks", "platform": "DS" }, { "id": 804, "name": "The Legend of Zelda: The Minish Cap", "platform": "GBA" }, { "id": 1858, "name": "The Legend of Zelda: Twilight Princess", "platform": "GC" }, { "id": 846, "name": "The Legendary Axe", "platform": "PCE" }, { "id": 2177, "name": "The Legendary Axe II", "platform": "PCE" }, { "id": 209, "name": "The Lion King", "platform": "Genesis" }, { "id": 1282, "name": "The Lion King", "platform": "NES" }, { "id": 2163, "name": "The Lion King", "platform": "GB" }, { "id": 1606, "name": "The Lion King", "platform": "SNES" }, { "id": 2119, "name": "The Lion King", "platform": "SMS" }, { "id": 2123, "name": "The Lion King 2", "platform": "Genesis" }, { "id": 1880, "name": "The Little Mermaid", "platform": "GB" }, { "id": 137, "name": "The Little Mermaid, Disney's", "platform": "NES" }, { "id": 177, "name": "The Lost Vikings", "platform": "Genesis" }, { "id": 499, "name": "The Lucky Dime Caper Starring Donald Duck", "platform": "SMS" }, { "id": 1852, "name": "The Lucky Dime Caper Starring Donald Duck", "platform": "GG" }, { "id": 1348, "name": "The Magic of Scheherazade", "platform": "NES" }, { "id": 265, "name": "The Mask", "platform": "SNES" }, { "id": 1949, "name": "The Morning Adventure", "platform": "GBA" }, { "id": 2199, "name": "The Mutant Virus: Crisis in a Computer World", "platform": "NES" }, { "id": 2140, "name": "The Mysterious Murasame Castle", "platform": "FDS" }, { "id": 1801, "name": "The Ninja", "platform": "SMS" }, { "id": 472, "name": "The Ninja Warriors", "platform": "SNES" }, { "id": 1675, "name": "The Oregon Trail", "platform": "AppleII" }, { "id": 1748, "name": "The Pirates of Dark Water", "platform": "Genesis" }, { "id": 2245, "name": "The Punisher", "platform": "NES" }, { "id": 1643, "name": "The Quest of Ki", "platform": "NES" }, { "id": 2124, "name": "The Rat", "platform": "C64" }, { "id": 606, "name": "The Ren & Stimpy Show Presents: Stimpy's Invention", "platform": "Genesis" }, { "id": 1578, "name": "The Ren & Stimpy Show: Veediots!", "platform": "SNES" }, { "id": 435, "name": "The Revenge of Shinobi", "platform": "Genesis" }, { "id": 886, "name": "The Rocketeer", "platform": "NES" }, { "id": 678, "name": "The Simpsons", "platform": "Arcade" }, { "id": 345, "name": "The Simpsons: Bart vs. the Space Mutants", "platform": "NES" }, { "id": 349, "name": "The Simpsons: Bart's Nightmare", "platform": "SNES" }, { "id": 1707, "name": "The Smurfs", "platform": "PSX" }, { "id": 387, "name": "The Smurfs", "platform": "GB" }, { "id": 2233, "name": "The Smurfs", "platform": "NES" }, { "id": 1741, "name": "The Smurfs", "platform": "Genesis" }, { "id": 616, "name": "The SpongeBob SquarePants Movie", "platform": "GBA" }, { "id": 679, "name": "The Terminator", "platform": "SegaCD" }, { "id": 735, "name": "The Terminator", "platform": "NES" }, { "id": 620, "name": "The Terminator", "platform": "Genesis" }, { "id": 777, "name": "The Treasure of U\u015fas", "platform": "MSX" }, { "id": 1655, "name": "The Ultimate Doom", "platform": "DOOM" }, { "id": 1370, "name": "The Wild", "platform": "GBA" }, { "id": 2238, "name": "The Wing of Madoola", "platform": "NES" }, { "id": 999, "name": "The Young Indiana Jones Chronicles", "platform": "NES" }, { "id": 816, "name": "Time Lord", "platform": "NES" }, { "id": 1390, "name": "Timecop", "platform": "SNES" }, { "id": 860, "name": "Tinhead", "platform": "Genesis" }, { "id": 1505, "name": "Tintin in Tibet", "platform": "GBC" }, { "id": 1510, "name": "Tintin: Prisoners of the Sun", "platform": "GBC" }, { "id": 54, "name": "Tiny Toon Adventures", "platform": "NES" }, { "id": 1345, "name": "Tiny Toon Adventures 2: Trouble in Wackyland", "platform": "NES" }, { "id": 773, "name": "Tiny Toon Adventures: Babs' Big Break", "platform": "GB" }, { "id": 347, "name": "Tiny Toon Adventures: Buster Busts Loose!", "platform": "SNES" }, { "id": 342, "name": "Tiny Toon Adventures: Buster's Hidden Treasure", "platform": "Genesis" }, { "id": 566, "name": "Tiny Toon Adventures: Montana's Movie Madness", "platform": "GB" }, { "id": 2232, "name": "Tiny Toon Adventures: Wacky Sports Challenge", "platform": "SNES" }, { "id": 1573, "name": "Titenic", "platform": "NES" }, { "id": 2092, "name": "TMNT: Mutant Melee", "platform": "GC" }, { "id": 1512, "name": "Tobal 2", "platform": "PSX" }, { "id": 2129, "name": "Tobu Tobu Girl", "platform": "GB" }, { "id": 1659, "name": "TOCA Touring Car Championship", "platform": "PSX" }, { "id": 1258, "name": "Todd's Adventures in Slime World", "platform": "Genesis" }, { "id": 1039, "name": "ToeJam & Earl in Panic on Funkotron", "platform": "Genesis" }, { "id": 1012, "name": "Toki", "platform": "NES" }, { "id": 1984, "name": "Toki Tori", "platform": "GBC" }, { "id": 285, "name": "Toki: Going Ape Spit", "platform": "Genesis" }, { "id": 362, "name": "Tom & Jerry", "platform": "GB" }, { "id": 353, "name": "Tom & Jerry", "platform": "NES" }, { "id": 840, "name": "Tom & Jerry", "platform": "SNES" }, { "id": 725, "name": "Tom and Jerry in Mouse Attacks!", "platform": "GBC" }, { "id": 1305, "name": "Tom and Jerry: Frantic Antics!", "platform": "Genesis" }, { "id": 1838, "name": "Tom and Jerry: The Movie", "platform": "SMS" }, { "id": 391, "name": "Tom Clancy's Splinter Cell", "platform": "GBA" }, { "id": 1097, "name": "Tom Clancy's Splinter Cell: Pandora Tomorrow", "platform": "GBA" }, { "id": 1916, "name": "Tomb Raider", "platform": "PSX" }, { "id": 772, "name": "Tomb Raider Chronicles", "platform": "PSX" }, { "id": 2142, "name": "Tomb Raider II: Starring Lara Croft", "platform": "PSX" }, { "id": 2064, "name": "Tomb Raider III: Adventures of Lara Croft", "platform": "PSX" }, { "id": 2209, "name": "Tomb Raider: The Last Revelation", "platform": "PSX" }, { "id": 633, "name": "Tomba!", "platform": "PSX" }, { "id": 1665, "name": "Tony Hawk's Pro Skater", "platform": "GBC" }, { "id": 761, "name": "Tony Hawk's Pro Skater", "platform": "N64" }, { "id": 1005, "name": "Tony Hawk's Pro Skater 2", "platform": "N64" }, { "id": 993, "name": "Tony Hawk's Pro Skater 2", "platform": "GBA" }, { "id": 419, "name": "Tony Hawk's Pro Skater 3", "platform": "N64" }, { "id": 1742, "name": "Tony Hawk's Pro Skater 3", "platform": "GC" }, { "id": 1750, "name": "Tony Hawk's Underground", "platform": "GC" }, { "id": 1672, "name": "Tony Hawk's Underground 2", "platform": "GC" }, { "id": 1391, "name": "Toobin'", "platform": "NES" }, { "id": 104, "name": "Top Gear", "platform": "SNES" }, { "id": 665, "name": "Top Gear 2", "platform": "SNES" }, { "id": 1163, "name": "Top Gun", "platform": "NES" }, { "id": 757, "name": "Top Hunter: Roddy & Cathy", "platform": "Arcade" }, { "id": 492, "name": "Total Recall", "platform": "NES" }, { "id": 313, "name": "Totally Rad", "platform": "NES" }, { "id": 1465, "name": "Totally Spies!", "platform": "GBA" }, { "id": 2100, "name": "Toto World 3", "platform": "SMS" }, { "id": 1684, "name": "Touch! Gostop DS", "platform": "DS" }, { "id": 1995, "name": "Touhou Kanjuden ~ Legacy of Lunatic Kingdom", "platform": "Windows" }, { "id": 2088, "name": "TowerFall Ascension", "platform": "Linux" }, { "id": 1885, "name": "Town & Country Surf Designs II: Thrilla's Surfari", "platform": "NES" }, { "id": 1842, "name": "Town & Country Surf Designs: Wood & Water Rage", "platform": "NES" }, { "id": 2014, "name": "Toy Story", "platform": "NES" }, { "id": 1964, "name": "Track & Field", "platform": "Arcade" }, { "id": 35, "name": "Track & Field", "platform": "NES" }, { "id": 1817, "name": "Track & Field II", "platform": "NES" }, { "id": 541, "name": "Transformers: Convoy no Nazo", "platform": "NES" }, { "id": 1550, "name": "Traysia", "platform": "Genesis" }, { "id": 1247, "name": "Treasure Master", "platform": "NES" }, { "id": 876, "name": "Trials of Mana", "platform": "SNES" }, { "id": 554, "name": "Trip World", "platform": "GB" }, { "id": 74, "name": "Trojan", "platform": "NES" }, { "id": 1942, "name": "Tryrush Deppy", "platform": "Saturn" }, { "id": 728, "name": "Turbo Turtle Adventure", "platform": "GBA" }, { "id": 2117, "name": "Turnabout", "platform": "PSX" }, { "id": 631, "name": "Turok 3: Shadow of Oblivion", "platform": "N64" }, { "id": 438, "name": "Turok: Dinosaur Hunter", "platform": "N64" }, { "id": 1989, "name": "Turok: Evolution", "platform": "GBA" }, { "id": 461, "name": "Twinkle Tale", "platform": "Genesis" }, { "id": 2133, "name": "Ty the Tasmanian Tiger 2: Bush Rescue", "platform": "GBA" }, { "id": 406, "name": "U.N. Squadron", "platform": "SNES" }, { "id": 1498, "name": "Ucchan Nanchan no Hon\u014d no Challenge: Denry\u016b IraIra B\u014d", "platform": "N64" }, { "id": 456, "name": "Uchuu no Kishi Tekkaman Blade", "platform": "GB" }, { "id": 483, "name": "Ufouria: The Saga", "platform": "NES" }, { "id": 1069, "name": "Ultima: Exodus", "platform": "NES" }, { "id": 1650, "name": "Ultima: Quest of the Avatar", "platform": "NES" }, { "id": 557, "name": "Ultima: The False Prophet", "platform": "SNES" }, { "id": 2205, "name": "Ultima: Warriors of Destiny", "platform": "NES" }, { "id": 1082, "name": "Ultimate Mortal Kombat 3", "platform": "Genesis" }, { "id": 546, "name": "Ultimate Mortal Kombat 3", "platform": "SNES" }, { "id": 1304, "name": "Ultimate Qix", "platform": "Genesis" }, { "id": 779, "name": "Ultraman Ball", "platform": "SGB" }, { "id": 111, "name": "Umihara Kawase", "platform": "SNES" }, { "id": 636, "name": "Umihara Kawase Shun", "platform": "PSX" }, { "id": 991, "name": "Uncanny X-Men", "platform": "NES" }, { "id": 2169, "name": "Undertale", "platform": "Linux" }, { "id": 88, "name": "Uninvited", "platform": "NES" }, { "id": 621, "name": "Universal Soldier", "platform": "Genesis" }, { "id": 577, "name": "Urban Champion", "platform": "NES" }, { "id": 2207, "name": "Urusei Yatsura: Lum no Wedding Bell", "platform": "NES" }, { "id": 1907, "name": "Valis: The Fantasm Soldier", "platform": "Genesis" }, { "id": 1714, "name": "Valkyrie no Bouken: Toki no Kagi Densetsu", "platform": "NES" }, { "id": 2062, "name": "Valkyrie Profile", "platform": "PSX" }, { "id": 727, "name": "Vampire Killer", "platform": "MSX" }, { "id": 2103, "name": "Vandal Hearts", "platform": "PSX" }, { "id": 1100, "name": "Vapor Trail: Hyper Offence Formation", "platform": "Genesis" }, { "id": 2078, "name": "V\u00f6lgarr the Viking", "platform": "Linux" }, { "id": 368, "name": "Vectorman", "platform": "Genesis" }, { "id": 366, "name": "Vectorman 2", "platform": "Genesis" }, { "id": 1780, "name": "Vegas Dream", "platform": "NES" }, { "id": 146, "name": "Vegas Stakes", "platform": "SNES" }, { "id": 162, "name": "Vice: Project Doom", "platform": "NES" }, { "id": 713, "name": "Vigilante", "platform": "PCE" }, { "id": 2111, "name": "Violent Storm", "platform": "Arcade" }, { "id": 632, "name": "Virtual Boy Wario Land", "platform": "VBoy" }, { "id": 909, "name": "Volley Fire", "platform": "GB" }, { "id": 1442, "name": "VVVVVV", "platform": "Windows" }, { "id": 2159, "name": "VVVVVV", "platform": "Linux" }, { "id": 451, "name": "Wacky Races", "platform": "NES" }, { "id": 147, "name": "Wai Wai World", "platform": "NES" }, { "id": 1002, "name": "Wait and See!", "platform": "NES" }, { "id": 1658, "name": "Wally Bear and the NO! Gang", "platform": "NES" }, { "id": 1524, "name": "Warcraft II: The Dark Saga", "platform": "PSX" }, { "id": 1186, "name": "Wardner", "platform": "Genesis" }, { "id": 272, "name": "Wario Land 4", "platform": "GBA" }, { "id": 401, "name": "Wario Land II", "platform": "GBC" }, { "id": 803, "name": "Wario Land II", "platform": "SGB" }, { "id": 698, "name": "Wario Land: Super Mario Land 3", "platform": "GB" }, { "id": 521, "name": "Wario's Woods", "platform": "SNES" }, { "id": 2113, "name": "Warlock", "platform": "Genesis" }, { "id": 2174, "name": "Warriors of Fate", "platform": "Arcade" }, { "id": 1086, "name": "Warsong", "platform": "Genesis" }, { "id": 1971, "name": "Water Ski", "platform": "A7800" }, { "id": 2026, "name": "Waterworld", "platform": "VBoy" }, { "id": 1518, "name": "Wayne's World", "platform": "NES" }, { "id": 1832, "name": "We're Back! - A Dinosaur's Story", "platform": "GB" }, { "id": 710, "name": "Wendy: Every Witch Way", "platform": "GBC" }, { "id": 212, "name": "Werewolf: The Last Warrior", "platform": "NES" }, { "id": 381, "name": "Wetrix", "platform": "N64" }, { "id": 826, "name": "Where in Time is Carmen Sandiego?", "platform": "NES" }, { "id": 827, "name": "Where's Waldo?", "platform": "NES" }, { "id": 962, "name": "Who Framed Roger Rabbit", "platform": "NES" }, { "id": 143, "name": "Whomp \u201bEm", "platform": "NES" }, { "id": 346, "name": "Widget", "platform": "NES" }, { "id": 2110, "name": "Wii Sports", "platform": "Wii" }, { "id": 2056, "name": "Wild Arms", "platform": "PSX" }, { "id": 142, "name": "Wild Guns", "platform": "SNES" }, { "id": 1030, "name": "Wildwaters Extreme Kayak", "platform": "N64" }, { "id": 1911, "name": "Winnie the Pooh: Adventures in the 100 Acre Wood", "platform": "GBC" }, { "id": 1494, "name": "Winx Club", "platform": "GBA" }, { "id": 791, "name": "Wizardry III: Legacy of Llylgamyn", "platform": "NES" }, { "id": 1083, "name": "Wizardry V: Heart of the Maelstrom", "platform": "SNES" }, { "id": 488, "name": "Wizardry: Proving Grounds of the Mad Overlord", "platform": "NES" }, { "id": 549, "name": "Wizardry: The Knight of Diamonds", "platform": "NES" }, { "id": 73, "name": "Wizards & Warriors", "platform": "NES" }, { "id": 189, "name": "Wizards & Warriors III: Kuros: Visions of Power", "platform": "NES" }, { "id": 427, "name": "Wizards & Warriors X: Fortress of Fear", "platform": "GB" }, { "id": 1751, "name": "Wolfenstein 3D", "platform": "DOS" }, { "id": 973, "name": "Wolverine", "platform": "NES" }, { "id": 533, "name": "Wolverine: Adamantium Rage", "platform": "Genesis" }, { "id": 431, "name": "Wonder Boy", "platform": "SMS" }, { "id": 430, "name": "Wonder Boy III: The Dragon's Trap", "platform": "SMS" }, { "id": 961, "name": "Wonder Boy in Monster Land", "platform": "SMS" }, { "id": 298, "name": "Wonder Boy in Monster World", "platform": "Genesis" }, { "id": 2141, "name": "Wonder Boy in Monster World", "platform": "SMS" }, { "id": 1353, "name": "World of Goo", "platform": "Wii" }, { "id": 1114, "name": "World of Illusion Starring Mickey Mouse and Donald Duck", "platform": "Genesis" }, { "id": 138, "name": "Wrath of the Black Manta", "platform": "NES" }, { "id": 1548, "name": "Wrecking Crew '98", "platform": "SNES" }, { "id": 2182, "name": "X-COM: UFO Defense", "platform": "PSX" }, { "id": 1595, "name": "X-Men", "platform": "Genesis" }, { "id": 278, "name": "X-Men 2: Clone Wars", "platform": "Genesis" }, { "id": 551, "name": "X-Men vs. Street Fighter", "platform": "Arcade" }, { "id": 334, "name": "X-Men: Mutant Apocalypse", "platform": "SNES" }, { "id": 1590, "name": "X-Men: The Official Game", "platform": "GBA" }, { "id": 1502, "name": "X-Men: Wolverine's Rage", "platform": "GBC" }, { "id": 341, "name": "X2: Wolverine's Revenge", "platform": "GBA" }, { "id": 671, "name": "Xena: Warrior Princess", "platform": "GBC" }, { "id": 1193, "name": "Xexyz", "platform": "NES" }, { "id": 883, "name": "Yie Ar Kung-Fu", "platform": "NES" }, { "id": 1424, "name": "Yie Ar Kung-Fu II: The Emperor Yie-Gah", "platform": "MSX" }, { "id": 540, "name": "Yo! Noid", "platform": "NES" }, { "id": 1444, "name": "Yoshi's Safari", "platform": "SNES" }, { "id": 796, "name": "Yoshi's Story", "platform": "N64" }, { "id": 825, "name": "You Have to Burn the Rope DS", "platform": "DS" }, { "id": 2183, "name": "You Have to Win the Game", "platform": "Linux" }, { "id": 11, "name": "Youkai Douchuuki", "platform": "NES" }, { "id": 481, "name": "Young Merlin", "platform": "SNES" }, { "id": 1725, "name": "Ys III: Wanderers from Ys", "platform": "Genesis" }, { "id": 1626, "name": "Ys: The Vanished Omens", "platform": "SMS" }, { "id": 1479, "name": "Yu-Gi-Oh! 5D's World Championship 2011: Over the Nexus", "platform": "DS" }, { "id": 1850, "name": "Yu-Gi-Oh! 7 Trials to Glory: World Championship Tournament 2005", "platform": "GBA" }, { "id": 1408, "name": "Yu-Gi-Oh! Forbidden Memories", "platform": "PSX" }, { "id": 1933, "name": "Yume Nikki", "platform": "Windows" }, { "id": 766, "name": "Yume Penguin Monogatari", "platform": "NES" }, { "id": 1356, "name": "Yuu Yuu Hakusho: Makai no Tobira", "platform": "GB" }, { "id": 179, "name": "Zanac", "platform": "NES" }, { "id": 629, "name": "Zany Golf", "platform": "Genesis" }, { "id": 1686, "name": "Zapper: One Wicked Cricket!", "platform": "GC" }, { "id": 1692, "name": "Zaxxon", "platform": "Coleco" }, { "id": 62, "name": "Zelda II: The Adventure of Link", "platform": "FDS" }, { "id": 208, "name": "Zelda II: The Adventure of Link", "platform": "NES" }, { "id": 478, "name": "Zen: Intergalactic Ninja", "platform": "NES" }, { "id": 2218, "name": "Zen: Intergalactic Ninja", "platform": "GB" }, { "id": 1593, "name": "Zero Tolerance", "platform": "Genesis" }, { "id": 1117, "name": "Zero Wing", "platform": "Genesis" }, { "id": 279, "name": "Zero: The Kamikaze Squirrel", "platform": "SNES" }, { "id": 950, "name": "Zillion", "platform": "SMS" }, { "id": 243, "name": "Zoda's Revenge: StarTropics II", "platform": "NES" }, { "id": 203, "name": "Zombies Ate My Neighbors", "platform": "SNES" }, { "id": 1738, "name": "Zook Hero Z", "platform": "GBC" }, { "id": 1889, "name": "Zook Man ZX4", "platform": "GBA" }, { "id": 2009, "name": "Zool: Ninja of the \"Nth\" Dimension", "platform": "Genesis" }, { "id": 2185, "name": "Zool: Ninja of the \"Nth\" Dimension", "platform": "SMS" }]</script>
    
        <script type="text/javascript" src="TASVideos%20movies%20Wii%20only_files/listmovies.js"></script>
        */}
        <img
        alt="[Tier: Vault]" src={require("./assets/images/vaulttier.png")} width="18" height="18"/> =
    Tier: <a href="http://tasvideos.org/Vault">Vault</a><br></br><img alt="[Tier: Moons]"
        src={require("./assets/images/moontier.png")} width="18" height="18"/> = Tier: <a
        href="http://tasvideos.org/Moons">Moons</a><br></br><img alt="[Fastest Completion]"
        src={require("./assets/images/fastest-completion.png")} width="18" height="18"/> = <a
        href="http://tasvideos.org/FastestCompletion">Fastest Completion</a><br></br>
    <p>Total movies: 18</p><a id="M2679_1"></a>
   
    <script type="text/javascript">
        prepareStreaming("2679_1", false);
    </script>
    
                
            <Movie description={db.content[0].Description} title={db.content[0].Title} tags={db.content[0].Tags} img={require('./assets/images/' + db.content[0].img)}
            links={db.content[0].Links} youtubeLinks = {db.content[0].YoutubeLinks} downloadLinks = {db.content[0].DownloadLinks} tiers = {db.content[0].tiers}
            rating={db.content[0].Rating}>
                </Movie>
    
            <Movie description={db.content[1].Description} title={db.content[1].Title} tags={db.content[1].Tags} img={require('./assets/images/' + db.content[1].img)}
            links={db.content[1].Links} youtubeLinks = {db.content[1].YoutubeLinks} downloadLinks = {db.content[1].DownloadLinks} tiers = {db.content[1].tiers}
            rating={db.content[1].Rating}>
            </Movie>

            <Movie description={db.content[2].Description} title={db.content[2].Title} tags={db.content[2].Tags} img={require('./assets/images/' + db.content[2].img)}
            links={db.content[2].Links} youtubeLinks = {db.content[2].YoutubeLinks} downloadLinks = {db.content[2].DownloadLinks} tiers = {db.content[2].tiers}
            rating={db.content[2].Rating}>
            </Movie>
            
            <Movie description={db.content[3].Description} title={db.content[3].Title} tags={db.content[3].Tags} img={require('./assets/images/' + db.content[3].img)}
            links={db.content[3].Links} youtubeLinks = {db.content[3].YoutubeLinks} downloadLinks = {db.content[3].DownloadLinks} tiers = {db.content[3].tiers}
            rating={db.content[3].Rating}>
            </Movie>

    <div id="tabber" className="tabber_vert_live">
        <ul className="tabbernav">
            <li className="tabberactive"><span className="tablink" title="Explanation">Explanation</span></li>
            <li className=""><span className="tablink" title="History of this entry">History of this entry</span></li>
            <li className=""><span className="tablink" title="Similar movies">Similar movies</span></li>
            <li className=""><span className="tablink" title="Other movies">Other movies</span></li>
        </ul>
        <div className="tabbertab " title="">Please read the <a
                href="http://tasvideos.org/WelcomeToTASVideos.html">welcome</a> page if you haven't already done so.
            It explains the rules and methods that apply to all of these movies,
            particularly the use of <em>savestates</em> and <em>frame advance</em>. Also refer to our <a
                href="http://tasvideos.org/Glossary.html">Glossary</a> to understand terms we use, such as
            <em>TAS</em> or other unfamiliar terms.
            <p></p>
        </div>
        <div className="tabbertab tabbertabhide" title="">Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/FastestCompletion"><img
                    title="Fastest Completion" alt="[Fastest Completion]"
                    src={require("./assets/images/fastest-completion.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/4247M.html">Wii New Super Mario Bros. Wii (JPN) "warps"
                by Monster in 24:54.8</a> (2020-07-22)<br></br>- obsoletes <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/FastestCompletion"><img
                    title="Fastest Completion" alt="[Fastest Completion]"
                    src={require("./assets/images/fastest-completion.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/3643M.html" rel="nofollow">Wii New Super Mario Bros. Wii (JPN) "warps"
                by Monster in 25:02.1</a> (2018-02-27)<br></br><del>- - obsoletes <a
                    href="http://tasvideos.org/Moons"><img title="Tier: Moons" alt="[Tier: Moons]"
                        src={require("./assets/images/moontier.png")} width="18" height="18"/></a><a
                    href="http://tasvideos.org/FastestCompletion"><img title="Fastest Completion"
                        alt="[Fastest Completion]"
                        src={require("./assets/images/fastest-completion.png")} width="18"
                        height="18"/></a><a href="http://tasvideos.org/2927M.html" rel="nofollow">Wii New Super Mario
                    Bros. Wii (USA) "warps"
                    by Soig in 25:30.1</a> (2015-08-18)<br></br></del><del>- - - obsoletes <a
                    href="http://tasvideos.org/Moons"><img title="Tier: Moons" alt="[Tier: Moons]"
                        src={require("./assets/images/moontier.png")} width="18" height="18"/></a><a
                    href="http://tasvideos.org/FastestCompletion"><img title="Fastest Completion"
                        alt="[Fastest Completion]"
                        src={require("./assets/images/fastest-completion.png")} width="18"
                        height="18"/></a><a href="http://tasvideos.org/2760M.html" rel="nofollow">Wii New Super Mario
                    Bros. Wii (USA) "warps"
                    by Got4n in 25:06.3</a> (2015-01-13)<br></br></del>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/FastestCompletion"><img
                    title="Fastest Completion" alt="[Fastest Completion]"
                    src={require("./assets/images/fastest-completion.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/4195M.html">Wii Namco Museum Megamix (USA) "Pac'n Roll Remix"
                by Elomavi in 15:21.02</a> (2020-05-28)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/3890M.html">Wii Wii Sports (USA) "Golf,
                9-Hole Game"
                by tendog in 03:33.4</a> (2019-01-19)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/FastestCompletion"><img
                    title="Fastest Completion" alt="[Fastest Completion]"
                    src={require("./assets/images/fastest-completion.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/3794M.html">Wii The Conduit (USA)
                by NEVERDOORS in 45:46.7</a> (2018-09-25)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/3754M.html">Wii New Super Mario Bros.
                Wii (USA) "100%"
                by Soig in 2:58:33.27</a> (2018-08-02)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/FastestCompletion"><img
                    title="Fastest Completion" alt="[Fastest Completion]"
                    src={require("./assets/images/fastest-completion.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/3466M.html">Wii Castlevania: The Adventure ReBirth (USA)
                by zggzdydp in 18:29.4</a> (2017-07-15)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/FastestCompletion"><img
                    title="Fastest Completion" alt="[Fastest Completion]"
                    src={require("./assets/images/fastest-completion.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/3410M.html">Wii GoldenEye: 007 (USA) "007 classNameic difficulty"
                by FitterSpace in 1:41:35.67</a> (2017-06-01)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/FastestCompletion"><img
                    title="Fastest Completion" alt="[Fastest Completion]"
                    src={require("./assets/images/fastest-completion.png")} width="18" height="18/"/></a><a
                href="http://tasvideos.org/3338M.html">Wii Rayman Origins (USA)
                by keylie in 45:31.3</a> (2017-02-24)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/FastestCompletion"><img
                    title="Fastest Completion" alt="[Fastest Completion]"
                    src={require("./assets/images/fastest-completion.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/3288M.html">Wii Muramasa: The Demon Blade (USA) "Momohime"
                by Hetfield90 &amp; RachelB in 1:03:44.55</a> (2016-12-23)<br></br>- obsoletes <a
                href="http://tasvideos.org/Moons"><img title="Tier: Moons" alt="[Tier: Moons]"
                    src={require("./assets/images/moontier.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/FastestCompletion"><img title="Fastest Completion"
                    alt="[Fastest Completion]" src="TASVideos%20movies%20Wii%20only_files/fastest-completion.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/2009M.html" rel="nofollow">Wii
                Muramasa: The Demon Blade (USA) "Momohime"
                by RachelB in 1:04:59.75</a> (2012-03-28)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/3248M.html">Wii Muramasa: The Demon
                Blade (JPN) "Kisuke"
                by Bernka in 1:03:49.15</a> (2016-10-30)<br></br>Added <a href="http://tasvideos.org/Vault"><img
                    title="Tier: Vault" alt="[Tier: Vault]"
                    src={require("./assets/images/vaulttier.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/FastestCompletion"><img title="Fastest Completion"
                    alt="[Fastest Completion]" src="TASVideos%20movies%20Wii%20only_files/fastest-completion.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/3140M.html">Wii Gummy Bears Minigolf
                (USA)
                by Fog in 12:27.13</a> (2016-05-21)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/FastestCompletion"><img
                    title="Fastest Completion" alt="[Fastest Completion]"
                    src={require("./assets/images/fastest-completion.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/2969M.html">Wii Mega Man 9 (USA)
                by AngerFist &amp; diggidoyo in 30:20.98</a> (2015-10-02)<br></br>Added <a
                href="http://tasvideos.org/Vault"><img title="Tier: Vault" alt="[Tier: Vault]"
                    src={require("./assets/images/vaulttier.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/FastestCompletion"><img title="Fastest Completion"
                    alt="[Fastest Completion]" src="TASVideos%20movies%20Wii%20only_files/fastest-completion.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/2679M.html">Wii Anubis II (USA)
                by CoolKirby in 02:17.48</a> (2014-08-30)<br></br>Added <a href="http://tasvideos.org/Vault"><img
                    title="Tier: Vault" alt="[Tier: Vault]"
                    src={require("./assets/images/vaulttier.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/FastestCompletion"><img title="Fastest Completion"
                    alt="[Fastest Completion]" src="TASVideos%20movies%20Wii%20only_files/fastest-completion.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/2605M.html">Wii Doc Louis's Punch-Out!!
                (USA)
                by McHazard in 01:40.15</a> (2014-05-25)<br></br>Added <a href="http://tasvideos.org/Vault"><img
                    title="Tier: Vault" alt="[Tier: Vault]"
                    src={require("./assets/images/vaulttier.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/FastestCompletion"><img title="Fastest Completion"
                    alt="[Fastest Completion]" src="TASVideos%20movies%20Wii%20only_files/fastest-completion.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/2408M.html">Wii Pucca's Kisses Game
                (USA)
                by RachelB in 46:09.37</a> (2013-06-26)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/FastestCompletion"><img
                    title="Fastest Completion" alt="[Fastest Completion]"
                    src={require("./assets/images/fastest-completion.png")} width="18" height="18"/></a><a
                href="http://tasvideos.org/2089M.html">Wii World of Goo (USA)
                by STBM in 31:30.88</a> (2012-08-15)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/2005M.html">Wii Mega Man 10 (USA)
                "Bass, Hard Mode"
                by diggidoyo in 28:18.25</a> (2012-03-25)<br></br>Added <a href="http://tasvideos.org/Moons"><img
                    title="Tier: Moons" alt="[Tier: Moons]" src="TASVideos%20movies%20Wii%20only_files/moontier.png"
                    width="18" height="18"/></a><a href="http://tasvideos.org/1812M.html">Wii Mega Man 10 (USA) "Mega
                Man"
                by diggidoyo in 33:42.37</a> (2011-05-28)<br></br>
            <p></p>
        </div>
        <div className="tabbertab tabbertabhide" title="">Similar movies by name and category traits (warning: can be
            quite random sometimes):
            (Too many movies)
            <p></p>
        </div>
        <div className="tabbertab tabbertabhide" title=""><b>More movies:</b>
            <ul>
                <li> <a href="http://tasvideos.org/movies.cgi?maxage=1209600">Newest publications</a>
                </li>
                <li> <a href="http://tasvideos.org/Movies-Rec.html">Special Stars</a>
                </li>
                <li> Browse movies by system:
                    <ul>
                        <li> <a href="http://tasvideos.org/Movies-NES.html">Nintendo Entertainment System/Family
                                Computer</a>, <a href="http://tasvideos.org/Movies-FDS.html">Famicom Disk
                                System</a>, <a href="http://tasvideos.org/Movies-SNES.html">Super NES/Super
                                Famicom</a>, <a href="http://tasvideos.org/Movies-N64.html">Nintendo 64</a>, <a
                                href="http://tasvideos.org/Movies-GC.html">GameCube</a>, <a
                                href="http://tasvideos.org/Movies-Wii.html">Wii</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-GB.html">Nintendo Game Boy</a>, <a
                                href="http://tasvideos.org/Movies-SGB.html">Super Game Boy</a>, <a
                                href="http://tasvideos.org/Movies-VBoy.html">Virtual Boy</a>, <a
                                href="http://tasvideos.org/Movies-GBC.html">Game Boy Color</a>, <a
                                href="http://tasvideos.org/Movies-GBA.html">Game Boy Advance</a>, <a
                                href="http://tasvideos.org/Movies-DS.html">Nintendo DS</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-DOS.html">DOS</a>, <a
                                href="http://tasvideos.org/Movies-DOOM.html">id Software DOOM</a>, <a
                                href="http://tasvideos.org/Movies-MSX.html">Microsoft MSX/MSX2/MSX2+/turboR</a>, <a
                                href="http://tasvideos.org/Movies-Windows.html">Microsoft Windows</a>, <a
                                href="http://tasvideos.org/Movies-Linux.html">Linux</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-SMS-GG.html">Sega Master System/Game Gear</a>, <a
                                href="http://tasvideos.org/Movies-Genesis-32X-SegaCD.html">Sega Genesis/Mega
                                Drive/32X/CD</a>, <a href="http://tasvideos.org/Movies-Saturn.html">Sega Saturn</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-PCE-PCECD-SGX.html">NEC TurboGrafx-16/PC
                                Engine/CD/SuperGrafx</a>, <a href="http://tasvideos.org/Movies-PCFX.html">PC-FX</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-AppleII.html">Apple II</a>, <a
                                href="http://tasvideos.org/Movies-ZXS.html">Sinclair ZX Spectrum</a>, <a
                                href="http://tasvideos.org/Movies-C64.html">Commodore 64</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-NGP.html">SNK Neo Geo Pocket/Neo Geo Pocket
                                Color</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-WSWAN.html">Bandai WonderSwan/WonderSwan Color</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-INTV.html">Mattel/INTV Intellivision</a>, <a
                                href="http://tasvideos.org/Movies-Coleco.html">ColecoVision</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-A2600-A7800.html">Atari 2600/7800</a>, <a
                                href="http://tasvideos.org/Movies-Lynx.html">Atari Lynx</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-PSX.html">Sony PlayStation</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-Uzebox.html">Uzebox</a>
                        </li>
                        <li> <a href="http://tasvideos.org/Movies-Arcade.html">Arcade</a>
                        </li>
                    </ul>
                </li>
                <li> Search by game name: <form method="get" action="/movies.cgi" style={{display:"inline"}}><input
                            type="text" name="name" data-size="13"/></form>
                </li>
            </ul>
            <p></p>
        </div>
    </div>
    <div className="clear"></div>
    {/* <script type="text/javascript">< !--
            tabberAutomatic({ classNameMain: "tabber_vert", classNameMainLive: "tabber_vert_live" })
        --></script> */}
    <div className="linkinstr"><br></br>
        Webmasters, please don't link directly to the files.
        Link to this page or the
        <a href="http://tasvideos.org/">front page</a> instead.
        <br></br>
        Republication of movies from this site is only allowed under the following conditions:
        <ol>
            <li> Video and audio content must not be changed (including the pointers to this site).
            </li>
            <li> The movies must be prominently labeled as <a
                    href="http://tasvideos.org/Glossary.html#ToolAssistedSpeedrunTas">tool-assisted speedruns</a>.
            </li>
            <li> The actual player(s) (always shown at this site) must be properly credited.
            </li>
        </ol>Do not label them with speculations. If unsure, ask the <a href="http://tasvideos.org/Users.html">site
            staff</a> for details.
        <br></br>
        <br></br>
    </div>
</div>
</div>
  );
}

export default App;