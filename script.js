const GENRES=["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Fantasy","Horror","Mystery","Romance","Science Fiction","Thriller"];
const MOVIES=[
["Inception",2010,["Science Fiction","Action","Thriller"],"Christopher Nolan","Leonardo DiCaprio, Joseph Gordon-Levitt",148,8.8,98],
["Interstellar",2014,["Science Fiction","Drama","Adventure"],"Christopher Nolan","Matthew McConaughey, Anne Hathaway",169,8.7,97],
["The Dark Knight",2008,["Action","Crime","Drama"],"Christopher Nolan","Christian Bale, Heath Ledger",152,9.0,100],
["Avengers: Endgame",2019,["Action","Adventure","Science Fiction"],"Anthony Russo, Joe Russo","Robert Downey Jr., Chris Evans",181,8.3,99],
["Avatar",2009,["Science Fiction","Adventure","Fantasy"],"James Cameron","Sam Worthington, Zoe Saldana",162,7.9,95],
["The Matrix",1999,["Science Fiction","Action"],"The Wachowskis","Keanu Reeves, Laurence Fishburne",136,8.7,94],
["Spider-Man: Into the Spider-Verse",2018,["Animation","Action","Adventure"],"Bob Persichetti, Peter Ramsey","Shameik Moore, Jake Johnson",117,8.4,92],
["Toy Story",1995,["Animation","Comedy","Adventure"],"John Lasseter","Tom Hanks, Tim Allen",81,8.3,90],
["Coco",2017,["Animation","Fantasy","Drama"],"Lee Unkrich","Anthony Gonzalez, Gael Garcia Bernal",105,8.4,88],
["The Shawshank Redemption",1994,["Drama","Crime"],"Frank Darabont","Tim Robbins, Morgan Freeman",142,9.3,96],
["Forrest Gump",1994,["Drama","Romance","Comedy"],"Robert Zemeckis","Tom Hanks, Robin Wright",142,8.8,93],
["Gladiator",2000,["Action","Adventure","Drama"],"Ridley Scott","Russell Crowe, Joaquin Phoenix",155,8.5,91],
["Jurassic Park",1993,["Adventure","Science Fiction","Thriller"],"Steven Spielberg","Sam Neill, Laura Dern",127,8.2,94],
["The Lord of the Rings",2001,["Fantasy","Adventure","Action"],"Peter Jackson","Elijah Wood, Ian McKellen",178,8.9,96],
["Harry Potter and the Sorcerer's Stone",2001,["Fantasy","Adventure"],"Chris Columbus","Daniel Radcliffe, Emma Watson",152,7.6,93],
["Mad Max: Fury Road",2015,["Action","Adventure","Science Fiction"],"George Miller","Tom Hardy, Charlize Theron",120,8.1,91],
["Guardians of the Galaxy",2014,["Action","Adventure","Comedy"],"James Gunn","Chris Pratt, Zoe Saldana",121,8.0,95],
["Iron Man",2008,["Action","Science Fiction","Adventure"],"Jon Favreau","Robert Downey Jr., Gwyneth Paltrow",126,7.9,96],
["Black Panther",2018,["Action","Adventure","Science Fiction"],"Ryan Coogler","Chadwick Boseman, Michael B. Jordan",134,7.3,97],
["Doctor Strange",2016,["Fantasy","Action","Adventure"],"Scott Derrickson","Benedict Cumberbatch, Rachel McAdams",115,7.5,91],
["Titanic",1997,["Romance","Drama"],"James Cameron","Leonardo DiCaprio, Kate Winslet",195,7.9,97],
["La La Land",2016,["Romance","Drama","Comedy"],"Damien Chazelle","Ryan Gosling, Emma Stone",128,8.0,87],
["The Notebook",2004,["Romance","Drama"],"Nick Cassavetes","Ryan Gosling, Rachel McAdams",123,7.8,82],
["Pride & Prejudice",2005,["Romance","Drama"],"Joe Wright","Keira Knightley, Matthew Macfadyen",129,7.8,79],
["A Quiet Place",2018,["Horror","Thriller","Drama"],"John Krasinski","Emily Blunt, John Krasinski",90,7.5,88],
["Get Out",2017,["Horror","Mystery","Thriller"],"Jordan Peele","Daniel Kaluuya, Allison Williams",104,7.7,89],
["The Conjuring",2013,["Horror","Mystery","Thriller"],"James Wan","Vera Farmiga, Patrick Wilson",112,7.5,86],
["It",2017,["Horror","Drama","Thriller"],"Andy Muschietti","Bill Skarsgard, Jaeden Martell",135,7.3,90],
["Knives Out",2019,["Mystery","Comedy","Crime"],"Rian Johnson","Daniel Craig, Ana de Armas",130,7.9,91],
["Sherlock Holmes",2009,["Mystery","Action","Crime"],"Guy Ritchie","Robert Downey Jr., Jude Law",128,7.6,88],
["Se7en",1995,["Crime","Mystery","Thriller"],"David Fincher","Brad Pitt, Morgan Freeman",127,8.6,89],
["Zodiac",2007,["Crime","Mystery","Drama"],"David Fincher","Jake Gyllenhaal, Mark Ruffalo",157,7.7,76],
["The Hangover",2009,["Comedy"],"Todd Phillips","Bradley Cooper, Zach Galifianakis",100,7.7,87],
["Superbad",2007,["Comedy"],"Greg Mottola","Jonah Hill, Michael Cera",113,7.6,80],
["Home Alone",1990,["Comedy","Adventure"],"Chris Columbus","Macaulay Culkin, Joe Pesci",103,7.7,91],
["Inside Out",2015,["Animation","Comedy","Drama"],"Pete Docter","Amy Poehler, Bill Hader",95,8.1,89],
["Finding Nemo",2003,["Animation","Adventure","Comedy"],"Andrew Stanton","Albert Brooks, Ellen DeGeneres",100,8.2,92],
["How to Train Your Dragon",2010,["Animation","Fantasy","Adventure"],"Chris Sanders, Dean DeBlois","Jay Baruchel, Gerard Butler",98,8.1,88],
["Moana",2016,["Animation","Adventure","Fantasy"],"Ron Clements, John Musker","Auli'i Cravalho, Dwayne Johnson",107,7.6,91],
["Dune",2021,["Science Fiction","Adventure","Drama"],"Denis Villeneuve","Timothee Chalamet, Zendaya",155,8.0,96],
["Arrival",2016,["Science Fiction","Drama","Mystery"],"Denis Villeneuve","Amy Adams, Jeremy Renner",116,7.9,82],
["Blade Runner 2049",2017,["Science Fiction","Thriller","Drama"],"Denis Villeneuve","Ryan Gosling, Harrison Ford",164,8.0,86],
["Top Gun: Maverick",2022,["Action","Drama"],"Joseph Kosinski","Tom Cruise, Miles Teller",130,8.2,98],
["John Wick",2014,["Action","Thriller","Crime"],"Chad Stahelski","Keanu Reeves, Michael Nyqvist",101,7.4,94],
["Mission: Impossible – Fallout",2018,["Action","Thriller","Adventure"],"Christopher McQuarrie","Tom Cruise, Henry Cavill",147,7.7,95],
["Pirates of the Caribbean",2003,["Adventure","Fantasy","Comedy"],"Gore Verbinski","Johnny Depp, Geoffrey Rush",143,8.1,94],
["The Lion King",1994,["Animation","Adventure","Drama"],"Roger Allers, Rob Minkoff","Matthew Broderick, Jeremy Irons",88,8.5,95],
["The Prestige",2006,["Drama","Mystery","Science Fiction"],"Christopher Nolan","Christian Bale, Hugh Jackman",130,8.5,88],
["Whiplash",2014,["Drama","Music"],"Damien Chazelle","Miles Teller, J.K. Simmons",106,8.5,84],
["Oppenheimer",2023,["Drama","History"],"Christopher Nolan","Cillian Murphy, Emily Blunt",180,8.6,99]
];

function defaultState(){return {users:[],currentUser:null,ratings:{},watchlist:{}}}
let state=JSON.parse(localStorage.getItem("cineMatchState")||"null")||defaultState();
const movieObjects=MOVIES.map((m,i)=>({id:i+1,title:m[0],year:m[1],genres:m[2],director:m[3],cast:m[4],runtime:m[5],rating:m[6],popularity:m[7],description:`A ${m[2].join(", ")} movie selected for the CineMatch sample catalogue.`}));

function save(){localStorage.setItem("cineMatchState",JSON.stringify(state))}
function current(){return state.users.find(u=>u.email===state.currentUser)}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function showPage(id){
  if(id!=="landing" && !current() && !["login","register"].includes(id)){showPage("login");return}
  document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  if(id==="home")renderHome(); if(id==="discover")renderDiscover(); if(id==="ratings")renderRatings();
  if(id==="watchlist")renderWatchlist(); if(id==="profile")renderProfile(); if(id==="admin")renderAdmin();
  if(id==="genres")renderGenres(); if(id==="rateSetup")renderSetupMovies();
  window.scrollTo({top:0,behavior:"smooth"});
}
function register(e){e.preventDefault();const name=regName.value.trim(),email=regEmail.value.trim().toLowerCase(),password=regPassword.value;
 if(state.users.some(u=>u.email===email)){toast("Email already registered");return}
 state.users.push({name,email,password,genres:[],accountType:"User",created:new Date().toISOString()});
 state.currentUser=email; save(); updateNav(); toast("Account created"); showPage("genres");
}
function login(e){e.preventDefault();const email=loginEmail.value.trim().toLowerCase(),password=loginPassword.value;
 let u=state.users.find(x=>x.email===email&&x.password===password);
 if(!u){toast("Invalid email or password");return} state.currentUser=email;save();updateNav();showPage("home");
}
function logout(){state.currentUser=null;save();updateNav();showPage("landing")}
function updateNav(){const u=current();document.getElementById("userLabel").textContent=u?u.name:"Guest";document.getElementById("adminNav").classList.toggle("hidden",!(u&&u.accountType==="Admin"))}
function renderGenres(){const u=current();document.getElementById("genreGrid").innerHTML=GENRES.map(g=>`<button class="genre-btn ${u.genres.includes(g)?"selected":""}" onclick="toggleGenre(this,'${g}')">${g}</button>`).join("")}
function toggleGenre(btn,g){btn.classList.toggle("selected");}
function saveGenres(){const selected=[...document.querySelectorAll("#genreGrid .selected")].map(b=>b.textContent);if(selected.length<3){toast("Please select at least 3 genres");return}current().genres=selected;save();toast("Preferences saved");showPage("rateSetup")}
function renderSetupMovies(){document.getElementById("setupMovies").innerHTML=movieObjects.slice(0,15).map(movieCard).join("")}
function finishOnboarding(){const count=Object.keys(state.ratings[current().email]||{}).length;if(count<5){toast(`Please rate at least 5 movies (${count}/5)`);return}showPage("home")}
function userRatings(){return state.ratings[current().email]||{}}
function userWatchlist(){return state.watchlist[current().email]||[]}
function scoreMovie(m){const u=current();if(!u)return 0;const genre=m.genres.filter(g=>u.genres.includes(g)).length/Math.max(1,m.genres.length);const r=userRatings();let highGenres=[];
 Object.keys(r).forEach(id=>{if(Number(r[id])>=4){const x=movieObjects.find(a=>a.id===Number(id));if(x)highGenres.push(...x.genres)}})
 const pref=m.genres.filter(g=>highGenres.includes(g)).length/Math.max(1,m.genres.length);
 return genre*.5+pref*.3+(m.rating/10)*.1+(m.popularity/100)*.1;
}
function reason(m){const u=current();const matching=m.genres.filter(g=>u.genres.includes(g));if(matching.length)return `Recommended because you like ${matching.slice(0,2).join(" and ")}.`;return "Highly rated and popular with other viewers."}
function posterStyle(m){const n=m.id%6;const colors=[["#32165e","#e23b70"],["#073b55","#37a7c8"],["#56320d","#df702d"],["#142d19","#4ca96b"],["#4a102c","#bf3c7a"],["#292929","#777"]][n];return `background:linear-gradient(145deg,${colors[0]},${colors[1]})`}
function movieCard(m){const rated=userRatings()[m.id];const saved=userWatchlist().includes(m.id);return `<article class="movie-card" onclick="openDetails(${m.id})"><div class="movie-poster" style="${posterStyle(m)}"><span class="poster-title">${m.title}</span></div><div class="movie-info"><h3>${m.title}</h3><div class="movie-meta"><span>${m.year}</span><span class="stars">★ ${m.rating.toFixed(1)}</span></div><p>${m.genres.slice(0,2).join(" • ")}</p><div class="card-actions" onclick="event.stopPropagation()"><button class="small-btn" onclick="toggleWatch(${m.id})">${saved?"✓ Saved":"+ Watchlist"}</button><button class="small-btn" onclick="openDetails(${m.id})">${rated?`You: ${rated}★`:"Rate"}</button></div></div></article>`}
function renderHome(){const u=current();document.getElementById("homeTitle").textContent=`Hi ${u.name.split(" ")[0]}, here's your match`;const rec=[...movieObjects].sort((a,b)=>scoreMovie(b)-scoreMovie(a)).slice(0,10);document.getElementById("recommended").innerHTML=rec.map(movieCard).join("");document.getElementById("reasonText").textContent=rec[0]?reason(rec[0]):"Rate movies to personalize your feed.";
 const likedIds=Object.entries(userRatings()).filter(x=>Number(x[1])>=4).map(x=>Number(x[0]));const likedGenres=[...new Set(likedIds.flatMap(id=>movieObjects.find(m=>m.id===id)?.genres||[]))];document.getElementById("becauseLiked").innerHTML=movieObjects.filter(m=>likedGenres.some(g=>m.genres.includes(g))).slice(0,5).map(movieCard).join("");
 document.getElementById("topRated").innerHTML=[...movieObjects].sort((a,b)=>b.rating-a.rating).slice(0,5).map(movieCard).join("");document.getElementById("trending").innerHTML=[...movieObjects].sort((a,b)=>b.popularity-a.popularity).slice(0,5).map(movieCard).join("")}
function renderDiscover(){const q=(document.getElementById("searchInput")?.value||"").toLowerCase(),g=document.getElementById("genreFilter")?.value||"",y=document.getElementById("yearFilter")?.value||"",sort=document.getElementById("sortFilter")?.value||"rating";let list=movieObjects.filter(m=>(!q||`${m.title} ${m.genres.join(" ")} ${m.director} ${m.cast} ${m.year}`.toLowerCase().includes(q))&&(!g||m.genres.includes(g))&&(!y||String(m.year)===y));list.sort((a,b)=>sort==="rating"?b.rating-a.rating:sort==="popularity"?b.popularity-a.popularity:sort==="year"?b.year-a.year: a.title.localeCompare(b.title));document.getElementById("discoverGrid").innerHTML=list.length?list.map(movieCard).join(""):`<div class="empty">No movies found.</div>`}
function setupFilters(){genreFilter.innerHTML='<option value="">All genres</option>'+GENRES.map(g=>`<option>${g}</option>`).join("");const years=[...new Set(movieObjects.map(m=>m.year))].sort((a,b)=>b-a);yearFilter.innerHTML='<option value="">All years</option>'+years.map(y=>`<option>${y}</option>`).join("")}
function openDetails(id){const m=movieObjects.find(x=>x.id===id),saved=userWatchlist().includes(id),r=userRatings()[id]||0;document.getElementById("detailsContent").innerHTML=`<div class="details"><div class="detail-poster" style="${posterStyle(m)}"><span>${m.title}</span></div><div class="detail-content"><span class="eyebrow">${m.genres.join(" • ")}</span><h1>${m.title}</h1><div class="movie-meta"><span>${m.year} • ${m.runtime} min • Directed by ${m.director}</span><span class="stars">★ ${m.rating.toFixed(1)}</span></div><p>${m.description}</p><p><b>Cast:</b> ${m.cast}</p><div class="detail-actions"><button class="primary-btn" onclick="toggleWatch(${m.id});openDetails(${m.id})">${saved?"✓ Added to Watchlist":"+ Add to Watchlist"}</button><button class="outline-btn" onclick="showPage('discover')">Back to Discover</button></div><div class="rating-box"><b>Rate This Movie</b><div class="rating-stars">${[1,2,3,4,5].map(i=>`<button class="${i<=r?"active":""}" onclick="rateMovie(${m.id},${i});openDetails(${m.id})">★</button>`).join("")}</div><small>Your rating: ${r?`${r}/5`:"Not rated"}</small></div><div class="section-heading compact" style="margin-top:30px"><h2>Similar Movies</h2></div><div class="movie-grid" style="grid-template-columns:repeat(3,1fr)">${movieObjects.filter(x=>x.id!==id&&x.genres.some(g=>m.genres.includes(g))).slice(0,3).map(movieCard).join("")}</div></div></div>`;showPage("details")}
function rateMovie(id,value){const email=current().email;state.ratings[email] ||= {};state.ratings[email][id]=value;save();toast(`Rated ${value}/5`)}
function toggleWatch(id){const email=current().email;state.watchlist[email] ||= [];const a=state.watchlist[email],i=a.indexOf(id);if(i>=0){a.splice(i,1);toast("Removed from watchlist")}else{a.push(id);toast("Added to watchlist")}save();if(document.getElementById("home")&&!document.getElementById("home").classList.contains("hidden"))renderHome()}
function renderRatings(){const r=userRatings();const list=Object.entries(r).map(([id,val])=>movieObjects.find(m=>m.id===Number(id))).filter(Boolean);document.getElementById("ratingsGrid").innerHTML=list.length?list.map(movieCard).join(""):`<div class="empty">You have not rated any movies yet.</div>`}
function renderWatchlist(){const list=userWatchlist().map(id=>movieObjects.find(m=>m.id===id)).filter(Boolean);document.getElementById("watchlistGrid").innerHTML=list.length?list.map(movieCard).join(""):`<div class="empty">Your watchlist is empty. Discover a movie and save it.</div>`}
function renderProfile(){const u=current(),r=userRatings(),w=userWatchlist();profileAvatar.textContent=u.name.charAt(0).toUpperCase();profileName.textContent=u.name;profileEmail.textContent=u.email;profileStats.innerHTML=[["Ratings",Object.keys(r).length],["Watchlist",w.length],["Genres",u.genres.length],["Account",u.accountType]].map(x=>`<div class="stat"><b>${x[1]}</b><span>${x[0]}</span></div>`).join("");profileGenres.innerHTML=u.genres.map(g=>`<span class="genre-pill">${g}</span>`).join("")||"<span class='empty'>No genres selected.</span>"}
function renderAdmin(){const u=current();if(!u||u.accountType!=="Admin"){toast("Admin access only");showPage("home");return}const users=state.users.length,ratings=Object.values(state.ratings).reduce((n,r)=>n+Object.keys(r).length,0),watch=Object.values(state.watchlist).reduce((n,a)=>n+a.length,0);adminStats.innerHTML=[["Users",users],["Movies",movieObjects.length],["Ratings",ratings],["Watchlist Items",watch]].map(x=>`<div class="stat"><b>${x[1]}</b><span>${x[0]}</span></div>`).join("");adminMovies.innerHTML=`<table class="admin-table"><thead><tr><th>Movie</th><th>Year</th><th>Genres</th><th>Rating</th><th>Popularity</th></tr></thead><tbody>${movieObjects.map(m=>`<tr><td>${m.title}</td><td>${m.year}</td><td>${m.genres.join(", ")}</td><td>★ ${m.rating}</td><td>${m.popularity}</td></tr>`).join("")}</tbody></table>`}
function init(){setupFilters();updateNav();if(!current())showPage("landing");else showPage("home");}
init();