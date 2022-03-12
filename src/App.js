import"./App.css";
import { BrowserRouter , Switch, Route} from "react-router-dom";
import React ,{useState} from 'react'
import Movie from "./components/movie";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Footre from "./components/footre";
import Compte from "./components/compte";
import { Form } from "react-bootstrap";
  
function App() {
  const [movie,setMovie]=useState([
     
      {
        title: "Red Notice",
        year: "Annee :2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels. ",
        type: " Action/Comédie",
        image: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2021/12/RN%20Big__w770.jpg",
        id: 1,
        duree:"1h 57m"
      },
      {
        title: "The Tomorrow War",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        year: "Annee:2021",
        image: "https://cdn.encrage.media/sites/default/files/2021-07/the_tomorrow_war_affiche_du_film._la_presse.ca_.jpeg",
        type: "Action",
        id: 2,
        duree:"2h 5m"
      },
      {
        title: "Pushpa: The Rise",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Action",
        image: "https://i.ytimg.com/vi/aSBo1mFdJic/maxresdefault.jpg",
        id: 3,
        duree: "3h 15m"
       
      },
      {
        title: "Satyameva Jayate 2",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Action",
        image: "https://bollywoodmascot.com/wp-content/uploads/2020/09/Satyameva-Jayate-2-Movie-First-Look-Poster-e1600752306739.jpg",
        id: 4,
        duree:"1h 55m"
      },
      {
        title: "Sans aucun remords",
        year: "Annee:2021",
        desc: " Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Action",
        image: "https://fr.web.img6.acsta.net/pictures/21/04/07/10/10/4273666.jpg",
        id: 5,
        duree: "1h 49m"
      },
    
      {
        title: "Marakkar",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        year: " Annee:2021",
        image: "https://i.ytimg.com/vi/4DjXhP2aHQU/maxresdefault.jpg",
        type: "Action",
        id: 6,
        duree: "1h 57m"
      },
       {
        title: "Zone hostile",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Action",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcLgKEM_-gF6WBvpeGPhPG-6ajxoYK1uMMcdIgnBLCniTyQ0W",
        id: 7,
        duree: "2h 5m"
      },
      {
        title: "Kate",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        year: "Annee:2021",
        duree: "1h 56m",
        image: "https://fr.web.img5.acsta.net/pictures/21/08/16/10/26/0653161.jpg",
        type: "Action",
        id: 8
      },
      {
        title: "Kenshin: l'achèvement",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Action",
        image: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaDhLIAn77r3t2belHDCQhMkFoB-if5lC_osvtnhbjVmTD_HImRvMVbgFS-sZQUuhljDvoZUNxo1sVjre9vA_nv2W5oKDAdNaD7lbw8YAwa3_d6AFZ4VqAKqMhIl.jpg?r=dd9",
        id: 9,
        duree: "1h 45m"
       
      },
      {
        title: "Minnal Murali",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Action",
        image: "https://media.senscritique.com/media/000020025235/1200/Kenshin_L_Achevement.jpg",
        id: 10,
        duree: "2h 5m"
      },
      {
        title: "Major Grom",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Action",
        image: "https://media.senscritique.com/media/000019917270/1200/Major_Grom_Le_Docteur_de_Peste.jpg",
        id: 11,
        duree: "2h 16m"
      },
    
      {
        title: " Nezha Reborn ",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        year: " Annee:2021",
        duree: "1h 56m",
        image: "https://ayther.fr/wp-content/uploads/2021/04/new-gods-nezha-reborn-2.jpg",
        type: "Action",
        id: 12
      },
      {
        title: "Chandigarh Kare Aashiqui",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux ",
        type: "romance",
        image: "https://kiddaan.com/wp-content/uploads/2020/12/maxresdefault-1.jpg",
        id: 13,
        duree: "2h 16m"
      },
      {
        title: "The Power of the Dog",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "romance",
        image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/Benedict-Cumberbatch-The-Power-Of-The-Dog.jpg",
        id: 14,
        duree: "2h 16m"
      },
      {
        title: "Most Eligible Bachelor",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Romance/Drame",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNEUyK-CVuv5F8yQg24LiWf85EoK9UP2z6x0QWtnB76o9-iEpK",
        id: 15,
        duree: "2h 16m"
      },
      {
        title: "Je te veux,moi non plus",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "romance",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7ZDpzawOYcXsUsnFaBow7TKQ1bGnlwyTnJ2P9Ejqj3gOignEv",
        id: 16,
        duree: "1h 56m"
      },
      {
        title: "Maara",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "romance",
        image: "https://imgsrc.cineserie.com/2020/10/1712779.jpg?ver=1",
        id: 17,
        duree: "2h 5m"
      },
      {
        title: "Honsla Rakh",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Romance/Comédie",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sSJPYc_nJ0SLC2uLCMcQADDj-fv9-8IEsVp997kX-teEaCaS",
        id: 18,
        duree: "1h 55m"
      },
      {
        title: "The Map of Tiny Perfect Things",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux .",
        type: " Romance",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3wfnrg_Xerx9EYCmm2Vsj97VUUeG4QEkGk8Oj1bF8zU17ryE3",
        id: 19,
        duree: "1h 46m"
      },
      {
        title: "Cendrillon",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Musical/Romance ",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT21VDANK50iwZbeM3PrqL5-ko9tt1gJMcJ6IH3elsS2vJHlj6U",
        id: 20,
        duree: "1h 46m"
      },
      {
        title: "L'Amour complexe",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Comédie romantique",
        image: "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABd0a-NTbY-ojq5OO35OtKwb9LpCdd-eO3obSzeL8ck_C2lXmmwTUR-ayCXq9hn7fGjVprwZgMLkNAFGM2gT9fZbGX8HS.jpg?r=009",
        id: 21,
        duree: "1h 56m"
      },
      {
        title: "Il est trop bien",
        year: "Annee:2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Romance",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXoyH4ZKfB8Zej9eHqrOQROUAW1Y0m-ug8r1lT0xfqQu52hAm",
        id: 22,
        duree: "1h 36m"
      },
      {
        title: "Friendzone",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Comédie romantique",
        image: "https://tel.img.pmdstatic.net/pad/https.3A.2F.2Fprd2-tel-epg-img.2Es3-eu-west-1.2Eamazonaws.2Ecom.2Fprogram.2Fdf28cb32046cc9b5.2Ejpg/900x600/quality/80/friendzone.jpg",
        id: 23,
        duree: "1h 28m"
      },
      {
        title: "Fou de toi",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Romance",
        image: "https://fr.web.img2.acsta.net/pictures/21/02/08/11/23/0784106.jpg",
        id: 24,
        duree: "1h 42m"
      },
      {
        title: "Squared Love",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Romance",
        image: "https://i.ytimg.com/vi/qmx7Hwpv2Ac/maxresdefault.jpg",
        id: 25,
        duree: "2h 13m"
      },
      {
        title: "Just Say Yes",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Romance",
        image: "https://fr.web.img2.acsta.net/pictures/21/03/15/15/31/4507767.jpg",
        id: 26,
        duree: "1h 37m"
      },
      {
        title: "Paagal",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: " Comédie romantique",
        image: "https://i.ytimg.com/vi/muKsWufiTVs/maxresdefault.jpg",
        id: 27,
        duree: "2h 18m"
      },
      {
        title: "Confessions d'une fille invisible",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux ",
        type: "Romance",
        image: "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWsX_3Vp5n7QavMlAFBvNo0Rm_RU6NbdWuK6Z46g4RC7FhBCbiRcExiE2Fy112WedYOeTLHLfCbcIp6UwuESOdUGQSfn.jpg?r=c75",
        id: 28,
        duree: "1h 31m"
      },
      {
        title: "A Castle for Christmas",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Romance",
        image: "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfQOJmyhclQbxHWrbTlvVhqlJQ_a-Kmawwdnf2LkhkpYlmHKcBYdeUWa0T8OACmTO0NoNj5mQSPQRlXwgKAio8S68TeB.jpg?r=f8b",
        id: 29,
        duree: "1h 38m"
      },
      {
        title: "État d'esprit",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Romance",
        image: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_500,h_741/https://www.abusdecine.com/wp-content/uploads/etat-d-esprit-bliss-affiche.jpg",
        id: 30,
        duree: "1h 43m"
      },
      {
        title: "Hypnotique",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Horreur ",
        image: "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/401/5ifj6wuml1mqyplgct0gsdaa7wm-121.jpg",
        id: 31,
        duree: "2h 13m"
      },
      {
        title: "The Priest",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Horreur ",
        image: "https://imgsrc.cineserie.com/2021/02/1736072.jpg?ver=1",
        id: 32,
        duree: "2h 27m"
      },
      {
        title: "Personne ne sort d'ici vivant",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux .",
        type: "Horreur ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7jTEvnSQWLRZdGQPBrAfrGjYIf7xElgZHUywlF0N7gxEk52S",
        id: 33,
        duree: "1h 27m"
      },
      {
        title: "Aftermath",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Horreur ",
        image: "https://image.tmdb.org/t/p/w780//6uWvwL3IvpTDwPSenG9I0z1D9h9.jpg",
        id: 34,
        duree: "1h 54m"
      },
      {
        title: "Roohi",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Horreur ",
        image: "https://static.toiimg.com/photo/81056063.cms",
        id: 35,
        duree: "1h 43m"
      },
      {
        title: "Boomika",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Horreur ",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQFmYqJ1_b3BMkpXKRBRyh4nRd6QykKZFFDNsCAbcppFV7d3yLW",
        id: 36,
        duree: "2h 4m"
      },
      {
        title: "Raya et le Dernier Dragon",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux .",
        type: "Enfants ",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0V-6agwtpIAM6X7vRTg4trXLxwOX7_wUuSyAuvZ7jYnwSiOnz",
        id: 37,
        duree: "1h 47m"
      },
      {
        title: "Ron débloque",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Enfants ",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYndbfdTCCvls8tKMjv1iy_RkSZU6MgxYQSgz7POgwcUcqxYJ8",
        id: 38,
        duree: "2h 4m"
      },
      {
        title: "Steve Bête de combat",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Enfants ",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRjBsk1aSYlQuLFtXpVPR_WSjcLAb85eV35x8u5OB-UFwkT62c0",
        id: 39,
        duree: "1h 54m"
      },
      {
        title: "Luca",
        year: "2021",
        desc: "Les alertes rouges d'Interpol sont des avis de recherche internationaux pour traquer de grands criminels.",
        type: "Horreur ",
        image: "https://fr.web.img5.acsta.net/c_310_420/pictures/21/05/21/12/10/4295013.jpg",
        id: 40,
        duree: "1h 44m"
      }





])
 // state
 const [search,setSearch]=useState("")
 // Function 
 const HandleChange=(e)=>{
   setSearch(e.target.value)
   console.log("search",search)
 }
  return <div>
    <BrowserRouter className="App">
      <div>
       <Navbar search={search} HandleChange={HandleChange}  />

      <Switch>
      <Route  path="/home" exact> <Home/></Route>
      <Route  path="/contact" exact> <Contact/></Route>
      <Route path="/movie" exact> <Movie  movie={movie} search={search}  /></Route>
      <Route  path="/compte" exact> <Compte/></Route>
      
        </Switch>
        < Footre/>
    </div>
        </BrowserRouter>
        </div>
        

}

export default App;
