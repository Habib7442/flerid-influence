export type Influencer = {
  name: string;
  platform: string;
  followers: string;
  reach: string;
  engagement: string;
  audienceFrom: string;
  image: string;
};

const supabaseBase =
  "https://kcqxikchnrwwrxrrwfqq.supabase.co/storage/v1/object/public/flerid%20influence%20influencers%20photo/";

export const influencers: Influencer[] = [
  {
    name: "Nasmin Islam",
    platform: "Instagram",
    followers: "5,618",
    reach: "25,000+",
    engagement: "3% – 6%",
    audienceFrom: "Guwahati • Jorhat • Sibsagar, Assam, India",
    image: `${supabaseBase}nasmin.png`,
  },
  {
    name: "Nazia Hassan",
    platform: "Instagram",
    followers: "29,900",
    reach: "120,000+",
    engagement: "2.5% – 5%",
    audienceFrom: "Silchar, Assam, India",
    image: `${supabaseBase}nazia.png`,
  },
  {
    name: "ABHI SINHA VLOGS",
    platform: "Instagram",
    followers: "107,000",
    reach: "300,000+",
    engagement: "2% – 4%",
    audienceFrom: "Assam, India",
    image: `${supabaseBase}Abhi%20vlogs.png`,
  },
  {
    name: "kukiborah_",
    platform: "Instagram",
    followers: "7,956",
    reach: "25,000+",
    engagement: "4% – 8%",
    audienceFrom: "Assam, India",
    image: `${supabaseBase}kukiborah.png`,
  },
  {
    name: "Monisha Sukla Baidya",
    platform: "Instagram",
    followers: "4,041",
    reach: "15,000+",
    engagement: "5% – 10%",
    audienceFrom: "Northeast India",
    image: `${supabaseBase}Monisha%20sukla%20baidya.png`,
  },
  {
    name: "Hima Das",
    platform: "Instagram",
    followers: "35,500",
    reach: "150,000+",
    engagement: "2.5% – 5%",
    audienceFrom: "Nalbari, Assam, India",
    image: `${supabaseBase}Himadas.png`,
  },
  {
    name: "Maruf Choudhury",
    platform: "Instagram",
    followers: "43,600",
    reach: "250,000+",
    engagement: "2.5% – 5%",
    audienceFrom: "Assam, India",
    image: `${supabaseBase}Maruf.png`,
  },
  {
    name: "Rafia Barbhuiya",
    platform: "Instagram",
    followers: "87,300",
    reach: "300,000+",
    engagement: "2% – 4%",
    audienceFrom: "Silchar • Guwahati, Assam, India",
    image: `${supabaseBase}rafia.png`,
  },
  {
    name: "Rasnom Laskar",
    platform: "Instagram",
    followers: "106,000",
    reach: "500,000+",
    engagement: "2% – 4%",
    audienceFrom: "Silchar, Assam, India",
    image: `${supabaseBase}rasnom.png`,
  },
  {
    name: "Abu Shuel",
    platform: "Instagram",
    followers: "106,000",
    reach: "400,000+",
    engagement: "1.8% – 3.5%",
    audienceFrom: "Silchar, Assam, India",
    image: `${supabaseBase}rdx%20suhel.png`,
  },
  {
    name: "Kaushik Kalita",
    platform: "Instagram",
    followers: "27,100",
    reach: "120,000+",
    engagement: "3% – 6%",
    audienceFrom: "Silchar, Assam, India",
    image: `${supabaseBase}Kaushik%20Kalita.png`,
  },
  {
    name: "Shamima",
    platform: "Facebook",
    followers: "41,000",
    reach: "150,000+",
    engagement: "3% – 6%",
    audienceFrom: "Karimganj, Assam, India",
    image: `${supabaseBase}shamima.jpg`,
  },
  {
    name: "Funny Silchari (Roni)",
    platform: "Facebook",
    followers: "197,000",
    reach: "500,000+",
    engagement: "2% – 5%",
    audienceFrom: "Silchar, Cachar District, Assam, India",
    image: `${supabaseBase}roni%20bhai.png`,
  },
];
