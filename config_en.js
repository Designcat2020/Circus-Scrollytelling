let divChapter1 = '<p>The map shows the data of ships traveling on the Euro-asian route from 1750 to 1850. During this period, the routes mainly passed through the Cape of Good Hope in Africa, Madagascar or Mauritius, and entered the Indian Ocean.<br><small>(the data comes from the EU-funded <a href ="https://webs.ucm.es/info/cliwoc/documentation/Cliwoc_final_report.pdf">CLIWOC</a> project.)</small></p>';

let divChapter2 = '<img src="image/004.jpg">' +
  '<p class="imageCredit">Note: The photo is of the 1876 steamship <a href="http://www.messageries-maritimes.org/djemnah.htm">Djemnah</a></p>' +
  '<p>With the advent of steamships  Eurasian trade became more prosperity. After the Suez Canal built , the voyage from London to Mumbai was shortened to only 12.5 days.</p>';

let divChapter3 = '<a href="html/yearcity.htm"><img src="image/yearcity.png"><a>' +
  '<p class="imageCredit">Chart: Statistics of the top 5 cities and Mauritius from 1861-1911.</p>' +
  '<p>From the historic cartographic data of traveling circus, it can be seen that before the Suez Canal built,  in 1861 <span style="color:red;">Mauritius</span> was still in the footprint of the touring circus and another city in the same year is <span style="color:red;">Singapore</span>.</p>';

let divChapter4 =
'<p> After the Suez Canal built, due to deviating the new ship route <span style="color:red;">Mauritius</span> was abandoned by the entertainment market as soon as possible. In contrast, <span style="color:red;">Manila</span> quickly became an important market for touring circuses, after the Spanish-American War ended in 1890. <br><small>(map note: The yellow column indicates the total number of reports on the location about traveling circuses between 1861 and 1911. The orange connecting line indicates the main shipping routes and major port cities in the Asia-Pacific region during this period. )</small></p>';

let divChapter5 = '<a href="html/Circus.htm"><img src="image/circus.png"><a>'
  + '<p>The chart shows the top 15 circuses reported in the period 1861- 1891. It can be seen that the Harmston’s circus and the Chiarini’s circus accounted for more than 40% of the shares. The map shows the distribution network of the cities where <span style="color:red;">Harmston’s circus</span> had performed and it left traces mainly in the southern Asian region, centering on Singapore.</p>';

let divChapter6 = '<p>Compared with the <span style="color:red;">Harmston’s</span> urban network layout, the <span style="color:red;"> Chiarini’s</span> is centered on Shanghai, Hong Kong and Manila, and is obviously offset to the north.</p>';

let divChapter7 = '<p>From the records in <span style="color:red;">Shanghai</span>, it can be seen that in 1870 Soullier’s circus performed at the open space at the northeast corner of Canton Road and Kiangse Road. In 1897, the performance venue of the Wilison’s circus was moved to Hongkew Park, opposite to the public school on Chapoo Road. After 1900, the performance venues were all concentrated in the racetrack.<br><small>(Note: The map is from <a href="http://nla.gov.au/nla.obj-233796444">©Trove</a>)</small></p>';


var config = {
  style: "mapbox://styles/yansun2020/cl7lwha92000a14la1i16jxwt",
  accessToken:
    "pk.eyJ1IjoieWFuc3VuMjAyMCIsImEiOiJjazg4dmFsbGcwMGcwM2xxc2Zla21zZG91In0.Kkqjs0MWxmSEeqe7yO-k5g",
  showMarkers: false,
  theme: "light",
  alignment: "left",
  topTitle: "Historic Cartographic Narratives",
  title: "Panorama of Asia Touring Circus Cultural Industry Network (1861-1911)",
  // subtitle: "Panorama of Asia Touring Circus Cultural Industry Network (1861-1911)",
  byline: "By Meimei Xu and Yan Sun",
  description: "In the early twentieth century, with the technological innovation and colonial expansion, touring circus performances relying on modern shipping and urban development gradually develop into a network of cultural entertainment industry covering the entire region. By collecting and analyzing the information about traveling circuses and their performances in major newspapers in Singapore, Hong Kong, Shanghai and other Asian cities from 1861 to 1911, combined with the historical data of shipping and urban development during this period, we try to present a panoramic view about the evolution of the traveling circus network from the perspective of historic cartography. In this section of history, 150 years ago it is recorded that more than 60 touring circuses have covered over 40 cities in Asia and Oceania, among which there are Italian Giuseppe Chiarini and French Louis Soullier, the founders of the European traveling circus and there is also the Harmston’s circus, which is comparable to the famous Barnum circus. The entertaining industry of traveling circus in Asia reached its peak in the early 20th century and then began to decline due to the development of modern cities and the emergence of other forms of entertainment. These changes had already begun to appear before the Great War.",
  pictureNote: "(Note: the ship in the picture is "
    + "<a href='https://www.poheritage.com/our-archive/ships-search/advanced-ship-search-results/DispaySelection?ships%5b0%5d=26202&'>Carnatic(1863)</a>"
    + ", the map is from "
    + "<a href='http://www.messageries-maritimes.org/extreme-orient.htm'>Philippe Ramona</a>,"
    + "and the base map is from "
    + "<a href='http://www.freepik.com'>Freepik</a>)",
  image: "image/001.jpg",
  midContain:
  '<h3>New Technology • New Route</h3>' 
  +'<a href="image/003.jpg"><img src="image/003.jpg"><a>' 
  +'<p class="imageCredit">Note: The photo is of ships on the Suez Canal in 1870. &nbsp; <a href="http://www.messageries-maritimes.org/extreme-orient.htm"> P.Ramona</a></p>' 
  +'<p><span style="font-size:200%;">S</span>ince the Age of Discovery, there have been constant business exchanges between Europe and Asia. During this period, the routes mainly mainly went around the Cape of Good Hope in Africa, Madagascar, Mauritius Island and entered the Indian Ocean. Since sailing ships need the help of wind power, the route is heavily affected by the monsoon and it often takes up to a year to go back and forth between Europe and Asia. With the advent of steamships, exchanges between Europe and Asia became more frequent. In fact, before the Suez Canal was dug, thee was already a new route: goods or passengers landed in Alexandria in the Mediterranean Sea, transferred to other means of transportation to the Red Sea, and then boarded a ship to for continue the sailing. Compared with the Cape of Good Hope route in the 18th century, the journey from London to Mumbai can be shortened to about 30 days. </p>'
  +'<p>However, around the Suez Canal built in 1870, the technology of steamships is immature. The picture shows that at that time steamships were still equipped with sails and the voyage was mostly affected by the bad weather in the Indian Ocean. In the historical cartographic records of traveling circus in this period, there are only a few port cities such as Singapore, Hong Kong and Shanghai where 1 or 2 circuses visit in a year. Frequent reports of shipwrecks, damaged crew and cargo, led some famous circuses (such as Soulier’s) to travel overland to Asia via Siberia. </p>'
  + '<a href="html/yeardata.htm"><img src="image/yeardata.png"><a>'
  + '<p class="imageCredit">The chart shows the number of cities with circus performances and the number of reports each year from 1861 to 1911. Click to view specific information.</p>'
  +'<p>After the Second Industrial Revolution, the technology of steamship was further developed, and the Eurasian sea route became safe, fast and reliable, and many shipping companies expanded their Asian routes one after another. The development of the shipping network has driven the global flow of capital and culture. From the historic cartographic data of the touring circus industry, it can be seen that the number of performing cities and the frequency of performances in the 20th century has risen sharply. During the wave of globalization from the second half of the 19th century to the beginning of the 20th century, new technologies brought new routes, and new routes opened up new industries. </p>'
  
  +'<h3>New Circus • New Industry</h3>'
  + '<a href="image/005.jpg"><img src="image/005.jpg"><a>'
  + '<p class="imageCredit"> Note: The photo is the interior view of a traveling circus tent in the late 19th century &nbsp;<a href="https://www.vam.ac.uk/articles/the-story-of-circus#slideshow=58613815&slide=0"> © Victoria and Albert Museum</a></p>'
  + '<p><span style="font-size:200%;">T</span>he Modern circus using equestrian performance as the main attraction appeared in 1768. Most performance venues are circular, which not only provides the best viewing effect for equestrian performances, but also facilitates the addition of tent covers and lighting fixtures to form a temporary place that is not afraid of wind and rain, day and night. This iconic big tent became an important feature of the circus. With the Industrial Revolution, the transportation between regions became more convenient, and the form of traveling circus soon appeared. Everywhere the traveling circus goes, temporary performance tents are set up in urban open spaces. After the grand performance season is over, they can be dismantled and continue to perform in the next city. </p>'
  + '<p>The form of traveling circus was soon brought to Asia by the founders, Italian Giuseppe Chiarini and the French Louis Soullier. Soullier’s circus first visited Shanghai and then Hong Kong in 1870, but the show was not very successful because it chose to venture overland through Siberia, resulting in heavy losses of animals and supplies. Chiarini’s circus did not begin its Asian tour until 1873, after the opening of Suez Cana route. It has been active in the Asia market till 1900,  and has toured in 19 cities. </p>'
  + '<p>The legendary touring circus in Asia at the beginning of the 20th century was the Harmston’s Circus, known as the “Barnum of the East”. At that time, the P.T. Barnum & Bailey’s touring circus was very popular in Europe and America. The Harmston’s Circus was established in 1891 by the former Chiarini circus rider George Harmston. Thanks to the legendary manager Robert Love, there were nearly 600 reports of performance in Asia in just two decades to 1911. The Harmston’s obviously dominated the Asian market. </p>'
  + '<p>The Asian touring circus market, dominated by Chiarini circus and Harmston circus, has gradually developed into an entertainment industry network connecting many cities in the Asia-Pacific region. After 1890, the market competition became increasingly fierce. In the same city, two large-scale touring circuses even performed at the same time. Under the high-intensity competition, the urban industrial network proved more market protection. For example, in June 1896, the Harmston Circus and Willison Circus performed in Singapore at the same time and the Willison Circus, which was not dominant, quickly moved to Penang to make up for the box office loss. Therefore, port cities with well-developed maritime routes, such as Singapore, Hong Kong, Manila, and Shanghai soon became the center of the cultural and entertainment industry. </p>'
 
  + '<h3>New City • New Entertainment</h3>'
  + '<a href="image/006.jpg"><img src="image/006.jpg"><a>'
  + '<p class="imageCredit"> Note: The photo is the performance tent of the Harmston Circus in Bandung in 1913 &nbsp; <a href="https://https://www.nla.gov.au/"> ©pinterest<a> </p>'
  + '<p><span style="font-size:200%;">S</span>ingapore, Hong Kong and Shanghai are all modern cities that emerged with the Industrial revolution and colonial expansion in the second half of the 19th century. Singapore became a British colony in 1819, and Hong Kong and Shanghai were opened after the Opium War in 1840. By the beginning of the 20th century, the three cities had quickly became important trading port cities in Asia and the world. The influx of a large number of people, and the continuous expansion of urban have not only brought a huge performance market for the touring circus industry, but also brought various new troubles. First, due to the special requirements of the venue for traveling circus performances, the iconic big tent needs to be set up in the open space of the city, and it cannot be far away from populated areas. As the population increases, the vacant spaces in the city are gradually filled by residential areas, which makes it much more difficult for traveling circuses to find a suitable space for performances. Secondly, the increase of the frequency of touring circus performances and the fact that the  performance venues are too close to residential areas have led to a sudden increase in residents’ complaints and accidents. Negative reports frequently appear in the newspapers, such as bad weather leading to waterlogging of venues, garbage after the show, noise disturbance, accidental loss of animal or injuries to people, etc., and the touring circus performance is likely to turn into a public disaster.</p>'
  + '<iframe class ="w-half" allowfullscreen="" src="./html/Singapore/index.html" loading="eager"> </iframe>'
  + '<p class="imageCredit">Note: On the left is the map of Singapore in &nbsp; <a href="http://nla.gov.au/nla.obj-233406505"> 1924</a>，and on the right is the map of Singapore in &nbsp;<a href="http://nla.gov.au/nla.obj-570272842"> 1935</a>.&nbsp;&nbsp;  <a href="https://assets.pinterest.com/ext/embed.html?id=835558537088494772"> ©Trove <a> </p>' 
  + '<p>The conflicts about location selection is more obvious in Singapore. In 1881, the Chiarini Circus  performed in Singapore at Fort Canning at the corner of Tank Road and River Valley Road, and later, it moved to the spacious lawn in front of the Hotel de l’Europe. However, as the city’s population increased, residents’ complaints about the garbage in the circus venue and criticism of the ill management of city council gradually intensified (See TST, 19 Oct. 1895, p.4. “Long shore and nautical chat”). In turn, the urban planning of modern Singapore was born, so in 1932, the Grand Hotel de l’Europe was demolished and converted into the Supreme Court, and the lawn was no longer allowed to be used as performance venue. In the 20th century, circus owners were forced to spend a lot of time for finding suitable performance venues. In August 1902, <em>Singapore Free Press and Mercantile Advertiser </em>published a special issue, describing the problems faced by circus owners, “a show that brings people joy, is always in the muddiest and most inconvenient place in the city”. <em>The Strait Times</em> even reported in March 1909 that the source of conflict as regards performance venues is due to the inaction and management chaos of many city administrative “it is depriving him of a livelihood because some official is too busy or too lazy to inspect the premises”. </p>'
  + '<a href="image/008.jpg"><img src="image/008.jpg"><a>'
  +'<p class="imageCredit"> Note: The photo is &nbsp;<a href="https://www.nas.gov.sg/archivesonline/photographs/record-details/d388053d-1161-11e3-83d5-0050568939ad">Grand Hotel de l\'Europe<a> </p>'
  +'<p>Comparing Hong Kong and Shanghai, another way of thinking is adopted on this issue. In the 20th century, Shanghai’s circus performance venues were mostly located in the city’s racetracks. Hong Kong presented a similar case. The cricket ground near the city hall is used as the performance venue of the touring circus, which avoids the problem of disturbing the residents and can also make comprehensive use of the venue outside the competition season.</p>'
  +'<p>Based on the above problems, with the development of modern cities and the entertainment industry, the touring circus industry began to lose its competitive advantage. In March 1900, <em>Singapore Free Press and Mercantile Advertiser</em> published an article discussing whether the city should learn from the experience of Bangkok and Saigon to build more exquisite temporary performance venues for traveling circuses or to trim the forests that interfere with tent construction. Ten years later, according to the reports in the same column, it can be seen that in these years the city’s public funds have flowed to concert halls, theaters, roads and parks, rather than the circus industry. Later, the emergence of the powerful competitor, cinema, directly affected the box office of touring circuses. For instance, the Harmston Circus’ performance in Singapore in November 1909 was directly impacted by film entertainment (The Strait Times, Nov. 11, p.7). Due to various internal reasons such as hard to find venues, troublesome transportation, high risk of animal performance and the emergence of new entertainment forms such as movies began to fade away at the beginning of the 20th century. </p>'

  + '<iframe class ="w-half" allowfullscreen="" src="https://designcat2020.github.io/Circus-footprint/" loading="eager"> </iframe>'  
  + '<p><span style="font-size:200%;">F</span>ootprint data visualization above shows the footprints of traveling circus performances from 1861 to 1911. Drag the time line to display the cities with touring circuses each year, and click to display the names of those circuses in that year. The more reports of traveling circuses in that city, the yellower and larger will be the dot in that city. It can be seen from the changing trend that after 1880, the number of cities and the frequency of circus performances increased significantly. After 1890, more than five cities had circus-relevant reports almost every year. In 1900 Singapore had 6 different touring circuses visits. Initially, there were only 1 or 2 cities per year, but in 1902, there had been 18 cities. After 1905, the number of cities declined.<br> <small>(Note: The newspapers are selected from major local English-language newspapers in Singapore, Hong Kong, and Shanghai, and the reports contain performance information, comments, gossips, etc, for specific circuses)</small></p>',
  
  footer: "The Study is based on the database of newspaper reports of touring circuses in Asia from 1861-1911, collected and organized by <a href='https://nanjing.academia.edu/MXu'>Meimei Xu</a> and <a href='http://www.sunyanarch.com'>Yan Sun</a>. &nbsp;&nbsp;&nbsp;© 2022 Yan Sun. All rights reserved.<br>Source: Database of the North-China Daily News, the Strait Times, Hong Kong Daily Press etc.    Colombia University WEAI, National Library of Australia, P&O Steam Navigation Company, L'Encyclopédie des Messageries Maritimes. ",


  chapters: [
    
    {
      id: "Chapter01",
      hidden: true,
      location: {
        center: [79, 12],
        zoom: 2,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [

        {
          layer: "old-ship-route",
          opacity: 0.5
        }

      ],
      onChapterExit: []
    },
    
    {
      id: "ship-route-text-1",
      alignment: "left",
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter1,
      location: {},
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "ship-route-text-2",
      alignment: "left",
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [70, 12],
        zoom: 3,
        pitch: 60.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "route",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "route",
          opacity: 0
        }]
    },

    {
      id: 'old-city-1',
      alignment: "left",
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [58, -10],
        zoom: 3.5,
        pitch: 80.0,
        bearing: 45.0
      },
      onChapterEnter: [
        {
          layer: "Mauritius",
          opacity: 0.8
        }
      ],
      onChapterExit: [
        {
          layer: "old-ship-route",
          opacity: 0
        },
        {
          layer: "Mauritius",
          opacity: 0
        }
      ]
    },
    {
      id: 'new-city',
      alignment: "left",
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [105, 18],
        zoom: 2,
        pitch: 60.0,
        bearing: 0.0
      },
      onChapterEnter: [{
        layer: "route",
        opacity: 1
      },
      {
        layer: "height",
        opacity: 0.8
      },
      ],
      onChapterExit: [
        {
          layer: "route",
          opacity: 0
        },
        {
          layer: "height",
          opacity: 0
        },
        {
          layer: "CityName",
          opacity: 0
        }
      ]
    },
    {
      id: 'Chapter02',
      hidden:true,
      location: {
        center: [105, 14],
        zoom: 2.5,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "path",
          opacity: 0.2
        }
      ],
      onChapterExit: [
        {
          layer: "path",
          opacity: 0
        }
      ]
    },
    {
      id: 'touring-circus',
      alignment: "left",
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [105, 18],
        zoom: 2.5,
        pitch: 0.0,
        bearing: 15.0
      },
      onChapterEnter: [
        {
          layer: "Harmston1",
          opacity: 0.8
        },
        {
          layer: "Harmston2",
          opacity: 0.8
        }
      ],
      onChapterExit: [
        {
          layer: "Harmston1",
          opacity: 0
        },
        {
          layer: "Harmston2",
          opacity: 0
        }
      ]
    },
    {
      id: 'Harmston-circus',
      alignment: "left",
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [105, 18],
        zoom: 2.5,
        pitch: 0.0,
        bearing: 15.0
      },
      onChapterEnter: [
        {
          layer: "Chiarini1",
          opacity: 0.8
        },
        {
          layer: "Chiarini2",
          opacity: 0.8
        }

      ],
      onChapterExit: [

        {
          layer: "Chiarini1",
          opacity: 0
        },
        {
          layer: "Chiarini2",
          opacity: 0
        }

      ]
    },
    {
      id: 'newEraSH',
      alignment: "left",
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        center: [121.48, 31.24],
        zoom: 14.5,
        pitch: 30.0,
        bearing: 0.0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'new-circus',
      hidden: true,
      location: {
        center: [105, 15],
        zoom: 3.5,
        pitch: 30.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "route",
          opacity: 0.8
        },
        {
          layer: "cityCC",
          opacity: 0.8
        },
        {
          layer: "path",
          opacity: 0.1
        }
      ],
      onChapterExit: [
        {
          layer: "route",
          opacity: 0
        },
        {
          layer: "cityCC",
          opacity: 0
        },
        {
          layer: "path",
          opacity: 0
        }
      ]
    },

  ]
};


