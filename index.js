// ১. আপনার কাছে 1000 টাকা আছে।
// আপনি একটি মোবাইল কভার কিনলেন 350 টাকা এবং একটি হেডফোন কিনলেন 499 টাকা।
// কত টাকা অবশিষ্ট আছে তা বের করুন।

const Ihv = 1000;
const MobPrice = 350;
const HeadPrice = 499;

var TotalBuy = MobPrice + HeadPrice;
var Remaining = Ihv - TotalBuy;

console.log("1. Remaining = " + Remaining)



// ২. একটি দোকানে আপেলের দাম প্রতি কেজি 120 টাকা।
// আপনি 5 কেজি আপেল কিনলেন।
// মোট কত টাকা দিতে হবে তা বের করুন।

const ApplePrice = 120;
const Purchse = 5;

var TotalBuy = ApplePrice*Purchse;

console.log("2. Total Purchse = " + TotalBuy)


// ৩. আপনার কাছে 2000 টাকা আছে।
// আপনি একটি শার্ট কিনলেন 750 টাকা এবং একটি জুতা কিনলেন 1150 টাকা দিয়ে।
// কত টাকা ফেরত রইল, এবং যদি 100 টাকা ফেরত পাওয়া যায় তবে দোকানদারকে কত টাকা দিতে হবে তা প্রিন্ট করুন।


const Ihave = 2000;
const ShirtPrice = 750;
const ShoePrice = 1150;

var TotalPurchase = ShirtPrice + ShoePrice;
var Remaining = Ihave - TotalPurchase;
var ExchangeRest = 100 - Remaining;

console.log("3.1 Rest = " + Remaining ,",","3.2 ExRemain = " + ExchangeRest)


// ৪. আপনি 3টি চকলেট কিনলেন, প্রতিটি চকলেটের দাম 45 টাকা।
// আপনার কাছে মোট 500 টাকা ছিল।
// মোট দাম বের করুন, তারপর কত টাকা ফেরত রইল তা বের করুন।


const PurChoc = 3;
const ChocPrice = 45;
const Keep = 500;

var TotalEXpense = PurChoc*ChocPrice;
var RemainingMoney = Keep - TotalEXpense;

console.log("4.1 ChocolateExpense = " + TotalEXpense , ",", "4.2 RestKeeping = " + RemainingMoney)


// ৫. একজন বাবার বয়স 50 বছর। তার ছেলের বয়স বাবার বয়সের অর্ধেক।
// তাদের বয়সের যোগফল ও পার্থক্য বের করুন।


const FatherAge = 50;
const SonAge = FatherAge/2;

var SummingAdd = FatherAge + SonAge;
var DIffAge = FatherAge - SonAge;

console.log("5.1 SumOfAge = " + SummingAdd , ",", "5.2 DiffOfAge = " + DIffAge)


// ৬. আলীর বয়স 30 বছর।
// তার বোনের বয়স আলীর বয়সের থেকে 7 বছর কম।
// তাদের বয়সের যোগফল ও পার্থক্য বের করুন।


const AliAge = 30;
const DaughterAge = AliAge - 7;

var Sum = AliAge + DaughterAge;
var Subtract = AliAge - DaughterAge;

console.log("6.1 SumAge = " + Sum ,",", "6.2 DiffAge = " + Subtract)