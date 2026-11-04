const {db, q, one, run} = require('../db');

function seedLocations() {
  const count = one('SELECT COUNT(*) as c FROM festival_locations').c;
  if (count > 0) {
    console.log(`Locations already seeded (${count} records).`);
    return;
  }

  const locations = [
    // --- HINDUISM ---
    {
      name: 'Shree Jagannath Temple',
      religion: 'Hinduism',
      address: 'Grand Road, Puri, Odisha 752001',
      city: 'Puri',
      state: 'Odisha',
      country: 'India',
      latitude: 19.8049,
      longitude: 85.8179,
      place_type: 'pilgrimage_destination',
      description: 'One of the Char Dham pilgrimage sites, famous worldwide for the annual Ratha Yatra (chariot procession) where deities Lord Jagannath, Balabhadra and Subhadra are drawn on monumental wooden chariots along the Bada Danda.',
      seasonal_notes: 'Ratha Yatra takes place annually during Ashadha Shukla Paksha Dwitiya (June/July). Giant wooden chariots are constructed anew every year.',
      image_url: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800',
      source_url: 'https://www.jagannath.nic.in/',
      festivals: ['Jagannath Rath Yatra', 'Diwali']
    },
    {
      name: 'Kashi Vishwanath Temple & Ganga Ghats',
      religion: 'Hinduism',
      address: 'Lahori Tola, Varanasi, Uttar Pradesh 221001',
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      country: 'India',
      latitude: 25.3109,
      longitude: 83.0107,
      place_type: 'place_of_worship',
      description: 'Ancient Jyotirlinga temple dedicated to Lord Shiva situated along the holy river Ganga. Epicenter for Maha Shivaratri all-night vigils, Dev Deepawali celebrations, and sacred Ganga Aarti.',
      seasonal_notes: 'Maha Shivaratri night witnesses extraordinary processions and uninterrupted milk abhishekham rituals.',
      image_url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800',
      source_url: 'https://shrikashivishwanath.org/',
      festivals: ['Maha Shivaratri', 'Diwali', 'Karthika Purnima']
    },
    {
      name: 'Banke Bihari Temple & Braj Dham',
      religion: 'Hinduism',
      address: 'Godhuli Puram, Vrindavan, Mathura, Uttar Pradesh 281121',
      city: 'Vrindavan',
      state: 'Uttar Pradesh',
      country: 'India',
      latitude: 27.5816,
      longitude: 77.7011,
      place_type: 'pilgrimage_destination',
      description: 'Revered Krishna temple at the heart of the Braj region. World-renowned for vibrant Lathmar Holi and Phoolon ki Holi celebrations, alongside grand Krishna Janmashtami midnight festivities.',
      seasonal_notes: 'Celebrations start a week before Holi with natural flowers, gulal, and devotional Raas Leela dances.',
      image_url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
      source_url: 'https://www.bihariji.org/',
      festivals: ['Holi', 'Krishna Janmashtami', 'Janmashtami']
    },
    {
      name: 'Sri Meenakshi Sundareswarar Temple',
      religion: 'Hinduism',
      address: 'Madurai Main, Madurai, Tamil Nadu 625001',
      city: 'Madurai',
      state: 'Tamil Nadu',
      country: 'India',
      latitude: 9.9195,
      longitude: 78.1193,
      place_type: 'cultural_heritage_site',
      description: 'Historic Dravidian temple complex dedicated to Goddess Meenakshi and Lord Sundareswarar. Epicenter of grand Pongal harvest thanksgiving festivities, Kolam competitions, and the Chithirai celestial wedding festival.',
      seasonal_notes: 'During Pongal (mid-January), fresh clay pots of sweet rice are boiled at sunrise across temple squares accompanied by traditional nadaswaram music.',
      image_url: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=800',
      source_url: 'https://maduraimeenakshi.org/',
      festivals: ['Pongal', 'Karthigai Deepam', 'Navratri']
    },
    {
      name: 'Siddhivinayak Temple & Girgaon Chowpatty',
      religion: 'Hinduism',
      address: 'SK Bole Marg, Prabhadevi, Mumbai, Maharashtra 400028',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      latitude: 19.0169,
      longitude: 72.8304,
      place_type: 'famous_celebration_location',
      description: 'Premier sanctuary of Lord Ganesha in Maharashtra, leading the 10-day Ganesh Chaturthi festival. The culmination involves mammoth city-wide processions ending in the Visarjan (immersion) ceremony at Girgaon Chowpatty beach.',
      seasonal_notes: 'Ganesh Chaturthi occurs in Bhadrapada month (August/September), filling Mumbai streets with dhol-tasha beats, modaks, and festive pandals.',
      image_url: 'https://images.unsplash.com/photo-1601055903647-872f22b826f6?w=800',
      source_url: 'https://siddhivinayak.org/',
      festivals: ['Ganesh Chaturthi', 'Gudi Padwa', 'Anant Chaturdashi']
    },
    {
      name: 'Batu Caves Sri Subramaniar Swamy Temple',
      religion: 'Hinduism',
      address: 'Gombak, 68100 Batu Caves, Selangor',
      city: 'Kuala Lumpur',
      state: 'Selangor',
      country: 'Malaysia',
      latitude: 3.2374,
      longitude: 101.6839,
      place_type: 'famous_celebration_location',
      description: 'Iconic limestone hill housing subterranean temple caves guarded by a 140-foot golden statue of Lord Murugan. The international pinnacle of the annual Thaipusam festival featuring Kavadi Attam processions.',
      seasonal_notes: 'During Thaipusam (Thai month full moon, Jan/Feb), over a million devotees undertake the barefoot 272 rainbow staircase climb carrying elaborate kavadis and milk pots.',
      image_url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800',
      source_url: 'https://www.malaysia.travel/',
      festivals: ['Thaipusam', 'Navratri']
    },
    {
      name: 'Sri Ranganathaswamy Temple',
      religion: 'Hinduism',
      address: 'Srirangam, Tiruchirappalli, Tamil Nadu 620006',
      city: 'Srirangam',
      state: 'Tamil Nadu',
      country: 'India',
      latitude: 10.8624,
      longitude: 78.6901,
      place_type: 'pilgrimage_destination',
      description: 'The largest functioning Hindu temple complex in the world covering 156 acres. Renowned for the 21-day Vaikuntha Ekadashi celebrations where the sanctified Paramapada Vaasal (Gateway to Heaven) is ceremoniously opened.',
      seasonal_notes: 'Vaikuntha Ekadashi occurs in Margazhi (Dec/Jan), drawing thousands through the northern gate of liberation.',
      image_url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?w=800',
      source_url: 'https://srirangam.org/',
      festivals: ['Vaikuntha Ekadashi', 'Diwali']
    },
    {
      name: 'Thrikkakara Vamana Moorthy Temple',
      religion: 'Hinduism',
      address: 'Thrikkakara, Kochi, Kerala 682021',
      city: 'Kochi',
      state: 'Kerala',
      country: 'India',
      latitude: 10.0381,
      longitude: 76.3292,
      place_type: 'famous_celebration_location',
      description: 'One of the rare temples associated with the Vamana avatar and King Mahabali. It is the central origin site of Kerala’s grand harvest festival of Onam, featuring the magnificent Onasadya banquet and Athachamayam royal carnival.',
      seasonal_notes: 'Onam lasts 10 days in Chingam (August/September), highlighted by intricately crafted floral carpets (Pookkalam) and Pulikkali tiger dances.',
      image_url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800',
      source_url: 'https://keralatourism.org/',
      festivals: ['Onam', 'Vishu']
    },
    {
      name: 'Belur Math & Bagbazar Pandal',
      religion: 'Hinduism',
      address: 'Belur, Howrah, West Bengal 711202',
      city: 'Kolkata',
      state: 'West Bengal',
      country: 'India',
      latitude: 22.6322,
      longitude: 88.3559,
      place_type: 'cultural_heritage_site',
      description: 'Headquarters of Ramakrishna Math and the heart of Kolkata’s UNESCO-inscribed Durga Puja celebration. Commemorates Goddess Durga’s victory over Mahishasura through world-renowned artistic pandals, Dhunuchi Naach, and Sindoor Khela.',
      seasonal_notes: 'Celebrated in Ashwin month (Sept/Oct). Kumari Puja is ritually performed at Belur Math on Maha Ashtami.',
      image_url: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800',
      source_url: 'https://belurmath.org/',
      festivals: ['Durga Puja', 'Navratri', 'Dussehra']
    },

    // --- ISLAM ---
    {
      name: 'Masjid al-Haram (The Great Mosque)',
      religion: 'Islam',
      address: 'Al Haram, Mecca 24231',
      city: 'Mecca',
      state: 'Makkah Province',
      country: 'Saudi Arabia',
      latitude: 21.4225,
      longitude: 39.8262,
      place_type: 'pilgrimage_destination',
      description: 'The holiest site in Islam surrounding the Kaaba. The global focal point of direction (Qibla) for Muslim prayer, the annual Hajj pilgrimage during Dhu al-Hijjah, Umrah, and monumental Eid al-Adha and Eid al-Fitr communal prayers.',
      seasonal_notes: 'Hosts millions of pilgrims during the annual Hajj (8th to 13th of Dhu al-Hijjah) and nightly Taraweeh and Tahajjud prayers during the last ten nights of Ramadan (Laylat al-Qadr).',
      image_url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800',
      source_url: 'https://gph.gov.sa/',
      festivals: ['Eid-ul-Fitr', 'Eid-ul-Zuha (Eid-ul-Azha)', 'Eid al-Fitr', 'Eid al-Adha', 'Ramadan', 'Hajj', 'Laylat al-Qadr']
    },
    {
      name: "Al-Masjid an-Nabawi (The Prophet's Mosque)",
      religion: 'Islam',
      address: 'Al Haram, Medina 42311',
      city: 'Medina',
      state: 'Al Madinah Province',
      country: 'Saudi Arabia',
      latitude: 24.4672,
      longitude: 39.6111,
      place_type: 'pilgrimage_destination',
      description: 'The second holiest mosque in Islam, built by Prophet Muhammad. Houses the Rawdah ash-Sharifah and the Green Dome. Central spiritual destination during Ramadan iftars, Milad-un-Nabi remembrance, and post-Hajj visitation.',
      seasonal_notes: 'Famous for the longest daily communal Iftar tablecloth in the world, where dates, fresh bread and Zamzam water are shared by hundreds of thousands during Ramadan.',
      image_url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800',
      source_url: 'https://wmn.gov.sa/',
      festivals: ['Ramadan', 'Eid-ul-Fitr', 'Eid al-Fitr', 'Milad-Un-Nabi', 'Mawlid al-Nabi', 'Islamic New Year']
    },
    {
      name: 'Al-Aqsa Mosque Compound',
      religion: 'Islam',
      address: 'Old City, Jerusalem',
      city: 'Jerusalem',
      state: 'Jerusalem',
      country: 'Palestine',
      latitude: 31.7761,
      longitude: 35.2358,
      place_type: 'pilgrimage_destination',
      description: 'The third holiest site in Islam, associated with the miraculous Night Journey (Isra and Miraj). Key venue for Friday prayers in Ramadan, Laylat al-Qadr supplications, and both Eid celebrations.',
      seasonal_notes: 'Shab-e-Miraj (27 Rajab) commemorates the celestial ascent of the Prophet from this sacred plateau.',
      image_url: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=800',
      source_url: 'https://whc.unesco.org/en/list/148',
      festivals: ['Shab-e-Miraj', "Isra and Mi'raj", 'Ramadan', 'Eid-ul-Fitr', 'Eid al-Fitr', 'Laylat al-Qadr']
    },
    {
      name: 'Jama Masjid Delhi',
      religion: 'Islam',
      address: 'Chandni Chowk, Old Delhi, Delhi 110006',
      city: 'New Delhi',
      state: 'Delhi',
      country: 'India',
      latitude: 28.6507,
      longitude: 77.2334,
      place_type: 'famous_celebration_location',
      description: 'One of the largest and most renowned mosques in India, constructed by Mughal Emperor Shah Jahan. Serves as the national focal point for the sighting of the Eid crescent, massive Eid morning congregations, and the bustling Ramadan night bazaars of Old Delhi.',
      seasonal_notes: 'During Eid-ul-Fitr and Eid-ul-Adha, up to 25,000 worshippers gather across the red sandstone courtyard in synchronized prayer.',
      image_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
      source_url: 'https://delhitourism.gov.in/',
      festivals: ['Eid-ul-Fitr', 'Eid-ul-Zuha (Eid-ul-Azha)', 'Eid al-Fitr', 'Eid al-Adha', 'Ramadan', 'Milad-Un-Nabi']
    },
    {
      name: 'Imambara Asfi (Bara Imambara)',
      religion: 'Islam',
      address: 'Machchhi Bhavan, Lucknow, Uttar Pradesh 226003',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      country: 'India',
      latitude: 26.8691,
      longitude: 80.9131,
      place_type: 'cultural_heritage_site',
      description: 'Historic monumental hall built by Nawab Asaf-ud-Daula in 1784. The premier international center for solemn Muharram observances, Taziya processions, and Majlis mourning gatherings honoring Imam Husayn.',
      seasonal_notes: 'From 1st to 10th of Muharram (Ashura), historic mourning processions proceed between Bara Imambara and Chhota Imambara.',
      image_url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
      source_url: 'https://uptourism.gov.in/',
      festivals: ['Muharram', 'Ashura', 'Islamic New Year']
    },
    {
      name: 'Hazratbal Shrine',
      religion: 'Islam',
      address: 'Hazratbal, Srinagar, Jammu and Kashmir 190006',
      city: 'Srinagar',
      state: 'Jammu and Kashmir',
      country: 'India',
      latitude: 34.1287,
      longitude: 74.8436,
      place_type: 'place_of_worship',
      description: 'Pristine white marble shrine on the northern bank of Dal Lake, venerated for housing the holy relic (Moi-e-Muqqadas) of Prophet Muhammad. Focal point for Milad-Un-Nabi (Mawlid) celebrations across Kashmir.',
      seasonal_notes: 'Relic is displayed to thousands of devotees during Milad-Un-Nabi and Shab-e-Meraj amid night-long prayers.',
      image_url: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800',
      source_url: 'https://jktourism.jk.gov.in/',
      festivals: ['Milad-Un-Nabi', 'Mawlid al-Nabi', 'Shab-e-Miraj', 'Shab-e-Barat']
    },
    {
      name: 'Nakhoda Mosque',
      religion: 'Islam',
      address: 'Rabindra Sarani, Chitpur, Kolkata, West Bengal 700073',
      city: 'Kolkata',
      state: 'West Bengal',
      country: 'India',
      latitude: 22.5833,
      longitude: 88.3575,
      place_type: 'famous_celebration_location',
      description: 'The principal mosque of Kolkata, designed in the majestic Indo-Saracenic style resembling Akbar’s tomb at Sikandra. Heart of Shab-e-Barat night vigils, Ramadan food trails along Zakaria Street, and grand Eid festivities in eastern India.',
      seasonal_notes: 'Zakaria Street outside the mosque turns into one of the subcontinent’s most famous culinary hubs during Ramadan nights.',
      image_url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800',
      source_url: 'https://wbtourism.gov.in/',
      festivals: ['Shab-e-Barat', 'Ramadan', 'Eid-ul-Fitr', 'Eid al-Fitr']
    },

    // --- CHRISTIANITY ---
    {
      name: 'Church of the Nativity',
      religion: 'Christianity',
      address: 'Manger Square, Bethlehem',
      city: 'Bethlehem',
      state: 'West Bank',
      country: 'Palestine',
      latitude: 31.7043,
      longitude: 35.2076,
      place_type: 'pilgrimage_destination',
      description: 'One of the oldest continuously operating Christian churches in the world, built over the Grotto of the Nativity marking the traditional birthplace of Jesus Christ. Epicenter of worldwide Christmas celebrations and Midnight Mass.',
      seasonal_notes: 'Hosts the annual Christmas Eve procession on December 24 and the traditional Eastern Orthodox Christmas celebrations on January 6-7.',
      image_url: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
      source_url: 'https://whc.unesco.org/en/list/1433',
      festivals: ['Christmas', 'Advent', 'Epiphany', 'Feast of the Epiphany']
    },
    {
      name: 'Church of the Holy Sepulchre',
      religion: 'Christianity',
      address: 'Christian Quarter, Old City, Jerusalem',
      city: 'Jerusalem',
      state: 'Jerusalem',
      country: 'Palestine',
      latitude: 31.7785,
      longitude: 35.2296,
      place_type: 'pilgrimage_destination',
      description: 'The most sacred Christian site, encompassing both Golgotha (Calvary) where Jesus was crucified and the empty tomb (Aedicula) from which He resurrected. Central worldwide venue for Holy Week, Good Friday Way of the Cross, and Holy Saturday Holy Fire ceremony.',
      seasonal_notes: 'Good Friday Way of the Cross leads along the Via Dolorosa to this church; the Holy Saturday Miraculous Fire ceremony precedes joyous Easter Sunday liturgies.',
      image_url: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800',
      source_url: 'https://custodia.org/',
      festivals: ['Easter', 'Easter Sunday', 'Good Friday', 'Palm Sunday', 'Maundy Thursday', 'Holy Saturday']
    },
    {
      name: "St. Peter's Basilica",
      religion: 'Christianity',
      address: 'Piazza San Pietro, 00120 Vatican City',
      city: 'Vatican City',
      state: 'Rome',
      country: 'Vatican City',
      latitude: 41.9022,
      longitude: 12.4539,
      place_type: 'pilgrimage_destination',
      description: 'The epicenter of Roman Catholicism and one of the largest basilicas in the world. Venue for papal Christmas Eve and Easter Sunday Urbi et Orbi blessings, Pentecost mass, Corpus Christi processions, and Holy Week rites broadcast globally.',
      seasonal_notes: 'Papal Midnight Mass at Christmas and Easter Vigil with baptism rites draw tens of thousands into St. Peter’s Square.',
      image_url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
      source_url: 'https://www.vatican.va/',
      festivals: ['Christmas', 'Easter', 'Easter Sunday', 'Good Friday', 'Pentecost', 'Corpus Christi', 'Ash Wednesday', 'Trinity Sunday']
    },
    {
      name: 'Basilica of Bom Jesus',
      religion: 'Christianity',
      address: 'Old Goa Road, Bainguinim, Goa 403402',
      city: 'Old Goa',
      state: 'Goa',
      country: 'India',
      latitude: 15.5009,
      longitude: 73.9116,
      place_type: 'cultural_heritage_site',
      description: 'UNESCO World Heritage landmark in Old Goa holding the sacred mortal remains of Saint Francis Xavier. Renowned center of Western Indian Christmas and Easter traditions, and the grand Feast of St. Francis Xavier on December 3.',
      seasonal_notes: 'Goan Christmas celebrations feature midnight mass, crib (nativity) making competitions, star lanterns, and traditional Bebinca sweets.',
      image_url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
      source_url: 'https://goatourism.gov.in/',
      festivals: ['Christmas', 'Easter', 'Good Friday', 'Advent']
    },
    {
      name: 'San Thome Cathedral Basilica',
      religion: 'Christianity',
      address: '38 San Thome High Road, Mylapore, Chennai, Tamil Nadu 600004',
      city: 'Chennai',
      state: 'Tamil Nadu',
      country: 'India',
      latitude: 13.0334,
      longitude: 80.2785,
      place_type: 'pilgrimage_destination',
      description: 'Historic neo-Gothic Catholic cathedral built over the tomb of St. Thomas the Apostle, one of only three basilicas in the world built over an apostle’s tomb (along with St. Peter’s in Rome and Santiago de Compostela). Hub for Tamil Christian Christmas, Easter, and Feast of Saint Thomas.',
      seasonal_notes: 'The Feast of Saint Thomas is observed in July and December with solemn processions along the Marina coastline.',
      image_url: 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800',
      source_url: 'https://santhomechurch.com/',
      festivals: ['Christmas', 'Easter', 'Good Friday', 'Feast of Saint Thomas the Apostle', 'Palm Sunday']
    },
    {
      name: 'Basilica of Our Lady of Good Health',
      religion: 'Christianity',
      address: 'Velankanni, Nagapattinam, Tamil Nadu 611111',
      city: 'Velankanni',
      state: 'Tamil Nadu',
      country: 'India',
      latitude: 10.6805,
      longitude: 79.8496,
      place_type: 'pilgrimage_destination',
      description: 'Known as the "Lourdes of the East," this coastal Marian sanctuary attracts millions of pilgrims of diverse faiths. Celebrates the annual 11-day Feast of Our Lady of Good Health (Aug 29 – Sept 8) and Feast of the Assumption.',
      seasonal_notes: 'The annual car festival in September attracts over 2 million pilgrims who dress in traditional yellow attire and carry illuminated chariots along the beach.',
      image_url: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800',
      source_url: 'https://velankannichurch.com/',
      festivals: ['Feast of the Assumption', 'Christmas', 'Easter', 'Good Friday']
    },
    {
      name: 'St. Paul’s Cathedral & Park Street',
      religion: 'Christianity',
      address: 'Cathedral Road, Maidan, Kolkata, West Bengal 700071',
      city: 'Kolkata',
      state: 'West Bengal',
      country: 'India',
      latitude: 22.5443,
      longitude: 88.3475,
      place_type: 'famous_celebration_location',
      description: 'First Anglican cathedral of the Victorian era built in Gothic revival style. Serves as the spiritual centerpiece of the renowned Kolkata Christmas Festival along Park Street, featuring choral carols and light installations.',
      seasonal_notes: 'Midnight service on Christmas Eve draws thousands of citizens from all faiths, surrounded by illuminated heritage buildings.',
      image_url: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=800',
      source_url: 'https://wbtourism.gov.in/',
      festivals: ['Christmas', 'Easter', 'Good Friday', 'Advent']
    }
  ];

  console.log(`Seeding ${locations.length} verified real-world festival locations...`);

  for (const loc of locations) {
    const res = run(`
      INSERT INTO festival_locations 
        (name, religion, address, city, state, country, latitude, longitude, description, image_url, source_url, place_type, seasonal_notes, verification_status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published')
    `, [
      loc.name,
      loc.religion,
      loc.address,
      loc.city,
      loc.state,
      loc.country,
      loc.latitude,
      loc.longitude,
      loc.description,
      loc.image_url,
      loc.source_url,
      loc.place_type,
      loc.seasonal_notes
    ]);

    const locId = res.lastInsertRowid;

    for (const festName of loc.festivals) {
      const festival = one('SELECT id FROM festivals WHERE LOWER(name)=LOWER(?)', [festName]);
      if (festival) {
        run(`
          INSERT OR IGNORE INTO festival_location_relations (location_id, festival_id, is_primary_celebration_site)
          VALUES (?, ?, 1)
        `, [locId, festival.id]);
      }
    }
  }

  const seededCount = one('SELECT COUNT(*) as c FROM festival_locations').c;
  const relCount = one('SELECT COUNT(*) as c FROM festival_location_relations').c;
  console.log(`Successfully seeded ${seededCount} locations with ${relCount} festival relations.`);
}

module.exports = { seedLocations };
