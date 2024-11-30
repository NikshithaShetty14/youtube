import React from "react";
import Card from "./Card";
import './Main.css';


export default function Main(){
  const videoData = [
    {
    "video" :"https://www.youtube.com/embed/wstwjQ1yqWQ",
    "img" :'./assets/Akshaysaniicon.jpg',
    "title" :"Learn Html",
    "channel" :"freecodecamp.org",
    "views" :"2.9 Views",
    "years" :"9 years ago",
    "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
  },
  {
    "video" : "https://www.youtube.com/embed/VVFr7onJb9M",
    "img" : './assets/Mistsicon.jpg',
    "title" : "How to Deal With Your Negative Thoughts",
    "channel" : "Buddhisim.org",
    "views" : "2.9 Views",
    "years" : "9 years ago",
    "icons" : " <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
  },
  {
    "video" :"https://www.youtube.com/embed/wstwjQ1yqWQ",
    "img" :'./assets/Akshaysaniicon.jpg',
    "title" :"Learn Html",  
     "channel" :"freecodecamp.org",
    "views" :"2.9 Views",
    "years" :"9 years ago",
    "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
  },
  {
    "video" :"https://www.youtube.com/embed/VVFr7onJb9M",
    "img" :'./assets/Mistsicon.jpg',
     "title" :"How to Deal With Your Negative Thoughts",
    "channel" :"Buddhisim.org",
    "views" :"2.9 Views",
    "years" :"9 years ago",
    "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
  },
  {
    "video" :"https://www.youtube.com/embed/nux8f-QakBY",
    "img" :'./assets/Mistsicon.jpg',
    "title" :"Listean to this before you start your day",
    "channel" :"Buddhisim.org",
   "views" :"2.9 Views",
    "years" :"9 years ago",
    "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>" ,
  },
  {
    "video" :"https://www.youtube.com/embed/edIctUyd4RQ",
    "img" :'./assets/Mistsicon.jpg',
    "title" :"How to Deal With Your Negative Thoughts",
    "channel" :"Buddhisim.org",
    "views" :"2.9 Views",
    "years" :"9 years ago",
    "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
  },
  {
    "video" :"https://www.youtube.com/embed/D97zRAqseyY",
    "img" :'./assets/Gopal.jpg',
    "title" :"How to Deal With Your Negative Thoughts",
    "channel" :"Buddhisim.org",
    "views" :"2.9 Views",
    "years" :"9 years ago",
    "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>" ,
  },
  {
    "video" :"https://www.youtube.com/embed/DcjNkHtDj8A",
    "img" :'./assets/chaiaurcodeicon.jpg',
    "title" :"Dom introduction in javascript",
    "channel" :"Buddhisim.org",
    "views" :"2.9 Views",
    "years" :"9 years ago",
    "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
    },
    {
      "video" :"https://www.youtube.com/embed/jlAequasldA",
      "img" :'./assets/Mistsicon.jpg',
      "title" :"Namo Namo",
      "channel" :"Buddhisim.org",
      "views" :"2.9 Views",
      "years" :"9 years ago",
      "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
      },
      {
        "video" :"https://www.youtube.com/embed/pRbxlpvXw2s",
        "img" :'./assets/Mistsicon.jpg',
        "title" :"Playlist of Songs",
        "channel" :"Buddhisim.org",
        "views" :"2.9 Views",
        "years" :"9 years ago",
        "icons " :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
        },
        {
          "video" :"https://www.youtube.com/embed/IJlSuHec0AM",
          "img" :'./assets/Mistsicon.jpg',
          "title" :"Playlist of Songs",
          "channel" :"Buddhisim.org",
          "views" :"2.9 Views",
          "years" :"9 years ago",
          "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
        },
        { 
          "video" :"https://www.youtube.com/embed/IJlSuHec0AM",
          "img" :'./assets/Mistsicon.jpg',
          "title" :"Playlist of Songs",
          "channel" :"Buddhisim.org",
          "views" :"2.9 Views",
          "years" :"9 years ago",
          "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",

        },
        {
          "video" :"https://www.youtube.com/embed/k4TnsP2eJXY",
          "img" :'./assets/Mistsicon.jpg',
          "title" :"Playlist of Songs",
          "channel" :"Buddhisim.org",
          "views" :"2.9 Views",
          "years" :"9 years ago",
          "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",

        },
        {
          "video" :"https://www.youtube.com/embed/6MgsHSAcI9k",
          "img" :'./assets/Mistsicon.jpg',
          "title" :"Playlist of Songs",
          "channel" :"Buddhisim.org",
          "views" :"2.9 Views",
          "years" :"9 years ago",
          "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
        }, 

        { 
          "video" :"https://www.youtube.com/embed/qUn6e_Ua4yE",
          "img" :'./assets/Mistsicon.jpg',
          "title" :"Playlist of Songs",
          "channel" :"Buddhisim.org",
          "views" :"2.9 Views",
          "years" :"9 years ago",
          "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
        },
         
          { 
          "video" :"https://www.youtube.com/embed/yePZRlU5qZc",
          "img" :'./assets/Mistsicon.jpg',
          "title" :"Playlist of Songs",
          "channel" :"Buddhisim.org",
          "views" :"2.9 Views",
          "years" :"9 years ago",
          "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
        },
          
          {   
          "video" :"https://www.youtube.com/embed/Yiaatr-Noh0",
          "img" :'./assets/Mistsicon.jpg',
          "title" :"Playlist of Songs",
          "channel" :"Buddhisim.org",
          "views" :"2.9 Views",
          "years" :"9 years ago",
          "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
        },
          
          {    
          "video" :"https://www.youtube.com/embed/IQv-slKV7fo",
          "img" :'./assets/Mistsicon.jpg',
          "title" :"Playlist of Songs",
          "channel" :"Buddhisim.org",
          "views" :"2.9 Views",
          "years" :"9 years ago",
          "icons" :" <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>",
          },
        
]
    return(
        <div className="main">
            <ol className="links">
                <li>All</li>
                <li>Music</li>
                <li>Playlist</li>
                <li>Movie</li>
                <li>Live</li>
                <li>Mixes</li>
                <li>Rhythms</li>
                <li>Albums</li>
                <li>Programming</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>React</li>   
                <li>Drama</li>
                <li>Stories</li>
                <li>Plants</li>
                </ol>
                <div class="card-container">

                  {
                    videoData.map((item , index)=>{
                      return(
                        <Card key={index}
                        video={item.video}
                        img={item.img}
                        title={item.title}
                        channel={item.channel}
                        views={item.views}
                        years={item.years}
                        icon={item.icons}
                         />
                      )
                    })
                  }


          
            </div>         
        </div>
    )
}


