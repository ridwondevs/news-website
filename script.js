/* =========================================================
   BANGLAPRESS — STATIC NEWS WEBSITE
   NO API / NO API KEY REQUIRED
========================================================= */

"use strict";

/* =========================================================
   NEWS DATABASE
========================================================= */

const newsData = [

    /* =========================
       BANGLADESH
    ========================= */

    {
        id: 1,
        category: "bangladesh",
        categoryBn: "বাংলাদেশ",
        title: "বাংলাদেশের উন্নয়ন ও জনজীবন নিয়ে নতুন পরিকল্পনায় গুরুত্ব",
        description: "দেশের অবকাঠামো, জনসেবা ও সাধারণ মানুষের জীবনমান উন্নয়নে বিভিন্ন উদ্যোগ নিয়ে আলোচনা হয়েছে।",
        source: "BanglaPress Archive",
        time: "সাম্প্রতিক",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 2,
        category: "bangladesh",
        categoryBn: "বাংলাদেশ",
        title: "শিক্ষা খাতে প্রযুক্তির ব্যবহার বাড়াতে নেওয়া হচ্ছে বিভিন্ন উদ্যোগ",
        description: "শিক্ষার্থীদের আধুনিক শিক্ষার সুযোগ বাড়াতে ডিজিটাল প্রযুক্তি ব্যবহারের ওপর গুরুত্ব দেওয়া হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 3,
        category: "bangladesh",
        categoryBn: "বাংলাদেশ",
        title: "নগর ব্যবস্থাপনা উন্নয়নে আধুনিক প্রযুক্তির ব্যবহার বাড়ছে",
        description: "শহরের পরিবহন, নাগরিক সেবা ও যোগাযোগ ব্যবস্থা আরও কার্যকর করতে প্রযুক্তিনির্ভর সমাধান নিয়ে কাজ চলছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 4,
        category: "bangladesh",
        categoryBn: "বাংলাদেশ",
        title: "দেশের বিভিন্ন অঞ্চলে কৃষি উৎপাদনে প্রযুক্তির ব্যবহার বৃদ্ধি",
        description: "কৃষকদের উৎপাদনশীলতা বাড়াতে আধুনিক কৃষি প্রযুক্তি ও তথ্যভিত্তিক পদ্ধতির ব্যবহার বাড়ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 5,
        category: "bangladesh",
        categoryBn: "বাংলাদেশ",
        title: "দেশের যোগাযোগ ব্যবস্থায় অবকাঠামো উন্নয়নের কাজ অব্যাহত",
        description: "সড়ক ও যোগাযোগ ব্যবস্থার উন্নয়নে বিভিন্ন অবকাঠামো প্রকল্প বাস্তবায়নের কাজ চলছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 6,
        category: "bangladesh",
        categoryBn: "বাংলাদেশ",
        title: "জনস্বাস্থ্য সচেতনতা বাড়াতে বিভিন্ন কর্মসূচি গুরুত্ব পাচ্ছে",
        description: "স্বাস্থ্যসেবা সম্পর্কে সাধারণ মানুষের সচেতনতা বাড়াতে বিভিন্ন সামাজিক ও সরকারি উদ্যোগ নেওয়া হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 7,
        category: "bangladesh",
        categoryBn: "বাংলাদেশ",
        title: "ডিজিটাল সেবা সম্প্রসারণে নাগরিকদের সুবিধা বাড়ানোর উদ্যোগ",
        description: "অনলাইনভিত্তিক নাগরিক সেবা আরও সহজ ও দ্রুত করার জন্য বিভিন্ন ডিজিটাল উদ্যোগ নেওয়া হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 8,
        category: "bangladesh",
        categoryBn: "বাংলাদেশ",
        title: "তরুণদের দক্ষতা উন্নয়নে প্রশিক্ষণ কর্মসূচির ওপর গুরুত্ব",
        description: "তরুণদের কর্মদক্ষতা ও প্রযুক্তিগত জ্ঞান বাড়াতে বিভিন্ন প্রশিক্ষণ কর্মসূচি পরিচালিত হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       POLITICS
    ========================= */

    {
        id: 9,
        category: "politics",
        categoryBn: "রাজনীতি",
        title: "জাতীয় রাজনীতিতে বিভিন্ন বিষয়ে আলোচনা ও মতবিনিময়",
        description: "দেশের রাজনৈতিক অঙ্গনে বিভিন্ন জাতীয় বিষয় নিয়ে দলগুলোর মধ্যে আলোচনা ও মতবিনিময় অব্যাহত রয়েছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 10,
        category: "politics",
        categoryBn: "রাজনীতি",
        title: "সংসদীয় কার্যক্রমে গুরুত্বপূর্ণ বিভিন্ন বিষয় নিয়ে আলোচনা",
        description: "জাতীয় বিভিন্ন ইস্যু নিয়ে সংসদীয় পর্যায়ে আলোচনা ও মতামত প্রকাশ করা হয়েছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 11,
        category: "politics",
        categoryBn: "রাজনীতি",
        title: "রাজনৈতিক দলগুলোর সাংগঠনিক কার্যক্রমে ব্যস্ততা",
        description: "বিভিন্ন রাজনৈতিক দল নিজেদের সাংগঠনিক কার্যক্রম ও ভবিষ্যৎ পরিকল্পনা নিয়ে কাজ করছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1575320181282-9afab399332c?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 12,
        category: "politics",
        categoryBn: "রাজনীতি",
        title: "জাতীয় বিভিন্ন ইস্যুতে রাজনৈতিক নেতাদের বক্তব্য",
        description: "দেশের গুরুত্বপূর্ণ বিভিন্ন বিষয় নিয়ে রাজনৈতিক নেতারা নিজেদের মতামত তুলে ধরেছেন।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 13,
        category: "politics",
        categoryBn: "রাজনীতি",
        title: "জনসম্পৃক্ত বিষয় নিয়ে রাজনৈতিক পর্যায়ে আলোচনা অব্যাহত",
        description: "জনজীবনের সঙ্গে সংশ্লিষ্ট বিভিন্ন বিষয় রাজনৈতিক আলোচনায় গুরুত্ব পাচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 14,
        category: "politics",
        categoryBn: "রাজনীতি",
        title: "নীতিগত বিভিন্ন বিষয়ে মতামত জানাচ্ছেন রাজনৈতিক নেতারা",
        description: "অর্থনীতি, শিক্ষা ও জনসেবা নিয়ে বিভিন্ন নীতিগত বিষয়ে রাজনৈতিক পর্যায়ে মতামত দেওয়া হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       INTERNATIONAL
    ========================= */

    {
        id: 15,
        category: "international",
        categoryBn: "আন্তর্জাতিক",
        title: "বিশ্ব রাজনীতিতে কূটনৈতিক যোগাযোগ ও আলোচনা অব্যাহত",
        description: "বিভিন্ন আন্তর্জাতিক ইস্যুতে দেশগুলোর মধ্যে কূটনৈতিক আলোচনা অব্যাহত রয়েছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 16,
        category: "international",
        categoryBn: "আন্তর্জাতিক",
        title: "বিশ্ব অর্থনীতিতে বাজার পরিস্থিতি নিয়ে বিশেষজ্ঞদের পর্যবেক্ষণ",
        description: "আন্তর্জাতিক বাজার, বাণিজ্য ও অর্থনৈতিক প্রবৃদ্ধি নিয়ে বিশেষজ্ঞদের মধ্যে আলোচনা চলছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 17,
        category: "international",
        categoryBn: "আন্তর্জাতিক",
        title: "জলবায়ু পরিবর্তন মোকাবিলায় আন্তর্জাতিক সহযোগিতার গুরুত্ব",
        description: "জলবায়ু পরিবর্তনের প্রভাব মোকাবিলায় আন্তর্জাতিক সহযোগিতা ও দীর্ঘমেয়াদি পরিকল্পনার ওপর গুরুত্ব দেওয়া হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 18,
        category: "international",
        categoryBn: "আন্তর্জাতিক",
        title: "বিশ্বজুড়ে প্রযুক্তি খাতে নতুন পরিবর্তনের দিকে নজর",
        description: "কৃত্রিম বুদ্ধিমত্তা ও ডিজিটাল প্রযুক্তির দ্রুত বিকাশ বিশ্ব প্রযুক্তি খাতে বড় পরিবর্তন আনছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 19,
        category: "international",
        categoryBn: "আন্তর্জাতিক",
        title: "বিশ্বের বিভিন্ন দেশে পরিবেশ সংরক্ষণে নতুন উদ্যোগ",
        description: "প্রকৃতি ও জীববৈচিত্র্য সংরক্ষণে বিভিন্ন দেশে দীর্ঘমেয়াদি পরিবেশগত কর্মসূচি নেওয়া হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 20,
        category: "international",
        categoryBn: "আন্তর্জাতিক",
        title: "আন্তর্জাতিক বাণিজ্য বাড়াতে বিভিন্ন দেশের নতুন উদ্যোগ",
        description: "বাণিজ্য ও বিনিয়োগ বৃদ্ধির লক্ষ্যে বিভিন্ন দেশ নতুন সহযোগিতা ও নীতিগত উদ্যোগ নিয়ে কাজ করছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       ECONOMY
    ========================= */

    {
        id: 21,
        category: "economy",
        categoryBn: "অর্থনীতি",
        title: "ব্যবসা ও বিনিয়োগ পরিবেশ উন্নয়নে গুরুত্ব দিচ্ছে বিভিন্ন প্রতিষ্ঠান",
        description: "দেশের ব্যবসা ও বিনিয়োগ পরিবেশ আরও কার্যকর করতে বিভিন্ন পর্যায়ে উদ্যোগ ও আলোচনা চলছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 22,
        category: "economy",
        categoryBn: "অর্থনীতি",
        title: "ক্ষুদ্র উদ্যোক্তাদের জন্য ডিজিটাল ব্যবসার সুযোগ বাড়ছে",
        description: "অনলাইন প্ল্যাটফর্মের মাধ্যমে ক্ষুদ্র ও মাঝারি উদ্যোক্তাদের ব্যবসার সুযোগ সম্প্রসারিত হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 23,
        category: "economy",
        categoryBn: "অর্থনীতি",
        title: "ব্যাংকিং খাতে ডিজিটাল সেবার ব্যবহার বাড়ছে",
        description: "গ্রাহকদের দ্রুত সেবা দিতে ব্যাংকিং খাতে অনলাইন ও মোবাইলভিত্তিক সেবার ব্যবহার বৃদ্ধি পাচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 24,
        category: "economy",
        categoryBn: "অর্থনীতি",
        title: "রপ্তানি খাতে নতুন বাজার তৈরির ওপর গুরুত্ব",
        description: "দেশীয় পণ্যের আন্তর্জাতিক বাজার সম্প্রসারণ ও নতুন ক্রেতা তৈরিতে বিভিন্ন উদ্যোগ নেওয়া হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 25,
        category: "economy",
        categoryBn: "অর্থনীতি",
        title: "স্টার্টআপ খাতে তরুণ উদ্যোক্তাদের আগ্রহ বাড়ছে",
        description: "প্রযুক্তিনির্ভর ব্যবসা ও নতুন ধারণাকে কেন্দ্র করে তরুণ উদ্যোক্তাদের আগ্রহ বৃদ্ধি পাচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 26,
        category: "economy",
        categoryBn: "অর্থনীতি",
        title: "ই-কমার্স খাতে নতুন ব্যবসার সুযোগ তৈরি হচ্ছে",
        description: "অনলাইন কেনাকাটার জনপ্রিয়তার সঙ্গে ই-কমার্স খাতে নতুন ব্যবসা ও সেবার সুযোগ তৈরি হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       SPORTS
    ========================= */

    {
        id: 27,
        category: "sports",
        categoryBn: "খেলাধুলা",
        title: "বাংলাদেশের ক্রিকেটে তরুণ খেলোয়াড়দের নিয়ে নতুন প্রত্যাশা",
        description: "তরুণ ক্রিকেটারদের পারফরম্যান্স ও ভবিষ্যৎ সম্ভাবনা নিয়ে সমর্থকদের মধ্যে আগ্রহ তৈরি হয়েছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 28,
        category: "sports",
        categoryBn: "খেলাধুলা",
        title: "আন্তর্জাতিক ক্রিকেটে প্রতিদ্বন্দ্বিতাপূর্ণ ম্যাচ নিয়ে দর্শকদের আগ্রহ",
        description: "আন্তর্জাতিক ক্রিকেটের গুরুত্বপূর্ণ ম্যাচগুলো ঘিরে দর্শকদের মধ্যে ব্যাপক আগ্রহ দেখা যায়।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 29,
        category: "sports",
        categoryBn: "খেলাধুলা",
        title: "ফুটবলে তরুণ প্রতিভা খুঁজতে বিভিন্ন উদ্যোগ",
        description: "নতুন ফুটবল প্রতিভা খুঁজে বের করতে বয়সভিত্তিক বিভিন্ন প্রশিক্ষণ ও প্রতিযোগিতার আয়োজন করা হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 30,
        category: "sports",
        categoryBn: "খেলাধুলা",
        title: "দেশীয় ক্রীড়াঙ্গনে অবকাঠামো উন্নয়নের প্রয়োজনীয়তা নিয়ে আলোচনা",
        description: "খেলোয়াড়দের প্রশিক্ষণ ও প্রতিযোগিতার সুযোগ বাড়াতে আধুনিক ক্রীড়া অবকাঠামোর প্রয়োজনীয়তা নিয়ে আলোচনা হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 31,
        category: "sports",
        categoryBn: "খেলাধুলা",
        title: "নারী ক্রিকেটে নতুন প্রজন্মের খেলোয়াড়দের উত্থান",
        description: "নারী ক্রিকেটে নতুন খেলোয়াড়দের অংশগ্রহণ ও পারফরম্যান্স নিয়ে ইতিবাচক আলোচনা হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 32,
        category: "sports",
        categoryBn: "খেলাধুলা",
        title: "অলিম্পিক ও আন্তর্জাতিক ক্রীড়ায় নতুন তারকাদের নজরকাড়া পারফরম্যান্স",
        description: "আন্তর্জাতিক ক্রীড়াঙ্গনে নতুন প্রজন্মের অনেক খেলোয়াড় নিজেদের দক্ষতার পরিচয় দিচ্ছেন।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       TECHNOLOGY
    ========================= */

    {
        id: 33,
        category: "technology",
        categoryBn: "প্রযুক্তি",
        title: "কৃত্রিম বুদ্ধিমত্তার ব্যবহার দ্রুত বাড়ছে বিভিন্ন খাতে",
        description: "শিক্ষা, ব্যবসা, গবেষণা ও সেবাখাতে কৃত্রিম বুদ্ধিমত্তার ব্যবহার দ্রুত সম্প্রসারিত হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 34,
        category: "technology",
        categoryBn: "প্রযুক্তি",
        title: "সাইবার নিরাপত্তা নিয়ে ব্যবহারকারীদের সচেতন হওয়ার পরামর্শ",
        description: "অনলাইন নিরাপত্তা নিশ্চিত করতে শক্তিশালী পাসওয়ার্ড, দুই ধাপের যাচাই ও সতর্কতার ওপর গুরুত্ব দেওয়া হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 35,
        category: "technology",
        categoryBn: "প্রযুক্তি",
        title: "স্মার্টফোন প্রযুক্তিতে ক্যামেরা ও প্রসেসিংয়ে নতুন পরিবর্তন",
        description: "স্মার্টফোন নির্মাতারা ক্যামেরা, ব্যাটারি ও প্রসেসিং প্রযুক্তিতে নতুন নতুন উন্নয়ন নিয়ে আসছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 36,
        category: "technology",
        categoryBn: "প্রযুক্তি",
        title: "ক্লাউড প্রযুক্তির ব্যবহার ব্যবসায়িক প্রতিষ্ঠানে বাড়ছে",
        description: "ডেটা সংরক্ষণ ও অনলাইন সেবা পরিচালনায় বিভিন্ন প্রতিষ্ঠান ক্লাউড প্রযুক্তির ওপর নির্ভর করছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 37,
        category: "technology",
        categoryBn: "প্রযুক্তি",
        title: "ওয়েব ডেভেলপমেন্টে নতুন প্রযুক্তি ও ফ্রেমওয়ার্কের জনপ্রিয়তা",
        description: "আধুনিক ওয়েবসাইট ও ওয়েব অ্যাপ তৈরিতে নতুন প্রযুক্তি ও ফ্রেমওয়ার্কের ব্যবহার বৃদ্ধি পাচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 38,
        category: "technology",
        categoryBn: "প্রযুক্তি",
        title: "ডিজিটাল শিক্ষায় অনলাইন প্ল্যাটফর্মের ব্যবহার বৃদ্ধি",
        description: "শিক্ষার্থীদের জন্য অনলাইন কোর্স, ভিডিও ক্লাস ও ডিজিটাল রিসোর্সের ব্যবহার বাড়ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       ENTERTAINMENT
    ========================= */

    {
        id: 39,
        category: "entertainment",
        categoryBn: "বিনোদন",
        title: "বাংলা চলচ্চিত্রে নতুন গল্প ও নির্মাণশৈলীর প্রতি দর্শকদের আগ্রহ",
        description: "বাংলা চলচ্চিত্রে নতুন ধরনের গল্প ও নির্মাণশৈলী দর্শকদের মধ্যে আগ্রহ তৈরি করছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 40,
        category: "entertainment",
        categoryBn: "বিনোদন",
        title: "ওটিটি প্ল্যাটফর্মে স্থানীয় কনটেন্টের জনপ্রিয়তা বাড়ছে",
        description: "অনলাইন স্ট্রিমিং প্ল্যাটফর্মে স্থানীয় গল্প ও অভিনয়শিল্পীদের কাজ দর্শকদের কাছে জনপ্রিয় হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 41,
        category: "entertainment",
        categoryBn: "বিনোদন",
        title: "সংগীতাঙ্গনে নতুন শিল্পীদের কাজ নিয়ে শ্রোতাদের আগ্রহ",
        description: "নতুন শিল্পী ও সুরকারদের বিভিন্ন কাজ অনলাইন প্ল্যাটফর্মে শ্রোতাদের কাছে পৌঁছে যাচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 42,
        category: "entertainment",
        categoryBn: "বিনোদন",
        title: "টেলিভিশন নাটকে নতুন গল্প বলার প্রবণতা বাড়ছে",
        description: "সমসাময়িক জীবন ও সম্পর্কের গল্প নিয়ে নির্মিত নাটকের প্রতি দর্শকদের আগ্রহ দেখা যাচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8e0?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 43,
        category: "entertainment",
        categoryBn: "বিনোদন",
        title: "দেশীয় বিনোদন শিল্পে ডিজিটাল প্ল্যাটফর্মের প্রভাব",
        description: "ডিজিটাল প্ল্যাটফর্ম বিনোদন শিল্পের কনটেন্ট তৈরি ও দর্শকদের কাছে পৌঁছানোর পদ্ধতিতে পরিবর্তন আনছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 44,
        category: "entertainment",
        categoryBn: "বিনোদন",
        title: "চলচ্চিত্র উৎসব ঘিরে নির্মাতা ও দর্শকদের মধ্যে উৎসাহ",
        description: "চলচ্চিত্র উৎসবগুলো নতুন নির্মাতা ও চলচ্চিত্রের সঙ্গে দর্শকদের পরিচিত হওয়ার সুযোগ তৈরি করছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       HEALTH
    ========================= */

    {
        id: 45,
        category: "health",
        categoryBn: "স্বাস্থ্য",
        title: "স্বাস্থ্যকর জীবনযাপনে নিয়মিত শরীরচর্চার গুরুত্ব",
        description: "সুস্থ জীবনযাপনের জন্য নিয়মিত শারীরিক ব্যায়াম, পর্যাপ্ত ঘুম ও সুষম খাদ্যের গুরুত্ব বিশেষজ্ঞরা তুলে ধরেন।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 46,
        category: "health",
        categoryBn: "স্বাস্থ্য",
        title: "সুষম খাদ্যাভ্যাসের মাধ্যমে স্বাস্থ্য ভালো রাখার পরামর্শ",
        description: "প্রতিদিনের খাদ্যতালিকায় প্রয়োজনীয় পুষ্টি নিশ্চিত করার ওপর বিশেষজ্ঞরা গুরুত্ব দেন।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 47,
        category: "health",
        categoryBn: "স্বাস্থ্য",
        title: "পর্যাপ্ত ঘুম মানসিক ও শারীরিক সুস্থতার জন্য গুরুত্বপূর্ণ",
        description: "নিয়মিত ও পর্যাপ্ত ঘুম শরীর ও মনের স্বাভাবিক কার্যক্রম বজায় রাখতে গুরুত্বপূর্ণ ভূমিকা রাখে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 48,
        category: "health",
        categoryBn: "স্বাস্থ্য",
        title: "মানসিক স্বাস্থ্যের বিষয়ে সচেতনতা বাড়ানোর ওপর গুরুত্ব",
        description: "মানসিক সুস্থতা নিয়ে খোলামেলা আলোচনা ও প্রয়োজন হলে পেশাদার সহায়তা নেওয়ার গুরুত্ব তুলে ধরা হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 49,
        category: "health",
        categoryBn: "স্বাস্থ্য",
        title: "পরিবেশ ও স্বাস্থ্য সুরক্ষায় পরিচ্ছন্নতার গুরুত্ব",
        description: "পরিচ্ছন্ন পরিবেশ বজায় রাখা এবং নিরাপদ পানি ও খাদ্য ব্যবহারের ওপর জনস্বাস্থ্য বিশেষজ্ঞরা গুরুত্ব দেন।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 50,
        category: "health",
        categoryBn: "স্বাস্থ্য",
        title: "নিয়মিত স্বাস্থ্য পরীক্ষা সম্পর্কে সচেতন হওয়ার আহ্বান",
        description: "ব্যক্তির বয়স ও ঝুঁকি অনুযায়ী প্রয়োজনীয় স্বাস্থ্য পরীক্ষা সম্পর্কে সচেতন হওয়ার পরামর্শ দেওয়া হয়।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       EXTRA BANGLADESH
    ========================= */

    {
        id: 51,
        category: "bangladesh",
        categoryBn: "বাংলাদেশ",
        title: "পর্যটন শিল্পে বাংলাদেশের বিভিন্ন অঞ্চলের সম্ভাবনা",
        description: "প্রাকৃতিক সৌন্দর্য ও সাংস্কৃতিক বৈচিত্র্যের কারণে দেশের বিভিন্ন পর্যটন এলাকায় নতুন সম্ভাবনা তৈরি হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 52,
        category: "bangladesh",
        categoryBn: "বাংলাদেশ",
        title: "নদী ও জলাশয় সংরক্ষণে সচেতনতা বাড়ানোর উদ্যোগ",
        description: "দেশের নদী ও জলাশয়ের পরিবেশ রক্ষায় স্থানীয় পর্যায়ে বিভিন্ন সচেতনতামূলক কার্যক্রম পরিচালিত হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       EXTRA SPORTS
    ========================= */

    {
        id: 53,
        category: "sports",
        categoryBn: "খেলাধুলা",
        title: "দেশীয় ক্রিকেটে ঘরোয়া প্রতিযোগিতার গুরুত্ব বাড়ছে",
        description: "জাতীয় দলের জন্য খেলোয়াড় তৈরিতে ঘরোয়া ক্রিকেট প্রতিযোগিতার ভূমিকা গুরুত্বপূর্ণ।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 54,
        category: "sports",
        categoryBn: "খেলাধুলা",
        title: "স্কুল পর্যায়ে খেলাধুলায় শিক্ষার্থীদের অংশগ্রহণ বাড়ানোর উদ্যোগ",
        description: "শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশে নিয়মিত খেলাধুলার সুযোগ বাড়ানোর ওপর গুরুত্ব দেওয়া হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       EXTRA TECHNOLOGY
    ========================= */

    {
        id: 55,
        category: "technology",
        categoryBn: "প্রযুক্তি",
        title: "ডিজিটাল নিরাপত্তায় ব্যক্তিগত তথ্য সুরক্ষার গুরুত্ব",
        description: "অনলাইনে ব্যক্তিগত তথ্য ব্যবহারের ক্ষেত্রে ব্যবহারকারীদের সচেতন ও সতর্ক থাকার পরামর্শ দেওয়া হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
    },

    {
        id: 56,
        category: "technology",
        categoryBn: "প্রযুক্তি",
        title: "অনলাইন শিক্ষায় ভিডিও ও ইন্টার‌্যাকটিভ কনটেন্টের ব্যবহার",
        description: "শিক্ষার্থীদের শেখার অভিজ্ঞতা উন্নত করতে ভিডিও ও ইন্টার‌্যাকটিভ ডিজিটাল কনটেন্ট ব্যবহার করা হচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       EXTRA INTERNATIONAL
    ========================= */

    {
        id: 57,
        category: "international",
        categoryBn: "আন্তর্জাতিক",
        title: "বিশ্বজুড়ে নবায়নযোগ্য জ্বালানির ব্যবহার নিয়ে আলোচনা",
        description: "কার্বন নিঃসরণ কমাতে সৌর ও বায়ুশক্তিসহ নবায়নযোগ্য জ্বালানির ব্যবহার নিয়ে বিভিন্ন দেশে কাজ চলছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       EXTRA ECONOMY
    ========================= */

    {
        id: 58,
        category: "economy",
        categoryBn: "অর্থনীতি",
        title: "ডিজিটাল পেমেন্ট ব্যবস্থায় মানুষের আগ্রহ বৃদ্ধি",
        description: "দৈনন্দিন লেনদেনে মোবাইল ও ডিজিটাল পেমেন্ট ব্যবস্থার ব্যবহার ধীরে ধীরে বাড়ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       EXTRA ENTERTAINMENT
    ========================= */

    {
        id: 59,
        category: "entertainment",
        categoryBn: "বিনোদন",
        title: "ডিজিটাল কনটেন্ট নির্মাণে তরুণদের অংশগ্রহণ বাড়ছে",
        description: "ভিডিও, চলচ্চিত্র, সংগীত ও অনলাইন কনটেন্ট তৈরিতে তরুণ নির্মাতাদের অংশগ্রহণ বৃদ্ধি পাচ্ছে।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80"
    },

    /* =========================
       EXTRA HEALTH
    ========================= */

    {
        id: 60,
        category: "health",
        categoryBn: "স্বাস্থ্য",
        title: "স্বাস্থ্যকর দৈনন্দিন অভ্যাস গড়ে তোলার ওপর বিশেষজ্ঞদের গুরুত্ব",
        description: "সুষম খাবার, নিয়মিত হাঁটা, পর্যাপ্ত ঘুম ও মানসিক বিশ্রামের মতো অভ্যাস সুস্থ জীবনযাপনে সহায়ক।",
        source: "BanglaPress Archive",
        time: "আর্কাইভ",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80"
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


/* =========================================================
   DATE
========================================================= */

function setCurrentDate() {

    const dateElement = $("#currentDate");

    if (!dateElement) return;

    const today = new Date();

    const formattedDate = today.toLocaleDateString("bn-BD", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    dateElement.textContent = formattedDate;
}


/* =========================================================
   CREATE NEWS CARD
========================================================= */

function createNewsCard(news) {

    return `
        <article class="news-card" data-news-id="${news.id}">

            <div class="news-card-image">

                <img
                    src="${news.image}"
                    alt="${news.title}"
                    loading="lazy"
                >

                <span class="news-card-category">
                    ${news.categoryBn}
                </span>

            </div>

            <div class="news-card-body">

                <span class="news-category">
                    ${news.categoryBn}
                </span>

                <h3>
                    ${news.title}
                </h3>

                <p>
                    ${news.description}
                </p>

                <div class="news-card-meta">

                    <span>
                        ${news.source}
                    </span>

                    <span>
                        ${news.time}
                    </span>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   CREATE CATEGORY LIST CARD
========================================================= */

function createCategoryCard(news) {

    return `
        <article
            class="category-list-card"
            data-news-id="${news.id}"
        >

            <div class="category-list-image">

                <img
                    src="${news.image}"
                    alt="${news.title}"
                    loading="lazy"
                >

            </div>

            <div class="category-list-content">

                <span>
                    ${news.categoryBn}
                </span>

                <h3>
                    ${news.title}
                </h3>

                <small>
                    <i class="bi bi-clock"></i>
                    ${news.time}
                </small>

            </div>

        </article>
    `;
}


/* =========================================================
   CREATE LATEST NEWS
========================================================= */

function createLatestCard(news) {

    return `
        <article
            class="latest-item"
            data-news-id="${news.id}"
        >

            <div class="latest-item-image">

                <img
                    src="${news.image}"
                    alt="${news.title}"
                    loading="lazy"
                >

            </div>

            <div class="latest-item-content">

                <span class="news-category">
                    ${news.categoryBn}
                </span>

                <h3>
                    ${news.title}
                </h3>

                <p>
                    ${news.description}
                </p>

                <div class="latest-meta">

                    <i class="bi bi-building"></i>
                    ${news.source}

                    &nbsp; • &nbsp;

                    <i class="bi bi-clock"></i>
                    ${news.time}

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   FEATURED NEWS
========================================================= */

function loadFeaturedNews() {

    const featured = newsData[0];

    if (!featured) return;

    const image = $("#featuredImage");
    const category = $("#featuredCategory");
    const title = $("#featuredTitle");
    const description = $("#featuredDescription");
    const source = $("#featuredSource");
    const time = $("#featuredTime");
    const link = $("#featuredLink");

    if (image) {
        image.src = featured.image;
        image.alt = featured.title;
    }

    if (category) {
        category.textContent = featured.categoryBn;
    }

    if (title) {
        title.textContent = featured.title;
    }

    if (description) {
        description.textContent = featured.description;
    }

    if (source) {
        source.innerHTML =
            `<i class="bi bi-building"></i> ${featured.source}`;
    }

    if (time) {
        time.innerHTML =
            `<i class="bi bi-clock"></i> ${featured.time}`;
    }

    if (link) {
        link.dataset.newsId = featured.id;
    }
}


/* =========================================================
   SIDE NEWS
========================================================= */

function loadSideNews() {

    const container = $("#sideNews");

    if (!container) return;

    const sideNews = newsData.slice(1, 4);

    container.innerHTML = sideNews.map(news => `

        <article
            class="side-news-card"
            data-news-id="${news.id}"
        >

            <div class="side-news-image">

                <img
                    src="${news.image}"
                    alt="${news.title}"
                    loading="lazy"
                >

            </div>

            <div class="side-news-content">

                <span>
                    ${news.categoryBn}
                </span>

                <h3>
                    ${news.title}
                </h3>

                <small>
                    <i class="bi bi-clock"></i>
                    ${news.time}
                </small>

            </div>

        </article>

    `).join("");
}


/* =========================================================
   LOAD CATEGORY
========================================================= */

function loadCategory(category, elementId, limit = 6) {

    const container = document.getElementById(elementId);

    if (!container) return;

    const filteredNews = newsData
        .filter(news => news.category === category)
        .slice(0, limit);

    if (!filteredNews.length) {

        container.innerHTML = `
            <div class="empty-news">

                <i class="bi bi-newspaper"></i>

                <p>
                    এই বিভাগে কোনো সংবাদ পাওয়া যায়নি।
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        filteredNews.map(createNewsCard).join("");
}


/* =========================================================
   LOAD SPLIT CATEGORY
========================================================= */

function loadSplitCategory(category, elementId, limit = 5) {

    const container = document.getElementById(elementId);

    if (!container) return;

    const filteredNews = newsData
        .filter(news => news.category === category)
        .slice(0, limit);

    if (!filteredNews.length) {

        container.innerHTML = `
            <div class="empty-news">

                <i class="bi bi-newspaper"></i>

                <p>
                    সংবাদ পাওয়া যায়নি।
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        filteredNews.map(createCategoryCard).join("");
}


/* =========================================================
   LOAD LATEST
========================================================= */

function loadLatestNews() {

    const container = $("#latestNews");

    if (!container) return;

    const latest = [...newsData]
        .slice(0, 12);

    container.innerHTML =
        latest.map(createLatestCard).join("");
}


/* =========================================================
   POPULAR NEWS
========================================================= */

function loadPopularNews() {

    const container = $("#popularNews");

    if (!container) return;

    const popular = [
        newsData[0],
        newsData[26],
        newsData[32],
        newsData[14],
        newsData[44]
    ].filter(Boolean);

    container.innerHTML = popular.map((news, index) => `

        <div
            class="popular-item"
            data-news-id="${news.id}"
        >

            <strong>
                ${String(index + 1).padStart(2, "0")}
            </strong>

            <p>
                ${news.title}
            </p>

        </div>

    `).join("");
}


/* =========================================================
   BREAKING NEWS
========================================================= */

let breakingIndex = 0;

function loadBreakingNews() {

    const container = $("#breakingNews");

    if (!container) return;

    const breaking = newsData.slice(0, 8);

    container.innerHTML = breaking.map(news => `
        <span>
            ${news.title}
        </span>
    `).join("");
}


function changeBreaking(direction) {

    const spans = $$("#breakingNews span");

    if (!spans.length) return;

    breakingIndex += direction;

    if (breakingIndex < 0) {
        breakingIndex = spans.length - 1;
    }

    if (breakingIndex >= spans.length) {
        breakingIndex = 0;
    }

    spans.forEach((item, index) => {
        item.style.display =
            index === breakingIndex ? "inline" : "none";
    });
}


/* =========================================================
   NEWS MODAL
========================================================= */

function openNewsModal(newsId) {

    const news = newsData.find(
        item => item.id === Number(newsId)
    );

    if (!news) return;

    const modal = $("#newsModal");

    if (!modal) return;

    const image = $("#modalNewsImage");
    const category = $("#modalNewsCategory");
    const title = $("#modalNewsTitle");
    const description = $("#modalNewsDescription");
    const meta = $("#modalNewsMeta");
    const link = $("#modalNewsLink");

    if (image) {
        image.src = news.image;
        image.alt = news.title;
    }

    if (category) {
        category.textContent = news.categoryBn;
    }

    if (title) {
        title.textContent = news.title;
    }

    if (description) {
        description.textContent = news.description;
    }

    if (meta) {

        meta.innerHTML = `
            <span>
                <i class="bi bi-building"></i>
                ${news.source}
            </span>

            <span>
                <i class="bi bi-clock"></i>
                ${news.time}
            </span>
        `;
    }

    /*
       Static site হওয়ায় external article URL নেই।
       তাই button-টি modal বন্ধ করে category section-এ নিয়ে যাবে।
    */

    if (link) {

        link.href = `#${news.category}`;

        link.onclick = function () {

            closeNewsModal();

            setTimeout(() => {

                const section =
                    document.getElementById(news.category);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }

            }, 100);

        };
    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


function closeNewsModal() {

    const modal = $("#newsModal");

    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


/* =========================================================
   EVENT DELEGATION
========================================================= */

document.addEventListener("click", function (event) {

    const card =
        event.target.closest("[data-news-id]");

    if (!card) return;

    const id = card.dataset.newsId;

    if (!id) return;

    openNewsModal(id);
});


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    const searchToggle = $("#searchToggle");
    const searchPanel = $("#searchPanel");
    const searchForm = $("#newsSearchForm");
    const searchInput = $("#newsSearch");

    if (searchToggle && searchPanel) {

        searchToggle.addEventListener("click", () => {

            searchPanel.classList.toggle("show");

            if (searchPanel.classList.contains("show")) {

                setTimeout(() => {
                    searchInput?.focus();
                }, 100);

            }

        });

    }


    if (searchForm) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const query =
                searchInput.value.trim().toLowerCase();

            if (!query) {

                showToast("সংবাদ খুঁজতে কিছু লিখুন।");

                return;
            }

            const results = newsData.filter(news => {

                const text = `
                    ${news.title}
                    ${news.description}
                    ${news.categoryBn}
                `.toLowerCase();

                return text.includes(query);

            });

            displaySearchResults(results, query);

        });

    }

}


/* =========================================================
   SEARCH RESULTS
========================================================= */

function displaySearchResults(results, query) {

    const container = $("#latestNews");

    if (!container) return;

    if (!results.length) {

        container.innerHTML = `

            <div class="empty-news">

                <i class="bi bi-search"></i>

                <h3>
                    কোনো সংবাদ পাওয়া যায়নি
                </h3>

                <p>
                    "${query}" দিয়ে কোনো ফলাফল পাওয়া যায়নি।
                </p>

            </div>

        `;

    } else {

        container.innerHTML =
            results.map(createLatestCard).join("");

        showToast(
            `${results.length}টি সংবাদ পাওয়া গেছে।`
        );
    }

    document
        .getElementById("latest")
        ?.scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================================================
   DARK MODE
========================================================= */

function setupDarkMode() {

    const button = $("#darkModeBtn");

    if (!button) return;

    const savedMode =
        localStorage.getItem("banglapress-dark-mode");

    if (savedMode === "true") {

        document.body.classList.add("dark-mode");

        updateDarkIcon();

    }


    button.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "banglapress-dark-mode",
            isDark
        );

        updateDarkIcon();

        showToast(
            isDark
                ? "ডার্ক মোড চালু হয়েছে।"
                : "লাইট মোড চালু হয়েছে।"
        );

    });

}


function updateDarkIcon() {

    const button = $("#darkModeBtn");

    if (!button) return;

    const icon = button.querySelector("i");

    if (!icon) return;

    const isDark =
        document.body.classList.contains("dark-mode");

    icon.className =
        isDark
            ? "bi bi-sun"
            : "bi bi-moon";
}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const openButton = $("#mobileMenuBtn");
    const closeButton = $("#closeMobileMenu");
    const menu = $("#mobileMenu");

    if (!menu) return;

    if (openButton) {

        openButton.addEventListener("click", () => {

            menu.classList.add("active");

        });

    }

    if (closeButton) {

        closeButton.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    }


    $$(".mobile-menu-links a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });

}


/* =========================================================
   NAVIGATION ACTIVE STATE
========================================================= */

function setupNavigation() {

    const links = $$(".nav-link");

    if (!links.length) return;

    links.forEach(link => {

        link.addEventListener("click", function () {

            links.forEach(item =>
                item.classList.remove("active")
            );

            this.classList.add("active");

        });

    });

}


/* =========================================================
   NEWSLETTER
========================================================= */

function setupNewsletter() {

    const form = $("#newsletterForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            $("#newsletterEmail")?.value.trim();

        if (!email) {

            showToast("আপনার ইমেইল দিন।");

            return;
        }

        showToast(
            "নিউজলেটারে সাবস্ক্রাইব করার জন্য ধন্যবাদ!"
        );

        form.reset();

    });

}


/* =========================================================
   REFRESH BUTTON
========================================================= */

function setupRefresh() {

    const button = $("#refreshNews");

    if (!button) return;

    button.addEventListener("click", function () {

        const icon =
            this.querySelector("i");

        if (icon) {

            icon.style.animation =
                "spin 0.7s linear";

        }

        setTimeout(() => {

            loadLatestNews();

            loadPopularNews();

            showToast(
                "সংবাদ তালিকা আপডেট হয়েছে।"
            );

            if (icon) {
                icon.style.animation = "";
            }

        }, 700);

    });

}


/* =========================================================
   BREAKING CONTROLS
========================================================= */

function setupBreakingControls() {

    const previous = $("#breakingPrev");
    const next = $("#breakingNext");

    if (previous) {

        previous.addEventListener(
            "click",
            () => changeBreaking(-1)
        );

    }

    if (next) {

        next.addEventListener(
            "click",
            () => changeBreaking(1)
        );

    }


    const spans = $$("#breakingNews span");

    spans.forEach((item, index) => {

        item.style.display =
            index === 0 ? "inline" : "none";

    });

}


/* =========================================================
   BACK TO TOP
========================================================= */

function setupBackToTop() {

    const button = $("#backToTop");

    if (!button) return;

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                button.classList.add("show");

            } else {

                button.classList.remove("show");

            }

        }
    );


    button.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(message) {

    const toast = $("#toast");
    const messageElement = $("#toastMessage");

    if (!toast || !messageElement) return;

    messageElement.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);
}


/* =========================================================
   VIEW ALL BUTTONS
========================================================= */

function setupViewAllButtons() {

    $$("[data-category]").forEach(button => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const category =
                this.dataset.category;

            if (!category) return;

            const results =
                newsData.filter(
                    news => news.category === category
                );

            const latest =
                $("#latestNews");

            if (latest) {

                latest.innerHTML =
                    results.map(createLatestCard).join("");

            }

            document
                .getElementById("latest")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

            showToast(
                `${results.length}টি ${getCategoryName(category)} সংবাদ`
            );

        });

    });

}


/* =========================================================
   CATEGORY NAME
========================================================= */

function getCategoryName(category) {

    const names = {

        bangladesh: "বাংলাদেশের",

        politics: "রাজনীতির",

        international: "আন্তর্জাতিক",

        economy: "অর্থনীতির",

        sports: "খেলাধুলার",

        technology: "প্রযুক্তির",

        entertainment: "বিনোদনের",

        health: "স্বাস্থ্যের"

    };

    return names[category] || "সংবাদ";

}


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
    "error",
    function (event) {

        if (
            event.target.tagName === "IMG"
        ) {

            event.target.src =
                "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80";

        }

    },
    true
);


/* =========================================================
   ESC KEY — CLOSE MODAL / MENU
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") return;

        closeNewsModal();

        $("#mobileMenu")
            ?.classList.remove("active");

    }
);


/* =========================================================
   MODAL CLOSE
========================================================= */

function setupModal() {

    const closeButton =
        $("#closeNewsModal");

    const overlay =
        $(".news-modal-overlay");

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeNewsModal
        );

    }

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeNewsModal
        );

    }

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

function initializeBanglaPress() {

    setCurrentDate();

    loadFeaturedNews();

    loadSideNews();

    loadCategory(
        "bangladesh",
        "bangladeshNews",
        6
    );

    loadSplitCategory(
        "politics",
        "politicsNews",
        5
    );

    loadSplitCategory(
        "international",
        "internationalNews",
        5
    );

    loadCategory(
        "economy",
        "economyNews",
        6
    );

    loadCategory(
        "sports",
        "sportsNews",
        6
    );

    loadCategory(
        "technology",
        "technologyNews",
        6
    );

    loadSplitCategory(
        "entertainment",
        "entertainmentNews",
        5
    );

    loadSplitCategory(
        "health",
        "healthNews",
        5
    );

    loadLatestNews();

    loadPopularNews();

    loadBreakingNews();

    setupSearch();

    setupDarkMode();

    setupMobileMenu();

    setupNavigation();

    setupNewsletter();

    setupRefresh();

    setupBreakingControls();

    setupBackToTop();

    setupViewAllButtons();

    setupModal();

    console.log(
        `BanglaPress loaded with ${newsData.length} news items.`
    );
}


/* =========================================================
   START
========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeBanglaPress
    );

} else {

    initializeBanglaPress();

}