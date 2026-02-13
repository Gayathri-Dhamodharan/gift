import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Letter = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/10 m-5 overflow-hidden">

      {/* Floating Cute Emojis */}
     
      <div className="absolute top-20 left-40 text-4xl animate-ping">🧸</div>

      <div className="relative">

        {/* Envelope */}
        {!open && (
          <div
            onClick={() => setOpen(true)}
            className="cursor-pointer transform transition duration-500 hover:scale-110"
          >
            <div className="w-80 h-52 bg-pink-300 rounded-b-2xl shadow-2xl relative">

              {/* Envelope Flap */}
              <div className="absolute -top-24 left-0 w-0 h-0 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-b-[100px] border-b-pink-400"></div>

              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                Click to Open 💌
              </div>
            </div>
          </div>
        )}

        {/* Letter Content */}
        {open && (
          <div className="max-w-2xl bg-white p-10 rounded-3xl shadow-2xl text-center animate-fadeIn gap-5">

            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              My Secret Love Letter 💌
            </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
My Love 🐱🧸💖,
<br /><br />  

From our very first meet in school 🏫📚  
to our first official meet at my home 🏠✨,  
every step of our journey has been nothing less than magical 💞🌸
<br /><br /><br />

You may think our first meeting was at my home… 🤍  
but for me, it was much earlier 🥹
<br /><br />


I used to secretly admire you during seminars 🎤✨
I would raise my hand 🙋‍♀️  
just to answer your questions…  
<br /><br />

Maybe that was our very first eye contact 👀✨  
and maybe… that was the silent beginning of our destiny 🌈💫
<br /><br /><br />

In our 10th results, our photos and names appeared together  
on the school banner 🏆📸✨  
standing side by side for everyone to see 💖
<br /><br />

Little that we don't know…  
that just like our photos stood together that day,  
one day we would stand together on our wedding stage 👰🤵💍
<br /><br />

Maybe that banner was not just about results…  
maybe it was God’s first announcement of our forever ❤️✨
<br /><br /><br />

In 12th, we started chatting on Facebook as strangers 📱💬  
but slowly those conversations turned into friendship 🤝💖  
friendship turned into a close relationship 😍🌸  
and that relationship became something our hearts could no longer hide 💕🔥
<br /><br /><br />

The day you visited my house 🏠💞  
was the spark that changed everything ✨  
That was the moment we truly understood  
we could not live without each other 🥺❤️
<br /><br /><br />

On a beautiful Diwali night 🪔🎆  
we confessed our love to each other 💞✨  
That night still glows inside my heart like a forever light 🌙💖
<br /><br /><br />

Even when distance tried to test us —  
you in Chennai 🌆🌊  
and me in Kanchipuram 🏡🌸 —  
our love never weakened.
<br /><br />

In fact, distance only made us stronger 💪❤️  
Closer in hearts 💓  
Deeper in understanding 🤍  
Stronger in commitment 💍
<br /><br /><br />

We faced struggles 😔  
We faced misunderstandings 💭  
We faced tears 😢  
We faced fears…
<br /><br />

But we never faced them alone 🤝💞  
Because it was always you and me against the world 🌍❤️
<br /><br /><br />


From chocolates and pens 🍫🖊️💝  
to temple outings 🛕🌼  
to even our first kiss on the phone 📱😘,  
every memory lives safely inside my heart 💓🗝️
<br /><br /><br />

We may fight sometimes 😤  
We may laugh loudly 😂  
We may argue over silly things 🙈
<br /><br />

But at the end of every single day… 🌅💖  
after every tear and every smile…
<br /><br /><br />

It is always WE 💞🫶✨
<br /><br /><br />

From classmate 📚  
to admirer 🌸  
to friend 🤝  
to lover 💕  
to husband 💍  
to my forever soulmate ❤️👑
<br /><br /><br />

Forever yours 💌🌹  
Always and forever 🐱🧸💖  
My heart belongs to you — today, tomorrow, and always 💞✨
</p>

<p className="flex flex-col  items-end  mt-10">
  <i>with all my love,</i>
  <br />
 <b>Your Chlm 💖</b> 
</p>

          </div>
          
        )}
      </div>
      
    </div>
  );
};

export default Letter;
