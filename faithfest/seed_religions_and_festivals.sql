-- Table: religions (3 rows)
INSERT INTO public.religions (id, name, description, icon, active, created_at, updated_at) VALUES
  (1, 'Hinduism', 'A broad family of traditions with diverse festivals, observances and regional practices.', '🕉️', TRUE, '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (2, 'Islam', 'A global faith with important holy days, months and festivals whose dates often follow the Islamic lunar calendar.', '☪️', TRUE, '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (3, 'Christianity', 'A global Christian tradition with major holy days and festivals observed in different ways across denominations and regions.', '✝️', TRUE, '2026-10-08 05:39:27', '2026-10-08 05:39:27');
SELECT setval(pg_get_serial_sequence('public.religions', 'id'), COALESCE(max(id), 1)) FROM public.religions;

-- Table: festivals (82 rows)
INSERT INTO public.festivals (id, religion_id, name, category, description, country, region, typical_date, duration, status, historical_information, significance, celebration, modern_celebration, created_at, updated_at) VALUES
  (1, 1, 'Diwali', 'Festival', 'Diwali is one of India''s most widely celebrated festivals and has several regional religious narratives. In many North Indian traditions it is associa...', 'India', 'North India—Rama tradition; South India—Naraka Chaturdashi; Gujarat—Lakshmi Puja/New Year traditions; West India—Govardhan/Bali traditions.', 'Kartika Amavasya; usually October/November.', '5 days', 'published', 'Diwali is one of India''s most widely celebrated festivals and has several regional religious narratives. In many North Indian traditions it is associated with Rama''s return to Ayodhya after exile and victory over Ravana. Other traditions connect the festival with Lakshmi, Krishna''s victory over Narakasura, Govardhan Puja and King Bali. The common symbolic theme is light overcoming darkness, good overcoming evil and renewal.', 'Light, dharma, prosperity, devotion and spiritual renewal. Major family, community and economic festival.', 'Cleaning homes, lighting diyas, rangoli, gifts, sweets and fireworks where permitted.', 'Lakshmi-Ganesha Puja, diya lighting and family prayers.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (2, 1, 'Pongal', 'Festival', 'Pongal is a major Tamil harvest festival celebrating the agricultural cycle and expressing gratitude to the Sun, nature, farmers and cattle. The name ...', 'India', 'Tamil Nadu has the four-day Pongal cycle; diaspora Tamil communities adapt celebrations to local conditions.', 'Thai month; usually January 14–17.', '4 days', 'published', 'Pongal is a major Tamil harvest festival celebrating the agricultural cycle and expressing gratitude to the Sun, nature, farmers and cattle. The name comes from the Tamil word pongu, meaning to boil over or overflow. The overflowing rice dish symbolizes abundance and prosperity. The festival developed around Tamil agrarian life and continues today as a four-day celebration involving Bhogi, Thai Pongal, Mattu Pongal and Kaanum Pongal.', 'Thanksgiving to Surya and reverence for nature, cattle and agricultural life. One of the most important Tamil cultural festivals and a celebration of harvest and family.', 'Cooking Pongal outdoors, drawing kolam, decorating cattle, family gatherings and visiting relatives.', 'Sun worship, Pongal offering, cattle worship and ceremonial cooking.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (3, 1, 'Holi', 'Festival', 'Holi is the Hindu festival of colours and spring. One important religious tradition connects Holika Dahan with the story of Prahlada and Holika, symbo...', 'India', 'Braj Holi, Lathmar Holi, Dol Jatra, Shigmo and regional spring celebrations.', 'Phalguna Purnima; usually February/March.', '2 days', 'published', 'Holi is the Hindu festival of colours and spring. One important religious tradition connects Holika Dahan with the story of Prahlada and Holika, symbolizing the victory of devotion and good over destructive power. Another tradition connects the colourful celebration with Krishna and Radha. Over time, Holi also became a major social festival associated with forgiveness, friendship and renewal.', 'Triumph of good over evil and devotion over arrogance. Spring celebration that encourages social interaction and reconciliation.', 'Playing with colours, Holika Dahan, visiting friends and exchanging sweets.', 'Holika Dahan, prayers and community celebrations.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (4, 1, 'Maha Shivaratri', 'Holy Day', 'Maha Shivaratri is the great night dedicated to Shiva. Hindu traditions associate the festival with several sacred narratives, including Shiva''s cosmi...', 'India', 'Celebrated throughout India with differences in rituals and temple traditions.', 'Krishna Paksha Chaturdashi of Phalguna/Magha depending on regional calendar.', '1 night', 'published', 'Maha Shivaratri is the great night dedicated to Shiva. Hindu traditions associate the festival with several sacred narratives, including Shiva''s cosmic significance and, in some traditions, the marriage of Shiva and Parvati. Devotees traditionally stay awake during the night, worship Shiva and perform abhishekam.', 'Devotion to Shiva, meditation, spiritual discipline and overcoming ignorance. Major pan-Indian Shaiva festival.', 'Fasting, night vigil, temple visits and chanting.', 'Shiva Lingam abhishekam, offering bilva leaves, milk and water.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (5, 2, 'Eid-ul-Fitr', 'Festival', 'Marks the end of Ramadan, the ninth month of the Islamic calendar.', 'India', 'Global Muslim communities', '1 Shawwal', '1–3 days', 'published', 'Commemorates the Prophet Muhammad''s victory in the Battle of Badr. The Holy Quran was revealed on an odd night during this holy month.', 'Associated with Zakat and Fitra before Eid prayer, marking gratitude and charity.', 'Communal prayers, Fitra, family visits, festive meals and greetings.', 'Modern celebrations differ by country while retaining prayer, charity and community traditions.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (6, 2, 'Ramadan', 'Religious Observance', 'Ramadan is the ninth month of the Islamic Hijri calendar and is the month in which Muslims commemorate the beginning of the revelation of the Qur''an t...', 'India', 'India: community Iftar, mosque gatherings and local foods.
Middle East: large communal Iftars and la', 'Hijri Month: Ramadan
Hijri Date: 1 Ramadan – end of Ramadan
Gregorian Month: February/March in 2026
Expected India 2026 ', 'About 29–30 days', 'published', 'Ramadan is the ninth month of the Islamic Hijri calendar and is the month in which Muslims commemorate the beginning of the revelation of the Qur''an to Prophet Muhammad through the Angel Jibril (Gabriel).
According to Islamic tradition, the revelation began during Laylat al-Qadr, the Night of Decree, in Ramadan. The month therefore became a period of fasting, worship, Qur''an recitation, charity, self-discipline and spiritual reflection.
Fasting during Ramadan is one of the Five Pillars of Islam. From dawn until sunset, adult Muslims who are able are expected to abstain from food and drink, as well as other prohibited actions, while increasing prayer, charity and remembrance of Allah.

Ninth month of the Hijri calendar.
Connected with the revelation of the Qur''an.
Fasting became obligatory for Muslims through Qur''anic revelation.', 'One of the Five Pillars of Islam.
Month of fasting (Sawm).
Month of Qur''an revelation.
Month of repentance, worship and charity.

Ramadan strongly influences family and community life. Families gather for Iftar, mosques become more active at night, and charitable activities increase.', 'Suhoor
Fasting
Iftar
Taraweeh prayers
Qur''an recitation
Charity
Family gatherings

Event Time:
Fasting begins: At Fajr (dawn).
Fasting ends: At Maghrib (sunset).
Suhoor: Before Fajr.
Iftar: Immediately after sunset/Maghrib.
Taraweeh: After Isha prayer at night.
Important: Exact clock times depend on location and date.
For example, Ramadan 2026 timetables show Chennai''s first-day Suhoor/Fajr around 5:18 AM and Iftar/Maghrib around 6:16 PM, illustrating why FaithFest should calculate times by location rather than storing one universal time. [Quran Gallery](https://qurangallery.com/prayer/calendar/ramadan-2026/india?utm_source=chatgpt.com)', 'Five daily prayers
Fasting from dawn to sunset
Taraweeh
Dua
Qur''an recitation
Zakat and Sadaqah', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (7, 2, 'Eid-ul-Zuha (Eid-ul-Azha)', 'Festival', 'Marked by the ritual sacrifice of a goat, or bakra, symbolising devotion and obedience to Allah.', 'India', 'Global Muslim communities', '10 Dhu-al-Hijjah', 'Several days', 'published', 'Honours the Prophet Ibrahim''s unwavering faith, which Allah tested by instructing him to sacrifice his son.', 'Emphasizes devotion, generosity, charity and community. Coincides with the Hajj pilgrimage.', 'Sacrificial meat is shared among family, friends, and the less fortunate, with a third reserved for those in need.', 'Modern celebrations vary according to local law and custom.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (8, 2, 'Milad-Un-Nabi', 'Festival', 'A solemn celebration of the birth anniversary of the Prophet Muhammad.', 'India', 'Global Muslim communities', '12 Rabi-al-Awwal', '1 day', 'published', 'The Prophet was born on the twelfth day of Rabi-al-Awwal, a date also believed to mark his passing.', 'Recognised as a day of respect and modest festivities, honouring the Prophet''s virtues.', 'People gather in mosques for Quranic recitations, reciting the Qasida al-Burda Sharif and Nats.', 'In Kashmir, devotees visit the Hazratbal Shrine in Srinagar.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (9, 2, 'Muharram', 'Observance', 'Honours the martyrdom of Hussain, the son of Ali and grandson of the Prophet Muhammad.', 'India', 'Global Muslim communities', '1st month of Islamic calendar', '10 days (Yaum-al-Ashura)', 'published', 'Remembering Hussain''s sacrifice at the Battle of Karbala in 680 AD (61 Hijri).', 'A solemn occasion and the Islamic New Year, marked globally as a day of mourning by Shia Muslims.', 'Tajia processions, wearing black as a sign of grief, and distributing sherbet or juice to the public.', 'Modern observance is highly dependent on local tradition.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (10, 2, 'Shab-e-Barat', 'Holy Day', 'Shab-e-Barat is a night observed by many Muslims on the middle night of Sha''ban. The night is associated in various traditions with prayer, forgivenes...', 'India', 'Very prominent in South Asia; less emphasized or not observed as a special night by some other Musli', 'Hijri Month: Sha''ban
Hijri Date: 15 Sha''ban
Expected India 2026: February 4, 2026
Duration: Night-time observance.
The I', '1 night', 'published', 'Shab-e-Barat is a night observed by many Muslims on the middle night of Sha''ban. The night is associated in various traditions with prayer, forgiveness and remembrance.
Its observance varies considerably among Muslim communities, and it is not treated as a major festival in all Islamic traditions.

15 Sha''ban.
Strongly observed in parts of South Asia and other regions.', 'Prayer
Repentance
Seeking forgiveness
Remembrance of Allah

Particularly important in South Asian Muslim communities.', 'Night prayers
Qur''an recitation
Visiting graves
Charity
Family meals

Event Time:
Begins: Sunset/Maghrib.
Main observance: Night.
Ends: Fajr/dawn.', 'Practices differ by community; there is no single universally prescribed ritual.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (11, 2, 'Shab-e-Miraj', 'Holy Day', 'The Night of Ascent, commemorating the spiritual journey of the Prophet Muhammad.', 'India', 'Global Muslim communities', '27 Rajab', '1 night', 'published', 'Believed to have occurred two years before the Hijra, marking the event where the five daily prayers were made obligatory.', 'A night of spiritual reflection and gratitude.', 'Mosques are decorated with candles and lights, hymns are sung, stories shared, and charity given.', 'Modern observance includes dedicated night prayers and community feasts.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (12, 3, 'Christmas', 'Festival', 'Christmas commemorates the birth of Jesus Christ. According to the New Testament, Jesus was born to Mary in Bethlehem. The Gospel accounts describe Ma...', 'India', 'Kerala: elaborate church celebrations, Christmas stars and traditional foods.
Goa: Midnight Mass, cr', 'Christian/Liturgical Season: Christmas
Gregorian Month: December
Typical Date: D', '1+ days', 'published', 'Christmas commemorates the birth of Jesus Christ. According to the New Testament, Jesus was born to Mary in Bethlehem. The Gospel accounts describe Mary and Joseph travelling to Bethlehem, where Jesus was born and laid in a manger because there was no suitable lodging available.
The birth of Jesus became central to Christian belief because Christians understand him as the Son of God and the promised Messiah. The Gospel of Luke describes angels announcing the birth to shepherds, while Matthew describes visitors from the East bringing gifts.
The Christian celebration of Christmas developed over the centuries. December 25 became an established date for the celebration in the Western Christian tradition, while some Eastern Christian communities follow different calendar traditions. Christmas gradually developed from a primarily religious observance into a major cultural celebration involving family gatherings, gifts, charitable activities, music and decorations.

Origin: Christian celebration of the Nativity of Jesus.
Biblical accounts: Matthew 1–2 and Luke 1–2.
Associated place: Bethlehem.
The word Christmas comes from "Christ''s Mass."', 'Celebrates the birth of Jesus Christ.
Represents God''s coming into the world in Christian theology.
Emphasizes hope, salvation, peace and love.
Begins the Christmas season.

Christmas has become one of the world''s most widely recognized celebrations. Families gather, exchange gifts, decorate homes and churches, and participate in charitable activities.', 'Christmas Eve services
Midnight Mass
Christmas carols
Nativity displays
Christmas trees
Gift giving
Family gatherings
Charity and helping the needy', 'Church services
Prayer
Bible readings
Eucharistic celebration in Catholic and Orthodox traditions
Nativity prayers', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (13, 3, 'Easter', 'Festival', 'A central Christian festival commemorating the resurrection of Jesus in Christian belief.', 'India', 'Global Christian communities', 'March/April, date varies', 'Several days in many traditions', 'published', 'Easter traditions developed through early Christian observance and later liturgical and cultural practices.', 'Centers on the resurrection of Jesus and is the culmination of Holy Week in many Christian traditions.', 'Church services, prayer, family gatherings and regional foods are common. Customs differ significantly among denominations and countries.', 'Modern celebrations include both religious services and cultural family activities.', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (14, 3, 'Good Friday', 'Holy Day', 'Good Friday commemorates the crucifixion and death of Jesus Christ. According to the Gospels, Jesus was arrested, tried and sentenced to death by cruc...', 'India', 'Passion plays
Processions
Stations of the Cross
Public prayer services', 'Gregorian Month: April in 2026
2026 Date: April 3, 2026
Duration: One day.
Good ', '1 day', 'published', 'Good Friday commemorates the crucifixion and death of Jesus Christ. According to the Gospels, Jesus was arrested, tried and sentenced to death by crucifixion.
Christians remember the suffering and death of Jesus as central to their understanding of salvation. The day is therefore marked by solemn prayer, reflection and remembrance rather than celebration.

Biblical accounts: Matthew 27, Mark 15, Luke 23 and John 18–19.', 'Passion and death of Jesus.
Sacrifice.
Redemption.
Salvation.

Good Friday is observed solemnly in many Christian communities around the world.', 'Fasting
Prayer
Stations of the Cross
Passion services
Processions', 'Reading the Passion narrative
Veneration of the Cross
Three-hour prayer services in some communities
Silent prayer', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (15, 3, 'Pentecost', 'Holy Day', 'Pentecost commemorates the descent of the Holy Spirit upon the apostles and other followers of Jesus. Acts 2 describes a powerful wind, tongues of fir...', 'India', 'Pentecostal churches may emphasize spiritual gifts and worship experiences particularly strongly.', 'Gregorian Month: May
2026 Date: May 24, 2026
Duration: One principal feast day f', '1 day', 'published', 'Pentecost commemorates the descent of the Holy Spirit upon the apostles and other followers of Jesus. Acts 2 describes a powerful wind, tongues of fire and the disciples speaking in different languages.
The event is traditionally regarded as the beginning or public manifestation of the Christian Church''s mission. The apostles began proclaiming the Gospel to people from different nations.

Acts 2:1–41.', 'Coming of the Holy Spirit.
Empowerment of the apostles.
Mission of the Church.

Pentecost is important in Catholic, Orthodox, Anglican and many Protestant churches.', 'Church services
Confirmation-related celebrations
Prayer to the Holy Spirit
Community gatherings', 'Eucharist
Scripture readings
Confirmation in some traditions', '2026-10-08 05:39:27', '2026-10-08 05:39:27'),
  (16, 2, 'Eid al-Fitr', 'Festival', 'Eid al-Fitr marks the completion of Ramadan. It is a day of celebration and gratitude after a month of fasting, prayer and spiritual discipline.
The c...', 'India', 'Indian celebrations commonly include sheer khurma, biryani, mosque prayers and family gatherings.', 'Hijri Month: Shawwal
Hijri Date: 1 Shawwal
Gregorian Month: March 2026
Expected India 2026 Date: March 21, 2026
Duration', '1–3 days or regional variation', 'published', 'Eid al-Fitr marks the completion of Ramadan. It is a day of celebration and gratitude after a month of fasting, prayer and spiritual discipline.
The celebration begins after the conclusion of Ramadan and the determination of the first day of Shawwal. Muslims gather for a special Eid prayer, give charity through Zakat al-Fitr and celebrate with family and community.

Islamic celebration marking the end of Ramadan.
Associated with the beginning of Shawwal.', 'Marks the completion of Ramadan fasting.
Day of gratitude to Allah.
Eid prayer.
Zakat al-Fitr.

It is one of the most important Muslim celebrations. Families visit relatives, exchange greetings and prepare special food.', 'Eid prayer
Zakat al-Fitr
New clothes
Family visits
Gifts
Greeting others with "Eid Mubarak"

Event Time:
Eid day begins: At sunset of the previous Islamic day.
Eid prayer: After sunrise and before midday.
Exact Salah time: Depends on the local mosque and sunrise.
Important: Eid prayer should not be assigned one universal clock time in the database.', 'Ghusl/bathing
Wearing clean clothes
Eating before Eid prayer
Eid Salah
Takbir
Charity', '2026-10-08 05:49:03', '2026-10-08 05:49:03'),
  (17, 2, 'Eid al-Adha', 'Festival', 'Eid al-Adha commemorates the willingness of Prophet Ibrahim (Abraham) to obey God''s command and sacrifice what was commanded of him. Islamic tradition...', 'India', 'Qurbani practices and traditional foods differ between countries and communities.', 'Hijri Month: Dhul-Hijjah
Hijri Date: 10 Dhul-Hijjah
Gregorian Month: May 2026
Expected India 2026 Date: May 28, 2026
Dur', 'Several days of observance', 'published', 'Eid al-Adha commemorates the willingness of Prophet Ibrahim (Abraham) to obey God''s command and sacrifice what was commanded of him. Islamic tradition teaches that God provided a sacrifice instead.
The festival occurs during the annual Hajj pilgrimage and is closely connected with the story of Ibrahim, his family and their devotion to Allah.
Muslims who are able may perform Qurbani, the sacrifice of an eligible animal, and distribute the meat among family, friends and people in need.

Associated with Prophet Ibrahim.
Connected with Hajj.
Celebrated on 10 Dhul-Hijjah.', 'Sacrifice
Obedience
Faith
Charity
Completion of the main Hajj rites

Families gather, prepare food and distribute meat to relatives, neighbors and people in need.', 'Eid prayer
Qurbani
Charity
Family visits
New clothes
Sharing food

Event Time:
Eid prayer: After sunrise and before midday.
Qurbani: Begins after Eid prayer.
Qurbani period: Continues during the specified days of sacrifice.
Exact clock time depends on location.', 'Eid Salah
Qurbani
Takbir
Dua
Distribution of meat', '2026-10-08 05:49:03', '2026-10-08 05:49:03'),
  (18, 2, 'Islamic New Year', 'Observance', 'The beginning of a new year in the Islamic lunar calendar.', 'India', 'Global Muslim communities', '1 Muharram', '1 day/date varies', 'published', 'The Islamic calendar is a lunar calendar beginning with Muharram.', 'Marks the start of a new Islamic year; observance varies widely by community.', 'Some communities hold religious gatherings, reflection or educational programs; there is no single universal celebration style.', 'Modern observance is highly dependent on local tradition.', '2026-10-08 05:49:03', '2026-10-08 05:49:03'),
  (19, 1, 'Navratri', 'Festival', 'Navratri means “nine nights” and is a major festival devoted to Shakti, the divine feminine. A major tradition associates Sharad Navratri with the bat...', 'India', 'Gujarat—Garba; West Bengal—Durga Puja; North India—Ramlila; Tamil Nadu—Golu.', 'Sharad Navratri in Ashvin; nine nights.', '9 nights', 'published', 'Navratri means “nine nights” and is a major festival devoted to Shakti, the divine feminine. A major tradition associates Sharad Navratri with the battle between Goddess Durga and Mahishasura and her victory over him. However, Navratri takes different forms throughout India, including Garba in Gujarat, Durga Puja in Bengal, Ramlila in North India and Golu in Tamil Nadu.', 'Worship of divine feminine power. One of India''s most diverse Hindu festivals.', 'Fasting, Durga Puja, Garba, Dandiya, Ramlila and Golu.', 'Daily Devi worship, Ghatasthapana and special pujas.', '2026-10-08 06:06:33', '2026-10-08 06:06:33'),
  (20, 1, 'Ganesh Chaturthi', 'Festival', 'Ganesh Chaturthi celebrates Ganesha, the elephant-headed deity associated with wisdom and removal of obstacles. The festival became especially promine...', 'India', 'Maharashtra, Karnataka, Goa, Andhra Pradesh, Telangana and Tamil Nadu.', 'Bhadrapada Shukla Chaturthi.', '10 days', 'published', 'Ganesh Chaturthi celebrates Ganesha, the elephant-headed deity associated with wisdom and removal of obstacles. The festival became especially prominent as a large public celebration in Maharashtra during the modern period, although Ganesha worship is much older. Public celebrations combine religious worship with community and cultural activities.', 'Worship of Ganesha as remover of obstacles and deity of wisdom. Major community festival, especially in Maharashtra.', 'Idol installation, daily puja, cultural programmes and immersion.', 'Prana Pratishtha, puja, offerings and Visarjan.', '2026-10-08 06:06:33', '2026-10-08 06:06:33'),
  (21, 1, 'Janmashtami', 'Festival', 'The celebration of the birth of Lord Krishna, observed with devotion, music and midnight prayers.', 'India', 'India', 'Bhadrapada Krishna Ashtami (August)', '1–2 days', 'published', 'Janmashtami commemorates the birth of Krishna at midnight in Mathura. Texts describe his birth as the eighth avatar of Vishnu. The Braj region (Mathura, Vrindavan) has the oldest and most elaborate celebrations.', 'Celebrates Krishna''s birth and his divine qualities of love, wisdom and protection of dharma.', 'Devotees fast until midnight, participate in bhajans and kirtans, perform Dahi Handi (a human pyramid to break a pot of curd, symbolising Krishna''s love of butter), and celebrate with midnight prayers.', 'Celebrated globally, with ISKCON temples hosting large events; Dahi Handi is a major public event in Maharashtra.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (22, 1, 'Rama Navami', 'Holy Day', 'Rama Navami celebrates the birth of Lord Rama according to the Ramayana tradition. Rama is presented in Hindu tradition as an embodiment of dharma and...', 'India', 'Celebrated throughout India with particularly strong traditions in Ayodhya and South Indian temples.', 'Chaitra Shukla Navami.', '1 day', 'published', 'Rama Navami celebrates the birth of Lord Rama according to the Ramayana tradition. Rama is presented in Hindu tradition as an embodiment of dharma and righteous kingship. Devotees therefore use the festival to remember Rama''s virtues and teachings.', 'Celebration of Rama''s birth. Strong connection with Indian epic literature, theatre and devotional culture.', 'Ramayana recitation, bhajans, processions and temple celebrations.', 'Rama puja, fasting, chanting and temple visits.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (23, 1, 'Raksha Bandhan', 'Festival', 'Raksha Bandhan is a festival celebrating sibling affection and the symbolic bond of protection. Many historical and legendary narratives have become a...', 'India', 'Rakhi, Rakhi Purnima, Jhulan traditions and regional customs.', 'Shravana Purnima.', '1 day', 'published', 'Raksha Bandhan is a festival celebrating sibling affection and the symbolic bond of protection. Many historical and legendary narratives have become associated with the practice, but the exact historical origin is not represented by a single universally accepted event. Today the central custom is the tying of rakhi.', 'Blessings, protection and family bonds. Celebrates brother-sister relationships.', 'Tying rakhi, exchanging gifts and family gatherings.', 'Aarti, rakhi tying and prayers.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (24, 1, 'Dussehra', 'Festival', 'Vijayadashami marks victory over evil in several Hindu traditions. In the Ramayana tradition it commemorates Rama''s victory over Ravana, while Shakta ...', 'India', 'Mysuru Dasara, Kullu Dussehra, Bengal immersion, North Indian Ramlila.', 'Ashvin Shukla Dashami.', '1 day', 'published', 'Vijayadashami marks victory over evil in several Hindu traditions. In the Ramayana tradition it commemorates Rama''s victory over Ravana, while Shakta traditions associate the day with Durga''s victory over Mahishasura. Therefore, the exact story and celebration differ regionally, but the broad theme is the triumph of dharma over adharma.', 'Victory of righteousness over evil. Major national festival with theatre and public celebrations.', 'Ramlila, Ravana effigy burning, processions and Durga immersion.', 'Puja, Ayudha Puja in some regions and temple ceremonies.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (25, 1, 'Vasant Panchami', 'Festival', 'Vasant Panchami marks the arrival of spring and is particularly associated with Saraswati, the Hindu goddess of knowledge, learning, music and the art...', 'India', 'Saraswati Puja is particularly prominent in West Bengal, Odisha, Bihar and Assam; Basant traditions are also observed in northern India.', 'Magha Shukla Panchami; usually January/February.', '1 day', 'published', 'Vasant Panchami marks the arrival of spring and is particularly associated with Saraswati, the Hindu goddess of knowledge, learning, music and the arts. The festival combines seasonal celebration with educational and religious traditions. In many communities, children are introduced to learning or writing during the festival.', 'Worship of Goddess Saraswati. Celebration of education, music, literature and creativity.', 'Saraswati Puja, educational ceremonies and wearing yellow clothing.', 'Puja, offering flowers and fruits, prayers for knowledge and learning.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (26, 1, 'Guru Purnima', 'Religious Observance', 'Guru Purnima is a day dedicated to honouring teachers and spiritual guides. It is traditionally associated with Vyasa and is therefore sometimes calle...', 'India', 'Celebrated by Hindu, Buddhist and Jain traditions with different interpretations.', 'Ashadha Purnima.', '1 day', 'published', 'Guru Purnima is a day dedicated to honouring teachers and spiritual guides. It is traditionally associated with Vyasa and is therefore sometimes called Vyasa Purnima. The wider concept celebrates the transmission of knowledge from teacher to student.', 'Respect for spiritual teachers and knowledge. Reinforces India''s teacher-student heritage.', 'Guru worship, offering respect and studying spiritual texts.', 'Guru puja, meditation and prayers.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (27, 1, 'Onam', 'Cultural Celebration', 'Onam is Kerala''s major harvest and cultural festival. Kerala tradition associates the celebration with the legendary King Mahabali and his annual retu...', 'India', 'Kerala districts have different local celebrations.', 'Chingam month; Thiruvonam nakshatra.', '10 days', 'published', 'Onam is Kerala''s major harvest and cultural festival. Kerala tradition associates the celebration with the legendary King Mahabali and his annual return to visit his people. The festival also reflects Kerala''s agricultural cycles and social traditions.', 'Remembering Mahabali and Vishnu/Vamana traditions. Major Kerala cultural festival celebrated across communities.', 'Pookalam, Onam Sadya, boat races and cultural programmes.', 'Temple visits, prayers and family observances.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (28, 1, 'Chhath Puja', 'Religious Observance', 'Chhath Puja is a major festival of Bihar, Jharkhand, eastern Uttar Pradesh and neighbouring regions. It is devoted primarily to Surya and associated w...', 'India', 'Bihar, Jharkhand, eastern Uttar Pradesh and diaspora communities.', 'Kartika Shukla Shashthi; usually October/November.', '4 days', 'published', 'Chhath Puja is a major festival of Bihar, Jharkhand, eastern Uttar Pradesh and neighbouring regions. It is devoted primarily to Surya and associated with gratitude, wellbeing and agricultural life. Devotees observe disciplined fasting and offer prayers while standing in water during sunrise and sunset.', 'Worship of Surya and Chhathi Maiya in regional traditions. One of the most important cultural festivals of Bihar and eastern India.', 'Fasting, riverbank gatherings, thekua preparation and offerings.', 'Evening and morning arghya to the Sun.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (29, 1, 'Karwa Chauth', 'Religious Observance', 'Karwa Chauth is a traditional fasting observance practiced particularly by married women in parts of North and Northwest India. Its customs developed ...', 'India', 'Punjab, Haryana, Rajasthan, Uttar Pradesh, Delhi and surrounding areas.', 'Kartika Krishna Chaturthi.', '1 day', 'published', 'Karwa Chauth is a traditional fasting observance practiced particularly by married women in parts of North and Northwest India. Its customs developed through regional marital and devotional traditions. The fast is associated with prayers for the wellbeing and longevity of one''s husband, while modern observances increasingly emphasize family relationships and mutual affection.', 'Prayer and marital devotion. Important women''s and family observance.', 'Fasting, mehendi, dressing traditionally and moon viewing.', 'Puja, Karwa worship and breaking the fast after seeing the moon.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (30, 1, 'Akshaya Tritiya', 'Holy Day', 'Akshaya Tritiya is regarded as an auspicious day in Hindu and Jain traditions. The word Akshaya conveys the idea of something that does not diminish. ...', 'India', 'Practices differ across northern, western and southern India.', 'Vaishakha Shukla Tritiya; April/May.', '1 day', 'published', 'Akshaya Tritiya is regarded as an auspicious day in Hindu and Jain traditions. The word Akshaya conveys the idea of something that does not diminish. Traditional associations include charity, spiritual practice, prosperity and beginning important activities.', 'Auspiciousness, charity, worship and spiritual merit. Associated with new beginnings, weddings, purchases and agriculture.', 'Charity, gold purchases, ceremonies and new ventures.', 'Vishnu/Lakshmi worship and donations.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (31, 1, 'Makara Sankranti', 'Festival', 'A harvest festival marking the sun''s transition into Capricorn, celebrated across India with regional names.', 'India', 'India', 'January 14 (fixed solar date)', '1–4 days', 'published', 'Makara Sankranti is one of the few Hindu festivals based on the solar calendar. It marks the sun''s entry into Makara (Capricorn) and the beginning of Uttarayan (northward journey of the sun).', 'A time of harvest thanksgiving; regarded as auspicious for holy dips, charity and worship. Also celebrated as Pongal in Tamil Nadu and Lohri in Punjab.', 'Ritual dips in sacred rivers, flying kites (especially in Gujarat), preparing til-gul (sesame and jaggery sweets), and Pongal rice dishes. Bonfires are lit in Punjab on the preceding Lohri.', 'Kite festivals in Ahmedabad and Jaipur are internationally famous; the festival bridges solar and agricultural traditions.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (32, 1, 'Nag Panchami', 'Religious Observance', 'Nag Panchami is an observance connected with reverence for snakes in Hindu traditions. Serpents have important symbolic roles in Hindu mythology, incl...', 'India', 'Maharashtra, Karnataka, Andhra Pradesh, Telangana, Bengal and other regions.', 'Shravana Shukla Panchami.', '1 day', 'published', 'Nag Panchami is an observance connected with reverence for snakes in Hindu traditions. Serpents have important symbolic roles in Hindu mythology, including associations with Shiva and Vishnu. The festival expresses respect toward serpent beings and, in some communities, agricultural/ecological relationships with snakes.', 'Worship of Nagas and protection/blessings. Connects religious traditions with rural and ecological culture.', 'Snake worship, temple visits and offerings.', 'Milk or other offerings in accordance with local tradition, puja and prayers.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (33, 1, 'Sharad Purnima', 'Holy Day', 'The harvest full moon night, associated with Lakshmi worship and the legend of Krishna''s Raas Leela.', 'India', 'India', 'Ashwina Purnima (October)', '1 night', 'published', 'Sharad Purnima (Kojagara Purnima) is the full moon of the autumn harvest. It is said that on this night Lakshmi descends to earth to bless devotees who are awake.', 'The moonlight on this night is believed to have healing properties. Devotees offer kheer (rice pudding) to the moon and consume it as prasad.', 'Kheer is prepared, left under the moonlight and consumed as blessed food. Lakshmi puja is performed; devotees stay awake through the night (jagran).', 'Celebrated by families and temples; the Vrindavan Raas Leela performances on this night are famous.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (34, 1, 'Dhanteras', 'Festival', 'Dhanteras begins the traditional Diwali festival period in many communities. The day is associated with Dhanvantari, Lakshmi and traditions of prosper...', 'India', 'Practices differ across North, West and South India.', 'Kartika Krishna Trayodashi.', '1 day', 'published', 'Dhanteras begins the traditional Diwali festival period in many communities. The day is associated with Dhanvantari, Lakshmi and traditions of prosperity and wellbeing. Modern practice commonly includes cleaning homes and purchasing items considered auspicious.', 'Worship for health, wealth and prosperity. Marks the beginning of the Diwali season.', 'Buying utensils, jewellery or other auspicious items.', 'Lakshmi/Dhanvantari worship and lighting lamps.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (35, 1, 'Hanuman Jayanti', 'Holy Day', 'Hanuman Jayanti commemorates the birth of Hanuman, a central figure in the Ramayana tradition. Hanuman is remembered for devotion to Rama, courage, st...', 'India', 'Date differs across regions.', 'Often Chaitra Purnima; some traditions observe it in other months.', '1 day', 'published', 'Hanuman Jayanti commemorates the birth of Hanuman, a central figure in the Ramayana tradition. Hanuman is remembered for devotion to Rama, courage, strength and service. Regional traditions differ regarding the exact date and birth narrative.', 'Devotion to Hanuman and remembrance of his service to Rama. Symbol of strength, courage, loyalty and devotion.', 'Temple visits, Hanuman Chalisa recitation and processions.', 'Abhishekam, puja and devotional chanting.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (36, 1, 'Ugadi', 'Cultural Celebration', 'Ugadi marks the traditional New Year in several Deccan regions. The festival represents the beginning of a new annual cycle and is associated with ren...', 'India', 'Andhra Pradesh, Telangana and Karnataka.', 'Chaitra Shukla Pratipada; March/April.', '1 day', 'published', 'Ugadi marks the traditional New Year in several Deccan regions. The festival represents the beginning of a new annual cycle and is associated with renewal, hope and preparation for the coming year. The famous Ugadi Pachadi combines different tastes, symbolizing the varied experiences of life.', 'New-year worship and seeking blessings for prosperity. Major Telugu and Kannada New Year celebration.', 'House cleaning, new clothes, Panchanga listening and Ugadi Pachadi.', 'Puja, Panchanga Shravanam and temple visits.', '2026-10-08 06:06:34', '2026-10-08 06:06:34'),
  (37, 1, 'Gudi Padwa', 'Cultural Celebration', 'Gudi Padwa is the traditional New Year celebration of Maharashtra and some surrounding regions. It begins the new year according to the regional lunis...', 'India', 'Maharashtra, Goa and nearby Konkani communities.', 'Chaitra Shukla Pratipada.', '1 day', 'published', 'Gudi Padwa is the traditional New Year celebration of Maharashtra and some surrounding regions. It begins the new year according to the regional lunisolar calendar. The raised gudi is displayed outside homes as a symbol of auspiciousness, victory and prosperity.', 'Beginning of a new sacred calendar cycle. Important Maharashtrian cultural festival.', 'Raising gudi, cleaning homes and preparing festive meals.', 'Home puja and worship of the gudi.', '2026-10-08 06:06:35', '2026-10-08 06:06:35'),
  (38, 1, 'Makar Sankranti', 'Festival', 'Makar Sankranti is an ancient Indian solar festival associated with the Sun''s transition into Makara (Capricorn). The festival is connected with the s...', 'India', 'Pongal in Tamil Nadu, Uttarayan in Gujarat, Magh Bihu in Assam, Lohri in Punjab and Sankranti celebrations in Andhra Pradesh/Karnataka/Telangana.', 'Usually January 14 or 15; Sun''s transition into Makara.', '1+ days', 'published', 'Makar Sankranti is an ancient Indian solar festival associated with the Sun''s transition into Makara (Capricorn). The festival is connected with the seasonal movement of the Sun, the beginning of longer days in the northern hemisphere and the agricultural cycle. Traditionally, communities use the occasion to express gratitude for nature and the harvest. Over time, the festival developed into different regional celebrations while retaining its connection with the Sun and seasonal change.', 'Devotion to Surya, the Sun deity; associated with purification, charity and spiritual renewal. Harvest festival representing seasonal change, community gathering and thanksgiving.', 'Kite flying, holy bathing, charity, preparing sesame-based foods and visiting family.', 'Surya worship, sacred bathing, offerings of sesame and charity.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (39, 1, 'Thaipusam', 'Festival', 'Thaipusam is associated with Lord Murugan and the Tamil religious tradition. It commemorates traditions concerning Parvati giving Murugan the divine s...', 'India', 'Tamil Nadu, Malaysia, Singapore, Sri Lanka and other Tamil communities.', 'Thai month, on the full moon around Pushya/Pusam.', '1+ days', 'published', 'Thaipusam is associated with Lord Murugan and the Tamil religious tradition. It commemorates traditions concerning Parvati giving Murugan the divine spear or Vel, which represents divine power used against evil. Devotees observe the festival through pilgrimage, vows, offerings and acts of devotion.', 'Devotion to Murugan and the power of the Vel. Major Tamil religious and diaspora celebration.', 'Kavadi carrying, pilgrimage, offerings and devotional singing.', 'Abhishekam, fasting, carrying kavadi and temple worship.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (40, 1, 'Narasimha Jayanti', 'Festival', 'Narasimha Jayanti commemorates the manifestation of Vishnu as Narasimha, the man-lion form, according to Hindu tradition. The story describes Narasimh...', 'India', 'Andhra Pradesh, Telangana, Karnataka, Odisha and other Vaishnava regions.', 'Vaishakha Shukla Chaturdashi.', '1+ days', 'published', 'Narasimha Jayanti commemorates the manifestation of Vishnu as Narasimha, the man-lion form, according to Hindu tradition. The story describes Narasimha defeating Hiranyakashipu after the latter''s attempt to exploit a protective boon. The narrative represents divine intervention to protect Prahlada and restore dharma.', 'Vishnu''s protection of devotees and victory of dharma. Important Vaishnava observance.', 'Fasting, temple visits and Narasimha worship.', 'Abhishekam, puja and recitation of scriptures.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (41, 1, 'Vat Savitri Vrat', 'Festival', 'Vat Savitri Vrat is associated with the story of Savitri and Satyavan. According to the Mahabharata tradition, Savitri''s determination and devotion en...', 'India', 'Vat Savitri and Vat Purnima traditions differ in timing and practice.', 'Jyeshtha Amavasya or Purnima depending on region.', '1+ days', 'published', 'Vat Savitri Vrat is associated with the story of Savitri and Satyavan. According to the Mahabharata tradition, Savitri''s determination and devotion enabled her to confront Yama and secure her husband''s life. The observance developed as a married women''s vrata in several regions.', 'Marital devotion, prayer and family welfare. Important women''s observance in parts of North and Western India.', 'Fasting and worship around the banyan tree.', 'Circumambulating the banyan tree, tying sacred threads and listening to the Savitri story.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (42, 1, 'Jagannath Rath Yatra', 'Festival', 'Rath Yatra is associated with Lord Jagannath, Balabhadra and Subhadra of Puri. The festival''s central event is the ceremonial movement of the deities ...', 'India', 'Rath Yatra processions occur in many Indian cities, inspired by Puri.', 'Ashadha Shukla Dwitiya.', '1+ days', 'published', 'Rath Yatra is associated with Lord Jagannath, Balabhadra and Subhadra of Puri. The festival''s central event is the ceremonial movement of the deities on enormous chariots. Puri''s Rath Yatra developed into one of India''s most recognizable temple festivals and combines religious devotion, craftsmanship and public participation.', 'Public procession of Jagannath and his divine family. Major Odia religious and cultural heritage event.', 'Chariot construction, procession and pulling the chariots.', 'Temple ceremonies, chariot worship and procession.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (43, 1, 'Varalakshmi Vratam', 'Festival', 'Varalakshmi Vratam is a South Indian observance dedicated to Goddess Lakshmi in her auspicious form. The tradition emphasizes prosperity, family wellb...', 'India', 'Andhra Pradesh, Telangana, Karnataka and Tamil Nadu.', 'Shravana month, Friday before full moon.', '1+ days', 'published', 'Varalakshmi Vratam is a South Indian observance dedicated to Goddess Lakshmi in her auspicious form. The tradition emphasizes prosperity, family wellbeing and devotion. Women commonly observe the vrata and prepare an elaborately decorated representation of Lakshmi.', 'Seeking Lakshmi''s blessings for prosperity and family welfare. Important women''s festival in South India.', 'Kalasha decoration, vrata and family puja.', 'Lakshmi puja, kalasha worship and sacred-thread ceremonies.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (44, 1, 'Krishna Janmashtami', 'Festival', 'Janmashtami celebrates the birth of Krishna according to Hindu Vaishnava tradition. The Krishna narrative describes his birth in Mathura and his later...', 'India', 'Mathura-Vrindavan Janmashtami, Maharashtra Dahi Handi, Gujarat and South Indian Krishna traditions.', 'Krishna Paksha Ashtami of Bhadrapada.', '1+ days', 'published', 'Janmashtami celebrates the birth of Krishna according to Hindu Vaishnava tradition. The Krishna narrative describes his birth in Mathura and his later childhood in Gokul and Vrindavan. The festival remembers Krishna''s divine life, teachings and role in restoring dharma.', 'Celebration of Krishna''s birth. Major festival influencing Indian music, dance, theatre and literature.', 'Midnight worship, Dahi Handi, devotional singing and Krishna plays.', 'Fasting, midnight puja, bathing the infant Krishna image and offering butter/milk.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (45, 1, 'Hartalika Teej', 'Festival', 'Hartalika Teej is associated with Parvati''s devotion and her desire to marry Shiva. According to traditional narratives, Parvati undertook severe pena...', 'India', 'Rajasthan, Uttar Pradesh, Bihar, Madhya Pradesh and Nepal.', 'Shravan/Bhadrapada depending on regional calendar.', '1+ days', 'published', 'Hartalika Teej is associated with Parvati''s devotion and her desire to marry Shiva. According to traditional narratives, Parvati undertook severe penance to attain Shiva. The festival therefore became associated with marital devotion, prayer and the wellbeing of family life.', 'Devotion to Parvati and Shiva. Important women''s festival in North and Western India.', 'Fasting, mehendi, swings, songs and gatherings.', 'Shiva-Parvati worship and fasting.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (46, 1, 'Vishwakarma Puja', 'Festival', 'Vishwakarma Puja honours Vishwakarma, traditionally regarded as the divine architect and craftsman. The observance developed strong connections with a...', 'India', 'West Bengal, Odisha, Bihar, Jharkhand and industrial areas.', 'Usually Kanya Sankranti, September.', '1+ days', 'published', 'Vishwakarma Puja honours Vishwakarma, traditionally regarded as the divine architect and craftsman. The observance developed strong connections with artisans, mechanics, engineers, factories and people working with tools and machines. It represents respect for skill, craftsmanship and productive work.', 'Blessings for tools, machines, craftsmanship and work. Especially important among workers, artisans, engineers and industrial communities.', 'Cleaning and decorating tools and machinery.', 'Vishwakarma Puja and offerings to tools.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (47, 1, 'Durga Puja', 'Festival', 'Durga Puja is one of the most important Hindu festivals of Bengal and eastern India. It celebrates Goddess Durga''s victory over Mahishasura in the tra...', 'India', 'West Bengal, Assam, Odisha and Tripura.', 'Ashvin; usually September/October.', '1+ days', 'published', 'Durga Puja is one of the most important Hindu festivals of Bengal and eastern India. It celebrates Goddess Durga''s victory over Mahishasura in the traditional narrative. In modern Bengal, the festival also developed into a major artistic and community event involving elaborate pandals, sculpture, music and cultural programmes.', 'Victory of Durga over Mahishasura. Major Bengali cultural festival.', 'Idol creation, pandals, puja, cultural programmes and immersion.', 'Bodhan, Pushpanjali, Sandhi Puja and immersion.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (48, 1, 'Govardhan Puja', 'Festival', 'Govardhan Puja is associated with Krishna''s protection of the people of Vrindavan according to Vaishnava tradition. The narrative describes Krishna en...', 'India', 'Strongest in Braj; also observed in Gujarat and Vaishnava communities.', 'Kartika Shukla Pratipada.', '1+ days', 'published', 'Govardhan Puja is associated with Krishna''s protection of the people of Vrindavan according to Vaishnava tradition. The narrative describes Krishna encouraging the community to honour Govardhan Hill and nature rather than relying solely on Indra''s worship. After heavy rain, Krishna is said to have lifted Govardhan Hill to protect the people.', 'Devotion to Krishna and reverence for nature. Celebrates community, cattle and agricultural life.', 'Govardhan representation made from food or natural materials, cattle worship.', 'Govardhan Puja, circumambulation and offerings.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (49, 1, 'Bhai Dooj', 'Festival', 'Bhai Dooj celebrates the relationship between brothers and sisters. Hindu traditions connect it with different narratives, including Yama and Yamuna. ...', 'India', 'Bhai Dooj, Bhai Phota, Yama Dwitiya and Bhai Tika.', 'Kartika Shukla Dwitiya.', '1+ days', 'published', 'Bhai Dooj celebrates the relationship between brothers and sisters. Hindu traditions connect it with different narratives, including Yama and Yamuna. The festival developed as a family observance involving blessings, affection and hospitality.', 'Blessings and protection between siblings. Strengthens family relationships.', 'Sister applies tilak, performs aarti and offers food.', 'Tilak, prayers and gift exchange.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (50, 1, 'Karthigai Deepam', 'Festival', 'Karthigai Deepam is an important Tamil festival of lamps associated with Shiva and Murugan traditions. In Arunachala tradition, the festival is partic...', 'India', 'Especially prominent in Tamil Nadu and Tamil communities.', 'Karttikai month, Karttikai Deepam day.', '1+ days', 'published', 'Karthigai Deepam is an important Tamil festival of lamps associated with Shiva and Murugan traditions. In Arunachala tradition, the festival is particularly associated with the divine column of fire and Shiva''s manifestation as an infinite flame. The lighting of lamps represents divine light and spiritual illumination.', 'Worship of Shiva and divine light. Important Tamil festival emphasizing lamps, family and temple culture.', 'Lighting rows of oil lamps and visiting temples.', 'Deepam lighting and temple worship.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (51, 1, 'Vaikuntha Ekadashi', 'Festival', 'Vaikuntha Ekadashi is an important Vaishnava observance associated with Vishnu and the symbolic opening of Vaikuntha Dwaram. Devotees observe fasting ...', 'India', 'Tirupati, Srirangam, Kanchipuram and other Vishnu temples have distinct practices.', 'Margashirsha/Pausha depending on regional calendar.', '1+ days', 'published', 'Vaikuntha Ekadashi is an important Vaishnava observance associated with Vishnu and the symbolic opening of Vaikuntha Dwaram. Devotees observe fasting and spend the day in prayer. Major Vishnu temples have elaborate celebrations.', 'Devotion to Vishnu and spiritual liberation. Major temple festival among Vaishnava communities.', 'Fasting, night vigil, temple visits and devotional singing.', 'Vishnu Puja, temple darshan and passage through symbolic Vaikuntha gates.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (52, 1, 'Bathukamma', 'Festival', 'Bathukamma is a Telangana floral festival centred on flowers, women''s community participation and regional cultural identity. The festival developed f...', 'India', 'Telangana districts have local floral and culinary practices.', 'Ashvin/Navaratri season; dates vary annually.', '1+ days', 'published', 'Bathukamma is a Telangana floral festival centred on flowers, women''s community participation and regional cultural identity. The festival developed from Telangana''s local traditions and seasonal relationship with nature. Women arrange flowers into distinctive layered formations and celebrate with songs and circular dances.', 'Associated with feminine divinity and prayers for wellbeing. Major symbol of Telangana cultural identity.', 'Creating Bathukamma flower arrangements and community gatherings.', 'Floral offering, singing and immersion.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (53, 1, 'Vishu', 'Festival', 'Vishu is the traditional New Year/seasonal observance of Kerala and is centred around the Vishukkani, the auspicious arrangement viewed first in the m...', 'India', 'Kerala districts and Malayali communities abroad.', 'Medam month; usually April 14/15.', '1+ days', 'published', 'Vishu is the traditional New Year/seasonal observance of Kerala and is centred around the Vishukkani, the auspicious arrangement viewed first in the morning. The festival emphasizes prosperity, renewal and hope for the coming cycle.', 'Auspicious beginning and worship. Important Kerala family and cultural festival.', 'Vishukkani, Vishukkaineettam and festive meals.', 'Viewing Vishukkani and temple worship.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (54, 1, 'Bihu', 'Festival', 'Bihu refers to a group of seasonal festivals central to Assamese culture. Rongali/Bohag Bihu marks the Assamese New Year and spring/agricultural seaso...', 'India', 'Rongali/Bohag, Bhogali/Magh and Kongali/Kati Bihu.', 'Bohag Bihu usually April; other Bihus occur in different seasons.', '1+ days', 'published', 'Bihu refers to a group of seasonal festivals central to Assamese culture. Rongali/Bohag Bihu marks the Assamese New Year and spring/agricultural season. The celebration combines farming traditions, family gatherings, music, dance and community participation.', 'Seasonal thanksgiving and local religious practices. One of Assam''s strongest cultural identities.', 'Bihu songs, dancing, feasting and wearing traditional clothes.', 'Community and family observances.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (55, 1, 'Bonalu', 'Festival', 'Bonalu is a Telangana regional festival dedicated primarily to Goddess Mahankali. The festival is associated with offerings of cooked rice and other f...', 'India', 'Secunderabad, Hyderabad and Telangana districts.', 'Ashadha month; usually June/July.', '1+ days', 'published', 'Bonalu is a Telangana regional festival dedicated primarily to Goddess Mahankali. The festival is associated with offerings of cooked rice and other foods carried in decorated pots. It developed as a distinctive community and devotional tradition of Telangana.', 'Worship of Mahankali and prayers for protection and wellbeing. Major Telangana cultural and community festival.', 'Bonam offerings, processions and temple celebrations.', 'Mahankali Puja, Bonam offering and processions.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (56, 1, 'Karthika Purnima', 'Festival', 'Karthika Purnima is a sacred full-moon observance in the Hindu calendar with strong associations with Shiva, Vishnu and sacred rivers. In some traditi...', 'India', 'Odisha''s Boita Bandana, Varanasi Dev Deepawali and Kartika Deepam traditions.', 'Kartika Purnima.', '1+ days', 'published', 'Karthika Purnima is a sacred full-moon observance in the Hindu calendar with strong associations with Shiva, Vishnu and sacred rivers. In some traditions it is connected with Tripurari/Tripurantaka, the destruction of the demon cities of Tripura by Shiva. The day is also important for pilgrimage and lighting lamps.', 'Worship, pilgrimage, bathing and lamp offerings. Major sacred-season observance.', 'Deepam lighting, river bathing and temple visits.', 'Deepa Dana, puja and sacred bathing.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (57, 1, 'Shigmo', 'Festival', 'Shigmo is a spring festival of Goa with connections to Hindu religious traditions, agricultural cycles and Goan folk culture. It combines processions,...', 'India', 'Celebrations differ across Goa''s villages and communities.', 'Phalguna period; usually March.', '1+ days', 'published', 'Shigmo is a spring festival of Goa with connections to Hindu religious traditions, agricultural cycles and Goan folk culture. It combines processions, colour celebrations, traditional music, dance and decorated floats. The festival reflects the region''s distinctive cultural history.', 'Seasonal worship and local Hindu traditions. Major Goan folk and cultural festival.', 'Processions, colours, folk performances and floats.', 'Temple visits and regional religious observances.', '2026-10-08 06:35:12', '2026-10-08 06:35:12'),
  (58, 3, 'Epiphany', 'Holy Day', 'Epiphany celebrates the manifestation or revelation of Jesus Christ to the world. In Western Christianity, it is particularly associated with the visi...', 'Global', 'Different churches emphasize different manifestations of Christ, including the Magi, Jesus'' baptism ', 'Gregorian Month: January
Typical Date: January 6
2026 Date: January 6, 2026 in t', '1+ days', 'published', 'Epiphany celebrates the manifestation or revelation of Jesus Christ to the world. In Western Christianity, it is particularly associated with the visit of the Magi, or wise men, who came to honor the child Jesus and presented gifts.
The Gospel of Matthew describes the Magi following a star and eventually visiting Jesus. Their journey became an important Christian symbol of Christ being revealed not only to one people but to the nations.

Biblical origin: Matthew 2:1–12.
Associated with the Magi and their visit to Jesus.', 'Revelation of Christ.
Recognition of Jesus by the nations.
Associated with divine manifestation.

In many countries Epiphany marks the conclusion of the Christmas celebrations.', 'Church services
Blessing of homes
Processions
Nativity celebrations
Three Kings traditions', 'Prayer
Eucharistic celebration
Scripture reading
Blessing ceremonies', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (59, 3, 'Ash Wednesday', 'Holy Day', 'Ash Wednesday begins the season of Lent in the Western Christian tradition. Lent is traditionally a period of prayer, fasting, repentance and preparat...', 'Global', 'Practices differ among Catholic, Anglican, Lutheran and other Western traditions. Eastern Orthodox c', 'Gregorian Month: February/March
2026 Date: February 18, 2026
Duration: Marks the', '1+ days', 'published', 'Ash Wednesday begins the season of Lent in the Western Christian tradition. Lent is traditionally a period of prayer, fasting, repentance and preparation for Easter.
The use of ashes represents human mortality and repentance. Christians are reminded of the temporary nature of earthly life and encouraged to turn toward God.

Developed from ancient Christian penitential practices.
Connected with biblical traditions of repentance using ashes.', 'Beginning of Lent.
Repentance.
Fasting.
Spiritual preparation for Easter.

It is widely observed through church services and the marking of ashes on the forehead.', 'Receiving ashes
Fasting
Prayer
Giving to charity
Giving up certain foods or habits', 'Ashes placed on forehead
Prayer
Scripture readings
Church service', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (60, 3, 'Palm Sunday', 'Holy Day', 'Palm Sunday commemorates Jesus'' entry into Jerusalem shortly before his crucifixion. According to the Gospels, crowds welcomed Jesus by placing branch...', 'Global', 'In India, churches may use locally available palm or other branches where traditional palms are unav', 'Gregorian Month: March/April
2026 Date: March 29, 2026
Duration: One day; begins', '1+ days', 'published', 'Palm Sunday commemorates Jesus'' entry into Jerusalem shortly before his crucifixion. According to the Gospels, crowds welcomed Jesus by placing branches on the road and praising him.
The event became the beginning of Holy Week in the Christian liturgical calendar. The celebration combines joy at Jesus'' arrival with anticipation of his suffering and death.

Biblical accounts: Matthew 21, Mark 11, Luke 19 and John 12.', 'Commemorates Jesus'' entry into Jerusalem.
Begins Holy Week.
Leads toward the Passion and Resurrection.

Palm Sunday processions are important community events in many Christian societies.', 'Palm processions
Palm crosses
Church services
Passion readings', 'Blessing of palms
Procession
Gospel reading
Eucharistic service', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (61, 3, 'Maundy Thursday', 'Holy Day', 'Maundy Thursday commemorates the Last Supper of Jesus with his disciples before his arrest and crucifixion. During the Last Supper, Jesus washed the d...', 'Global', 'Foot-washing ceremonies are especially visible in Catholic and some Anglican traditions.', 'Gregorian Month: April in 2026
2026 Date: April 2, 2026
Duration: One day.
USCCB', '1+ days', 'published', 'Maundy Thursday commemorates the Last Supper of Jesus with his disciples before his arrest and crucifixion. During the Last Supper, Jesus washed the disciples'' feet and taught them about humility and service.
Christian tradition connects the day with the institution of the Eucharist and Jesus'' commandment to love and serve others.

New Testament accounts of the Last Supper.
"Maundy" derives from the Latin mandatum, meaning commandment.', 'Last Supper.
Eucharist.
Servant leadership.
Love and service.

It is a deeply reflective day during Holy Week.', 'Washing of feet
Evening Mass/service
Eucharistic adoration
Prayer', 'Foot washing
Eucharist
Scripture readings
Processions', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (62, 3, 'Holy Saturday', 'Holy Day', 'Holy Saturday commemorates the day between Jesus'' crucifixion and Resurrection. It is traditionally understood as a period of waiting and mourning bef...', 'Global', 'The Easter Vigil is especially significant in Catholic, Anglican and some other Western traditions.', '2026 Date: April 4, 2026
Duration: One day, ending with the Easter Vigil. [USCCB', '1+ days', 'published', 'Holy Saturday commemorates the day between Jesus'' crucifixion and Resurrection. It is traditionally understood as a period of waiting and mourning before Easter.
The day reaches its climax in the Easter Vigil, when Christians celebrate the Resurrection.

Biblical events surrounding Jesus'' burial and Resurrection.', 'Waiting for the Resurrection.
Reflection.
Preparation for Easter.

Families and churches prepare for the Easter celebration.', 'Easter Vigil
Baptisms
Church decoration
Prayer', 'Lighting the Paschal candle
Scripture readings
Baptism
Eucharist', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (63, 3, 'Easter Sunday', 'Holy Day', 'Easter is the central celebration of Christianity. It commemorates the Resurrection of Jesus Christ from the dead after his crucifixion.
According to ...', 'Global', 'Easter customs differ significantly between Europe, India, Africa, Latin America and other Christian', 'Gregorian Month: March/April
2026 Date: April 5, 2026
Duration: Easter Sunday be', '1+ days', 'published', 'Easter is the central celebration of Christianity. It commemorates the Resurrection of Jesus Christ from the dead after his crucifixion.
According to the New Testament, women discovered the empty tomb and encountered angels who announced that Jesus had risen. The disciples subsequently experienced the risen Christ. The Resurrection became the foundation of Christian faith and preaching.
Over the centuries Easter developed into a major Christian season involving worship, baptism, family gatherings, special meals and cultural celebrations.

Biblical accounts: Matthew 28, Mark 16, Luke 24 and John 20.', 'Resurrection of Jesus.
Victory over death.
Hope of eternal life.
Central event of Christian faith.

Easter is celebrated with church services, family gatherings, food, music and community activities.', 'Easter Sunday service
Easter eggs
Egg hunts
New clothes
Family meals
Greeting "Happy Easter"', 'Easter Vigil
Baptism
Eucharist
Sunrise services
Prayer', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (64, 3, 'Ascension of Jesus', 'Holy Day', 'The Ascension commemorates the biblical account of Jesus being taken into heaven after his Resurrection. The Acts of the Apostles describes Jesus appe...', 'Global', 'Some churches celebrate it on Thursday, while others transfer the observance to the following Sunday', 'Gregorian Month: May in 2026
2026 Date: May 14, 2026 in the traditional Thursday', '1+ days', 'published', 'The Ascension commemorates the biblical account of Jesus being taken into heaven after his Resurrection. The Acts of the Apostles describes Jesus appearing to his disciples and then being taken up.
The event marks a transition in the Christian story. Jesus'' earthly ministry comes to an end while the disciples receive a mission to continue spreading the Gospel.

Acts 1:1–11
Luke 24:50–53', 'Jesus'' return to the Father.
Completion of his earthly ministry.
Preparation for Pentecost.

It is an important feast in many traditional Christian denominations.', 'Church service
Prayer
Processions', 'Eucharist
Bible readings
Prayer', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (65, 3, 'Trinity Sunday', 'Holy Day', 'Trinity Sunday focuses on the Christian doctrine of the Trinity: Father, Son and Holy Spirit. The doctrine developed through centuries of Christian re...', 'Global', 'Different denominations explain the Trinity using different theological traditions.', '2026 Date: May 31, 2026
Usually celebrated on the Sunday after Pentecost.', '1+ days', 'published', 'Trinity Sunday focuses on the Christian doctrine of the Trinity: Father, Son and Holy Spirit. The doctrine developed through centuries of Christian reflection and theological discussion concerning the identity of God and Jesus Christ and the Holy Spirit.
The feast gives Christians an opportunity to focus specifically on the mystery of God''s threefold identity.

Developed within the Christian liturgical tradition.', 'Father
Son
Holy Spirit
One God in Trinitarian Christian theology

The Trinity is reflected in Christian prayers, worship and symbols.', 'Trinity-focused sermons
Church services
Hymns', 'Eucharist
Prayer
Scripture readings', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (66, 3, 'Feast of the Assumption', 'Holy Day', 'The Assumption commemorates the Christian belief, particularly in Catholic tradition, that Mary, the mother of Jesus, was taken into heavenly glory at...', 'Global', 'Celebrations vary among Catholic communities; it is not observed as a universal feast in all Christi', 'Gregorian Month: August
Typical Date: August 15
2026 Date: August 15, 2026. [USC', '1+ days', 'published', 'The Assumption commemorates the Christian belief, particularly in Catholic tradition, that Mary, the mother of Jesus, was taken into heavenly glory at the end of her earthly life.
The belief developed through early Christian devotion and theological tradition and became formally defined as Catholic doctrine in 1950.

Ancient Christian Marian tradition.
Formally defined as Catholic dogma in 1950.', 'Honors Mary.
Emphasizes hope in resurrection and eternal life.
Important Marian feast.

It is celebrated particularly strongly in Catholic communities.', 'Processions
Marian prayers
Church festivals
Flower decorations', 'Mass
Rosary
Marian prayers
Processions', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (67, 3, 'All Saints'' Day', 'Holy Day', 'All Saints'' Day honors all saints, known and unknown, who are believed to share in the glory of heaven. The celebration developed from early Christian...', 'Global', 'Catholic, Anglican and Orthodox traditions have different calendars and saints'' observances.', 'Gregorian Month: November
Typical Date: November 1
2026 Date: November 1, 2026 i', '1+ days', 'published', 'All Saints'' Day honors all saints, known and unknown, who are believed to share in the glory of heaven. The celebration developed from early Christian traditions of honoring martyrs and saints.
Over time, the observance expanded beyond individually named saints to include the entire community of saints.

Early Christian remembrance of martyrs and saints.
Developed into a universal feast in Western Christianity.', 'Honors saints.
Celebrates Christian holiness.
Encourages believers to follow examples of faith.

In many countries, it is connected with remembrance of deceased relatives, although All Souls'' Day is distinct.', 'Church services
Visiting cemeteries
Lighting candles
Prayers', 'Mass/service
Prayers for saints
Liturgical readings', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (68, 3, 'All Souls'' Day', 'Holy Day', 'All Souls'' Day is dedicated particularly to remembering and praying for the dead. The practice developed from the Christian tradition of praying for d...', 'Global', 'Practices differ widely. In Latin America, related traditions include Día de los Muertos, although t', 'Gregorian Month: November
Typical Date: November 2
2026 Date: November 2, 2026', '1+ days', 'published', 'All Souls'' Day is dedicated particularly to remembering and praying for the dead. The practice developed from the Christian tradition of praying for departed believers.
It is closely connected with All Saints'' Day but has a different focus: All Saints celebrates the saints in glory, while All Souls emphasizes remembrance and prayer for the faithful departed.

Developed from Christian traditions of prayer for the deceased.', 'Remembrance of the dead.
Prayer for departed souls.
Hope of resurrection.

Families may visit cemeteries and remember deceased relatives.', 'Cemetery visits
Lighting candles
Flowers
Memorial services', 'Prayers
Mass/services
Memorial ceremonies', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (69, 3, 'Feast of the Annunciation', 'Holy Day', 'The Annunciation commemorates the biblical announcement by the angel Gabriel to Mary that she would become the mother of Jesus.
According to the Gospe...', 'Global', 'Celebrated particularly strongly in Catholic, Orthodox and Anglican traditions.', 'Gregorian Month: March
Typical Date: March 25
2026 Date: March 25, 2026. [USCCB]', '1+ days', 'published', 'The Annunciation commemorates the biblical announcement by the angel Gabriel to Mary that she would become the mother of Jesus.
According to the Gospel of Luke, Mary accepted the divine message and became central to the Christian story of the Incarnation.

Luke 1:26–38.', 'Incarnation of Christ.
Mary''s acceptance of God''s will.
Beginning of the earthly story of Jesus.

The event is frequently represented in Christian art.', 'Church services
Marian prayers
Art exhibitions', 'Mass
Scripture reading
Marian prayers', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (70, 3, 'Feast of the Transfiguration', 'Holy Day', 'The Transfiguration commemorates the event in which Jesus went up a mountain with Peter, James and John and was transfigured before them. The Gospel a...', 'Global', 'Particularly important in Eastern Orthodox Christianity as well as Catholic and other traditions.', 'Gregorian Month: August
Typical Date: August 6
2026 Date: August 6, 2026', '1+ days', 'published', 'The Transfiguration commemorates the event in which Jesus went up a mountain with Peter, James and John and was transfigured before them. The Gospel accounts describe Jesus appearing in glory, with Moses and Elijah appearing alongside him.
The event is understood as a revelation of Jesus'' divine identity and prepares the disciples for his coming suffering and death.

Matthew 17:1–8
Mark 9:2–8
Luke 9:28–36', 'Revelation of Christ''s divine glory.
Strengthening of the disciples'' faith.

The event has inspired Christian paintings, icons and hymns.', 'Church services
Scripture readings
Icon veneration in Eastern Christianity', 'Eucharist
Prayer
Scripture readings', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (71, 3, 'Feast of Saint Thomas the Apostle', 'Holy Day', 'Saint Thomas is traditionally remembered in Indian Christian history as the apostle who brought Christianity to the Malabar Coast. Indian Christian tr...', 'Global', 'Particularly significant in Kerala and Tamil Nadu.', 'Gregorian Month: July
Typical Date: July 3
2026 Date: July 3, 2026
Different Chr', '1+ days', 'published', 'Saint Thomas is traditionally remembered in Indian Christian history as the apostle who brought Christianity to the Malabar Coast. Indian Christian tradition, especially among Saint Thomas Christians of Kerala, associates his arrival with the first century.
According to tradition, Thomas travelled to India and established Christian communities. He is traditionally believed to have been martyred at Mylapore, in present-day Chennai. The historical details of his journey are debated, so FaithFest should clearly label the Indian mission as Christian tradition rather than presenting every detail as historically certain.

Christian tradition concerning Apostle Thomas.
Strongly associated with Saint Thomas Christians of India.', 'Honors Apostle Thomas.
Celebrates the spread of Christianity.
Particularly important to Indian Christian communities.

Saint Thomas Christianity forms an important part of Kerala''s religious and cultural history.', 'Church services
Processions
Pilgrimage
Prayer', 'Mass/service
Novenas
Veneration of Saint Thomas', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (72, 3, 'Advent', 'Holy Day', 'Advent is the season of preparation before Christmas. The word comes from the Latin adventus, meaning "coming" or "arrival."
The season developed as C...', 'Global', 'Duration and liturgical customs vary by denomination.', 'Gregorian Month: November/December
2026 Start: November 29, 2026
Duration: Four ', '1+ days', 'published', 'Advent is the season of preparation before Christmas. The word comes from the Latin adventus, meaning "coming" or "arrival."
The season developed as Christians prepared spiritually for Christmas while also reflecting on the Christian belief in Christ''s future return. Advent therefore has both a remembrance of Christ''s first coming and an expectation of his second coming.

Developed in the Western Christian liturgical tradition.', 'Preparation for Christmas.
Hope.
Waiting.
Expectation of Christ''s return.

Advent calendars and Advent wreaths are popular cultural traditions.', 'Advent wreath
Advent calendar
Prayer
Scripture reading
Christmas preparation', 'Church services
Lighting Advent candles
Prayer', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (73, 3, 'Feast of the Immaculate Conception', 'Holy Day', 'The Immaculate Conception is a Catholic feast concerning Mary. It refers to the Catholic belief that Mary was preserved from original sin from the mom...', 'Global', 'Particularly important in Catholic countries and Marian pilgrimage centers.', 'Gregorian Month: December
Typical Date: December 8
2026 Date: December 8, 2026. ', '1+ days', 'published', 'The Immaculate Conception is a Catholic feast concerning Mary. It refers to the Catholic belief that Mary was preserved from original sin from the moment of her conception.
It is important to clarify that the term Immaculate Conception refers to Mary''s conception, not Jesus'' conception. The doctrine was formally defined by the Catholic Church in 1854.

Catholic Marian theological tradition.
Defined as Catholic dogma in 1854.', 'Honors Mary.
Emphasizes Mary''s special role in salvation history.

Important in many Catholic countries and communities.', 'Mass
Marian processions
Rosary
Church decorations', 'Eucharist
Marian prayers
Processions', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (74, 3, 'Corpus Christi', 'Holy Day', 'Corpus Christi celebrates the Christian belief in the Eucharist and the presence of Christ in the sacrament. The feast developed in medieval Western C...', 'Global', 'Particularly elaborate in Catholic communities in Europe, Latin America and India.', 'Gregorian Month: May/June
2026 Date: June 4, 2026 in the traditional Thursday ob', '1+ days', 'published', 'Corpus Christi celebrates the Christian belief in the Eucharist and the presence of Christ in the sacrament. The feast developed in medieval Western Christianity and became an important Eucharistic celebration.
The feast provides an opportunity for Christians, particularly Catholics, to publicly express devotion to the Eucharist.

Medieval Western Christian tradition.
Connected to Eucharistic theology.', 'Honors the Eucharist.
Focuses on the Body and Blood of Christ.

Corpus Christi processions are major public religious events in many Catholic countries.', 'Eucharistic processions
Church services
Flower carpets
Community celebrations', 'Mass
Eucharistic adoration
Procession with the Blessed Sacrament', '2026-10-08 06:59:34', '2026-10-08 06:59:34'),
  (75, 2, 'Laylat al-Qadr', 'Festival', 'Laylat al-Qadr, the Night of Decree or Night of Power, is one of the most sacred nights of Ramadan.
Islamic tradition associates this night with the b...', 'Global', 'Many Muslims observe the 27th night especially strongly, while Islamic sources describe Laylat al-Qa', 'Hijri Month: Ramadan
Commonly observed: 27 Ramadan
Expected India 2026: March 17, 2026
Important: The exact night is not', 'Varies', 'published', 'Laylat al-Qadr, the Night of Decree or Night of Power, is one of the most sacred nights of Ramadan.
Islamic tradition associates this night with the beginning of the revelation of the Qur''an to Prophet Muhammad. The Qur''an describes Laylat al-Qadr as a night better than a thousand months.

Mentioned in Surah Al-Qadr.
Associated with the revelation of the Qur''an.', 'Extremely sacred night.
Night of worship and prayer.
Associated with Qur''an revelation.
Seeking Allah''s mercy and forgiveness.

Muslims may spend much of the night in mosques or private worship.', 'Night prayers
Qur''an recitation
Dua
Charity
Dhikr

Event Time:
Begins: At Maghrib/sunset.
Main observance: Throughout the night.
Ends: At Fajr/dawn.
This sunset-to-dawn timing is especially important for your FaithFest app.', 'Tahajjud/Qiyam
Dua
Qur''an recitation
Dhikr
Repentance', '2026-10-08 07:20:35', '2026-10-08 07:20:35'),
  (76, 2, 'Hajj', 'Festival', 'Hajj is the annual pilgrimage to Mecca and is one of the Five Pillars of Islam for Muslims who are physically and financially able to perform it.
The ...', 'Global', 'The core Hajj rituals are standardized, although pilgrims'' cultural practices before and after Hajj ', 'Hijri Month: Dhul-Hijjah
Hijri Date: 9 Dhul-Hijjah
Expected India 2026 Day of Arafah: May 27, 2026
Duration: Main Hajj r', 'Varies', 'published', 'Hajj is the annual pilgrimage to Mecca and is one of the Five Pillars of Islam for Muslims who are physically and financially able to perform it.
The pilgrimage recalls events connected with Prophet Ibrahim, Hajar and Ismail and includes a series of sacred rites in Mecca and surrounding locations.
The Day of Arafah is the central day of Hajj, when pilgrims gather on the plain of Arafat for prayer and supplication.

Connected with Prophet Ibrahim and his family.
Established as a major Islamic pilgrimage by Prophet Muhammad.', 'One of the Five Pillars.
Symbolizes submission to Allah.
Day of Arafah is a central Hajj rite.

Hajj brings Muslims from many nations together in one pilgrimage.', 'Ihram
Tawaf
Sa''i
Standing at Arafat
Stoning the Jamarat
Qurbani

Event Time:
Wuquf at Arafat: From after midday until sunset on 9 Dhul-Hijjah.
Pilgrims spend the day in prayer, remembrance and supplication.
Exact operational times are determined by the Hajj authorities.', 'Tawaf
Sa''i
Wuquf at Arafat
Muzdalifah
Mina
Jamarat', '2026-10-08 07:20:35', '2026-10-08 07:20:35'),
  (77, 2, 'Islamic New Year — 1 Muharram', 'Festival', 'The Islamic New Year marks the beginning of a new Hijri year. The Hijri calendar is associated with the migration (Hijrah) of Prophet Muhammad and his...', 'Global', 'Some Muslim communities observe it quietly, while others organize educational or religious gathering', 'Hijri Month: Muharram
Hijri Date: 1 Muharram
Expected India 2026: June 17, 2026
Duration: One calendar-day beginning at ', 'Varies', 'published', 'The Islamic New Year marks the beginning of a new Hijri year. The Hijri calendar is associated with the migration (Hijrah) of Prophet Muhammad and his followers from Mecca to Medina.
The Islamic calendar is lunar, consisting of approximately 354–355 days. Therefore, Islamic months move through the Gregorian calendar over time.

Based on the Hijri calendar.
Era associated with the Hijrah to Medina.', 'Beginning of a new Islamic year.
Opportunity for reflection and remembrance.

Different Muslim communities mark the occasion in different ways; it is not universally treated as a festive holiday.', 'Prayer
Religious lectures
Reflection
Community gatherings

Event Time:
Islamic date begins at sunset/Maghrib.
The New Year therefore begins the evening before the corresponding Gregorian daytime date.', 'No universal special ritual is prescribed for the New Year itself.', '2026-10-08 07:20:35', '2026-10-08 07:20:35'),
  (78, 2, 'Ashura', 'Festival', 'Ashura occurs on the tenth day of Muharram. It has different historical and religious significance across Muslim traditions.
For many Sunni Muslims, A...', 'Global', 'Practices differ strongly between Sunni and Shia communities and between countries.', 'Hijri Month: Muharram
Hijri Date: 10 Muharram
Expected India 2026: June 26, 2026
Duration: One principal day, with relat', 'Varies', 'published', 'Ashura occurs on the tenth day of Muharram. It has different historical and religious significance across Muslim traditions.
For many Sunni Muslims, Ashura is associated with the fasting tradition connected with Prophet Moses and the Israelites'' deliverance from Pharaoh. In Shia Islam, Ashura is especially associated with the martyrdom of Imam Husayn ibn Ali at Karbala in 680 CE.

10 Muharram.
Biblical/Qur''anic tradition associated with Moses.
Shia historical remembrance of Karbala.', 'Fasting in many Sunni traditions.
Deep mourning and remembrance in Shia communities.

Ashura has produced diverse cultural practices across Muslim societies.', 'Fasting
Prayer
Religious gatherings
Sermons
Mourning commemorations in Shia communities

Event Time:
Islamic date begins at sunset.
Fasting, where observed, runs from Fajr to Maghrib.
Shia mourning gatherings may take place throughout the day and night.', 'Varies significantly by tradition.', '2026-10-08 07:20:35', '2026-10-08 07:20:35'),
  (79, 2, 'Mawlid al-Nabi', 'Festival', 'Mawlid al-Nabi refers to commemorations of the birth of Prophet Muhammad. The observance developed historically in Muslim societies after the earliest...', 'Global', 'South Asian Mawlid gatherings may include Urdu, Arabic, Malayalam, Tamil or other local-language dev', 'Hijri Month: Rabi al-Awwal
Common Date: 12 Rabi al-Awwal
Expected India 2026: August 26, 2026
Duration: Usually one day,', 'Varies', 'published', 'Mawlid al-Nabi refers to commemorations of the birth of Prophet Muhammad. The observance developed historically in Muslim societies after the earliest generations of Islam.
Muslim communities differ on the permissibility and manner of observing Mawlid. Some communities hold gatherings, recite poetry and discuss the Prophet''s life, while others do not observe it as a festival.

Commemoration of Prophet Muhammad''s birth.
Traditionally associated with 12 Rabi al-Awwal in many communities.', 'Remembrance of Prophet Muhammad.
Study of his life and teachings.
Expression of love and respect.

Mawlid has developed distinctive cultural traditions across South Asia, Africa, the Middle East and Southeast Asia.', 'Seerah gatherings
Religious lectures
Poetry
Nasheeds
Community meals
Charity

Event Time:
Islamic day begins at sunset.
Mawlid gatherings are commonly held after Maghrib/Isha, although exact schedules depend on the mosque/community.
There is no universal fixed clock time.', 'There is no single universally prescribed Mawlid ritual; practices vary by community.', '2026-10-08 07:20:35', '2026-10-08 07:20:35'),
  (80, 2, 'Isra and Mi''raj', 'Festival', 'Isra and Mi''raj commemorates the night journey and ascension of Prophet Muhammad. Islamic tradition describes the Isra as the journey from Mecca to Je...', 'Global', 'South Asian Muslim communities may organize special lectures and mosque programs.', 'Hijri Month: Rajab
Hijri Date: 27 Rajab
Expected India 2026: January 17, 2026
Duration: Primarily an evening/night obser', 'Varies', 'published', 'Isra and Mi''raj commemorates the night journey and ascension of Prophet Muhammad. Islamic tradition describes the Isra as the journey from Mecca to Jerusalem and the Mi''raj as the ascension through the heavens.
The event is associated with the Prophet''s spiritual journey and with the establishment of the five daily prayers in Islamic tradition.

Qur''an 17:1.
Detailed accounts appear in Hadith literature.', 'Miracle associated with Prophet Muhammad.
Connection with the five daily prayers.
Spiritual significance.

Many communities organize lectures and religious gatherings.', 'Prayer
Lectures
Qur''an recitation
Religious gatherings

Event Time:
Begins: Sunset/Maghrib.
Main observance: Night.
Ends: Dawn.
Exact mosque program times vary.', 'No single universal special ritual.', '2026-10-08 07:20:35', '2026-10-08 07:20:35'),
  (81, 2, 'Nuzul al-Qur''an', 'Festival', 'Nuzul al-Qur''an refers to the revelation of the Qur''an. In many Muslim communities, 17 Ramadan is associated with the commemoration of the Qur''an''s re...', 'Global', 'The date and level of public observance vary among Muslim communities.', 'Hijri Month: Ramadan
Common Date: 17 Ramadan
Expected India 2026: March 7, 2026
Duration: Primarily an evening/religious', 'Varies', 'published', 'Nuzul al-Qur''an refers to the revelation of the Qur''an. In many Muslim communities, 17 Ramadan is associated with the commemoration of the Qur''an''s revelation.
The Qur''an was revealed to Prophet Muhammad over approximately 23 years, beginning in the month of Ramadan according to Islamic tradition.

Ramadan.
Associated with the first revelation to Prophet Muhammad.', 'Revelation of the Qur''an.
Guidance for humanity.
Central scripture of Islam.

Communities may organize Qur''an recitation and educational programs.', 'Qur''an recitation
Religious lectures
Prayer
Charity

Event Time:
Islamic date begins at sunset.
Programs may occur after Maghrib or Isha.
No universal clock time.', 'No universal special ritual separate from Ramadan worship.', '2026-10-08 07:20:35', '2026-10-08 07:20:35'),
  (82, 3, 'Feast of the Epiphany', 'Holy Day', 'A major Christian observance commemorating the revelation of Jesus to the Gentiles represented by the Magi, his baptism, and his first miracle.', 'Global', 'Global Christian communities', 'January 6', '1 day', 'published', 'Originating in the Eastern Christian tradition in the 3rd century, Epiphany spread across the Christian world.', 'Signifies the physical manifestation of Jesus Christ to the world.', 'Marked by festive church services, blessing of homes and water, and gift exchanges in various traditions.', 'Celebrated worldwide with king cakes, singing, and chalking doors with traditional Epiphany blessings.', '2026-10-11 07:18:25', '2026-10-11 07:18:25');
SELECT setval(pg_get_serial_sequence('public.festivals', 'id'), COALESCE(max(id), 1)) FROM public.festivals;
