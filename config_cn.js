let divChapter1 = '<p>地图显示的是1750年-1850年百年间行驶于欧亚航线的船只数据,这一时期的航线主要经过非洲好望角，马达加斯加岛或毛里求斯岛，进入印度洋。<small>(注：数据资料来自于欧盟资助的<a href ="https://webs.ucm.es/info/cliwoc/documentation/Cliwoc_final_report.pdf">CLIWOC项目</a>)</small></p>';

let divChapter2 = '<img src="image/004.jpg">' +
  '<p class="imageCredit">注：照片为1876年蒸汽船<a href="http://www.messageries-maritimes.org/djemnah.htm">Djemnah</a></p>' +
  '<p>随着蒸汽船的出现，欧亚交流更加频繁，苏伊士运河开通后，从伦敦到孟买的航程缩短到只需要12.5天。</p>';

let divChapter3 = '<a href="html/yearcity.htm"><img src="image/yearcity.png"><a>' +
  '<p class="imageCredit">图表：1861-1911年间排名前五的城市和毛里求斯的统计数据</p>' +
  '<p>结合巡回马戏的历史地理数据可以看到，在苏伊士运河开通前，1861年<span style="color:red;">毛里求斯</span>还在巡回马戏团的演出足迹中，同年另一个城市是<span style="color:red;">新加坡</span>。</p>';

let divChapter4 =
 '<p> 苏伊士运河航线开通后，由于偏离航线<span style="color:red;">毛里求斯</span>早早就被演出市场抛弃。与之相反的是<span style="color:red;">马尼拉</span>，在1890年美西战争的结束之后，迅速成为了巡回马戏演出的重要市场。<br><small>地图显示：黄色柱状高度表示1861-1911年间城市巡回马戏所在城市的报道总数量，橙色连线表示该时期亚太区域的主要航线和港口城市。）</small></p>';

let divChapter5 = '<a href="html/Circus.htm"><img src="image/circus.png"><a>'
  + '<p>图表显示1861-1891年间报道数量排名前十五的马戏团，可以看出Harmston马戏团和Chiarini马戏团占据了超过40%的份额。地图显示<span style="color:red;">Harmston马戏团</span>演出城市的分布网络，其马戏娱乐产业主要分布在以新加坡为中心的亚洲南部区域。</p>';

let divChapter6 = '<p>对比<span style="color:red;">Harmston马戏团</span>的城市网路布局，<span style="color:red;">Chiarini马戏团</span>的城市网络，则是以上海，香港和马尼拉为中心，明显向北偏移。</p>';

let divChapter7 = '<p>从<span style="color:red;">上海</span>的资料记录可以看到，1870年Soullier马戏团的演出地点在广州路（Canton Road）和江西路（Kiangse Road）的东北角空地。到了1897年Willison马戏团的演出场地就迁到了乍浦路（Chapoo Road）公共学校对面的虹口公园（Hongkew Park），1900之后马戏的演出场所就都集中到了赛马场。<br><small>（注：地图出自 <a href="http://nla.gov.au/nla.obj-233796444">©Trove</a>）</small></p>';


var config = {
  style: "mapbox://styles/yansun2020/cl7lwha92000a14la1i16jxwt",
  accessToken:
    "pk.eyJ1IjoieWFuc3VuMjAyMCIsImEiOiJjazg4dmFsbGcwMGcwM2xxc2Zla21zZG91In0.Kkqjs0MWxmSEeqe7yO-k5g",
  showMarkers: false,
  theme: "light",
  alignment: "left",
  topTitle: "历史地理空间叙事",
  title: "亚洲巡回马戏文化产业网络全景(1861-1911)",
  // subtitle: "Panorama of Asia Touring Circus Cultural Industry Network (1861-1911)",
  byline: "By Meimei Xu and Yan Sun",
  description: "19世纪末20世纪初，随着技术革命和殖民扩张，依托于现代航运和城市发展的巡回马戏表演，逐渐发展成为覆盖整个地区文化娱乐产业的网络。通过收集整理分析1861年至1911年间新加坡、香港、上海等亚洲城市主要报纸关于巡回马戏团及其演出的信息，结合该时期航运和城市发展历史数据，我们尝试从历史地理空间的视角全景展现，巡回马戏文化产业网络的变迁。在这一小块历史地理的时空切片中，一百五十年前的巡回马戏演出已经遍布亚洲和大洋洲近四十多个城市，有记录的大小巡回马戏团近六十多个，这其中既有欧洲巡回马戏表演的创始人意大利人Giuseppe Chiarini和法国人Louis Soullier的团队，也有可以和誉满西方的Barnum马戏团相媲美的Harmston马戏团。亚洲巡回马戏文化娱乐产业在二十世纪初达到顶峰，随后由于现代城市的发展和其他娱乐形式的出现，开始走下坡路，这些变化在战前就已经初露端倪。",
  pictureNote: "（注：图中船只为"
    + "<a href='https://www.poheritage.com/our-archive/ships-search/advanced-ship-search-results/DispaySelection?ships%5b0%5d=26202&'>Carnatic(1863)</a>"
    + "，地图出自"
    + "<a href='http://www.messageries-maritimes.org/extreme-orient.htm'>Philippe Ramona</a>，"
    + "底图出自"
    + "<a href='http://www.freepik.com'>Freepik</a>）",
  image: "image/001.jpg",
  midContain:
  '<h3>新技术·新航线</h3>' 
  +'<a href="image/003.jpg"><img src="image/003.jpg"><a>' 
  +'<p class="imageCredit">注：照片为1870年苏伊士运河上的船只. <a href="http://www.messageries-maritimes.org/extreme-orient.htm"> P.Ramona</a></p>' 
  +'<p>自大航海时代以来，欧洲和亚洲商贸往来不断，这一时期的航线主要绕经非洲好望角，马达加斯加岛，毛里求斯，进入印度洋。由于帆船行驶需要借助风力，航线受季风的影响，欧亚往返一次往往需要长达一年的时间。随着蒸汽船的出现，欧亚交流更加频繁，实际上在苏伊士运河开凿之前，就已经有了新的航线：货物或乘客在地中海的亚历山大港上岸，换乘其他交通工具抵达红海换乘船只再继续航行。相较十八世纪的好望角航线，伦敦到孟买航程可以缩短为30天左右。</p>'
  +'<p>但是到1870年苏伊士运河开通前后，由于蒸汽船技术尚不成熟，从照片中可以看出往来船只依然配备了风帆，航程也多受印度洋恶劣天气的影响。在这段时间巡回马戏的历史地理记录中也只有少数港口城市如新加坡、香港、上海，一年中会有1-2只马戏团到访。经常出现船只失事人货损毁的报道，导致一些知名马戏团（如Soullier的马戏团）选择经西伯利亚的陆路做亚洲之旅。</p>'
  + '<a href="html/yeardata.htm"><img src="image/yeardata.png"><a>'
  + '<p class="imageCredit">图表为1861-1911年间每年有马戏演出的城市数量和报道数量，点击可查看具体信息</p>'
  +'<p>在第二次工业革命之后，蒸汽船的技术进一步发展，欧亚航路变得安全快捷可靠，多家航运公司纷纷拓展亚洲航线。航运网络的发展，带动了资本和文化的全球流动，从巡回马戏产业的历史地理数据可以看出进入二十世纪演出的城市和演出密度均大幅度的攀升，从一个侧面记录了十九世纪下半叶至二十世纪初这一波全球化的过程，新技术带来新航线，新航线开启新产业。</p>'
  
  +'<h3>新马戏•新产业</h3>'
  + '<a href="image/005.jpg"><img src="image/005.jpg"><a>'
  + '<p class="imageCredit"> 注：照片为十九世纪末巡回马戏团的帐篷内景<a href="https://www.vam.ac.uk/articles/the-story-of-circus#slideshow=58613815&slide=0">© Victoria and Albert Museum</a></p>'
  + '<p>现代以马术表演为主的马戏团出现于1768年，表演场地多为圆形，既是为了马术表演提供最佳观看效果，又方便加上帐篷顶盖和照明灯具，形成一个不惧风雨昼夜的临时展演空间。于是这种标志性的大帐篷成为马戏团的重要特征。随着工业革命，地区间的交通更加便捷，很快就出现了巡回马戏的演出形式。巡回马戏团每到一处，在城市空地临时搭建演出帐篷，盛大演出季结束后，即可拆除，继续前往下一个城市演出。</p>'
  + '<p>这种巡回马戏的表演形式很快就被创始人意大利人Giuseppe Chiarini和法国人Louis Soullier带到了亚洲。Soullier的马戏团最先于1870年到访上海随后去了香港，但是由于选择了穿越西伯利亚的陆路冒险，导致动物和物资损失惨重，演出不是很成功。Chiarini的马戏团则是在苏伊士运河航线开通后，1873年才开始亚洲之行，直至1900年一直活跃于亚洲市场，曾在十九个城市巡回演出过。</p>'
  + '<p>在亚洲二十世纪初的传奇巡回马戏团当属Harmston马戏团，号称是“东方的巴纳姆”，彼时P.T. Barnum & Bailey 巡回马戏团在欧美炙手可热。Harmston马戏团是1891年由曾经的Chiarini马戏团骑手George Harmston组建，得益于传奇的经纪人Robert Love，至1911年短短二十年间，在亚洲地区就有近六百次演出的报道，雄霸亚洲市场。</p>'
  + '<p>由Chiarini马戏团和Harmston马戏团主导的亚洲巡回马戏演出市场，逐渐发展为连接亚太多个城市的娱乐产业网络。1890年后市场竞争日趋激烈，同一个时间同一个城市甚至会出现两家大型巡回马戏团同时演出的情况，在高强度的竞争下，城市产业网络提供了更多的市场保障。像1896年6月Harmston马戏团和Willison马戏团同时在新加坡演出，不占优势的Willison马戏团就迅速转战槟城，弥补票房损失。因此像新加坡、香港、马尼拉、上海等航线发达的港口城市，很块就成为文化娱乐产业的中心。</p>'
 
  + '<h3>新城市·新娱乐</h3>'
  + '<a href="image/006.jpg"><img src="image/006.jpg"><a>'
  + '<p class="imageCredit"> 注：照片为1913年Harmston马戏团在万隆的演出帐篷<a href="https://https://www.nla.gov.au/"> ©pinterest<a> </p>'
  + '<p>新加坡、香港、上海都是十九世纪下半叶伴随着工业革命和殖民地扩张涌现的新兴城市。新加坡在1819年成为英国的殖民地，香港和上海的开埠时间是在1840年鸦片战争之后。到二十世纪初，三个城市迅速成为亚洲乃至全球重要的贸易港口城市。大量人口的涌入，城区不断地扩张，给巡回马戏娱乐产业既带来了巨大的演出市场，也伴随着各种新的麻烦。一来由于巡回马戏演出对场地的特殊要求，标志性的大帐篷需要搭建在城市空地上，又不能远离人口聚居区。而城市中的空地随着人口增多逐渐被居民区填满，这就导致巡回马戏团要寻觅到一处合适的演出空地变得比以前困难得多。其次巡回马戏演出密度的增加和演出场所距离居民区过近，导致居民的抱怨和意外事故陡然增多。像恶劣天气导致场地内涝，演出垃圾，噪音扰民，动物意外走失或伤人事件等等，负面报道频频见诸报端，巡回马戏的演出很可能会演变成一场公共灾难。</p>'
  + '<iframe class ="w-half" allowfullscreen="" src="./html/Singapore/index.html" loading="eager"> </iframe>'
  + '<p class="imageCredit">注：左侧为新加坡<a href="http://nla.gov.au/nla.obj-233406505">1924年</a>地图，右侧为新加坡<a href="http://nla.gov.au/nla.obj-570272842">1935年</a>地图，  <a href="https://assets.pinterest.com/ext/embed.html?id=835558537088494772"> ©Trove <a> </p>' 
  + '<p>选址的矛盾在新加坡更为明显，1881年Chiarini马戏团在新加坡的演出选择在坦克街（Tank Road）与河谷路（River Valley Road）的拐角空地（Fort Canning），之后迁移到沿着滨海大道欧洲大酒店（Hotel de I’Europe）前的大草坪上。但随着城市人口增多，居民对于马戏场地垃圾的抱怨和城市管理者不作为的批评逐渐加剧（详见TST, 19 Oct. 1895, p4< Long shore and nautical chat>）。进而催生了现代新加坡的城市规划，于是1932年大酒店被拆除，改建为最高法院，草坪不再被许可用作演出场地。进入二十世纪，马戏团的老板们被迫为寻找合适的演出场地大费周章，《自由西报》（Singapore Free Press and Mercantile Advertiser） 1902年8月的专题报道就描述了马戏团老板面临的选址难题，“一个给人们带来快乐的表演，却总是在城市里最泥泞和最不方便的地点。”《海峡时报》（The Strait Times） 更是在1909年3月的报道中将马戏团选址矛盾的源头直指城市众多管理部门的不作为及管理混乱（It is depriving him of a livelihood because some official is too busy or too lazy to inspect the premises.）。</p>'
  + '<a href="image/008.jpg"><img src="image/008.jpg"><a>'
  +'<p class="imageCredit"> 注：照片为<a href="https://www.nas.gov.sg/archivesonline/photographs/record-details/d388053d-1161-11e3-83d5-0050568939ad">欧洲大酒店Grand Hotel de l\'Europe<a> </p>'
  +'<p>香港和上海在这个问题上采取了另一种思路，二十世纪的上海马戏表演场地多位于在城中赛马场。香港与之类似，用市政厅附近的板球场地作为巡回马戏的演出场地，这样即避免了扰民问题，也可以在比赛季之余综合利用场地。</p>'
  +'<p>基于以上种种问题，随着现代城市和娱乐产业的发展，巡回马戏产业开始丧失竞争优势。1900年3月《自由西报》（Singapore Free Press and Mercantile Advertiser）刊文讨论城市是否应该学习曼谷和西贡的经验，为巡回马戏建造更精美的临时演出场地，或修剪掉影响帐篷搭建的林荫大道的树冠。十年后同专栏的报道可以看到，这些年城市公共资金流向了音乐厅、剧院、道路和公园，而不是马戏产业。随后电影艺术这一强力竞争对手的出现，更是直接影响到巡回马戏的票房，如Harmston马戏团1909年11月在新加坡的巡回演出就受到了电影娱乐的直接冲击。（《海峡时报》（The Strait Times） 11 nov. P7）巡回马戏产业由于场地难寻、运营准备繁杂和动物表演风险高等种种内在原因，又加之电影等新兴娱乐形式的出现，进入二十世纪后开始逐渐式微。</p>'

  + '<iframe class ="w-half" allowfullscreen="" src="https://designcat2020.github.io/Circus-footprint/" loading="eager"> </iframe>'  
  + '<p>上图显示了1861年到1911年间亚洲巡回马戏演出的足迹。拖动时间轴可以显示出每一年有巡回马戏演出的城市，点击可以显示该年度演出的马戏团名称。当年该城市巡回马戏团的报道数量越多，所在城市的圆点颜色越黄，尺寸越大。从变化趋势可以看出1880年后，出现的城市和频次明显增多。1890年以后差不多每年都有五个以上的城市有相关报道，1900年新加坡有六支不同的巡回马戏团到访，从最初每年只有1-2个城市发展到1902年有18个城市在巡回马戏团的报道中出现，在1905年后，又开始减少的趋势。<small>（注：报刊选取对象为新加坡、香港、上海当地的主要英文报纸，信息内容包括针对具体马戏团的演出信息、表演评论、娱乐八卦等。）</small></p>',
  
  footer: "Study is based on the database of newspaper reports of touring circuses in Asia from 1861-1911, collected and organized by <a href='https://nanjing.academia.edu/MXu'>Meimei Xu</a> and <a href='http://www.sunyanarch.com'>Yan Sun</a>.&nbsp;&nbsp;&nbsp; © 2022 Yan Sun. All rights reserved. <br>Source: Database of the North-China Daily News, the Strait Times, Hong Kong Daily Press etc.    Colombia University WEAI, National Library of Australia, P&O Steam Navigation Company, L'Encyclopédie des Messageries Maritimes.",


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


