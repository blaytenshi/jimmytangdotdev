import React from "react";
import ArticleNavBar from "../components/ArticleNavBar";
import Twemoji from "../components/Twemoji";
import personalWebsite from "../assets/img/personalwebsite.png";
import nuthinbuttime from "../assets/img/nuthinbuttime.gif";

const PersonalWebsiteV1 = () => {

  // Scroll yo'self back to the top if you scrolled down in the previous screen
  window.scrollTo(0, 0);

  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4 px-6 text-gray-700">
      <ArticleNavBar/>
      <article>
        <h2 className="text-4xl font-bold text-red-600">Revisiting CSS and Design after more than a decade</h2>
        <img src={personalWebsite} alt="personal website screenshot" className="py-4"/>
        <section className="py-2">
          <p className="py-2">
            After my stint with Grow Super came to an unfortunate end (thanks COVID-19), it was time to saddle up and
            go out venturing for work once again! Having met so many engineers at Grow, all of them being exceptionally
            talented and supportive, I noticed that I was one of the few without a personal website dedicated to my
            work and projects. I figured that in order to get noticed more by potential employers and recruiters, (and
            under strong encouragement from various colleagues) it was high time to built my own!
          </p>
          <p>Now, I consider myself a Front End Engineer... How hard could it be...<Twemoji emoji="🤔"/>?</p>
        </section>
        <section className="py-2">
          <h4 className="text-xl font-bold">My naivety will be my downfall</h4>
          <p className="py-2">
            As it turns out, quite hard! But not for the reasons you might think...
          </p>
          <p className="py-2">
            Now, of course, I've built websites in the past. But the last time I made one from scratch was back in High
            School. It was written purely in HTML and CSS (like some kinda psychopath) and uploaded through FTP onto a
            Geocities domain. In that version was built with absolutely no regard for web conventions because... well,
            there was none in the late 90s! The web was wild back in the Browser War days!
          </p>
          <p className="py-2">
            "This time, it'll be different. I'll apply the lessons I learnt in my brief stint at Grow!" I said to
            myself, not realising the work that'll be involved.
          </p>
          <h4 className="text-xl font-bold">Choosing my stack...</h4>
          <p className="py-2">
            Whilst at Grow, we were a Vue shop. And although I love Vue for it's structure and simplicity (something
            I'll get
            into in another post), React was my first SPA framework and as idiom goes: "You never forget your first 
            <Twemoji emoji="❤"/>". Besides, Sydney is a React scene so of course it made sense to build my front end
            out of React!
          </p>
          <p className="py-2">
            Hosting and back end were an easy choice too. My experience with Firebase made it the go to solution.
            Deployment through the Firebase CLI is a breeze and hosting is free! I didn't want to have to spin up an AWS
            instance and set up a whole new infrastructure just for a simple portfolio site because A) I didn't have
            time to learn it and B) That'd be like taking a sledgehammer to tap a nail into the wall.
          </p>
          <p className="py-2">
            The final piece of the puzzle was of course, CSS and design. At Grow, our fender's team centered around
            TailwindCSS for styling. Tailwind is a brilliant utility-first CSS framework that greatly simplifies the CSS
            that you
            have to write. However, when it came to me and my own abilities, this was where I ran into the two
            challenges:
          </p>
          <ol className="px-4 py-2">
            <li>a) You should know what you're trying to build, i.e., have a design!</li>
            <li>b) You should know your CSS, so you know which Tailwind classes to apply</li>
          </ol>
          <p className="py-2">
            So the process of designing and building the site was my main challenge. There's nothing like building
            something from scratch to unveil to yourself where all your own deficiencies are. It's why I love greenfield
            projects.
          </p>
          <p className="py-2">
            My initial problem was CSS (shock horror). Crazy right? A front end dev that doesn't know CSS?! Not
            really, left over knowledge from halcyon days meant my knowledge was just horribly out of date. And though
            I had heard of flex boxes, grids, responsive designs, svgs, etc, I honestly had never had to use them due
            to the abundance of CSS Framework libraries out there that can help you kick off a project without
            meticulously having to design a dropdown component or a date component from scratch. That or the
            organisation you're working for already has a design system in place so you never had to craft your
            components from scratch.
          </p>
          <p className="py-2">
            But now, the days of relying on an npm import was over. It was time to facing my problem head on.
          </p>
          <div className="py-2">
            <img src={nuthinbuttime} className="block mx-auto" alt="Vin Diesel Fast and Furious I got nothing but time" />
          </div>
          <h4 className="text-xl font-bold">I got nuthin' but time...</h4>
          <p className="py-2">
            It was frustrating at first, updating my CSS knowledge. But I had nuthin but time. I fell into an endless 
            loop of designing a particular part of the app, figure out what CSS I'm missing, learn it, find the 
            tailwind equivalent and applying it. Only to realise either it's not the most effective solution or the 
            page doesn't look right when you view it on a phone or the colour contrast doesn't work with a11y
            standards... And you start the process all over again.
          </p>
          <p className="py-2">
            But you get better each time you go though that iteration. Knowledge grows. I started looking at tangential
            stuff like smooth scrolling to sections, CSS transitions, building media queries... all of which made me
            realise: I have terrible design sense.
          </p>
          <p className="py-2">
            Just for the record, the layout of the site changed at least three times and it took me at least a week to
            decide on a font and colour pallet only to realise red is not a great colour for the colourblind lol. The
            layouts that I had drawn out on my notebook just didn't translate well to the screen and so I ended up
            designing alot of it on the fly. It was chaos because the design kept changing and thus the CSS had to be
            re-written, adding to that endless loop I previously mentioned.
          </p>
          <h4 className="text-xl font-bold">Lessons learnt</h4>
          <p className="py-2">
            There is no excluding fundamentals. Whether it be a programming language or good ole CSS. Tailwind did
            alot
            of heavy lifting this time but you need fundamentals in order to know how to effectively apply tools and
            frameworks that provide abstractions for you.
          </p>
          <p className="py-2">
            Having a good basic sense of design matters. Before, at Grow, there was a little bookshelf corner near one
            of the couches. There was a book I always used as a heatshield to stop my Macbook from roasting my legs.
            It was called 'The Universal Principles of Design'. I didn't think I needed it back then but guess who's
            got it on their iPad now?
          </p>
          <p className="py-2">
            Finally, design and learning takes time. Even for something as simple as a single column website layout.
            Even for something that's as universal as CSS. Take the time to learn it. The intricacies and the nuances
            are beautiful and interesting once you learn to appreciate it.
          </p>
          <h4 className="text-xl font-bold">
            Still only version 1...
          </h4>
          <p className="py-2">
            Like I've said in the my Origin Story section, this website is a place for me to tinker and it is far from
            done. I've yet to integrate a blogging system, there are still performance improvements to be had through
            code-splitting, accessiblity is not great and I'm not entirely happy with the basic layout. Definitely
            would love to tinker more with stuff like CSS animations, parallax effects and more interesting design
            elements so stay tuned!
          </p>
        </section>
        <section className="py-2">
          <h3 className="text-2xl font-bold">Technology</h3>
          <p className="py-2">
            React, Firebase, Tailwind CSS, CSS
          </p>
        </section>
      </article>
    </div>
  )
};

export default PersonalWebsiteV1;