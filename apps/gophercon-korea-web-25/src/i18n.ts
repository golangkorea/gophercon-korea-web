import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      common: {
        copied: "Copied!",
      },
      nav: {
        about: "About",
        program: "Program",
        sessions: "Sessions",
        schedule: "Schedule",
        organizers: "Organizers",
        sponsorship: "Sponsorship",
        sponsorship_guide: "Sponsorship Guide",
        sponsorship_faq: "Sponsorship FAQ",
        sponsorship_form: "Sponsorship Form",
        flea_market: "Flea Market",
        venue: "Venue",
        coc: "CoC",
        past_gophercons: "Past GopherCons",
        "2024": "2024",
        "2023": "2023",
        buy_ticket: "Buy Ticket",
        buy_ticket_soon: "Ticket sales will open soon.",
      },
      page_title: {
        about: "About",
        coc: "Code of Conduct",
        sessions: "Sessions",
        schedule: "Schedule",
        organizers: "Organizers",
        sponsorship_guide: "Sponsorship Guide",
        sponsorship_form: "Sponsorship Application",
        sponsorship_faq: "Sponsorship FAQ",
        flea_market: "Flea Market",
        venue: "Venue",
        not_found: "Page Not Found",
        not_found_initial_messages: [
          "Hmm... this map seems to be wrong... *squeak*",
          "Where to go now... what to do...",
          "This place isn't on my map!",
          "Oops. Wrong turn, I guess. *squeak*",
        ],
        not_found_messages: [
          "I told you, this path is a no-go!",
          "Stop poking me, will ya! *squeak*",
          "It's a dead end! A dead end, I say!",
          "I'm lost too, you know!",
          "There's nowhere left to go!",
          "For the last time, this URL is broken!",
          "Let's go back already!",
          "Don't go any further! It's dangerous, squeak!",
          "There's nothing here! Zilch! Nada!",
          "Oops. Wrong turn, I guess. *squeak*",
          "This place isn't on my map!",
          "Where to go now... what to do...",
          "It's a nil pointer! It points to nothing! Get it?!",
          "This address won't even compile!",
          "Don't talk to me! I'm busy being lost, squeak!",
          "My gut feeling says we should go back.",
          "I wanna go home...",
          "It's a panic! A real, honest-to-gopher panic!",
          "I'm lost, and I'm hungry... a bad combo.",
          "Can't find the page! *squeak*",
          "How many times are we go-ing to see this message?",
          "Error! It's an error, okay?!",
          "This is not gopher territory, squeak.",
          "Would you listen to me already?!",
          "Why do you keep go-ing the wrong way!",
          "This place is like an unsafe pointer!",
          "No path? Just make one, you say? No way!",
          "This channel is closed! I told you!",
          "This path is not in my GOPATH!",
          "Go-sh, this is frustrating!",
          "It's a dead end, I'm telling you! Squeak!",
          "I don't know either! Stop asking!",
          "This link has been garbage collected, I bet.",
          "Great, now we're in a deadlock!",
          "This function has no return value. And no page.",
          "Feels like an infinite loop... *squeak*",
          "This is go-ing to be a long day.",
          "I'm about to have a stack overflow!",
          "Don't you think it's time to go back?",
          "There's no Wi-Fi here, squeak.",
          "It's a 404! Get it through your head!",
          "It's a bug! An obvious one!",
          "You're the first one to go this far.",
          "Even my rubber duck gave up on this one.",
          "Go on, go back now!",
          "Handle your errors properly!",
          "This URL has been deprecated! Sheesh!",
          "Build failed! The page does not exist!",
          "It worked on my local machine, I swear!",
          "Whatever you're looking for, it's not here! Definitely not!",
        ],
      },
      home: {
        title: "GopherCon Korea 2025",
        subtitle: "Welcome to the largest Go conference in South Korea.",
        date: "2025. 11. 09. (SUN)",
        venue: "COEX, Magok",
        sponsors_title: "Our Sponsors",
      },
      about: {
        title: "About Golang Korea & GopherCon Korea",
        content:
          "Golang Korea is the Go language developer community in South Korea. With approximately 7,800 members, the Golang Korea community provides a space to share knowledge and discuss the Go programming language, and organizes the annual GopherCon Korea event.",
        content2:
          "GopherCon, the largest annual event for Go language users, has been held annually in various countries around the world since 2014. In August 2023, Golang Korea successfully hosted the first-ever GopherCon Korea in the country. GopherCon Korea aims to continue as the largest festival for domestic Go developers, fostering a healthy Go ecosystem.",
        slogan: "Go for Everyone, Everywhere",
        date: "Date: Sunday, November 9, 2025",
        venue: "Venue: COEX Magok",
        photos_title: "Moments from Past Conferences",
        past_conferences_title: "Watch Past Conferences",
        watch_now: "Watch on YouTube",
        mission_title: "Values of Golang Korea",
        values: [
          {
            title: "Volume",
            desc: "We fundamentally value expanding the knowledge base, influence, and communication channels of Go language developers.",
          },
          {
            title: "Connection",
            desc: "We exist to ensure that each member can be well-connected through environment creation and communication, fostering natural interaction within the community.",
          },
          {
            title: "Diversity",
            desc: "We hold it as a key value to build an ecosystem where members from more diverse backgrounds can grow together by broadening diversity in various aspects such as gender, accessibility, field, country, language, region, and technical difficulty.",
          },
        ],
        gdg_partnership_title: "In partnership with Google for Developers",
        gdg_partnership_content:
          "Golang Korea has joined the Google for Developers program to create a broader Go language community ecosystem. Google Developer Groups (GDG) are passionate communities dedicated to helping people learn from and connect with each other. Through GDG Golang Korea, we plan and host meetup events on a wide range of technical topics more than four times a year.",
        gdg_partnership_cta: "Explore Google Developer Communities",
        what_is_gophercon_title: "What is GopherCon?",
        what_is_gophercon_subtitle: "The largest festival for Go developers.",
        what_is_gophercon_content:
          'Go language users are affectionately called "Gophers," and GopherCon is the largest annual conference held for the Go community. Since its inception in 2014, GopherCon has been held in various countries around the world, bringing together Go developers to share knowledge and experiences. GopherCon Korea is the Korean edition of this global event, serving as the premier festival for the domestic Go community.',
      },
      coc: {
        title: "GopherCon Korea 2025 Code of Conduct (CoC)",
        titleCore: "Core Rules",
        titleCoreDesc:
          "GopherCon Korea 2025 is an event where professionals and students alike can gather for networking and events. We ask for your adherence to the following Code of Conduct to ensure a positive and enjoyable experience for all participants.",
        titleCoreDesc2:
          "This Code of Conduct applies to all participants of GopherCon Korea 2025. Violations may result in sanctions, including expulsion from the event, by the organizers and staff. Cases of CoC violations may be made public.",
        titleCoreStatement1: "We create a warm and healthy community through kindness and consideration.",
        titleCoreStatement1Unit1: "We do not use hateful, discriminatory, or aggressive language.",
        titleCoreStatement1Unit2: "When we see a problem, we do not remain silent; we take the lead in resolving it.",
        titleCoreStatement1Unit3: "We do our best to make this a happy and fun event for everyone involved.",
        titleCoreStatement2: "We take responsibility for the advancement of the Go language community in Korea.",
        titleCoreStatement2Unit1:
          "As lovers of the Go language, we do our best to contribute to the development of the domestic Go community.",
        titleParticipants: "Participation Rules",
        titleParticipantsStatement1: "A) General",
        titleParticipantsStatement1Unit1: "Make everyone feel welcome at the event.",
        titleParticipantsStatement1Unit1Sub1:
          "Instead of sticking to familiar faces, please initiate conversations, greet, and communicate with everyone.",
        titleParticipantsStatement1Unit1Sub2:
          "Please use formal language (존댓말) with everyone at the event and on its channels.",
        titleParticipantsStatement1Unit2:
          "Please strive to create a safe event where everyone feels secure and trusted.",
        titleParticipantsStatement1Unit2Sub1: "Be careful to avoid unnecessary physical contact with others.",
        titleParticipantsStatement1Unit2Sub1Unit1:
          "e.g., holding hands or putting an arm around someone without consent.",
        titleParticipantsStatement1Unit2Sub2: "Do not use profanity, slurs, or jargon in conversations.",
        titleParticipantsStatement1Unit2Sub2Unit1:
          "Even in conversations with close acquaintances, it can make others uncomfortable or feel threatened.",
        titleParticipantsStatement1Unit2Sub3:
          "Do not threaten others by getting angry, using aggressive gestures, or raising your voice.",
        titleParticipantsStatement1Unit2Sub4:
          "Refrain from any verbal or non-verbal behavior or any form of sexual objectification that could make others uncomfortable.",
        titleParticipantsStatement1Unit2Sub5:
          "Do not carry anything that could cause harm to others or instill a similar sense of fear (e.g., baseball bats, chemicals, firearms, etc.).",
        titleParticipantsStatement1Unit2Sub6:
          "Do not touch other people's belongings without their consent (e.g., phone, laptop, bag, disability aids like hearing aids, wheelchairs, etc.).",
        titleParticipantsStatement1Unit2Sub7: "Do not do anything that breaks the law.",
        titleParticipantsStatement1Unit2Sub8:
          "Do not take any action that encourages or facilitates any of the above behaviors.",
        titleParticipantsStatement1Unit2Sub9:
          "Do not impersonate the organizing committee or spread false information.",
        titleParticipantsStatement1Unit3: "Please communicate with respect.",
        titleParticipantsStatement1Unit3Sub1:
          "Always use respectful language. Do not use language that may make others feel uncomfortable or that is discriminatory (e.g., \"If you're a non-technical person, you don't know this stuff\", \"I don't like OO languages because they're backwards or legacy\").",
        titleParticipantsStatement1Unit3Sub2:
          'At events and in channels, address everyone with respect and use "Mr. or Mrs. XX".',
        titleParticipantsStatement1Unit3Sub3:
          "If you have questions, ask them, and if you have other ideas, offer them.",
        titleParticipantsStatement1Unit3Sub4:
          'Keep things private. Even the smallest of questions can be rude to someone (e.g., "How old are you?", "Are you married?", "How did you become disabled?").',
        titleParticipantsStatement1Unit3Sub5: "Do not take photos of others without their express permission.",
        titleParticipantsStatement2: "B) Response and Action",
        titleParticipantsStatement2Desc:
          "If you are participating in the event and experience any problems with other participants, see other participants in trouble, or have any other concerns, please contact the GopherCon Korea Organizing Committee (the Organizing Committee) for assistance. If the matter is urgent, please contact the organizers and report it to the appropriate authorities, such as the police or fire department.",
        titleParticipantsStatement2Unit1: "Contact: gophercon-korea-staffs@googlegroups.com",
        titleParticipantsStatement2Unit2:
          "In an offline space, the organizing committee will be dressed in a way that identifies them. If you are unable to speak with them online or in person, you can contact them via the email above.",
        titleParticipantsStatement2Unit3:
          "If a Code of Conduct violation is reported, the GopherCon Korea organizing committee will work to create a safe event by taking action, such as removal from the venue or contacting law enforcement/medical authorities if necessary, and will strive to protect the identity of the complainant or victim in this process.",
        titleParticipantsStatement2Unit4:
          "In addition, the GopherCon Korea organizing committee will do everything in its power to ensure that law enforcement takes the necessary action.",
        titleParticipantsStatement3: "C) Codes of conduct have their limits.",
        titleParticipantsStatement3Desc:
          "Despite our many efforts to ensure a fun, happy, safe, and pleasant community for all, the Code of Conduct cannot keep staffs/participants safe from all threats.",
        titleParticipantsStatement3Unit1:
          "If the situation is obviously life-threatening, ask a staff member for help and also report it to the appropriate authorities, such as the police or fire department, so they can take appropriate action.",
        titleParticipantsStatement3Unit2:
          "It's hard to take action against a person or organization based on your suspicions alone when the facts are hard to verify. Whether you take action or not, if you feel threatened, we can help by accompanying you, separating you, etc.",
        titleParticipantsStatement4: "D) Finally",
        titleParticipantsStatement4Important:
          "The GopherCon Korea 2025 organizing committee strongly requests that all event attendees adhere to the above code of conduct.",
        titleParticipantsStatement4Desc:
          "Any violation of the above code of conduct at GopherCon Korea 2025 will be subject to disciplinary action by the organizing committee:",
        titleParticipantsStatement4Unit1: "Action for warning",
        titleParticipantsStatement4Unit2: "Action for isolation from other participants",
        titleParticipantsStatement4Unit3: "Action to leave the venue",
        titleParticipantsStatement4Unit4: "Action extradition to law enforcement",
        titleParticipantsStatement4Desc2:
          "Alternatively, please be advised that we may take necessary action not mentioned above.",
      },
      program: {
        sessions_title: "Session List",
        schedule_title: "Conference Schedule",
        speaker: "Speaker",
        track: "Track",
        session_details: "Session Details",
        all: "All",
        filter_by_difficulty: "Filter by Difficulty",
        filter_by_category: "Filter by Category",
        placeholder_notice_title: "Note: This is a Sample Schedule",
        placeholder_notice_content:
          "The sessions and schedule below are for demonstration purposes. The official program will be updated once speaker recruitment is complete. Stay tuned for exciting talks!",
        back_to_sessions: "Back to Session List",
        session_info: "Session Info",
        legend: "Legend",
        session: "Session",
        break: "Break / Event",
        dummy_sns_messages: {
          github: "This Gopher's code is under construction. (Placeholder)",
          linkedin: "This Gopher is `defer`ring networking for now. (Placeholder)",
          twitter: "This Gopher's tweet `chan`nel is not open yet. (Placeholder)",
          facebook: "This Gopher's profile is currently `nil`. (Placeholder)",
          instagram: "Still `select`ing the perfect photo. (Placeholder)",
          youtube: "This Gopher's videos are un`go`ing production. (Placeholder)",
        },
        description_placeholder: "The session description will be updated soon.",
        call_for_speakers_title: "Call for Speakers is Open!",
        call_for_speakers_content:
          "We are looking for passionate speakers to share their knowledge and experience with the Go community. If you have an interesting topic, apply now!",
        call_for_speakers_cta: "Apply to be a Speaker",
      },
      venue: {
        title: "How to Get Here",
        content: "Venue location and transportation information will be provided.",
        address: "143 Magokjungang-ro, Gangseo-gu, Seoul",
        address_title: "Address",
        contact_title: "Contact",
        contact_email: "gophercon-korea-staffs@googlegroups.com",
        transportation_title: "Transportation",
        subway_title: "Subway",
        subway_info: "193m from Magoknaru Station (Line 9), Exit 2",
        bus_title: "Bus",
        bus_info: "Gangseo-gu Office Bus Stop (ID: 16-111). Buses: 6642, 6645, Gangseo05, Gangseo07.",
        parking_title: "Parking",
        parking_info:
          "Parking is not provided at the venue. Please use nearby public parking lots. (e.g., Magok Central Square Parking Lot)",
        map_title: "Venue Location Map",
        subway_lines: [
          { line: "9", color: "#BDB092", info: "Magoknaru Station: 5-minute walk from Exit 1" },
          { line: "5", color: "#996CAC", info: "Magok Station: 10-minute walk from Exit 1" },
          { line: "A", color: "#77C4A3", info: "Airport Railroad Magoknaru Station: 6-minute walk from Exit 6" },
        ],
      },
      organizers: {
        title: "Organizing Committee",
        hosted_by_title: "Hosted by",
        hosted_by_name: "Golang Korea",
        hosted_by_desc:
          "Golang Korea is a user group for Go language enthusiasts in Korea, sharing knowledge and growing together through meetups and online activities.",
        hosted_by_cta: "Join Discord",
        organized_by_title: "Organized by",
        list_title: "Organizing Committee",
        list_desc:
          "GopherCon Korea is made possible by a dedicated team of volunteers from the Go community. Meet the passionate individuals who work tirelessly to bring this event to life.",
        list: [
          { name: "Jaichang Park", role: "Organizer", avatar: "jaichang-park" },
          { name: "Uiseon Yu", role: "Organizer", avatar: "uiseon-yu" },
          { name: "Jaegyu Lee", role: "Organizer", avatar: "jq-lee" },
          { name: "Jhinseok Lee", role: "Organizer", avatar: "jhin-lee" },
          { name: "Hyunseo Jeong", role: "Organizer", avatar: "hyunseo-jung" },
          { name: "Sungmin Han", role: "Organizer", avatar: "sungmin-han" },
          { name: "Wooseok Han", role: "Organizer", avatar: "wooseok-han" },
        ],
        preparatory_committee_list: [],
        artwork_credit:
          "The organizers' avatars were created with <0>Gopherize.me</0> (Artwork by <3>Ashley McNamara</3>).<4/>The original Gopher character was contributed by <1>Renee French</1>. For more details, please see <2>go.dev/blog/gopher</2>.",
      },
      sponsorship_guide: {
        title: "Sponsorship Guide",
        subtitle:
          "Join us as a partner for GopherCon Korea 2025 and connect with hundreds of passionate Go developers.",
        why_sponsor_title: "Why Sponsor GopherCon Korea?",
        why_sponsor_desc:
          "Your sponsorship helps us create a high-quality, accessible event for the community. It's a unique opportunity to enhance your brand visibility, recruit top talent, and demonstrate your commitment to the open-source ecosystem.",
        thank_you_title: "A Heartfelt Thank You to Our Sponsors",
        thank_you_p1:
          "GopherCon Korea is a non-profit event driven by the passion of the Go community. Your sponsorship is not just a marketing opportunity; it's a vital contribution that makes this conference possible. It allows us to keep ticket prices affordable, provide a high-quality experience, and support the growth of the Go ecosystem in Korea.",
        thank_you_p2:
          "By partnering with us, you become a key player in fostering a vibrant and inclusive developer community. We are deeply grateful for your support and look forward to creating an unforgettable event together.",
        cta_text: "Become a Sponsor",
        price_table_title: "Sponsorship Tiers & Pricing",
        price_table_tier: "Tier",
        price_table_price: "Price",
        price_table_requirement: "Requirement",
        price_vat_notice: "* All prices are exclusive of VAT.",
        benefits_table_title: "GopherCon Korea 2025 Sponsorship Program",
        benefit_labels: {
          logo: "Logo Placement",
          keynote: "Opening Keynote",
          techtalk: "Corporate Tech Talk",
          booth: "Booth",
          mention: "Sponsor Corner Mention",
          sns: "SNS Brand Exposure",
          youtube_video_logo: "YouTube Video Logo Exposure",
          souvenir: "Souvenirs",
          tickets: "Complimentary Tickets",
          parking: "Parking Support",
        },
        tiers1: [
          {
            name: "Diamond",
            benefits: {
              logo: "All media (Top tier)",
              keynote: true,
              techtalk: "1 session (40-50 mins)",
              booth: "Large",
              mention: true,
              sns: "Exposure, sketch film provided",
              youtube_video_logo: "Exposure, promo video shown",
              souvenir: true,
              tickets: "15 tickets",
              parking: "5 passes",
            },
          },
          {
            name: "Platinum",
            benefits: {
              logo: "All media (Top)",
              keynote: false,
              techtalk: "1 session (20-30 mins)",
              booth: "Large",
              mention: true,
              sns: "Exposure, sketch film provided",
              youtube_video_logo: "Exposure, promo video shown",
              souvenir: true,
              tickets: "10 tickets",
              parking: "3 passes",
            },
          },
          {
            name: "Gold",
            benefits: {
              logo: "All media (Top)",
              keynote: false,
              techtalk: false,
              booth: "Medium",
              mention: true,
              sns: "Exposure",
              youtube_video_logo: "Exposure, promo video shown",
              souvenir: true,
              tickets: "5 tickets",
              parking: "2 passes",
            },
          },
        ],
        tiers2: [
          {
            name: "Silver",
            benefits: {
              logo: "Lobby, Banner, Website",
              keynote: false,
              techtalk: false,
              booth: "Small",
              mention: true,
              sns: "Exposure",
              youtube_video_logo: false,
              souvenir: true,
              tickets: "3 tickets",
              parking: "1 pass",
            },
          },
          {
            name: "Bronze",
            benefits: {
              logo: "Lobby, Banner, Website",
              keynote: false,
              techtalk: false,
              booth: "Small",
              mention: true,
              sns: "Exposure",
              youtube_video_logo: false,
              souvenir: true,
              tickets: "1 ticket",
              parking: "1 pass",
            },
          },
          {
            name: "Community",
            benefits: {
              logo: "Lobby, Banner, Website",
              keynote: false,
              techtalk: false,
              booth: "Community Corner",
              mention: true,
              sns: "Exposure",
              youtube_video_logo: false,
              souvenir: true,
              tickets: "1 ticket",
              parking: "1 pass",
            },
          },
          {
            name: "Publisher",
            benefits: {
              logo: "Lobby, Banner, Website",
              keynote: false,
              techtalk: false,
              booth: false,
              mention: true,
              sns: "Exposure",
              lounge: false,
              youtube_video_logo: false,
              souvenir: true,
              tickets: "1 ticket",
              parking: "1 pass",
            },
          },
        ],
        price_list: [
          { tier: "Diamond", price: "KRW 30,000,000", requirement: "Corporations & Startups" },
          { tier: "Platinum", price: "KRW 20,000,000", requirement: "Corporations & Startups" },
          { tier: "Gold", price: "KRW 10,000,000", requirement: "Corporations & Startups" },
          { tier: "Silver", price: "KRW 5,000,000", requirement: "Startups" },
          { tier: "Bronze", price: "KRW 3,000,000", requirement: "Startups" },
          { tier: "Community", price: "KRW 300,000", requirement: "Non-profit communities" },
          { tier: "Publisher", price: "Book Sponsorship", requirement: "Registered book publishers" },
        ],
      },
      sponsorship_form: {
        title: "Sponsorship Application",
        invitation_p1: "Hello! We at Golang Korea are excited to extend an invitation to you.",
        invitation_p2:
          "In the fall of 2025, we will be hosting a Go language celebration in Seoul, and we’d love for you to join us as a partner.",
        invitation_moment_title: "Creating a Special Moment Together",
        invitation_moment_p1:
          "This event will go beyond a typical tech conference; it will be a true festival where every member of the Go ecosystem can come together.",
        invitation_moment_p2:
          'Under the slogan "Go for Everyone," we’re working to build a more inclusive and vibrant Go community.',
        event_overview_title: "Event Overview",
        event_overview_date: "Date: Sunday, November 9, 2025",
        event_overview_venue: "Venue: COEX, Magok (143 Magokjungang-ro, Gangseo-gu, Seoul)",
        event_overview_attendance: "Expected Scale:",
        event_overview_offline: "Offline: 400+ attendees",
        event_overview_online: "Online: Replay will be provided",
        why_join_title: "Why Join Us?",
        why_join_list: [
          "A unique chance to connect directly with numerous developers interested in the Go language",
          "The perfect stage to showcase your brand at the heart of the Korean Go community",
          "A meaningful investment to support the healthy growth of the Go ecosystem",
        ],
        to_join_title: "To Join Us:",
        to_join_deadline: "Sponsorship Application Deadline: Wednesday, September 10, 2025",
        to_join_contact: "Contact: golang-korea-organizers@googlegroups.com",
        closing_p1:
          "Let’s open a new chapter for the Go community together, enriched by your participation and support. We look forward to your interest and involvement.",
        closing_p2: "Thank you for joining us.",
        closing_sincerely: "Sincerely,\nGolang Korea",
        about_gophercon_title: "About GopherCon",
        about_gophercon_content:
          'Go language users are called "Gophers," and GopherCon is an annual event for the Go community. Following the success of the first GopherCon Korea, we are excited to host GopherCon Korea 2025 on November 9th, creating a festival for all Go developers in Korea.',
        timeline_title: "Sponsorship Timeline",
        timeline_schedule:
          "Schedule: Sponsor Application Submission/Verification (August–September) ➡️ Sponsorship Confirmation and Electronic Contract (Mutual Agreement) ➡️ Sponsorship Payment Deadline (Mutual Agreement) ➡️ Sponsor Participation Guidance and Promotion",
        timeline_registration:
          "Registration: Sponsorship applications undergo verification, and results are shared within one week. Registration is on a first-come, first-served basis per sponsorship tier, based on the application time. Final sponsorship status is confirmed within two weeks after completing payment following the electronic contract.",
        timeline_contact:
          "Contact: For inquiries about sponsorship benefits, options, or other details, close coordination with the GopherCon Korea 2025 organizing team is available. (golang-korea-organizers@googlegroups.com)",
        process_title: "Sponsorship Process",
        process_intro:
          "Sponsorship proceeds in four steps after filling out the form.\n(*For community and publisher sponsorship tiers, a simplified process is followed.)",
        process_steps: [
          {
            title: "Sponsorship Discussion",
            desc: "We respond to inquiries regarding sponsorship and send an email outlining the next steps.",
          },
          { title: "Contract Process", desc: "Sponsorship contracts are completed through electronic signature." },
          {
            title: "Meeting",
            desc: "A meeting with the organizing committee is held to discuss the detailed sponsorship program and collaboration process.",
          },
          {
            title: "Detailed Guidance",
            desc: "We provide detailed information and request assets for booth and program operations, along with relevant materials.",
          },
        ],
        terms_title: "Sponsorship Terms",
        terms_articles: [
          {
            title: "Article 1 Purpose",
            content:
              "These Terms aim to clarify the rights and obligations between both parties, along with the information provided on the event website, regarding sponsorship for the <GopherCon Korea 2025> event (hereinafter referred to as the “Event”) hosted by Golang Korea.",
          },
          {
            title: "Article 2 Sponsorship Application and Payment Method",
            content:
              "Sponsors must submit a sponsorship application form through the event website or designated forms, and pay the sponsorship amount in a lump sum to the account specified by Golang Korea within 14 days from the date they are notified of Golang Korea’s approval. If the sponsor requests an extension with valid reasons, Golang Korea may approve the extension.\nUpon notification of approval, the remaining sponsorship slots for that tier will decrease. If the application is canceled due to missed payment deadlines, the remaining slots will increase again.\nThe final deadline for sponsorship payments and the final commitment date for sponsorship services will be mutually agreed upon. This applies even if an extension request per Clause 1 is approved.",
          },
          {
            title: "Article 3 Golang Korea’s Obligations by Sponsorship Tier",
            content:
              "The obligations of Golang Korea to sponsors by sponsorship tier and services are as detailed on the event website. However, by mutual agreement, the sponsorship contract may differ from the details provided on the event website as a special agreement.",
          },
          {
            title: "Article 4 Termination of Sponsorship Contract and Partial Cancellation of Sponsorship Amount",
            content:
              "Sponsors may terminate the sponsorship contract by paying a penalty fee according to the periods below, and if the sponsorship fee has already been paid, Golang Korea will refund it minus the penalty fee. In cases of partial cancellation of the sponsorship amount, the penalty rate below will apply to the canceled amount. The sponsorship amount will be calculated based on the commercial service value of the sponsor in the case of service provision.\n\n- Penalty Calculation -\n1. Contract Date - 90 days before the Event: 10% of the sponsorship amount\n2. 89 days - 60 days before the Event: 20% of the sponsorship amount\n3. 59 days - 30 days before the Event: 50% of the sponsorship amount\n4. 29 days - 8 days before the Event: 80% of the sponsorship amount\n5. 7 days before the Event – Event Day: 100% of the sponsorship amount",
          },
          {
            title: "Article 5 Termination of Sponsorship Contract Due to Code of Conduct Violation and Compensation",
            content:
              "1. Sponsors are obligated to strictly comply with the code of conduct published on the event website.\n2. Sponsors must disclose any code of conduct violations that occurred prior to the sponsorship application per Article 2, Clause 1. Golang Korea reserves the right to reject sponsorship applications for code of conduct violations.\n3. If the sponsor violates the code of conduct obligation after signing the sponsorship contract, or if a failure to disclose as per Clause 2 is discovered, Golang Korea may notify the sponsor and request corrective action.\n4. Sponsors must submit a statement within 24 hours upon receiving the request in Clause 3. If the sponsor provides a valid reason, Golang Korea may grant an extension or allow in-person consultation.\n5. If the event date is imminent, Golang Korea may shorten the response period for submitting statements.\n6. Based on the sponsor’s submitted statement, if Golang Korea finds grounds for violating the code of conduct, sponsorship benefits related to code compliance will not be provided. In this case, Golang Korea will not refund any part of the sponsorship amount.\n• Sponsors who intentionally failed to disclose as per Clause 2.\n• Sponsors who fail to submit a corrective response within the stipulated time without a valid reason.\n7. If the sponsor’s violation of the code of conduct severely impacts the event’s operation, Golang Korea may terminate the sponsorship contract, in which case the sponsor cannot receive any sponsorship benefits and must withdraw from the event, including booth operation. The sponsor must pay a penalty as outlined in Article 4.",
          },
          {
            title: "Article 6 (Event Postponement)",
            content:
              "If Golang Korea postpones the event (up to December 31, 2025), the sponsorship contract will be adjusted based on the postponed date. Sponsors may cancel their sponsorship or request a partial refund; in such cases, the penalty rates in Article 4 will apply based on the postponed date.",
          },
          {
            title: "Article 7 (Event Cancellation and Sponsorship Contract Termination)",
            content:
              "1. If the event is canceled, Golang Korea’s notification to the sponsor will terminate the sponsorship contract prospectively.\n2. If the event is canceled, Golang Korea will refund the full sponsorship amount to the sponsor, except in cases under Clauses 3 or 4.\n3. If the event is canceled due to force majeure (e.g., government order to cancel), Golang Korea will partially refund the sponsorship amount based on the timing of cancellation. If force majeure is not recognized, Clause 4 will apply.\n• Contract Date - 90 days before the Event: 100% of the sponsorship amount\n• 89 days - 8 days before the Event: 90% of the sponsorship amount\n• 7 days before the Event – Event Day: 80% of the sponsorship amount\n4. If Golang Korea cancels the event due to extenuating circumstances (e.g., infectious disease warnings like COVID-19), Golang Korea will refund part of the sponsorship amount as follows:\n• Contract Date - 90 days before the Event: 90% of the sponsorship amount\n• 89 days - 60 days before the Event: 80% of the sponsorship amount\n• 59 days - 30 days before the Event: 50% of the sponsorship amount\n• 29 days - 8 days before the Event: 20% of the sponsorship amount\n• 7 days before the Event – Event Day: No refund\n5. In Clauses 2 through 4, the refunded sponsorship amount will serve as predetermined damages as per Article 398 of the Civil Act of Korea, Republic of.\n6. For the provision of sponsorship services, the sponsorship amount will be calculated based on the sponsor’s commercial service value.\n7. Upon the sponsor’s request, Golang Korea will cooperate in good faith regarding any matters prepared outside of the sponsorship contract for the event.",
          },
          {
            title: "Article 8 Miscellaneous",
            content:
              "Matters not specified in these Terms may be determined by mutual agreement between the parties, and acceptance of the Terms is deemed to be completed by filling out and submitting the sponsorship application form.",
          },
          {
            title: "Article 9 Jurisdiction",
            content:
              "In the event of a dispute related to these Terms, the parties will strive to resolve it amicably. If litigation is pursued, the Seoul Central District Court in Korea, Republic of will have jurisdiction.",
          },
        ],
        intro_materials_title: "Introduction Materials",
        gophercon_intro_ko: "GopherCon Korea Intro (KR)",
        golangkorea_intro_ko: "Golang Korea Intro (KR)",
        gophercon_intro_en: "GopherCon Korea Intro (EN)",
        golangkorea_intro_en: "Golang Korea Intro (EN)",
        apply_button: "Apply for Sponsorship",
        form_link: "https://forms.gle/WQG1qNEBciYbhQmKA",
        gophercon_intro_ko_link: "https://drive.google.com/file/d/1-2mUE6HwTHZEJJUo9Mwj_EjSCuWCm1ZJ/view?usp=sharing",
        golangkorea_intro_ko_link: "https://drive.google.com/file/d/1Z_c7IDGuyTaW50Et0S0nRyPRoScu3c2D/view?usp=sharing",
        gophercon_intro_en_link: "https://drive.google.com/file/d/1ETZZNo08roCagv4T7EES-djeiTqKDu2e/view?usp=sharing",
        golangkorea_intro_en_link: "https://drive.google.com/file/d/1g8ZxVTTzxD4VEeckh1nT2HLCd-EiwtK_/view?usp=sharing",
      },
      flea_market: {
        title: "Flea Market",
        description:
          "At the GopherCon Korea 2025 venue, we will be operating a flea market booth with a variety of official merchandise. Come and find special goods to remember the conference!",
        items_title: "Featured Items",
        notice_title: "Gopher's Secret Stash",
        notice_content:
          "Psst! These are just a few of the treasures we're preparing. The final lineup is still being polished by our artisan gophers. Come to the venue to see the real deal!",
        price_coming_soon: "Price to be announced",
        items: [
          { name: "Gopher Crochet Doll (Large)", image: "gopher-crochet-large", price: "KRW 50,000" },
          { name: "Gopher Bag Charm Doll (Small)", image: "gopher-bag-charm", price: "KRW 25,000" },
          { name: "Gopher Figure", image: "gopher-figure", price: "KRW 35,000" },
          { name: "Gopher Keychain", image: "gopher-keychain", price: "KRW 15,000" },
          { name: "GopherCon Korea Metal Badge", image: "gophercon-badge", price: "KRW 12,000" },
          { name: "GopherCon Mug", image: "gophercon-mug", price: "KRW 20,000" },
          { name: "Gopher Sticker Set", image: "gopher-stickers", price: "KRW 8,000" },
          { name: "Gopher T-shirt", image: "gopher-tshirt", price: "KRW 30,000" },
          { name: "Gopher Tumbler", image: "gopher-tumbler", price: "KRW 22,000" },
          { name: "Gopher Metal Badge", image: "gopher-metal-badge", price: "KRW 10,000" },
        ],
      },
      sponsorship_faq: {
        title: "Sponsorship FAQ",
        description:
          "Have questions about sponsoring GopherCon Korea 2025? Find answers to frequently asked questions below. If you can't find what you're looking for, please feel free to contact us.",
        faq_list: [
          {
            q: "How can we apply for sponsorship?",
            a: "You can apply by filling out the form on our sponsorship application page. After submission, our team will review it and contact you within a week.",
          },
          {
            q: "What are the payment methods?",
            a: "Sponsorship fees should be paid in a lump sum via bank transfer to the account specified by Golang Korea. Details will be provided during the contract process.",
          },
          {
            q: "Can we get a refund if we cancel our sponsorship?",
            a: "Yes, but a penalty fee will apply based on the cancellation date. Please refer to Article 4 of the Sponsorship Terms for detailed information on the penalty rates.",
          },
          {
            q: "What happens if the event is postponed or canceled?",
            a: "If the event is postponed, the contract will be adjusted to the new date. If the event is canceled, we will provide a full or partial refund depending on the circumstances. Please see Articles 6 and 7 of the terms for more details.",
          },
          {
            q: "Are there any benefits for non-profit communities?",
            a: "Yes, we have a 'Community' tier specifically for non-profit communities, offering benefits like a booth in the community corner and logo placement at an affordable price.",
          },
          {
            q: "What kind of exposure can sponsors expect?",
            a: "Sponsors receive exposure through various channels including our official website, social media, event banners, and session streaming. Higher-tier sponsors may also get opportunities for tech talks, booth operations, and logo placement in keynotes. Please refer to the Sponsorship Guide for detailed benefits for each tier.",
          },
          {
            q: "Can we customize our sponsorship package?",
            a: "We are open to discussing customized packages to best suit your company's goals. Please contact us at golang-korea-organizers@googlegroups.com to discuss potential collaborations.",
          },
          {
            q: "What is the deadline for submitting promotional materials (logos, videos, etc.)?",
            a: "The deadline for submitting all promotional materials will be communicated to confirmed sponsors. Generally, it is about one month before the event date to ensure inclusion in all printed and digital materials.",
          },
          {
            q: "How many attendees are expected at GopherCon Korea 2025?",
            a: "We are expecting over 400 offline attendees, consisting of Go developers, students, and tech leaders from across the country. Online replay will also be provided to reach a wider audience.",
          },
          {
            q: "Is in-kind sponsorship (e.g., goods or services) possible?",
            a: "Yes, we welcome in-kind sponsorships such as providing goods for attendees or offering services for the event. Please contact us to discuss the details and how we can collaborate.",
          },
        ],
      },
    },
  },
  ko: {
    translation: {
      common: {
        copied: "복사되었습니다!",
      },
      nav: {
        about: "소개",
        program: "프로그램",
        sessions: "세션",
        schedule: "시간표",
        organizers: "주최/주관",
        sponsorship: "후원",
        sponsorship_guide: "후원사 안내",
        sponsorship_faq: "후원 FAQ",
        sponsorship_form: "후원사 신청",
        flea_market: "플리마켓",
        venue: "장소",
        coc: "행동 강령",
        past_gophercons: "지난 고퍼콘",
        "2024": "2024년",
        "2023": "2023년",
        buy_ticket: "티켓 구매",
        buy_ticket_soon: "티켓 구매는 곧 오픈될 예정입니다.",
      },
      page_title: {
        about: "소개",
        coc: "행동 강령",
        sessions: "세션",
        schedule: "시간표",
        organizers: "주최/주관",
        sponsorship_guide: "후원사 안내",
        sponsorship_form: "후원사 신청",
        sponsorship_faq: "후원 관련 자주 묻는 질문",
        flea_market: "플리마켓",
        venue: "장소",
        not_found: "페이지를 찾을 수 없습니다",
        not_found_initial_messages: [
          "흠... 이 지도는 영 아닌데... 찍.",
          "여긴 어디인고... 나는 누구인고...",
          "내 지도엔 이런 곳 없어!",
          "이런, 길을 잘못 들었다 찍.",
        ],
        not_found_messages: [
          "이 길은 아니라고!",
          "자꾸 누르지 말아라 찍!",
          "여긴 막다른 길이다 찍!",
          "나도 길 잃었단 말이야 찍!",
          "지도에 없는 곳이라고!",
          "이 URL은 틀렸다고 몇 번을 말해!",
          "어서 돌아가자고!",
          "더 가면 위험하다 찍!",
          "여긴 아무것도 없다고!",
          "이런, 길을 잘못 들었다 찍.",
          "내 지도엔 이런 곳 없어!",
          "여긴 어디인고... 나는 누구인고...",
          "이 페이지는 nil이라고! 아무것도 없다고!",
          "컴파일도 안되는 주소라고!",
          "자꾸 말 걸지 말라 찍! 길 찾는 중이다 찍!",
          "이쪽이 아닌 것 같다고...",
          "나, 집에 가고 싶다고...",
          "패닉이라고! 시스템 패닉!",
          "길을 잃었고... 배도 고프고...",
          "페이지를 찾을 수 없다 찍!",
          "이 메시지, 몇 번째 보는 거냐 찍?",
          "에러! 에러라고!",
          "여긴 고퍼 땅이 아니다 찍.",
          "내 말 좀 들어보라고!",
          "왜 자꾸 이상한 데로 가는고야!",
          "여긴 unsafe 포인터 같은 곳이라고!",
          "길이 없으면 만들면 된다고? 안된다고!",
          "이 채널은 이미 닫혔다고!",
          "내 GOPATH에 없는 경로라니까!",
          "고만해, 여긴 길이 아니야!",
          "여긴 막다른 골목이라니까, 찍!",
          "나도 모른다고! 자꾸 묻지 마!",
          "이 링크는 가비지 컬렉션됐다고.",
          "데드락 걸렸잖아! 책임져!",
          "이 함수는 리턴값이 없다고. 페이지도.",
          "무한루프에 갇힌 기분이다 찍...",
          "고생길이 훤하다고!",
          "스택 오버플로우 나기 직전이라고!",
          "이쯤 되면 포기할 때도 되지 않았고?",
          "여긴 인터넷도 안 터진다 찍.",
          "404라고! 못 알아듣는고야?",
          "이건 버그라고! 명백한 버그야!",
          "여기까지 온 고퍼는 네가 처음이야.",
          "내 러버덕도 포기했다고.",
          "그만고 돌아가고!",
          "에러 핸들링 좀 하라고!",
          "이 주소는 deprecated 됐다니까!",
          "빌드 실패! 이 페이지는 존재하지 않아!",
          "내 로컬에선 잘 됐었다고... 진짜야!",
          "아무튼 여긴 아니라고! 절대 아니라고!",
        ],
      },
      home: {
        title: "고퍼콘 코리아 2025",
        subtitle: "국내 최대 Go 컨퍼런스에 오신 것을 환영합니다.",
        date: "2025. 11. 09. (일)",
        venue: "코엑스 마곡",
        sponsors_title: "함께하는 후원사",
      },
      about: {
        title: "Golang Korea와 GopherCon Korea",
        content:
          "Golang Korea는 한국의 Go 언어 개발자 커뮤니티입니다. 약 7,800명의 구성원으로 이루어져 있는 Golang Korea 커뮤니티는, Go 프로그래밍 언어에 대해서 지식을 공유하거나 이야기 할 수 있는 장을 만들어나가고 있으며, 연례 행사 GopherCon Korea를 주관합니다.",
        content2:
          "Go 언어 사용자의 최대 크기의 연례 행사인 고퍼콘(GopherCon)이 2014년 시작해 세계 각국에서 매년 열리고 있습니다. Golang Korea에서는 2023년 8월 국내에서 최초로 GopherCon Korea 2023을 성공적으로 개최하였습니다. GopherCon Korea는 앞으로도 국내 Go 개발자들의 최대 축제로 만들어 건강한 Go 생태계를 마련하고자 합니다.",
        slogan: "Go for Everyone, Everywhere",
        date: "일시: 2025년 11월 9일 (일)",
        venue: "장소: 코엑스 마곡",
        photos_title: "지난 컨퍼런스의 순간들",
        past_conferences_title: "지난 고퍼콘 다시보기",
        watch_now: "YouTube에서 다시보기",
        mission_title: "Golang Korea의 가치",
        values: [
          {
            title: "규모 (Volume)",
            desc: "우리는 Go 언어 개발자들의 지식 기반과 영향력, 그리고 커뮤니케이션 채널을 확장하는 것을 근본적인 가치로 여깁니다.",
          },
          {
            title: "연결 (Connection)",
            desc: "우리는 환경 조성과 소통을 통해 각 구성원이 잘 연결될 수 있고 커뮤니티 내에서 자연스러운 소통이 이루어지기 위해 존재합니다.",
          },
          {
            title: "다양성 (Diversity)",
            desc: "우리는 성별, 접근 수준, 분야, 국가, 언어, 지역, 기술 난이도 등 다양한 측면에서 다양성을 넓혀 더 다양한 소속의 구성원이 커뮤니티에 함께하며 성장할 수 있도록 생태계를 구축하는 것을 중요한 가치로 가지고 있습니다.",
          },
        ],
        gdg_partnership_title: "Google for Developers와 함께합니다",
        gdg_partnership_content:
          "Golang Korea는 Google for Developers 프로그램에 합류하여 더욱 폭넓은 Go 언어 커뮤니티 생태계를 만들어나가고 있습니다. Google Developer Groups(GDG)는 다른 사람들과 서로 배우고 연결하도록 돕는 데 전념하는 열정적인 커뮤니티입니다. GDG Golang Korea를 통해 매년 4회 이상의 광범위한 기술 주제에 대한 밋업 이벤트를 계획하고 주최하고 있습니다.",
        gdg_partnership_cta: "Google 개발자 커뮤니티 알아보기",
        what_is_gophercon_title: "고퍼콘(GopherCon)이란?",
        what_is_gophercon_subtitle: "Go 개발자들을 위한 가장 큰 축제입니다.",
        what_is_gophercon_content:
          "Go 언어 사용자들은 애칭으로 고퍼(Gopher)라고 불리며, 고퍼콘(GopherCon)은 Go 커뮤니티를 위해 매년 열리는 가장 큰 규모의 컨퍼런스입니다. 2014년 시작된 이래로, 고퍼콘은 전 세계 다양한 국가에서 개최되며 Go 개발자들이 지식과 경험을 공유하는 장이 되어왔습니다. 고퍼콘 코리아는 이 글로벌 행사의 한국 에디션으로, 국내 Go 커뮤니티를 위한 최고의 축제 역할을 하고 있습니다.",
      },
      coc: {
        title: "GopherCon Korea 2025 행동강령 (CoC)",
        titleCore: "핵심 규칙",
        titleCoreDesc:
          "GopherCon Korea 2025 행사는 직장인 학생을 나누지 않고 다 함께 모여 네트워킹과 이벤트를 참여할 수 있는 단체입니다. 행사가 참여자 모두에게 좋은 경험과 즐거움이 되길 바라며 이에 따라 아래와 같은 행동 강령을 요청드립니다.",
        titleCoreDesc2:
          "행동강령은 GopherCon Korea 2025 행사의 모든 참여자에게 해당하며 위반 시 운영진, 스태프로부터 퇴장 등의 제재를 받을 수 있습니다. 또한, 행동강령 위반 사례에 대한 내용은 공개될 수 있습니다.",
        titleCoreStatement1: "친절과 배려로 따뜻하고 건전한 커뮤니티를 만들어갑니다.",
        titleCoreStatement1Unit1: "우리는 혐오와 차별적인 표현, 공격적인 발언을 하지 않습니다.",
        titleCoreStatement1Unit2:
          "이와 관련한 문제를 발견했을 때 우리는 침묵하지 않으며, 먼저 나서서 문제를 해결합니다.",
        titleCoreStatement1Unit3: "관련된 구성원 모두가 행복하고 재미있는 자리가 되기 위해 최선을 다합니다.",
        titleCoreStatement2: "더 나은 국내 Go 언어 커뮤니티 발전을 위해 책임과 소임을 다 합니다.",
        titleCoreStatement2Unit1: "Go 언어를 사랑하는 우리들은 국내의 Go 언어 커뮤니티 발전을 위하여 최선을 다 합니다.",
        titleParticipants: "참여 규칙",
        titleParticipantsStatement1: "A) 일반",
        titleParticipantsStatement1Unit1: "행사에 오신 모든 분들이 환영한다는 느낌을 주세요.",
        titleParticipantsStatement1Unit1Sub1:
          "서로 아는 분들끼리 있기보다, 누구에게든 이야기를 함께 건네고 인사하고, 소통해 주세요.",
        titleParticipantsStatement1Unit1Sub2: "행사 자리와 채널에서는 모든 상대방에게 존댓말을 사용해 주세요.",
        titleParticipantsStatement1Unit2:
          "모든 사람들이 안전하고 믿을 수 있는 커뮤니티라고 느낄 수 있도록 안전한 행사를 위해 노력해주세요.",
        titleParticipantsStatement1Unit2Sub1: "타인과 불필요한 신체 접촉을 하지 않도록 주의해 주세요.",
        titleParticipantsStatement1Unit2Sub1Unit1: "예시: 동의 없이 손을 잡거나 어깨동무를 하는 행위 등.",
        titleParticipantsStatement1Unit2Sub2: "대화에 욕설, 비속어, 은어를 포함하지 마세요.",
        titleParticipantsStatement1Unit2Sub2Unit1:
          "가까운 지인과의 대화이더라도 주변 사람에게 불편함을 주거나 위협이 될 수 있습니다.",
        titleParticipantsStatement1Unit2Sub3:
          "화를 내거나 과격한 몸짓, 언성을 높이는 행위 등으로 상대방을 위협하지 마세요.",
        titleParticipantsStatement1Unit2Sub4:
          "상대방이 불쾌감을 느낄 수 있는 언어적 표현, 비언어적 행동, 일체의 성적 대상화를 하지 말아주세요.",
        titleParticipantsStatement1Unit2Sub5:
          "타인에게 위해를 가하거나 이에 준하는 공포감을 심어줄 수 있는 물건을 소지하지 마세요. (예: 야구 배트, 화학 물품류, 화기 등)",
        titleParticipantsStatement1Unit2Sub6:
          "타인의 소지품을 동의 없이 만지지 말아주세요. (예: 휴대폰, 노트북, 가방, 장애인 보조 기구(보청기, 휠체어 등))",
        titleParticipantsStatement1Unit2Sub7: "법에 저촉되는 행위를 하지 말아주세요.",
        titleParticipantsStatement1Unit2Sub8: "위의 모든 행위를 부추기거나 장려하는 행위를 하지 말아주세요.",
        titleParticipantsStatement1Unit2Sub9: "준비위원회로 사칭하거나 허위 정보를 유포하지 말아 주세요.",
        titleParticipantsStatement1Unit3: "상대방을 존중하며 커뮤니케이션 해주세요.",
        titleParticipantsStatement1Unit3Sub1:
          '항상 상대방을 존중하는 언행을 합니다. 상대방에게 불편할 수 있는 언행이나 차별적인 언행을 하지 말아주세요. (예: "비전공자면 이런 내용 모르시겠네요", "OO 언어는 뒤쳐졌거나 레거시라 싫어요")',
        titleParticipantsStatement1Unit3Sub2:
          '행사 자리와 채널에서는 모든 상대방에게 존댓말을 사용하고 "XX님 체"를 사용합니다.',
        titleParticipantsStatement1Unit3Sub3:
          "궁금한 점이 있다면 적극적으로 물어보고, 다른 의견이 있다면 제시해봅니다.",
        titleParticipantsStatement1Unit3Sub4:
          '사적인 정보를 지켜주세요. 사소한 질문도 누군가에게는 큰 실례가 되기도 합니다. (예: "나이가 어떻게 되시나요?", "결혼은 하셨나요?", "어떻게 하다가 장애를 가지게 되셨나요?")',
        titleParticipantsStatement1Unit3Sub5: "타인의 명시적인 허가 없이 무단으로 타인의 사진을 촬영하지 않습니다.",
        titleParticipantsStatement2: "B) 대응 및 조치",
        titleParticipantsStatement2Desc:
          "행사에 참여하며, 다른 참여자 분께 어떠한 문제가 발생하거나 다른 참여자 분께서 문제에 처한 것을 보셨거나, 불편 사항이 있으시면 GopherCon Korea 준비위원회(이하 준비위)에게 도움을 요청해 주세요. 위급한 사항이라면 준비위에게 도움을 청함과 동시에 경찰, 소방서 등 도움이 필요한 관할 기관에 신고하여 주세요.",
        titleParticipantsStatement2Unit1: "대표 연락처: gophercon-korea-staffs@googlegroups.com",
        titleParticipantsStatement2Unit2:
          "오프라인 공간에서 준비위는 준비위임을 인지할 수 있는 눈에 띄는 복장을 입고 있을 것입니다. 온라인 공간 혹은 대면으로 이야기할 수 없는 상태인 경우에는 상단의 메일을 통해 연락하실 수 있습니다.",
        titleParticipantsStatement2Unit3:
          "행동 강령 위반이 접수되면 GopherCon Korea 준비위원회는 필요한 경우 행사장 퇴장 등의 조치나 사법/의료 기관에 연락을 취하여, 안전한 행사를 만들 수 있도록 노력하며, 이 과정에서의 신고자나 피해자의 신원 보호를 위해 노력할 것입니다.",
        titleParticipantsStatement2Unit4:
          "또한 사법기관에서 필요한 조치를 취하실 수 있도록 GopherCon Korea 준비위원회는 모든 역할을 다할 것입니다.",
        titleParticipantsStatement3: "C) 행동 강령에는 한계가 있습니다.",
        titleParticipantsStatement3Desc:
          "모두가 즐겁고 행복하고 안전하고 쾌적한 커뮤니티를 위한 다양한 노력에도 불구하고, 행동 강령이 모든 위협으로부터 준비위원회/참가자 분들을 안전하게 보호할 수는 없습니다.",
        titleParticipantsStatement3Unit1:
          "누가봐도 위급한 상황이라면 스태프에게 도움을 청함과 동시에 경찰, 소방서 등 관할 기관에 신고하여 적절한 조치가 될 수 있도록 해 주세요.",
        titleParticipantsStatement3Unit2:
          "사실 확인이 어려운 경우 심증만으로 피신고자나 단체에 조치를 취하기는 어렵습니다. 조치 여부와 관계없이 위협을 느끼신다면 동행, 분리 등의 도움을 드릴 수 있습니다.",
        titleParticipantsStatement4: "D) 끝으로",
        titleParticipantsStatement4Important:
          "GopherCon Korea 2025 운영위원회에서는 모든 행사 참석자가 위의 행동강령을 지켜주시기를 강력히 요청합니다.",
        titleParticipantsStatement4Desc:
          "GopherCon Korea 2025에서 위와 같은 행동 강령을 어길 시에는 준비위원회에 의하여",
        titleParticipantsStatement4Unit1: "주의 조치",
        titleParticipantsStatement4Unit2: "다른 참가자와의 격리 조치",
        titleParticipantsStatement4Unit3: "행사장 퇴장 조치",
        titleParticipantsStatement4Unit4: "사법기관으로의 인도 조치",
        titleParticipantsStatement4Desc2: "혹은 위에 언급되지 않았으나 필요한 조치가 이루어질 수 있음을 공지드립니다.",
      },
      program: {
        sessions_title: "세션 목록",
        schedule_title: "컨퍼런스 시간표",
        speaker: "발표자",
        track: "트랙",
        session_details: "세션 상세 정보",
        all: "전체",
        filter_by_difficulty: "난이도별 필터",
        filter_by_category: "카테고리별 필터",
        placeholder_notice_title: "참고: 현재 시간표는 예시입니다",
        placeholder_notice_content:
          "아래 세션과 시간표는 이해를 돕기 위한 예시입니다. 실제 프로그램은 발표자 모집이 완료된 후 확정될 예정이니, 곧 공개될 멋진 세션들을 기대해주세요!",
        back_to_sessions: "세션 목록으로 돌아가기",
        session_info: "세션 정보",
        legend: "범례",
        session: "세션",
        break: "휴식 / 이벤트",
        dummy_sns_messages: {
          github: "이 고퍼의 코드는 아직 공사중입니다. (예시 링크)",
          linkedin: "이 고퍼는 네트워킹을 잠시 `defer` 했습니다. (예시 링크)",
          twitter: "이 고퍼의 트윗 `chan`nel은 아직 닫혀있습니다. (예시 링크)",
          facebook: "이 고퍼의 프로필은 현재 `nil` 입니다. (예시 링크)",
          instagram: "완벽한 사진을 `select` 하는 중입니다. (예시 링크)",
          youtube: "영상이 준비되`고` 있습니다. (예시 링크)",
        },
        description_placeholder: "세션 설명이 곧 업데이트될 예정입니다.",
        call_for_speakers_title: "발표자 모집 중!",
        call_for_speakers_content:
          "Go 커뮤니티와 지식과 경험을 나눌 열정적인 발표자를 찾고 있습니다. 흥미로운 주제가 있다면 지금 바로 지원해주세요!",
        call_for_speakers_cta: "발표자 지원하기",
      },
      venue: {
        title: "오시는 길",
        content: "행사장 위치 및 교통편 안내 정보가 제공될 예정입니다.",
        address: "서울 강서구 마곡중앙로 143",
        address_title: "주소",
        contact_title: "문의",
        contact_email: "gophercon-korea-staffs@googlegroups.com",
        transportation_title: "교통편",
        subway_title: "지하철",
        subway_info: "9호선 마곡나루역 2번 출구에서 193m",
        bus_title: "버스",
        bus_info: "강서구청 정류장 (ID: 16-111) 하차. 버스: 6642, 6645, 강서05, 강서07",
        parking_title: "주차 안내",
        parking_info:
          "행사장 내 주차는 지원되지 않습니다. 인근 공영 주차장을 이용해 주시기 바랍니다. (예: 마곡중앙광장 주차장)",
        map_title: "행사장 위치 지도",
        subway_lines: [
          { line: "9", color: "#BDB092", info: "마곡나루역: 1번 출구에서 도보 5분" },
          { line: "5", color: "#996CAC", info: "마곡역: 1번 출구에서 도보 10분" },
          { line: "A", color: "#77C4A3", info: "공항철도 마곡나루역: 6번 출구에서 도보 6분" },
        ],
      },
      organizers: {
        title: "운영진 및 준비위원회",
        hosted_by_title: "주최",
        hosted_by_name: "Golang Korea",
        hosted_by_desc:
          "Golang Korea는 한국의 Go 언어 사용자 그룹으로, 밋업과 온라인 활동을 통해 지식을 공유하고 함께 성장하는 커뮤니티입니다.",
        hosted_by_cta: "디스코드 참여하기",
        organized_by_title: "주관",
        list_title: "운영진",
        list_desc:
          "고퍼콘 코리아는 Go 커뮤니티의 헌신적인 자원봉사자 팀에 의해 만들어집니다. 이 행사를 성공적으로 개최하기 위해 끊임없이 노력하는 열정적인 분들을 만나보세요.",
        list: [
          { name: "박제창", role: "오거나이저", avatar: "jaichang-park" },
          { name: "유의선", role: "오거나이저", avatar: "uiseon-yu" },
          { name: "이재규", role: "오거나이저", avatar: "jq-lee" },
          { name: "이진석", role: "오거나이저", avatar: "jhin-lee" },
          { name: "정현서", role: "오거나이저", avatar: "hyunseo-jung" },
          { name: "한성민", role: "오거나이저", avatar: "sungmin-han" },
          { name: "한우석", role: "오거나이저", avatar: "wooseok-han" },
        ],
        preparatory_committee_list: [],
        artwork_credit:
          "오거나이저의 아바타는 <0>Gopherize.me</0>를 통해 만들었습니다 (아트워크 by <3>Ashley McNamara</3>).<4/>오리지널 고퍼 캐릭터는 <1>Renee French</1>의 기여로부터 시작되었으며, 자세한 내용은 <2>go.dev/blog/gopher</2>를 참고해주세요.",
      },
      sponsorship_guide: {
        title: "후원사 안내",
        subtitle: "GopherCon Korea 2025의 파트너가 되어 수백 명의 열정적인 Go 개발자들과 만나보세요.",
        why_sponsor_title: "왜 고퍼콘 코리아를 후원해야 할까요?",
        why_sponsor_desc:
          "여러분의 후원은 저희가 커뮤니티를 위해 양질의 접근성 높은 행사를 만드는 데 큰 도움이 됩니다. 이는 브랜드 인지도를 높이고, 최고의 인재를 채용하며, 오픈소스 생태계에 대한 기여를 보여줄 수 있는 특별한 기회입니다.",
        thank_you_title: "후원사 여러분께 진심으로 감사드립니다",
        thank_you_p1:
          "GopherCon Korea는 Go 커뮤니티의 열정으로 만들어지는 비영리 행사입니다. 여러분의 후원은 단순한 마케팅을 넘어, 컨퍼런스를 현실로 만드는 소중한 기여입니다. 덕분에 저희는 합리적인 가격의 티켓을 제공하고, 수준 높은 경험을 선사하며, 한국 Go 생태계의 성장을 지원할 수 있습니다.",
        thank_you_p2:
          "저희와 함께함으로써, 여러분은 활기차고 포용적인 개발자 커뮤니티를 만드는 핵심적인 역할을 하게 됩니다. 여러분의 지원에 깊이 감사드리며, 잊지 못할 행사를 함께 만들어가기를 기대합니다.",
        cta_text: "후원사 신청하기",
        price_table_title: "스폰서 구좌 별 금액 안내",
        price_table_tier: "구좌",
        price_table_price: "금액",
        price_table_requirement: "요건",
        price_vat_notice: "* 구좌 금액은 VAT(부가가치세) 별도 금액으로 기재되었습니다.",
        benefits_table_title: "GopherCon Korea 2025 스폰서 프로그램",
        benefit_labels: {
          logo: "로고 게시",
          keynote: "오프닝 키노트 발표",
          techtalk: "기업 테크톡 발표",
          booth: "부스 제공",
          mention: "후원사 코너 언급",
          sns: "SNS 업체 브랜드 노출",
          youtube_video_logo: "유튜브 영상 로고 노출",
          souvenir: "기념품 증정",
          tickets: "참여 티켓 제공",
          parking: "주차 지원",
        },
        tiers1: [
          {
            name: "다이아몬드",
            benefits: {
              logo: "모든 매체 제공 (최상단)",
              keynote: true,
              techtalk: "1회 (40~50mins)",
              booth: "대형",
              mention: true,
              sns: "노출, 스케치 필름 제공",
              youtube_video_logo: "노출, 홍보 영상 노출",
              souvenir: true,
              tickets: "15매",
              parking: "주차권 5매",
            },
          },
          {
            name: "플래티넘",
            benefits: {
              logo: "모든 매체 제공 (상단)",
              keynote: false,
              techtalk: "1회 (20~30mins)",
              booth: "대형",
              mention: true,
              sns: "노출, 스케치 필름 제공",
              youtube_video_logo: "노출, 홍보 영상 노출",
              souvenir: true,
              tickets: "10매",
              parking: "주차권 3매",
            },
          },
          {
            name: "골드",
            benefits: {
              logo: "모든 매체 제공 (상단)",
              keynote: false,
              techtalk: false,
              booth: "중형",
              mention: true,
              sns: "노출",
              youtube_video_logo: "노출, 홍보 영상 노출",
              souvenir: true,
              tickets: "5매",
              parking: "주차권 2매",
            },
          },
        ],
        tiers2: [
          {
            name: "실버",
            benefits: {
              logo: "로비, 현수막, 홈페이지",
              keynote: false,
              techtalk: false,
              booth: "소형",
              mention: true,
              sns: "노출",
              youtube_video_logo: false,
              souvenir: true,
              tickets: "3매",
              parking: "주차권 1매",
            },
          },
          {
            name: "브론즈",
            benefits: {
              logo: "로비, 현수막, 홈페이지",
              keynote: false,
              techtalk: false,
              booth: "소형",
              mention: true,
              sns: "노출",
              youtube_video_logo: false,
              souvenir: true,
              tickets: "1매",
              parking: "주차권 1매",
            },
          },
          {
            name: "커뮤니티",
            benefits: {
              logo: "로비, 현수막, 홈페이지",
              keynote: false,
              techtalk: false,
              booth: "커뮤니티 코너",
              mention: true,
              sns: "노출",
              youtube_video_logo: false,
              souvenir: true,
              tickets: "1매",
              parking: "주차권 1매",
            },
          },
          {
            name: "출판사",
            benefits: {
              logo: "로비, 현수막, 홈페이지",
              keynote: false,
              techtalk: false,
              booth: false,
              mention: true,
              sns: "노출",
              lounge: false,
              youtube_video_logo: false,
              souvenir: true,
              tickets: "1매",
              parking: "주차권 1매",
            },
          },
        ],
        price_list: [
          { tier: "다이아몬드", price: "30,000,000원", requirement: "대기업 및 스타트업" },
          { tier: "플래티넘", price: "20,000,000원", requirement: "대기업 및 스타트업" },
          { tier: "골드", price: "10,000,000원", requirement: "대기업 및 스타트업" },
          { tier: "실버", price: "5,000,000원", requirement: "스타트업" },
          { tier: "브론즈", price: "3,000,000원", requirement: "스타트업" },
          { tier: "커뮤니티", price: "300,000원", requirement: "비영리 커뮤니티" },
          { tier: "출판사", price: "도서 후원", requirement: "등록된 도서 출판사" },
        ],
      },
      sponsorship_form: {
        title: "후원사 신청",
        invitation_p1: "안녕하세요! 저희 Golang Korea에서 제안을 드리고자 합니다.",
        invitation_p2: "2025년 가을, 서울에서 개최될 Go 언어의 축제에 여러분을 파트너로 모시고자 합니다.",
        invitation_moment_title: "함께 만들어갈 특별한 순간",
        invitation_moment_p1:
          "이번 행사는 단순한 기술 컨퍼런스를 넘어, Go 생태계의 모든 구성원이 하나되는 진정한 축제의 장이 될 것입니다.",
        invitation_moment_p2:
          '"Go for Everyone"이라는 슬로건 아래, 우리는 더욱 포용적이고 활기찬 Go 커뮤니티를 만들어가고자 합니다.',
        event_overview_title: "행사 개요",
        event_overview_date: "일시: 2025년 11월 9일 (일)",
        event_overview_venue: "장소: 코엑스 마곡 (서울 강서구 마곡중앙로 143)",
        event_overview_attendance: "예상 규모:",
        event_overview_offline: "오프라인: 400명 이상",
        event_overview_online: "온라인: 다시보기 제공 예정",
        why_join_title: "왜 함께해야 할까요?",
        why_join_list: [
          "Go 언어에 관심 있는 수많은 개발자들과 직접 소통할 수 있는 특별한 기회",
          "한국 Go 커뮤니티의 중심에서 여러분의 브랜드를 선보일 수 있는 최적의 장",
          "Go 생태계의 건강한 성장에 기여할 수 있는 의미 있는 투자",
        ],
        to_join_title: "함께하시는 분들은,",
        to_join_deadline: "후원사 신청 마감: 2025년 9월 10일 수요일까지",
        to_join_contact: "문의: golang-korea-organizers@googlegroups.com",
        closing_p1:
          "여러분의 참여로 더욱 풍성해질 Go 커뮤니티의 새로운 장을 함께 열어가길 바랍니다. 많은 관심과 참여 부탁드립니다.",
        closing_p2: "함께해주셔서 감사합니다.",
        closing_sincerely: "Golang Korea 드림",
        about_gophercon_title: "고퍼콘에 대하여",
        about_gophercon_content:
          "Go 언어 사용자들은 고퍼(Gopher)라고 불리며, GopherCon은 Go 커뮤니티를 위한 연례 행사입니다. 첫 GopherCon Korea의 성공적인 개최에 이어, 다가오는 11월 9일 GopherCon Korea 2025를 개최하여 대한민국 모든 Go 개발자들을 위한 축제의 장을 만들고자 합니다.",
        timeline_title: "후원 일정",
        timeline_schedule:
          "일정 : 후원신청서 등록/검증 (8~9월) ➡️ 후원사 확정 안내 및 전자계약 (상호 협의) ➡️ 후원금 입금 마감 (상호 협의) ➡️ 후원사 참여 안내 및 홍보",
        timeline_registration:
          "등록 : 후원 신청 시 후원사 검증을 거쳐 1주 이내 등록 결과를 공유하며, 신청 시간을 기준으로 구좌별 선착순 등록을 원칙으로 합니다. 전자계약 후 2주 이내 입금이 완료된 이후 후원사로 최종 확정됩니다.",
        timeline_contact:
          "문의 : 후원과 관련한 혜택, 방식 등의 내용에 대해서는 GopherCon Korea 2025 주최 측과 긴밀한 협의가 가능합니다. (golang-korea-organizers@googlegroups.com)",
        process_title: "후원 절차",
        process_intro:
          "후원은 폼을 기입하고 나서 4단계로 진행됩니다.\n(*커뮤니티 및 출판사 구좌의 경우 절차가 설명보다 약식화되어 진행됩니다.)",
        process_steps: [
          { title: "후원 논의", desc: "후원에 대한 문의 답변 및 이후 절차 안내를 위한 메일 송부가 진행됩니다." },
          { title: "계약 진행", desc: "전자 결재를 통한 서명을 통해 후원 계약을 진행합니다." },
          {
            title: "미팅 진행",
            desc: "자세한 후원 프로그램 및 협력 과정에 대해 설명을 위해 미팅을 통해 준비위원회와 논의합니다.",
          },
          {
            title: "세부 안내",
            desc: "이후 부스 및 프로그램 운영을 위한 세부 안내 및 에셋 요청, 자료를 송부드립니다.",
          },
        ],
        terms_title: "후원 약관",
        terms_articles: [
          {
            title: "제1조 목적",
            content:
              "본 약관은 후원사가 Golang Korea가 개최하는 <GopherCon Korea 2025> 행사(이하 “행사”)에 후원을 함에 있어 행사 홈페이지에 안내된 내용과 더불어 양 당사자 간 권리, 의무를 분명히 하는 것을 목적으로 합니다.",
          },
          {
            title: "제2조 후원 신청 및 후원금 지급 방법",
            content:
              "1.  후원사는 행사 홈페이지 및 지정 양식 접수를 통해 후원 신청서를 제출하여야 하며, Golang Korea의 승인을 통지받은 날로부터 14일 이내에 후원 신청 금액을 Golang Korea가 정한 계좌에 일시불로 지급해야 합니다. 단, 후원사가 지급 기한 연장에 대한 정당한 사유를 들어 연장을 신청한 경우 Golang Korea는 해당 신청을 승인할 수 있습니다.\n2.  Golang Korea가 승인을 통지한 날 해당 후원 등급의 잔여 구좌가 감소됩니다. 입금 기한이 지나 신청이 취소된 경우 잔여 구좌가 다시 증가됩니다.\n3.  후원금 지급 최종 기한 및 후원 서비스 공급의 최종 서약 기한은 이후, 상호 협의를 따르며 제1항에 따른 연장 신청이 승인된 경우에도 이와 같습니다.",
          },
          {
            title: "제3조 후원 등급에 따른 Golang Korea의 의무",
            content:
              "후원 금액 및 후원 서비스에 따른 후원 등급 및 각 후원 등급별 후원사에 대한 Golang Korea의 의무는 행사 홈페이지에 안내된 바와 같습니다. (현재 별도 안내 중) 단, 양 당사자의 합의에 따라 특약으로 행사 홈페이지에 안내된 내용과 다르게 후원 계약을 체결할 수 있습니다.",
          },
          {
            title: "제4조 후원 계약의 해지 및 후원 금액의 일부 취소",
            content:
              "후원사는 Golang Korea에게 다음 각 호의 기간에 따른 위약금을 지급하고 후원 계약을 해지할 수 있으며, 이미 후원금을 지급한 경우 Golang Korea는 위약금을 제외한 후원금을 반환합니다. 단, 후원 금액 중 일부를 취소하는 경우 취소를 요청한 금액에 다음 각 호에 따른 위약금 산정 비율이 적용됩니다. 후원 서비스 제공의 경우, 후원사의 상용 서비스의 금액을 기준으로 후원 금액을 산정하여 적용합니다.\n\n- 위약금 산정 -\n1.  계약 체결일 - 행사일 90일 전 : 후원금액의 10%\n2.  행사일 89일 - 행사일 60일 전 : 후원금액의 20%\n3.  행사일 59일 - 행사일 30일 전 : 후원금액의 50%\n4.  행사일 29일 - 행사일 8일 전 : 후원금액의 80%\n5.  행사일 7일 전 – 행사 당일 : 후원금액의 100%",
          },
          {
            title: "제5조 행동강령 위반에 따른 후원 계약의 해지 및 손해배상",
            content:
              "1.  후원사는 행사 홈페이지에 공개된 행동강령을 엄격하게 준수할 의무가 있습니다.\n2.  후원사는 제2조 제1항에 따른 신청 시 후원 계약 신청 이전에 발생한 행동강령 위반사실 여부에 대해 고지할 의무가 있으며, Golang Korea는 행동강령 위반사실을 이유로 후원 계약 체결을 거부할 수 있습니다.\n3.  후원사가 후원 계약 체결 이후 제1항에 따른 행동강령 준수 의무를 위반하거나 제2항에 따른 후원사의 고지의무 위반 사실이 발견된 경우 Golang Korea는 즉시 해당 사실을 후원사에게 통보하고 시정을 요청할 수 있습니다.\n4.  후원사는 제3항에 따른 요청을 통보받은 후 24시간 내로 Golang Korea에 의견서를 제출해야 합니다. 단, 후원사가 기한 연장에 대한 정당한 사유를 들어 연장을 신청하거나 대면 협의를 신청하는 경우 Golang Korea는 해당 신청을 승인할 수 있습니다.\n5.  Golang Korea는 행사일이 임박했을 경우에 제4항의 기간을 단축하여 의견서 제출을 요구할 수 있습니다.\n6.  Golang Korea는 제4항에 따라 제출된 후원사의 의견서 등을 바탕으로 다음 각 호의 어느 하나에 해당하는 경우 해당 사유를 통보하고, 행동강령 준수 의무 위반과 관련된 후원혜택을 제공하지 않습니다. 이 경우 Golang Korea는 후원금액의 일부 또는 전부를 반환하지 않습니다.\n•   후원사가 고의로 제2항의 고지 의무를 위반한 경우\n•   후원사가 시정 요청에 대한 의견서를 제3항의 기한 내에 제출하지 않거나 정당한 사유 없이 시정 요청에 응하지 않은 경우\n7.  Golang Korea는 제4항에 따라 제출된 후원사의 의견서 등을 바탕으로 후원사의 행동강령 위반의 정도가 Golang Korea 및 행사의 운영에 중대한 지장을 미치는 경우, 해당 사유를 통보하고 후원 계약을 해지할 수 있습니다. 후원사는 모든 후원혜택을 제공받을 수 없으며 계약 해지 시점 이후 부스 운영을 포함한 일체의 행사에 참석할 수 없고 Golang Korea에 제4조 각 호의 기간에 따른 위약금을 지급해야 합니다.",
          },
          {
            title: "제6조 (행사의 연기)",
            content:
              "Golang Korea는 행사를 연기하는 경우(연기 기한은 2025.12.31.까지로 합니다) 연기된 행사일 날짜를 기준으로 후원 계약의 내용이 변경됩니다. 이 경우 후원사는 후원 계약을 해지하거나 후원 금액 중 일부를 취소할 수 있으나, 연기된 행사일 날짜를 기준으로 제4조 각호의 기간을 적용하여 위약금 산정비율이 적용됩니다.",
          },
          {
            title: "제7조 (행사 취소에 따른 후원 계약의 해지 등)",
            content:
              "1.  행사가 취소되는 경우 Golang Korea가 후원사에게 행사 취소의 통지를 함으로써 후원 계약은 장래를 향해 해지됩니다.\n2.  행사가 취소되는 경우 Golang Korea는 이미 지급된 후원금 전액을 후원사에게 반환합니다. 단, 제3항 또는 제4항의 이유로 행사가 취소되는 경우는 예외로 합니다.\n3.  불가항력(정부의 행사 취소 명령 등)으로 행사가 취소되는 경우 Golang Korea는 후원사에게 다음 각 호의 행사 취소 시점에 따른 후원금의 일부를 반환합니다. 단, 해당 사유가 불가항력으로 인정되지 않는 경우에는 제4항이 적용됩니다.\n•   계약 체결일 - 행사일 90일 전 : 후원금액의 100%\n•   행사일 89일 - 행사일 8일 전 : 후원금액의 90%\n•   행사일 7일 전 - 행사 당일 : 후원금액의 80%\n4.  재난사정 (코로나19 등의 감염병 위기 경보 단계가 행사일까지 심각 이상으로 유지될 것이 예상되어 행사를 진행하기 어려운 경우로 판단되는 등)으로 Golang Korea가 행사를 취소하는 경우 Golang Korea는 후원사에게 다음 각 호의 행사 취소 시점에 따른 후원금의 일부를 반환합니다.\n•   계약 체결일 - 행사일 90일 전 : 후원금액의 90%\n•   행사일 89일 - 행사일 60일 전 : 후원금액의 80%\n•   행사일 59일 - 행사일 30일 전 : 후원금액의 50%\n•   행사일 29일 - 행사일 8일 전 : 후원금액의 20%\n•   행사일 7일 전 – 행사 당일 : 후원금액을 반환하지 않습니다.\n5.  제2항 내지 제4항의 경우 Golang Korea가 후원사에게 반환하기로 한 후원금액의 전부 또는 일부를 민법 제398조에 따른 손해배상의 예정으로 합니다.\n6.  후원 서비스 제공의 경우, 후원사의 상용 서비스의 금액을 기준으로 후원 금액을 산정하여 적용합니다.\n7.  Golang Korea는 후원사의 요청 시 후원사가 후원 계약 내용 외에 행사를 위해 준비한 사안의 활용 방안 등 요청 사항에 대해 성실하게 협의합니다.",
          },
          {
            title: "제8조 기타",
            content:
              "기타 약관에 포함되지 않은 사안에 대해서는 당사자간 합의에 따라 특약으로 정할 수 있으며, 약관의 동의는 후원사 신청서를 작성 및 발송하는 것으로 갈음합니다.",
          },
          {
            title: "제9조 관할 법원",
            content:
              "본 약관과 관련해 당사자간에 분쟁이 발생한 경우 상호 협의하여 원만히 해결하되, 소송으로 진행하는 경우 서울중앙지방법원을 관할 법원으로 합니다.",
          },
        ],
        intro_materials_title: "소개 자료",
        gophercon_intro_ko: "고퍼콘 코리아 소개서 (국문)",
        golangkorea_intro_ko: "고랭 코리아 소개서 (국문)",
        gophercon_intro_en: "고퍼콘 코리아 소개서 (영문)",
        golangkorea_intro_en: "고랭 코리아 소개서 (영문)",
        apply_button: "후원사 신청하기",
        form_link: "https://forms.gle/WQG1qNEBciYbhQmKA",
        gophercon_intro_ko_link: "https://drive.google.com/file/d/1-2mUE6HwTHZEJJUo9Mwj_EjSCuWCm1ZJ/view?usp=sharing",
        golangkorea_intro_ko_link: "https://drive.google.com/file/d/1Z_c7IDGuyTaW50Et0S0nRyPRoScu3c2D/view?usp=sharing",
        gophercon_intro_en_link: "https://drive.google.com/file/d/1ETZZNo08roCagv4T7EES-djeiTqKDu2e/view?usp=sharing",
        golangkorea_intro_en_link: "https://drive.google.com/file/d/1g8ZxVTTzxD4VEeckh1nT2HLCd-EiwtK_/view?usp=sharing",
      },
      flea_market: {
        title: "플리마켓",
        description:
          "고퍼콘 코리아 2025 행사장에서는 다양한 공식 굿즈를 판매하는 플리마켓 부스가 운영됩니다. 컨퍼런스를 기념할 특별한 굿즈들을 만나보세요!",
        items_title: "주요 판매 상품",
        notice_title: "고퍼의 비밀 상점",
        notice_content:
          "쉿! 이 상품들은 저희가 준비 중인 보물들의 일부랍니다. 최종 라인업은 장인 고퍼들이 열심히 다듬고 있어요. 행사장에서 실물을 확인하세요!",
        price_coming_soon: "가격 공개 예정",
        items: [
          { name: "고퍼 코바늘 인형 (대형)", image: "gopher-crochet-large", price: "50,000원" },
          { name: "고퍼 가방고리 인형 (소형)", image: "gopher-bag-charm", price: "25,000원" },
          { name: "고퍼 피규어", image: "gopher-figure", price: "35,000원" },
          { name: "고퍼 열쇠고리", image: "gopher-keychain", price: "15,000원" },
          { name: "고퍼콘 코리아 금속뱃지", image: "gophercon-badge", price: "12,000원" },
          { name: "고퍼콘 머그컵", image: "gophercon-mug", price: "20,000원" },
          { name: "고퍼 스티커 세트", image: "gopher-stickers", price: "8,000원" },
          { name: "고퍼 티셔츠", image: "gopher-tshirt", price: "30,000원" },
          { name: "고퍼 텀블러", image: "gopher-tumbler", price: "22,000원" },
          { name: "고퍼 금속 뱃지", image: "gopher-metal-badge", price: "10,000원" },
        ],
      },
      sponsorship_faq: {
        title: "후원 관련 자주 묻는 질문",
        description:
          "GopherCon Korea 2025 후원에 대해 궁금한 점이 있으신가요? 자주 묻는 질문에 대한 답변을 아래에서 확인하세요. 원하시는 답변을 찾지 못하셨다면 언제든지 저희에게 문의해주세요.",
        faq_list: [
          {
            q: "후원 신청은 어떻게 하나요?",
            a: "후원사 신청 페이지의 양식을 작성하여 제출해주시면 됩니다. 신청서 제출 후, 저희 팀이 검토하여 일주일 내로 연락드릴 것입니다.",
          },
          {
            q: "후원금 결제는 어떻게 진행되나요?",
            a: "후원금은 Golang Korea가 지정한 계좌로 일시불 계좌 이체해주셔야 합니다. 자세한 내용은 계약 과정에서 안내해 드립니다.",
          },
          {
            q: "후원을 취소할 경우 환불이 가능한가요?",
            a: "네, 가능합니다. 다만 취소 시점에 따라 위약금이 발생합니다. 자세한 위약금 규정은 후원 약관 제4조를 참고해주시기 바랍니다.",
          },
          {
            q: "행사가 연기되거나 취소되면 어떻게 되나요?",
            a: "행사가 연기될 경우, 계약은 변경된 날짜를 기준으로 조정됩니다. 행사가 취소될 경우, 상황에 따라 전액 또는 일부를 환불해 드립니다. 약관 제6조와 제7조를 참고해주세요.",
          },
          {
            q: "비영리 커뮤니티를 위한 혜택이 있나요?",
            a: "네, 비영리 커뮤니티를 위한 '커뮤니티' 등급이 마련되어 있습니다. 저렴한 비용으로 커뮤니티 코너 부스, 로고 노출 등의 혜택을 받으실 수 있습니다.",
          },
          {
            q: "후원사는 어떤 홍보 효과를 얻을 수 있나요?",
            a: "후원사는 공식 웹사이트, 소셜 미디어, 행사장 배너, 세션 스트리밍 등 다양한 채널을 통해 브랜드를 노출할 수 있습니다. 상위 등급 후원사에게는 기술 세션 발표, 부스 운영, 키노트 로고 노출 등의 기회가 추가로 제공됩니다. 등급별 상세 혜택은 후원사 안내 페이지를 참고해주세요.",
          },
          {
            q: "후원 패키지를 맞춤형으로 조절할 수 있나요?",
            a: "네, 기업의 목표에 가장 잘 부합하는 맞춤형 패키지에 대해 논의할 수 있습니다. golang-korea-organizers@googlegroups.com 으로 연락주시면 협력 방안에 대해 자세히 안내해 드리겠습니다.",
          },
          {
            q: "로고, 홍보 영상 등 홍보 자료 제출 마감일은 언제인가요?",
            a: "모든 홍보 자료의 제출 마감일은 후원이 확정된 후 개별적으로 안내해 드립니다. 일반적으로 모든 인쇄물 및 디지털 자료에 포함될 수 있도록 행사일로부터 약 1개월 전입니다.",
          },
          {
            q: "GopherCon Korea 2025에 몇 명 정도의 참석자가 예상되나요?",
            a: "국내 Go 개발자, 학생, 기술 리더 등 400명 이상의 오프라인 참석자를 예상하고 있습니다. 또한, 더 많은 분들이 참여할 수 있도록 온라인 다시보기도 제공될 예정입니다.",
          },
          {
            q: "물품이나 서비스 등 현물 후원도 가능한가요?",
            a: "네, 참석자들을 위한 기념품이나 행사 운영에 필요한 서비스 제공 등 현물 후원도 환영합니다. 자세한 내용과 협력 방안에 대해 논의를 원하시면 저희에게 연락해주세요.",
          },
        ],
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ko",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
  });

export default i18n;
