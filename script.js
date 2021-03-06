var dataReload = document.querySelectorAll('[data-reload]');

var language = {
    en: {
        nav_1: "Home",
        nav_2: 'Places',
        nav_3:  'About Us',
        nav_4: 'Contacts',
        vieta1_href: "Places",
        form_title: 'Feedback Form',
        fname_text: 'Name',
        fcompany_text: 'Company name',
        fsurname_text: 'Surname',
        femail_text: 'Email',
        fcomment_text: 'Comment',
        fnumber_text: 'Phone number',
        fsubmit: 'Submit',
        kontakti_href: 'Contacts',
        kontakti_title1: 'Director',
        kontakti_name1: "Dmitry Bezrebry",
        kontakti_title2: 'Administrator',
        kontakti_name2: "Dmitry Bezrebry",
        sacensibu_href: 'About Us',
        nav_1_b: "Home",
        nav_2_b: 'Places',
        nav_3_b:  'About Us',
        nav_4_b: 'Contacts',
        Darza_Main: 'A plot of land owned by the municipality with an area of ​​<b>4.4125 ha</b>. There is asphalt road access, distance to the A6 highway - <b>3.4 km</b>, to the nearest railway station - <b>6.3 km</b>.<br> Electricity can be connected to the object, the distance to the substation is 1.18 km. Water is connected to the city water supply. There is a sewer system installed together with a rain draining system. Heating can be installed, just like gas. The gas pipeline is located 54m from the border. Rent is determined by market value.',
        acord_more: 'Expand Content',
        Rupniecibas_Main: 'A business-owned plot of land with production building/warehouse/office buildings in the area of ​​<b>13144 sq.m</b>.<br> Area of buildings: workshop/hangar - <b>1161.7 sq.m</b>, warehouse - <b>85.9 sq.m</b>, workshop/hangar - <b>841.0 sq.m</b>, administrative building - <b>1095.2 sq.m</b>, auxiliary building - <b>128.8 sq.m</b>.<br> Rūpniecības Street near the object is asphalted, in good technical condition.',
        acord_more3: 'Expand Content',
        Rupniecibas_sub: 'In the immediate vicinity, there are various industrial buildings, warehouses, and public buildings. Access to the object is not difficult - the driveway is connected to Rupniecibas Street. Traffic with Riga and other Latvian cities is easily accessed (intercity road transport and railway transportation). Distance to Riga ~ 94 km. Provided are: centralized power supply, water supply, sewerage, local central heating, security and fire alarms; asphalt driveway, and areas between buildings. Market rent - Production premises - 0.7 to 1.40 EUR / sq.m / month, office / service premises - 1.70 to 2.20 EUR / sq.m / month. The transformer substation TP-76806 owned by Latvenergo AS is located on the land plot.',
        Jaunceltnes_Main: 'The company owned plot of land with an area of ​​<b>21321 m2</b> with an asphalt driveway.<br> The nearest highway A6 is <b>1.5 km</b> away from the property, to the railway line - <b>50 m</b>. Electricity is connected, the central water and gas pipeline runs along with the property.<br> There is a sewer system and it is connected to the city sewage. The price of the object - <b>120 000 euro</b>.',
        acord_more5: 'Expand Content',
        Industrial_Main: "Aizkraukle Industrial Park - a great place for large investment projects.<br> Total land area - <b>3780m2</b>, from that, total premises area - <b>21000m2</b>, which includes:<br> The total area of ​​production premises - <b>15,000 m2</b><br> The total area of shops/offices - <b>6000m2</b><br> Administrative and production facilities have high ceilings - <b>3m and 7-11m</b> respectively.<br> Gates for hangars - 5-6 m high, 5.5 m wide.<br> The industrial park is located in a geographically advantageous area.<br> It is located <b>90 km</b> from Riga, the highway Riga-Moscow is located <b>17 km</b> from the industrial park.<br> Also nearby are small towns like Skriveri (9km), Koknese (15km), and Jaunjelgava (15km)",
        Industrial_sub: 'Office space can be adapted to the needs of the tenant. The perimeter of the building is video surveilled. Internet access is available. Rental price starting from 1.00 euros / m2, excluding VAT, utility payments, and management fees. The shop premises can also be adapted to the needs of the tenant, as well as video surveillance is performed around the perimeter of the building. Rental price starting from 1.50 euros / m2, excluding VAT, utility payments, and management fees. Production and storage facilities include a large parking area without a cost. It is located 300m from the city center, and the Riga-Moscow highway is not far away from the premises. There is 24-hour access to the rental space, as well as the loader and archive storage services. Rooms can be rented with or without hoists. The premises can be adjusted to the needs of the tenant, as well as video surveillance is performed on the perimeter of the building. Rental price starting from 1.00 euros / m2, excluding VAT, utility payments, and management fees.',
        acord_more2: "Expand Content",
        acord_more6: "Expand Content",
        Jaunceltnes_sub: 'Driveway No/Not (asphalt, gravel as long as needed): <b>There (asphalt)</b><br> Nearest highway/highway distance km: <b>1.5 km</b><br> Rail line lead at the site, distance km to the railway line: <b>50 m</b><br> As far as electricity is concerned, power: <b>electricity is</b><br> Water how far, what kind of connection: <b>Central Water Pipeline walks along the property Gas IS/Not (how far, what pressure connection (G1-G6): The gas cord goes along the property</b><br> Wastewater/Sewage Yes/No (how far): <b>Urban wastewater, sewer</b>',
    },
    ru: {
        nav_1: "Главная",
        nav_2: 'Места',
        nav_3:  'О нас',
        nav_4: 'Контакты',
        vieta1_href: "Места",
        form_title: 'Форма обратной связи',
        fname_text: 'Имя',
        fcompany_text: 'Название компании',
        fsurname_text: 'Фамилия',
        femail_text: 'Email',
        fcomment_text: 'Комментарий',
        fnumber_text: 'Номер телефона',
        fsubmit: 'Отправить',
        kontakti_href: 'Контакты',
        kontakti_title1: 'Директор',
        kontakti_name1: "Дмитрий Безребрый",
        kontakti_title2: 'Администратор',
        kontakti_name2: "Дмитрий Безребрый",
        sacensibu_href: 'О нас',
        nav_1_b: "Главная",
        nav_2_b: 'Места',
        nav_3_b:  'О нас',
        nav_4_b: 'Контакты',   
        Darza_Main: 'Земельный участок, принадлежащий самоуправлению, с территорией <b>4.4125 га.</b><br> Имеется доступ к асфальтированному пути, до шоссе <b>А6 - 3.4 км</b>, до ближайшей железнодорожной станции - <b>6.3 км.</b><br> Электричество на объекте может быть проведено, расстояние до подстанции - <b>1.18 км.</b><br> <b>Подключена вода из городского водоснабжения.</b> Оборудована канализация с системой дождя.<br> Отопление можно сделать так же, как и газ. Газопровод находится на расстоянии <b>54 м </b>от границы.<br> Арендная плата по <b>определению рыночной стоимости.</b>',
        acord_more: 'Больше информации',
        Rupniecibas_Main: 'Земельный участок с застройкой производственных/складских/офисных зданий на площади <b>13144 кв. м</b>.<br> Мастерская - ангар – <b>1161,7 кв.м</b>, склад – <b>85,9 кв. м</b>, мастерская-ангар – <b>841,0 кв.м</b>, административное здание – <b>1095,2 кв.м</b>, подсобное здание – <b>128,8 кв. м</b>.<br> Rūpniecības iela возле оцениваемого объекта является <b>асфальтированной</b>, в хорошем техническом состоянии.',
        acord_more3: 'Больше информации',
        Rupniecibas_sub: 'В ближайшей окрестности находятся объекты застройки производственными, складскими и общественными значениями.<br> Доступ к оцениваемому объекту не затруднен – подъездной путь от Rūpniecības iela, инфраструктура развита.<br> Обеспечено сообщение с Ригой и другими городами Латвии (междугородный автотранспорт и железнодорожные перевозки).<br>Расстояние до Риги ~ 94 км. Централизованное электроснабжение, водоснабжение, канализация, локальное центральное отопление, охранные и пожарной сигнализации;<br> асфальтированный подъездной путь и площадки между зданиями. Рыночная арендная плата - производственные помещения - 0,7 до 1,40 EUR/кв.м/месяц, офисные/сервисные помещения - 1,70 до 2.20 EUR/кв.м/месяц.<br> На земельном участке находится принадлежащая АО «Latvenergo» трансформаторная подстанция TP-76806.',
        Jaunceltnes_Main: 'Земельный участок, принадлежащий предприятию, площадью <b>21321 м2</b> с асфальтированной подъездной дорожкой.<br> До ближайшего шоссе А6 - <b>1.5 км</b>, до железнодорожной линии - <b>50 м</b>.<br> Электричество проведено, вдоль собственности проходит центральный <b>водопровод и газопровод</b>. Есть канализация и соединена с городскими сточными водами.<br> Цена объекта - <b>120 000 евро.</b>',
        acord_more5: 'Больше информации',
        Industrial_Main: "Индустриальный парк Айзкраукле - отличное место для развития крупных инвестиционных проектов.<br> Общая земельная площадь - <b>37800 м 2</b>, из которых общая площадь помещений - <b>21000 м 2</b>.<br> Оно включает: Общая площадь производственных помещений – <b>15000 м 2</b><br> Общая площадь помещений магазинов/офисов – <b>6000 м 2</b><br> Административные и производственные помещения с высоким потолком – <b>3 м и 7-11 м</b><br>. Ворота для ангаров на высоте 5-6 м, шириной 5.5 м.<br> Индустриальный парк находится в географически выгодной зоне.<br> Он находится в <b>90 км</b> от Риги, шоссе Рига-Москва находится в <b>17 км</b> от индустриального парка.<br> Кроме того, поблизости есть Скривери (9 км), Кокнесе (15 км) и Яунелгава (15 км).",
        Industrial_sub: 'Офисные помещения можно настроить для нужд арендатора. Проводится видеонаблюдение периметра здания. Доступно подключение к Интернету. Цена аренды от 1.00 евро/м 2, не включая НДС, коммунальные платежи и плату за хозяйственное использование. Помещения магазинов также можно приспособить для нужд арендатора, а также проводится видеонаблюдение по периметру здания. Цена аренды от 1,50 евро/м 2, не включая НДС, коммунальные платежи и плату за хозяйственное использование. Производственные и складские помещения с собой включают широкую бесплатную автостоянку. Она находится в 300 м от центра города, а также вблизи находится шоссе Рига-Москва. Есть 24 часа доступа к съемным помещениям, а также доступны услуги погрузчиков и хранение архива. Можно арендовать помещения как с, так и без тележек. Помещения можно приспособить для нужд арендатора, а также на периметре здания проводится видеонаблюдение. Цена аренды от 1.00 евро/м 2, не включая НДС, коммунальные платежи и плату за хозяйственное использование.',
        acord_more2: "Больше информации",
        acord_more6: "Больше информации",
        Jaunceltnes_sub: 'Подъездной путь Есть/Нет (асфальт, гравий, насколько необходимо): <b>Есть (асфальт)</b><br> Ближайшее шоссе/шоссе расстояние в км: <b>1,5 км</b><br> Железнодорожная линия на объекте, расстояние в км до железнодорожной линии: <b>50 м</b><br> Электричество как далеко, мощность: <b>Электричество есть</b><br> Вода как далеко, какое-то подключение: <b>Вдоль собственности проходит центральный водопровод</b><br> Газ Есть/Нет (какое расстояние, подключение какого-либо давления (G1-G6): <b>Вдоль собственности проходит газопровод</b><br> Сточные воды/Канализация Да/Нет (насколько далеко): <b>Городские сточные воды, канализация</b><br>'
        


    },
    lv: {
        nav_1: "Mājas lapa",
        nav_2: 'Vietas',
        nav_3:  'Par mums',
        nav_4: 'Kontakti',
        vieta1_href: "Vietas",
        form_title: 'Atsauksmes Forma',
        fname_text: 'Vārds',
        fcompany_text: 'Kompanijas nosaukums',
        fsurname_text: 'Uzvārds',
        femail_text: 'Email',
        fcomment_text: 'Komentarijs',
        fnumber_text: 'Telefona numurs',
        fsubmit: 'Iesniegt',
        kontakti_href: 'Kontakti',
        kontakti_title1: 'Direktors',
        kontakti_name1: "Dmitrijs Bezrebrijs",
        kontakti_title2: 'Administrators',
        kontakti_name2: "Dmitrijs Bezrebrijs",
        sacensibu_href: 'Par mums',
        nav_1_b: "Mājas lapa",
        nav_2_b: 'Vietas',
        nav_3_b:  'Par mums',
        nav_4_b: 'Kontakti',
        Darza_Main: 'Uzņēmumam piederošs zemes gabals: <b>platībā 21321m^2 ar asfaltētu piebraucamo ceļu.</b><br>Līdz tuvākajai šosejai A6 ir <b>1.5km</b>, līdz dzelzceļa līnijai - <b>50m.</b><br><b>Elektrība ir pievilkta, gar īpašumu iet centrālais ūdensvads un gāzes vads.</b><br>Ir <b>kanalizācija</b> un <b>savienots ar pilsētas notekūdeņiem</b>.<br>Objekta cena - <b>120 000 eur.</b>',
        acord_more: "Paplašināt Saturu",
        Rupniecibas_Main: 'Rūpniecības iela 9,  Aizkraukle, Aizkraukles nov., kadastra numurs 3201 001 0225, tirgus vērtība novērtēšanas dienā, tas  ir 2020.gada 24.janvāris, ir noteikta: <br><b>172 000 EUR (Viens simts septiņdesmit divi tūkstoši euro).</b>  ar realizācijas laiku līdz 12 mēnešiem <br>Pēc vērtētāja viedokļa novērtējamā objekta visvairāk iespējamās piespiedu pārdošanas vērtības novērtēšanas dienā, t.i., 2020.gada 24.janvārī, noteiktas:  <b>120 000 EUR (Viens simts divdesmit tūkstoši euro).</b>  ar realizācijas laiku līdz 9 mēnešiem <br><b></b>vērtība ar realizācijas laiku līdz 3 mēnešiem ',
        acord_more3: "Paplašināt Saturu",
        Rupniecibas_sub: "Adrese: <b>Rūpniecības iela 9, Aizkraukle, Aizkraukles nov. Kadastra numurs: 3201 001 0225</b> <br>Novērtējamais objekts sastāv no:  <br><b>003, administratīvā ēka,  kadastra apz. 3201 001 0286 001, palīgēka, kadastra apz. 3201 001 0286  003. Uz zemes gabala atrodas AS “Latvenergo” piederoša transformatora  apakšstacija TP-76806.</b> <br>Zemes gabala kopplatība:  apbūves platība: <br><b>13144 m2 Kopējā platība – 3312,6 m2, t.sk., darbnīca - angārs, kadastra apz. 3201 001 0225 001 – 1161,7 kv.m, noliktava, kadastra apz. 3201 001 0225 002 – 85,9 kv.m, darbnīca - angārs, kadastra apz. 3201 001 0225 003 – 841,0 kv.m, administratīvā ēka, kadastra apz. 3201 001 0286 001 – 1095,2 kv.m, palīgēka, kadastra apz. 3201 001 0286 003 – 128,8 kv.m. Attīstīta.</b> <br>Infrastruktūra:  apkārtne:<br><b>Ražošanas/ noliktavu / biroja ēku apbūve, sabiedriska rakstura ēku  apbūve.</b> <br>Pašreizējais izmantošanas veids:  <b>labākais</b>  <br><b>Zemes gabals ar ražošanas/ noliktavu/ biroju ēku apbūvi (ražošanas/  noliktavu/ biroju telpas).</b> <br>Izmantošanas veids:  labierīcības:  <br><b>emes gabals ar ražošanas/ noliktavu/ biroju ēku apbūvi (ražošanas/  noliktavu/ pakalpojumu/ biroju telpas).</b> <br>Viena nekustamā īpašuma, kura sastāvā ir zemes gabals, kadastra  apz.3201 001 0034, un uz tā esošā apbūve: darbnīca - angārs, kadastra  apz. 3201 001 0225 001, noliktava, kadastra apz. 3201 001 0225 002,  darbnīca - angārs, kadastra apz. 3201 001 0225 <br><b>Centralizēta elektroapgāde, ūdensapgāde, kanalizācija, lokālā centrālā apkure, apsardzes un ugunsdrošības signalizācijas; asfaltēts  piebraucamais ceļš un laukumi starp ēkām.</b>",
        Jaunceltnes_Main: 'Atrašanās vieta pilsēta (iela), pagasts: <b>Jaunceltnes iela 20, Aizkraukle, Aizkraukles novads</b><br>N/Ī veids zeme, ražošanas telpas, noliktavas u.c.: <b>Zeme</b><br>Kopējā zemes platība m 2 ; ha: <b>21321 m2</b><br>Īpašnieks fiziska persona, pašvaldība, uzņēmums: <b>Uzņēmums</b> <br>Objekta kadastra numurs Zemesgrāmatā norādītais zemes vai ēkas kadastra numurs: <b>32010010338</b> <br>Zemes cena EUR (m2 / kopējā): <b>120 000</b>',
        Jaunceltnes_sub: 'Piebraucamais ceļš Ir / Nav (asfalts, grants, cik garš nepieciešams ): <b>Ir (asfalts)</b><br>Tuvākā šoseja / lielceļš attālums km: <b>1,5 km</b><br>Dzelzceļa līnija pievads objektā, attālums km līdz dzelzceļa līnijai: <b>50 m</b><br>Elektrība cik tālu, jauda: <b>Elektrība ir</b><br>Ūdens cik tālu, kāda veida pieslēgums: <b>Gar īpašumu iet centrālais ūdensvads</b><br>Gāze Ir / Nav (cik tālu, kāda spiediena pieslēgums (G1-G6): <b>Gar īpašumu iet gāzes vads</b> <br>Notekūdeņi / Kanalizācija Jā / Nē (cik tālu): <b>Pilsētas notekūdeņi, kanalizācija</b> ',
        acord_more5: "Paplašināt Saturu",
        Industrial_Main: "Aizkraukles industriālais parks - lieliska vieta, kur attīstīt lielus investīciju projektus.<br> Kopējā zemes platība - <b>37800m2</b>, no kuriem kopējā telpu platība - <b>21000m2</b>.<br> Tā ietver: Kopējā ražošanas telpu platība – <b>15000 m2</b> Kopējā veikalu/ofisu telpu platība – <b>6000m2</b><br> Administratīvās un ražošanas telpas ir ar augstu griestu segumu - <b>3m un 7-11m respektīvi</b>.<br> Vārti angāriem - 5-6m augstumā, 5.5m platumā<br> Industriālais parks atrodas ģeogrāfiski izdevīgā zonā.<br> Tas atrodas <b>90km</b> attālumā no Rīgas, šoseja Rīga-Maskava atrodas <b>17km</b> no industriālā parka.<br> Tāpat tuvumā ir Skrīveri (9km), Koknese (15km) un Jaunjelgava (15km)",
        Industrial_sub: 'Biroju telpas iespējams pielāgot nomnieka vajadzībām. Tiek veikta ēkas perimetra videonovērošana. Ir pieejams interneta pieslēgums. Nomas cena sākot no 1.00 euro/m2, neieskaitot PVN, komunālos maksājumus un apsaimniekošanas maksu. Veikalu telpas arī iespējams pielāgot nomnieka vajadzībām, kā arī tiek veikta videonovērošana pa ēkas perimetru. Nomas cena sākot no 1.50 euro/m2, neieskaitot PVN, komunālos maksājumus un apsaimniekošanas maksu. Ražošanas un noliktavu telpas ar sevi ietver plašu bezmaksas autostāvvietu. Tā atrodas 300m no pilsētas centra, kā arī tuvumā ir šoseja Rīga-Maskava. Ir 24h piekļuve nomājamām telpām, kā arī pieejami krāvēju pakalpojumi un arhīva glabāšana. Var iznomāt telpas gan ar, gan bez telferiem. Telpas iespējams pielāgot nomnieka vajadzībām, kā arī ēkas perimetrā tiek veikta videonovērošana. Nomas cena sākot no 1.00 euro/m2, neieskaitot PVN, komunālos maksājumus un apsaimniekošanas maksu.',
        acord_more2: "Paplašināt Saturu",
        acord_more6: "Paplašināt Saturu",
    }
}

if (window.location.hash) {
    if (window.location.hash === '#en') {
        document.getElementById('nav_1').innerHTML=language.en.nav_1;
        document.getElementById('nav_2').innerHTML=language.en.nav_2;
        document.getElementById('nav_3').innerHTML=language.en.nav_3;
        document.getElementById('nav_4').innerHTML=language.en.nav_4;
        document.getElementById('vieta1_href').innerHTML=language.en.vieta1_href;
        document.getElementById('form_title').innerHTML=language.en.form_title;
        document.getElementById('fname_text').innerHTML=language.en.fname_text;
        document.getElementById('fcompany_text').innerHTML=language.en.fcompany_text;
        document.getElementById('fsurname_text').innerHTML=language.en.fsurname_text;
        document.getElementById('femail_text').innerHTML=language.en.femail_text;
        document.getElementById('fcomment_text').innerHTML=language.en.fcomment_text;
        document.getElementById('fnumber_text').innerHTML=language.en.fnumber_text;
        document.getElementById('fsubmit').value=language.en.fsubmit;
        document.getElementById('kontakti_href').innerHTML=language.en.kontakti_href;
        document.getElementById('kontakti_title1').innerHTML=language.en.kontakti_title1;
        document.getElementById('kontakti_name1').innerHTML=language.en.kontakti_name1;
        document.getElementById('sacensibu_href').innerHTML=language.en.sacensibu_href;
        document.getElementById('nav_1_b').innerHTML=language.en.nav_1_b;
        document.getElementById('nav_2_b').innerHTML=language.en.nav_2_b;
        document.getElementById('nav_3_b').innerHTML=language.en.nav_3_b;
        document.getElementById('nav_4_b').innerHTML=language.en.nav_4_b;
        document.getElementById('Darza_Main').innerHTML=language.en.Darza_Main;
        document.getElementById('acord_more').innerHTML=language.en.acord_more;
        document.getElementById('Rupniecibas_Main').innerHTML=language.en.Rupniecibas_Main;
        document.getElementById('acord_more3').innerHTML=language.en.acord_more3;
        document.getElementById('Rupniecibas_sub').innerHTML=language.en.Rupniecibas_sub;
        document.getElementById('Jaunceltnes_Main').innerHTML=language.en.Jaunceltnes_Main;
        document.getElementById('acord_more5').innerHTML=language.en.acord_more5;
        document.getElementById('Industrial_Main').innerHTML=language.en.Industrial_Main;
        document.getElementById('acord_more2').innerHTML=language.en.acord_more2;
        document.getElementById('Industrial_sub').innerHTML=language.en.Industrial_sub;
        document.getElementById('acord_more6').innerHTML=language.en.acord_more6;
        document.getElementById('Jaunceltnes_sub').innerHTML=language.en.Jaunceltnes_sub;
        
    }
    if (window.location.hash === '#ru') {
        document.getElementById('nav_1').innerHTML=language.ru.nav_1;
        document.getElementById('nav_2').innerHTML=language.ru.nav_2;
        document.getElementById('nav_3').innerHTML=language.ru.nav_3;
        document.getElementById('nav_4').innerHTML=language.ru.nav_4;
        document.getElementById('vieta1_href').innerHTML=language.ru.vieta1_href;
        document.getElementById('form_title').innerHTML=language.ru.form_title;
        document.getElementById('fname_text').innerHTML=language.ru.fname_text;
        document.getElementById('fcompany_text').innerHTML=language.ru.fcompany_text;
        document.getElementById('fsurname_text').innerHTML=language.ru.fsurname_text;
        document.getElementById('femail_text').innerHTML=language.ru.femail_text;
        document.getElementById('fcomment_text').innerHTML=language.ru.fcomment_text;
        document.getElementById('fnumber_text').innerHTML=language.ru.fnumber_text;
        document.getElementById('fsubmit').value=language.ru.fsubmit;
        document.getElementById('kontakti_href').innerHTML=language.ru.kontakti_href;
        document.getElementById('kontakti_title1').innerHTML=language.ru.kontakti_title1;
        document.getElementById('kontakti_name1').innerHTML=language.ru.kontakti_name1;
        document.getElementById('sacensibu_href').innerHTML=language.ru.sacensibu_href;
        document.getElementById('nav_1_b').innerHTML=language.ru.nav_1_b;
        document.getElementById('nav_2_b').innerHTML=language.ru.nav_2_b;
        document.getElementById('nav_3_b').innerHTML=language.ru.nav_3_b;
        document.getElementById('nav_4_b').innerHTML=language.ru.nav_4_b;
        document.getElementById('Darza_Main').innerHTML=language.ru.Darza_Main;
        document.getElementById('acord_more').innerHTML=language.ru.acord_more;
        document.getElementById('Rupniecibas_Main').innerHTML=language.ru.Rupniecibas_Main;
        document.getElementById('acord_more3').innerHTML=language.ru.acord_more3;
        document.getElementById('Rupniecibas_sub').innerHTML=language.ru.Rupniecibas_sub;
        document.getElementById('Jaunceltnes_Main').innerHTML=language.ru.Jaunceltnes_Main;
        document.getElementById('acord_more5').innerHTML=language.ru.acord_more5;
        document.getElementById('Industrial_Main').innerHTML=language.ru.Industrial_Main;
        document.getElementById('acord_more2').innerHTML=language.ru.acord_more2;
        document.getElementById('Industrial_sub').innerHTML=language.ru.Industrial_sub;
        document.getElementById('acord_more6').innerHTML=language.ru.acord_more6;
        document.getElementById('Jaunceltnes_sub').innerHTML=language.ru.Jaunceltnes_sub;

        
    }
    if (window.location.hash === '#lv') {
        document.getElementById('nav_1').innerHTML=language.lv.nav_1;
        document.getElementById('nav_2').innerHTML=language.lv.nav_2;
        document.getElementById('nav_3').innerHTML=language.lv.nav_3;
        document.getElementById('nav_4').innerHTML=language.lv.nav_4;
        document.getElementById('vieta1_href').innerHTML=language.lv.vieta1_href;
        document.getElementById('form_title').innerHTML=language.lv.form_title;
        document.getElementById('fname_text').innerHTML=language.lv.fname_text;
        document.getElementById('fcompany_text').innerHTML=language.lv.fcompany_text;
        document.getElementById('fsurname_text').innerHTML=language.lv.fsurname_text;
        document.getElementById('femail_text').innerHTML=language.lv.femail_text;
        document.getElementById('fcomment_text').innerHTML=language.lv.fcomment_text;
        document.getElementById('fnumber_text').innerHTML=language.lv.fnumber_text;
        document.getElementById('fsubmit').value=language.lv.fsubmit;
        document.getElementById('kontakti_href').innerHTML=language.lv.kontakti_href;
        document.getElementById('kontakti_title1').innerHTML=language.lv.kontakti_title1;
        document.getElementById('kontakti_name1').innerHTML=language.lv.kontakti_name1;
        document.getElementById('sacensibu_href').innerHTML=language.lv.sacensibu_href;
        document.getElementById('nav_1_b').innerHTML=language.lv.nav_1_b;
        document.getElementById('nav_2_b').innerHTML=language.lv.nav_2_b;
        document.getElementById('nav_3_b').innerHTML=language.lv.nav_3_b;
        document.getElementById('nav_4_b').innerHTML=language.lv.nav_4_b;
        document.getElementById('Darza_Main').innerHTML=language.lv.Darza_Main;
        document.getElementById('acord_more').innerHTML=language.lv.acord_more;
        document.getElementById('Rupniecibas_Main').innerHTML=language.lv.Rupniecibas_Main;
        document.getElementById('acord_more3').innerHTML=language.lv.acord_more3;
        document.getElementById('Rupniecibas_sub').innerHTML=language.lv.Rupniecibas_sub;
        document.getElementById('Jaunceltnes_Main').innerHTML=language.lv.Jaunceltnes_Main;
        document.getElementById('acord_more5').innerHTML=language.lv.acord_more5;
        document.getElementById('Industrial_Main').innerHTML=language.lv.Industrial_Main;
        document.getElementById('acord_more2').innerHTML=language.lv.acord_more2;
        document.getElementById('Industrial_sub').innerHTML=language.lv.Industrial_sub;
        document.getElementById('acord_more6').innerHTML=language.lv.acord_more6;
        document.getElementById('Jaunceltnes_sub').innerHTML=language.lv.Jaunceltnes_sub;      
    }
}

//define language reload oncklick illiteration
for (i = 0; i <= dataReload.length - 1; i++) {
    dataReload[i].onclick = function() {
        setTimeout(function () {
            location.reload(true);
        }, 150) // adjust the timer that works for you (1000 = 1 second)
    }
}

document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accrodionContent = button.nextElementSibling;

        button.classList.toggle('accordion__button--active');

        if (button.classList.contains('accordion__button--active')) {
            accrodionContent.style.maxHeight = accrodionContent.scrollHeight + 'px';
        } else {
            accrodionContent.style.maxHeight = 0;
        }
    })
})

var slideIndex = [1,1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2",  "mySlides3", "mySlides4", 'mySlides5', 'mySlides6']
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
