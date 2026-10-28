// Sample listing data shared by the property pages (English + Bangla).
// Everything here is demo data, not real inventory.
(function () {
  var L = [
    {id:1, deal:'sale', type:'Apartment', price:64000000, sqft:2650, beds:4, baths:4, area:'Gulshan 2', city:'Dhaka', tone:'#B7C6BC',
      title:{en:'South-facing 4-bed apartment, Road 71', bn:'দক্ষিণমুখী ৪ বেডের অ্যাপার্টমেন্ট, রোড ৭১'},
      photo:{en:'apartment tower exterior', bn:'অ্যাপার্টমেন্ট টাওয়ারের বাইরের দৃশ্য'},
      floor:[7,12], facing:'South', handover:'ready', service:12000, parking:2, lister:'owner', listed:'2026-10-14', verified:'2026-10-12'},
    {id:2, deal:'sale', type:'Apartment', price:29500000, sqft:1780, beds:3, baths:3, area:'Dhanmondi', city:'Dhaka', tone:'#D6CBB4',
      title:{en:'3-bed apartment near Rabindra Sarobar', bn:'রবীন্দ্র সরোবরের কাছে ৩ বেডের অ্যাপার্টমেন্ট'},
      photo:{en:'living room, lake-side balcony', bn:'বসার ঘর, লেকমুখী বারান্দা'},
      floor:[5,9], facing:'East', handover:'ready', service:6000, parking:1, lister:'owner', listed:'2026-10-09', verified:'2026-10-07'},
    {id:3, deal:'sale', type:'Apartment', price:14800000, sqft:1450, beds:3, baths:3, area:'Bashundhara R/A', city:'Dhaka', tone:'#C3CEC7',
      title:{en:'Ready flat with lake view, Block G', bn:'লেক ভিউসহ রেডি ফ্ল্যাট, ব্লক জি'},
      photo:{en:'facade with balconies', bn:'বারান্দাসহ সম্মুখভাগ'},
      floor:[4,10], facing:'North', handover:'ready', service:4500, parking:1, lister:'agent', listed:'2026-10-02'},
    {id:4, deal:'rent', type:'Apartment', price:45000, sqft:1600, beds:3, baths:3, area:'Uttara', city:'Dhaka', tone:'#CFC6B3',
      title:{en:'Family apartment, Sector 13', bn:'পারিবারিক অ্যাপার্টমেন্ট, সেক্টর ১৩'},
      photo:{en:'bright bedroom', bn:'আলো-ঝলমলে বেডরুম'},
      floor:[3,8], facing:'South', handover:'ready', service:3500, parking:1, lister:'owner', listed:'2026-10-18', verified:'2026-10-16'},
    {id:5, deal:'rent', type:'Apartment', price:26000, sqft:1100, beds:2, baths:2, area:'Mirpur', city:'Dhaka', tone:'#BFCAC2',
      title:{en:'2-bed flat near Mirpur 10 metro station', bn:'মিরপুর ১০ মেট্রো স্টেশনের কাছে ২ বেডের ফ্ল্যাট'},
      photo:{en:'residential street facade', bn:'আবাসিক রাস্তার দৃশ্য'},
      floor:[2,6], facing:'West', handover:'ready', service:2000, parking:0, lister:'agent', listed:'2026-10-20'},
    {id:6, deal:'sale', type:'Plot/Land', price:18500000, sqft:3600, land:{en:'5 katha', bn:'৫ কাঠা'}, area:'Purbachal', city:'Dhaka', tone:'#D2CFAF',
      title:{en:'5 katha residential plot, Sector 22', bn:'৫ কাঠার আবাসিক প্লট, সেক্টর ২২'},
      photo:{en:'open plot with boundary wall', bn:'সীমানা প্রাচীরসহ খোলা প্লট'},
      facing:'East', lister:'owner', listed:'2026-09-28'},
    {id:7, deal:'sale', type:'House', price:42000000, sqft:3400, beds:5, baths:5, area:'Khulshi', city:'Chattogram', tone:'#A9BDB0',
      title:{en:'Hillside duplex house with garden', bn:'বাগানসহ পাহাড়ি ঢালের ডুপ্লেক্স বাড়ি'},
      photo:{en:'two-storey house among trees', bn:'গাছপালার মাঝে দোতলা বাড়ি'},
      floor:[2,2], facing:'South', handover:'ready', parking:2, lister:'owner', listed:'2026-10-05', verified:'2026-10-03'},
    {id:8, deal:'rent', type:'Office', price:160000, sqft:1900, area:'Agrabad', city:'Chattogram', tone:'#C2C7C4',
      title:{en:'Open-plan office floor', bn:'ওপেন-প্ল্যান অফিস ফ্লোর'},
      photo:{en:'office floor with glazing', bn:'কাচঘেরা অফিস ফ্লোর'},
      floor:[9,14], facing:'North', handover:'ready', service:15000, parking:3, lister:'agent', listed:'2026-10-11'},
    {id:9, deal:'rent', type:'Shop', price:35000, sqft:420, area:'Feni Sadar', city:'Feni', tone:'#D9CCB6',
      title:{en:'Corner shop on Trunk Road', bn:'ট্রাংক রোডে কোণার দোকান'},
      photo:{en:'ground-floor shopfront', bn:'নিচতলার দোকান'},
      floor:[0,4], facing:'East', handover:'ready', service:1500, parking:0, lister:'owner', listed:'2026-10-15', verified:'2026-10-13'},
    {id:10, deal:'sale', type:'Apartment', price:9500000, sqft:1350, beds:3, baths:2, area:'Zindabazar', city:'Sylhet', tone:'#B9C9BF',
      title:{en:'3-bed apartment off Zindabazar', bn:'জিন্দাবাজারের কাছে ৩ বেডের অ্যাপার্টমেন্ট'},
      photo:{en:'apartment block, green setting', bn:'সবুজ পরিবেশে অ্যাপার্টমেন্ট ভবন'},
      floor:[6,8], facing:'South', handover:'2027-06', service:3000, parking:1, lister:'developer', listed:'2026-09-30'},
    {id:11, deal:'sale', type:'Apartment', price:5800000, sqft:620, beds:1, baths:1, area:'Kolatoli', city:"Cox's Bazar", tone:'#CFD6CF',
      title:{en:'Serviced studio apartment, Kolatoli', bn:'সার্ভিসড স্টুডিও অ্যাপার্টমেন্ট, কলাতলী'},
      photo:{en:'studio with sea-facing window', bn:'সমুদ্রমুখী জানালাসহ স্টুডিও'},
      floor:[8,11], facing:'West', handover:'ready', service:5000, parking:0, lister:'developer', listed:'2026-10-01'},
    {id:12, deal:'sale', type:'Plot/Land', price:4800000, sqft:3485, land:{en:'8 decimal', bn:'৮ শতক'}, area:'Mohipal', city:'Feni', tone:'#D5CFB0',
      title:{en:'8 decimal land near Mohipal', bn:'মহিপালের কাছে ৮ শতক জমি'},
      photo:{en:'roadside land parcel', bn:'রাস্তার পাশের জমি'},
      facing:'North', lister:'agent', listed:'2026-09-24'},
    {id:13, deal:'rent', type:'Apartment', price:135000, sqft:2100, beds:3, baths:4, area:'Banani', city:'Dhaka', tone:'#C8C1AE',
      title:{en:'Furnished 3-bed apartment, Road 11', bn:'সাজানো ৩ বেডের অ্যাপার্টমেন্ট, রোড ১১'},
      photo:{en:'furnished living and dining', bn:'সাজানো বসার ও খাবার ঘর'},
      floor:[10,14], facing:'South', handover:'ready', service:10000, parking:2, lister:'owner', listed:'2026-10-21', verified:'2026-10-19'},
    {id:14, deal:'sale', type:'Shop', price:7200000, sqft:380, area:'Kandirpar', city:'Cumilla', tone:'#CBC9BC',
      title:{en:'Ground-floor shop, Kandirpar', bn:'নিচতলার দোকান, কান্দিরপাড়'},
      photo:{en:'market-street shopfront', bn:'বাজারের রাস্তার দোকান'},
      floor:[0,5], facing:'West', handover:'ready', service:1200, parking:0, lister:'agent', listed:'2026-10-08'},
    {id:15, deal:'sale', type:'House', price:16500000, sqft:2800, beds:4, baths:3, area:'Upashahar', city:'Rajshahi', tone:'#B4C3B6',
      title:{en:'Two-storey family house', bn:'দোতলা পারিবারিক বাড়ি'},
      photo:{en:'brick house with courtyard', bn:'উঠানসহ ইটের বাড়ি'},
      floor:[2,2], facing:'East', handover:'ready', parking:1, lister:'owner', listed:'2026-10-04'},
    {id:16, deal:'rent', type:'Apartment', price:18000, sqft:1050, beds:2, baths:2, area:'Sonadanga', city:'Khulna', tone:'#C6CDC4',
      title:{en:'2-bed apartment, Sonadanga', bn:'২ বেডের অ্যাপার্টমেন্ট, সোনাডাঙ্গা'},
      photo:{en:'apartment balcony view', bn:'অ্যাপার্টমেন্টের বারান্দা থেকে দৃশ্য'},
      floor:[4,6], facing:'North', handover:'ready', service:1500, parking:0, lister:'agent', listed:'2026-10-17'}
  ];

  var PLACE_BN = {'Dhaka':'ঢাকা','Gulshan 2':'গুলশান ২','Banani':'বনানী','Dhanmondi':'ধানমন্ডি','Bashundhara R/A':'বসুন্ধরা আ/এ','Uttara':'উত্তরা','Mirpur':'মিরপুর','Purbachal':'পূর্বাচল','Chattogram':'চট্টগ্রাম','Khulshi':'খুলশী','Agrabad':'আগ্রাবাদ','Feni':'ফেনী','Feni Sadar':'ফেনী সদর','Sylhet':'সিলেট','Khulna':'খুলনা','Rajshahi':'রাজশাহী','Cumilla':'কুমিল্লা',"Cox's Bazar":'কক্সবাজার','Zindabazar':'জিন্দাবাজার','Kolatoli':'কলাতলী','Mohipal':'মহিপাল','Kandirpar':'কান্দিরপাড়','Upashahar':'উপশহর','Sonadanga':'সোনাডাঙ্গা'};
  var TYPE = {'Apartment':{en:'Apartment',bn:'অ্যাপার্টমেন্ট'},'House':{en:'House',bn:'বাড়ি'},'Plot/Land':{en:'Plot / Land',bn:'প্লট / জমি'},'Office':{en:'Office',bn:'অফিস'},'Shop':{en:'Shop',bn:'দোকান'}};
  var FACING = {'South':{en:'South',bn:'দক্ষিণ'},'North':{en:'North',bn:'উত্তর'},'East':{en:'East',bn:'পূর্ব'},'West':{en:'West',bn:'পশ্চিম'}};
  var LISTER = {'owner':{en:'Owner',bn:'মালিক'},'agent':{en:'Agent',bn:'এজেন্ট'},'developer':{en:'Developer',bn:'ডেভেলপার'}};
  // Extra gallery views per property type (the first photo is the listing's own).
  var VIEWS = {
    'Apartment':{en:['Living room','Master bedroom','Kitchen','Balcony view'], bn:['বসার ঘর','মাস্টার বেডরুম','রান্নাঘর','বারান্দার দৃশ্য']},
    'House':{en:['Front garden','Living room','Bedroom','Courtyard'], bn:['সামনের বাগান','বসার ঘর','বেডরুম','উঠান']},
    'Plot/Land':{en:['Plot from the road','Boundary wall','Access road','Neighbourhood'], bn:['রাস্তা থেকে প্লট','সীমানা প্রাচীর','প্রবেশ পথ','আশপাশের এলাকা']},
    'Office':{en:['Open floor','Reception','Meeting room','Lift lobby'], bn:['খোলা ফ্লোর','রিসেপশন','মিটিং রুম','লিফট লবি']},
    'Shop':{en:['Shopfront','Interior','Street view','Storage'], bn:['দোকানের সামনে','ভেতরের অংশ','রাস্তার দৃশ্য','স্টোর রুম']}
  };

  window.GRIHOVA = { LISTINGS: L, PLACE_BN: PLACE_BN, TYPE: TYPE, FACING: FACING, LISTER: LISTER, VIEWS: VIEWS };
})();
