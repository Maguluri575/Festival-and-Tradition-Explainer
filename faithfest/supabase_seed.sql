-- ============================================================================
-- FAITHFEST SUPABASE DATA SEED
-- Full datasets: Religions, Festivals, Traditions, Foods, Music, Sites & Quizzes
-- ============================================================================

-- All parent records (religions, festivals) are inserted before dependent records.

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

-- Table: festival_history (54 rows)
INSERT INTO public.festival_history (id, festival_id, period, title, description, source_id) VALUES
  (1, 1, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (2, 1, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (3, 1, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (4, 2, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (5, 2, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (6, 2, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (7, 3, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (8, 3, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (9, 3, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (10, 4, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (11, 4, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (12, 4, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (13, 5, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (14, 5, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (15, 5, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (16, 6, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (17, 6, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (18, 6, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (19, 7, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (20, 7, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (21, 7, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (22, 8, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (23, 8, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (24, 8, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (25, 9, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (26, 9, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (27, 9, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (28, 10, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (29, 10, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (30, 10, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (31, 11, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (32, 11, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (33, 11, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (34, 12, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (35, 12, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (36, 12, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (37, 13, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (38, 13, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (39, 13, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (40, 14, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (41, 14, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (42, 14, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (43, 15, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (44, 15, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (45, 15, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (46, 16, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (47, 16, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (48, 16, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (49, 17, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (50, 17, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (51, 17, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL),
  (52, 18, 'Origins', 'Early development', 'Historical details vary by region and tradition; consult the cited source.', NULL),
  (53, 18, 'Regional development', 'Regional traditions', 'Practices developed differently across communities and places.', NULL),
  (54, 18, 'Modern era', 'Contemporary celebration', 'Modern celebrations combine inherited traditions with local practices.', NULL);
SELECT setval(pg_get_serial_sequence('public.festival_history', 'id'), COALESCE(max(id), 1)) FROM public.festival_history;

-- Table: festival_regions (78 rows)
INSERT INTO public.festival_regions (id, festival_id, country, region, rituals, foods, clothing, music, decorations, celebration_style) VALUES
  (1, 1, 'India', 'North India—Rama tradition; South India—Naraka Chaturdashi; Gujarat—Lakshmi Puja/New Year traditions; West India—Govardhan/Bali traditions.', 'Lakshmi-Ganesha Puja, diya lighting and family prayers.', 'Ladoo, jalebi, kaju katli, murukku, mixture and regional sweets.', 'New sarees, lehengas, kurtas and festive clothing.', 'Bhajans, devotional and festive music. Regional folk and family/community performances.', 'Diyas, rangoli, lamps, flowers and lights.', 'Cleaning homes, lighting diyas, rangoli, gifts, sweets and fireworks where permitted.'),
  (2, 2, 'India', 'Tamil Nadu has the four-day Pongal cycle; diaspora Tamil communities adapt celebrations to local conditions.', 'Sun worship, Pongal offering, cattle worship and ceremonial cooking.', 'Sakkarai Pongal, Ven Pongal, sugarcane, coconut, rice and traditional Tamil dishes.', 'Veshti, saree, pavadai, dhavani and traditional Tamil clothing.', 'Nadaswaram, folk songs and devotional music. Karagattam, Kummi and regional folk dances.', 'Kolam, sugarcane, turmeric plants, flowers and decorated pots.', 'Cooking Pongal outdoors, drawing kolam, decorating cattle, family gatherings and visiting relatives.'),
  (3, 3, 'India', 'Braj Holi, Lathmar Holi, Dol Jatra, Shigmo and regional spring celebrations.', 'Holika Dahan, prayers and community celebrations.', 'Gujiya, thandai, malpua, dahi vada and regional sweets.', 'White clothing is commonly worn for colour celebrations.', 'Dhol, Holi folk songs and devotional music. Folk dancing and community dance.', 'Bonfires, colours, flowers and festive decorations.', 'Playing with colours, Holika Dahan, visiting friends and exchanging sweets.'),
  (4, 4, 'India', 'Celebrated throughout India with differences in rituals and temple traditions.', 'Shiva Lingam abhishekam, offering bilva leaves, milk and water.', 'Fruits, milk, sabudana dishes and fasting foods.', 'Traditional clothing, often white or simple devotional attire.', 'Shiva bhajans, chants and devotional music. Classical dance performances dedicated to Shiva.', 'Flowers, lamps, temple decorations and Shiva symbols.', 'Fasting, night vigil, temple visits and chanting.'),
  (5, 5, 'India', 'Global Muslim communities', '', 'Regional sweets, dates and festive dishes', 'Regional traditional clothing', 'Nasheeds and regional music where culturally appropriate', 'Homes, mosques and public spaces may be decorated differently by region', 'Communal prayers, Fitra, family visits, festive meals and greetings.'),
  (6, 6, 'India', 'India: community Iftar, mosque gatherings and local foods.
Middle East: large communal Iftars and la', 'Five daily prayers
Fasting from dawn to sunset
Taraweeh
Dua
Qur''an recitation
Zakat and Sadaqah', 'Dates
Haleem
Biryani
Samosa
Pakora
Fruit
Rooh Afza/sharbat
Regional Iftar dishes', 'Kurta-pajama
Salwar kameez
Abaya
Thobe
Hijab
Regional traditional clothing', 'Islamic religious practice generally emphasizes Qur''an recitation, nasheeds and devotional vocal traditions rather than a universal festival music tradition.
Dance is not a universal part of Ramadan religious observance.', 'Ramadan lanterns
Crescent and star
Mosque lights
Islamic calligraphy
Decorative lights
Crescent moon
Star
Lantern
Qur''an
Prayer mat', 'Suhoor
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
For example, Ramadan 2026 timetables show Chennai''s first-day Suhoor/Fajr around 5:18 AM and Iftar/Maghrib around 6:16 PM, illustrating why FaithFest should calculate times by location rather than storing one universal time. [Quran Gallery](https://qurangallery.com/prayer/calendar/ramadan-2026/india?utm_source=chatgpt.com)'),
  (7, 7, 'India', 'Global Muslim communities', '', 'Meat dishes, rice dishes and regional sweets', 'Festive regional clothing', 'Religious recitation and regional cultural music', 'Mosques, homes and community spaces may be prepared for gatherings', 'Sacrificial meat is shared among family, friends, and the less fortunate, with a third reserved for those in need.'),
  (8, 8, 'India', 'Global Muslim communities', '', 'Regional foods vary', 'Regional traditional attire', 'Qasida al-Burda Sharif and Nats', 'Varies by community', 'People gather in mosques for Quranic recitations, reciting the Qasida al-Burda Sharif and Nats.'),
  (9, 9, 'India', 'Global Muslim communities', '', 'Sherbet or juice distributed to the public', 'Many people dress in black as a sign of grief', 'Religious recitation and community programs', 'Varies by community', 'Tajia processions, wearing black as a sign of grief, and distributing sherbet or juice to the public.'),
  (10, 10, 'India', 'Very prominent in South Asia; less emphasized or not observed as a special night by some other Musli', 'Practices differ by community; there is no single universally prescribed ritual.', 'Halwa
Sweets
Biryani
Regional dishes', 'Traditional/modest clothing.', 'Religious recitation rather than universal festival music.
Not generally practiced.', 'Mosque lights
Candles/lights
Islamic calligraphy
Crescent
Mosque
Prayer beads', 'Night prayers
Qur''an recitation
Visiting graves
Charity
Family meals

Event Time:
Begins: Sunset/Maghrib.
Main observance: Night.
Ends: Fajr/dawn.'),
  (11, 11, 'India', 'Global Muslim communities', '', 'Regional foods and charity distribution', 'Regional traditional attire', 'Hymns and stories of the journey', 'Mosques are beautifully decorated with candles and lights', 'Mosques are decorated with candles and lights, hymns are sung, stories shared, and charity given.'),
  (12, 12, 'India', 'Kerala: elaborate church celebrations, Christmas stars and traditional foods.
Goa: Midnight Mass, cr', 'Church services
Prayer
Bible readings
Eucharistic celebration in Catholic and Orthodox traditions
Nativity prayers', 'Christmas cake
Plum cake
Roast meat
Cookies
Pulao/biryani in some Indian Christian communities
Appam and stew in Kerala
Kalkals and rose cookies in parts of India', 'Church/formal clothing
White and festive-colored clothing
Traditional Indian Christian clothing depending on region', 'Christmas carols
Choir music
Church hymns
"Silent Night"
"Joy to the World"
Regional Christmas songs
Carol-group performances
Nativity performances
Christmas community dances
Regional folk performances', 'Christmas tree
Stars
Bells
Wreaths
Lights
Nativity scene
Candles
Star of Bethlehem
Cross
Nativity scene
Christmas tree
Angel
Bells
Manger', 'Christmas Eve services
Midnight Mass
Christmas carols
Nativity displays
Christmas trees
Gift giving
Family gatherings
Charity and helping the needy'),
  (13, 13, 'India', 'Global Christian communities', '', 'Egg-based and regional festive foods, breads and sweets', 'Regional festive clothing', 'Hymns, choral music and regional traditions', 'Churches, flowers, candles and regional decorations', 'Church services, prayer, family gatherings and regional foods are common. Customs differ significantly among denominations and countries.'),
  (14, 14, 'India', 'Passion plays
Processions
Stations of the Cross
Public prayer services', 'Reading the Passion narrative
Veneration of the Cross
Three-hour prayer services in some communities
Silent prayer', 'Fasting meals
Fish or vegetarian food in communities that abstain from meat', 'Simple/modest clothing
Dark colors in some communities', 'Passion hymns
Choral music
Solemn instrumental music
Generally not performed.', 'Cross
Dark cloth
Candles
Minimal decoration
Cross
Crown of thorns
Nails
Crucifix', 'Fasting
Prayer
Stations of the Cross
Passion services
Processions'),
  (15, 15, 'India', 'Pentecostal churches may emphasize spiritual gifts and worship experiences particularly strongly.', 'Eucharist
Scripture readings
Confirmation in some traditions', 'Regional festive meals.', 'Festive church clothing.', 'Holy Spirit hymns
Gospel music
Choir performances
Some Pentecostal and African Christian communities include celebratory movement and dance.', 'Red cloth
Fire imagery
Dove
Flowers
Dove
Fire
Wind
Seven gifts of the Spirit', 'Church services
Confirmation-related celebrations
Prayer to the Holy Spirit
Community gatherings'),
  (16, 16, 'India', 'Indian celebrations commonly include sheer khurma, biryani, mosque prayers and family gatherings.', 'Ghusl/bathing
Wearing clean clothes
Eating before Eid prayer
Eid Salah
Takbir
Charity', 'Sheer khurma
Biryani
Seviyan
Kebabs
Halwa
Sweets', 'Kurta-pajama
Sherwani
Salwar kameez
Abaya
Thobe
Hijab', 'Devotional songs and regional cultural music may be present, but music is not a required Eid ritual.
Not a universal religious practice.', 'Crescent moon
Islamic calligraphy
Lights
Mosque decorations
Crescent
Prayer mat
Eid moon
Mosque', 'Eid prayer
Zakat al-Fitr
New clothes
Family visits
Gifts
Greeting others with "Eid Mubarak"

Event Time:
Eid day begins: At sunset of the previous Islamic day.
Eid prayer: After sunrise and before midday.
Exact Salah time: Depends on the local mosque and sunrise.
Important: Eid prayer should not be assigned one universal clock time in the database.'),
  (17, 17, 'India', 'Qurbani practices and traditional foods differ between countries and communities.', 'Eid Salah
Qurbani
Takbir
Dua
Distribution of meat', 'Biryani
Kebabs
Mutton curry
Haleem
Korma
Regional meat dishes', 'Kurta-pajama
Sherwani
Salwar kameez
Abaya
Thobe', 'Not a required religious component.
Not a universal religious practice.', 'Mosque decorations
Crescent
Islamic calligraphy
Lights
Sacrificial animal
Kaaba
Crescent
Prayer mat', 'Eid prayer
Qurbani
Charity
Family visits
New clothes
Sharing food

Event Time:
Eid prayer: After sunrise and before midday.
Qurbani: Begins after Eid prayer.
Qurbani period: Continues during the specified days of sacrifice.
Exact clock time depends on location.'),
  (18, 18, 'India', 'Global Muslim communities', '', 'Regional foods vary', 'Regional traditional attire', 'Religious recitation and community programs', 'Varies by community', 'Some communities hold religious gatherings, reflection or educational programs; there is no single universal celebration style.'),
  (19, 38, 'India', 'Pongal in Tamil Nadu, Uttarayan in Gujarat, Magh Bihu in Assam, Lohri in Punjab and Sankranti celebrations in Andhra Pradesh/Karnataka/Telangana.', 'Surya worship, sacred bathing, offerings of sesame and charity.', 'Til ladoo, sesame sweets, jaggery, sugarcane, pongal and regional harvest dishes.', 'Traditional regional clothing, colourful sarees, dhotis and festive wear.', 'Folk songs and devotional music. Regional folk dances.', 'Rangoli, kolam, sugarcane and harvest decorations.', 'Kite flying, holy bathing, charity, preparing sesame-based foods and visiting family.'),
  (20, 25, 'India', 'Saraswati Puja is particularly prominent in West Bengal, Odisha, Bihar and Assam; Basant traditions are also observed in northern India.', 'Puja, offering flowers and fruits, prayers for knowledge and learning.', 'Yellow rice, sweet saffron dishes, kesar sweets and regional foods.', 'Yellow sarees, kurtas and traditional clothing.', 'Classical and devotional music. Classical dance and cultural performances.', 'Yellow flowers, books, musical instruments and Saraswati idols.', 'Saraswati Puja, educational ceremonies and wearing yellow clothing.'),
  (21, 39, 'India', 'Tamil Nadu, Malaysia, Singapore, Sri Lanka and other Tamil communities.', 'Abhishekam, fasting, carrying kavadi and temple worship.', 'Milk offerings, fruits, vegetarian food and prasadam.', 'Traditional Tamil clothing; devotees may wear specific devotional attire.', 'Murugan devotional songs, drums and temple music. Kavadi-related devotional movement and folk performances.', 'Flowers, temple decorations and kavadi structures.', 'Kavadi carrying, pilgrimage, offerings and devotional singing.'),
  (22, 36, 'India', 'Andhra Pradesh, Telangana and Karnataka.', 'Puja, Panchanga Shravanam and temple visits.', 'Ugadi Pachadi, obbattu/holige, pulihora and regional dishes.', 'New traditional clothing.', 'Carnatic and devotional music. Kuchipudi, Yakshagana and regional performances.', 'Mango leaves, rangoli and flowers.', 'House cleaning, new clothes, Panchanga listening and Ugadi Pachadi.'),
  (23, 37, 'India', 'Maharashtra, Goa and nearby Konkani communities.', 'Home puja and worship of the gudi.', 'Puran poli, shrikhand, neem-jaggery preparations.', 'Nauvari sarees, kurta-pyjamas and traditional Maharashtrian attire.', 'Lezim music, folk and devotional music. Lezim and regional folk dances.', 'Rangoli, torans and decorated gudi.', 'Raising gudi, cleaning homes and preparing festive meals.'),
  (24, 22, 'India', 'Celebrated throughout India with particularly strong traditions in Ayodhya and South Indian temples.', 'Rama puja, fasting, chanting and temple visits.', 'Panakam, kosambari, fruits and festive vegetarian food.', 'Traditional festive attire.', 'Rama bhajans and devotional songs. Classical and folk performances based on Ramayana.', 'Rama idols, flowers, lamps and temple decorations.', 'Ramayana recitation, bhajans, processions and temple celebrations.'),
  (25, 35, 'India', 'Date differs across regions.', 'Abhishekam, puja and devotional chanting.', 'Laddus, fruits and prasadam.', 'Traditional clothing; devotees may wear saffron.', 'Hanuman bhajans and devotional chanting. Ramayana-based performances.', 'Hanuman images, flowers and saffron flags.', 'Temple visits, Hanuman Chalisa recitation and processions.'),
  (26, 30, 'India', 'Practices differ across northern, western and southern India.', 'Vishnu/Lakshmi worship and donations.', 'Sattvic food, sweets and regional dishes.', 'New traditional clothing.', 'Devotional music. Regional cultural performances.', 'Flowers, lamps and rangoli.', 'Charity, gold purchases, ceremonies and new ventures.'),
  (27, 40, 'India', 'Andhra Pradesh, Telangana, Karnataka, Odisha and other Vaishnava regions.', 'Abhishekam, puja and recitation of scriptures.', 'Fasting foods and prasadam.', 'Traditional Vaishnava attire.', 'Vishnu/Narasimha devotional songs. Mythological dance-drama.', 'Narasimha images, flowers and lamps.', 'Fasting, temple visits and Narasimha worship.'),
  (28, 41, 'India', 'Vat Savitri and Vat Purnima traditions differ in timing and practice.', 'Circumambulating the banyan tree, tying sacred threads and listening to the Savitri story.', 'Fruits, sweets and fasting foods.', 'Sarees and traditional jewellery.', 'Devotional and folk songs. Generally limited; local folk performances may occur.', 'Banyan tree decorations, flowers and rangoli.', 'Fasting and worship around the banyan tree.'),
  (29, 42, 'India', 'Rath Yatra processions occur in many Indian cities, inspired by Puri.', 'Temple ceremonies, chariot worship and procession.', 'Mahaprasad, especially associated with Jagannath Temple.', 'Traditional Odia clothing.', 'Odissi music, drums and devotional songs. Odissi and regional devotional performances.', 'Huge wooden chariots, flowers and temple decorations.', 'Chariot construction, procession and pulling the chariots.'),
  (30, 26, 'India', 'Celebrated by Hindu, Buddhist and Jain traditions with different interpretations.', 'Guru puja, meditation and prayers.', 'Sattvic meals, fruits and prasadam.', 'Traditional/simple clothing.', 'Bhajans and devotional music. Classical cultural performances.', 'Flowers, lamps and guru portraits.', 'Guru worship, offering respect and studying spiritual texts.'),
  (31, 32, 'India', 'Maharashtra, Karnataka, Andhra Pradesh, Telangana, Bengal and other regions.', 'Milk or other offerings in accordance with local tradition, puja and prayers.', 'Regional vegetarian and fasting foods.', 'Traditional clothing.', 'Folk and devotional songs. Regional folk dances.', 'Snake images, rangoli and flowers.', 'Snake worship, temple visits and offerings.'),
  (32, 43, 'India', 'Andhra Pradesh, Telangana, Karnataka and Tamil Nadu.', 'Lakshmi puja, kalasha worship and sacred-thread ceremonies.', 'Payasam, sweets, fruits and vegetarian festive meals.', 'Silk sarees and traditional jewellery.', 'Lakshmi devotional songs. Usually not central; local cultural performances may occur.', 'Flowers, lamps, mango leaves and decorated kalash.', 'Kalasha decoration, vrata and family puja.'),
  (33, 23, 'India', 'Rakhi, Rakhi Purnima, Jhulan traditions and regional customs.', 'Aarti, rakhi tying and prayers.', 'Sweets, ladoos, barfi and family meals.', 'Festive traditional clothing.', 'Family songs and regional folk music. Folk/cultural performances where organized.', 'Rakhi displays, flowers and rangoli.', 'Tying rakhi, exchanging gifts and family gatherings.'),
  (34, 44, 'India', 'Mathura-Vrindavan Janmashtami, Maharashtra Dahi Handi, Gujarat and South Indian Krishna traditions.', 'Fasting, midnight puja, bathing the infant Krishna image and offering butter/milk.', 'Makhan, poha, panjiri, milk sweets and regional preparations.', 'Krishna-themed clothing, traditional sarees and dhotis.', 'Bhajans, kirtans and classical devotional music. Raas, Krishna dance dramas and classical performances.', 'Cradles, flowers, peacock feathers and Krishna idols.', 'Midnight worship, Dahi Handi, devotional singing and Krishna plays.'),
  (35, 20, 'India', 'Maharashtra, Karnataka, Goa, Andhra Pradesh, Telangana and Tamil Nadu.', 'Prana Pratishtha, puja, offerings and Visarjan.', 'Modak, ladoo, puran poli and regional vegetarian food.', 'Traditional festive clothing.', 'Dhol, devotional songs and cultural music. Folk and community dancing.', 'Ganesh idols, pandals, flowers and lights.', 'Idol installation, daily puja, cultural programmes and immersion.'),
  (36, 27, 'India', 'Kerala districts have different local celebrations.', 'Temple visits, prayers and family observances.', 'Onam Sadya, avial, sambar, payasam, thoran and banana chips.', 'Kasavu sarees, mundu and traditional Kerala attire.', 'Chenda, folk songs and traditional music. Thiruvathira, Kathakali and folk performances.', 'Pookalam, lamps and floral arrangements.', 'Pookalam, Onam Sadya, boat races and cultural programmes.'),
  (37, 45, 'India', 'Rajasthan, Uttar Pradesh, Bihar, Madhya Pradesh and Nepal.', 'Shiva-Parvati worship and fasting.', 'Ghewar, sweets and fasting foods.', 'Colourful sarees, lehengas and traditional jewellery.', 'Teej folk songs. Folk dancing.', 'Swings, flowers and mehendi.', 'Fasting, mehendi, swings, songs and gatherings.'),
  (38, 46, 'India', 'West Bengal, Odisha, Bihar, Jharkhand and industrial areas.', 'Vishwakarma Puja and offerings to tools.', 'Sweets and community meals.', 'Traditional/formal clothing.', 'Devotional and cultural music. Local cultural performances.', 'Flowers, banners, tools and machinery.', 'Cleaning and decorating tools and machinery.'),
  (39, 19, 'India', 'Gujarat—Garba; West Bengal—Durga Puja; North India—Ramlila; Tamil Nadu—Golu.', 'Daily Devi worship, Ghatasthapana and special pujas.', 'Fasting foods, fruits, sabudana, kuttu and regional meals.', 'Chaniya choli, sarees, dhoti-kurta and regional clothing.', 'Garba songs, devotional music and folk music. Garba and Dandiya Raas.', 'Durga idols, Golu displays, lamps and flowers.', 'Fasting, Durga Puja, Garba, Dandiya, Ramlila and Golu.'),
  (40, 47, 'India', 'West Bengal, Assam, Odisha and Tripura.', 'Bodhan, Pushpanjali, Sandhi Puja and immersion.', 'Bhog, khichuri, sweets and sandesh.', 'Sarees, dhoti-kurta and Bengali traditional clothing.', 'Dhak, devotional songs and cultural music. Dhunuchi dance and cultural performances.', 'Elaborate pandals, idols, lights and flowers.', 'Idol creation, pandals, puja, cultural programmes and immersion.'),
  (41, 24, 'India', 'Mysuru Dasara, Kullu Dussehra, Bengal immersion, North Indian Ramlila.', 'Puja, Ayudha Puja in some regions and temple ceremonies.', 'Regional festive meals and sweets.', 'Traditional festive clothing.', 'Drums, devotional music and folk music. Folk dance and Ramlila performances.', 'Effigies, stages, flowers and lights.', 'Ramlila, Ravana effigy burning, processions and Durga immersion.'),
  (42, 29, 'India', 'Punjab, Haryana, Rajasthan, Uttar Pradesh, Delhi and surrounding areas.', 'Puja, Karwa worship and breaking the fast after seeing the moon.', 'Sargi, sweets, fruits and festive meals.', 'Bridal-style sarees or lehengas, jewellery and mehendi.', 'Punjabi/North Indian folk songs. Folk dancing at community gatherings.', 'Diyas, rangoli, decorated karwa pots.', 'Fasting, mehendi, dressing traditionally and moon viewing.'),
  (43, 34, 'India', 'Practices differ across North, West and South India.', 'Lakshmi/Dhanvantari worship and lighting lamps.', 'Sweets and festive snacks.', 'New festive clothing.', 'Devotional and festive music. Community/family celebrations.', 'Diyas, rangoli and flowers.', 'Buying utensils, jewellery or other auspicious items.'),
  (44, 48, 'India', 'Strongest in Braj; also observed in Gujarat and Vaishnava communities.', 'Govardhan Puja, circumambulation and offerings.', 'Annakut, numerous vegetarian dishes and sweets.', 'Traditional festive clothing.', 'Krishna bhajans. Raas and regional Krishna dances.', 'Annakut arrangements, flowers and Govardhan representations.', 'Govardhan representation made from food or natural materials, cattle worship.'),
  (45, 49, 'India', 'Bhai Dooj, Bhai Phota, Yama Dwitiya and Bhai Tika.', 'Tilak, prayers and gift exchange.', 'Sweets, puri, regional dishes and festive meals.', 'Traditional festive clothing.', 'Family and folk songs. Regional family/community dances.', 'Rangoli, lamps and flowers.', 'Sister applies tilak, performs aarti and offers food.'),
  (46, 50, 'India', 'Especially prominent in Tamil Nadu and Tamil communities.', 'Deepam lighting and temple worship.', 'Pori urundai, appam, sweet dishes and traditional Tamil foods.', 'Traditional Tamil attire.', 'Nadaswaram, devotional songs and temple music. Classical/folk performances.', 'Rows of oil lamps, kolam and flowers.', 'Lighting rows of oil lamps and visiting temples.'),
  (47, 51, 'India', 'Tirupati, Srirangam, Kanchipuram and other Vishnu temples have distinct practices.', 'Vishnu Puja, temple darshan and passage through symbolic Vaikuntha gates.', 'Fruits and permitted fasting foods.', 'Traditional Vaishnava attire.', 'Vishnu bhajans and Divya Prabandham recitation. Temple and classical performances.', 'Vaikuntha Dwaram, flowers and lamps.', 'Fasting, night vigil, temple visits and devotional singing.'),
  (48, 52, 'India', 'Telangana districts have local floral and culinary practices.', 'Floral offering, singing and immersion.', 'Saddula Bathukamma foods, rice dishes and regional sweets.', 'Traditional sarees, jewellery and festive attire.', 'Bathukamma folk songs. Circular group dancing.', 'Flower arrangements.', 'Creating Bathukamma flower arrangements and community gatherings.'),
  (49, 53, 'India', 'Kerala districts and Malayali communities abroad.', 'Viewing Vishukkani and temple worship.', 'Vishu Sadya, payasam and traditional Kerala dishes.', 'Kasavu saree, mundu and traditional clothing.', 'Temple and folk music. Regional performances.', 'Lamps, flowers and Vishukkani arrangements.', 'Vishukkani, Vishukkaineettam and festive meals.'),
  (50, 54, 'India', 'Rongali/Bohag, Bhogali/Magh and Kongali/Kati Bihu.', 'Community and family observances.', 'Pitha, laru, rice dishes and traditional Assamese food.', 'Mekhela chador, dhoti and gamosa.', 'Bihu geet and traditional instruments. Bihu dance.', 'Traditional Assamese decorations.', 'Bihu songs, dancing, feasting and wearing traditional clothes.'),
  (51, 55, 'India', 'Secunderabad, Hyderabad and Telangana districts.', 'Mahankali Puja, Bonam offering and processions.', 'Rice, jaggery, curd and traditional Bonam preparation.', 'Sarees, traditional jewellery and festive clothing.', 'Dappu drums and devotional music. Pothuraju and folk performances.', 'Decorated Bonam pots, neem leaves, flowers.', 'Bonam offerings, processions and temple celebrations.'),
  (52, 56, 'India', 'Odisha''s Boita Bandana, Varanasi Dev Deepawali and Kartika Deepam traditions.', 'Deepa Dana, puja and sacred bathing.', 'Sweets and regional vegetarian dishes.', 'Traditional clothing.', 'Devotional music. Temple and regional cultural performances.', 'Lamps, flowers and temple lights.', 'Deepam lighting, river bathing and temple visits.'),
  (53, 28, 'India', 'Bihar, Jharkhand, eastern Uttar Pradesh and diaspora communities.', 'Evening and morning arghya to the Sun.', 'Thekua, rice, fruits, sugarcane and traditional offerings.', 'Sarees, dhotis and traditional clothing.', 'Chhath folk songs and devotional songs. Folk/community performances.', 'Ghats, lamps, baskets and sugarcane.', 'Fasting, riverbank gatherings, thekua preparation and offerings.'),
  (54, 57, 'India', 'Celebrations differ across Goa''s villages and communities.', 'Temple visits and regional religious observances.', 'Goan vegetarian festive dishes and sweets.', 'Traditional Goan clothing and festive attire.', 'Dhol, traditional Goan instruments and folk music. Fugdi, Ghode Modni and regional folk dances.', 'Colourful floats, flowers and traditional decorations.', 'Processions, colours, folk performances and floats.'),
  (55, 58, 'Global', 'Different churches emphasize different manifestations of Christ, including the Magi, Jesus'' baptism ', 'Prayer
Eucharistic celebration
Scripture reading
Blessing ceremonies', 'King cake
Sweet breads
Regional festive foods', 'Church/formal clothing
Traditional regional clothing', 'Epiphany hymns
Church choir
Processional music
Religious processional performances
Three Kings performances in some regions', 'Star
Three Kings/Magi
Nativity scene
Candles
Star of Bethlehem
Gold, frankincense and myrrh
Three Magi', 'Church services
Blessing of homes
Processions
Nativity celebrations
Three Kings traditions'),
  (56, 59, 'Global', 'Practices differ among Catholic, Anglican, Lutheran and other Western traditions. Eastern Orthodox c', 'Ashes placed on forehead
Prayer
Scripture readings
Church service', 'Simple vegetarian meals
Fasting foods
Fish in some traditions', 'Modest clothing
Dark or subdued colors in some communities', 'Lenten hymns
Choral music
Penitential songs
Generally not a major part of the observance.', 'Cross
Ashes
Purple cloth
Candles
Ashes
Cross
Purple
Dust', 'Receiving ashes
Fasting
Prayer
Giving to charity
Giving up certain foods or habits'),
  (57, 60, 'Global', 'In India, churches may use locally available palm or other branches where traditional palms are unav', 'Blessing of palms
Procession
Gospel reading
Eucharistic service', 'Usually no universal special food.', 'Church/formal clothing
Regional traditional dress', 'Palm Sunday hymns
Passion music
Church choir
Generally not central.', 'Palm branches
Cross
Purple cloth
Church flowers
Palm branch
Donkey
Cross', 'Palm processions
Palm crosses
Church services
Passion readings'),
  (58, 61, 'Global', 'Foot-washing ceremonies are especially visible in Catholic and some Anglican traditions.', 'Foot washing
Eucharist
Scripture readings
Processions', 'Bread
Wine
Simple meals
Regional Holy Week foods', 'Church/formal clothing
Liturgical vestments', 'Eucharistic hymns
Choral music
Passion hymns
Generally not practiced.', 'Cross
Candles
White cloth
Eucharistic altar
Bread and wine
Basin and towel
Cross
Chalice', 'Washing of feet
Evening Mass/service
Eucharistic adoration
Prayer'),
  (59, 62, 'Global', 'The Easter Vigil is especially significant in Catholic, Anglican and some other Western traditions.', 'Lighting the Paschal candle
Scripture readings
Baptism
Eucharist', 'Easter foods prepared for the following day.', 'Church/formal clothing.', 'Easter Vigil hymns
Choir music
Not generally practiced.', 'Candles
Cross
Flowers
Paschal candle
Paschal candle
Fire
Cross
Water', 'Easter Vigil
Baptisms
Church decoration
Prayer'),
  (60, 63, 'Global', 'Easter customs differ significantly between Europe, India, Africa, Latin America and other Christian', 'Easter Vigil
Baptism
Eucharist
Sunrise services
Prayer', 'Easter bread
Roast lamb
Eggs
Cakes
Hot cross buns
Regional Indian Easter foods', 'New/festive clothing
White and bright colors in some communities', 'Hallelujah hymns
Easter choir
Organ music
Gospel music
Community celebrations
Folk dances in some cultures', 'Flowers
Cross
Easter eggs
Candles
White cloth
Empty tomb
Cross
Easter egg
Lamb
Butterfly', 'Easter Sunday service
Easter eggs
Egg hunts
New clothes
Family meals
Greeting "Happy Easter"'),
  (61, 64, 'Global', 'Some churches celebrate it on Thursday, while others transfer the observance to the following Sunday', 'Eucharist
Bible readings
Prayer', 'No universal food.', 'Church/formal clothing.', 'Ascension hymns and choir music.
Not generally practiced.', 'Cross
White cloth
Candles
Cloud
Cross
Jesus ascending to heaven', 'Church service
Prayer
Processions'),
  (62, 65, 'Global', 'Different denominations explain the Trinity using different theological traditions.', 'Eucharist
Prayer
Scripture readings', 'No universal food.', 'Church clothing.', 'Trinity hymns and choral music.
Not generally associated.', 'Trinity symbols
Cross
Candles
Three interlocking circles
Triangle
Cross', 'Trinity-focused sermons
Church services
Hymns'),
  (63, 66, 'Global', 'Celebrations vary among Catholic communities; it is not observed as a universal feast in all Christi', 'Mass
Rosary
Marian prayers
Processions', 'Regional feast foods.', 'Festive church clothing and regional dress.', 'Marian hymns
Church choir
Regional processional or cultural performances in some communities.', 'Flowers
Marian statues
Blue and white decorations
Mary
Crown
Flowers
Heaven', 'Processions
Marian prayers
Church festivals
Flower decorations'),
  (64, 67, 'Global', 'Catholic, Anglican and Orthodox traditions have different calendars and saints'' observances.', 'Mass/service
Prayers for saints
Liturgical readings', 'Regional foods.', 'Church/formal clothing.', 'Saints'' hymns and choir music.
Regional cultural celebrations in some countries.', 'Candles
Flowers
Saint images
Halo
Cross
Saints'' icons', 'Church services
Visiting cemeteries
Lighting candles
Prayers'),
  (65, 68, 'Global', 'Practices differ widely. In Latin America, related traditions include Día de los Muertos, although t', 'Prayers
Mass/services
Memorial ceremonies', 'Regional foods associated with remembrance.', 'Modest or dark clothing in many communities.', 'Requiem music and hymns.
Not normally practiced.', 'Candles
Flowers
Crosses
Candle
Cross
Cemetery
Prayer', 'Cemetery visits
Lighting candles
Flowers
Memorial services'),
  (66, 69, 'Global', 'Celebrated particularly strongly in Catholic, Orthodox and Anglican traditions.', 'Mass
Scripture reading
Marian prayers', 'No universal food.', 'Church/formal clothing.', 'Marian hymns.
Not generally associated.', 'White flowers
Angel imagery
Marian images
Angel Gabriel
Lily
Mary
Book/scripture', 'Church services
Marian prayers
Art exhibitions'),
  (67, 70, 'Global', 'Particularly important in Eastern Orthodox Christianity as well as Catholic and other traditions.', 'Eucharist
Prayer
Scripture readings', 'Regional foods.', 'Church/formal clothing.', 'Liturgical hymns and chants.
Not generally associated.', 'Mountain imagery
Light
Icons
Candles
Light
Mountain
Jesus
Moses and Elijah', 'Church services
Scripture readings
Icon veneration in Eastern Christianity'),
  (68, 71, 'Global', 'Particularly significant in Kerala and Tamil Nadu.', 'Mass/service
Novenas
Veneration of Saint Thomas', 'Regional Kerala Christian foods.', 'Traditional Kerala clothing
Church/formal dress', 'Christian hymns
Syriac/Malayalam liturgical music
Margam Kali
Other Kerala Christian cultural performances', 'Crosses
Church flowers
Saint Thomas images
Cross
Apostle Thomas
Spear/martyrdom symbols', 'Church services
Processions
Pilgrimage
Prayer'),
  (69, 72, 'Global', 'Duration and liturgical customs vary by denomination.', 'Church services
Lighting Advent candles
Prayer', 'Regional Christmas preparation foods.', 'No universal clothing.', 'Advent hymns
Choir music
Christmas preparation songs
Not generally associated.', 'Advent wreath
Four candles
Purple/rose decorations
Four candles
Wreath
Light
Star', 'Advent wreath
Advent calendar
Prayer
Scripture reading
Christmas preparation'),
  (70, 73, 'Global', 'Particularly important in Catholic countries and Marian pilgrimage centers.', 'Eucharist
Marian prayers
Processions', 'Regional feast foods.', 'Festive church clothing.', 'Marian hymns.
Regional processional performances in some countries.', 'Blue and white
Flowers
Mary statues
Mary
Lily
Crown
Blue color', 'Mass
Marian processions
Rosary
Church decorations'),
  (71, 74, 'Global', 'Particularly elaborate in Catholic communities in Europe, Latin America and India.', 'Mass
Eucharistic adoration
Procession with the Blessed Sacrament', 'Regional feast foods.', 'Festive church clothing.', 'Eucharistic hymns
Processional music
Choir
Some regions have traditional dances during processions.', 'Flowers
Altars
Eucharistic symbols
Processional banners
Eucharistic host
Chalice
Bread and wine
Monstrance', 'Eucharistic processions
Church services
Flower carpets
Community celebrations'),
  (72, 75, 'Global', 'Many Muslims observe the 27th night especially strongly, while Islamic sources describe Laylat al-Qa', 'Tahajjud/Qiyam
Dua
Qur''an recitation
Dhikr
Repentance', 'Iftar foods
Dates
Tea
Regional Ramadan foods', 'Modest prayer clothing.', 'Qur''an recitation and devotional practices rather than festival music.
Not practiced as a religious ritual.', 'Mosque lights
Lanterns
Islamic calligraphy
Qur''an
Crescent
Prayer beads
Mosque', 'Night prayers
Qur''an recitation
Dua
Charity
Dhikr

Event Time:
Begins: At Maghrib/sunset.
Main observance: Throughout the night.
Ends: At Fajr/dawn.
This sunset-to-dawn timing is especially important for your FaithFest app.'),
  (73, 76, 'Global', 'The core Hajj rituals are standardized, although pilgrims'' cultural practices before and after Hajj ', 'Tawaf
Sa''i
Wuquf at Arafat
Muzdalifah
Mina
Jamarat', 'Regional foods available to pilgrims.', 'Ihram for men
Modest pilgrimage clothing for women', 'No festival music is required; worship includes Talbiyah and supplication.
Not part of Hajj rituals.', 'Not a major aspect.
Kaaba
Ihram
Arafat
Zamzam
Jamarat', 'Ihram
Tawaf
Sa''i
Standing at Arafat
Stoning the Jamarat
Qurbani

Event Time:
Wuquf at Arafat: From after midday until sunset on 9 Dhul-Hijjah.
Pilgrims spend the day in prayer, remembrance and supplication.
Exact operational times are determined by the Hajj authorities.'),
  (74, 77, 'Global', 'Some Muslim communities observe it quietly, while others organize educational or religious gathering', 'No universal special ritual is prescribed for the New Year itself.', 'Regional foods.', 'Modest/traditional clothing.', 'No universal religious music.
Not a universal religious practice.', 'Islamic calligraphy
Crescent imagery
Crescent
Hijri calendar
Mosque', 'Prayer
Religious lectures
Reflection
Community gatherings

Event Time:
Islamic date begins at sunset/Maghrib.
The New Year therefore begins the evening before the corresponding Gregorian daytime date.'),
  (75, 78, 'Global', 'Practices differ strongly between Sunni and Shia communities and between countries.', 'Varies significantly by tradition.', 'Regional foods; simple meals are common among those fasting.', 'Modest clothing; black clothing is commonly associated with mourning in many Shia communities.', 'Religious recitation and elegies (marsiya/noha) in some Shia communities.
Not generally a religious practice.', 'Black banners in some Shia communities
Calligraphy
Mosque decorations
Muharram crescent
Karbala
Imam Husayn
Black banners in some traditions', 'Fasting
Prayer
Religious gatherings
Sermons
Mourning commemorations in Shia communities

Event Time:
Islamic date begins at sunset.
Fasting, where observed, runs from Fajr to Maghrib.
Shia mourning gatherings may take place throughout the day and night.'),
  (76, 79, 'Global', 'South Asian Mawlid gatherings may include Urdu, Arabic, Malayalam, Tamil or other local-language dev', 'There is no single universally prescribed Mawlid ritual; practices vary by community.', 'Biryani
Sweet dishes
Halwa
Regional foods', 'Kurta
Sherwani
Thobe
Salwar kameez
Regional clothing', 'Nasheeds
Religious poetry
Qasida
Mawlid recitations
Not a universal religious practice.', 'Green flags
Islamic calligraphy
Lights
Mosque decorations
Arabic calligraphy
Mosque
Crescent
Green banners in some traditions', 'Seerah gatherings
Religious lectures
Poetry
Nasheeds
Community meals
Charity

Event Time:
Islamic day begins at sunset.
Mawlid gatherings are commonly held after Maghrib/Isha, although exact schedules depend on the mosque/community.
There is no universal fixed clock time.'),
  (77, 80, 'Global', 'South Asian Muslim communities may organize special lectures and mosque programs.', 'No single universal special ritual.', 'Regional foods.', 'Traditional/modest Islamic clothing.', 'Nasheed and religious recitation in some communities.
Not generally practiced.', 'Mosque lights
Islamic calligraphy
Crescent imagery
Al-Aqsa Mosque
Crescent
Buraq in traditional artistic representation', 'Prayer
Lectures
Qur''an recitation
Religious gatherings

Event Time:
Begins: Sunset/Maghrib.
Main observance: Night.
Ends: Dawn.
Exact mosque program times vary.'),
  (78, 81, 'Global', 'The date and level of public observance vary among Muslim communities.', 'No universal special ritual separate from Ramadan worship.', 'Ramadan foods.', 'Modest/traditional clothing.', 'Qur''an recitation and nasheeds in some communities.
Not practiced as a religious ritual.', 'Qur''an calligraphy
Mosque lights
Qur''an
Crescent
Mosque', 'Qur''an recitation
Religious lectures
Prayer
Charity

Event Time:
Islamic date begins at sunset.
Programs may occur after Maghrib or Isha.
No universal clock time.');
SELECT setval(pg_get_serial_sequence('public.festival_regions', 'id'), COALESCE(max(id), 1)) FROM public.festival_regions;

-- Table: foods (148 rows)
INSERT INTO public.foods (id, festival_id, name, description, ingredients, preparation, region, significance, image_url) VALUES
  (2, 1, 'Ladoo', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (3, 1, 'jalebi', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (4, 1, 'kaju katli', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (5, 1, 'murukku', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (6, 1, 'mixture and regional sweets.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (7, 2, 'Sakkarai Pongal', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (8, 2, 'Ven Pongal', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (9, 2, 'sugarcane', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (10, 2, 'coconut', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (11, 2, 'rice and traditional Tamil dishes.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (12, 3, 'Gujiya', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (13, 3, 'thandai', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (14, 3, 'malpua', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (15, 3, 'dahi vada and regional sweets.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (16, 4, 'Fruits', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (17, 4, 'milk', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (18, 4, 'sabudana dishes and fasting foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (19, 5, 'Regional sweets', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (20, 5, 'dates and festive dishes', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (21, 6, 'Dates
Haleem
Biryani
Samosa
Pakora
Fruit
Rooh Afza/sharbat
Regional Iftar dishes', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (22, 7, 'Meat dishes', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (23, 7, 'rice dishes and regional sweets', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (24, 8, 'Regional foods vary', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (25, 9, 'Sherbet or juice distributed to the public', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (26, 10, 'Halwa
Sweets
Biryani
Regional dishes', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (27, 11, 'Regional foods and charity distribution', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (28, 12, 'Christmas cake
Plum cake
Roast meat
Cookies
Pulao/biryani in some Indian Christian communities
Appam and stew in Kerala
Kalkals and rose cookies in parts of India', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (29, 13, 'Egg-based and regional festive foods', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (30, 13, 'breads and sweets', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (31, 14, 'Fasting meals
Fish or vegetarian food in communities that abstain from meat', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (32, 15, 'Regional festive meals.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (33, 16, 'Sheer khurma
Biryani
Seviyan
Kebabs
Halwa
Sweets', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (34, 17, 'Biryani
Kebabs
Mutton curry
Haleem
Korma
Regional meat dishes', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (35, 18, 'Regional foods vary', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (36, 38, 'Til ladoo', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (37, 38, 'sesame sweets', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (38, 38, 'jaggery', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (39, 38, 'sugarcane', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (40, 38, 'pongal and regional harvest dishes.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (41, 25, 'Yellow rice', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (42, 25, 'sweet saffron dishes', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (43, 25, 'kesar sweets and regional foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (44, 39, 'Milk offerings', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (45, 39, 'fruits', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (46, 39, 'vegetarian food and prasadam.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (47, 36, 'Ugadi Pachadi', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (48, 36, 'obbattu/holige', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (49, 36, 'pulihora and regional dishes.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (50, 37, 'Puran poli', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (51, 37, 'shrikhand', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (52, 37, 'neem-jaggery preparations.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (53, 22, 'Panakam', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (54, 22, 'kosambari', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (55, 22, 'fruits and festive vegetarian food.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (56, 35, 'Laddus', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (57, 35, 'fruits and prasadam.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (58, 30, 'Sattvic food', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (59, 30, 'sweets and regional dishes.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (60, 40, 'Fasting foods and prasadam.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (61, 41, 'Fruits', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (62, 41, 'sweets and fasting foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (63, 42, 'Mahaprasad', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (64, 42, 'especially associated with Jagannath Temple.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (65, 26, 'Sattvic meals', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (66, 26, 'fruits and prasadam.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (67, 32, 'Regional vegetarian and fasting foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (68, 43, 'Payasam', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (69, 43, 'sweets', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (70, 43, 'fruits and vegetarian festive meals.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (71, 23, 'Sweets', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (72, 23, 'ladoos', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (73, 23, 'barfi and family meals.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (74, 44, 'Makhan', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (75, 44, 'poha', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (76, 44, 'panjiri', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (77, 44, 'milk sweets and regional preparations.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (78, 20, 'Modak', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (79, 20, 'ladoo', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (80, 20, 'puran poli and regional vegetarian food.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (81, 27, 'Onam Sadya', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (82, 27, 'avial', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (83, 27, 'sambar', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (84, 27, 'payasam', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (85, 27, 'thoran and banana chips.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (86, 45, 'Ghewar', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (87, 45, 'sweets and fasting foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (88, 46, 'Sweets and community meals.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (89, 19, 'Fasting foods', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (90, 19, 'fruits', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (91, 19, 'sabudana', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (92, 19, 'kuttu and regional meals.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (93, 47, 'Bhog', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (94, 47, 'khichuri', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (95, 47, 'sweets and sandesh.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (96, 24, 'Regional festive meals and sweets.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (97, 29, 'Sargi', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (98, 29, 'sweets', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (99, 29, 'fruits and festive meals.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (100, 34, 'Sweets and festive snacks.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (101, 48, 'Annakut', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (102, 48, 'numerous vegetarian dishes and sweets.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (103, 49, 'Sweets', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (104, 49, 'puri', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (105, 49, 'regional dishes and festive meals.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (106, 50, 'Pori urundai', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (107, 50, 'appam', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (108, 50, 'sweet dishes and traditional Tamil foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (109, 51, 'Fruits and permitted fasting foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (110, 52, 'Saddula Bathukamma foods', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (111, 52, 'rice dishes and regional sweets.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (112, 53, 'Vishu Sadya', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (113, 53, 'payasam and traditional Kerala dishes.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (114, 54, 'Pitha', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (115, 54, 'laru', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (116, 54, 'rice dishes and traditional Assamese food.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (117, 55, 'Rice', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (118, 55, 'jaggery', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (119, 55, 'curd and traditional Bonam preparation.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (120, 56, 'Sweets and regional vegetarian dishes.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (121, 28, 'Thekua', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (122, 28, 'rice', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (123, 28, 'fruits', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (124, 28, 'sugarcane and traditional offerings.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (125, 57, 'Goan vegetarian festive dishes and sweets.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (126, 58, 'King cake
Sweet breads
Regional festive foods', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (127, 59, 'Simple vegetarian meals
Fasting foods
Fish in some traditions', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (128, 60, 'Usually no universal special food.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (129, 61, 'Bread
Wine
Simple meals
Regional Holy Week foods', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (130, 62, 'Easter foods prepared for the following day.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (131, 63, 'Easter bread
Roast lamb
Eggs
Cakes
Hot cross buns
Regional Indian Easter foods', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (132, 64, 'No universal food.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (133, 65, 'No universal food.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (134, 66, 'Regional feast foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (135, 67, 'Regional foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (136, 68, 'Regional foods associated with remembrance.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (137, 69, 'No universal food.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (138, 70, 'Regional foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (139, 71, 'Regional Kerala Christian foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (140, 72, 'Regional Christmas preparation foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (141, 73, 'Regional feast foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (142, 74, 'Regional feast foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (143, 75, 'Iftar foods
Dates
Tea
Regional Ramadan foods', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (144, 76, 'Regional foods available to pilgrims.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (145, 77, 'Regional foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (146, 78, 'Regional foods; simple meals are common among those fasting.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (147, 79, 'Biryani
Sweet dishes
Halwa
Regional foods', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (148, 80, 'Regional foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL),
  (149, 81, 'Ramadan foods.', 'Traditional festive preparation', NULL, NULL, NULL, NULL, NULL);
SELECT setval(pg_get_serial_sequence('public.foods', 'id'), COALESCE(max(id), 1)) FROM public.foods;

-- Table: clothing (100 rows)
INSERT INTO public.clothing (id, festival_id, name, category, description, region, cultural_context, image_url) VALUES
  (1, 1, 'New sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (2, 1, 'lehengas', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (3, 1, 'kurtas and festive clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (4, 2, 'Veshti', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (5, 2, 'saree', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (6, 2, 'pavadai', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (7, 2, 'dhavani and traditional Tamil clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (8, 3, 'White clothing is commonly worn for colour celebrations.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (9, 4, 'Traditional clothing', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (10, 4, 'often white or simple devotional attire.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (11, 5, 'Regional traditional clothing', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (12, 6, 'Kurta-pajama
Salwar kameez
Abaya
Thobe
Hijab
Regional traditional clothing', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (13, 7, 'Festive regional clothing', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (14, 8, 'Regional traditional attire', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (15, 9, 'Many people dress in black as a sign of grief', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (16, 10, 'Traditional/modest clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (17, 11, 'Regional traditional attire', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (18, 12, 'Church/formal clothing
White and festive-colored clothing
Traditional Indian Christian clothing depending on region', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (19, 13, 'Regional festive clothing', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (20, 14, 'Simple/modest clothing
Dark colors in some communities', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (21, 15, 'Festive church clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (22, 16, 'Kurta-pajama
Sherwani
Salwar kameez
Abaya
Thobe
Hijab', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (23, 17, 'Kurta-pajama
Sherwani
Salwar kameez
Abaya
Thobe', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (24, 18, 'Regional traditional attire', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (25, 38, 'Traditional regional clothing', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (26, 38, 'colourful sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (27, 38, 'dhotis and festive wear.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (28, 25, 'Yellow sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (29, 25, 'kurtas and traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (30, 39, 'Traditional Tamil clothing; devotees may wear specific devotional attire.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (31, 36, 'New traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (32, 37, 'Nauvari sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (33, 37, 'kurta-pyjamas and traditional Maharashtrian attire.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (34, 22, 'Traditional festive attire.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (35, 35, 'Traditional clothing; devotees may wear saffron.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (36, 30, 'New traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (37, 40, 'Traditional Vaishnava attire.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (38, 41, 'Sarees and traditional jewellery.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (39, 42, 'Traditional Odia clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (40, 26, 'Traditional/simple clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (41, 32, 'Traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (42, 43, 'Silk sarees and traditional jewellery.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (43, 23, 'Festive traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (44, 44, 'Krishna-themed clothing', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (45, 44, 'traditional sarees and dhotis.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (46, 20, 'Traditional festive clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (47, 27, 'Kasavu sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (48, 27, 'mundu and traditional Kerala attire.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (49, 45, 'Colourful sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (50, 45, 'lehengas and traditional jewellery.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (51, 46, 'Traditional/formal clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (52, 19, 'Chaniya choli', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (53, 19, 'sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (54, 19, 'dhoti-kurta and regional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (55, 47, 'Sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (56, 47, 'dhoti-kurta and Bengali traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (57, 24, 'Traditional festive clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (58, 29, 'Bridal-style sarees or lehengas', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (59, 29, 'jewellery and mehendi.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (60, 34, 'New festive clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (61, 48, 'Traditional festive clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (62, 49, 'Traditional festive clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (63, 50, 'Traditional Tamil attire.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (64, 51, 'Traditional Vaishnava attire.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (65, 52, 'Traditional sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (66, 52, 'jewellery and festive attire.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (67, 53, 'Kasavu saree', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (68, 53, 'mundu and traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (69, 54, 'Mekhela chador', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (70, 54, 'dhoti and gamosa.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (71, 55, 'Sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (72, 55, 'traditional jewellery and festive clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (73, 56, 'Traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (74, 28, 'Sarees', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (75, 28, 'dhotis and traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (76, 57, 'Traditional Goan clothing and festive attire.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (77, 58, 'Church/formal clothing
Traditional regional clothing', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (78, 59, 'Modest clothing
Dark or subdued colors in some communities', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (79, 60, 'Church/formal clothing
Regional traditional dress', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (80, 61, 'Church/formal clothing
Liturgical vestments', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (81, 62, 'Church/formal clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (82, 63, 'New/festive clothing
White and bright colors in some communities', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (83, 64, 'Church/formal clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (84, 65, 'Church clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (85, 66, 'Festive church clothing and regional dress.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (86, 67, 'Church/formal clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (87, 68, 'Modest or dark clothing in many communities.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (88, 69, 'Church/formal clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (89, 70, 'Church/formal clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (90, 71, 'Traditional Kerala clothing
Church/formal dress', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (91, 72, 'No universal clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (92, 73, 'Festive church clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (93, 74, 'Festive church clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (94, 75, 'Modest prayer clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (95, 76, 'Ihram for men
Modest pilgrimage clothing for women', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (96, 77, 'Modest/traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (97, 78, 'Modest clothing; black clothing is commonly associated with mourning in many Shia communities.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (98, 79, 'Kurta
Sherwani
Thobe
Salwar kameez
Regional clothing', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (99, 80, 'Traditional/modest Islamic clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL),
  (100, 81, 'Modest/traditional clothing.', NULL, 'Traditional festive dress and attire', NULL, NULL, NULL);
SELECT setval(pg_get_serial_sequence('public.clothing', 'id'), COALESCE(max(id), 1)) FROM public.clothing;

-- Table: music_dance (81 rows)
INSERT INTO public.music_dance (id, festival_id, kind, name, description, region, media_url) VALUES
  (1, 1, NULL, 'Bhajans, devotional and festive music. Regional folk and family/community performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (2, 2, NULL, 'Nadaswaram, folk songs and devotional music. Karagattam, Kummi and regional folk dances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (3, 3, NULL, 'Dhol, Holi folk songs and devotional music. Folk dancing and community dance.', 'Devotional and celebratory music and dance', NULL, NULL),
  (4, 4, NULL, 'Shiva bhajans, chants and devotional music. Classical dance performances dedicated to Shiva.', 'Devotional and celebratory music and dance', NULL, NULL),
  (5, 5, NULL, 'Nasheeds and regional music where culturally appropriate', 'Devotional and celebratory music and dance', NULL, NULL),
  (6, 6, NULL, 'Islamic religious practice generally emphasizes Qur''an recitation, nasheeds and devotional vocal traditions rather than a universal festival music tradition.
Dance is not a universal part of Ramadan religious observance.', 'Devotional and celebratory music and dance', NULL, NULL),
  (7, 7, NULL, 'Religious recitation and regional cultural music', 'Devotional and celebratory music and dance', NULL, NULL),
  (8, 8, NULL, 'Qasida al-Burda Sharif and Nats', 'Devotional and celebratory music and dance', NULL, NULL),
  (9, 9, NULL, 'Religious recitation and community programs', 'Devotional and celebratory music and dance', NULL, NULL),
  (10, 10, NULL, 'Religious recitation rather than universal festival music.
Not generally practiced.', 'Devotional and celebratory music and dance', NULL, NULL),
  (11, 11, NULL, 'Hymns and stories of the journey', 'Devotional and celebratory music and dance', NULL, NULL),
  (12, 12, NULL, 'Christmas carols
Choir music
Church hymns
"Silent Night"
"Joy to the World"
Regional Christmas songs
Carol-group performances
Nativity performances
Christmas community dances
Regional folk performances', 'Devotional and celebratory music and dance', NULL, NULL),
  (13, 13, NULL, 'Hymns, choral music and regional traditions', 'Devotional and celebratory music and dance', NULL, NULL),
  (14, 14, NULL, 'Passion hymns
Choral music
Solemn instrumental music
Generally not performed.', 'Devotional and celebratory music and dance', NULL, NULL),
  (15, 15, NULL, 'Holy Spirit hymns
Gospel music
Choir performances
Some Pentecostal and African Christian communities include celebratory movement and dance.', 'Devotional and celebratory music and dance', NULL, NULL),
  (16, 16, NULL, 'Devotional songs and regional cultural music may be present, but music is not a required Eid ritual.
Not a universal religious practice.', 'Devotional and celebratory music and dance', NULL, NULL),
  (17, 17, NULL, 'Not a required religious component.
Not a universal religious practice.', 'Devotional and celebratory music and dance', NULL, NULL),
  (18, 18, NULL, 'Religious recitation and community programs', 'Devotional and celebratory music and dance', NULL, NULL),
  (19, 38, NULL, 'Folk songs and devotional music. Regional folk dances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (20, 25, NULL, 'Classical and devotional music. Classical dance and cultural performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (21, 39, NULL, 'Murugan devotional songs, drums and temple music. Kavadi-related devotional movement and folk performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (22, 36, NULL, 'Carnatic and devotional music. Kuchipudi, Yakshagana and regional performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (23, 37, NULL, 'Lezim music, folk and devotional music. Lezim and regional folk dances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (24, 22, NULL, 'Rama bhajans and devotional songs. Classical and folk performances based on Ramayana.', 'Devotional and celebratory music and dance', NULL, NULL),
  (25, 35, NULL, 'Hanuman bhajans and devotional chanting. Ramayana-based performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (26, 30, NULL, 'Devotional music. Regional cultural performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (27, 40, NULL, 'Vishnu/Narasimha devotional songs. Mythological dance-drama.', 'Devotional and celebratory music and dance', NULL, NULL),
  (28, 41, NULL, 'Devotional and folk songs. Generally limited', 'Devotional and celebratory music and dance', NULL, NULL),
  (29, 41, NULL, 'local folk performances may occur.', 'Devotional and celebratory music and dance', NULL, NULL),
  (30, 42, NULL, 'Odissi music, drums and devotional songs. Odissi and regional devotional performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (31, 26, NULL, 'Bhajans and devotional music. Classical cultural performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (32, 32, NULL, 'Folk and devotional songs. Regional folk dances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (33, 43, NULL, 'Lakshmi devotional songs. Usually not central', 'Devotional and celebratory music and dance', NULL, NULL),
  (34, 43, NULL, 'local cultural performances may occur.', 'Devotional and celebratory music and dance', NULL, NULL),
  (35, 23, NULL, 'Family songs and regional folk music. Folk/cultural performances where organized.', 'Devotional and celebratory music and dance', NULL, NULL),
  (36, 44, NULL, 'Bhajans, kirtans and classical devotional music. Raas, Krishna dance dramas and classical performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (37, 20, NULL, 'Dhol, devotional songs and cultural music. Folk and community dancing.', 'Devotional and celebratory music and dance', NULL, NULL),
  (38, 27, NULL, 'Chenda, folk songs and traditional music. Thiruvathira, Kathakali and folk performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (39, 45, NULL, 'Teej folk songs. Folk dancing.', 'Devotional and celebratory music and dance', NULL, NULL),
  (40, 46, NULL, 'Devotional and cultural music. Local cultural performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (41, 19, NULL, 'Garba songs, devotional music and folk music. Garba and Dandiya Raas.', 'Devotional and celebratory music and dance', NULL, NULL),
  (42, 47, NULL, 'Dhak, devotional songs and cultural music. Dhunuchi dance and cultural performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (43, 24, NULL, 'Drums, devotional music and folk music. Folk dance and Ramlila performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (44, 29, NULL, 'Punjabi/North Indian folk songs. Folk dancing at community gatherings.', 'Devotional and celebratory music and dance', NULL, NULL),
  (45, 34, NULL, 'Devotional and festive music. Community/family celebrations.', 'Devotional and celebratory music and dance', NULL, NULL),
  (46, 48, NULL, 'Krishna bhajans. Raas and regional Krishna dances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (47, 49, NULL, 'Family and folk songs. Regional family/community dances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (48, 50, NULL, 'Nadaswaram, devotional songs and temple music. Classical/folk performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (49, 51, NULL, 'Vishnu bhajans and Divya Prabandham recitation. Temple and classical performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (50, 52, NULL, 'Bathukamma folk songs. Circular group dancing.', 'Devotional and celebratory music and dance', NULL, NULL),
  (51, 53, NULL, 'Temple and folk music. Regional performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (52, 54, NULL, 'Bihu geet and traditional instruments. Bihu dance.', 'Devotional and celebratory music and dance', NULL, NULL),
  (53, 55, NULL, 'Dappu drums and devotional music. Pothuraju and folk performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (54, 56, NULL, 'Devotional music. Temple and regional cultural performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (55, 28, NULL, 'Chhath folk songs and devotional songs. Folk/community performances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (56, 57, NULL, 'Dhol, traditional Goan instruments and folk music. Fugdi, Ghode Modni and regional folk dances.', 'Devotional and celebratory music and dance', NULL, NULL),
  (57, 58, NULL, 'Epiphany hymns
Church choir
Processional music
Religious processional performances
Three Kings performances in some regions', 'Devotional and celebratory music and dance', NULL, NULL),
  (58, 59, NULL, 'Lenten hymns
Choral music
Penitential songs
Generally not a major part of the observance.', 'Devotional and celebratory music and dance', NULL, NULL),
  (59, 60, NULL, 'Palm Sunday hymns
Passion music
Church choir
Generally not central.', 'Devotional and celebratory music and dance', NULL, NULL),
  (60, 61, NULL, 'Eucharistic hymns
Choral music
Passion hymns
Generally not practiced.', 'Devotional and celebratory music and dance', NULL, NULL),
  (61, 62, NULL, 'Easter Vigil hymns
Choir music
Not generally practiced.', 'Devotional and celebratory music and dance', NULL, NULL),
  (62, 63, NULL, 'Hallelujah hymns
Easter choir
Organ music
Gospel music
Community celebrations
Folk dances in some cultures', 'Devotional and celebratory music and dance', NULL, NULL),
  (63, 64, NULL, 'Ascension hymns and choir music.
Not generally practiced.', 'Devotional and celebratory music and dance', NULL, NULL),
  (64, 65, NULL, 'Trinity hymns and choral music.
Not generally associated.', 'Devotional and celebratory music and dance', NULL, NULL),
  (65, 66, NULL, 'Marian hymns
Church choir
Regional processional or cultural performances in some communities.', 'Devotional and celebratory music and dance', NULL, NULL),
  (66, 67, NULL, 'Saints'' hymns and choir music.
Regional cultural celebrations in some countries.', 'Devotional and celebratory music and dance', NULL, NULL),
  (67, 68, NULL, 'Requiem music and hymns.
Not normally practiced.', 'Devotional and celebratory music and dance', NULL, NULL),
  (68, 69, NULL, 'Marian hymns.
Not generally associated.', 'Devotional and celebratory music and dance', NULL, NULL),
  (69, 70, NULL, 'Liturgical hymns and chants.
Not generally associated.', 'Devotional and celebratory music and dance', NULL, NULL),
  (70, 71, NULL, 'Christian hymns
Syriac/Malayalam liturgical music
Margam Kali
Other Kerala Christian cultural performances', 'Devotional and celebratory music and dance', NULL, NULL),
  (71, 72, NULL, 'Advent hymns
Choir music
Christmas preparation songs
Not generally associated.', 'Devotional and celebratory music and dance', NULL, NULL),
  (72, 73, NULL, 'Marian hymns.
Regional processional performances in some countries.', 'Devotional and celebratory music and dance', NULL, NULL),
  (73, 74, NULL, 'Eucharistic hymns
Processional music
Choir
Some regions have traditional dances during processions.', 'Devotional and celebratory music and dance', NULL, NULL),
  (74, 75, NULL, 'Qur''an recitation and devotional practices rather than festival music.
Not practiced as a religious ritual.', 'Devotional and celebratory music and dance', NULL, NULL),
  (75, 76, NULL, 'No festival music is required', 'Devotional and celebratory music and dance', NULL, NULL),
  (76, 76, NULL, 'worship includes Talbiyah and supplication.
Not part of Hajj rituals.', 'Devotional and celebratory music and dance', NULL, NULL),
  (77, 77, NULL, 'No universal religious music.
Not a universal religious practice.', 'Devotional and celebratory music and dance', NULL, NULL),
  (78, 78, NULL, 'Religious recitation and elegies (marsiya/noha) in some Shia communities.
Not generally a religious practice.', 'Devotional and celebratory music and dance', NULL, NULL),
  (79, 79, NULL, 'Nasheeds
Religious poetry
Qasida
Mawlid recitations
Not a universal religious practice.', 'Devotional and celebratory music and dance', NULL, NULL),
  (80, 80, NULL, 'Nasheed and religious recitation in some communities.
Not generally practiced.', 'Devotional and celebratory music and dance', NULL, NULL),
  (81, 81, NULL, 'Qur''an recitation and nasheeds in some communities.
Not practiced as a religious ritual.', 'Devotional and celebratory music and dance', NULL, NULL);
SELECT setval(pg_get_serial_sequence('public.music_dance', 'id'), COALESCE(max(id), 1)) FROM public.music_dance;

-- Table: decorations (140 rows)
INSERT INTO public.decorations (id, festival_id, name, description, meaning, region, image_url) VALUES
  (1, 1, 'Diyas', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (2, 1, 'rangoli', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (3, 1, 'lamps', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (4, 1, 'flowers and lights.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (5, 2, 'Kolam', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (6, 2, 'sugarcane', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (7, 2, 'turmeric plants', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (8, 2, 'flowers and decorated pots.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (9, 3, 'Bonfires', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (10, 3, 'colours', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (11, 3, 'flowers and festive decorations.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (12, 4, 'Flowers', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (13, 4, 'lamps', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (14, 4, 'temple decorations and Shiva symbols.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (15, 5, 'Homes', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (16, 5, 'mosques and public spaces may be decorated differently by region', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (17, 6, 'Ramadan lanterns
Crescent and star
Mosque lights
Islamic calligraphy
Decorative lights
Crescent moon
Star
Lantern
Qur''an
Prayer mat', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (18, 7, 'Mosques', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (19, 7, 'homes and community spaces may be prepared for gatherings', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (20, 8, 'Varies by community', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (21, 9, 'Varies by community', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (22, 10, 'Mosque lights
Candles/lights
Islamic calligraphy
Crescent
Mosque
Prayer beads', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (23, 11, 'Mosques are beautifully decorated with candles and lights', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (24, 12, 'Christmas tree
Stars
Bells
Wreaths
Lights
Nativity scene
Candles
Star of Bethlehem
Cross
Nativity scene
Christmas tree
Angel
Bells
Manger', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (25, 13, 'Churches', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (26, 13, 'flowers', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (27, 13, 'candles and regional decorations', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (28, 14, 'Cross
Dark cloth
Candles
Minimal decoration
Cross
Crown of thorns
Nails
Crucifix', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (29, 15, 'Red cloth
Fire imagery
Dove
Flowers
Dove
Fire
Wind
Seven gifts of the Spirit', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (30, 16, 'Crescent moon
Islamic calligraphy
Lights
Mosque decorations
Crescent
Prayer mat
Eid moon
Mosque', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (31, 17, 'Mosque decorations
Crescent
Islamic calligraphy
Lights
Sacrificial animal
Kaaba
Crescent
Prayer mat', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (32, 18, 'Varies by community', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (33, 38, 'Rangoli', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (34, 38, 'kolam', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (35, 38, 'sugarcane and harvest decorations.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (36, 25, 'Yellow flowers', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (37, 25, 'books', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (38, 25, 'musical instruments and Saraswati idols.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (39, 39, 'Flowers', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (40, 39, 'temple decorations and kavadi structures.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (41, 36, 'Mango leaves', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (42, 36, 'rangoli and flowers.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (43, 37, 'Rangoli', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (44, 37, 'torans and decorated gudi.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (45, 22, 'Rama idols', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (46, 22, 'flowers', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (47, 22, 'lamps and temple decorations.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (48, 35, 'Hanuman images', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (49, 35, 'flowers and saffron flags.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (50, 30, 'Flowers', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (51, 30, 'lamps and rangoli.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (52, 40, 'Narasimha images', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (53, 40, 'flowers and lamps.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (54, 41, 'Banyan tree decorations', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (55, 41, 'flowers and rangoli.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (56, 42, 'Huge wooden chariots', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (57, 42, 'flowers and temple decorations.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (58, 26, 'Flowers', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (59, 26, 'lamps and guru portraits.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (60, 32, 'Snake images', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (61, 32, 'rangoli and flowers.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (62, 43, 'Flowers', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (63, 43, 'lamps', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (64, 43, 'mango leaves and decorated kalash.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (65, 23, 'Rakhi displays', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (66, 23, 'flowers and rangoli.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (67, 44, 'Cradles', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (68, 44, 'flowers', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (69, 44, 'peacock feathers and Krishna idols.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (70, 20, 'Ganesh idols', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (71, 20, 'pandals', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (72, 20, 'flowers and lights.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (73, 27, 'Pookalam', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (74, 27, 'lamps and floral arrangements.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (75, 45, 'Swings', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (76, 45, 'flowers and mehendi.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (77, 46, 'Flowers', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (78, 46, 'banners', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (79, 46, 'tools and machinery.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (80, 19, 'Durga idols', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (81, 19, 'Golu displays', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (82, 19, 'lamps and flowers.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (83, 47, 'Elaborate pandals', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (84, 47, 'idols', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (85, 47, 'lights and flowers.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (86, 24, 'Effigies', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (87, 24, 'stages', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (88, 24, 'flowers and lights.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (89, 29, 'Diyas', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (90, 29, 'rangoli', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (91, 29, 'decorated karwa pots.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (92, 34, 'Diyas', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (93, 34, 'rangoli and flowers.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (94, 48, 'Annakut arrangements', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (95, 48, 'flowers and Govardhan representations.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (96, 49, 'Rangoli', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (97, 49, 'lamps and flowers.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (98, 50, 'Rows of oil lamps', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (99, 50, 'kolam and flowers.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (100, 51, 'Vaikuntha Dwaram', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (101, 51, 'flowers and lamps.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (102, 52, 'Flower arrangements.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (103, 53, 'Lamps', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (104, 53, 'flowers and Vishukkani arrangements.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (105, 54, 'Traditional Assamese decorations.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (106, 55, 'Decorated Bonam pots', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (107, 55, 'neem leaves', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (108, 55, 'flowers.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (109, 56, 'Lamps', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (110, 56, 'flowers and temple lights.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (111, 28, 'Ghats', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (112, 28, 'lamps', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (113, 28, 'baskets and sugarcane.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (114, 57, 'Colourful floats', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (115, 57, 'flowers and traditional decorations.', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (116, 58, 'Star
Three Kings/Magi
Nativity scene
Candles
Star of Bethlehem
Gold', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (117, 58, 'frankincense and myrrh
Three Magi', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (118, 59, 'Cross
Ashes
Purple cloth
Candles
Ashes
Cross
Purple
Dust', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (119, 60, 'Palm branches
Cross
Purple cloth
Church flowers
Palm branch
Donkey
Cross', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (120, 61, 'Cross
Candles
White cloth
Eucharistic altar
Bread and wine
Basin and towel
Cross
Chalice', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (121, 62, 'Candles
Cross
Flowers
Paschal candle
Paschal candle
Fire
Cross
Water', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (122, 63, 'Flowers
Cross
Easter eggs
Candles
White cloth
Empty tomb
Cross
Easter egg
Lamb
Butterfly', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (123, 64, 'Cross
White cloth
Candles
Cloud
Cross
Jesus ascending to heaven', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (124, 65, 'Trinity symbols
Cross
Candles
Three interlocking circles
Triangle
Cross', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (125, 66, 'Flowers
Marian statues
Blue and white decorations
Mary
Crown
Flowers
Heaven', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (126, 67, 'Candles
Flowers
Saint images
Halo
Cross
Saints'' icons', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (127, 68, 'Candles
Flowers
Crosses
Candle
Cross
Cemetery
Prayer', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (128, 69, 'White flowers
Angel imagery
Marian images
Angel Gabriel
Lily
Mary
Book/scripture', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (129, 70, 'Mountain imagery
Light
Icons
Candles
Light
Mountain
Jesus
Moses and Elijah', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (130, 71, 'Crosses
Church flowers
Saint Thomas images
Cross
Apostle Thomas
Spear/martyrdom symbols', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (131, 72, 'Advent wreath
Four candles
Purple/rose decorations
Four candles
Wreath
Light
Star', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (132, 73, 'Blue and white
Flowers
Mary statues
Mary
Lily
Crown
Blue color', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (133, 74, 'Flowers
Altars
Eucharistic symbols
Processional banners
Eucharistic host
Chalice
Bread and wine
Monstrance', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (134, 75, 'Mosque lights
Lanterns
Islamic calligraphy
Qur''an
Crescent
Prayer beads
Mosque', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (135, 76, 'Not a major aspect.
Kaaba
Ihram
Arafat
Zamzam
Jamarat', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (136, 77, 'Islamic calligraphy
Crescent imagery
Crescent
Hijri calendar
Mosque', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (137, 78, 'Black banners in some Shia communities
Calligraphy
Mosque decorations
Muharram crescent
Karbala
Imam Husayn
Black banners in some traditions', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (138, 79, 'Green flags
Islamic calligraphy
Lights
Mosque decorations
Arabic calligraphy
Mosque
Crescent
Green banners in some traditions', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (139, 80, 'Mosque lights
Islamic calligraphy
Crescent imagery
Al-Aqsa Mosque
Crescent
Buraq in traditional artistic representation', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL),
  (140, 81, 'Qur''an calligraphy
Mosque lights
Qur''an
Crescent
Mosque', 'Ritual ornaments, lights, and floral decorations', NULL, NULL, NULL);
SELECT setval(pg_get_serial_sequence('public.decorations', 'id'), COALESCE(max(id), 1)) FROM public.decorations;

-- Table: media (82 rows)
INSERT INTO public.media (id, festival_id, type, url, caption, alt_text, source, license) VALUES
  (1, 1, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Illuminated oil lamps and festive decorations', 'Diwali', 'Curated Photo Gallery', 'Unsplash Public'),
  (2, 2, 'image', 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800', 'Traditional harvest festival customs and colorful rangoli', 'Pongal', 'Curated Photo Gallery', 'Unsplash Public'),
  (3, 3, 'image', 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800', 'Vibrant colors of spring celebration', 'Holi', 'Curated Photo Gallery', 'Unsplash Public'),
  (4, 4, 'image', 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800', 'Ancient temple aarti and sacred bells', 'Maha Shivaratri', 'Curated Photo Gallery', 'Unsplash Public'),
  (5, 5, 'image', 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800', 'Sacred mosque arches and evening lanterns', 'Eid-ul-Fitr', 'Curated Photo Gallery', 'Unsplash Public'),
  (6, 6, 'image', 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800', 'Sacred mosque arches and evening lanterns', 'Ramadan', 'Curated Photo Gallery', 'Unsplash Public'),
  (7, 7, 'image', 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800', 'Sacred mosque arches and evening lanterns', 'Eid-ul-Zuha (Eid-ul-Azha)', 'Curated Photo Gallery', 'Unsplash Public'),
  (8, 8, 'image', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'Milad-Un-Nabi cultural celebration', 'Milad-Un-Nabi', 'Curated Photo Gallery', 'Unsplash Public'),
  (9, 9, 'image', 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800', 'Sacred mosque arches and evening lanterns', 'Muharram', 'Curated Photo Gallery', 'Unsplash Public'),
  (10, 10, 'image', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'Shab-e-Barat cultural celebration', 'Shab-e-Barat', 'Curated Photo Gallery', 'Unsplash Public'),
  (11, 11, 'image', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'Shab-e-Miraj cultural celebration', 'Shab-e-Miraj', 'Curated Photo Gallery', 'Unsplash Public'),
  (12, 12, 'image', 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800', 'Festive lights and solemn church cathedral', 'Christmas', 'Curated Photo Gallery', 'Unsplash Public'),
  (13, 13, 'image', 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800', 'Festive lights and solemn church cathedral', 'Easter', 'Curated Photo Gallery', 'Unsplash Public'),
  (14, 14, 'image', 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800', 'Festive lights and solemn church cathedral', 'Good Friday', 'Curated Photo Gallery', 'Unsplash Public'),
  (15, 15, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Pentecost cultural celebration', 'Pentecost', 'Curated Photo Gallery', 'Unsplash Public'),
  (16, 16, 'image', 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800', 'Sacred mosque arches and evening lanterns', 'Eid al-Fitr', 'Curated Photo Gallery', 'Unsplash Public'),
  (17, 17, 'image', 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800', 'Sacred mosque arches and evening lanterns', 'Eid al-Adha', 'Curated Photo Gallery', 'Unsplash Public'),
  (18, 18, 'image', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'Islamic New Year cultural celebration', 'Islamic New Year', 'Curated Photo Gallery', 'Unsplash Public'),
  (19, 19, 'image', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800', 'Devotional traditional procession and floral offerings', 'Navratri', 'Curated Photo Gallery', 'Unsplash Public'),
  (20, 20, 'image', 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800', 'Lord Ganesha celebration and prasad', 'Ganesh Chaturthi', 'Curated Photo Gallery', 'Unsplash Public'),
  (21, 21, 'image', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800', 'Vrindavan devotional Raas Leela', 'Janmashtami', 'Curated Photo Gallery', 'Unsplash Public'),
  (22, 22, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Rama Navami cultural celebration', 'Rama Navami', 'Curated Photo Gallery', 'Unsplash Public'),
  (23, 23, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Raksha Bandhan cultural celebration', 'Raksha Bandhan', 'Curated Photo Gallery', 'Unsplash Public'),
  (24, 24, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Dussehra cultural celebration', 'Dussehra', 'Curated Photo Gallery', 'Unsplash Public'),
  (25, 25, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Vasant Panchami cultural celebration', 'Vasant Panchami', 'Curated Photo Gallery', 'Unsplash Public'),
  (26, 26, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Guru Purnima cultural celebration', 'Guru Purnima', 'Curated Photo Gallery', 'Unsplash Public'),
  (27, 27, 'image', 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800', 'Traditional harvest festival customs and colorful rangoli', 'Onam', 'Curated Photo Gallery', 'Unsplash Public'),
  (28, 28, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Chhath Puja cultural celebration', 'Chhath Puja', 'Curated Photo Gallery', 'Unsplash Public'),
  (29, 29, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Karwa Chauth cultural celebration', 'Karwa Chauth', 'Curated Photo Gallery', 'Unsplash Public'),
  (30, 30, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Akshaya Tritiya cultural celebration', 'Akshaya Tritiya', 'Curated Photo Gallery', 'Unsplash Public'),
  (31, 31, 'image', 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800', 'Traditional harvest festival customs and colorful rangoli', 'Makara Sankranti', 'Curated Photo Gallery', 'Unsplash Public'),
  (32, 32, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Nag Panchami cultural celebration', 'Nag Panchami', 'Curated Photo Gallery', 'Unsplash Public'),
  (33, 33, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Sharad Purnima cultural celebration', 'Sharad Purnima', 'Curated Photo Gallery', 'Unsplash Public'),
  (34, 34, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Dhanteras cultural celebration', 'Dhanteras', 'Curated Photo Gallery', 'Unsplash Public'),
  (35, 35, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Hanuman Jayanti cultural celebration', 'Hanuman Jayanti', 'Curated Photo Gallery', 'Unsplash Public'),
  (36, 36, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Ugadi cultural celebration', 'Ugadi', 'Curated Photo Gallery', 'Unsplash Public'),
  (37, 37, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Gudi Padwa cultural celebration', 'Gudi Padwa', 'Curated Photo Gallery', 'Unsplash Public'),
  (38, 38, 'image', 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800', 'Traditional harvest festival customs and colorful rangoli', 'Makar Sankranti', 'Curated Photo Gallery', 'Unsplash Public'),
  (39, 39, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Thaipusam cultural celebration', 'Thaipusam', 'Curated Photo Gallery', 'Unsplash Public'),
  (40, 40, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Narasimha Jayanti cultural celebration', 'Narasimha Jayanti', 'Curated Photo Gallery', 'Unsplash Public'),
  (41, 41, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Vat Savitri Vrat cultural celebration', 'Vat Savitri Vrat', 'Curated Photo Gallery', 'Unsplash Public'),
  (42, 42, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Jagannath Rath Yatra cultural celebration', 'Jagannath Rath Yatra', 'Curated Photo Gallery', 'Unsplash Public'),
  (43, 43, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Varalakshmi Vratam cultural celebration', 'Varalakshmi Vratam', 'Curated Photo Gallery', 'Unsplash Public'),
  (44, 44, 'image', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800', 'Vrindavan devotional Raas Leela', 'Krishna Janmashtami', 'Curated Photo Gallery', 'Unsplash Public'),
  (45, 45, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Hartalika Teej cultural celebration', 'Hartalika Teej', 'Curated Photo Gallery', 'Unsplash Public'),
  (46, 46, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Vishwakarma Puja cultural celebration', 'Vishwakarma Puja', 'Curated Photo Gallery', 'Unsplash Public'),
  (47, 47, 'image', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800', 'Devotional traditional procession and floral offerings', 'Durga Puja', 'Curated Photo Gallery', 'Unsplash Public'),
  (48, 48, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Govardhan Puja cultural celebration', 'Govardhan Puja', 'Curated Photo Gallery', 'Unsplash Public'),
  (49, 49, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Bhai Dooj cultural celebration', 'Bhai Dooj', 'Curated Photo Gallery', 'Unsplash Public'),
  (50, 50, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Karthigai Deepam cultural celebration', 'Karthigai Deepam', 'Curated Photo Gallery', 'Unsplash Public'),
  (51, 51, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Vaikuntha Ekadashi cultural celebration', 'Vaikuntha Ekadashi', 'Curated Photo Gallery', 'Unsplash Public'),
  (52, 52, 'image', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800', 'Devotional traditional procession and floral offerings', 'Bathukamma', 'Curated Photo Gallery', 'Unsplash Public'),
  (53, 53, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Vishu cultural celebration', 'Vishu', 'Curated Photo Gallery', 'Unsplash Public'),
  (54, 54, 'image', 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800', 'Traditional harvest festival customs and colorful rangoli', 'Bihu', 'Curated Photo Gallery', 'Unsplash Public'),
  (55, 55, 'image', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800', 'Devotional traditional procession and floral offerings', 'Bonalu', 'Curated Photo Gallery', 'Unsplash Public'),
  (56, 56, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Karthika Purnima cultural celebration', 'Karthika Purnima', 'Curated Photo Gallery', 'Unsplash Public'),
  (57, 57, 'image', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'Shigmo cultural celebration', 'Shigmo', 'Curated Photo Gallery', 'Unsplash Public'),
  (58, 58, 'image', 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800', 'Festive lights and solemn church cathedral', 'Epiphany', 'Curated Photo Gallery', 'Unsplash Public'),
  (59, 59, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Ash Wednesday cultural celebration', 'Ash Wednesday', 'Curated Photo Gallery', 'Unsplash Public'),
  (60, 60, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Palm Sunday cultural celebration', 'Palm Sunday', 'Curated Photo Gallery', 'Unsplash Public'),
  (61, 61, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Maundy Thursday cultural celebration', 'Maundy Thursday', 'Curated Photo Gallery', 'Unsplash Public'),
  (62, 62, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Holy Saturday cultural celebration', 'Holy Saturday', 'Curated Photo Gallery', 'Unsplash Public'),
  (63, 63, 'image', 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800', 'Festive lights and solemn church cathedral', 'Easter Sunday', 'Curated Photo Gallery', 'Unsplash Public'),
  (64, 64, 'image', 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800', 'Festive lights and solemn church cathedral', 'Ascension of Jesus', 'Curated Photo Gallery', 'Unsplash Public'),
  (65, 65, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Trinity Sunday cultural celebration', 'Trinity Sunday', 'Curated Photo Gallery', 'Unsplash Public'),
  (66, 66, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Feast of the Assumption cultural celebration', 'Feast of the Assumption', 'Curated Photo Gallery', 'Unsplash Public'),
  (67, 67, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'All Saints'' Day cultural celebration', 'All Saints'' Day', 'Curated Photo Gallery', 'Unsplash Public'),
  (68, 68, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'All Souls'' Day cultural celebration', 'All Souls'' Day', 'Curated Photo Gallery', 'Unsplash Public'),
  (69, 69, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Feast of the Annunciation cultural celebration', 'Feast of the Annunciation', 'Curated Photo Gallery', 'Unsplash Public'),
  (70, 70, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Feast of the Transfiguration cultural celebration', 'Feast of the Transfiguration', 'Curated Photo Gallery', 'Unsplash Public'),
  (71, 71, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Feast of Saint Thomas the Apostle cultural celebration', 'Feast of Saint Thomas the Apostle', 'Curated Photo Gallery', 'Unsplash Public'),
  (72, 72, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Advent cultural celebration', 'Advent', 'Curated Photo Gallery', 'Unsplash Public'),
  (73, 73, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Feast of the Immaculate Conception cultural celebration', 'Feast of the Immaculate Conception', 'Curated Photo Gallery', 'Unsplash Public'),
  (74, 74, 'image', 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800', 'Corpus Christi cultural celebration', 'Corpus Christi', 'Curated Photo Gallery', 'Unsplash Public'),
  (75, 75, 'image', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'Laylat al-Qadr cultural celebration', 'Laylat al-Qadr', 'Curated Photo Gallery', 'Unsplash Public'),
  (76, 76, 'image', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'Hajj cultural celebration', 'Hajj', 'Curated Photo Gallery', 'Unsplash Public'),
  (77, 77, 'image', 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800', 'Sacred mosque arches and evening lanterns', 'Islamic New Year — 1 Muharram', 'Curated Photo Gallery', 'Unsplash Public'),
  (78, 78, 'image', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'Ashura cultural celebration', 'Ashura', 'Curated Photo Gallery', 'Unsplash Public'),
  (79, 79, 'image', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'Mawlid al-Nabi cultural celebration', 'Mawlid al-Nabi', 'Curated Photo Gallery', 'Unsplash Public'),
  (80, 80, 'image', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'Isra and Mi''raj cultural celebration', 'Isra and Mi''raj', 'Curated Photo Gallery', 'Unsplash Public'),
  (81, 81, 'image', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'Nuzul al-Qur''an cultural celebration', 'Nuzul al-Qur''an', 'Curated Photo Gallery', 'Unsplash Public'),
  (82, 82, 'image', 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800', 'Festive lights and solemn church cathedral', 'Feast of the Epiphany', 'Curated Photo Gallery', 'Unsplash Public');
SELECT setval(pg_get_serial_sequence('public.media', 'id'), COALESCE(max(id), 1)) FROM public.media;

-- Table: references_table (81 rows)
INSERT INTO public.references_table (id, festival_id, source_name, source_type, url, author, publication_date, verification_status, last_reviewed) VALUES
  (1, 1, 'Incredible India/Government of India; regional tourism and cultural sources.', 'Reference', 'https://www.britannica.com/topic/Diwali-Hindu-festival', NULL, NULL, 'demo', NULL),
  (2, 2, 'Tamil Nadu cultural sources; Incredible India; Government of India. The Government tourism material specifically describes Pongal as thanksgiving for the harvest, Sun, nature and farm animals. [Incredible India](https://www.incredibleindia.gov.in/en/colours-of-india?utm_source=chatgpt.com)', 'Reference', 'https://en.wikipedia.org/wiki/Pongal', NULL, NULL, 'demo', NULL),
  (3, 3, 'Incredible India; Government of India; regional tourism sources. Incredible India describes Holi as a spring celebration and explains Holika Dahan and the Prahlada tradition. [Incredible India](https://www.incredibleindia.gov.in/en/festivals-and-events/holi?utm_source=chatgpt.com)', 'Reference', 'https://www.britannica.com/topic/Holi', NULL, NULL, 'demo', NULL),
  (4, 4, 'Temple institutions; Shaiva traditions; Ministry of Culture and regional tourism resources.', 'Reference', 'https://www.britannica.com/topic/Maha-Shivaratri', NULL, NULL, 'demo', NULL),
  (5, 5, 'User Provided Data', 'Reference', '', NULL, NULL, 'demo', NULL),
  (6, 6, 'User Provided Data', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'demo', NULL),
  (7, 7, 'User Provided Data', 'Reference', '', NULL, NULL, 'demo', NULL),
  (8, 8, 'User Provided Data', 'Reference', '', NULL, NULL, 'demo', NULL),
  (9, 9, 'User Provided Data', 'Reference', '', NULL, NULL, 'demo', NULL),
  (10, 10, 'User Provided Data', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'demo', NULL),
  (11, 11, 'User Provided Data', 'Reference', '', NULL, NULL, 'demo', NULL),
  (12, 12, 'Encyclopaedia Britannica – Christmas', 'Reference', 'https://www.usccb.org/prayer-worship/liturgical-year/christmas?utm_source=chatgpt.com', NULL, NULL, 'demo', NULL),
  (13, 13, 'Encyclopaedia Britannica – Easter', 'Reference', 'https://www.britannica.com/topic/Easter-holiday', NULL, NULL, 'demo', NULL),
  (14, 14, 'Encyclopaedia Britannica – Good Friday', 'Reference', 'https://www.usccb.org/resources/2026cal.pdf?utm_source=chatgpt.com', NULL, NULL, 'demo', NULL),
  (15, 15, 'Encyclopaedia Britannica – Pentecost', 'Reference', 'https://bible.usccb.org/bible/readings/052426-Day?utm_source=chatgpt.com', NULL, NULL, 'demo', NULL),
  (16, 16, 'Encyclopaedia Britannica – Eid al-Fitr', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'demo', NULL),
  (17, 17, 'Encyclopaedia Britannica – Eid al-Adha', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'demo', NULL),
  (18, 18, 'Encyclopaedia Britannica – Islamic calendar', 'Reference', 'https://www.britannica.com/topic/Islamic-calendar', NULL, NULL, 'demo', NULL),
  (19, 19, 'Incredible India/Government of India; regional cultural sources.', 'Reference', 'https://www.britannica.com/topic/Navratri', NULL, NULL, 'verified', NULL),
  (20, 20, 'Government of India; Maharashtra cultural sources; temple traditions.', 'Reference', 'https://www.britannica.com/topic/Ganesha-Chaturthi', NULL, NULL, 'verified', NULL),
  (21, 21, 'Encyclopaedia Britannica – Janmashtami', 'Reference', 'https://en.wikipedia.org/wiki/Janmashtami', NULL, NULL, 'verified', NULL),
  (22, 22, 'Ramayana tradition; temple sources; Government of India.', 'Reference', 'https://www.britannica.com/topic/Rama-Navami', NULL, NULL, 'verified', NULL),
  (23, 23, 'Government cultural sources; regional traditions.', 'Reference', 'https://www.britannica.com/topic/Raksha-Bandhan', NULL, NULL, 'verified', NULL),
  (24, 24, 'Incredible India; Government of India; regional tourism sources.', 'Reference', 'https://en.wikipedia.org/wiki/Dussehra', NULL, NULL, 'verified', NULL),
  (25, 25, 'Ministry of Culture; regional cultural institutions; Hindu religious traditions.', 'Reference', 'https://en.wikipedia.org/wiki/Vasant_Panchami', NULL, NULL, 'verified', NULL),
  (26, 26, 'Hindu, Buddhist and Jain traditions; cultural institutions.', 'Reference', 'https://en.wikipedia.org/wiki/Guru_Purnima', NULL, NULL, 'verified', NULL),
  (27, 27, 'Kerala Tourism; Government of India; cultural heritage sources.', 'Reference', 'https://en.wikipedia.org/wiki/Onam', NULL, NULL, 'verified', NULL),
  (28, 28, 'Bihar/Jharkhand cultural sources; Government of India tourism resources.', 'Reference', 'https://en.wikipedia.org/wiki/Chhath_Puja', NULL, NULL, 'verified', NULL),
  (29, 29, 'Regional cultural traditions.', 'Reference', 'https://en.wikipedia.org/wiki/Karwa_Chauth', NULL, NULL, 'verified', NULL),
  (30, 30, 'Hindu religious traditions; temple sources.', 'Reference', 'https://en.wikipedia.org/wiki/Akshaya_Tritiya', NULL, NULL, 'verified', NULL),
  (31, 31, 'Encyclopaedia Britannica – Makar Sankranti', 'Reference', 'https://en.wikipedia.org/wiki/Makara_Sankranti', NULL, NULL, 'verified', NULL),
  (32, 32, 'Hindu religious traditions; regional cultural sources.', 'Reference', 'https://en.wikipedia.org/wiki/Nag_Panchami', NULL, NULL, 'verified', NULL),
  (33, 33, 'Encyclopaedia Britannica – Sharad Purnima', 'Reference', 'https://en.wikipedia.org/wiki/Sharad_Purnima', NULL, NULL, 'verified', NULL),
  (34, 34, 'Hindu traditions; Incredible India.', 'Reference', 'https://en.wikipedia.org/wiki/Dhanteras', NULL, NULL, 'verified', NULL),
  (35, 35, 'Ramayana tradition; temple institutions.', 'Reference', 'https://en.wikipedia.org/wiki/Hanuman_Jayanti', NULL, NULL, 'verified', NULL),
  (36, 36, 'Andhra Pradesh/Telangana/Karnataka cultural sources; Government of India.', 'Reference', 'https://en.wikipedia.org/wiki/Ugadi', NULL, NULL, 'verified', NULL),
  (37, 37, 'Maharashtra cultural/tourism sources; Government of India.', 'Reference', 'https://en.wikipedia.org/wiki/Gudi_Padwa', NULL, NULL, 'verified', NULL),
  (38, 38, 'Government of India/Ministry of Culture; Incredible India; regional tourism and cultural sources.', 'Reference', 'https://en.wikipedia.org/wiki/Makar_Sankranti', NULL, NULL, 'demo', NULL),
  (39, 39, 'Tamil cultural sources; temple institutions; Ministry of Culture-related heritage resources.', 'Reference', 'https://en.wikipedia.org/wiki/Thaipusam', NULL, NULL, 'demo', NULL),
  (40, 40, 'Vaishnava scriptures and temple sources.', 'Reference', 'https://en.wikipedia.org/wiki/Narasimha_Jayanti', NULL, NULL, 'demo', NULL),
  (41, 41, 'Mahabharata tradition; regional cultural sources.', 'Reference', 'https://en.wikipedia.org/wiki/Vat_Savitri_Vrat', NULL, NULL, 'demo', NULL),
  (42, 42, 'Shri Jagannath Temple traditions; Odisha Tourism; Government cultural resources.', 'Reference', 'https://en.wikipedia.org/wiki/Jagannath_Rath_Yatra', NULL, NULL, 'demo', NULL),
  (43, 43, 'South Indian temple traditions; regional cultural sources.', 'Reference', 'https://en.wikipedia.org/wiki/Varalakshmi_Vratam', NULL, NULL, 'demo', NULL),
  (44, 44, 'Bhagavata Purana traditions; temple sources; Government tourism resources.', 'Reference', 'https://www.britannica.com/topic/Janmashtami', NULL, NULL, 'demo', NULL),
  (45, 45, 'Regional cultural sources and Hindu traditions.', 'Reference', 'https://en.wikipedia.org/wiki/Hartalika_Teej', NULL, NULL, 'demo', NULL),
  (46, 46, 'Regional cultural sources; Hindu traditions.', 'Reference', 'https://en.wikipedia.org/wiki/Vishwakarma_Puja', NULL, NULL, 'demo', NULL),
  (47, 47, 'West Bengal cultural sources; Incredible India; Government cultural resources.', 'Reference', 'https://en.wikipedia.org/wiki/Durga_Puja', NULL, NULL, 'demo', NULL),
  (48, 48, 'Vaishnava traditions; temple sources.', 'Reference', 'https://en.wikipedia.org/wiki/Govardhan_Puja', NULL, NULL, 'demo', NULL),
  (49, 49, 'Regional cultural traditions; Government tourism resources.', 'Reference', 'https://en.wikipedia.org/wiki/Bhai_Dooj', NULL, NULL, 'demo', NULL),
  (50, 50, 'Tamil Nadu temple/cultural sources.', 'Reference', 'https://en.wikipedia.org/wiki/Karthigai_Deepam', NULL, NULL, 'demo', NULL),
  (51, 51, 'Tirumala Tirupati Devasthanams; Sri Vaishnava temple traditions.', 'Reference', 'https://en.wikipedia.org/wiki/Vaikuntha_Ekadashi', NULL, NULL, 'demo', NULL),
  (52, 52, 'Telangana cultural sources; Government of India tourism resources.', 'Reference', 'https://en.wikipedia.org/wiki/Bathukamma', NULL, NULL, 'demo', NULL),
  (53, 53, 'Kerala Tourism and cultural institutions.', 'Reference', 'https://en.wikipedia.org/wiki/Vishu', NULL, NULL, 'demo', NULL),
  (54, 54, 'Assam cultural sources; Government of India tourism resources.', 'Reference', 'https://en.wikipedia.org/wiki/Bihu', NULL, NULL, 'demo', NULL),
  (55, 55, 'Telangana Tourism and cultural sources.', 'Reference', 'https://en.wikipedia.org/wiki/Bonalu', NULL, NULL, 'demo', NULL),
  (56, 56, 'Regional temple and tourism sources.', 'Reference', 'https://en.wikipedia.org/wiki/Karthika_Purnima', NULL, NULL, 'demo', NULL),
  (57, 57, 'Goa Tourism; Government cultural resources; regional heritage sources.', 'Reference', 'https://en.wikipedia.org/wiki/Shigmo', NULL, NULL, 'demo', NULL),
  (58, 58, 'Epiphany Reference', 'Reference', 'https://www.usccb.org/prayer-and-worship/liturgical-year-and-calendar/proper-calendar?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (59, 59, 'Ash Wednesday Reference', 'Reference', 'https://www.usccb.org/prayer-worship/liturgical-year/lent?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (60, 60, 'Palm Sunday Reference', 'Reference', 'https://www.usccb.org/resources/Lent-2026-calendar_English.pdf?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (61, 61, 'Maundy Thursday Reference', 'Reference', 'https://www.usccb.org/resources/2026cal.pdf?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (62, 62, 'Holy Saturday Reference', 'Reference', 'https://www.usccb.org/resources/2026cal.pdf?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (63, 63, 'Easter Sunday Reference', 'Reference', 'https://www.usccb.org/prayer-worship/liturgical-year/easter?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (64, 64, 'Ascension of Jesus Reference', 'Reference', 'https://www.usccb.org/prayer-and-worship/liturgical-year-and-calendar/christmas/announcement-of-easter-and-the-moveable-feasts?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (65, 65, 'Trinity Sunday Reference', 'Reference', 'https://en.wikipedia.org/wiki/Trinity_Sunday', NULL, NULL, 'verified', NULL),
  (66, 66, 'Feast of the Assumption Reference', 'Reference', 'https://bible.usccb.org/bible/readings/081526-Day?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (67, 67, 'All Saints'' Day Reference', 'Reference', 'https://www.usccb.org/beliefs-and-teachings/what-we-believe/canon-law/complementary-norms/canon-1246?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (68, 68, 'All Souls'' Day Reference', 'Reference', 'https://en.wikipedia.org/wiki/All_Souls''_Day', NULL, NULL, 'verified', NULL),
  (69, 69, 'Feast of the Annunciation Reference', 'Reference', 'https://www.usccb.org/resources/Lent-2026-calendar_English.pdf?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (70, 70, 'Feast of the Transfiguration Reference', 'Reference', 'https://en.wikipedia.org/wiki/Feast_of_the_Transfiguration', NULL, NULL, 'verified', NULL),
  (71, 71, 'Feast of Saint Thomas the Apostle Reference', 'Reference', 'https://en.wikipedia.org/wiki/Feast_of_Saint_Thomas_the_Apostle', NULL, NULL, 'verified', NULL),
  (72, 72, 'Advent Reference', 'Reference', 'https://www.usccb.org/prayer-and-worship/liturgical-year-and-calendar/christmas/announcement-of-easter-and-the-moveable-feasts?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (73, 73, 'Feast of the Immaculate Conception Reference', 'Reference', 'https://www.usccb.org/beliefs-and-teachings/what-we-believe/canon-law/complementary-norms/canon-1246?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (74, 74, 'Corpus Christi Reference', 'Reference', 'https://www.usccb.org/prayer-and-worship/liturgical-year-and-calendar/christmas/announcement-of-easter-and-the-moveable-feasts?utm_source=chatgpt.com', NULL, NULL, 'verified', NULL),
  (75, 75, 'Laylat al-Qadr Reference', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'verified', NULL),
  (76, 76, 'Hajj Reference', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'verified', NULL),
  (77, 77, 'Islamic New Year — 1 Muharram Reference', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'verified', NULL),
  (78, 78, 'Ashura Reference', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'verified', NULL),
  (79, 79, 'Mawlid al-Nabi Reference', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'verified', NULL),
  (80, 80, 'Isra and Mi''raj Reference', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'verified', NULL),
  (81, 81, 'Nuzul al-Qur''an Reference', 'Reference', 'https://www.al-habib.info/islamic-calendar/india/india-islamic-calendar-year-2026-ce.htm', NULL, NULL, 'verified', NULL);
SELECT setval(pg_get_serial_sequence('public.references_table', 'id'), COALESCE(max(id), 1)) FROM public.references_table;

-- Table: quiz_questions (82 rows)
INSERT INTO public.quiz_questions (id, festival_id, question, options_json, answer_index) VALUES
  (1, 1, 'What is a common symbol of Diwali?', '["Lamps","Snowflakes","Bells","Olive branches"]'::jsonb, 0),
  (2, 2, 'How many days are commonly associated with Pongal?', '["2","3","4","7"]'::jsonb, 2),
  (3, 3, 'What is strongly associated with Holi celebrations?', '["Color","Snow","Lanterns only","Harvesting"]'::jsonb, 0),
  (4, 4, 'Maha Shivaratri is associated with which deity?', '["Vishnu","Shiva","Brahma","Indra"]'::jsonb, 1),
  (5, 5, 'Eid-ul-Fitr follows which period?', '["Ramadan","Advent","Diwali","Lent"]'::jsonb, 0),
  (6, 6, 'Ramadan is the ___ month of the Islamic calendar.', '["7th","8th","9th","10th"]'::jsonb, 2),
  (7, 7, 'Eid-ul-Zuha occurs during which Islamic month?', '["Ramadan","Dhu-al-Hijjah","Muharram","Rajab"]'::jsonb, 1),
  (8, 8, 'Milad-Un-Nabi is celebrated in which Islamic month?', '["Muharram","Rabi-al-Awwal","Shawwal","Dhu-al-Hijjah"]'::jsonb, 1),
  (9, 9, 'Which month begins the Islamic calendar year?', '["Muharram","Ramadan","Shawwal","Dhu al-Hijjah"]'::jsonb, 0),
  (10, 10, 'Shab-e-Barat is observed in which month?', '["Ramadan","Shaban","Rajab","Shawwal"]'::jsonb, 1),
  (11, 11, 'Shab-e-Miraj commemorates what event?', '["The Prophet''s birth","The spiritual journey of the Prophet","The end of Ramadan","The Battle of Badr"]'::jsonb, 1),
  (12, 12, 'Christmas commemorates the birth of whom?', '["Jesus Christ","Moses","Buddha","Muhammad"]'::jsonb, 0),
  (13, 13, 'Easter commemorates the resurrection of whom?', '["Jesus Christ","Abraham","Solomon","Paul"]'::jsonb, 0),
  (14, 14, 'Good Friday occurs during which period?', '["Holy Week","Advent","Ramadan","Navratri"]'::jsonb, 0),
  (15, 15, 'Pentecost is traditionally associated with which Christian concept?', '["The Holy Spirit","The harvest only","The Islamic New Year","Diwali"]'::jsonb, 0),
  (16, 16, 'Eid al-Fitr follows which period?', '["Ramadan","Advent","Diwali","Lent"]'::jsonb, 0),
  (17, 17, 'Eid al-Adha occurs during which Islamic month?', '["Ramadan","Dhu al-Hijjah","Muharram","Rajab"]'::jsonb, 1),
  (18, 18, 'Which month begins the Islamic calendar year?', '["Muharram","Ramadan","Shawwal","Dhu al-Hijjah"]'::jsonb, 0),
  (19, 19, 'How many nights does Navratri last?', '["5","7","9","11"]'::jsonb, 2),
  (20, 20, 'Ganesh Chaturthi celebrates the birth of which deity?', '["Shiva","Ganesha","Vishnu","Brahma"]'::jsonb, 1),
  (21, 21, 'Janmashtami celebrates the birth of which avatar of Vishnu?', '["Rama","Krishna","Parashurama","Narasimha"]'::jsonb, 1),
  (22, 22, 'Rama Navami celebrates the birth of which avatar of Vishnu?', '["Krishna","Parashurama","Rama","Narasimha"]'::jsonb, 2),
  (23, 23, 'What does a sister tie on her brother''s wrist during Raksha Bandhan?', '["Flowers","Rakhi (sacred thread)","Coins","Beads"]'::jsonb, 1),
  (24, 24, 'Dussehra celebrates the victory of Rama over which demon king?', '["Kali","Ravana","Hiranyakashipu","Mahishasura"]'::jsonb, 1),
  (25, 25, 'Vasant Panchami is dedicated to which goddess?', '["Durga","Lakshmi","Saraswati","Kali"]'::jsonb, 2),
  (26, 26, 'Guru Purnima is traditionally associated with the birthday of which sage?', '["Valmiki","Veda Vyasa","Narada","Patanjali"]'::jsonb, 1),
  (27, 27, 'Onam is the harvest festival of which Indian state?', '["Tamil Nadu","Karnataka","Kerala","Andhra Pradesh"]'::jsonb, 2),
  (28, 28, 'Chhath Puja is primarily dedicated to which deity?', '["Vishnu","Surya (Sun god)","Indra","Agni"]'::jsonb, 1),
  (29, 29, 'When do women break their fast on Karwa Chauth?', '["Sunrise","Noon","After moonrise","Midnight"]'::jsonb, 2),
  (30, 30, 'What does "Akshaya" mean in Akshaya Tritiya?', '["Sacred","Inexhaustible","Golden","Bright"]'::jsonb, 1),
  (31, 31, 'Makara Sankranti is celebrated when the sun enters which zodiac sign?', '["Aries","Cancer","Capricorn (Makara)","Libra"]'::jsonb, 2),
  (32, 32, 'Nag Panchami is a festival associated with the worship of which creature?', '["Elephants","Cows","Snakes","Monkeys"]'::jsonb, 2),
  (33, 33, 'Which goddess descends to bless devotees on Sharad Purnima?', '["Durga","Saraswati","Lakshmi","Parvati"]'::jsonb, 2),
  (34, 34, 'Dhanteras is the first day of which major Hindu festival week?', '["Navratri","Holi","Diwali","Pongal"]'::jsonb, 2),
  (35, 35, 'Hanuman is celebrated as the devotee of which deity?', '["Shiva","Vishnu","Rama","Krishna"]'::jsonb, 2),
  (36, 36, 'Ugadi is the New Year of which two communities?', '["Marathi and Gujarati","Telugu and Kannada","Tamil and Malayalam","Bengali and Odia"]'::jsonb, 1),
  (37, 37, 'Gudi Padwa is the New Year celebration of which community?', '["Telugu","Tamil","Marathi","Gujarati"]'::jsonb, 2),
  (38, 38, 'Which religious tradition celebrates Makar Sankranti?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (39, 39, 'Which religious tradition celebrates Thaipusam?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (40, 40, 'Which religious tradition celebrates Narasimha Jayanti?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (41, 41, 'Which religious tradition celebrates Vat Savitri Vrat?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (42, 42, 'Which religious tradition celebrates Jagannath Rath Yatra?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (43, 43, 'Which religious tradition celebrates Varalakshmi Vratam?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (44, 44, 'Which religious tradition celebrates Krishna Janmashtami?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (45, 45, 'Which religious tradition celebrates Hartalika Teej?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (46, 46, 'Which religious tradition celebrates Vishwakarma Puja?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (47, 47, 'Which religious tradition celebrates Durga Puja?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (48, 48, 'Which religious tradition celebrates Govardhan Puja?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (49, 49, 'Which religious tradition celebrates Bhai Dooj?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (50, 50, 'Which religious tradition celebrates Karthigai Deepam?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (51, 51, 'Which religious tradition celebrates Vaikuntha Ekadashi?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (52, 52, 'Which religious tradition celebrates Bathukamma?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (53, 53, 'Which religious tradition celebrates Vishu?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (54, 54, 'Which religious tradition celebrates Bihu?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (55, 55, 'Which religious tradition celebrates Bonalu?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (56, 56, 'Which religious tradition celebrates Karthika Purnima?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (57, 57, 'Which religious tradition celebrates Shigmo?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 0),
  (58, 58, 'Which religious tradition celebrates Epiphany?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (59, 59, 'Which religious tradition celebrates Ash Wednesday?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (60, 60, 'Which religious tradition celebrates Palm Sunday?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (61, 61, 'Which religious tradition celebrates Maundy Thursday?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (62, 62, 'Which religious tradition celebrates Holy Saturday?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (63, 63, 'Which religious tradition celebrates Easter Sunday?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (64, 64, 'Which religious tradition celebrates Ascension of Jesus?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (65, 65, 'Which religious tradition celebrates Trinity Sunday?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (66, 66, 'Which religious tradition celebrates Feast of the Assumption?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (67, 67, 'Which religious tradition celebrates All Saints'' Day?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (68, 68, 'Which religious tradition celebrates All Souls'' Day?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (69, 69, 'Which religious tradition celebrates Feast of the Annunciation?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (70, 70, 'Which religious tradition celebrates Feast of the Transfiguration?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (71, 71, 'Which religious tradition celebrates Feast of Saint Thomas the Apostle?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (72, 72, 'Which religious tradition celebrates Advent?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (73, 73, 'Which religious tradition celebrates Feast of the Immaculate Conception?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (74, 74, 'Which religious tradition celebrates Corpus Christi?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2),
  (75, 75, 'Which religious tradition celebrates Laylat al-Qadr?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 1),
  (76, 76, 'Which religious tradition celebrates Hajj?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 1),
  (77, 77, 'Which religious tradition celebrates Islamic New Year — 1 Muharram?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 1),
  (78, 78, 'Which religious tradition celebrates Ashura?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 1),
  (79, 79, 'Which religious tradition celebrates Mawlid al-Nabi?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 1),
  (80, 80, 'Which religious tradition celebrates Isra and Mi''raj?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 1),
  (81, 81, 'Which religious tradition celebrates Nuzul al-Qur''an?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 1),
  (82, 82, 'Which religious tradition celebrates Feast of the Epiphany?', '["Hinduism","Islam","Christianity","Buddhism"]'::jsonb, 2);
SELECT setval(pg_get_serial_sequence('public.quiz_questions', 'id'), COALESCE(max(id), 1)) FROM public.quiz_questions;

-- Table: badges (4 rows)
INSERT INTO public.badges (id, code, name, description) VALUES
  (1, 'explorer', 'Festival Explorer', 'Explore your first festival'),
  (2, 'learner', 'Culture Learner', 'Complete a learning module'),
  (3, 'quizmaster', 'Quiz Master', 'Complete a quiz with 80% or higher'),
  (4, 'heritage', 'Heritage Explorer', 'Explore five festivals');
SELECT setval(pg_get_serial_sequence('public.badges', 'id'), COALESCE(max(id), 1)) FROM public.badges;

-- Table: festival_locations (52 rows)
INSERT INTO public.festival_locations (id, name, religion, address, city, state, country, latitude, longitude, description, image_url, source_url, place_type, seasonal_notes, verification_status, created_at, updated_at) VALUES
  (1, 'Shree Jagannath Temple', 'Hinduism', 'Grand Road, Puri, Odisha 752001', 'Puri', 'Odisha', 'India', 19.8049, 85.8179, 'One of the Char Dham pilgrimage sites, famous worldwide for the annual Ratha Yatra (chariot procession) where deities Lord Jagannath, Balabhadra and Subhadra are drawn on monumental wooden chariots along the Bada Danda.', 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800', 'https://www.jagannath.nic.in/', 'pilgrimage_destination', 'Ratha Yatra takes place annually during Ashadha Shukla Paksha Dwitiya (June/July). Giant wooden chariots are constructed anew every year.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (2, 'Kashi Vishwanath Temple & Ganga Ghats', 'Hinduism', 'Lahori Tola, Varanasi, Uttar Pradesh 221001', 'Varanasi', 'Uttar Pradesh', 'India', 25.3109, 83.0107, 'Ancient Jyotirlinga temple dedicated to Lord Shiva situated along the holy river Ganga. Epicenter for Maha Shivaratri all-night vigils, Dev Deepawali celebrations, and sacred Ganga Aarti.', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800', 'https://shrikashivishwanath.org/', 'place_of_worship', 'Maha Shivaratri night witnesses extraordinary processions and uninterrupted milk abhishekham rituals.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (3, 'Banke Bihari Temple & Braj Dham', 'Hinduism', 'Godhuli Puram, Vrindavan, Mathura, Uttar Pradesh 281121', 'Vrindavan', 'Uttar Pradesh', 'India', 27.5816, 77.7011, 'Revered Krishna temple at the heart of the Braj region. World-renowned for vibrant Lathmar Holi and Phoolon ki Holi celebrations, alongside grand Krishna Janmashtami midnight festivities.', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800', 'https://www.bihariji.org/', 'pilgrimage_destination', 'Celebrations start a week before Holi with natural flowers, gulal, and devotional Raas Leela dances.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (4, 'Sri Meenakshi Sundareswarar Temple', 'Hinduism', 'Madurai Main, Madurai, Tamil Nadu 625001', 'Madurai', 'Tamil Nadu', 'India', 9.9195, 78.1193, 'Historic Dravidian temple complex dedicated to Goddess Meenakshi and Lord Sundareswarar. Epicenter of grand Pongal harvest thanksgiving festivities, Kolam competitions, and the Chithirai celestial wedding festival.', 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=800', 'https://maduraimeenakshi.org/', 'cultural_heritage_site', 'During Pongal (mid-January), fresh clay pots of sweet rice are boiled at sunrise across temple squares accompanied by traditional nadaswaram music.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (5, 'Siddhivinayak Temple & Girgaon Chowpatty', 'Hinduism', 'SK Bole Marg, Prabhadevi, Mumbai, Maharashtra 400028', 'Mumbai', 'Maharashtra', 'India', 19.0169, 72.8304, 'Premier sanctuary of Lord Ganesha in Maharashtra, leading the 10-day Ganesh Chaturthi festival. The culmination involves mammoth city-wide processions ending in the Visarjan (immersion) ceremony at Girgaon Chowpatty beach.', 'https://images.unsplash.com/photo-1601055903647-872f22b826f6?w=800', 'https://siddhivinayak.org/', 'famous_celebration_location', 'Ganesh Chaturthi occurs in Bhadrapada month (August/September), filling Mumbai streets with dhol-tasha beats, modaks, and festive pandals.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (6, 'Batu Caves Sri Subramaniar Swamy Temple', 'Hinduism', 'Gombak, 68100 Batu Caves, Selangor', 'Kuala Lumpur', 'Selangor', 'Malaysia', 3.2374, 101.6839, 'Iconic limestone hill housing subterranean temple caves guarded by a 140-foot golden statue of Lord Murugan. The international pinnacle of the annual Thaipusam festival featuring Kavadi Attam processions.', 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800', 'https://www.malaysia.travel/', 'famous_celebration_location', 'During Thaipusam (Thai month full moon, Jan/Feb), over a million devotees undertake the barefoot 272 rainbow staircase climb carrying elaborate kavadis and milk pots.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (7, 'Sri Ranganathaswamy Temple', 'Hinduism', 'Srirangam, Tiruchirappalli, Tamil Nadu 620006', 'Srirangam', 'Tamil Nadu', 'India', 10.8624, 78.6901, 'The largest functioning Hindu temple complex in the world covering 156 acres. Renowned for the 21-day Vaikuntha Ekadashi celebrations where the sanctified Paramapada Vaasal (Gateway to Heaven) is ceremoniously opened.', 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?w=800', 'https://srirangam.org/', 'pilgrimage_destination', 'Vaikuntha Ekadashi occurs in Margazhi (Dec/Jan), drawing thousands through the northern gate of liberation.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (8, 'Thrikkakara Vamana Moorthy Temple', 'Hinduism', 'Thrikkakara, Kochi, Kerala 682021', 'Kochi', 'Kerala', 'India', 10.0381, 76.3292, 'One of the rare temples associated with the Vamana avatar and King Mahabali. It is the central origin site of Kerala’s grand harvest festival of Onam, featuring the magnificent Onasadya banquet and Athachamayam royal carnival.', 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800', 'https://keralatourism.org/', 'famous_celebration_location', 'Onam lasts 10 days in Chingam (August/September), highlighted by intricately crafted floral carpets (Pookkalam) and Pulikkali tiger dances.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (9, 'Belur Math & Bagbazar Pandal', 'Hinduism', 'Belur, Howrah, West Bengal 711202', 'Kolkata', 'West Bengal', 'India', 22.6322, 88.3559, 'Headquarters of Ramakrishna Math and the heart of Kolkata’s UNESCO-inscribed Durga Puja celebration. Commemorates Goddess Durga’s victory over Mahishasura through world-renowned artistic pandals, Dhunuchi Naach, and Sindoor Khela.', 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800', 'https://belurmath.org/', 'cultural_heritage_site', 'Celebrated in Ashwin month (Sept/Oct). Kumari Puja is ritually performed at Belur Math on Maha Ashtami.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (10, 'Masjid al-Haram (The Great Mosque)', 'Islam', 'Al Haram, Mecca 24231', 'Mecca', 'Makkah Province', 'Saudi Arabia', 21.4225, 39.8262, 'The holiest site in Islam surrounding the Kaaba. The global focal point of direction (Qibla) for Muslim prayer, the annual Hajj pilgrimage during Dhu al-Hijjah, Umrah, and monumental Eid al-Adha and Eid al-Fitr communal prayers.', 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800', 'https://gph.gov.sa/', 'pilgrimage_destination', 'Hosts millions of pilgrims during the annual Hajj (8th to 13th of Dhu al-Hijjah) and nightly Taraweeh and Tahajjud prayers during the last ten nights of Ramadan (Laylat al-Qadr).', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (11, 'Al-Masjid an-Nabawi (The Prophet''s Mosque)', 'Islam', 'Al Haram, Medina 42311', 'Medina', 'Al Madinah Province', 'Saudi Arabia', 24.4672, 39.6111, 'The second holiest mosque in Islam, built by Prophet Muhammad. Houses the Rawdah ash-Sharifah and the Green Dome. Central spiritual destination during Ramadan iftars, Milad-un-Nabi remembrance, and post-Hajj visitation.', 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800', 'https://wmn.gov.sa/', 'pilgrimage_destination', 'Famous for the longest daily communal Iftar tablecloth in the world, where dates, fresh bread and Zamzam water are shared by hundreds of thousands during Ramadan.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (12, 'Al-Aqsa Mosque Compound', 'Islam', 'Old City, Jerusalem', 'Jerusalem', 'Jerusalem', 'Palestine', 31.7761, 35.2358, 'The third holiest site in Islam, associated with the miraculous Night Journey (Isra and Miraj). Key venue for Friday prayers in Ramadan, Laylat al-Qadr supplications, and both Eid celebrations.', 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=800', 'https://whc.unesco.org/en/list/148', 'pilgrimage_destination', 'Shab-e-Miraj (27 Rajab) commemorates the celestial ascent of the Prophet from this sacred plateau.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (13, 'Jama Masjid Delhi', 'Islam', 'Chandni Chowk, Old Delhi, Delhi 110006', 'New Delhi', 'Delhi', 'India', 28.6507, 77.2334, 'One of the largest and most renowned mosques in India, constructed by Mughal Emperor Shah Jahan. Serves as the national focal point for the sighting of the Eid crescent, massive Eid morning congregations, and the bustling Ramadan night bazaars of Old Delhi.', 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800', 'https://delhitourism.gov.in/', 'famous_celebration_location', 'During Eid-ul-Fitr and Eid-ul-Adha, up to 25,000 worshippers gather across the red sandstone courtyard in synchronized prayer.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (14, 'Imambara Asfi (Bara Imambara)', 'Islam', 'Machchhi Bhavan, Lucknow, Uttar Pradesh 226003', 'Lucknow', 'Uttar Pradesh', 'India', 26.8691, 80.9131, 'Historic monumental hall built by Nawab Asaf-ud-Daula in 1784. The premier international center for solemn Muharram observances, Taziya processions, and Majlis mourning gatherings honoring Imam Husayn.', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800', 'https://uptourism.gov.in/', 'cultural_heritage_site', 'From 1st to 10th of Muharram (Ashura), historic mourning processions proceed between Bara Imambara and Chhota Imambara.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (15, 'Hazratbal Shrine', 'Islam', 'Hazratbal, Srinagar, Jammu and Kashmir 190006', 'Srinagar', 'Jammu and Kashmir', 'India', 34.1287, 74.8436, 'Pristine white marble shrine on the northern bank of Dal Lake, venerated for housing the holy relic (Moi-e-Muqqadas) of Prophet Muhammad. Focal point for Milad-Un-Nabi (Mawlid) celebrations across Kashmir.', 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800', 'https://jktourism.jk.gov.in/', 'place_of_worship', 'Relic is displayed to thousands of devotees during Milad-Un-Nabi and Shab-e-Meraj amid night-long prayers.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (16, 'Nakhoda Mosque', 'Islam', 'Rabindra Sarani, Chitpur, Kolkata, West Bengal 700073', 'Kolkata', 'West Bengal', 'India', 22.5833, 88.3575, 'The principal mosque of Kolkata, designed in the majestic Indo-Saracenic style resembling Akbar’s tomb at Sikandra. Heart of Shab-e-Barat night vigils, Ramadan food trails along Zakaria Street, and grand Eid festivities in eastern India.', 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800', 'https://wbtourism.gov.in/', 'famous_celebration_location', 'Zakaria Street outside the mosque turns into one of the subcontinent’s most famous culinary hubs during Ramadan nights.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (17, 'Church of the Nativity', 'Christianity', 'Manger Square, Bethlehem', 'Bethlehem', 'West Bank', 'Palestine', 31.7043, 35.2076, 'One of the oldest continuously operating Christian churches in the world, built over the Grotto of the Nativity marking the traditional birthplace of Jesus Christ. Epicenter of worldwide Christmas celebrations and Midnight Mass.', 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800', 'https://whc.unesco.org/en/list/1433', 'pilgrimage_destination', 'Hosts the annual Christmas Eve procession on December 24 and the traditional Eastern Orthodox Christmas celebrations on January 6-7.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (18, 'Church of the Holy Sepulchre', 'Christianity', 'Christian Quarter, Old City, Jerusalem', 'Jerusalem', 'Jerusalem', 'Palestine', 31.7785, 35.2296, 'The most sacred Christian site, encompassing both Golgotha (Calvary) where Jesus was crucified and the empty tomb (Aedicula) from which He resurrected. Central worldwide venue for Holy Week, Good Friday Way of the Cross, and Holy Saturday Holy Fire ceremony.', 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800', 'https://custodia.org/', 'pilgrimage_destination', 'Good Friday Way of the Cross leads along the Via Dolorosa to this church; the Holy Saturday Miraculous Fire ceremony precedes joyous Easter Sunday liturgies.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (19, 'St. Peter''s Basilica', 'Christianity', 'Piazza San Pietro, 00120 Vatican City', 'Vatican City', 'Rome', 'Vatican City', 41.9022, 12.4539, 'The epicenter of Roman Catholicism and one of the largest basilicas in the world. Venue for papal Christmas Eve and Easter Sunday Urbi et Orbi blessings, Pentecost mass, Corpus Christi processions, and Holy Week rites broadcast globally.', 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800', 'https://www.vatican.va/', 'pilgrimage_destination', 'Papal Midnight Mass at Christmas and Easter Vigil with baptism rites draw tens of thousands into St. Peter’s Square.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (20, 'Basilica of Bom Jesus', 'Christianity', 'Old Goa Road, Bainguinim, Goa 403402', 'Old Goa', 'Goa', 'India', 15.5009, 73.9116, 'UNESCO World Heritage landmark in Old Goa holding the sacred mortal remains of Saint Francis Xavier. Renowned center of Western Indian Christmas and Easter traditions, and the grand Feast of St. Francis Xavier on December 3.', 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800', 'https://goatourism.gov.in/', 'cultural_heritage_site', 'Goan Christmas celebrations feature midnight mass, crib (nativity) making competitions, star lanterns, and traditional Bebinca sweets.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (21, 'San Thome Cathedral Basilica', 'Christianity', '38 San Thome High Road, Mylapore, Chennai, Tamil Nadu 600004', 'Chennai', 'Tamil Nadu', 'India', 13.0334, 80.2785, 'Historic neo-Gothic Catholic cathedral built over the tomb of St. Thomas the Apostle, one of only three basilicas in the world built over an apostle’s tomb (along with St. Peter’s in Rome and Santiago de Compostela). Hub for Tamil Christian Christmas, Easter, and Feast of Saint Thomas.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://santhomechurch.com/', 'pilgrimage_destination', 'The Feast of Saint Thomas is observed in July and December with solemn processions along the Marina coastline.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (22, 'Basilica of Our Lady of Good Health', 'Christianity', 'Velankanni, Nagapattinam, Tamil Nadu 611111', 'Velankanni', 'Tamil Nadu', 'India', 10.6805, 79.8496, 'Known as the "Lourdes of the East," this coastal Marian sanctuary attracts millions of pilgrims of diverse faiths. Celebrates the annual 11-day Feast of Our Lady of Good Health (Aug 29 – Sept 8) and Feast of the Assumption.', 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800', 'https://velankannichurch.com/', 'pilgrimage_destination', 'The annual car festival in September attracts over 2 million pilgrims who dress in traditional yellow attire and carry illuminated chariots along the beach.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (23, 'St. Paul’s Cathedral & Park Street', 'Christianity', 'Cathedral Road, Maidan, Kolkata, West Bengal 700071', 'Kolkata', 'West Bengal', 'India', 22.5443, 88.3475, 'First Anglican cathedral of the Victorian era built in Gothic revival style. Serves as the spiritual centerpiece of the renowned Kolkata Christmas Festival along Park Street, featuring choral carols and light installations.', 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=800', 'https://wbtourism.gov.in/', 'famous_celebration_location', 'Midnight service on Christmas Eve draws thousands of citizens from all faiths, surrounded by illuminated heritage buildings.', 'published', '2026-10-11 16:18:18', '2026-10-11 16:18:18'),
  (25, 'Ram Janmabhoomi Temple', 'Hinduism', 'Ram Kot, Ayodhya, Uttar Pradesh 224123', 'Ayodhya', 'Uttar Pradesh', 'India', 26.7956, 82.1943, 'The historic and revered birthplace of Lord Rama, attracting millions during the grand celebration of Rama Navami with sacred chariot processions and devotional bhajans.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Ram_Mandir', 'pilgrimage_destination', 'Celebrated on Chaitra Shukla Navami (March-April) with special aartis and grand fair.', 'published', '2026-10-11 17:40:07', '2026-10-11 17:40:07'),
  (26, 'Yamuna Ghats & Mathura Vishram Ghat', 'Hinduism', 'Vishram Ghat, Mathura, Uttar Pradesh 281001', 'Mathura', 'Uttar Pradesh', 'India', 27.5029, 77.6833, 'Holy pilgrimage ghat where Yamuna and her brother Yama (Lord of Death) share the historic mythological blessing celebrated during Bhai Dooj (Yama Dwitiya) and Raksha Bandhan.', 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800', 'https://en.wikipedia.org/wiki/Bhai_Dooj', 'cultural_heritage_site', 'Brother and sister holy dips in the Yamuna during Kartik Shukla Dwitiya.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (27, 'Kalighat & Nadia Saraswati Mandap', 'Hinduism', 'Kalighat, South Kolkata, West Bengal 700026', 'Kolkata', 'West Bengal', 'India', 22.5186, 88.3426, 'Vibrant epicenter of Saraswati Puja on Vasant Panchami, where educational institutions, artists, and families welcome the goddess of learning, music, and wisdom with yellow attire and floral mandaps.', 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800', 'https://en.wikipedia.org/wiki/Vasant_Panchami', 'famous_celebration_location', 'Magha Shukla Panchami (January-February); students place books and musical instruments for blessings.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (28, 'Sarnath Dhamek Stupa & Sage Vyasa Hermitage', 'Hinduism', 'Sarnath, Varanasi, Uttar Pradesh 221007', 'Varanasi', 'Uttar Pradesh', 'India', 25.3811, 83.0227, 'Sacred center dedicated to the worship of spiritual preceptors and Sage Veda Vyasa on Ashadha Purnima. Sarnath is also where the Buddha delivered his first discourse.', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800', 'https://en.wikipedia.org/wiki/Guru_Purnima', 'pilgrimage_destination', 'Ashadha Purnima (July) with Guru Vandana, disciple gatherings, and meditation discourses.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (29, 'Ganga Ghats of Patna (Bhadra & Collectorate Ghat)', 'Hinduism', 'Ashok Rajpath, Ganga River Bank, Patna, Bihar 800004', 'Patna', 'Bihar', 'India', 25.6207, 85.1414, 'The monumental epicenter of Chhath Puja where hundreds of thousands of devotees gather in waist-deep holy river waters offering Arghya to the setting and rising Sun God (Surya) and Chhathi Maiya.', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800', 'https://en.wikipedia.org/wiki/Chhath', 'famous_celebration_location', 'Kartik Shukla Shashthi (October-November); 4-day rigorous fasting, Thekua prasad, and illuminated ghats.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (30, 'Old City & Mansa Devi Foothills', 'Hinduism', 'Mansa Devi Complex, Panchkula 134114', 'Chandigarh / Panchkula', 'Punjab / Haryana', 'India', 30.7333, 76.7794, 'Famous hub of Karwa Chauth celebrations across Punjab and Haryana, where married women observe a strict dawn-to-moonrise nirjala fast praying for the longevity and health of their spouses.', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800', 'https://en.wikipedia.org/wiki/Karva_Chauth', 'famous_celebration_location', 'Kartik Krishna Chaturthi (October-November); moonrise viewing through the Chhalni (sieve) followed by Arghya.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (31, 'Badrinath Temple & Kuber Mandir', 'Hinduism', 'Badrinath, Chamoli District, Uttarakhand 246422', 'Badrinath', 'Uttarakhand', 'India', 30.7433, 79.4938, 'Holy shrine whose sacred portals (Kapat) traditionally open to pilgrims every year on the auspicious day of Akshaya Tritiya, marking everlasting spiritual virtue and prosperity.', 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800', 'https://en.wikipedia.org/wiki/Akshaya_Tritiya', 'pilgrimage_destination', 'Vaisakha Shukla Tritiya (April-May); opening of the Himalayan Char Dham Yatra.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (32, 'Sabrimala Makara Jyothi & Ahmedabad Riverfront', 'Hinduism', 'Sabarmati Riverfront, Ahmedabad, Gujarat 380009', 'Ahmedabad', 'Gujarat', 'India', 23.0225, 72.5714, 'The world-famous venue of the International Kite Festival (Uttarayan) on Makar Sankranti, celebrating the transition of the Sun into Makara Rashi with kite-flying and sesame treats.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Makar_Sankranti', 'famous_celebration_location', '14th-15th January annually; skies filled with millions of vibrant kites, Undhiyu, and Chikki.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (33, 'Battis Shirala & Nagchandreshwar Temple', 'Hinduism', 'Mahakaleshwar Complex, Ujjain, Madhya Pradesh 456006', 'Ujjain', 'Madhya Pradesh', 'India', 23.1827, 75.7682, 'Home of the historic Nagchandreshwar shrine situated atop the Mahakaleshwar temple, opened to devotees only once a year on the holy day of Nag Panchami.', 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800', 'https://en.wikipedia.org/wiki/Naga_Panchami', 'cultural_heritage_site', 'Shravana Shukla Panchami (July-August); 24-hour non-stop darshan and milk offerings.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (34, 'Vrindavan Raas Sthali & Banke Bihari', 'Hinduism', 'Nidhivan & Seva Kunj, Vrindavan, Mathura District, UP 281121', 'Vrindavan', 'Uttar Pradesh', 'India', 27.5818, 77.7006, 'The legendary site of Maha Raas Lila where Lord Krishna danced with the Gopis under the luminous autumn full moon of Sharad Purnima, celebrated with midnight Kheer offerings.', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800', 'https://en.wikipedia.org/wiki/Sharad_Purnima', 'pilgrimage_destination', 'Ashwin Purnima (September-October); Kheer exposed to moonlight overnight to absorb divine nectar.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (35, 'Dhanvantari Temple & Zaveri Bazaar', 'Hinduism', 'Zaveri Bazaar, Kalbadevi, Mumbai, Maharashtra 400002', 'Mumbai', 'Maharashtra', 'India', 18.9515, 72.8315, 'Historic commerce and cultural landmark where millions celebrate Dhanteras by purchasing gold, silver, utensils, and performing puja to Lord Dhanvantari and Goddess Lakshmi.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Dhanteras', 'cultural_heritage_site', 'Kartik Krishna Trayodashi (October-November); lighting of 13 Yama deepams at dusk.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (36, 'Sankat Mochan Hanuman Temple & Jakhoo Temple', 'Hinduism', 'Sankat Mochan Road, Saket Nagar Colony, Varanasi 221005', 'Varanasi', 'Uttar Pradesh', 'India', 25.2817, 82.9994, 'Renowned temple established by Goswami Tulsidas, hosting week-long classical music and cultural festivities during Hanuman Jayanti with thousands chanting the Hanuman Chalisa.', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800', 'https://en.wikipedia.org/wiki/Hanuman_Jayanti', 'place_of_worship', 'Chaitra Purnima (March-April); special sindoor alankaram, boondi laddoos, and night-long bhajans.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (37, 'Vemulawada Sri Raja Rajeshwara & Hampi Virupaksha', 'Hinduism', 'Virupaksha Temple Complex, Hampi, Bellary District, Karnataka 583239', 'Hampi', 'Karnataka', 'India', 15.335, 76.46, 'Ancient UNESCO World Heritage temple where the Deccan New Year (Ugadi / Gudi Padwa) is celebrated with Panchanga Sravanam (almanac reading), raw mango torans, and Ugadi Pachadi.', 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800', 'https://en.wikipedia.org/wiki/Ugadi', 'place_of_worship', 'Chaitra Shukla Pratipada (March-April); six-taste chutney symbolizing life experiences.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (38, 'Ahobilam Nava Narasimha Kshethram', 'Hinduism', 'Ahobilam, Nandyal District, Andhra Pradesh 518543', 'Allagadda', 'Andhra Pradesh', 'India', 15.1347, 78.7303, 'The supreme holy shrine where Lord Narasimha manifested from the pillar to protect devotee Prahlada, celebrated during Narasimha Jayanti with elaborate abhishekam and Vedic chanting.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Ahobilam', 'pilgrimage_destination', 'Vaisakha Shukla Chaturdashi (May); fasting till dusk followed by panakam and neivedyam.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (39, 'Banyan Tree Kshethras of Karad & Maharashtra', 'Hinduism', 'Preeti Sangam, Karad, Maharashtra 415110', 'Karad / Satara', 'Maharashtra', 'India', 17.2885, 74.1844, 'Historic cultural center where married women perform circumambulations around sacred Banyan trees (Vat Vriksha) tying white cotton threads while commemorating Savitri’s devotion.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Vat_Purnima', 'cultural_heritage_site', 'Jyeshtha Purnima / Amavasya (May-June); prayer for partner wellbeing and marital harmony.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (40, 'Sripuram Golden Temple & Madurai Meenakshi', 'Hinduism', 'Sripuram, Thirumalaikodi, Vellore, Tamil Nadu 632055', 'Vellore', 'Tamil Nadu', 'India', 12.8711, 79.0858, 'Magnificent golden shrine dedicated to Sri Lakshmi Narayani, bustling with millions of women celebrating Varalakshmi Vratam on the second Friday of Sravana month.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Varalakshmi_Vrata', 'place_of_worship', 'Shravana Shukla Paksha Friday (July-August); sacred yellow thread (Toram) and kalasam decorating.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (41, 'Teej Mata Mandir & City Palace Ghats', 'Hinduism', 'City Palace, Gangori Bazaar, Jaipur, Rajasthan 302002', 'Jaipur', 'Rajasthan', 'India', 26.926, 75.8235, 'Royal procession venue for Hartalika Teej featuring the palanquin of Goddess Parvati, traditional Ghoomar dancers, decorated elephants, and married women adorned in vibrant green lehengas.', 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800', 'https://en.wikipedia.org/wiki/Teej', 'famous_celebration_location', 'Bhadrapada Shukla Tritiya (August-September); fasting, clay Shiva-Parvati idols, and Ghewar sweet distribution.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (42, 'Howrah Railway Workshops & Tatanagar Industrial Complex', 'Hinduism', 'Howrah Railway Works, Howrah, West Bengal 711101', 'Howrah / Kolkata', 'West Bengal', 'India', 22.5892, 88.3418, 'Industrial and artisan epicenter honoring Lord Vishwakarma, the divine architect and engineer; factories, shipyards, workshops, and transit depots install pandals and worship tools and machinery.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Vishwakarma_Puja', 'cultural_heritage_site', 'Kanya Sankranti (September 17th); sky lit with kite fights and rhythmic dhak drumbeats.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (43, 'Govardhan Hill & Dan Ghati Mandir', 'Hinduism', 'Dan Ghati, Govardhan Parikrama Marg, Mathura District, UP 281502', 'Govardhan', 'Uttar Pradesh', 'India', 27.5028, 77.4667, 'The holy 21-km sacred hill lifted by Lord Krishna on his little finger to shield the residents of Braj from torrential rains; devotees prepare colossal Annakoot mounds of 56 delicacies (Chappan Bhog).', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800', 'https://en.wikipedia.org/wiki/Govardhan_Puja', 'pilgrimage_destination', 'Kartik Shukla Pratipada (day after Diwali); barefoot parikrama and cow worship.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (44, 'Hussain Sagar & Tank Bund Bathukamma Ghat', 'Hinduism', 'Tank Bund Road, Hussain Sagar Lake, Hyderabad, Telangana 500004', 'Hyderabad', 'Telangana', 'India', 17.4239, 78.4738, 'Telangana’s vibrant floral festival venue where hundreds of thousands of women gather singing devotional folk songs and swirling around concentric floral towers before lake immersion.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Bathukamma', 'famous_celebration_location', 'Navaratri season (September-October) ending on Saddula Bathukamma.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (45, 'Latasil Field & Sivasagar Rang Ghar', 'Hinduism', 'Latasil Playground, Uzan Bazaar, Guwahati, Assam 781001', 'Guwahati / Sivasagar', 'Assam', 'India', 26.1856, 91.7523, 'The historic open-air stage for Bohag Bihu (Rongali Bihu) celebrations featuring Assamese Bihu dance, Pepa buffalo horn pipes, Dhol percussion, and pithas.', 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800', 'https://en.wikipedia.org/wiki/Bihu', 'cultural_heritage_site', 'Mid-April (Bohag), mid-January (Magh), and mid-October (Kati); agricultural seasonal markers.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (46, 'Ujjaini Mahakali Temple & Golconda Jagadambika', 'Hinduism', 'General Bazaar, Secunderabad, Telangana 500003', 'Secunderabad / Hyderabad', 'Telangana', 'India', 17.4399, 78.4983, 'Centuries-old Mahakali temple where women carry brass pots decorated with neem leaves and burning lamps on their heads (Bonam) accompanied by dancing Pothurajus wielding whips.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Bonalu', 'famous_celebration_location', 'Ashadha Masam (July-August); thanksgiving to Goddess Mahakali for communal health and warding off epidemics.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (47, 'Panaji Municipal Garden & Margao Shigmo Track', 'Hinduism', '18th June Road & Dayanand Bandodkar Marg, Panaji, Goa 403001', 'Panaji', 'Goa', 'India', 15.4989, 73.8278, 'Goa’s grand traditional springtime festival parade celebrating warrior folklore, featuring towering mythological floats, Ghode Modni warrior dancers, and colorful gulal powder.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Shigmo', 'famous_celebration_location', 'Phalguna month (March); 14 days of street festivities spanning rural villages and urban Goa.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (48, 'Chapel of the Ascension on the Mount of Olives', 'Christianity', 'Mount of Olives, Jerusalem', 'Jerusalem', 'Jerusalem District', 'Israel', 31.7789, 35.2449, 'Holy Christian shrine commemorating the site where Jesus ascended into heaven forty days after his resurrection, visited by international pilgrims during the Feast of the Ascension.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Chapel_of_the_Ascension,_Jerusalem', 'pilgrimage_destination', '40th day after Easter Sunday (May-June); special open-air masses and solemn hymns.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (49, 'Pantheon (Santa Maria ad Martyres) & San Callisto', 'Christianity', 'Piazza della Rotonda, 00186 Roma RM, Italy', 'Rome', 'Lazio', 'Italy', 41.8986, 12.4769, 'Historic Roman basilica consecrated by Pope Boniface IV in 609 AD to Mary and all Christian martyrs, establishing the solemn Christian tradition of All Saints’ Day (Nov 1) and All Souls’ Day (Nov 2).', 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800', 'https://en.wikipedia.org/wiki/All_Saints%27_Day', 'place_of_worship', 'November 1st and 2nd; candlelight cemetery vigils, memorial flowers, and requiem masses.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (50, 'Basilica of the Annunciation', 'Christianity', 'Casa Nova Street, Nazareth, Israel', 'Nazareth', 'Northern District', 'Israel', 32.702, 35.2978, 'Major Christian Marian pilgrimage basilica built over the grotto where the Archangel Gabriel announced the incarnation to the Virgin Mary, celebrated on March 25th (Annunciation) and December 8th.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Basilica_of_the_Annunciation', 'pilgrimage_destination', 'March 25th and December 8th; solemn international liturgies and candlelight processions.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (51, 'Church of the Transfiguration atop Mount Tabor', 'Christianity', 'Mount Tabor Summit, Lower Galilee, Israel', 'Mount Tabor', 'Lower Galilee', 'Israel', 32.6865, 35.3905, 'Breathtaking Franciscan and Eastern Orthodox holy site traditionally identified as the mountain where Jesus was transfigured in radiant glory before Peter, James, and John.', 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800', 'https://en.wikipedia.org/wiki/Church_of_the_Transfiguration', 'pilgrimage_destination', 'August 6th (August 19th in Julian calendar); fruit blessing services and mountain vigil.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (52, 'Al-Masjid an-Nabawi (The Prophet’s Mosque)', 'Islam', 'Al Haram, Medina 42311, Saudi Arabia', 'Medina', 'Al Madinah Province', 'Saudi Arabia', 24.4672, 39.6111, 'The second holiest site in Islam commemorating the Hijra (migration of Prophet Muhammad from Mecca to Medina in 622 CE), which marks the official start of the Islamic lunar calendar (1 Muharram).', 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800', 'https://en.wikipedia.org/wiki/Al-Masjid_an-Nabawi', 'place_of_worship', '1st of Muharram; prayers for peace, spiritual renewal, and sermons on the significance of the Hijra.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05'),
  (53, 'Cave of Hira atop Jabal al-Nour', 'Islam', 'Jabal al-Nour, Mecca, Saudi Arabia', 'Mecca', 'Makkah Province', 'Saudi Arabia', 21.4578, 39.8592, 'The revered mountain cave where the first verses of the Holy Quran were revealed to Prophet Muhammad by the Angel Jibreel (Gabriel), commemorated annually during Ramadan as Nuzul al-Quran.', 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800', 'https://en.wikipedia.org/wiki/Hira', 'pilgrimage_destination', 'Observed on 17th or 27th night of Ramadan; night-long Quran recitations and charitable donations.', 'published', '2026-10-11 17:41:05', '2026-10-11 17:41:05');
SELECT setval(pg_get_serial_sequence('public.festival_locations', 'id'), COALESCE(max(id), 1)) FROM public.festival_locations;

-- Table: festival_location_relations (126 rows)
INSERT INTO public.festival_location_relations (id, location_id, festival_id, significance_notes, is_primary_celebration_site) VALUES
  (1, 1, 42, NULL, TRUE),
  (2, 1, 1, NULL, TRUE),
  (3, 2, 4, NULL, TRUE),
  (4, 2, 1, NULL, TRUE),
  (5, 2, 56, NULL, TRUE),
  (6, 3, 3, NULL, TRUE),
  (7, 3, 44, NULL, TRUE),
  (8, 3, 21, NULL, TRUE),
  (9, 4, 2, NULL, TRUE),
  (10, 4, 50, NULL, TRUE),
  (11, 4, 19, NULL, TRUE),
  (12, 5, 20, NULL, TRUE),
  (13, 5, 37, NULL, TRUE),
  (14, 6, 39, NULL, TRUE),
  (15, 6, 19, NULL, TRUE),
  (16, 7, 51, NULL, TRUE),
  (17, 7, 1, NULL, TRUE),
  (18, 8, 27, NULL, TRUE),
  (19, 8, 53, NULL, TRUE),
  (20, 9, 47, NULL, TRUE),
  (21, 9, 19, NULL, TRUE),
  (22, 9, 24, NULL, TRUE),
  (23, 10, 5, NULL, TRUE),
  (24, 10, 7, NULL, TRUE),
  (25, 10, 16, NULL, TRUE),
  (26, 10, 17, NULL, TRUE),
  (27, 10, 6, NULL, TRUE),
  (28, 10, 76, NULL, TRUE),
  (29, 10, 75, NULL, TRUE),
  (30, 11, 6, NULL, TRUE),
  (31, 11, 5, NULL, TRUE),
  (32, 11, 16, NULL, TRUE),
  (33, 11, 8, NULL, TRUE),
  (34, 11, 79, NULL, TRUE),
  (35, 11, 18, NULL, TRUE),
  (36, 12, 11, NULL, TRUE),
  (37, 12, 80, NULL, TRUE),
  (38, 12, 6, NULL, TRUE),
  (39, 12, 5, NULL, TRUE),
  (40, 12, 16, NULL, TRUE),
  (41, 12, 75, NULL, TRUE),
  (42, 13, 5, NULL, TRUE),
  (43, 13, 7, NULL, TRUE),
  (44, 13, 16, NULL, TRUE),
  (45, 13, 17, NULL, TRUE),
  (46, 13, 6, NULL, TRUE),
  (47, 13, 8, NULL, TRUE),
  (48, 14, 9, NULL, TRUE),
  (49, 14, 78, NULL, TRUE),
  (50, 14, 18, NULL, TRUE),
  (51, 15, 8, NULL, TRUE),
  (52, 15, 79, NULL, TRUE),
  (53, 15, 11, NULL, TRUE),
  (54, 15, 10, NULL, TRUE),
  (55, 16, 10, NULL, TRUE),
  (56, 16, 6, NULL, TRUE),
  (57, 16, 5, NULL, TRUE),
  (58, 16, 16, NULL, TRUE),
  (59, 17, 12, NULL, TRUE),
  (60, 17, 72, NULL, TRUE),
  (61, 17, 58, NULL, TRUE),
  (62, 17, 82, NULL, TRUE),
  (63, 18, 13, NULL, TRUE),
  (64, 18, 63, NULL, TRUE),
  (65, 18, 14, NULL, TRUE),
  (66, 18, 60, NULL, TRUE),
  (67, 18, 61, NULL, TRUE),
  (68, 18, 62, NULL, TRUE),
  (69, 19, 12, NULL, TRUE),
  (70, 19, 13, NULL, TRUE),
  (71, 19, 63, NULL, TRUE),
  (72, 19, 14, NULL, TRUE),
  (73, 19, 15, NULL, TRUE),
  (74, 19, 74, NULL, TRUE),
  (75, 19, 59, NULL, TRUE),
  (76, 19, 65, NULL, TRUE),
  (77, 20, 12, NULL, TRUE),
  (78, 20, 13, NULL, TRUE),
  (79, 20, 14, NULL, TRUE),
  (80, 20, 72, NULL, TRUE),
  (81, 21, 12, NULL, TRUE),
  (82, 21, 13, NULL, TRUE),
  (83, 21, 14, NULL, TRUE),
  (84, 21, 71, NULL, TRUE),
  (85, 21, 60, NULL, TRUE),
  (86, 22, 66, NULL, TRUE),
  (87, 22, 12, NULL, TRUE),
  (88, 22, 13, NULL, TRUE),
  (89, 22, 14, NULL, TRUE),
  (90, 23, 12, NULL, TRUE),
  (91, 23, 13, NULL, TRUE),
  (92, 23, 14, NULL, TRUE),
  (93, 23, 72, NULL, TRUE),
  (95, 25, 22, NULL, TRUE),
  (96, 26, 23, NULL, TRUE),
  (97, 26, 49, NULL, TRUE),
  (98, 27, 25, NULL, TRUE),
  (99, 28, 26, NULL, TRUE),
  (100, 29, 28, NULL, TRUE),
  (101, 30, 29, NULL, TRUE),
  (102, 31, 30, NULL, TRUE),
  (103, 32, 31, NULL, TRUE),
  (104, 32, 38, NULL, TRUE),
  (105, 33, 32, NULL, TRUE),
  (106, 34, 33, NULL, TRUE),
  (107, 35, 34, NULL, TRUE),
  (108, 36, 35, NULL, TRUE),
  (109, 37, 36, NULL, TRUE),
  (110, 38, 40, NULL, TRUE),
  (111, 39, 41, NULL, TRUE),
  (112, 40, 43, NULL, TRUE),
  (113, 41, 45, NULL, TRUE),
  (114, 42, 46, NULL, TRUE),
  (115, 43, 48, NULL, TRUE),
  (116, 44, 52, NULL, TRUE),
  (117, 45, 54, NULL, TRUE),
  (118, 46, 55, NULL, TRUE),
  (119, 47, 57, NULL, TRUE),
  (120, 48, 64, NULL, TRUE),
  (121, 49, 67, NULL, TRUE),
  (122, 49, 68, NULL, TRUE),
  (123, 50, 69, NULL, TRUE),
  (124, 50, 73, NULL, TRUE),
  (125, 51, 70, NULL, TRUE),
  (126, 52, 77, NULL, TRUE),
  (127, 53, 81, NULL, TRUE);
SELECT setval(pg_get_serial_sequence('public.festival_location_relations', 'id'), COALESCE(max(id), 1)) FROM public.festival_location_relations;

-- Table: users (8 rows)
INSERT INTO public.users (id, name, email, password_hash, role, created_at) VALUES
  (1, 'Demo User', 'demo@faithfest.local', '59fc52fc49b5ac6a240d9d89ad8ac915:738e66e6d0e338946e2cf3b665de32a01abccacb356e3e9d429af28738b5f8ee19e8bb4a9b79b2efd1270280dd670aeacf8f9ce32afafcb9e972527d8cc84c0d', 'user', '2026-10-08 05:39:28'),
  (2, 'FaithFest Admin', 'admin@faithfest.local', '2f956e4cd997e40719501d168d815bb8:ae47d68f42012066357208a87f6b0dc3b68a0d1cc94452447ee1d9e7e0244f358ebfbaa5c0d3eaba248814b4213a6efe8786efbed6205a8b12947aa48c58fa16', 'admin', '2026-10-08 05:39:28'),
  (4, 'Super Admin', 'superadmin@faithfest.local', '4ef1252290244d42517e66cfc4255294:f109caf55a778e79a2169745aca1133ea27986ee73f3b35b156ede6ab7bd9b06b488f1c229137f25d68b53c5cbfeac769bf0dfe51d8b38754248ad050811e0a0', 'admin', '2026-10-11 18:37:02'),
  (5, 'bhanu', 'chandrasekhar.epperla@tcs.com', 'a7807541343156e66a6ab6e79b655f47:52d090c4b72979d6f8b59cfd082c91d6dfdb5cb4575ed02c2af15025a73bd74dc007504bf0a90aa356718bc63609267d13f025b0c9e82fd52c63a94cf7cf22b4', 'admin', '2026-10-13 04:19:32'),
  (6, 'kiran', 'ppavankiran123@gmail.com', '6875fa342a176eb7cc529cc76e2ede38:60fc3409067e25c34bf9acb8934be86353f9b3d86a1d7fdb11970664ad417a868e4324ab358271ce42d89671d43a5df37b3a841a94198082cf43b3fe1c2818e2', 'admin', '2026-11-04 06:18:29'),
  (7, 'Test Google Explorer', 'test.explorer@gmail.com', '69bed9e79745a06266a6a3af8f022228:1c70c3322afbd7beb574aa01bf60e06c0a71af4f1f43eef745353526a94608bb100acff9cba25ed34ece039920b72b90139a1c8f658d01315add1dff47c238b5', 'user', '2026-11-04 08:57:51'),
  (8, 'Venky Google User', 'google.user.1793782908706@gmail.com', '851702beab16d9d65e47eff3e847ffe1:4a402d2372039b77ed5601d10cdb96eaa8e9666c2f1b03f6c346ea32add0750eef963071a544db7c36d6e33fc0ad1a63e9a0f7d6cc60f0bf6ff3964cdfafe805', 'user', '2026-11-04 09:01:48'),
  (9, 'Verified Google Explorer', 'credential.verified@gmail.com', 'b507a078be91c33a3e717e937ef3e997:4d650aa9be3a4837d3130c218b7e6cb9446adc991679f89fa9b09149f4d6148b03e0ea59c86582c670cd30df72fa400409d9bdaca8e15aca5774a29beee9f203', 'user', '2026-11-04 09:01:48');
SELECT setval(pg_get_serial_sequence('public.users', 'id'), COALESCE(max(id), 1)) FROM public.users;

-- Table: calendar_events (Core 2026/2027 Events, 301 rows)
INSERT INTO public.calendar_events (id, religion_id, festival_id, event_date, year, month, day, weekday, title, lunar_month, tithi, source) VALUES
  (1, 2, 11, '2026-01-16', 2026, 1, 16, 'Monday', 'Isra Miraj (27 Rajab 1447 Hijri)', 'Rajab', '27 Rajab', 'User Provided Data'),
  (2, 2, NULL, '2026-01-20', 2026, 1, 20, 'Tuesday', 'Beginning Of Shaban (1 Shaban 1447 Hijri)', 'Shaban', '1 Shaban', 'User Provided Data'),
  (3, 2, 10, '2026-02-03', 2026, 2, 3, 'Tuesday', 'Half Shaban (15 Shaban 1447 Hijri) - Shab-e-Barat', 'Shaban', '15 Shaban', 'User Provided Data'),
  (4, 2, 6, '2026-02-17', 2026, 2, 17, 'Tuesday', 'Beginning of Ramadan Fasting Month (1 Ramadan 1447 Hijri)', 'Ramadan', '1 Ramadan', 'User Provided Data'),
  (5, 2, NULL, '2026-03-07', 2026, 3, 7, 'Saturday', 'Nuzul-Ul-Quran (17 Ramadan 1447 Hijri)', 'Ramadan', '17 Ramadan', 'User Provided Data'),
  (6, 2, NULL, '2026-03-16', 2026, 3, 16, 'Monday', 'Layat-Ul-Qadar (27 Ramadan 1447 Hijri)', 'Ramadan', '27 Ramadan', 'User Provided Data'),
  (7, 2, 5, '2026-03-20', 2026, 3, 20, 'Friday', 'Eid-Ul-Fitr (1 Shawwal 1447 Hijri)', 'Shawwal', '1 Shawwal', 'User Provided Data'),
  (8, 2, NULL, '2026-04-18', 2026, 4, 18, 'Saturday', 'Beginning Of Dhul Qada (1 Dhul-Qada 1447 Hijri)', 'Dhul-Qada', '1 Dhul-Qada', 'User Provided Data'),
  (9, 2, NULL, '2026-05-18', 2026, 5, 18, 'Monday', 'Beginning Of Dhul Hijjah (1 Dhul-Hijjah 1447 Hijri)', 'Dhul-Hijjah', '1 Dhul-Hijjah', 'User Provided Data'),
  (10, 2, NULL, '2026-05-26', 2026, 5, 26, 'Tuesday', 'Waqaf in Arafah / Hajj (9 Dhul-Hijjah 1447 Hijri)', 'Dhul-Hijjah', '9 Dhul-Hijjah', 'User Provided Data'),
  (11, 2, 7, '2026-05-27', 2026, 5, 27, 'Wednesday', 'Eid-Ul-Adha (10 Dhul-Hijjah 1447 Hijri)', 'Dhul-Hijjah', '10 Dhul-Hijjah', 'User Provided Data'),
  (12, 2, NULL, '2026-05-28', 2026, 5, 28, 'Thursday', 'Day Of Tashreeq (11-13 Dhul-Hijjah 1447 Hijri)', 'Dhul-Hijjah', '11 Dhul-Hijjah', 'User Provided Data'),
  (13, 2, 9, '2026-06-26', 2026, 6, 26, 'Friday', 'Beginning Of Muharram / Ashura Fast (10 Muharram 1448 Hijri)', 'Muharram', '10 Muharram', 'User Provided Data'),
  (14, 2, NULL, '2026-07-15', 2026, 7, 15, 'Wednesday', 'Beginning Of Saffar (1 Saffar 1448 Hijri)', 'Saffar', '1 Saffar', 'User Provided Data'),
  (15, 2, NULL, '2026-08-14', 2026, 8, 14, 'Friday', 'Beginning Of Rabi-Ul-Awal (1 Rabi-Al-Awal 1448 Hijri)', 'Rabi-Al-Awal', '1 Rabi-Al-Awal', 'User Provided Data'),
  (16, 2, 8, '2026-08-24', 2026, 8, 24, 'Monday', 'Eid-Ul-Milad / Prophet’s Birthday (1 Rabi-Al-Awal 1448 Hijri)', 'Rabi-Al-Awal', '1 Rabi-Al-Awal', 'User Provided Data'),
  (17, 2, NULL, '2026-09-12', 2026, 9, 12, 'Saturday', 'Beginning of Rabi-Ul-Dhani (1 Rabi-Al-Dhani 1448 Hijri)', 'Rabi-Al-Dhani', '1 Rabi-Al-Dhani', 'User Provided Data'),
  (18, 2, NULL, '2026-10-12', 2026, 10, 12, 'Monday', 'Beginning of Jamada-Ul-Ula (1 Jamada-Al-Ula 1448 Hijri)', 'Jamada-Al-Ula', '1 Jamada-Al-Ula', 'User Provided Data'),
  (19, 2, NULL, '2026-11-11', 2026, 11, 11, 'Wednesday', 'Beginning of Jamada-Ul-Akhirah (1 Jumada-Al-Akhirah 1448 Hijri)', 'Jumada-Al-Akhirah', '1 Jumada-Al-Akhirah', 'User Provided Data'),
  (30856, 1, NULL, '2026-01-03', 2026, 1, 3, 'Saturday', 'Pausha Purnima', 'Pausha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30857, 1, NULL, '2026-01-06', 2026, 1, 6, 'Tuesday', 'Sakat Chauth', 'Magha', 'Krishna Chaturthi', 'Hindu calendar dataset (1900–2100)'),
  (30858, 1, NULL, '2026-01-14', 2026, 1, 14, 'Wednesday', 'Shattila Ekadashi', 'Magha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30859, 1, 2, '2026-01-14', 2026, 1, 14, 'Wednesday', 'Pongal', 'Magha', 'on Makara Sankranti day', 'Hindu calendar dataset (1900–2100)'),
  (30860, 1, 31, '2026-01-14', 2026, 1, 14, 'Wednesday', 'Makara Sankranti', 'Magha', 'Dhanu to Makara transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30861, 1, NULL, '2026-01-18', 2026, 1, 18, 'Sunday', 'Mauni Amavas', 'Magha', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (30862, 1, 25, '2026-01-23', 2026, 1, 23, 'Friday', 'Vasant Panchami', 'Magha', 'Shukla Panchami', 'Hindu calendar dataset (1900–2100)'),
  (30863, 1, NULL, '2026-01-25', 2026, 1, 25, 'Sunday', 'Ratha Saptami', 'Magha', 'Shukla Saptami', 'Hindu calendar dataset (1900–2100)'),
  (30864, 1, NULL, '2026-01-26', 2026, 1, 26, 'Monday', 'Bhishma Ashtami', 'Magha', 'Shukla Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (30865, 1, NULL, '2026-01-29', 2026, 1, 29, 'Thursday', 'Jaya Ekadashi', 'Magha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30866, 1, NULL, '2026-02-01', 2026, 2, 1, 'Sunday', 'Magha Purnima', 'Magha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30867, 1, NULL, '2026-02-13', 2026, 2, 13, 'Friday', 'Kumbha Sankranti', 'Magha', 'Makara to Kumbha transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30868, 1, NULL, '2026-02-13', 2026, 2, 13, 'Friday', 'Vijaya Ekadashi', 'Phalguna', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30869, 1, 4, '2026-02-15', 2026, 2, 15, 'Sunday', 'Maha Shivaratri', 'Phalguna', 'Krishna Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (30870, 1, NULL, '2026-02-17', 2026, 2, 17, 'Tuesday', 'Surya Grahan *Valayakara', 'Phalguna', 'occurs during Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (30871, 1, NULL, '2026-02-27', 2026, 2, 27, 'Friday', 'Amalaki Ekadashi', 'Phalguna', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30872, 1, NULL, '2026-03-03', 2026, 3, 3, 'Tuesday', 'Phalguna Purnima', 'Phalguna', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30873, 1, NULL, '2026-03-03', 2026, 3, 3, 'Tuesday', 'Chandra Grahan *Purna', 'Phalguna', 'occurs during Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30874, 1, 3, '2026-03-03', 2026, 3, 3, 'Tuesday', 'Holika Dahan', 'Phalguna', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30875, 1, 3, '2026-03-03', 2026, 3, 3, 'Tuesday', 'Chhoti Holi', 'Phalguna', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30876, 1, 3, '2026-03-04', 2026, 3, 4, 'Wednesday', 'Holi', 'Chaitra', 'Krishna Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (30877, 1, NULL, '2026-03-11', 2026, 3, 11, 'Wednesday', 'Sheetala Ashtami', 'Chaitra', 'Krishna Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (30878, 1, NULL, '2026-03-11', 2026, 3, 11, 'Wednesday', 'Basoda', 'Chaitra', 'Krishna Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (30879, 1, NULL, '2026-03-15', 2026, 3, 15, 'Sunday', 'Meena Sankranti', 'Chaitra', 'Kumbha to Meena transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30880, 1, NULL, '2026-03-15', 2026, 3, 15, 'Sunday', 'Papamochani Ekadashi', 'Chaitra', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30881, 1, NULL, '2026-03-19', 2026, 3, 19, 'Thursday', 'Nutan Varsh Prarambha', 'Chaitra', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (30882, 1, 36, '2026-03-19', 2026, 3, 19, 'Thursday', 'Ugadi', 'Chaitra', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (30883, 1, 37, '2026-03-19', 2026, 3, 19, 'Thursday', 'Gudi Padwa', 'Chaitra', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (30884, 1, 19, '2026-03-19', 2026, 3, 19, 'Thursday', 'Chaitra Navratri', 'Chaitra', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (30885, 1, NULL, '2026-03-21', 2026, 3, 21, 'Saturday', 'Gauri Puja', 'Chaitra', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (30886, 1, NULL, '2026-03-21', 2026, 3, 21, 'Saturday', 'Gangaur', 'Chaitra', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (30887, 1, NULL, '2026-03-24', 2026, 3, 24, 'Tuesday', 'Yamuna Chhath', 'Chaitra', 'Shukla Shashthi', 'Hindu calendar dataset (1900–2100)'),
  (30888, 1, 22, '2026-03-26', 2026, 3, 26, 'Thursday', 'Rama Navami *Smarta', 'Chaitra', 'Shukla Navami', 'Hindu calendar dataset (1900–2100)'),
  (30889, 1, 22, '2026-03-27', 2026, 3, 27, 'Friday', 'Rama Navami *ISKCON', 'Chaitra', 'Shukla Navami', 'Hindu calendar dataset (1900–2100)'),
  (30890, 1, NULL, '2026-03-27', 2026, 3, 27, 'Friday', 'Swaminarayan Jayanti', 'Chaitra', 'Shukla Navami', 'Hindu calendar dataset (1900–2100)'),
  (30891, 1, NULL, '2026-03-29', 2026, 3, 29, 'Sunday', 'Kamada Ekadashi', 'Chaitra', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30892, 1, 35, '2026-04-02', 2026, 4, 2, 'Thursday', 'Hanuman Jayanti', 'Chaitra', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30893, 1, NULL, '2026-04-02', 2026, 4, 2, 'Thursday', 'Hanuman Janmotsava', 'Chaitra', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30894, 1, NULL, '2026-04-02', 2026, 4, 2, 'Thursday', 'Chaitra Purnima', 'Chaitra', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30895, 1, NULL, '2026-04-13', 2026, 4, 13, 'Monday', 'Varuthini Ekadashi', 'Vaishakha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30896, 1, NULL, '2026-04-14', 2026, 4, 14, 'Tuesday', 'Mesha Sankranti', 'Vaishakha', 'Meena to Mesha transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30897, 1, NULL, '2026-04-14', 2026, 4, 14, 'Tuesday', 'Solar New Year', 'Vaishakha', 'first day of Hindu Solar calendar', 'Hindu calendar dataset (1900–2100)'),
  (30898, 1, NULL, '2026-04-19', 2026, 4, 19, 'Sunday', 'Parashurama Jayanti', 'Vaishakha', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (30899, 1, 30, '2026-04-19', 2026, 4, 19, 'Sunday', 'Akshaya Tritiya', 'Vaishakha', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (30900, 1, NULL, '2026-04-23', 2026, 4, 23, 'Thursday', 'Ganga Saptami', 'Vaishakha', 'Shukla Saptami', 'Hindu calendar dataset (1900–2100)'),
  (30901, 1, NULL, '2026-04-25', 2026, 4, 25, 'Saturday', 'Sita Navami', 'Vaishakha', 'Shukla Navami', 'Hindu calendar dataset (1900–2100)'),
  (30902, 1, NULL, '2026-04-27', 2026, 4, 27, 'Monday', 'Mohini Ekadashi', 'Vaishakha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30903, 1, NULL, '2026-04-30', 2026, 4, 30, 'Thursday', 'Narasimha Jayanti', 'Vaishakha', 'Shukla Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (30904, 1, NULL, '2026-05-01', 2026, 5, 1, 'Friday', 'Buddha Purnima', 'Vaishakha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30905, 1, NULL, '2026-05-01', 2026, 5, 1, 'Friday', 'Vaishakha Purnima', 'Vaishakha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30906, 1, NULL, '2026-05-02', 2026, 5, 2, 'Saturday', 'Narada Jayanti', 'Jyeshtha', 'Krishna Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (30907, 1, NULL, '2026-05-13', 2026, 5, 13, 'Wednesday', 'Apara Ekadashi', 'Jyeshtha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30908, 1, NULL, '2026-05-15', 2026, 5, 15, 'Friday', 'Vrishabha Sankranti', 'Jyeshtha', 'Mesha to Vrishabha transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30909, 1, NULL, '2026-05-16', 2026, 5, 16, 'Saturday', 'Vat Savitri Vrat', 'Jyeshtha', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (30910, 1, NULL, '2026-05-16', 2026, 5, 16, 'Saturday', 'Shani Jayanti', 'Jyeshtha', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (30911, 1, 24, '2026-05-25', 2026, 5, 25, 'Monday', 'Ganga Dussehra', 'Jyeshtha', 'Shukla Dashami', 'Hindu calendar dataset (1900–2100)'),
  (30912, 1, NULL, '2026-05-27', 2026, 5, 27, 'Wednesday', 'Padmini Ekadashi', 'Jyeshtha Adhika', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30913, 1, NULL, '2026-05-31', 2026, 5, 31, 'Sunday', 'Jyeshtha Adhika Purnima', 'Jyeshtha Adhika', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30914, 1, NULL, '2026-06-11', 2026, 6, 11, 'Thursday', 'Parama Ekadashi', 'Jyeshtha Adhika', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30915, 1, NULL, '2026-06-15', 2026, 6, 15, 'Monday', 'Mithuna Sankranti', 'Jyeshtha Adhika', 'Vrishabha to Mithuna transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30916, 1, NULL, '2026-06-25', 2026, 6, 25, 'Thursday', 'Nirjala Ekadashi', 'Jyeshtha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30917, 1, NULL, '2026-06-29', 2026, 6, 29, 'Monday', 'Vat Purnima Vrat', 'Jyeshtha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30918, 1, NULL, '2026-06-29', 2026, 6, 29, 'Monday', 'Jyeshtha Purnima', 'Jyeshtha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30919, 1, NULL, '2026-07-10', 2026, 7, 10, 'Friday', 'Yogini Ekadashi', 'Ashadha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30920, 1, NULL, '2026-07-11', 2026, 7, 11, 'Saturday', 'Gauna Yogini Ekadashi', 'Ashadha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30921, 1, NULL, '2026-07-16', 2026, 7, 16, 'Thursday', 'Jagannath Rathyatra', 'Ashadha', 'Shukla Dwitiya', 'Hindu calendar dataset (1900–2100)'),
  (30922, 1, NULL, '2026-07-16', 2026, 7, 16, 'Thursday', 'Karka Sankranti', 'Ashadha', 'Mithuna to Karka transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30923, 1, NULL, '2026-07-25', 2026, 7, 25, 'Saturday', 'Devshayani Ekadashi', 'Ashadha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30924, 1, 26, '2026-07-29', 2026, 7, 29, 'Wednesday', 'Guru Purnima', 'Ashadha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30925, 1, NULL, '2026-07-29', 2026, 7, 29, 'Wednesday', 'Ashadha Purnima', 'Ashadha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30926, 1, NULL, '2026-08-09', 2026, 8, 9, 'Sunday', 'Kamika Ekadashi', 'Shravana', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30927, 1, NULL, '2026-08-12', 2026, 8, 12, 'Wednesday', 'Surya Grahan *Purna', 'Shravana', 'occurs during Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (30928, 1, NULL, '2026-08-15', 2026, 8, 15, 'Saturday', 'Hariyali Teej', 'Shravana', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (30929, 1, 32, '2026-08-17', 2026, 8, 17, 'Monday', 'Nag Panchami', 'Shravana', 'Shukla Panchami', 'Hindu calendar dataset (1900–2100)'),
  (30930, 1, NULL, '2026-08-17', 2026, 8, 17, 'Monday', 'Simha Sankranti', 'Shravana', 'Karka to Simha transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30931, 1, NULL, '2026-08-23', 2026, 8, 23, 'Sunday', 'Shravana Putrada Ekadashi', 'Shravana', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30932, 1, 27, '2026-08-26', 2026, 8, 26, 'Wednesday', 'Onam', 'Shravana', 'Sun in Simha & Shravana Nakshatra', 'Hindu calendar dataset (1900–2100)'),
  (30933, 1, NULL, '2026-08-28', 2026, 8, 28, 'Friday', 'Varalakshmi Vrat', 'Shravana', 'Friday before Shravana Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30934, 1, 23, '2026-08-28', 2026, 8, 28, 'Friday', 'Raksha Bandhan', 'Shravana', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30935, 1, NULL, '2026-08-28', 2026, 8, 28, 'Friday', 'Rakhi', 'Shravana', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30936, 1, NULL, '2026-08-28', 2026, 8, 28, 'Friday', 'Gayatri Jayanti', 'Shravana', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30937, 1, NULL, '2026-08-28', 2026, 8, 28, 'Friday', 'Chandra Grahan *Anshika', 'Shravana', 'occurs during Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30938, 1, NULL, '2026-08-28', 2026, 8, 28, 'Friday', 'Shravana Purnima', 'Shravana', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30939, 1, NULL, '2026-08-31', 2026, 8, 31, 'Monday', 'Kajari Teej', 'Bhadrapada', 'Krishna Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (30940, 1, 21, '2026-09-04', 2026, 9, 4, 'Friday', 'Krishna Janmashtami', 'Bhadrapada', 'Krishna Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (30941, 1, NULL, '2026-09-04', 2026, 9, 4, 'Friday', 'Agastya Arghya', 'Bhadrapada', 'based on Astronomy calculations', 'Hindu calendar dataset (1900–2100)'),
  (30942, 1, NULL, '2026-09-07', 2026, 9, 7, 'Monday', 'Aja Ekadashi', 'Bhadrapada', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30943, 1, NULL, '2026-09-14', 2026, 9, 14, 'Monday', 'Hartalika Teej', 'Bhadrapada', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (30944, 1, 20, '2026-09-14', 2026, 9, 14, 'Monday', 'Ganesh Chaturthi', 'Bhadrapada', 'Shukla Chaturthi', 'Hindu calendar dataset (1900–2100)'),
  (30945, 1, NULL, '2026-09-15', 2026, 9, 15, 'Tuesday', 'Rishi Panchami', 'Bhadrapada', 'Shukla Panchami', 'Hindu calendar dataset (1900–2100)'),
  (30946, 1, NULL, '2026-09-16', 2026, 9, 16, 'Wednesday', 'Balarama Jayanti', 'Bhadrapada', 'Shukla Shashthi', 'Hindu calendar dataset (1900–2100)'),
  (30947, 1, NULL, '2026-09-17', 2026, 9, 17, 'Thursday', 'Vishwakarma Puja', 'Bhadrapada', 'on Kanya Sankranti day', 'Hindu calendar dataset (1900–2100)'),
  (30948, 1, NULL, '2026-09-17', 2026, 9, 17, 'Thursday', 'Kanya Sankranti', 'Bhadrapada', 'Simha to Kanya transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30949, 1, NULL, '2026-09-19', 2026, 9, 19, 'Saturday', 'Radha Ashtami', 'Bhadrapada', 'Shukla Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (30950, 1, NULL, '2026-09-22', 2026, 9, 22, 'Tuesday', 'Parsva Ekadashi', 'Bhadrapada', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30951, 1, NULL, '2026-09-25', 2026, 9, 25, 'Friday', 'Ganesh Visarjan', 'Bhadrapada', 'Shukla Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (30952, 1, NULL, '2026-09-25', 2026, 9, 25, 'Friday', 'Anant Chaturdashi', 'Bhadrapada', 'Shukla Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (30953, 1, NULL, '2026-09-26', 2026, 9, 26, 'Saturday', 'Bhadrapada Purnima', 'Bhadrapada', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30954, 1, NULL, '2026-09-27', 2026, 9, 27, 'Sunday', 'Pitrupaksha Begins', 'Ashwina', 'Krishna Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (30955, 1, NULL, '2026-10-06', 2026, 10, 6, 'Tuesday', 'Indira Ekadashi', 'Ashwina', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30956, 1, NULL, '2026-10-10', 2026, 10, 10, 'Saturday', 'Sarva Pitru Amavasya', 'Ashwina', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (30957, 1, 19, '2026-10-11', 2026, 10, 11, 'Sunday', 'Navratri Begins', 'Ashwina', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (30958, 1, NULL, '2026-10-16', 2026, 10, 16, 'Friday', 'Saraswati Avahan', 'Ashwina', 'Mula Nakshatra', 'Hindu calendar dataset (1900–2100)'),
  (30959, 1, NULL, '2026-10-17', 2026, 10, 17, 'Saturday', 'Saraswati Puja', 'Ashwina', 'Purva Ashadha Nakshatra', 'Hindu calendar dataset (1900–2100)'),
  (30960, 1, NULL, '2026-10-17', 2026, 10, 17, 'Saturday', 'Tula Sankranti', 'Ashwina', 'Kanya to Tula transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30961, 1, NULL, '2026-10-19', 2026, 10, 19, 'Monday', 'Durga Ashtami', 'Ashwina', 'Shukla Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (30962, 1, NULL, '2026-10-19', 2026, 10, 19, 'Monday', 'Maha Navami', 'Ashwina', 'Shukla Navami', 'Hindu calendar dataset (1900–2100)'),
  (30963, 1, NULL, '2026-10-20', 2026, 10, 20, 'Tuesday', 'Vijayadashami', 'Ashwina', 'Shukla Dashami', 'Hindu calendar dataset (1900–2100)'),
  (30964, 1, 24, '2026-10-20', 2026, 10, 20, 'Tuesday', 'Dussehra', 'Ashwina', 'Shukla Dashami', 'Hindu calendar dataset (1900–2100)'),
  (30965, 1, NULL, '2026-10-22', 2026, 10, 22, 'Thursday', 'Papankusha Ekadashi', 'Ashwina', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30966, 1, NULL, '2026-10-25', 2026, 10, 25, 'Sunday', 'Kojagara Puja', 'Ashwina', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30967, 1, 33, '2026-10-25', 2026, 10, 25, 'Sunday', 'Sharad Purnima', 'Ashwina', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30968, 1, NULL, '2026-10-26', 2026, 10, 26, 'Monday', 'Ashwina Purnima', 'Ashwina', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30969, 1, 29, '2026-10-29', 2026, 10, 29, 'Thursday', 'Karwa Chauth', 'Kartika', 'Krishna Chaturthi', 'Hindu calendar dataset (1900–2100)'),
  (30970, 1, NULL, '2026-11-01', 2026, 11, 1, 'Sunday', 'Ahoi Ashtami', 'Kartika', 'Krishna Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (30971, 1, NULL, '2026-11-05', 2026, 11, 5, 'Thursday', 'Govatsa Dwadashi', 'Kartika', 'Krishna Dwadashi', 'Hindu calendar dataset (1900–2100)'),
  (30972, 1, NULL, '2026-11-05', 2026, 11, 5, 'Thursday', 'Rama Ekadashi', 'Kartika', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30973, 1, 34, '2026-11-06', 2026, 11, 6, 'Friday', 'Dhanteras', 'Kartika', 'Krishna Trayodashi', 'Hindu calendar dataset (1900–2100)'),
  (30974, 1, NULL, '2026-11-07', 2026, 11, 7, 'Saturday', 'Kali Chaudas', 'Kartika', 'Krishna Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (30975, 1, NULL, '2026-11-08', 2026, 11, 8, 'Sunday', 'Lakshmi Puja', 'Kartika', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (30976, 1, NULL, '2026-11-08', 2026, 11, 8, 'Sunday', 'Narak Chaturdashi', 'Kartika', 'Krishna Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (30977, 1, 1, '2026-11-08', 2026, 11, 8, 'Sunday', 'Diwali', 'Kartika', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (30978, 1, NULL, '2026-11-10', 2026, 11, 10, 'Tuesday', 'Govardhan Puja', 'Kartika', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (30979, 1, NULL, '2026-11-11', 2026, 11, 11, 'Wednesday', 'Bhaiya Dooj', 'Kartika', 'Shukla Dwitiya', 'Hindu calendar dataset (1900–2100)'),
  (30980, 1, 28, '2026-11-15', 2026, 11, 15, 'Sunday', 'Chhath Puja', 'Kartika', 'Shukla Shashthi', 'Hindu calendar dataset (1900–2100)'),
  (30981, 1, NULL, '2026-11-16', 2026, 11, 16, 'Monday', 'Vrishchika Sankranti', 'Kartika', 'Tula to Vrishchika transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30982, 1, NULL, '2026-11-20', 2026, 11, 20, 'Friday', 'Kansa Vadh', 'Kartika', 'Shukla Dashami', 'Hindu calendar dataset (1900–2100)'),
  (30983, 1, NULL, '2026-11-20', 2026, 11, 20, 'Friday', 'Devutthana Ekadashi', 'Kartika', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30984, 1, NULL, '2026-11-21', 2026, 11, 21, 'Saturday', 'Gauna Devutthana Ekadashi', 'Kartika', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30985, 1, NULL, '2026-11-21', 2026, 11, 21, 'Saturday', 'Tulasi Vivah', 'Kartika', 'Shukla Dwadashi', 'Hindu calendar dataset (1900–2100)'),
  (30986, 1, NULL, '2026-11-24', 2026, 11, 24, 'Tuesday', 'Kartika Purnima', 'Kartika', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30987, 1, NULL, '2026-12-01', 2026, 12, 1, 'Tuesday', 'Kalabhairav Jayanti', 'Margashirsha', 'Krishna Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (30988, 1, NULL, '2026-12-04', 2026, 12, 4, 'Friday', 'Utpanna Ekadashi', 'Margashirsha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30989, 1, NULL, '2026-12-14', 2026, 12, 14, 'Monday', 'Vivah Panchami', 'Margashirsha', 'Shukla Panchami', 'Hindu calendar dataset (1900–2100)'),
  (30990, 1, NULL, '2026-12-16', 2026, 12, 16, 'Wednesday', 'Dhanu Sankranti', 'Margashirsha', 'Vrishchika to Dhanu transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30991, 1, NULL, '2026-12-20', 2026, 12, 20, 'Sunday', 'Gita Jayanti', 'Margashirsha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30992, 1, NULL, '2026-12-20', 2026, 12, 20, 'Sunday', 'Mokshada Ekadashi', 'Margashirsha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30993, 1, NULL, '2026-12-23', 2026, 12, 23, 'Wednesday', 'Dattatreya Jayanti', 'Margashirsha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30994, 1, NULL, '2026-12-23', 2026, 12, 23, 'Wednesday', 'Margashirsha Purnima', 'Margashirsha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (30995, 1, NULL, '2027-01-03', 2027, 1, 3, 'Sunday', 'Saphala Ekadashi', 'Pausha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30996, 1, 31, '2027-01-15', 2027, 1, 15, 'Friday', 'Makara Sankranti', 'Pausha', 'Dhanu to Makara transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (30997, 1, 2, '2027-01-15', 2027, 1, 15, 'Friday', 'Pongal', 'Pausha', 'on Makara Sankranti day', 'Hindu calendar dataset (1900–2100)'),
  (30998, 1, NULL, '2027-01-18', 2027, 1, 18, 'Monday', 'Pausha Putrada Ekadashi', 'Pausha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (30999, 1, NULL, '2027-01-19', 2027, 1, 19, 'Tuesday', 'Gauna Pausha Putrada Ekadashi', 'Pausha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31000, 1, NULL, '2027-01-22', 2027, 1, 22, 'Friday', 'Pausha Purnima', 'Pausha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31001, 1, NULL, '2027-01-25', 2027, 1, 25, 'Monday', 'Sakat Chauth', 'Magha', 'Krishna Chaturthi', 'Hindu calendar dataset (1900–2100)'),
  (31002, 1, NULL, '2027-02-02', 2027, 2, 2, 'Tuesday', 'Shattila Ekadashi', 'Magha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31003, 1, NULL, '2027-02-06', 2027, 2, 6, 'Saturday', 'Mauni Amavas', 'Magha', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (31004, 1, NULL, '2027-02-06', 2027, 2, 6, 'Saturday', 'Surya Grahan *Valayakara', 'Magha', 'occurs during Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (31005, 1, 25, '2027-02-11', 2027, 2, 11, 'Thursday', 'Vasant Panchami', 'Magha', 'Shukla Panchami', 'Hindu calendar dataset (1900–2100)'),
  (31006, 1, NULL, '2027-02-13', 2027, 2, 13, 'Saturday', 'Ratha Saptami', 'Magha', 'Shukla Saptami', 'Hindu calendar dataset (1900–2100)'),
  (31007, 1, NULL, '2027-02-13', 2027, 2, 13, 'Saturday', 'Kumbha Sankranti', 'Magha', 'Makara to Kumbha transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31008, 1, NULL, '2027-02-14', 2027, 2, 14, 'Sunday', 'Bhishma Ashtami', 'Magha', 'Shukla Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (31009, 1, NULL, '2027-02-17', 2027, 2, 17, 'Wednesday', 'Jaya Ekadashi', 'Magha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31010, 1, NULL, '2027-02-20', 2027, 2, 20, 'Saturday', 'Magha Purnima', 'Magha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31011, 1, NULL, '2027-02-21', 2027, 2, 21, 'Sunday', 'Chandra Grahan *Upachchaya', 'Magha', 'occurs during Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31012, 1, NULL, '2027-03-04', 2027, 3, 4, 'Thursday', 'Vijaya Ekadashi', 'Phalguna', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31013, 1, 4, '2027-03-06', 2027, 3, 6, 'Saturday', 'Maha Shivaratri', 'Phalguna', 'Krishna Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (31014, 1, NULL, '2027-03-08', 2027, 3, 8, 'Monday', 'Somavati Amavasya', 'Phalguna', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (31015, 1, NULL, '2027-03-15', 2027, 3, 15, 'Monday', 'Meena Sankranti', 'Phalguna', 'Kumbha to Meena transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31016, 1, NULL, '2027-03-18', 2027, 3, 18, 'Thursday', 'Amalaki Ekadashi', 'Phalguna', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31017, 1, 3, '2027-03-21', 2027, 3, 21, 'Sunday', 'Chhoti Holi', 'Phalguna', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31018, 1, 3, '2027-03-21', 2027, 3, 21, 'Sunday', 'Holika Dahan', 'Phalguna', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31019, 1, 3, '2027-03-22', 2027, 3, 22, 'Monday', 'Holi', 'Chaitra', 'Krishna Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (31020, 1, NULL, '2027-03-22', 2027, 3, 22, 'Monday', 'Phalguna Purnima', 'Phalguna', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31021, 1, NULL, '2027-03-30', 2027, 3, 30, 'Tuesday', 'Sheetala Ashtami', 'Chaitra', 'Krishna Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (31022, 1, NULL, '2027-03-30', 2027, 3, 30, 'Tuesday', 'Basoda', 'Chaitra', 'Krishna Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (31023, 1, NULL, '2027-04-02', 2027, 4, 2, 'Friday', 'Papamochani Ekadashi', 'Chaitra', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31024, 1, 19, '2027-04-07', 2027, 4, 7, 'Wednesday', 'Chaitra Navratri', 'Chaitra', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (31025, 1, 37, '2027-04-07', 2027, 4, 7, 'Wednesday', 'Gudi Padwa', 'Chaitra', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (31026, 1, NULL, '2027-04-07', 2027, 4, 7, 'Wednesday', 'Nutan Varsh Prarambha', 'Chaitra', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (31027, 1, 36, '2027-04-07', 2027, 4, 7, 'Wednesday', 'Ugadi', 'Chaitra', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (31028, 1, NULL, '2027-04-09', 2027, 4, 9, 'Friday', 'Gauri Puja', 'Chaitra', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (31029, 1, NULL, '2027-04-09', 2027, 4, 9, 'Friday', 'Gangaur', 'Chaitra', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (31030, 1, NULL, '2027-04-12', 2027, 4, 12, 'Monday', 'Yamuna Chhath', 'Chaitra', 'Shukla Shashthi', 'Hindu calendar dataset (1900–2100)'),
  (31031, 1, NULL, '2027-04-14', 2027, 4, 14, 'Wednesday', 'Mesha Sankranti', 'Chaitra', 'Meena to Mesha transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31032, 1, NULL, '2027-04-14', 2027, 4, 14, 'Wednesday', 'Solar New Year', 'Chaitra', 'first day of Hindu Solar calendar', 'Hindu calendar dataset (1900–2100)'),
  (31033, 1, 22, '2027-04-15', 2027, 4, 15, 'Thursday', 'Rama Navami', 'Chaitra', 'Shukla Navami', 'Hindu calendar dataset (1900–2100)'),
  (31034, 1, NULL, '2027-04-15', 2027, 4, 15, 'Thursday', 'Swaminarayan Jayanti', 'Chaitra', 'Shukla Navami', 'Hindu calendar dataset (1900–2100)'),
  (31035, 1, NULL, '2027-04-17', 2027, 4, 17, 'Saturday', 'Kamada Ekadashi', 'Chaitra', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31036, 1, NULL, '2027-04-20', 2027, 4, 20, 'Tuesday', 'Chaitra Purnima', 'Chaitra', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31037, 1, 35, '2027-04-20', 2027, 4, 20, 'Tuesday', 'Hanuman Jayanti', 'Chaitra', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31038, 1, NULL, '2027-04-20', 2027, 4, 20, 'Tuesday', 'Hanuman Janmotsava', 'Chaitra', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31039, 1, NULL, '2027-05-02', 2027, 5, 2, 'Sunday', 'Varuthini Ekadashi', 'Vaishakha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31040, 1, NULL, '2027-05-08', 2027, 5, 8, 'Saturday', 'Parashurama Jayanti', 'Vaishakha', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (31041, 1, 30, '2027-05-09', 2027, 5, 9, 'Sunday', 'Akshaya Tritiya', 'Vaishakha', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (31042, 1, NULL, '2027-05-12', 2027, 5, 12, 'Wednesday', 'Ganga Saptami', 'Vaishakha', 'Shukla Saptami', 'Hindu calendar dataset (1900–2100)'),
  (31043, 1, NULL, '2027-05-14', 2027, 5, 14, 'Friday', 'Sita Navami', 'Vaishakha', 'Shukla Navami', 'Hindu calendar dataset (1900–2100)'),
  (31044, 1, NULL, '2027-05-15', 2027, 5, 15, 'Saturday', 'Vrishabha Sankranti', 'Vaishakha', 'Mesha to Vrishabha transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31045, 1, NULL, '2027-05-16', 2027, 5, 16, 'Sunday', 'Mohini Ekadashi', 'Vaishakha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31046, 1, NULL, '2027-05-18', 2027, 5, 18, 'Tuesday', 'Narasimha Jayanti', 'Vaishakha', 'Shukla Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (31047, 1, NULL, '2027-05-20', 2027, 5, 20, 'Thursday', 'Buddha Purnima', 'Vaishakha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31048, 1, NULL, '2027-05-20', 2027, 5, 20, 'Thursday', 'Vaishakha Purnima', 'Vaishakha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31049, 1, NULL, '2027-05-21', 2027, 5, 21, 'Friday', 'Narada Jayanti', 'Jyeshtha', 'Krishna Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (31050, 1, NULL, '2027-06-01', 2027, 6, 1, 'Tuesday', 'Apara Ekadashi', 'Jyeshtha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31051, 1, NULL, '2027-06-04', 2027, 6, 4, 'Friday', 'Vat Savitri Vrat', 'Jyeshtha', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (31052, 1, NULL, '2027-06-04', 2027, 6, 4, 'Friday', 'Shani Jayanti', 'Jyeshtha', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (31053, 1, 24, '2027-06-13', 2027, 6, 13, 'Sunday', 'Ganga Dussehra', 'Jyeshtha', 'Shukla Dashami', 'Hindu calendar dataset (1900–2100)'),
  (31054, 1, NULL, '2027-06-14', 2027, 6, 14, 'Monday', 'Nirjala Ekadashi', 'Jyeshtha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31055, 1, NULL, '2027-06-15', 2027, 6, 15, 'Tuesday', 'Mithuna Sankranti', 'Jyeshtha', 'Vrishabha to Mithuna transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31056, 1, NULL, '2027-06-18', 2027, 6, 18, 'Friday', 'Vat Purnima Vrat', 'Jyeshtha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31057, 1, NULL, '2027-06-18', 2027, 6, 18, 'Friday', 'Jyeshtha Purnima', 'Jyeshtha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31058, 1, NULL, '2027-06-30', 2027, 6, 30, 'Wednesday', 'Yogini Ekadashi', 'Ashadha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31059, 1, NULL, '2027-07-05', 2027, 7, 5, 'Monday', 'Jagannath Rathyatra', 'Ashadha', 'Shukla Dwitiya', 'Hindu calendar dataset (1900–2100)'),
  (31060, 1, NULL, '2027-07-14', 2027, 7, 14, 'Wednesday', 'Devshayani Ekadashi', 'Ashadha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31061, 1, NULL, '2027-07-17', 2027, 7, 17, 'Saturday', 'Karka Sankranti', 'Ashadha', 'Mithuna to Karka transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31062, 1, NULL, '2027-07-17', 2027, 7, 17, 'Saturday', 'Simhasta Kumbha @Nashik', 'Ashadha', 'Karka Surya and Simha Guru', 'Hindu calendar dataset (1900–2100)'),
  (31063, 1, 26, '2027-07-18', 2027, 7, 18, 'Sunday', 'Guru Purnima', 'Ashadha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31064, 1, NULL, '2027-07-18', 2027, 7, 18, 'Sunday', 'Ashadha Purnima', 'Ashadha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31065, 1, NULL, '2027-07-29', 2027, 7, 29, 'Thursday', 'Kamika Ekadashi', 'Shravana', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31066, 1, NULL, '2027-07-30', 2027, 7, 30, 'Friday', 'Gauna Kamika Ekadashi', 'Shravana', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31067, 1, NULL, '2027-08-02', 2027, 8, 2, 'Monday', 'Surya Grahan *Purna', 'Shravana', 'occurs during Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (31068, 1, NULL, '2027-08-02', 2027, 8, 2, 'Monday', 'Somavati Amavasya', 'Shravana', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (31069, 1, NULL, '2027-08-04', 2027, 8, 4, 'Wednesday', 'Hariyali Teej', 'Shravana', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (31070, 1, 32, '2027-08-06', 2027, 8, 6, 'Friday', 'Nag Panchami', 'Shravana', 'Shukla Panchami', 'Hindu calendar dataset (1900–2100)'),
  (31071, 1, NULL, '2027-08-12', 2027, 8, 12, 'Thursday', 'Shravana Putrada Ekadashi', 'Shravana', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31072, 1, NULL, '2027-08-13', 2027, 8, 13, 'Friday', 'Varalakshmi Vrat', 'Shravana', 'Friday before Shravana Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31073, 1, 23, '2027-08-17', 2027, 8, 17, 'Tuesday', 'Raksha Bandhan', 'Shravana', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31074, 1, NULL, '2027-08-17', 2027, 8, 17, 'Tuesday', 'Rakhi', 'Shravana', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31075, 1, NULL, '2027-08-17', 2027, 8, 17, 'Tuesday', 'Gayatri Jayanti', 'Shravana', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31076, 1, NULL, '2027-08-17', 2027, 8, 17, 'Tuesday', 'Simha Sankranti', 'Shravana', 'Karka to Simha transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31077, 1, NULL, '2027-08-17', 2027, 8, 17, 'Tuesday', 'Chandra Grahan *Upachchaya', 'Shravana', 'occurs during Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31078, 1, NULL, '2027-08-17', 2027, 8, 17, 'Tuesday', 'Simhasta Kumbha ends @Nashik', 'Shravana', 'Karka Surya and Simha Guru', 'Hindu calendar dataset (1900–2100)'),
  (31079, 1, NULL, '2027-08-17', 2027, 8, 17, 'Tuesday', 'Shravana Purnima', 'Shravana', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31080, 1, NULL, '2027-08-20', 2027, 8, 20, 'Friday', 'Kajari Teej', 'Bhadrapada', 'Krishna Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (31081, 1, 21, '2027-08-25', 2027, 8, 25, 'Wednesday', 'Krishna Janmashtami', 'Bhadrapada', 'Krishna Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (31082, 1, NULL, '2027-08-28', 2027, 8, 28, 'Saturday', 'Aja Ekadashi', 'Bhadrapada', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31083, 1, NULL, '2027-09-03', 2027, 9, 3, 'Friday', 'Hartalika Teej', 'Bhadrapada', 'Shukla Tritiya', 'Hindu calendar dataset (1900–2100)'),
  (31084, 1, 20, '2027-09-04', 2027, 9, 4, 'Saturday', 'Ganesh Chaturthi', 'Bhadrapada', 'Shukla Chaturthi', 'Hindu calendar dataset (1900–2100)'),
  (31085, 1, NULL, '2027-09-04', 2027, 9, 4, 'Saturday', 'Rishi Panchami', 'Bhadrapada', 'Shukla Panchami', 'Hindu calendar dataset (1900–2100)'),
  (31086, 1, NULL, '2027-09-04', 2027, 9, 4, 'Saturday', 'Agastya Arghya', 'Bhadrapada', 'based on Astronomy calculations', 'Hindu calendar dataset (1900–2100)'),
  (31087, 1, NULL, '2027-09-06', 2027, 9, 6, 'Monday', 'Balarama Jayanti', 'Bhadrapada', 'Shukla Shashthi', 'Hindu calendar dataset (1900–2100)'),
  (31088, 1, NULL, '2027-09-08', 2027, 9, 8, 'Wednesday', 'Radha Ashtami', 'Bhadrapada', 'Shukla Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (31089, 1, NULL, '2027-09-11', 2027, 9, 11, 'Saturday', 'Parsva Ekadashi', 'Bhadrapada', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31090, 1, 27, '2027-09-12', 2027, 9, 12, 'Sunday', 'Onam', 'Bhadrapada', 'Sun in Simha & Shravana Nakshatra', 'Hindu calendar dataset (1900–2100)'),
  (31091, 1, NULL, '2027-09-14', 2027, 9, 14, 'Tuesday', 'Ganesh Visarjan', 'Bhadrapada', 'Shukla Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (31092, 1, NULL, '2027-09-14', 2027, 9, 14, 'Tuesday', 'Anant Chaturdashi', 'Bhadrapada', 'Shukla Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (31093, 1, NULL, '2027-09-15', 2027, 9, 15, 'Wednesday', 'Bhadrapada Purnima', 'Bhadrapada', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31094, 1, NULL, '2027-09-16', 2027, 9, 16, 'Thursday', 'Pitrupaksha Begins', 'Ashwina', 'Krishna Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (31095, 1, NULL, '2027-09-17', 2027, 9, 17, 'Friday', 'Kanya Sankranti', 'Ashwina', 'Simha to Kanya transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31096, 1, NULL, '2027-09-17', 2027, 9, 17, 'Friday', 'Vishwakarma Puja', 'Ashwina', 'on Kanya Sankranti day', 'Hindu calendar dataset (1900–2100)'),
  (31097, 1, NULL, '2027-09-26', 2027, 9, 26, 'Sunday', 'Indira Ekadashi', 'Ashwina', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31098, 1, NULL, '2027-09-29', 2027, 9, 29, 'Wednesday', 'Sarva Pitru Amavasya', 'Ashwina', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (31099, 1, 19, '2027-09-30', 2027, 9, 30, 'Thursday', 'Navratri Begins', 'Ashwina', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (31100, 1, NULL, '2027-10-06', 2027, 10, 6, 'Wednesday', 'Saraswati Avahan', 'Ashwina', 'Mula Nakshatra', 'Hindu calendar dataset (1900–2100)'),
  (31101, 1, NULL, '2027-10-07', 2027, 10, 7, 'Thursday', 'Saraswati Puja', 'Ashwina', 'Purva Ashadha Nakshatra', 'Hindu calendar dataset (1900–2100)'),
  (31102, 1, NULL, '2027-10-07', 2027, 10, 7, 'Thursday', 'Durga Ashtami', 'Ashwina', 'Shukla Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (31103, 1, NULL, '2027-10-08', 2027, 10, 8, 'Friday', 'Maha Navami', 'Ashwina', 'Shukla Navami', 'Hindu calendar dataset (1900–2100)'),
  (31104, 1, NULL, '2027-10-09', 2027, 10, 9, 'Saturday', 'Vijayadashami', 'Ashwina', 'Shukla Dashami', 'Hindu calendar dataset (1900–2100)'),
  (31105, 1, 24, '2027-10-09', 2027, 10, 9, 'Saturday', 'Dussehra', 'Ashwina', 'Shukla Dashami', 'Hindu calendar dataset (1900–2100)'),
  (31106, 1, NULL, '2027-10-11', 2027, 10, 11, 'Monday', 'Papankusha Ekadashi', 'Ashwina', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31107, 1, NULL, '2027-10-14', 2027, 10, 14, 'Thursday', 'Kojagara Puja', 'Ashwina', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31108, 1, 33, '2027-10-14', 2027, 10, 14, 'Thursday', 'Sharad Purnima', 'Ashwina', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31109, 1, NULL, '2027-10-15', 2027, 10, 15, 'Friday', 'Ashwina Purnima', 'Ashwina', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31110, 1, 29, '2027-10-18', 2027, 10, 18, 'Monday', 'Karwa Chauth', 'Kartika', 'Krishna Chaturthi', 'Hindu calendar dataset (1900–2100)'),
  (31111, 1, NULL, '2027-10-18', 2027, 10, 18, 'Monday', 'Tula Sankranti', 'Kartika', 'Kanya to Tula transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31112, 1, NULL, '2027-10-22', 2027, 10, 22, 'Friday', 'Ahoi Ashtami', 'Kartika', 'Krishna Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (31113, 1, NULL, '2027-10-25', 2027, 10, 25, 'Monday', 'Rama Ekadashi', 'Kartika', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31114, 1, NULL, '2027-10-26', 2027, 10, 26, 'Tuesday', 'Govatsa Dwadashi', 'Kartika', 'Krishna Dwadashi', 'Hindu calendar dataset (1900–2100)'),
  (31115, 1, 34, '2027-10-27', 2027, 10, 27, 'Wednesday', 'Dhanteras', 'Kartika', 'Krishna Trayodashi', 'Hindu calendar dataset (1900–2100)'),
  (31116, 1, NULL, '2027-10-27', 2027, 10, 27, 'Wednesday', 'Kali Chaudas', 'Kartika', 'Krishna Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (31117, 1, NULL, '2027-10-28', 2027, 10, 28, 'Thursday', 'Narak Chaturdashi', 'Kartika', 'Krishna Chaturdashi', 'Hindu calendar dataset (1900–2100)'),
  (31118, 1, NULL, '2027-10-29', 2027, 10, 29, 'Friday', 'Lakshmi Puja', 'Kartika', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (31119, 1, 1, '2027-10-29', 2027, 10, 29, 'Friday', 'Diwali', 'Kartika', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)'),
  (31120, 1, NULL, '2027-10-30', 2027, 10, 30, 'Saturday', 'Govardhan Puja', 'Kartika', 'Shukla Pratipada', 'Hindu calendar dataset (1900–2100)'),
  (31121, 1, NULL, '2027-10-31', 2027, 10, 31, 'Sunday', 'Bhaiya Dooj', 'Kartika', 'Shukla Dwitiya', 'Hindu calendar dataset (1900–2100)'),
  (31122, 1, 28, '2027-11-04', 2027, 11, 4, 'Thursday', 'Chhath Puja', 'Kartika', 'Shukla Shashthi', 'Hindu calendar dataset (1900–2100)'),
  (31123, 1, NULL, '2027-11-08', 2027, 11, 8, 'Monday', 'Kansa Vadh', 'Kartika', 'Shukla Dashami', 'Hindu calendar dataset (1900–2100)'),
  (31124, 1, NULL, '2027-11-10', 2027, 11, 10, 'Wednesday', 'Devutthana Ekadashi', 'Kartika', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31125, 1, NULL, '2027-11-11', 2027, 11, 11, 'Thursday', 'Tulasi Vivah', 'Kartika', 'Shukla Dwadashi', 'Hindu calendar dataset (1900–2100)'),
  (31126, 1, NULL, '2027-11-14', 2027, 11, 14, 'Sunday', 'Kartika Purnima', 'Kartika', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31127, 1, NULL, '2027-11-17', 2027, 11, 17, 'Wednesday', 'Vrishchika Sankranti', 'Kartika', 'Tula to Vrishchika transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31128, 1, NULL, '2027-11-20', 2027, 11, 20, 'Saturday', 'Kalabhairav Jayanti', 'Margashirsha', 'Krishna Ashtami', 'Hindu calendar dataset (1900–2100)'),
  (31129, 1, NULL, '2027-11-24', 2027, 11, 24, 'Wednesday', 'Utpanna Ekadashi', 'Margashirsha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31130, 1, NULL, '2027-12-03', 2027, 12, 3, 'Friday', 'Vivah Panchami', 'Margashirsha', 'Shukla Panchami', 'Hindu calendar dataset (1900–2100)'),
  (31131, 1, NULL, '2027-12-09', 2027, 12, 9, 'Thursday', 'Gita Jayanti', 'Margashirsha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31132, 1, NULL, '2027-12-09', 2027, 12, 9, 'Thursday', 'Mokshada Ekadashi', 'Margashirsha', 'Shukla Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31133, 1, NULL, '2027-12-13', 2027, 12, 13, 'Monday', 'Dattatreya Jayanti', 'Margashirsha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31134, 1, NULL, '2027-12-13', 2027, 12, 13, 'Monday', 'Margashirsha Purnima', 'Margashirsha', 'Shukla Purnima', 'Hindu calendar dataset (1900–2100)'),
  (31135, 1, NULL, '2027-12-16', 2027, 12, 16, 'Thursday', 'Dhanu Sankranti', 'Margashirsha', 'Vrishchika to Dhanu transit of Sun', 'Hindu calendar dataset (1900–2100)'),
  (31136, 1, NULL, '2027-12-23', 2027, 12, 23, 'Thursday', 'Saphala Ekadashi', 'Pausha', 'Krishna Ekadashi', 'Hindu calendar dataset (1900–2100)'),
  (31137, 1, NULL, '2027-12-27', 2027, 12, 27, 'Monday', 'Somavati Amavasya', 'Pausha', 'Krishna Amavasya', 'Hindu calendar dataset (1900–2100)')
ON CONFLICT (religion_id, event_date, title) DO NOTHING;
SELECT setval(pg_get_serial_sequence('public.calendar_events', 'id'), COALESCE(max(id), 1)) FROM public.calendar_events;

-- Data seed complete
